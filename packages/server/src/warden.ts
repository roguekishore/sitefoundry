// Tells warden about runs: one file per recent run in /var/lib/warden-runs/, in the format the
// outpost reads every 30 s (warden's D45, docs/spec/CONTRACTS.md §9 in AWS-COMMAND-CENTER).
// Warden then shows each run's state and token use per model, and a run that fails or goes
// quiet becomes a problem in its "Needs you". The files name the app "foundry".
import { existsSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Run, RunState } from "./shared.ts";

const KEEP = 10; // warden reads at most 20 files from the folder; other programs may write there too
const PREFIX = "foundry-";

// Warden's states: running | held | paused | failed | done | stopped.
const STATE: Record<RunState, string> = { queued: "running", claimed: "running", running: "running", done: "done", failed: "failed", stopped: "stopped", held: "held" };

function fileOf(run: Run) {
  return {
    schema: 1,
    updated: Math.floor(Date.now() / 1000),
    run: {
      app: "foundry",
      phase: `${run.slug} · ${run.backend} ${run.model}${run.effort ? ` (${run.effort})` : ""}${run.attempt ? ` · restart ${run.attempt}` : ""}${run.state === "queued" ? " · queued" : ""}`,
      total: null,
      state: STATE[run.state],
      counts: {},
      running: [],
      held: [],
      usage: Object.entries(run.byModel).map(([model, u]) => ({
        model,
        backend: model.startsWith("claude") ? "anthropic" : "vertex",
        requests: u.calls,
        input: u.input,
        cached: u.cached,
        cache_write: u.cacheWrite,
        output: u.output,
        thoughts: u.thoughts,
        tool: 0,
        total: u.input + u.cached + u.cacheWrite + u.output + u.thoughts,
        cost_usd: Number(u.usd.toFixed(4)),
      })),
    },
    units: [],
  };
}

/** Writes the newest runs' files and removes older foundry ones. Writes go through a temp file, so the outpost never reads half a file. */
export function writeWardenRuns(dir: string, runs: Run[]) {
  if (!existsSync(dir)) return;
  const keep = runs.slice(0, KEEP);
  const names = new Set(keep.map((r) => `${PREFIX}${r.id}.json`));
  for (const run of keep) {
    const name = `${PREFIX}${run.id}.json`;
    const tmp = join(dir, `.${name}.tmp`);
    writeFileSync(tmp, JSON.stringify(fileOf(run)));
    renameSync(tmp, join(dir, name));
  }
  for (const name of readdirSync(dir)) {
    if (name.startsWith(PREFIX) && name.endsWith(".json") && !names.has(name)) rmSync(join(dir, name), { force: true });
  }
}
