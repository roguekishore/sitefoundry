// The foundry server. On the laptop it is the gallery plus the run page, with the runner as a
// child process; in the cloud it runs on the preview instance behind Caddy and switches the run
// instance on when there is work.
//
//   node packages/server/dist/server.mjs                 serve (settings from FOUNDRY_* below)
//   node packages/server/dist/server.mjs setup-login     passphrase on stdin → the two login lines
//
// Settings (environment):
//   FOUNDRY_HOST, FOUNDRY_PORT          where to listen (127.0.0.1:4401)
//   FOUNDRY_DATA                        database and previews (<repo>/.foundry)
//   FOUNDRY_GALLERY_DIST                the built gallery (<repo>/apps/gallery/dist)
//   FOUNDRY_PASSPHRASE_HASH, FOUNDRY_TOTP_SECRET, FOUNDRY_COOKIE_DOMAIN
//                                       the login; without the first two there is none (laptop)
//   FOUNDRY_RUNNER_TOKEN                what the runner must send (made up per start on the laptop)
//   FOUNDRY_MACHINE                     local (default) or ec2
//   FOUNDRY_RUN_INSTANCE_ID, AWS_REGION the run instance, for ec2
//   FOUNDRY_IDLE_MINUTES                switch the run instance off after this long with no work (10)
//   FOUNDRY_WARDEN_RUNS_DIR             write warden's run files here (off when unset)
//   FOUNDRY_LIVE_TARGET                 the run instance's gallery, e.g. http://10.20.0.20:4410;
//                                       requests for host live.* are passed to it (cloud)
//   FOUNDRY_LIVE_URL                    the link the run page shows for it
//
// Thumbnails: the gallery's stills (pnpm build:thumbs) are git-ignored, so the cloud gets them
// from the run instance: a thumbnails job shoots main there and sends public/thumbs/, kept in
// <FOUNDRY_DATA>/thumbs and served at /thumbs/ ahead of the built gallery's own (the laptop's).
// In the cloud a job is queued at start when the deployed commit changed what the gallery shows.
import { spawn, spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import { createReadStream, createWriteStream, existsSync, mkdirSync, renameSync, rmSync, statSync, utimesSync } from "node:fs";
import http, { type IncomingMessage, type ServerResponse } from "node:http";
import { dirname, extname, join, normalize, resolve, sep } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { Auth, AuthError, hashPassphrase, loginPage, newTotpSecret } from "./auth.ts";
import { Db } from "./db.ts";
import { Ec2Machine, LocalMachine, type Machine } from "./machine.ts";
import { ACTIVE_STATES, BACKENDS, type Job, type MachineInfo, type Options, type Passkey, type Report, type ReportReply, type RunRequest, type RunState, type ThumbsInfo, type ThumbsReport, type ThumbsWork } from "./shared.ts";
import { writeWardenRuns } from "./warden.ts";

const here = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(here, "../../..");
const env = process.env;

// ---------- setup-login ----------

if (process.argv[2] === "setup-login") {
  const chunks: Buffer[] = [];
  for await (const c of process.stdin) chunks.push(c as Buffer);
  const passphrase = Buffer.concat(chunks).toString("utf8").split(/\r?\n/)[0];
  if (passphrase.length < 12) {
    console.error("Give a passphrase of at least 12 characters on stdin.");
    process.exit(1);
  }
  const secret = newTotpSecret();
  console.log(`FOUNDRY_PASSPHRASE_HASH=${hashPassphrase(passphrase)}`);
  console.log(`FOUNDRY_TOTP_SECRET=${secret}`);
  console.error(`\nAdd this to your authenticator app (or type the secret above into it):\notpauth://totp/SITEFOUNDRY?secret=${secret}&issuer=SITEFOUNDRY`);
  process.exit(0);
}

// ---------- settings ----------

const HOST = env.FOUNDRY_HOST ?? "127.0.0.1";
const PORT = Number(env.FOUNDRY_PORT ?? 4401);
const DATA = resolve(env.FOUNDRY_DATA ?? join(REPO, ".foundry"));
const GALLERY = resolve(env.FOUNDRY_GALLERY_DIST ?? join(REPO, "apps/gallery/dist"));
const PREVIEWS = join(DATA, "previews");
const THUMBS = join(DATA, "thumbs");
const IDLE_MINUTES = Number(env.FOUNDRY_IDLE_MINUTES ?? 10);
const RUNNER_TOKEN = env.FOUNDRY_RUNNER_TOKEN ?? randomBytes(24).toString("base64url");
const LIVE_TARGET = env.FOUNDRY_LIVE_TARGET ? new URL(env.FOUNDRY_LIVE_TARGET) : null;
const WARDEN_DIR = env.FOUNDRY_WARDEN_RUNS_DIR ?? null;
const DEFAULTS = { maxUsd: 15, maxHours: 8 };
mkdirSync(PREVIEWS, { recursive: true });

const log = (msg: string) => console.log(`${new Date().toISOString()} ${msg}`);
const now = () => new Date().toISOString();

const db = new Db(join(DATA, "foundry.db"));
const auth = new Auth(
  db,
  env.FOUNDRY_PASSPHRASE_HASH && env.FOUNDRY_TOTP_SECRET
    ? { passphraseHash: env.FOUNDRY_PASSPHRASE_HASH, totpSecret: env.FOUNDRY_TOTP_SECRET, cookieDomain: env.FOUNDRY_COOKIE_DOMAIN ?? null }
    : null,
);
if (!auth.enabled && HOST !== "127.0.0.1" && HOST !== "localhost") {
  console.error("Refusing to listen beyond this computer without a login: set FOUNDRY_PASSPHRASE_HASH and FOUNDRY_TOTP_SECRET (setup-login).");
  process.exit(1);
}

const LOCAL_GALLERY_PORT = 4410;
const machine: Machine =
  env.FOUNDRY_MACHINE === "ec2"
    ? new Ec2Machine(required("FOUNDRY_RUN_INSTANCE_ID"), required("AWS_REGION"))
    : new LocalMachine(
        process.execPath,
        [join(here, "runner.mjs")],
        { FOUNDRY_SERVER_URL: `http://127.0.0.1:${PORT}`, FOUNDRY_RUNNER_TOKEN: RUNNER_TOKEN, FOUNDRY_GALLERY_PORT: String(LOCAL_GALLERY_PORT) },
        log,
      );
const LIVE_URL = env.FOUNDRY_LIVE_URL ?? (machine.kind === "local" ? `http://localhost:${LOCAL_GALLERY_PORT}/` : null);

function required(name: string): string {
  const v = env[name];
  if (!v) {
    console.error(`${name} is not set`);
    process.exit(1);
  }
  return v;
}

// ---------- small HTTP helpers ----------

function send(res: ServerResponse, status: number, body: unknown) {
  const text = JSON.stringify(body);
  res.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  res.end(text);
}

class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

async function readBody(req: IncomingMessage, limit = 4 << 20): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const c of req) {
    size += (c as Buffer).length;
    if (size > limit) throw new HttpError(413, "request too large");
    chunks.push(c as Buffer);
  }
  return Buffer.concat(chunks);
}

async function readJson<T>(req: IncomingMessage): Promise<T> {
  try {
    return JSON.parse((await readBody(req)).toString("utf8") || "{}") as T;
  } catch (e) {
    if (e instanceof HttpError) throw e;
    throw new HttpError(400, "not JSON");
  }
}

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
};

/** A file under `root` for a URL path, or false (never a path outside `root`). */
function serveFile(res: ServerResponse, root: string, urlPath: string): boolean {
  const rel = decodeURIComponent(urlPath).replace(/^\/+/, "") || "index.html";
  const file = normalize(join(root, rel));
  if (file !== root && !file.startsWith(root + sep)) return false;
  let target = file;
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
  if (!existsSync(target) || !statSync(target).isFile()) return false;
  // Vite puts a content hash in every file name under assets/, so those never change.
  const immutable = /[\\/]assets[\\/]/.test(target);
  res.writeHead(200, {
    "content-type": TYPES[extname(target).toLowerCase()] ?? "application/octet-stream",
    "cache-control": immutable ? "public, max-age=31536000, immutable" : "no-cache",
  });
  createReadStream(target).pipe(res);
  return true;
}

// ---------- the run form ----------

const SLUG = /^[a-z0-9][a-z0-9-]{0,47}$/;
const PAGE = /^[a-z0-9][a-z0-9/_-]{0,47}$/;

function validRun(body: RunRequest) {
  let url: URL;
  try {
    url = new URL(String(body.url ?? "").trim());
  } catch {
    throw new HttpError(400, "That isn't a URL.");
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new HttpError(400, "The URL must start with https:// or http://.");
  const [slug, ...pages] = String(body.target ?? "").trim().toLowerCase().split(/[\s,]+/).filter(Boolean);
  if (!slug || !SLUG.test(slug)) throw new HttpError(400, "The slug is lowercase letters, digits and dashes, like huly or linear-app.");
  if (pages.length > 8 || pages.some((p) => !PAGE.test(p.replace(/^\//, "")))) throw new HttpError(400, "Page names are words like pricing or /about, up to 8 of them.");
  const backend = BACKENDS[body.backend] ? body.backend : null;
  if (!backend) throw new HttpError(400, "Pick Gemini or Claude.");
  if (!BACKENDS[backend].models.includes(body.model)) throw new HttpError(400, `Pick one of the ${backend} models.`);
  const effort = body.effort || null;
  if (effort && !BACKENDS[backend].efforts.includes(effort)) throw new HttpError(400, `${backend} has no effort "${effort}".`);
  const prompt = body.prompt?.trim() || null;
  if (prompt && prompt.length > 4000) throw new HttpError(400, "Keep your own prompt under 4,000 characters.");
  const maxUsd = Number(body.maxUsd ?? DEFAULTS.maxUsd);
  const maxHours = Number(body.maxHours ?? DEFAULTS.maxHours);
  if (!(maxUsd >= 0.5 && maxUsd <= 100)) throw new HttpError(400, "The spending cap is between $0.50 and $100.");
  if (!(maxHours >= 0.25 && maxHours <= 12)) throw new HttpError(400, "The time limit is between 15 minutes and 12 hours.");
  const busy = db.runsIn(ACTIVE_STATES).find((r) => r.slug === slug && r.backend === backend);
  if (busy) throw new HttpError(409, `Run #${busy.id} is already working on ${backend}/${slug}.`);
  return { url: url.href, slug, pages: pages.map((p) => p.replace(/^\//, "")), backend, model: body.model, effort, prompt, maxUsd, maxHours };
}

// ---------- the runner's side ----------

let runnerSeen: string | null = null;
const TERMINAL: RunState[] = ["done", "failed", "stopped", "held"];

function claim(): Job | ThumbsWork | null {
  runnerSeen = now();
  // A run already claimed or running means the runner restarted in the middle of it: hand the
  // same run back, to continue from what's on disk.
  const unfinished = db.runsIn(["claimed", "running"])[0];
  if (unfinished) {
    db.say(unfinished.id, "warn", "The runner came back in the middle of this run; it continues from what's on disk.");
    db.updateRun(unfinished.id, { reportedAt: now() });
    return { run: db.run(unfinished.id)!, resume: true };
  }
  // The same for thumbnails: it shoots again, keeping what it shot before.
  const shooting = db.activeThumbs();
  if (shooting?.state === "running") {
    db.addThumbsLog(shooting.id, ["(the runner came back in the middle of this; it starts again and keeps what it shot)"]);
    db.updateThumbs(shooting.id, { reportedAt: now() });
    return { thumbs: db.thumbs(shooting.id)! };
  }
  const next = db.claimNext();
  if (next) {
    db.say(next.run.id, "info", "Taken by the runner.");
    return next;
  }
  const thumbs = db.claimThumbs();
  return thumbs ? { thumbs } : null;
}

function reportThumbs(id: number, r: ThumbsReport): ReportReply {
  runnerSeen = now();
  const job = db.thumbs(id);
  if (!job) throw new HttpError(404, "no such thumbnails job");
  db.addThumbsLog(id, r.lines ?? []);
  const ended = r.state && r.state !== "running" && r.state !== "queued";
  db.updateThumbs(id, { reportedAt: now(), state: r.state, endedAt: ended ? now() : undefined, commitId: r.commit, error: r.error, summary: r.summary });
  const fresh = db.thumbs(id)!;
  return { stop: fresh.stopRequested || fresh.state !== "running" };
}

/** A .tar.gz from the runner, unpacked into `dest`, which it replaces whole (or not at all). */
async function receiveTar(req: IncomingMessage, dest: string) {
  const parent = dirname(dest);
  const name = dest.slice(parent.length + 1);
  const incoming = `.incoming-${name}.tar.gz`;
  const fresh = `.${name}.new`;
  mkdirSync(parent, { recursive: true });
  rmSync(join(parent, fresh), { recursive: true, force: true });
  mkdirSync(join(parent, fresh), { recursive: true });
  await pipeline(req, createWriteStream(join(parent, incoming)));
  // Relative paths and cwd: GNU tar on Windows reads "C:" as a remote host.
  const code = await new Promise<number | null>((ok) => spawn("tar", ["-xzf", incoming, "-C", fresh], { cwd: parent, stdio: "ignore" }).on("exit", ok).on("error", () => ok(-1)));
  rmSync(join(parent, incoming), { force: true });
  if (code !== 0) {
    rmSync(join(parent, fresh), { recursive: true, force: true });
    throw new HttpError(400, "couldn't unpack it");
  }
  rmSync(dest, { recursive: true, force: true });
  renameSync(join(parent, fresh), dest);
}

const thumbsInfo = (): ThumbsInfo => ({ latest: db.latestThumbs() ?? null, receivedAt: thumbsReceivedAt() });

/** When the server last received thumbnails, or null. */
function thumbsReceivedAt(): string | null {
  // The folder's time, set when they arrive (the files inside keep the runner's times).
  return existsSync(join(THUMBS, "manifest.json")) ? statSync(THUMBS).mtime.toISOString() : null;
}

/**
 * At start in the cloud (a deploy restarts the server): queue thumbnails when the deployed commit
 * changed what the gallery shows since the last shot, or when the server has none.
 */
function thumbsAfterDeploy() {
  if (machine.kind !== "ec2" || db.activeThumbs()) return;
  const head = spawnSync("git", ["-C", REPO, "rev-parse", "HEAD"], { encoding: "utf8" }).stdout?.trim();
  if (!head) return log("thumbnails: no git commit here, not queueing any");
  const last = db.latestThumbs("done")?.commit;
  if (last && thumbsReceivedAt()) {
    if (last === head) return;
    const diff = spawnSync("git", ["-C", REPO, "diff", "--quiet", last, head, "--", "foundry", "vault", "apps/gallery", "public/r", "tools/build-thumbs.ts"]);
    if (diff.status === 0) return log(`thumbnails: nothing the gallery shows changed since ${last.slice(0, 7)}`);
  }
  db.addThumbs(`deployed ${head.slice(0, 7)}`);
  log(`thumbnails queued for ${head.slice(0, 7)}`);
}

function report(id: number, r: Report): ReportReply {
  runnerSeen = now();
  const run = db.run(id);
  if (!run) throw new HttpError(404, "no such run");
  if (r.events?.length) db.addEvents(id, r.events);
  if (r.calls?.length) db.addCalls(id, r.calls);
  const state = r.state && r.state !== run.state ? r.state : undefined;
  db.updateRun(id, {
    reportedAt: now(),
    state,
    endedAt: state && TERMINAL.includes(state) ? now() : undefined,
    attempt: r.attempt,
    branch: r.branch,
    commits: r.commits,
    error: r.error,
    note: r.note,
    resume: state && TERMINAL.includes(state) ? 0 : undefined,
  });
  wardenSoon();
  const fresh = db.run(id)!;
  return { stop: fresh.stopRequested || !ACTIVE_STATES.includes(fresh.state) };
}

/** A built preview of the run's branch arrives as a .tar.gz; it replaces any older one for that slug. */
async function receivePreview(id: number, req: IncomingMessage) {
  const run = db.run(id);
  if (!run) throw new HttpError(404, "no such run");
  await receiveTar(req, join(PREVIEWS, run.slug));
  db.updateRun(id, { preview: `/p/${run.slug}/` });
  db.say(id, "info", `Preview ready at /p/${run.slug}/`);
}

// ---------- the queue: switching the run instance on and off ----------

let idleSince = Date.now();
let lastStart = 0;
// Each queued run is told once that the instance is being switched on, and once if AWS
// refuses (InsufficientInstanceCapacity happens now and then; the next tick tries again).
const startTold = new Set<number>();
const startFailTold = new Set<number>();
const thumbsStartTold = new Set<number>();
const TICK_SECONDS = machine.kind === "ec2" ? 15 : 5;

async function tick() {
  const active = db.runsIn(ACTIVE_STATES);
  const thumbs = db.activeThumbs();
  const state = await machine.state();

  if ((active.some((r) => r.state === "queued") || thumbs?.state === "queued") && state === "off") {
    log("work queued: switching the run instance on");
    const queued = active.filter((r) => r.state === "queued");
    for (const r of queued.filter((r) => !startTold.has(r.id))) {
      startTold.add(r.id);
      db.say(r.id, "info", "Switching the run instance on.");
    }
    if (thumbs && !thumbsStartTold.has(thumbs.id)) {
      thumbsStartTold.add(thumbs.id);
      db.addThumbsLog(thumbs.id, ["Switching the run instance on."]);
    }
    lastStart = Date.now();
    await machine.start().catch((e) => {
      log(`couldn't start the run instance: ${e.message}`);
      for (const r of queued.filter((r) => !startFailTold.has(r.id))) {
        startFailTold.add(r.id);
        db.say(r.id, "warn", `AWS couldn't start the run instance (${e.message.replace(/\.$/, "")}). Trying again every ${TICK_SECONDS} s.`);
      }
    });
  }

  // A run whose runner went quiet for 15 minutes is given up on (a run that is merely slow still
  // reports: the runner sends something every few seconds while the agent works).
  for (const r of active.filter((r) => r.state !== "queued")) {
    const seen = Date.parse(db.sql.prepare("SELECT reported_at FROM runs WHERE id = ?").get(r.id)?.reported_at as string);
    if (Date.now() - seen > 15 * 60e3) {
      db.updateRun(r.id, { state: "failed", endedAt: now(), error: "The runner stopped reporting for 15 minutes." });
      db.say(r.id, "error", "The runner stopped reporting for 15 minutes; the run is marked failed. Resume continues from what's on disk.");
    }
  }

  if (thumbs?.state === "running") {
    const seen = Date.parse(db.sql.prepare("SELECT reported_at FROM thumbs WHERE id = ?").get(thumbs.id)?.reported_at as string);
    if (Date.now() - seen > 15 * 60e3) db.updateThumbs(thumbs.id, { state: "failed", endedAt: now(), error: "The runner stopped reporting for 15 minutes." });
  }

  if (active.length || thumbs) idleSince = Date.now();
  const idleMs = Math.min(Date.now() - idleSince, Date.now() - lastStart);
  if (!db.runsIn(ACTIVE_STATES).length && !db.activeThumbs() && state === "on" && idleMs > IDLE_MINUTES * 60e3) {
    log(`no work for ${IDLE_MINUTES} minutes: switching the run instance off`);
    await machine.stop().catch((e) => log(`couldn't stop the run instance: ${e.message}`));
  }
}

let wardenTimer: NodeJS.Timeout | null = null;
function wardenSoon() {
  if (!WARDEN_DIR || wardenTimer) return;
  wardenTimer = setTimeout(() => {
    wardenTimer = null;
    try {
      writeWardenRuns(WARDEN_DIR, db.runs(10));
    } catch (e) {
      log(`couldn't write warden's run files: ${(e as Error).message}`);
    }
  }, 5000);
}

// ---------- routes ----------

const route = (req: IncomingMessage) => {
  const url = new URL(req.url ?? "/", "http://x");
  return { method: req.method ?? "GET", path: url.pathname, q: url.searchParams };
};

async function handle(req: IncomingMessage, res: ServerResponse) {
  const { method, path, q } = route(req);

  if (path === "/healthz") return send(res, 200, { ok: true });

  // The run instance's live gallery, on its own host name (the skill's links are root-relative).
  if (LIVE_TARGET && (req.headers.host ?? "").startsWith("live.")) {
    if (!auth.loggedIn(req)) return res.writeHead(401, { "content-type": "text/plain" }).end("Log in on the main address first.");
    return proxy(req, res);
  }

  // The runner: a bearer token, never the login.
  if (path.startsWith("/api/runner/")) {
    if (req.headers.authorization !== `Bearer ${RUNNER_TOKEN}`) return send(res, 401, { error: "bad runner token" });
    if (method === "POST" && path === "/api/runner/claim") {
      const job = claim();
      return job ? send(res, 200, job) : res.writeHead(204).end();
    }
    let m = path.match(/^\/api\/runner\/runs\/(\d+)\/report$/);
    if (method === "POST" && m) return send(res, 200, report(Number(m[1]), await readJson<Report>(req)));
    m = path.match(/^\/api\/runner\/thumbs\/(\d+)\/report$/);
    if (method === "POST" && m) return send(res, 200, reportThumbs(Number(m[1]), await readJson<ThumbsReport>(req)));
    m = path.match(/^\/api\/runner\/thumbs\/(\d+)\/upload$/);
    if (method === "PUT" && m) {
      if (!db.thumbs(Number(m[1]))) throw new HttpError(404, "no such thumbnails job");
      await receiveTar(req, THUMBS);
      utimesSync(THUMBS, new Date(), new Date()); // tar gave the folder the runner's time
      db.addThumbsLog(Number(m[1]), ["The server has the thumbnails."]);
      return send(res, 200, { ok: true });
    }
    m = path.match(/^\/api\/runner\/runs\/(\d+)\/preview$/);
    if (method === "PUT" && m) {
      await receivePreview(Number(m[1]), req);
      return send(res, 200, { ok: true });
    }
    return send(res, 404, { error: "not found" });
  }

  if (path === "/login") {
    if (method === "POST") {
      const form = new URLSearchParams((await readBody(req, 8192)).toString("utf8"));
      const result = auth.login(req, res, form.get("passphrase") ?? "", form.get("code") ?? "");
      if (result === "ok") return res.writeHead(303, { location: "/" }).end();
      const msg = result === "locked" ? "Too many tries. Wait a minute." : "That didn't match. Check both and try again.";
      return res.writeHead(401, { "content-type": "text/html; charset=utf-8" }).end(loginPage(msg, auth.hasPasskeys));
    }
    return res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" }).end(loginPage("", auth.hasPasskeys));
  }
  // A passkey login: a challenge, then the device's signature over it (the login page's script).
  if (method === "POST" && path === "/login/passkey/options") return send(res, 200, await auth.passkeyLoginOptions(req));
  if (method === "POST" && path === "/login/passkey") {
    await auth.passkeyLogin(req, res, await readJson(req));
    return send(res, 200, { ok: true });
  }
  if (path === "/logout" && method === "POST") {
    auth.logout(req, res);
    return res.writeHead(303, { location: "/login" }).end();
  }

  if (!auth.loggedIn(req)) {
    if (path.startsWith("/api/")) return send(res, 401, { error: "log in" });
    return res.writeHead(303, { location: "/login" }).end();
  }

  if (path.startsWith("/api/")) return api(req, res, method, path, q);

  // A run's branch, built: /p/<slug>/...
  const p = path.match(/^\/p\/([a-z0-9-]+)(\/.*)?$/);
  if (p) {
    if (!p[2]) return res.writeHead(301, { location: `/p/${p[1]}/` }).end();
    if (serveFile(res, join(PREVIEWS, p[1]), p[2])) return;
    // A preview has no thumbnails of its own: main's show for what it shares with main.
    if (p[2].startsWith("/thumbs/") && serveFile(res, THUMBS, p[2].slice("/thumbs".length))) return;
    return res.writeHead(404, { "content-type": "text/plain" }).end("No preview for that run (yet).");
  }

  if (path.startsWith("/thumbs/") && serveFile(res, THUMBS, path.slice("/thumbs".length))) return;
  if (serveFile(res, GALLERY, path)) return;
  if (!existsSync(join(GALLERY, "index.html"))) {
    return res.writeHead(503, { "content-type": "text/plain; charset=utf-8" }).end(`The gallery isn't built yet: pnpm --filter gallery build (looked in ${GALLERY}).`);
  }
  res.writeHead(404, { "content-type": "text/plain" }).end("Not found.");
}

async function api(req: IncomingMessage, res: ServerResponse, method: string, path: string, q: URLSearchParams) {
  if (method === "GET" && path === "/api/options") {
    const options: Options = { backends: BACKENDS, defaults: DEFAULTS, liveUrl: LIVE_URL, auth: auth.enabled };
    return send(res, 200, options);
  }
  if (path === "/api/machine") {
    if (method === "POST") {
      const body = await readJson<{ on?: boolean }>(req);
      if (body.on) {
        lastStart = Date.now();
        await machine.start();
      } else {
        const busy = db.runsIn(["claimed", "running"]);
        if (busy.length) throw new HttpError(409, `Run #${busy[0].id} is still going; stop it first.`);
        if (db.activeThumbs()?.state === "running") throw new HttpError(409, "Thumbnails are being shot; stop them first.");
        await machine.stop();
      }
    }
    const info: MachineInfo = { state: await machine.state(), kind: machine.kind, runnerSeen, idleMinutes: IDLE_MINUTES };
    return send(res, 200, info);
  }
  if (path === "/api/thumbs") {
    if (method === "POST") {
      if (db.activeThumbs()) throw new HttpError(409, "Thumbnails are already queued or being shot.");
      db.addThumbs("asked for");
      setImmediate(() => tick().catch((e) => log(`tick: ${e.message}`)));
    }
    return send(res, 200, thumbsInfo());
  }
  if (method === "POST" && path === "/api/thumbs/stop") {
    const job = db.activeThumbs();
    if (job?.state === "queued") db.updateThumbs(job.id, { state: "stopped", endedAt: now() });
    else if (job) {
      db.updateThumbs(job.id, { stopRequested: true });
      db.addThumbsLog(job.id, ["Stop requested; the runner stops at its next report."]);
    }
    return send(res, 200, thumbsInfo());
  }
  if (path === "/api/passkeys") {
    if (method === "POST") {
      const body = await readJson<{ name?: string; response?: unknown }>(req);
      await auth.addPasskey(req, body.name ?? "", body.response as Parameters<Auth["addPasskey"]>[2]);
    }
    const list: Passkey[] = db.passkeys().map(({ id, name, createdAt, lastUsedAt }) => ({ id, name, createdAt, lastUsedAt }));
    return send(res, 200, list);
  }
  if (method === "POST" && path === "/api/passkeys/options") {
    const body = await readJson<{ code?: string }>(req);
    return send(res, 200, await auth.passkeyAddOptions(req, String(body.code ?? "")));
  }
  const pk = path.match(/^\/api\/passkeys\/([A-Za-z0-9_-]+)$/);
  if (method === "DELETE" && pk) {
    if (!db.dropPasskey(pk[1])) throw new HttpError(404, "No such passkey.");
    return send(res, 200, { ok: true });
  }
  if (path === "/api/runs") {
    if (method === "POST") {
      const run = db.addRun(validRun(await readJson<RunRequest>(req)));
      db.say(run.id, "info", `Queued: ${run.url} as ${run.slug}${run.pages.length ? ` with ${run.pages.join(", ")}` : ""}, ${run.backend} ${run.model}${run.effort ? ` at ${run.effort}` : ""}.`);
      wardenSoon();
      setImmediate(() => tick().catch((e) => log(`tick: ${e.message}`)));
      return send(res, 201, run);
    }
    return send(res, 200, db.runs(Number(q.get("limit") ?? 100)));
  }
  const m = path.match(/^\/api\/runs\/(\d+)(\/[a-z]+)?$/);
  if (m) {
    const id = Number(m[1]);
    const run = db.run(id);
    if (!run) throw new HttpError(404, "No such run.");
    const what = m[2] ?? "";
    if (method === "GET" && what === "") return send(res, 200, run);
    if (method === "GET" && what === "/events") return send(res, 200, db.events(id, Number(q.get("after") ?? 0)));
    if (method === "GET" && what === "/calls") return send(res, 200, db.calls(id));
    if (method === "POST" && what === "/stop") {
      if (run.state === "queued") {
        db.updateRun(id, { state: "stopped", endedAt: now() });
        db.say(id, "info", "Stopped before it started.");
      } else if (ACTIVE_STATES.includes(run.state)) {
        db.updateRun(id, { stopRequested: true });
        db.say(id, "info", "Stop requested; the runner stops at its next report.");
      }
      wardenSoon();
      return send(res, 200, db.run(id));
    }
    if (method === "POST" && what === "/resume") {
      if (ACTIVE_STATES.includes(run.state)) throw new HttpError(409, "It's still going.");
      const busy = db.runsIn(ACTIVE_STATES).find((r) => r.slug === run.slug && r.backend === run.backend);
      if (busy) throw new HttpError(409, `Run #${busy.id} is working on ${run.backend}/${run.slug}.`);
      db.updateRun(id, { state: "queued", resume: 1, stopRequested: false, error: null, endedAt: null });
      db.say(id, "info", "Queued again; it continues from what's on disk.");
      wardenSoon();
      setImmediate(() => tick().catch((e) => log(`tick: ${e.message}`)));
      return send(res, 200, db.run(id));
    }
  }
  send(res, 404, { error: "not found" });
}

// ---------- the live gallery proxy (cloud) ----------

function proxy(req: IncomingMessage, res: ServerResponse) {
  const upstream = http.request(
    { host: LIVE_TARGET!.hostname, port: LIVE_TARGET!.port, path: req.url, method: req.method, headers: { ...req.headers, host: LIVE_TARGET!.host } },
    (up) => {
      res.writeHead(up.statusCode ?? 502, up.headers);
      up.pipe(res);
    },
  );
  upstream.on("error", () => {
    if (!res.headersSent) res.writeHead(502, { "content-type": "text/plain" });
    res.end("The run instance's gallery isn't up (it runs only while a run goes).");
  });
  req.pipe(upstream);
}

// ---------- start ----------

const server = http.createServer((req, res) => {
  handle(req, res).catch((e) => {
    const status = e instanceof HttpError || e instanceof AuthError ? e.status : 500;
    if (status === 500) log(`error on ${req.method} ${req.url}: ${e.stack ?? e}`);
    if (!res.headersSent) send(res, status, { error: status === 500 ? "Something broke on the server; its log has the details." : e.message });
    else res.end();
  });
});

// Vite's live reload is a WebSocket: pass those through to the run instance too.
server.on("upgrade", (req, socket, head) => {
  if (!LIVE_TARGET || !(req.headers.host ?? "").startsWith("live.") || !auth.loggedIn(req)) return socket.destroy();
  const up = http.request({ host: LIVE_TARGET.hostname, port: LIVE_TARGET.port, path: req.url, headers: { ...req.headers, host: LIVE_TARGET.host } });
  up.on("upgrade", (upRes, upSocket, upHead) => {
    socket.write(`HTTP/1.1 101 Switching Protocols\r\n${Object.entries(upRes.headers).map(([k, v]) => `${k}: ${v}`).join("\r\n")}\r\n\r\n`);
    if (upHead.length) socket.write(upHead);
    if (head.length) upSocket.write(head);
    upSocket.pipe(socket).pipe(upSocket);
    upSocket.on("error", () => socket.destroy());
    socket.on("error", () => upSocket.destroy());
  });
  up.on("error", () => socket.destroy());
  up.end();
});

server.listen(PORT, HOST, () => {
  log(`foundry server on http://${HOST}:${PORT} (${auth.enabled ? "login on" : "no login: this computer only"}, run instance: ${machine.kind})`);
  if (!existsSync(join(GALLERY, "index.html"))) log(`the gallery isn't built yet: pnpm --filter gallery build`);
});

thumbsAfterDeploy();
setInterval(() => tick().catch((e) => log(`tick: ${e.message}`)), TICK_SECONDS * 1e3);
if (WARDEN_DIR) setInterval(wardenSoon, 60e3);

const shutdown = async () => {
  log("stopping");
  if (machine.kind === "local") await machine.stop();
  process.exit(0);
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
