// Polite, cached HTTP for the mirror: one request at a time, a pause between requests,
// robots.txt honoured, every response kept in vault/_raw/ so a second run only asks for
// what it hasn't seen (indexes are re-read after `indexMaxAgeHours`).
import { existsSync } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { ROOT } from "../../lib/scan.ts";

export const RAW_DIR = join(ROOT, "vault", "_raw");
const USER_AGENT = "sitefoundry-mirror/1 (private mirror; one request at a time)";
const DELAY_MS = 400;

export const stats = { requests: 0, cached: 0, notFound: 0, blocked: 0 };
export let offline = false;
export function setOffline(value: boolean) {
  offline = value;
}

let lastRequest = 0;
const robotsCache = new Map<string, string[]>();

/** Where a URL is kept on disk: vault/_raw/<host>/<path>, with a hash for query strings. */
function cachePath(url: string): string {
  const u = new URL(url);
  let path = decodeURIComponent(u.pathname).replace(/\/$/, "/index");
  if (u.search) path += "__" + createHash("sha1").update(u.search).digest("hex").slice(0, 10);
  return join(RAW_DIR, u.host, ...path.split("/").filter(Boolean).map((p) => p.replace(/[<>:"|?*]/g, "_")));
}

async function request(url: string): Promise<Response> {
  const wait = lastRequest + DELAY_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastRequest = Date.now();
  stats.requests++;
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": USER_AGENT } });
      if ((res.status === 429 || res.status >= 500) && attempt < 3) {
        await new Promise((r) => setTimeout(r, 5000 * attempt));
        continue;
      }
      return res;
    } catch (e) {
      if (attempt >= 3) throw e;
      await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
}

/** Disallow rules that apply to us (the `User-agent: *` group), per origin. */
async function disallowed(origin: string): Promise<string[]> {
  if (robotsCache.has(origin)) return robotsCache.get(origin)!;
  const text = (await get(`${origin}/robots.txt`, { maxAgeHours: 24 * 7, skipRobots: true })) ?? "";
  const rules: string[] = [];
  let applies = false;
  let lastWasAgent = false;
  for (const raw of text.split("\n")) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i);
    if (!m) continue;
    const [, key, value] = m;
    if (key.toLowerCase() === "user-agent") {
      // consecutive User-agent lines share one group
      applies = (lastWasAgent && applies) || value === "*" || /sitefoundry/i.test(value);
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (applies && key.toLowerCase() === "disallow" && value) rules.push(value);
  }
  robotsCache.set(origin, rules);
  return rules;
}

async function allowed(url: string): Promise<boolean> {
  const u = new URL(url);
  const rules = await disallowed(u.origin);
  const path = u.pathname + u.search;
  return !rules.some((rule) => {
    const re = new RegExp("^" + rule.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\\\$$/, "$"));
    return re.test(path);
  });
}

export interface GetOptions {
  /** re-fetch when the cached copy is older than this (indexes); items are fetched once */
  maxAgeHours?: number;
  skipRobots?: boolean;
}

/** The body of `url` as text, or undefined for a 404 (remembered, so it isn't asked again). */
export async function get(url: string, opts: GetOptions = {}): Promise<string | undefined> {
  const file = cachePath(url);
  const missing = file + ".404";
  const fresh = async (p: string) =>
    opts.maxAgeHours === undefined || Date.now() - (await stat(p)).mtimeMs < opts.maxAgeHours * 3600_000;
  if (existsSync(file) && (offline || (await fresh(file)))) {
    stats.cached++;
    return readFile(file, "utf8");
  }
  if (existsSync(missing) && (offline || (await fresh(missing)))) {
    stats.cached++;
    return undefined;
  }
  if (offline) {
    if (existsSync(file)) return readFile(file, "utf8");
    throw new Error(`offline and not cached: ${url}`);
  }
  if (!opts.skipRobots && !(await allowed(url))) {
    stats.blocked++;
    throw new Error(`robots.txt disallows ${url}`);
  }
  const res = await request(url);
  await mkdir(dirname(file), { recursive: true });
  if (res.status === 404 || res.status === 410) {
    stats.notFound++;
    await writeFile(missing, String(res.status));
    return undefined;
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const body = await res.text();
  await writeFile(file, body);
  return body;
}

export async function getJson<T>(url: string, opts: GetOptions = {}): Promise<T | undefined> {
  const text = await get(url, opts);
  return text === undefined ? undefined : (JSON.parse(text) as T);
}
