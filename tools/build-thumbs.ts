// Screenshots every item demo, theme specimen and site page for the gallery's thumbnails, so the
// gallery can show still images instead of a live preview per card.
//
//   pnpm build:thumbs                       only what has no thumbnail yet (new, failed, or files gone)
//   pnpm build:thumbs --force               everything again (with --only: just those)
//   pnpm build:thumbs --only newhalo,aurora names containing any of these words
//   pnpm build:thumbs --url http://localhost:4400   use a gallery that is already running
//   pnpm build:thumbs --concurrency 6 --settle 1500 --no-sites --no-items
//   pnpm build:thumbs:vault                 the vault repo's items, from the vault gallery (into its public/thumbs)
//
// Out: public/thumbs/items/<name>/<variant>.jpg, public/thumbs/sites/<site>/<page>/<variant>.jpg
// and public/thumbs/manifest.json. Variants: desktop-light, desktop-dark, phone-light, phone-dark.
// Each item is shot in its own theme (as the gallery's "own theme" shows it). A thing that already has
// its thumbnails is left alone, even if its code changed since: only --force shoots it again.
// The manifest is saved after every item, so stopping halfway (Ctrl+C) keeps what was done.
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium, type Browser, type BrowserContext } from "playwright";
import { ROOT, scan, targetFromArgs, type ScannedItem } from "./lib/scan.ts";

/** Bump when the way shots are taken changes: everything is shot again. */
const SHOT_VERSION = 1;
const TARGET = targetFromArgs(process.argv.slice(2));
const OUT = TARGET.thumbsDir;
const MANIFEST = join(OUT, "manifest.json");
const GALLERY = join(ROOT, "apps", "gallery");

const DEVICES = {
  // desktop is shot at half resolution: 640×400 pixels is plenty for a card, and 4× smaller
  desktop: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.5, isMobile: false },
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true },
} as const;
type Device = keyof typeof DEVICES;
type Mode = "light" | "dark";
const VARIANTS = (Object.keys(DEVICES) as Device[]).flatMap((device) => (["light", "dark"] as Mode[]).map((mode) => ({ device, mode, id: `${device}-${mode}` })));

// ---------- options ----------

const argv = process.argv.slice(2);
const flag = (name: string) => argv.includes(`--${name}`);
const option = (name: string) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const opts = {
  force: flag("force"),
  only: option("only")?.split(",").map((s) => s.trim()).filter(Boolean),
  url: option("url"),
  concurrency: Number(option("concurrency") ?? 4),
  /** ms to wait after rendering, for entrance animations to finish */
  settle: Number(option("settle") ?? 1200),
  items: !flag("no-items"),
  // the vault has no sites
  sites: !flag("no-sites") && TARGET.kind === "foundry",
};

// ---------- what to shoot ----------

interface Job {
  /** manifest key: "items/<name>" or "sites/<site>/<page>" */
  key: string;
  label: string;
  /** preview.html query, without theme and mode */
  query: Record<string, string>;
  /** theme the job is shown in ("none" = base defaults) */
  theme: string;
  hash: string;
}

interface ShotInfo {
  file: string;
  width: number;
  height: number;
  /** how tall the rendered content is, in CSS px: below the screen height means it is a short demo */
  contentHeight: number;
}
interface Entry {
  hash: string;
  at: string;
  shots: Record<string, ShotInfo>;
  /** console errors while rendering; the shot was still taken */
  warnings?: string[];
  /** nothing could be shot */
  error?: string;
}
interface Manifest {
  version: number;
  generatedAt: string;
  entries: Record<string, Entry>;
}

const sha = (...parts: string[]) => {
  const h = createHash("sha1");
  for (const p of parts) h.update(p).update("\0");
  return h.digest("hex").slice(0, 16);
};

async function readText(path: string) {
  try {
    return (await readFile(path, "utf8")).replace(/\r\n/g, "\n");
  } catch {
    return "";
  }
}

async function buildJobs(items: ScannedItem[]): Promise<Job[]> {
  const byName = new Map(items.map((i) => [i.name, i]));
  const themes = items.filter((i) => i.meta.type === "theme");

  // what every preview depends on: the preview page itself and the base styles
  const baseFiles = ["src/preview.tsx", "src/preview.css", "src/specimen.tsx", "src/catalog.ts", "preview.html"].map((f) => join(GALLERY, f));
  const baseItems = items.filter((i) => i.meta.type === "base");
  const baseHash = sha(String(SHOT_VERSION), ...(await Promise.all(baseFiles.map(readText))), ...baseItems.map((i) => itemOwnHash(i, "")));

  const demoText = new Map<string, string>();
  for (const i of items) if (i.demo) demoText.set(i.name, await readText(join(TARGET.root, i.demo)));

  function itemOwnHash(i: ScannedItem, demo: string) {
    return sha(JSON.stringify(i.meta), ...i.files.map((f) => `${f.path}:${f.content}`), demo);
  }
  // an item's look depends on the items it imports (and theirs)
  const closure = (name: string, seen = new Set<string>()): Set<string> => {
    if (seen.has(name)) return seen;
    seen.add(name);
    for (const dep of byName.get(name)?.imports.foundry ?? []) closure(dep, seen);
    return seen;
  };
  const hashOf = (names: Iterable<string>) =>
    sha(...[...names].sort().map((n) => { const i = byName.get(n); return i ? itemOwnHash(i, demoText.get(n) ?? "") : n; }));

  /** same rule as the gallery's "own theme": the theme of the item's site, or of its source */
  const ownTheme = (i: ScannedItem) => {
    if (i.meta.type === "theme") return i.name;
    const group = i.meta.site ?? i.meta.source;
    return (group && themes.find((t) => (t.meta.site ?? t.meta.source) === group)?.name) || "none";
  };

  const jobs: Job[] = [];
  if (opts.items) {
    // borrowed items (the vault's view of our base and themes) are shot in their own gallery
    for (const i of items.filter((i) => !i.borrowed)) {
      const isTheme = i.meta.type === "theme";
      if (!isTheme && !i.demo) continue;
      const theme = ownTheme(i);
      const deps = closure(i.name);
      if (theme !== "none") deps.add(theme);
      jobs.push({
        key: `items/${i.name}`,
        label: i.name,
        query: isTheme ? { specimen: i.name } : { item: i.name },
        theme,
        hash: sha(baseHash, hashOf(deps)),
      });
    }
  }

  if (opts.sites) {
    const sitesDir = join(ROOT, "foundry", "sites");
    for (const site of existsSync(sitesDir) ? await readdir(sitesDir) : []) {
      const landing = join(sitesDir, site, "page.tsx");
      if (!existsSync(landing)) continue;
      const pagesDir = join(sitesDir, site, "pages");
      const pages = existsSync(pagesDir) ? (await readdir(pagesDir)).filter((f) => f.endsWith(".tsx")).map((f) => f.slice(0, -4)) : [];
      const theme = themes.find((t) => t.meta.site === site)?.name ?? "none";
      // any change in the site's items or its theme can change any of its pages
      const siteItems = items.filter((i) => i.meta.site === site).map((i) => i.name);
      const deps = new Set(siteItems.flatMap((n) => [...closure(n)]));
      const siteHash = hashOf(deps);
      for (const page of ["landing", ...pages]) {
        const file = page === "landing" ? landing : join(pagesDir, `${page}.tsx`);
        jobs.push({
          key: `sites/${site}/${page}`,
          label: `${site}/${page}`,
          query: page === "landing" ? { site } : { site, page },
          theme,
          hash: sha(baseHash, siteHash, await readText(file)),
        });
      }
    }
  }

  if (opts.only?.length) return jobs.filter((j) => opts.only!.some((w) => j.label.includes(w)));
  return jobs;
}

// ---------- the gallery to shoot from ----------

/** The two vite functions used here. */
interface ViteApi {
  build(config: object): Promise<unknown>;
  preview(config: object): Promise<{ resolvedUrls: { local: string[] } | null; httpServer: { close(cb: () => void): void } }>;
}

/** Builds the gallery and serves the build privately (so a running dev gallery isn't disturbed). */
async function startGallery(): Promise<{ url: string; close: () => Promise<void> }> {
  if (opts.url) return { url: opts.url.replace(/\/$/, ""), close: async () => {} };
  const require = createRequire(join(GALLERY, "package.json"));
  // vite lives in the gallery's own node_modules, not the root's
  const vite: ViteApi = await import(pathToFileURL(require.resolve("vite")).href);
  const configFile = join(GALLERY, "vite.config.ts");
  // the vault gallery is the same app, built with --mode vault (it serves at /vault/)
  const mode = TARGET.kind === "vault" ? "vault" : "production";
  log("building the gallery (once per run)…");
  const started = Date.now();
  await vite.build({ configFile, mode, logLevel: "error" });
  log(`built in ${seconds(Date.now() - started)}`);
  const server = await vite.preview({ configFile, mode, logLevel: "error", preview: { port: 4410, strictPort: false, open: false } });
  const url = (server.resolvedUrls?.local[0] ?? "http://localhost:4410/").replace(/\/$/, "");
  return { url, close: () => new Promise<void>((resolve) => server.httpServer.close(() => resolve())) };
}

// ---------- shooting ----------

async function shoot(contexts: Record<Device, BrowserContext>, base: string, job: Job): Promise<Entry> {
  const dir = join(OUT, job.key);
  const shots: Record<string, ShotInfo> = {};
  const warnings = new Set<string>();
  let lastError = "";

  for (const v of VARIANTS) {
    const page = await contexts[v.device].newPage();
    page.on("pageerror", (e) => warnings.add(e.message.split("\n")[0].slice(0, 200)));
    page.on("console", (m) => m.type() === "error" && warnings.add(m.text().split("\n")[0].slice(0, 200)));
    try {
      const q = new URLSearchParams({ ...job.query, theme: job.theme, mode: v.mode });
      await page.goto(`${base}/preview.html?${q}`, { waitUntil: "load", timeout: 30_000 });
      await page.waitForFunction(() => document.documentElement.dataset.foundryReady, null, { timeout: 30_000 });
      const state = await page.evaluate(() => document.documentElement.dataset.foundryReady);
      if (state === "error") throw new Error((await page.textContent("#root"))?.trim() || "the preview reported an error");
      // fonts and images first, then time for entrance animations
      await page.evaluate(async () => {
        await document.fonts.ready;
        const pending = [...document.images].filter((img) => !img.complete);
        await Promise.race([
          Promise.all(pending.map((img) => new Promise((r) => { img.onload = img.onerror = r; }))),
          new Promise((r) => setTimeout(r, 5000)),
        ]);
      });
      await page.waitForTimeout(opts.settle);
      const contentHeight = await page.evaluate(() => Math.ceil(document.getElementById("root")!.getBoundingClientRect().height));
      const file = `${v.id}.jpg`;
      const buffer = await page.screenshot({ type: "jpeg", quality: 82, timeout: 30_000 });
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, file), buffer);
      const { width, height, deviceScaleFactor } = { ...DEVICES[v.device].viewport, deviceScaleFactor: DEVICES[v.device].deviceScaleFactor };
      shots[v.id] = { file: `${job.key}/${file}`, width: Math.round(width * deviceScaleFactor), height: Math.round(height * deviceScaleFactor), contentHeight };
    } catch (e) {
      lastError = `${v.id}: ${(e as Error).message.split("\n")[0]}`;
    } finally {
      await page.close();
    }
  }

  const entry: Entry = { hash: job.hash, at: new Date().toISOString(), shots };
  if (warnings.size) entry.warnings = [...warnings].slice(0, 5);
  if (!Object.keys(shots).length) entry.error = lastError || "no shots";
  else if (lastError) entry.warnings = [...(entry.warnings ?? []), lastError];
  return entry;
}

// ---------- run ----------

const log = (s: string) => console.log(s);
const seconds = (ms: number) => (ms >= 60_000 ? `${Math.floor(ms / 60_000)}m ${Math.round((ms % 60_000) / 1000)}s` : `${(ms / 1000).toFixed(1)}s`);

async function loadManifest(): Promise<Manifest> {
  try {
    const m = JSON.parse(await readFile(MANIFEST, "utf8")) as Manifest;
    if (m.version === SHOT_VERSION) return m;
  } catch {
    // first run
  }
  return { version: SHOT_VERSION, generatedAt: "", entries: {} };
}

let saving = Promise.resolve();
function saveManifest(m: Manifest) {
  // one write at a time, written to a temp file first so a stop never leaves half a file
  saving = saving.then(async () => {
    m.generatedAt = new Date().toISOString();
    const sorted = { ...m, entries: Object.fromEntries(Object.entries(m.entries).sort(([a], [b]) => a.localeCompare(b))) };
    const text = JSON.stringify(sorted, null, 1);
    await writeFile(MANIFEST + ".tmp", text);
    // Windows can briefly lock the file (antivirus, indexing): retry, then write it directly
    for (let attempt = 0; ; attempt++) {
      try {
        await rename(MANIFEST + ".tmp", MANIFEST);
        return;
      } catch (e) {
        if (attempt < 5) await new Promise((r) => setTimeout(r, 100 * (attempt + 1)));
        else {
          await writeFile(MANIFEST, text);
          await rm(MANIFEST + ".tmp", { force: true });
          return;
        }
      }
    }
  }).catch((e) => console.error(`couldn't save the manifest (the run goes on): ${(e as Error).message}`));
  return saving;
}

async function main() {
  const startedAt = Date.now();
  await mkdir(OUT, { recursive: true });
  const items = await scan(TARGET);
  const jobs = await buildJobs(items);
  const manifest = await loadManifest();

  // forget things that no longer exist (only on a full run, so --only doesn't drop the rest)
  if (!opts.only && opts.items && (opts.sites || TARGET.kind === "vault")) {
    const keys = new Set(jobs.map((j) => j.key));
    for (const key of Object.keys(manifest.entries)) {
      if (keys.has(key)) continue;
      delete manifest.entries[key];
      await rm(join(OUT, key), { recursive: true, force: true });
    }
  }

  // already shot = has a manifest entry without an error, and its image files are still on disk
  const hasThumbs = (key: string) => {
    const e = manifest.entries[key];
    return !!e && !e.error && Object.values(e.shots).every((s) => existsSync(join(OUT, s.file)));
  };
  const todo = jobs.filter((j) => opts.force || !hasThumbs(j.key));
  log(`${jobs.length} things to show · ${jobs.length - todo.length} already shot · ${todo.length} to shoot (${todo.length * VARIANTS.length} screenshots)`);
  if (!todo.length) {
    await saveManifest(manifest);
    return;
  }

  const gallery = await startGallery();
  log(`shooting from ${gallery.url} with ${opts.concurrency} tabs at a time`);
  let browser: Browser | undefined;
  const failed: string[] = [];
  const warned: string[] = [];
  try {
    browser = await chromium.launch({ args: ["--ignore-gpu-blocklist", "--enable-unsafe-swiftshader"] });
    let next = 0;
    let done = 0;
    const shootStart = Date.now();
    const worker = async () => {
      const contexts = {} as Record<Device, BrowserContext>;
      for (const [device, d] of Object.entries(DEVICES) as [Device, (typeof DEVICES)[Device]][]) {
        contexts[device] = await browser!.newContext({ ...d, hasTouch: d.isMobile, reducedMotion: "no-preference" });
      }
      try {
        while (next < todo.length) {
          const job = todo[next++];
          const t = Date.now();
          const entry = await shoot(contexts, gallery.url, job);
          manifest.entries[job.key] = entry;
          await saveManifest(manifest);
          done++;
          const left = ((Date.now() - shootStart) / done) * (todo.length - done);
          const status = entry.error ? `FAILED: ${entry.error}` : entry.warnings ? `ok, ${entry.warnings.length} warning(s)` : "ok";
          if (entry.error) failed.push(`${job.label}: ${entry.error}`);
          else if (entry.warnings) warned.push(job.label);
          log(`[${String(done).padStart(String(todo.length).length)}/${todo.length}] ${job.label.padEnd(44)} ${seconds(Date.now() - t).padStart(6)}  ${status}${done < todo.length ? `  · about ${seconds(left)} left` : ""}`);
        }
      } finally {
        await Promise.all(Object.values(contexts).map((c) => c.close()));
      }
    };
    await Promise.all(Array.from({ length: Math.max(1, opts.concurrency) }, worker));
  } finally {
    await browser?.close();
    await gallery.close();
    await saving;
  }

  log(`\ndone in ${seconds(Date.now() - startedAt)} · ${todo.length - failed.length} shot · ${failed.length} failed · ${warned.length} with warnings`);
  if (failed.length) log(`failed (shown as a placeholder in the gallery):\n  ${failed.join("\n  ")}`);
  if (warned.length) log(`warnings are in public/thumbs/manifest.json: ${warned.slice(0, 12).join(", ")}${warned.length > 12 ? ", …" : ""}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
