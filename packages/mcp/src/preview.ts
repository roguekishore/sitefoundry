// Screenshots of items, taken from the gallery's preview page. Uses a running gallery
// (pnpm gallery, port 4400) or starts its own quietly. Results are cached per version.
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Browser } from "playwright";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const SHOTS = join(ROOT, ".cache", "shots");

let galleryUrl: Promise<string> | undefined;
let browser: Promise<Browser> | undefined;

async function isGallery(url: string): Promise<boolean> {
  try {
    const res = await fetch(`${url}preview.html`, { signal: AbortSignal.timeout(1500) });
    return res.ok && (await res.text()).includes("/src/preview.tsx");
  } catch {
    return false;
  }
}

function gallery(): Promise<string> {
  galleryUrl ??= (async () => {
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
  return galleryUrl;
}

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

export async function screenshot(shot: Shot): Promise<Buffer> {
  const file = join(SHOTS, `${shot.key}-${shot.theme}-${shot.mode}-${shot.width}.png`.replace(/[^a-z0-9@._-]/gi, "_"));
  if (!shot.fresh && existsSync(file)) return readFile(file);

  const base = await gallery();
  browser ??= import("playwright").then(({ chromium }) => chromium.launch());
  const context = await (await browser).newContext({
    viewport: { width: shot.width, height: 900 },
    // final state of entrance animations, no waiting
    reducedMotion: "reduce",
    colorScheme: shot.mode,
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
    await mkdir(SHOTS, { recursive: true });
    await writeFile(file, png);
    return png;
  } finally {
    await context.close();
  }
}

export async function closePreviews(): Promise<void> {
  if (browser) await (await browser).close();
}
