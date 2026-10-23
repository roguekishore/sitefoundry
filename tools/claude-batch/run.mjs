// A batch: runs /recreate-site for the sites in a list, one `claude -p` session per site, up to
// --jobs at a time, unattended. Sites with no capture yet are captured first (precapture.mjs, run
// from here, all of them before the first session starts), so this machine must reach those sites;
// sites captured in advance need no network. Uses the account claude is logged in with (run
// `claude` once and log in).
//
//   node tools/claude-batch/run.mjs <sites.json> [--jobs 6] [--only huly,linear] [--model claude-opus-5-5]
//                                   [--limit 10] [--effort high] [--max-hours 5] [--limit-wait 30] [--again] [--dry-run]
//
// In order:
//  1. Checks claude (and that it's logged in), Playwright's Chromium (the skill's verify step
//     captures our pages) and that this isn't root (claude refuses --dangerously-skip-permissions
//     as root).
//  2. Starts one gallery on port 4400 for all sessions, unless one already answers there.
//  3. Captures the sites that will run and have no capture yet (not done, needs-you or skip),
//     (the first --limit of them) all together, before any session starts. A site whose capture fails is left out.
//  4. Keeps --jobs sessions going, and starts no more than --limit sites in all (default: no
//     limit; a site left out or stopped at "needs-you" before it ran doesn't count). Each takes the next site from the list, in order (read again
//     each time, so sites added meanwhile are picked up, and captured when their turn comes):
//     not done, needs-you or skip (--again: done and needs-you too). It runs
//     `claude -p "/recreate-site <url> <slug> <pages>" --dangerously-skip-permissions` with
//     --model and --effort (subagents and Claude Code's own helper calls get the same model), and
//     an added system prompt: nobody is there to answer; pnpm add and git commits go through
//     serial.mjs; no registry build. If the usage limit is hit, the session waits (until the reset
//     time when claude gives one, else --limit-wait minutes) and resumes. Other failures resume it
//     up to twice. --max-hours caps each site. Two sites in a row failing for other reasons
//     stops new sites from starting.
//  5. Writes each site's status into the list as it goes: running, waiting-for-limit, then done,
//     needs-you (read its report), failed, timed-out or stopped.
//  6. When every session has finished, builds the registry once and commits it. (While sites are
//     half-built, `pnpm build:registry` fails on their items, so sessions don't run it.)
// Logs and each site's final report go to tools/claude-batch/runs/.
import { spawn, spawnSync } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readSites, referenceDir, updateSite } from "./sites.mjs";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const RUNS = join(REPO, "tools/claude-batch/runs");
const GALLERY = "http://localhost:4400/preview.html";
const [CLAUDE, ...CLAUDE_ARGS] = (process.env.CLAUDE_BIN ?? "claude").split(" "); // another install: CLAUDE_BIN=/path/to/claude

const args = process.argv.slice(2);
const valued = ["jobs", "limit", "only", "model", "effort", "max-hours", "limit-wait"];
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const listFile = args.find((a, i) => !a.startsWith("--") && !valued.includes(args[i - 1]?.slice(2)));
if (!listFile) {
  console.error(
    "usage: node tools/claude-batch/run.mjs <sites.json> [--jobs 6] [--limit 10] [--only slug,slug] [--model claude-opus-5-5] [--effort high] [--max-hours 5] [--limit-wait 30] [--again] [--dry-run]",
  );
  process.exit(1);
}
const jobs = Math.max(1, Number(flag("jobs", 1)));
const only = flag("only")?.split(",");
const model = flag("model", "claude-opus-5-5");
const effort = flag("effort", "high");
const maxHours = Number(flag("max-hours", 5));
const limit = flag("limit") === undefined ? Infinity : Math.max(1, Number(flag("limit")));
const limitWaitMin = Number(flag("limit-wait", 30));
const again = args.includes("--again");
const dryRun = args.includes("--dry-run");

const MAX_RESUMES = 2; // after failures other than the usage limit
const MAX_LIMIT_WAIT_H = 30; // per site, in total
const FINISHED = ["done", "needs-you"]; // run again only with --again
const CUT_OFF = ["failed", "stopped", "waiting-for-limit"]; // with a saved session: resumed where it stopped
// Every model Claude Code would pick by itself is this one too: subagents, and its helper calls.
const CLAUDE_ENV = {
  ...process.env,
  CLAUDE_CODE_SUBAGENT_MODEL: model,
  ANTHROPIC_DEFAULT_HAIKU_MODEL: model,
  ANTHROPIC_SMALL_FAST_MODEL: model,
  CLAUDE_CODE_EFFORT_LEVEL: effort,
};

// Said to every session as an added system prompt. The skill itself stays the instructions.
const UNATTENDED = [
  "This run is unattended: nobody will read anything you write until the whole batch has finished, so never wait for an answer.",
  "Where the skill says to ask the user, don't guess: stop, and put what needs deciding in your report.",
  "Choices the skill leaves to your judgement, make them yourself and write them down in NOTES.md.",
  "The original site was captured in advance (foundry/sites/<slug>/_reference/precapture.json) and this machine may not reach it: don't open it.",
  "The gallery is already running at http://localhost:4400: don't start or stop it.",
  "Other sessions are recreating other sites in this same repo at the same time. Change only your own paths, and leave theirs alone even when they look broken.",
  'Run every `pnpm add` and every git commit (with its `git add`) through `node tools/claude-batch/serial.mjs "<command>"`, which waits for its turn, e.g. node tools/claude-batch/serial.mjs "git add -- foundry/sites/x foundry/themes/x && git commit -m \'x: theme\' -- foundry/sites/x foundry/themes/x".',
  "This replaces the skill's registry steps: don't run `pnpm build:registry` and don't make the `registry: build` commit (it fails on the other sites' unfinished items); the batch builds the registry once all sessions are done.",
  "`pnpm check <your items>` refreshes the @foundry path map, and must report 0 errors for your items. Your last commit must leave nothing of yours uncommitted.",
].join(" ");

const say = (msg) => console.log(`[${new Date().toTimeString().slice(0, 5)}] ${msg}`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const now = () => new Date().toISOString();
const rel = (p) => relative(REPO, p).replaceAll("\\", "/");
const git = (...a) => spawnSync("git", a, { cwd: REPO, encoding: "utf8" }).stdout.trim();
mkdirSync(RUNS, { recursive: true });

// ---------- 1. checks ----------

const initial = readSites(listFile).filter((s) => !only || only.includes(s.slug));
for (const site of initial) {
  const skip = skipReason(site);
  say(`${site.slug.padEnd(20)} ${site.status.padEnd(16)} ${skip ? `skip: ${skip}` : `${needsCapture(site) ? "capture, then " : ""}run: ${prompt(site)}`}`);
}
say(`${jobs} at a time${limit === Infinity ? "" : `, ${limit} sites at most`} · ${model} · effort ${effort}`);
if (process.getuid?.() === 0) fail("running as root: claude refuses --dangerously-skip-permissions as root. Run as a normal user.");
const version = spawnSync([CLAUDE, ...CLAUDE_ARGS, "--version"].join(" "), { encoding: "utf8", shell: true });
if (version.status !== 0) fail(`"${CLAUDE} --version" failed: is Claude Code installed?`);
say(`claude ${version.stdout.trim()}`);
try {
  const { chromium } = createRequire(join(REPO, "package.json"))("playwright");
  if (!existsSync(chromium.executablePath())) throw new Error();
} catch {
  fail("Playwright's Chromium is missing (the skill's verify step needs it): pnpm exec playwright install --with-deps chromium");
}
if (dryRun || !initial.some((s) => !skipReason(s))) process.exit(0);

// Captures first: the sites that will run (at most --limit) and have none yet, together, before any session starts.
const toCapture = initial.filter((s) => !skipReason(s)).slice(0, limit).filter(needsCapture).map((s) => s.slug);
if (toCapture.length) {
  say(`capturing ${toCapture.join(", ")} before the recreation starts`);
  await captureSites(toCapture);
}

// A one-turn session: is claude logged in, can it use the model, is the usage limit not reached?
const ping = spawnSync(CLAUDE, [...CLAUDE_ARGS, "-p", "Reply with the word OK and nothing else.", "--max-turns", "1", "--model", model], {
  cwd: REPO,
  env: CLAUDE_ENV,
  encoding: "utf8",
  timeout: 120_000,
});
if (ping.status !== 0) fail(`a test session failed. Run \`claude\` once and log in (or wait for the usage limit to reset). It said: ${(ping.stdout + ping.stderr).trim().slice(0, 400)}`);
say("claude is logged in");

// ---------- 2. the gallery ----------

let gallery;
const children = new Set(); // the running claude sessions
const running = new Set(); // their slugs
let stopping = false;
const stop = () => {
  for (const child of children) child.kill("SIGTERM");
  for (const slug of running) updateSite(listFile, slug, { status: "stopped", finishedAt: now(), until: undefined, note: "the batch was stopped while this site ran; the next batch starts it again" });
  if (gallery) {
    try {
      // pnpm, and the vite under it: the whole process group (Linux) or tree (Windows)
      if (process.platform === "win32") spawnSync("taskkill", ["/pid", String(gallery.pid), "/T", "/F"], { stdio: "ignore" });
      else process.kill(-gallery.pid, "SIGTERM");
    } catch {}
  }
};
process.on("SIGINT", () => (stop(), process.exit(130)));
process.on("SIGTERM", () => (stop(), process.exit(143)));

if (await answers(GALLERY)) say("gallery already running on 4400");
else {
  const log = createWriteStream(join(RUNS, "gallery.log"), { flags: "a" });
  gallery = spawn("pnpm gallery", { cwd: REPO, detached: process.platform !== "win32", shell: true });
  gallery.stdout.pipe(log);
  gallery.stderr.pipe(log);
  for (let i = 0; i < 90 && !(await answers(GALLERY)); i++) await sleep(1000);
  if (!(await answers(GALLERY))) (stop(), fail("the gallery didn't start in 90 s: see tools/claude-batch/runs/gallery.log"));
  say("gallery started on 4400");
}

// ---------- 3. the sites, --jobs at a time ----------

const attempted = new Set();
const outcomes = [];
let failuresInARow = 0;
let started = 0; // sites taken so far, against --limit

/** The next site to run, in list order. Read again every time: sites added meanwhile are picked up. */
function next() {
  while (true) {
    if (started >= limit) return null;
    const site = readSites(listFile).find((s) => (!only || only.includes(s.slug)) && !attempted.has(s.slug) && !skipReason(s));
    if (!site) return null;
    attempted.add(site.slug);
    started++;
    const ref = referenceDir(REPO, site.slug);
    if (readdirSync(dirname(ref)).some((f) => f !== "_reference") && !site.pages.length && !FINISHED.includes(site.status) && !(CUT_OFF.includes(site.status) && site.sessionId)) {
      // The skill would stop and ask whether to continue that recreation or use another slug.
      updateSite(listFile, site.slug, { status: "needs-you", note: `foundry/sites/${site.slug}/ is already built and no pages are named: continue it, or give this site another slug` });
      say(`${site.slug}: needs-you (already built, no pages named)`);
      started--; // not recreated: doesn't count against --limit
      continue;
    }
    return site;
  }
}

async function worker() {
  for (let site; !stopping && (site = next()); ) {
    if (needsCapture(site)) {
      // Added to the list after the batch started.
      say(`${site.slug}: capturing first`);
      await captureSites([site.slug]);
      if (needsCapture(site)) {
        say(`${site.slug}: capture failed, left out (its status in the list says so)`);
        started--;
        continue;
      }
    }
    running.add(site.slug);
    const outcome = await runSite(site);
    running.delete(site.slug);
    outcomes.push(outcome);
    if (outcome.status === "done" || outcome.status === "needs-you") failuresInARow = 0;
    else if (++failuresInARow >= 2 && !stopping) {
      stopping = true;
      say("two sites in a row failed: starting no more sites (see their logs); the running ones finish");
    }
  }
}
// Started a few seconds apart, so their first steps don't all land at once.
await Promise.all(Array.from({ length: jobs }, (_, i) => sleep(i * 5000).then(worker)));

// ---------- 5. the registry, once ----------

const built = outcomes.filter((o) => o.status === "done" || o.status === "needs-you").map((o) => o.slug);
if (built.length) buildRegistry(built);
stop();

console.log("\n=== this batch");
for (const o of outcomes) console.log(`  ${o.slug.padEnd(20)} ${o.status.padEnd(12)} ${String(o.minutes).padStart(4)} min  ${String(o.turns).padStart(4)} turns`);
console.log(`\nStatus of every site: ${listFile} · reports and logs: tools/claude-batch/runs/`);
process.exit(outcomes.every((o) => o.status === "done") ? 0 : 1);

// ---------- helpers ----------

function fail(msg) {
  console.error(`[claude-batch] ${msg}`);
  process.exit(1);
}

function prompt(site) {
  return `/recreate-site ${site.url} ${site.slug} ${site.pages.join(" ")}`.trim();
}

function skipReason(site) {
  if (site.status === "skip") return 'status "skip"';
  if (FINISHED.includes(site.status) && !again) return `already ${site.status} (--again to redo)`;
  return null;
}

function needsCapture(site) {
  return !existsSync(join(referenceDir(REPO, site.slug), "precapture.json"));
}

/** precapture.mjs for these sites (and their pages), its output on ours. A failed capture sets "capture-failed" in the list. */
function captureSites(slugs) {
  return new Promise((done) => {
    const child = spawn(process.execPath, [join(REPO, "tools/claude-batch/precapture.mjs"), listFile, "--only", slugs.join(",")], { cwd: REPO, stdio: "inherit" });
    children.add(child);
    const end = () => (children.delete(child), done());
    child.on("error", end);
    child.on("close", end);
  });
}

async function answers(url) {
  try {
    return (await fetch(url, { signal: AbortSignal.timeout(3000) })).ok;
  } catch {
    return false;
  }
}

/** `pnpm build:registry` and its commit, after every session has finished. */
function buildRegistry(slugs) {
  say("building the registry");
  const serial = (cmd) => spawnSync(process.execPath, [join(REPO, "tools/claude-batch/serial.mjs"), cmd], { cwd: REPO, encoding: "utf8" });
  const build = serial("pnpm build:registry");
  const output = `${build.stdout}\n${build.stderr}`;
  writeFileSync(join(RUNS, "registry.log"), output);
  if (build.status !== 0) {
    say("the registry didn't build: see tools/claude-batch/runs/registry.log");
    for (const slug of slugs) {
      if (output.includes(`foundry/sites/${slug}/`) || output.includes(`foundry/themes/${slug}/`))
        updateSite(listFile, slug, { status: "needs-you", note: "the registry build failed on its items: see tools/claude-batch/runs/registry.log" });
    }
    return;
  }
  const paths = "public/r foundry.paths.json tsconfig.paths.json";
  const before = git("rev-parse", "HEAD");
  const commit = serial(`git add -- ${paths} && (git diff --cached --quiet -- ${paths} || git commit -m "registry: build ${slugs.join(", ")}" -- ${paths})`);
  if (commit.status !== 0) say(`the registry commit failed: ${commit.stderr.trim().slice(0, 300)}`);
  else say(git("rev-parse", "HEAD") === before ? "registry built: nothing changed in it" : `registry built and committed (${slugs.join(", ")})`);
}

/** Runs one site to the end: resumes after the usage limit and after failures. */
async function runSite(site) {
  const runStart = new Date();
  const stamp = runStart.toISOString().slice(0, 16).replace(/[:T]/g, "-");
  const log = join(RUNS, `${site.slug}-${stamp}.jsonl`);
  const total = { turns: 0, ms: 0 };
  const deadline = Date.now() + maxHours * 3600_000;
  let sessionId = CUT_OFF.includes(site.status) ? site.sessionId : undefined; // cut off in an earlier batch
  let resumes = 0;
  let waitedMs = 0;
  let last;
  say(`=== ${site.slug}: ${prompt(site)}`);
  updateSite(listFile, site.slug, { status: "running", startedAt: runStart.toISOString(), finishedAt: undefined, log: rel(log), note: undefined });

  while (true) {
    const resume = sessionId ? ["--resume", sessionId] : [];
    const text = sessionId
      ? `Carry on with the /recreate-site run for ${site.slug} from where it stopped: check what is on disk and in git, then finish every remaining step of the skill, ending with its commits and its report.`
      : prompt(site);
    // Waiting for the usage limit doesn't count against --max-hours.
    last = await runClaude(site, [...resume, "-p", text], log, deadline + waitedMs);
    sessionId = last.sessionId ?? sessionId;
    total.turns += last.result?.num_turns ?? 0;
    total.ms += last.ms;

    if (last.result && last.result.subtype === "success" && !last.result.is_error) break;

    const said = `${last.result?.result ?? ""}\n${last.stderrTail}`;
    if (/usage limit|session limit|weekly limit|limit reached|hit your [\w ]*limit|rate.?limit|\b429\b|overloaded/i.test(said) && waitedMs < MAX_LIMIT_WAIT_H * 3600_000) {
      const reset = said.match(/\|(\d{10})\b/); // "…usage limit reached|<unix time of the reset>"
      const wait = reset ? Math.max(60_000, Number(reset[1]) * 1000 - Date.now() + 120_000) : limitWaitMin * 60_000;
      say(`${site.slug}: usage limit; waiting ${Math.round(wait / 60_000)} min, then resuming`);
      updateSite(listFile, site.slug, { status: "waiting-for-limit", until: new Date(Date.now() + wait).toISOString() });
      await sleep(wait);
      updateSite(listFile, site.slug, { status: "running", until: undefined });
      waitedMs += wait;
      continue;
    }
    if (last.timedOut) break;
    if (resumes++ >= MAX_RESUMES) break;
    say(`${site.slug}: failed (${last.result?.subtype ?? `exit ${last.code}`}); resuming, attempt ${resumes} of ${MAX_RESUMES}`);
  }

  const succeeded = last.result && last.result.subtype === "success" && !last.result.is_error;
  const report = join(RUNS, `${site.slug}.report.md`);
  if (last.result?.result) writeFileSync(report, last.result.result + "\n");
  // Done: the site's work is committed, during this run, and nothing of it is left uncommitted.
  const sitePaths = [`foundry/sites/${site.slug}`, `foundry/themes/${site.slug}`];
  const committed = git("log", "--oneline", "-1", `--since=${runStart.toISOString()}`, "--", ...sitePaths);
  const uncommitted = git("status", "--porcelain", "--", ...sitePaths);
  const status = !succeeded ? (last.timedOut ? "timed-out" : "failed") : committed && !uncommitted ? "done" : "needs-you";
  const note = {
    "needs-you": committed ? "finished with work left uncommitted: read the report" : "finished without committing anything: read the report",
    failed: `failed: ${(last.result?.result ?? last.stderrTail).trim().slice(-300) || `exit ${last.code}`}`,
    "timed-out": `stopped after --max-hours ${maxHours}`,
  }[status];
  const outcome = { slug: site.slug, status, minutes: Math.round(total.ms / 60_000), turns: total.turns };
  updateSite(listFile, site.slug, {
    status,
    finishedAt: now(),
    minutes: outcome.minutes,
    turns: outcome.turns,
    model: `${model} (${effort})`,
    sessionId, // claude --resume <sessionId> opens it
    report: existsSync(report) ? rel(report) : undefined,
    note,
  });
  say(`${site.slug}: ${status}${note ? ` (${note.slice(0, 120)})` : ""}`);
  return outcome;
}

/** One claude -p invocation, its stream-json appended to the log. Prints a line every 10 min. */
function runClaude(site, promptArgs, log, deadline) {
  const argv = [
    ...CLAUDE_ARGS,
    ...promptArgs,
    "--dangerously-skip-permissions",
    "--model", model,
    "--effort", effort,
    "--output-format", "stream-json",
    "--verbose",
    "--append-system-prompt", UNATTENDED,
  ];
  return new Promise((done) => {
    const out = createWriteStream(log, { flags: "a" });
    const started = Date.now();
    const child = spawn(CLAUDE, argv, { cwd: REPO, env: CLAUDE_ENV, stdio: ["ignore", "pipe", "pipe"] });
    children.add(child);
    let sessionId, result, buffer = "", stderrTail = "", tools = 0, lastTool = "";
    child.stdout.on("data", (chunk) => {
      out.write(chunk);
      buffer += chunk;
      const lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        let m;
        try {
          m = JSON.parse(line);
        } catch {
          continue;
        }
        if (m.type === "system" && m.subtype === "init") sessionId = m.session_id;
        if (m.type === "result") result = m;
        if (m.type === "assistant") for (const c of m.message?.content ?? []) if (c.type === "tool_use") (tools++, (lastTool = c.name));
      }
    });
    child.stderr.on("data", (chunk) => {
      out.write(JSON.stringify({ type: "stderr", text: String(chunk) }) + "\n");
      stderrTail = (stderrTail + chunk).slice(-2000);
    });
    const beat = setInterval(() => say(`${site.slug}: ${Math.round((Date.now() - started) / 60_000)} min, ${tools} tool calls, last ${lastTool || "-"}`), 10 * 60_000);
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      say(`${site.slug}: over --max-hours, stopping it`);
      child.kill("SIGTERM");
    }, Math.max(0, deadline - Date.now()));
    let finished = false;
    const finish = (code, error) => {
      if (finished) return; // "error" can be followed by "close"
      finished = true;
      clearInterval(beat);
      clearTimeout(timer);
      children.delete(child);
      out.end();
      done({ code, sessionId, result, timedOut, ms: Date.now() - started, stderrTail: stderrTail + (error ? `\n${error.message}` : "") });
    };
    child.on("error", (e) => finish(-1, e));
    child.on("close", (code) => finish(code));
  });
}
