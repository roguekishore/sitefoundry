// Screenshots of items, taken from the gallery's preview page. Results are cached per version.
// On this computer it uses a running gallery (pnpm gallery, port 4400) or starts its own quietly;
// on the foundry server it uses the server's own built gallery (http.ts).
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Browser } from "playwright";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");

export interface Shot {
  /** item, or a recreated site's full page */
  target: { item?: string; site?: string; specimen?: string };
  /** cache key part: changes when the item or theme version changes */
  key: string;
  theme: string;
  mode: "light" | "dark";
  width: number;
  fresh?: boolean;
}

export interface Previewer {
  screenshot(shot: Shot): Promise<Buffer>;
  close(): Promise<void>;
}

export interface PreviewerOptions {
  /** the gallery's address, ending in "/"; default: the local one */
  gallery?: () => Promise<string>;
  /** sent with every request the browser makes (the server's own pass for its login) */
  headers?: Record<string, string>;
  /** default <repo>/.cache/shots */
  cacheDir?: string;
  /** close the browser after this long without a screenshot (frees memory on a small server) */
  idleCloseMs?: number;
}

async function isGallery(url: string): Promise<boolean> {
  try {
    const res = await fetch(`${url}preview.html`, { signal: AbortSignal.timeout(1500) });
    return res.ok && (await res.text()).includes("/src/preview.tsx");
  } catch {
    return false;
  }
}

let localGallery: Promise<string> | undefined;
function local(): Promise<string> {
  localGallery ??= (async () => {
    if (await isGallery("http://localhost:4400/")) return "http://localhost:4400/";
    // Nothing may reach stdout: it carries the MCP protocol.
    const { createServer } = await import("vite");
    const server = await createServer({
      configFile: join(ROOT, "apps/gallery/vite.config.ts"),
      logLevel: "silent",
      clearScreen: false,
      server: { port: 4401, strictPort: false, open: false },
    });
    await server.listen();
    const url = server.resolvedUrls?.local[0];
    if (!url) throw new Error("could not start the gallery for previews");
    return url.endsWith("/") ? url : url + "/";
  })();
  return localGallery;
}

export function createPreviewer({ gallery = local, headers, cacheDir = join(ROOT, ".cache", "shots"), idleCloseMs }: PreviewerOptions = {}): Previewer {
  let browser: Promise<Browser> | undefined;
  let busy = 0;
  let idleTimer: NodeJS.Timeout | undefined;

  async function close() {
    const b = browser;
    browser = undefined;
    if (b) await (await b).close();
  }

  async function screenshot(shot: Shot): Promise<Buffer> {
    const file = join(cacheDir, `${shot.key}-${shot.theme}-${shot.mode}-${shot.width}.png`.replace(/[^a-z0-9@._-]/gi, "_"));
    if (!shot.fresh && existsSync(file)) return readFile(file);

    const base = await gallery();
    clearTimeout(idleTimer);
    busy++;
    try {
      browser ??= import("playwright").then(({ chromium }) => chromium.launch());
      const context = await (await browser).newContext({
        viewport: { width: shot.width, height: 900 },
        // final state of entrance animations, no waiting
        reducedMotion: "reduce",
        colorScheme: shot.mode,
        extraHTTPHeaders: headers,
      });
      try {
        const page = await context.newPage();
        const q = new URLSearchParams({ id: "mcp", theme: shot.theme, mode: shot.mode });
        for (const [k, v] of Object.entries(shot.target)) if (v) q.set(k, v);
        await page.goto(`${base}preview.html?${q}`, { waitUntil: "networkidle", timeout: 60_000 });
        await page.waitForFunction(() => (document.getElementById("root")?.childElementCount ?? 0) > 0, null, { timeout: 30_000 });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(400);
        const height = await page.evaluate(() => Math.ceil(document.getElementById("root")!.getBoundingClientRect().height));
        const png = await page.screenshot({ fullPage: true, clip: { x: 0, y: 0, width: shot.width, height: Math.max(1, Math.min(height, 6000)) } });
        await mkdir(cacheDir, { recursive: true });
        await writeFile(file, png);
        return png;
      } finally {
        await context.close();
      }
    } finally {
      busy--;
      if (idleCloseMs && !busy) idleTimer = setTimeout(() => void close(), idleCloseMs);
    }
  }

  return { screenshot, close };
}
