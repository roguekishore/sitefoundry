// One run, start to end. In order:
//  1. A git worktree <worktrees>/<backend>-<slug> on branch <backend>/<slug>, made from main
//     (origin/main in the cloud), so an agent with every permission can't touch main.
//  2. pnpm install there; with your own prompt, .claude/skills/ is hidden in the worktree.
//  3. That worktree's gallery on its own port (the agent checks its work there).
//  4. The agent (Gemini or Claude) with /recreate-site, or your words, as the prompt. If it
//     crashes it starts again, up to 3 times, continuing from what's on disk. The spending cap,
//     the time limit and Stop end it.
//  5. The run's usage record is committed to the branch (runs/<slug>/…), the branch's gallery is
//     built and sent to the server as a preview, and in the cloud the branch is pushed.
import { copyFileSync, createReadStream, existsSync, mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import http from "node:http";
import { join } from "node:path";
import type { Job, Run, RunState, Usage } from "../shared.ts";
import type { Agent, AgentEnd, AgentRun } from "./agent.ts";
import { claudeAgent } from "./claude.ts";
import { geminiAgent, geminiProblems, type GeminiSettings } from "./gemini.ts";
import { git, killTree, run as runToEnd, start } from "./proc.ts";
import { Reporter } from "./reporter.ts";

export interface RunnerSettings {
  serverUrl: string;
  token: string;
  /** the repository the worktrees are made from */
  repo: string;
  worktrees: string;
  galleryPort: number;
  /** 0.0.0.0 in the cloud, so the preview instance can show the live gallery */
  galleryHost: string;
  /** fetch origin before each run and work from origin/main (cloud) */
  fetch: boolean;
  /** push the branch when the run ends (cloud) */
  push: boolean;
  gemini: GeminiSettings;
}

const MAX_RESTARTS = 3;
const SKILLS = ".claude/skills";

export async function runJob(job: Job, s: RunnerSettings): Promise<void> {
  const run = job.run;
  let stopReason: "user" | "cap" | "time" | "runner" | null = null;
  let current: AgentRun | null = null;
  const stop = (why: NonNullable<typeof stopReason>) => {
    stopReason ??= why;
    current?.stop();
  };
  let finished = false; // once the final state is sent, the server's "stop" only means "it's over"
  const report = new Reporter(s.serverUrl, s.token, run.id, () => {
    if (finished) return;
    report.event("info", "Stop pressed: stopping the agent.");
    stop("user");
  });
  // After Resume, the cap counts what the run spent before too.
  report.usd = run.usage.usd;
  const say = (text: string) => report.event("info", text);
  const fail = async (error: string) => {
    finished = true;
    report.event("error", error);
    report.set({ state: "failed", error });
    await report.close();
  };
  // The runner itself being stopped (the instance switching off) ends the run cleanly.
  const onSignal = () => stop("runner");
  process.once("SIGTERM", onSignal);
  report.set({ state: "running" });
  report.start();

  try {
    const branch = `${run.backend}/${run.slug}`;
    const worktree = join(s.worktrees, `${run.backend}-${run.slug}`);
    report.set({ branch });

    if (run.backend === "gemini") {
      const problems = geminiProblems();
      if (problems.length) return await fail(problems.join(" "));
    }

    // ---------- 1. worktree ----------
    let base = "main";
    if (s.fetch) {
      say("fetching origin");
      const fetched = git(s.repo, "fetch", "--quiet", "origin", "main");
      if (fetched.status !== 0) return await fail(`git fetch failed: ${fetched.stderr.trim()}`);
      git(s.repo, "fetch", "--quiet", "origin", `+refs/heads/${branch}:refs/remotes/origin/${branch}`); // only there after an earlier run
      base = "origin/main";
    }
    git(s.repo, "worktree", "prune");
    const onMain = git(s.repo, "cat-file", "-e", `${base}:foundry/sites/${run.slug}`).status === 0;
    if (onMain && !run.pages.length && !existsSync(worktree)) {
      return await fail(`foundry/sites/${run.slug} already exists on main. Pick another slug, or name pages to add to it.`);
    }
    if (!existsSync(worktree)) {
      mkdirSync(s.worktrees, { recursive: true });
      const has = (ref: string) => git(s.repo, "rev-parse", "--verify", "--quiet", ref).status === 0;
      const added = has(`refs/heads/${branch}`)
        ? git(s.repo, "worktree", "add", worktree, branch)
        : has(`refs/remotes/origin/${branch}`)
          ? git(s.repo, "worktree", "add", "-b", branch, worktree, `origin/${branch}`)
          : git(s.repo, "worktree", "add", "-b", branch, worktree, base);
      if (added.status !== 0) return await fail(`git worktree add failed: ${added.stderr.trim()}`);
      say(`worktree ${worktree} on ${branch}`);
    } else say(`reusing worktree ${worktree}`);
    if (!existsSync(join(worktree, ".geminiignore")) && existsSync(join(s.repo, ".geminiignore"))) copyFileSync(join(s.repo, ".geminiignore"), join(worktree, ".geminiignore"));

    // ---------- 2. packages, and the skill hidden for your own prompt ----------
    say("installing packages in the worktree");
    const install = await runToEnd("pnpm", ["install", "--frozen-lockfile", "--prefer-offline"], worktree);
    if (install.code !== 0) return await fail(`pnpm install failed:\n${install.out.slice(-2000)}`);

    // skip-worktree keeps git from seeing the missing files as a deletion the agent could commit.
    const skillFiles = run.prompt ? git(worktree, "ls-files", "--", SKILLS).stdout.split("\n").filter(Boolean) : [];
    if (skillFiles.length) {
      git(worktree, "update-index", "--skip-worktree", "--", ...skillFiles);
      rmSync(join(worktree, SKILLS), { recursive: true, force: true });
      say(`hid ${SKILLS}/ in the worktree (${skillFiles.length} files): your prompt only`);
    }
    const restoreSkills = () => {
      if (!skillFiles.length) return;
      git(worktree, "update-index", "--no-skip-worktree", "--", ...skillFiles);
      git(worktree, "checkout", "--", SKILLS);
    };

    // ---------- 3. the worktree's gallery ----------
    const galleryUrl = `http://localhost:${s.galleryPort}`;
    if (await answers(galleryUrl)) {
      restoreSkills();
      return await fail(`Port ${s.galleryPort} is already in use; stop whatever is on it first.`);
    }
    const gallery = start("pnpm", ["--filter", "gallery", "dev", "--port", String(s.galleryPort), "--strictPort", "--host", s.galleryHost], { cwd: worktree, stdio: "ignore" });
    let up = false;
    for (let i = 0; i < 120 && !up; i++) {
      up = await answers(galleryUrl);
      if (!up) await new Promise((ok) => setTimeout(ok, 1000));
    }
    if (!up) {
      killTree(gallery);
      restoreSkills();
      return await fail("The worktree's gallery didn't start.");
    }
    say(`gallery on ${galleryUrl}`);

    // ---------- 4. the agent ----------
    const prompt = promptFor(run, branch, s.galleryPort);
    const agent: Agent = run.backend === "claude" ? claudeAgent() : geminiAgent(s.gemini);
    const hasWork = git(worktree, "log", "--oneline", `${base}..${branch}`).stdout.trim() !== "" || git(worktree, "status", "--porcelain").stdout.split("\n").some((l) => l.trim() && l !== "?? .geminiignore");

    const started = Date.now();
    const timer = setTimeout(() => {
      report.event("warn", `${run.maxHours} h limit reached: stopping`);
      stop("time");
    }, run.maxHours * 3600e3);
    const capWatch = setInterval(() => {
      if (report.usd >= run.maxUsd && !stopReason) {
        report.event("warn", `spending cap of $${run.maxUsd} reached ($${report.usd.toFixed(2)}): stopping`);
        stop("cap");
      }
    }, 1000);

    let end: AgentEnd = { code: null };
    let session: string | null = null;
    for (let attempt = run.attempt; attempt <= run.attempt + MAX_RESTARTS; attempt++) {
      if (stopReason) break;
      const fresh = attempt === run.attempt && !hasWork && !job.resume;
      report.set({ attempt });
      say(
        fresh
          ? `running ${run.backend} ${run.model}${run.effort ? ` at ${run.effort}` : ""} on ${run.url} (cap $${run.maxUsd}, ${run.maxHours} h)`
          : attempt === run.attempt
            ? "earlier work found: continuing from what's on disk"
            : `restart ${attempt - run.attempt} of ${MAX_RESTARTS}: continuing from what's on disk`,
      );
      if (attempt > run.attempt) report.set({ note: `restart ${attempt - run.attempt} of ${MAX_RESTARTS}` });
      current = await agent.run({ cwd: worktree, prompt: fresh ? prompt : resumePrompt(prompt, run), model: run.model, effort: run.effort, attempt, session, report });
      if (stopReason) current.stop();
      end = await current.done;
      current = null;
      session = end.session ?? session;
      if (end.code === 0 || stopReason || end.held) break;
      report.event("warn", `${run.backend} exited with code ${end.code}`);
    }
    clearTimeout(timer);
    clearInterval(capWatch);
    killTree(gallery);
    restoreSkills();

    // ---------- 5. record, preview, push ----------
    const state: RunState = end.held ? "held" : stopReason ? "stopped" : end.code === 0 ? "done" : "failed";
    const hours = (Date.now() - started) / 3600e3;
    commitRecord(worktree, run, state, hours, report);
    const commits = git(worktree, "log", "--oneline", `${base}..${branch}`).stdout.trim();
    report.set({ commits });
    say(commits ? `commits on ${branch}:\n${commits}` : "no commits on the branch");

    if (commits && stopReason !== "runner") await sendPreview(worktree, run, s, report);
    if (s.push && commits) {
      const pushed = git(worktree, "push", "--quiet", "origin", `${branch}:refs/heads/${branch}`);
      if (pushed.status === 0) {
        say(`pushed ${branch}`);
        report.set({ note: `pushed ${branch}` });
      } else report.event("warn", `git push failed: ${pushed.stderr.trim()}`);
    }

    finished = true;
    const why: Record<string, string> = { user: "stopped by you", cap: `stopped at the $${run.maxUsd} cap`, time: `stopped at the ${run.maxHours} h limit`, runner: "stopped because the runner was stopped" };
    report.set({
      state,
      error: state === "failed" ? `${run.backend} exited with code ${end.code} after ${MAX_RESTARTS} restarts` : null,
      note: end.held ? `held: ${end.held}` : stopReason ? why[stopReason] : state === "done" ? `done in ${hours.toFixed(1)} h` : undefined,
    });
    const before = run.usage.usd ? ` (with $${run.usage.usd.toFixed(2)} from before the resume)` : "";
    say(`${state}: $${report.usd.toFixed(2)}${before}, ${report.allCalls.length} call${report.allCalls.length === 1 ? "" : "s"} this time, in ${hours.toFixed(1)} h`);
    await report.close();
  } catch (e) {
    await fail(`The runner broke: ${(e as Error).stack ?? e}`);
  } finally {
    process.off("SIGTERM", onSignal);
  }
}

/** Whether something answers HTTP 200 at a URL. */
const answers = (url: string) =>
  new Promise<boolean>((ok) => {
    http.get(url, (r) => {
      r.resume();
      ok(r.statusCode === 200);
    }).on("error", () => ok(false));
  });

// ---------- prompts ----------

function promptFor(run: Run, branch: string, port: number): string {
  const args = [run.url, run.slug, ...run.pages].join(" ");
  if (run.prompt) {
    // Your words, plus only what an unattended run needs; nothing about how to do the work.
    return `${run.prompt}

You are running unattended: nobody will read or answer questions until you finish. Never ask; decide and carry on.
- This folder is a git worktree on branch ${branch}. Never push, switch branches, change git configuration, or touch files outside this folder.
- Port 4400 belongs to someone else. A dev server for this folder's gallery is already running at http://localhost:${port}.`;
  }
  return `You are running unattended: nobody will read or answer questions until you finish.

Recreate ${run.url} as the slug "${run.slug}"${run.pages.length ? `, with these pages besides the landing page: ${run.pages.join(", ")}` : ""}. Read .claude/skills/recreate-site/SKILL.md and follow it exactly, with $ARGUMENTS = "${args}".

Differences from the skill, because this run is unattended:
- Never ask. Where the skill says to ask or stop, choose the sensible default, carry on, and list the choice in your final report.
- The gallery is already running at http://localhost:${port}. Do not start another one. Wherever the skill says localhost:4400, use localhost:${port}.
- Look at the screenshots by reading the PNG files with your file-reading tool. It can read the git-ignored \`_reference/ours-*\` files; read those directly rather than making copies.
- This folder is a git worktree on branch ${branch}. Commit as the skill says. Never push, switch branches, or touch files outside this folder.
- Never change git configuration (no \`git config\`): it is shared with the main repo. If a commit fails, report the error instead.
- Finish with the skill's report.`;
}

function resumePrompt(prompt: string, run: Run): string {
  return `${prompt}

This is a restart: an earlier attempt on this task stopped partway through. Its work is on disk.
${
  run.prompt
    ? "Before doing anything else, look at `git log --oneline main..HEAD` and `git status` to see what it did."
    : `Before doing anything else, look at what exists in foundry/sites/${run.slug}/, foundry/themes/${run.slug}/, foundry/sites/${run.slug}/_reference/NOTES.md and \`git log --oneline main..HEAD\`.`
}
Then continue from where it stopped. Do not redo finished steps, and don't capture the original again if its screenshots are already there.`;
}

// ---------- the usage record ----------

/**
 * runs/<slug>/<backend>-<time>.json (the summary) and .calls.jsonl (one line per model call),
 * committed to the branch. The runs database can be rebuilt from these.
 */
function commitRecord(worktree: string, run: Run, state: RunState, hours: number, report: Reporter) {
  const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
  const dir = join(worktree, "runs", run.slug);
  const name = `${run.backend}-${stamp}`;
  mkdirSync(dir, { recursive: true });
  const byModel: Record<string, Usage> = {};
  for (const c of report.allCalls) {
    const u = (byModel[c.model] ??= { calls: 0, errors: 0, input: 0, cached: 0, cacheWrite: 0, output: 0, thoughts: 0, usd: 0 });
    u.calls++;
    if (c.status >= 400) u.errors++;
    u.input += c.input;
    u.cached += c.cached;
    u.cacheWrite += c.cacheWrite;
    u.output += c.output;
    u.thoughts += c.thoughts;
    u.usd += c.usd;
  }
  const summary = {
    run: run.id,
    url: run.url,
    slug: run.slug,
    pages: run.pages,
    backend: run.backend,
    model: run.model,
    effort: run.effort,
    prompt: run.prompt ?? "skill",
    state,
    hours: Number(hours.toFixed(2)),
    usd: Number(report.allCalls.reduce((t, c) => t + c.usd, 0).toFixed(4)), // this job only: a resumed run commits a record per job
    byModel,
    note: "usd is estimated from list prices (packages/server/src/prices.ts); on a Claude subscription it is what the API would charge",
  };
  writeFileSync(join(dir, `${name}.json`), JSON.stringify(summary, null, 2) + "\n");
  writeFileSync(join(dir, `${name}.calls.jsonl`), report.allCalls.map((c) => JSON.stringify(c)).join("\n") + "\n");
  const rel = `runs/${run.slug}`;
  git(worktree, "add", "--", `${rel}/${name}.json`, `${rel}/${name}.calls.jsonl`);
  const committed = git(worktree, "commit", "--quiet", "-m", `runs: ${run.slug}, ${run.backend} ${run.model}${run.effort ? ` (${run.effort})` : ""}, ${state}, usage record`, "--", `${rel}/${name}.json`, `${rel}/${name}.calls.jsonl`);
  if (committed.status === 0) report.event("info", `usage record committed: ${rel}/${name}.json`);
  else report.event("warn", `couldn't commit the usage record: ${(committed.stderr || committed.stdout).trim()}`);
}

// ---------- the preview ----------

/** Builds the branch's gallery for /p/<slug>/ and sends it to the server as a .tar.gz. */
async function sendPreview(worktree: string, run: Run, s: RunnerSettings, report: Reporter) {
  const dirName = `.preview-${run.slug}`;
  const out = join(s.worktrees, dirName);
  const tarName = `${dirName}.tar.gz`;
  const tar = join(s.worktrees, tarName);
  report.event("info", "building the branch's gallery as a preview");
  rmSync(out, { recursive: true, force: true });
  const built = await runToEnd("pnpm", ["--filter", "gallery", "exec", "vite", "build", "--base", `/p/${run.slug}/`, "--outDir", out, "--emptyOutDir"], worktree);
  if (built.code !== 0) {
    report.event("warn", `the preview didn't build:\n${built.out.slice(-1500)}`);
    return;
  }
  // Relative paths and cwd: GNU tar on Windows reads "C:" as a remote host.
  const packed = await runToEnd("tar", ["-czf", tarName, "-C", dirName, "."], s.worktrees);
  rmSync(out, { recursive: true, force: true });
  if (packed.code !== 0) {
    report.event("warn", `couldn't pack the preview: ${packed.out.slice(-500)}`);
    return;
  }
  try {
    const res = await fetch(`${s.serverUrl}/api/runner/runs/${run.id}/preview`, {
      method: "PUT",
      headers: { authorization: `Bearer ${s.token}`, "content-type": "application/gzip", "content-length": String(statSync(tar).size) },
      body: createReadStream(tar) as unknown as BodyInit,
      duplex: "half",
    } as RequestInit);
    if (!res.ok) throw new Error(`server answered ${res.status}`);
    report.event("info", `preview sent: /p/${run.slug}/`);
  } catch (e) {
    report.event("warn", `couldn't send the preview: ${(e as Error).message}`);
  } finally {
    rmSync(tar, { force: true });
  }
}
