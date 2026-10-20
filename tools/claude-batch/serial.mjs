// Runs a command once no other session of the batch is running one through this script: for
// the steps that would collide when several sites are recreated in the same repo at once
// (pnpm add rewriting package.json and the lockfile, git commits taking the index).
//
//   node tools/claude-batch/serial.mjs "<command>"
//   node tools/claude-batch/serial.mjs "git add -- foundry/sites/x && git commit -m 'x: theme' -- foundry/sites/x"
//
// The command runs in a shell, so && works. Exits with the command's exit code.
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const LOCK = join(REPO, "tools/claude-batch/runs/serial.lock"); // a folder: making one is atomic
const GIVE_UP_MS = 20 * 60_000;

const command = process.argv.slice(2).join(" ");
if (!command) {
  console.error('usage: node tools/claude-batch/serial.mjs "<command>"');
  process.exit(1);
}

mkdirSync(dirname(LOCK), { recursive: true });
const started = Date.now();
let told = false;
while (true) {
  try {
    mkdirSync(LOCK);
    writeFileSync(join(LOCK, "owner"), `${process.pid}\n${command}\n`);
    break;
  } catch (e) {
    if (e.code !== "EEXIST") throw e;
  }
  // Held by a process that's gone (killed mid-command): take it over.
  let owner = 0;
  try {
    owner = Number(readFileSync(join(LOCK, "owner"), "utf8").split("\n")[0]);
  } catch {}
  if (owner && !alive(owner)) {
    rmSync(LOCK, { recursive: true, force: true });
    continue;
  }
  if (Date.now() - started > GIVE_UP_MS) {
    console.error(`serial: waited ${GIVE_UP_MS / 60_000} min for ${LOCK}; giving up`);
    process.exit(1);
  }
  if (!told) (console.error("serial: another session is running a command; waiting for it…"), (told = true));
  await new Promise((r) => setTimeout(r, 500));
}

let code = 1;
try {
  code = spawnSync(command, { cwd: process.cwd(), shell: true, stdio: "inherit" }).status ?? 1;
} finally {
  rmSync(LOCK, { recursive: true, force: true });
}
process.exit(code);

function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === "EPERM";
  }
}
