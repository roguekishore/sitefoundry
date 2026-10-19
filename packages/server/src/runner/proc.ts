// Starting and stopping child processes the same way on Windows (the laptop) and Linux (the
// run instance), and reading their output line by line.
import { spawn, spawnSync, type ChildProcess, type SpawnOptions } from "node:child_process";
import type { Readable } from "node:stream";

const WINDOWS = process.platform === "win32";

/**
 * Starts a program. On Linux it gets its own process group, so `killTree` can stop everything
 * it started (the gallery's Vite, the agent's own shells). pnpm is a .cmd file on Windows,
 * which only a shell can start.
 */
export function start(command: string, args: string[], options: SpawnOptions = {}): ChildProcess {
  const shell = WINDOWS && command === "pnpm";
  const quoted = shell ? args.map((a) => (/[\s"^&|<>]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a)) : args;
  return spawn(command, quoted, { stdio: ["ignore", "pipe", "pipe"], ...options, shell, detached: !WINDOWS });
}

/** Stops a program and everything it started. */
export function killTree(child: ChildProcess | null | undefined) {
  if (!child?.pid || child.exitCode !== null) return;
  if (WINDOWS) spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  else {
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      child.kill("SIGTERM");
    }
  }
}

/** Waits for a program to end; resolves with its exit code (null when killed by a signal). */
export const exited = (child: ChildProcess) =>
  new Promise<number | null>((ok) => {
    if (child.exitCode !== null) return ok(child.exitCode);
    child.on("exit", (code) => ok(code));
    child.on("error", () => ok(-1));
  });

/** Runs a program to its end and returns its exit code and output (stdout + stderr). */
export async function run(command: string, args: string[], cwd: string, env?: NodeJS.ProcessEnv): Promise<{ code: number | null; out: string }> {
  const child = start(command, args, { cwd, env: env ?? process.env });
  let out = "";
  child.stdout!.on("data", (d) => (out += d));
  child.stderr!.on("data", (d) => (out += d));
  return { code: await exited(child), out };
}

export const git = (cwd: string, ...args: string[]) => spawnSync("git", ["-C", cwd, ...args], { encoding: "utf8" });

// eslint-disable-next-line no-control-regex
const ANSI = /\x1b\[[0-9;?]*[ -/]*[@-~]|\x1b\][^\x07]*\x07/g;
export const stripAnsi = (s: string) => s.replace(ANSI, "");

/** Calls `onLine` for every complete line a stream writes (and for what's left when it ends). */
export function eachLine(stream: Readable, onLine: (line: string) => void) {
  let rest = "";
  stream.setEncoding("utf8");
  stream.on("data", (chunk: string) => {
    const parts = (rest + chunk).split(/\r?\n/);
    rest = parts.pop() ?? "";
    for (const p of parts) onLine(p);
  });
  stream.on("end", () => rest && onLine(rest));
}
