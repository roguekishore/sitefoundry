// The runner: asks the foundry server for work every few seconds and runs one job at a time.
// On the laptop the server starts it as a child process; in the cloud it is a systemd service
// on the run instance, which the server switches on when there is work and off when idle.
//
// Settings (environment):
//   FOUNDRY_SERVER_URL, FOUNDRY_RUNNER_TOKEN   the server and its runner token
//   FOUNDRY_REPO                 the repository (this one)
//   FOUNDRY_WORKTREES            where run worktrees go (../SITEFOUNDRY-runs)
//   FOUNDRY_GALLERY_PORT, FOUNDRY_GALLERY_HOST the run's gallery (4410, localhost)
//   FOUNDRY_FETCH=1, FOUNDRY_PUSH=1            work from origin/main and push the branch (cloud)
//   FOUNDRY_VERTEX_PROJECT, FOUNDRY_VERTEX_KEY Gemini's Vertex project, and its key (cloud)
//   FOUNDRY_SELF_SHUTDOWN_MINUTES   with no word from the server for this long, power the
//                                   instance off (cloud; the server normally does it)
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Job } from "../shared.ts";
import { runJob, type RunnerSettings } from "./job.ts";

const here = dirname(fileURLToPath(import.meta.url));
const env = process.env;
const repo = resolve(env.FOUNDRY_REPO ?? resolve(here, "../../.."));

const settings: RunnerSettings = {
  serverUrl: env.FOUNDRY_SERVER_URL ?? "http://127.0.0.1:4401",
  token: env.FOUNDRY_RUNNER_TOKEN ?? "",
  repo,
  worktrees: resolve(env.FOUNDRY_WORKTREES ?? resolve(repo, "..", "SITEFOUNDRY-runs")),
  galleryPort: Number(env.FOUNDRY_GALLERY_PORT ?? 4410),
  galleryHost: env.FOUNDRY_GALLERY_HOST ?? "localhost",
  fetch: env.FOUNDRY_FETCH === "1",
  push: env.FOUNDRY_PUSH === "1",
  gemini: {
    project: env.FOUNDRY_VERTEX_PROJECT ?? "1023705997493", // the Google Cloud project behind the key in ~/.gemini/.env
    location: "global",
    key: env.FOUNDRY_VERTEX_KEY || null,
  },
};
const selfShutdownMinutes = Number(env.FOUNDRY_SELF_SHUTDOWN_MINUTES ?? 0);

const say = (msg: string) => console.log(`${new Date().toISOString()} ${msg}`);
if (!settings.token) {
  say("FOUNDRY_RUNNER_TOKEN is not set");
  process.exit(1);
}

let lastContact = Date.now();
let stopping = false;
process.on("SIGTERM", () => (stopping = true));
process.on("SIGINT", () => (stopping = true));

async function claim(): Promise<Job | null> {
  const res = await fetch(`${settings.serverUrl}/api/runner/claim`, {
    method: "POST",
    headers: { authorization: `Bearer ${settings.token}` },
    signal: AbortSignal.timeout(20e3),
  });
  if (res.status === 204) return null;
  if (!res.ok) throw new Error(`server answered ${res.status}`);
  return (await res.json()) as Job;
}

say(`runner up: server ${settings.serverUrl}, repo ${repo}, worktrees ${settings.worktrees}`);
while (!stopping) {
  let job: Job | null = null;
  try {
    job = await claim();
    lastContact = Date.now();
  } catch (e) {
    say(`couldn't reach the server: ${(e as Error).message}`);
    if (selfShutdownMinutes && Date.now() - lastContact > selfShutdownMinutes * 60e3) {
      say(`no word from the server for ${selfShutdownMinutes} minutes: powering off`);
      spawnSync("sudo", ["/usr/sbin/shutdown", "-h", "now"], { stdio: "inherit" });
    }
  }
  if (job) {
    say(`run ${job.run.id}: ${job.run.backend} ${job.run.model} on ${job.run.url} as ${job.run.slug}${job.resume ? " (continuing)" : ""}`);
    await runJob(job, settings);
    lastContact = Date.now();
    say(`run ${job.run.id} ended`);
  } else await new Promise((ok) => setTimeout(ok, 5000));
}
say("runner stopping");
