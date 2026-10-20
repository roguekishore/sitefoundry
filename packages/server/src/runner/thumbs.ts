// A thumbnails job, start to end:
//  1. A detached worktree <worktrees>/thumbs at main (origin/main in the cloud). It is kept
//     between jobs, and so is its git-ignored public/thumbs/: each job shoots only what has no
//     thumbnail yet (new items and sites), and the first one shoots everything.
//  2. pnpm install there, then `pnpm build:thumbs` (it builds the gallery and screenshots every
//     item and site page in headless Chromium), its output sent to the server as it goes.
//  3. public/thumbs/ packed and sent to the server, which serves it at /thumbs/.
import { createReadStream, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import type { ReportReply, ThumbsJob, ThumbsReport } from "../shared.ts";
import type { RunnerSettings } from "./job.ts";
import { eachLine, exited, git, killTree, run as runToEnd, start, stripAnsi } from "./proc.ts";

export async function runThumbs(job: ThumbsJob, s: RunnerSettings): Promise<void> {
  const report = new ThumbsReporter(s, job.id);
  let stopped = false;
  let shooting: ReturnType<typeof start> | null = null;
  const stop = () => {
    stopped = true;
    killTree(shooting);
  };
  report.onStop = stop;
  process.once("SIGTERM", stop);
  const say = (line: string) => report.line(line);
  const fail = async (error: string) => {
    say(error);
    report.set({ state: "failed", error });
    await report.close();
  };
  report.start();

  try {
    // ---------- 1. the worktree ----------
    let base = "main";
    if (s.fetch) {
      say("fetching origin");
      const fetched = git(s.repo, "fetch", "--quiet", "origin", "main");
      if (fetched.status !== 0) return await fail(`git fetch failed: ${fetched.stderr.trim()}`);
      base = "origin/main";
    }
    const worktree = join(s.worktrees, "thumbs");
    git(s.repo, "worktree", "prune");
    if (!existsSync(worktree)) {
      mkdirSync(s.worktrees, { recursive: true });
      const added = git(s.repo, "worktree", "add", "--detach", worktree, base);
      if (added.status !== 0) return await fail(`git worktree add failed: ${added.stderr.trim()}`);
    } else {
      const moved = git(worktree, "checkout", "--quiet", "--detach", base);
      if (moved.status !== 0) return await fail(`git checkout failed: ${moved.stderr.trim()}`);
    }
    const commit = git(worktree, "rev-parse", "HEAD").stdout.trim();
    report.set({ commit });
    say(`shooting main at ${commit.slice(0, 7)} in ${worktree}`);

    // ---------- 2. install and shoot ----------
    say("installing packages");
    const install = await runToEnd("pnpm", ["install", "--frozen-lockfile", "--prefer-offline"], worktree);
    if (install.code !== 0) return await fail(`pnpm install failed:\n${install.out.slice(-2000)}`);
    if (stopped) return await end(report, "stopped");

    shooting = start("pnpm", ["build:thumbs"], { cwd: worktree });
    let summary = "";
    const onLine = (l: string) => {
      const line = stripAnsi(l).trimEnd();
      if (!line) return;
      if (line.startsWith("done in ") || / to shoot \(/.test(line)) summary = line;
      say(line);
    };
    eachLine(shooting.stdout!, onLine);
    eachLine(shooting.stderr!, onLine);
    const code = await exited(shooting);
    shooting = null;
    if (summary) report.set({ summary });
    if (stopped) return await end(report, "stopped");
    if (code !== 0) return await fail(`build:thumbs exited with code ${code}`);

    // ---------- 3. send them ----------
    const out = join(worktree, "public", "thumbs");
    if (!existsSync(join(out, "manifest.json"))) return await fail("build:thumbs made no public/thumbs/manifest.json");
    const tarName = ".thumbs.tar.gz";
    const tar = join(s.worktrees, tarName);
    // Relative paths and cwd: GNU tar on Windows reads "C:" as a remote host.
    const packed = await runToEnd("tar", ["-czf", tarName, "-C", "thumbs/public/thumbs", "."], s.worktrees);
    if (packed.code !== 0) return await fail(`couldn't pack the thumbnails: ${packed.out.slice(-500)}`);
    try {
      say(`sending ${(statSync(tar).size / 1e6).toFixed(1)} MB to the server`);
      const res = await fetch(`${s.serverUrl}/api/runner/thumbs/${job.id}/upload`, {
        method: "PUT",
        headers: { authorization: `Bearer ${s.token}`, "content-type": "application/gzip", "content-length": String(statSync(tar).size) },
        body: createReadStream(tar) as unknown as BodyInit,
        duplex: "half",
      } as RequestInit);
      if (!res.ok) throw new Error(`server answered ${res.status}`);
    } catch (e) {
      return await fail(`couldn't send the thumbnails: ${(e as Error).message}`);
    } finally {
      rmSync(tar, { force: true });
    }
    await end(report, "done");
  } catch (e) {
    await fail(`The runner broke: ${(e as Error).stack ?? e}`);
  } finally {
    process.off("SIGTERM", stop);
  }
}

async function end(report: ThumbsReporter, state: "done" | "stopped") {
  report.line(state === "done" ? "done" : "stopped");
  report.set({ state });
  await report.close();
}

/** Sends the job's output lines to the server every 3 seconds; its answer says whether Stop was pressed. */
class ThumbsReporter {
  private lines: string[] = [];
  private patch: ThumbsReport = {};
  private timer: NodeJS.Timeout | null = null;
  private sending: Promise<void> | null = null;
  onStop = () => {};

  constructor(
    private s: RunnerSettings,
    private id: number,
  ) {}

  line(text: string) {
    this.lines.push(text);
    console.log(`[thumbs ${this.id}] ${text}`);
  }
  set(patch: ThumbsReport) {
    Object.assign(this.patch, patch);
  }
  start() {
    this.timer = setInterval(() => void this.flush(), 3000);
  }

  async flush() {
    if (this.sending) return this.sending;
    const body: ThumbsReport = { ...this.patch, lines: this.lines };
    this.patch = {};
    this.lines = [];
    this.sending = (async () => {
      try {
        const res = await fetch(`${this.s.serverUrl}/api/runner/thumbs/${this.id}/report`, {
          method: "POST",
          headers: { "content-type": "application/json", authorization: `Bearer ${this.s.token}` },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(20e3),
        });
        if (!res.ok) throw new Error(`server answered ${res.status}`);
        if (((await res.json()) as ReportReply).stop && !body.state) this.onStop();
      } catch (e) {
        // Put the batch back in front of whatever came in meanwhile.
        const { lines = [], ...fields } = body;
        this.lines = [...lines, ...this.lines];
        this.patch = { ...fields, ...this.patch };
        console.error(`[thumbs ${this.id}] couldn't report: ${(e as Error).message}`);
      } finally {
        this.sending = null;
      }
    })();
    return this.sending;
  }

  /** The last batch; tries for up to a minute. */
  async close() {
    if (this.timer) clearInterval(this.timer);
    for (let i = 0; i < 12; i++) {
      await this.flush();
      if (!this.lines.length && !Object.keys(this.patch).length) return;
      await new Promise((ok) => setTimeout(ok, 5000));
    }
  }
}
