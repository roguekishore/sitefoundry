// Runs /recreate-site with the Gemini CLI, unattended, on a git branch of its own, and
// counts what it costs while it runs.
//
//   node tools/gemini-run/run.mjs <url> <slug> [--model gemini-4-argon] [--max-usd 15] [--max-hours 8]
//   node tools/gemini-run/run.mjs --smoke [--model gemini-4-argon]     a few tiny turns through the CLI
//
// In order:
//  1. Refuses to start if the Gemini CLI is set to the Priority or Flex tier.
//  2. Makes a git worktree ../SITEFOUNDRY-runs/<slug> on branch gemini/<slug> and installs
//     packages there, so --yolo can't touch main.
//  3. Starts a local forwarder. The CLI talks to it instead of Google; it sends each request on to
//     Vertex's global endpoint (Argon isn't reachable through the API key's automatic region),
//     removes any tier header (Standard only), and adds up tokens and cost. At --max-usd it stops
//     the run.
//  4. Starts that worktree's gallery on port 4410 (4400 is left for yours).
//  5. Runs `gemini --yolo` headless with the skill as the prompt. If it crashes (a network error
//     can end a headless run), it starts again up to 3 times and continues from what's on disk.
//  6. Prints tokens, cost and the branch's commits. Everything is logged in tools/gemini-run/runs/.
import { spawn, spawnSync } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import http from "node:http";
import https from "node:https";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// ---------- settings ----------

const PROJECT = "1023705997493"; // the Google Cloud project behind the API key in ~/.gemini/.env
const LOCATION = "global";
const GALLERY_PORT = 4410;

// USD per 1M tokens, Standard tier, as listed on 2026-10-18.
const PRICES = {
  "gemini-4-argon": { input: 2.0, cached: 0.1, output: 10.0 }, // introductory until 2026-11-30, then 4 / 0.20 / 20
  "gemini-3.8-flash": { input: 0.75, cached: 0.07, output: 3.75 }, // promotional until 2026-12-31, then double
};
// Models not listed (the CLI's own helper calls) are priced as Argon, so the cap errs on the safe side.
const FALLBACK_PRICE = PRICES["gemini-4-argon"];

// ---------- arguments ----------

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const smoke = args.includes("--smoke");
const model = flag("model", "gemini-4-argon");
const maxUsd = Number(flag("max-usd", 15));
const maxHours = Number(flag("max-hours", 8));
const [url, slug] = args.filter((a, i) => !a.startsWith("--") && !args[i - 1]?.startsWith("--"));

if (!smoke && (!url || !slug)) {
  console.error("usage: node tools/gemini-run/run.mjs <url> <slug> [--model gemini-4-argon] [--max-usd 15] [--max-hours 8]");
  console.error("       node tools/gemini-run/run.mjs --smoke [--model gemini-4-argon]");
  process.exit(1);
}

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const RUNS = join(REPO, "tools/gemini-run/runs");
mkdirSync(RUNS, { recursive: true });
const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
const runName = smoke ? `smoke-${stamp}` : `${slug}-${stamp}`;
const usageLog = join(RUNS, `${runName}.usage.jsonl`);
const outputLog = join(RUNS, `${runName}.output.log`);

const say = (msg) => console.error(`[gemini-run] ${msg}`);
const fail = (msg) => {
  say(msg);
  process.exit(1);
};

// ---------- 1. tier check ----------

const settingsFile = join(homedir(), ".gemini/settings.json");
const settings = existsSync(settingsFile) ? JSON.parse(readFileSync(settingsFile, "utf8")) : {};
const tier = settings.billing?.vertexAi?.sharedRequestType;
if (tier) fail(`~/.gemini/settings.json sets billing.vertexAi.sharedRequestType = "${tier}". Remove it for a Standard run.`);

const npmRoot = spawnSync("npm root -g", { shell: true, encoding: "utf8" }).stdout.trim();
const geminiJs = join(npmRoot, "@google/gemini-cli/bundle/gemini.js");
if (!existsSync(geminiJs)) fail(`Gemini CLI not found at ${geminiJs}`);

// ---------- 3. the forwarder ----------

const totals = { calls: 0, errors: 0, input: 0, cached: 0, output: 0, usd: 0, tiers: {}, models: {} };
let stopRun = () => {};
let stopped = false; // set when the run is stopped on purpose (cap, time limit, Ctrl+C), so it isn't restarted
const stop = () => {
  stopped = true;
  stopRun();
};

/** The usage block of a response: the last one in a stream, or the only one in a plain reply. */
function usageOf(body) {
  const chunks = [];
  if (/^data:/m.test(body)) {
    for (const line of body.split(/\r?\n/)) {
      if (!line.startsWith("data:")) continue;
      try {
        chunks.push(JSON.parse(line.slice(5)));
      } catch {
        // a partial line; the next one carries the usage again
      }
    }
  } else {
    try {
      const json = JSON.parse(body);
      chunks.push(...(Array.isArray(json) ? json : [json]));
    } catch {
      return undefined;
    }
  }
  return chunks.reverse().find((c) => c?.usageMetadata)?.usageMetadata;
}

function record(path, status, body) {
  const name = path.match(/models\/([^:/?]+)/)?.[1] ?? "?";
  if (status >= 400) totals.errors++;
  const u = usageOf(body);
  if (!u) return;
  const price = PRICES[name] ?? FALLBACK_PRICE;
  const cached = u.cachedContentTokenCount ?? 0;
  const input = (u.promptTokenCount ?? 0) + (u.toolUsePromptTokenCount ?? 0) - cached;
  const output = (u.candidatesTokenCount ?? 0) + (u.thoughtsTokenCount ?? 0);
  const usd = (input * price.input + cached * price.cached + output * price.output) / 1e6;

  totals.calls++;
  totals.input += input;
  totals.cached += cached;
  totals.output += output;
  totals.usd += usd;
  totals.tiers[u.trafficType ?? "?"] = (totals.tiers[u.trafficType ?? "?"] ?? 0) + 1;
  totals.models[name] = (totals.models[name] ?? 0) + 1;
  appendFileSync(usageLog, JSON.stringify({ time: new Date().toISOString(), model: name, status, tier: u.trafficType, input, cached, output, usd: +usd.toFixed(5) }) + "\n");
  if (totals.calls % 10 === 0) say(`${totals.calls} calls · $${totals.usd.toFixed(2)} so far`);
  if (totals.usd >= maxUsd) {
    say(`spending cap of $${maxUsd} reached: stopping`);
    stop();
  }
}

const forwarder = http.createServer((req, res) => {
  // The CLI asks for /v1/publishers/...; Vertex's global endpoint wants /v1/projects/<p>/locations/global/publishers/...
  const path = req.url.replace(/^\/(v1[a-z0-9]*)\/publishers\//, `/$1/projects/${PROJECT}/locations/${LOCATION}/publishers/`);
  const headers = { ...req.headers };
  delete headers.host;
  delete headers.connection;
  delete headers["accept-encoding"]; // plain text back, so the usage can be read
  delete headers["x-vertex-ai-llm-shared-request-type"]; // Standard tier only
  delete headers["x-vertex-ai-llm-request-type"];

  const upstream = https.request({ host: "aiplatform.googleapis.com", path, method: req.method, headers }, (up) => {
    // Connection-level headers belong to the Google connection, not to ours.
    const { connection, "keep-alive": _keepAlive, "transfer-encoding": _te, ...upHeaders } = up.headers;
    res.writeHead(up.statusCode, upHeaders);
    let body = "";
    up.setEncoding("utf8");
    up.on("data", (chunk) => {
      body += chunk;
      res.write(chunk);
    });
    up.on("end", () => {
      res.end();
      record(path, up.statusCode, body);
    });
  });
  upstream.on("error", (e) => {
    totals.errors++;
    res.writeHead(502, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: { code: 502, message: `gemini-run forwarder: ${e.message}` } }));
  });
  req.pipe(upstream);
});
// Node closes idle connections after 5 s by default. The CLI reuses its connection between
// turns and can send just as it closes ("fetch failed sending request"), so keep them open.
forwarder.keepAliveTimeout = 3600e3;
forwarder.headersTimeout = 3601e3;
forwarder.requestTimeout = 0;
await new Promise((ok) => forwarder.listen(0, "127.0.0.1", ok));
const forwarderUrl = `http://127.0.0.1:${forwarder.address().port}`;

// ---------- helpers for child processes ----------

const children = [];
function killTree(child) {
  if (!child?.pid || child.exitCode !== null) return;
  if (process.platform === "win32") spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  else child.kill("SIGTERM");
}
function cleanup() {
  for (const c of children) killTree(c);
  forwarder.close();
}
process.on("SIGINT", () => {
  say("interrupted");
  stop();
});

function runGemini(cwd, prompt) {
  const out = createWriteStream(outputLog, { flags: "a" });
  const child = spawn(process.execPath, [geminiJs, "-m", model, "--yolo", "--skip-trust", "-p", prompt], {
    cwd,
    env: { ...process.env, GOOGLE_VERTEX_BASE_URL: forwarderUrl },
    stdio: ["ignore", "pipe", "pipe"],
  });
  children.push(child);
  for (const stream of [child.stdout, child.stderr]) {
    stream.on("data", (d) => {
      process.stdout.write(d);
      out.write(d);
    });
  }
  stopRun = () => killTree(child);
  return new Promise((ok) => child.on("exit", (code) => ok(code)));
}

function summary(extra = "") {
  const M = (n) => (n / 1e6).toFixed(2) + "M";
  const lines = [
    "",
    "──────── gemini-run summary ────────",
    `model         ${model}`,
    `calls         ${totals.calls} (errors: ${totals.errors})`,
    `tiers         ${Object.entries(totals.tiers).map(([t, n]) => `${t} ×${n}`).join(", ") || "-"}`,
    `models        ${Object.entries(totals.models).map(([m, n]) => `${m} ×${n}`).join(", ") || "-"}`,
    `input         ${M(totals.input)} new + ${M(totals.cached)} cached`,
    `output        ${M(totals.output)} (thinking included)`,
    `est. cost     $${totals.usd.toFixed(2)}  (Standard list prices; the bill is the final word)`,
    extra,
    `logs          ${usageLog}`,
    `              ${outputLog}`,
  ];
  console.error(lines.filter((l) => l !== "").join("\n"));
  writeFileSync(join(RUNS, `${runName}.summary.json`), JSON.stringify({ model, url, slug, ...totals }, null, 2));
}

// ---------- smoke test ----------

if (smoke) {
  // Several turns with a pause of more than 5 s between them: the case that broke the first real run.
  say(`smoke test: a few turns of ${model} through the forwarder`);
  const code = await runGemini(REPO, 'Run the shell command `node -e "setTimeout(()=>{},7000)"`, then read the file package.json, then reply with the single word OK.');
  cleanup();
  summary(`exit code     ${code}`);
  process.exit(code ?? 1);
}

// ---------- 2. worktree ----------

const git = (cwd, ...a) => spawnSync("git", ["-C", cwd, ...a], { encoding: "utf8" });
if (existsSync(join(REPO, "foundry/sites", slug))) fail(`foundry/sites/${slug} already exists on main; pick another slug.`);

const worktree = resolve(REPO, "..", "SITEFOUNDRY-runs", slug);
const branch = `gemini/${slug}`;
if (!existsSync(worktree)) {
  const branchExists = git(REPO, "rev-parse", "--verify", "--quiet", branch).status === 0;
  const added = branchExists ? git(REPO, "worktree", "add", worktree, branch) : git(REPO, "worktree", "add", "-b", branch, worktree, "main");
  if (added.status !== 0) fail(`git worktree add failed:\n${added.stderr}`);
  say(`worktree ${worktree} on ${branch}`);
} else {
  say(`reusing worktree ${worktree}`);
}
say("installing packages in the worktree…");
const install = spawnSync("pnpm install --frozen-lockfile --prefer-offline", { cwd: worktree, shell: true, stdio: "inherit" });
if (install.status !== 0) fail("pnpm install failed in the worktree");

// ---------- 4. gallery ----------

const portInUse = await new Promise((ok) => {
  http.get(`http://localhost:${GALLERY_PORT}/`, () => ok(true)).on("error", () => ok(false));
});
if (portInUse) fail(`port ${GALLERY_PORT} is already in use; stop whatever is on it first.`);

const gallery = spawn(`pnpm --filter gallery dev --port ${GALLERY_PORT} --strictPort`, { cwd: worktree, shell: true, stdio: "ignore" });
children.push(gallery);
const galleryUp = async () => {
  for (let i = 0; i < 120; i++) {
    const up = await new Promise((ok) => http.get(`http://localhost:${GALLERY_PORT}/`, (r) => ok(r.statusCode === 200)).on("error", () => ok(false)));
    if (up) return true;
    await new Promise((ok) => setTimeout(ok, 1000));
  }
  return false;
};
if (!(await galleryUp())) {
  cleanup();
  fail("the worktree's gallery didn't start");
}
say(`gallery on http://localhost:${GALLERY_PORT}`);

// ---------- 5. the run ----------

const prompt = `You are running unattended: nobody will read or answer questions until you finish.

Recreate ${url} as the slug "${slug}". Read .claude/skills/recreate-site/SKILL.md and follow it exactly, with $ARGUMENTS = "${url} ${slug}".

Differences from the skill, because this run is unattended:
- Never ask. Where the skill says to ask or stop, choose the sensible default, carry on, and list the choice in your final report.
- The gallery is already running at http://localhost:${GALLERY_PORT}. Do not start another one. Wherever the skill says localhost:4400, use localhost:${GALLERY_PORT}.
- Look at the screenshots by reading the PNG files with your file-reading tool.
- This folder is a git worktree on branch ${branch}. Commit as the skill says. Never push, switch branches, or touch files outside this folder.
- Finish with the skill's report.`;

const started = Date.now();
const timer = setTimeout(() => {
  say(`${maxHours} h limit reached: stopping`);
  stop();
}, maxHours * 3600e3);

const resumePrompt = `${prompt}

This is a restart: an earlier attempt on this task stopped partway through. Its work is on disk.
Before doing anything else, look at what exists in foundry/sites/${slug}/, foundry/themes/${slug}/, foundry/sites/${slug}/_reference/NOTES.md and \`git log --oneline main..HEAD\`.
Then continue from where it stopped. Do not redo finished steps, and don't capture the original again if its screenshots are already there.`;

const MAX_RESTARTS = 3;
// A reused worktree that already has this site's files continues rather than starting over.
const hasWork = existsSync(join(worktree, "foundry/sites", slug));
let code;
for (let attempt = 0; attempt <= MAX_RESTARTS; attempt++) {
  const fresh = attempt === 0 && !hasWork;
  say(fresh ? `running ${model} on ${url} (cap $${maxUsd}, ${maxHours} h)` : `${attempt ? `restart ${attempt} of ${MAX_RESTARTS}` : "earlier work found"}: continuing from what's on disk`);
  code = await runGemini(worktree, fresh ? prompt : resumePrompt);
  if (code === 0 || stopped) break;
  say(`gemini exited with code ${code}`);
}
clearTimeout(timer);
cleanup();

const hours = ((Date.now() - started) / 3600e3).toFixed(1);
const commits = git(worktree, "log", "--oneline", `main..${branch}`).stdout.trim() || "(none)";
const left = git(worktree, "status", "--porcelain").stdout.trim();
summary(
  [
    `duration      ${hours} h, exit code ${code}${stopped ? " (stopped on purpose)" : ""}`,
    `branch        ${branch} in ${worktree}`,
    `commits\n${commits.replace(/^/gm, "              ")}`,
    left ? `uncommitted\n${left.replace(/^/gm, "              ")}` : "uncommitted   nothing",
  ].join("\n"),
);
