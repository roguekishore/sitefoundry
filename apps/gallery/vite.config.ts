// One gallery, two apps:
//   pnpm gallery          the sites gallery: our recreations (foundry/), at /            (port 4400)
//   pnpm gallery:vault    the vault gallery: the vault repo next to this one, at /vault/ (port 4402)
// Built apart (`vite build` and `vite build --mode vault`), so a new site never rebuilds the vault.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { findVault } from "../../packages/core/src/roots.ts";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, "../..");
const slash = (p: string) => p.replace(/\\/g, "/");

/** A folder of items, and the repo root their `dir` is written relative to. */
interface ContentRoot {
  dir: string;
  repo: string;
}

interface Gallery {
  kind: "sites" | "vault";
  roots: ContentRoot[];
  /** the repo whose git history dates the items ("Recently added") */
  repo: string;
  /** what it serves as /r/ and /thumbs/ */
  publicDir: string;
  /** shadcn-directory libraries in the vault: label, homepage, licence (written by the vault's mirror) */
  sources: Record<string, unknown>;
}

function gallery(mode: string): Gallery {
  if (mode !== "vault") {
    return { kind: "sites", roots: [{ dir: join(ROOT, "foundry"), repo: ROOT }], repo: ROOT, publicDir: join(ROOT, "public"), sources: {} };
  }
  const vault = findVault(ROOT);
  if (!vault) throw new Error(`no vault repo next to ${ROOT} (looked for ${ROOT}-VAULT); set FOUNDRY_VAULT to its folder`);
  const sourcesFile = join(vault, "vault", "sources.json");
  return {
    kind: "vault",
    // the vault, plus foundry-base/utils (vault items use them) and our themes (to preview vault items in a site's colours)
    roots: [
      { dir: join(vault, "vault"), repo: vault },
      { dir: join(ROOT, "foundry", "base"), repo: ROOT },
      { dir: join(ROOT, "foundry", "themes"), repo: ROOT },
    ],
    repo: vault,
    publicDir: join(vault, "public"),
    sources: existsSync(sourcesFile) ? JSON.parse(readFileSync(sourcesFile, "utf8")) : {},
  };
}

/** Every item folder under the roots: absolute folder → its `dir` (relative to its repo). */
function scanItems(roots: ContentRoot[]): Map<string, string> {
  const found = new Map<string, string>();
  const walk = (dir: string, repo: string) => {
    if (existsSync(join(dir, "meta.json"))) {
      found.set(dir, slash(relative(repo, dir)));
      return;
    }
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith(".") && e.name !== "node_modules") walk(join(dir, e.name), repo);
    }
  };
  for (const r of roots) if (existsSync(r.dir)) walk(r.dir, r.repo);
  return found;
}

const readMeta = (dir: string) => {
  try {
    return JSON.parse(readFileSync(join(dir, "meta.json"), "utf8"));
  } catch {
    return undefined; // a half-written meta.json; `pnpm check` reports it
  }
};

/** name → absolute entry path, from every meta.json (rescanned when an unknown name shows up). */
function scanEntries(roots: ContentRoot[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const dir of scanItems(roots).keys()) {
    const meta = readMeta(dir);
    if (meta?.entry) map.set(dir.split(/[\\/]/).pop()!, join(dir, meta.entry));
  }
  return map;
}

/** The names a module exports itself (not re-exports): `export function X`, `export const X`, `export { X }`. */
function exportedNames(code: string): string[] {
  const names = new Set<string>();
  for (const m of code.matchAll(/^export\s+(?:default\s+)?(?:async\s+)?(?:function\*?|const|let|var|class)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of code.matchAll(/^export\s*\{([^}]*)\}(?!\s*from)/gm)) {
    for (const part of m[1].split(",")) {
      const local = part.trim().split(/\s+as\s+/)[0];
      if (/^[A-Za-z_$][\w$]*$/.test(local)) names.add(local);
    }
  }
  return [...names];
}

/**
 * Resolves `@foundry/<name>` the same way the CLI does in a customer project, and labels every
 * component an item exports with the item's name (`Component.__foundry`). The preview reads that
 * label to find which block drew which part of a site page, for the site viewer's inspector.
 * Gallery only: installed items are never changed.
 */
function foundryItems(roots: ContentRoot[]): Plugin {
  let entries = scanEntries(roots);
  let byPath = new Map([...entries].map(([name, path]) => [slash(path), name]));
  return {
    name: "foundry-items",
    enforce: "pre",
    resolveId(id) {
      if (!id.startsWith("@foundry/")) return null;
      const name = id.slice("@foundry/".length);
      if (!entries.has(name)) {
        entries = scanEntries(roots);
        byPath = new Map([...entries].map(([n, path]) => [slash(path), n]));
      }
      return entries.get(name) ?? null;
    },
    transform(code, id) {
      const name = byPath.get(slash(id.split("?")[0]));
      if (!name) return null;
      const names = exportedNames(code);
      if (!names.length) return null;
      const label = `\n;for (const c of [${names.join(", ")}]) if (typeof c === "function" || (c && typeof c === "object" && "$$typeof" in c)) try { Object.defineProperty(c, "__foundry", { value: ${JSON.stringify(name)}, configurable: true }); } catch {}\n`;
      return { code: code + label, map: null };
    },
  };
}

/**
 * `virtual:foundry-catalog`: everything the gallery shows, found on disk when the module loads: each
 * item's meta, demo and theme, and (sites gallery) every site page. Folders, not fixed glob
 * patterns, so the same code serves either gallery. A new or removed item reloads the page.
 */
function catalog(g: Gallery): Plugin {
  const id = "virtual:foundry-catalog";
  const resolved = "\0" + id;
  const imp = (abs: string, query = "") => JSON.stringify(slash(abs) + query);
  function generate(): string {
    const lines: string[] = [];
    const metas: string[] = [];
    const demos: string[] = [];
    const themeCss: string[] = [];
    const themeSources: string[] = [];
    let n = 0;
    for (const [abs, dir] of scanItems(g.roots)) {
      const meta = readMeta(abs);
      if (!meta) continue;
      metas.push(`${JSON.stringify(dir)}: ${JSON.stringify(meta)}`);
      const files = readdirSync(abs);
      const demo = meta.demo && existsSync(join(abs, meta.demo)) ? meta.demo : files.find((f) => /\.demo\.(tsx?|jsx?)$/.test(f));
      if (demo) demos.push(`${JSON.stringify(dir)}: () => import(${imp(join(abs, demo))})`);
      if (files.includes("theme.css")) {
        themeCss.push(`${JSON.stringify(dir)}: () => import(${imp(join(abs, "theme.css"), "?inline")}).then((m) => m.default)`);
        lines.push(`import theme${n} from ${imp(join(abs, "theme.css"), "?raw")};`);
        themeSources.push(`${JSON.stringify(dir)}: theme${n++}`);
      }
    }
    // the base defaults' colours, for the theme picker's "Base defaults"
    lines.push(`import themeBase from ${imp(join(ROOT, "foundry/base/foundry-base/foundry.css"), "?raw")};`);
    themeSources.push(`"foundry/base/foundry-base": themeBase`);

    const sitePages: string[] = [];
    const otherPages: string[] = [];
    const pageSources: string[] = [];
    const siteNotes: string[] = [];
    if (g.kind === "sites") {
      const sitesDir = join(ROOT, "foundry", "sites");
      for (const site of existsSync(sitesDir) ? readdirSync(sitesDir) : []) {
        const dir = join(sitesDir, site);
        if (!existsSync(join(dir, "page.tsx"))) continue;
        sitePages.push(`${JSON.stringify(site)}: () => import(${imp(join(dir, "page.tsx"))})`);
        lines.push(`import page${n} from ${imp(join(dir, "page.tsx"), "?raw")};`);
        pageSources.push(`${JSON.stringify(`${site}/landing`)}: page${n++}`);
        const pagesDir = join(dir, "pages");
        for (const f of existsSync(pagesDir) ? readdirSync(pagesDir).filter((f) => f.endsWith(".tsx")) : []) {
          const page = f.replace(/\.tsx$/, "");
          otherPages.push(`${JSON.stringify(`${site}/${page}`)}: () => import(${imp(join(pagesDir, f))})`);
          lines.push(`import page${n} from ${imp(join(pagesDir, f), "?raw")};`);
          pageSources.push(`${JSON.stringify(`${site}/${page}`)}: page${n++}`);
        }
        const notes = join(dir, "_reference", "NOTES.md");
        if (existsSync(notes)) {
          lines.push(`import notes${n} from ${imp(notes, "?raw")};`);
          siteNotes.push(`${JSON.stringify(site)}: notes${n++}`);
        }
      }
    }
    const obj = (entries: string[]) => `{\n${entries.map((e) => `  ${e},`).join("\n")}\n}`;
    return [
      ...lines,
      `export const gallery = ${JSON.stringify(g.kind)};`,
      `export const sources = ${JSON.stringify(g.sources)};`,
      `export const metas = ${obj(metas)};`,
      `export const demos = ${obj(demos)};`,
      `export const themeCss = ${obj(themeCss)};`,
      `export const themeSources = ${obj(themeSources)};`,
      `export const sitePages = ${obj(sitePages)};`,
      `export const otherPages = ${obj(otherPages)};`,
      `export const pageSources = ${obj(pageSources)};`,
      `export const siteNotes = ${obj(siteNotes)};`,
    ].join("\n");
  }
  return {
    name: "foundry-catalog",
    resolveId: (source) => (source === id ? resolved : null),
    load: (r) => (r === resolved ? generate() : null),
    configureServer(server: ViteDevServer) {
      for (const r of g.roots) server.watcher.add(r.dir);
      const changed = (file: string) => {
        if (!/[\\/]meta\.json$|\.demo\.(tsx?|jsx?)$|[\\/]theme\.css$|[\\/]page\.tsx$|[\\/]pages[\\/][^\\/]+\.tsx$/.test(file)) return;
        const mod = server.moduleGraph.getModuleById(resolved);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", changed);
      server.watcher.on("unlink", changed);
      server.watcher.on("change", (file) => /[\\/]meta\.json$/.test(file) && changed(file));
    },
  };
}

/** The item folders Tailwind scans for class names: written into preview.css where it says so. */
function itemSources(g: Gallery): Plugin {
  const css = slash(join(here, "src", "preview.css"));
  return {
    name: "foundry-item-sources",
    enforce: "pre",
    transform(code, id) {
      if (slash(id.split("?")[0]) !== css) return null;
      const lines = g.roots.map((r) => `@source "${slash(relative(join(here, "src"), r.dir))}";`).join("\n");
      return { code: code.replace("/* foundry:item-sources */", lines), map: null };
    },
  };
}

/** `virtual:foundry-added`: when each item's meta.json was first committed (ms), for "Recently added". */
function addedDates(g: Gallery): Plugin {
  const id = "virtual:foundry-added";
  return {
    name: "foundry-added",
    resolveId: (source) => (source === id ? "\0" + id : null),
    load(resolved) {
      if (resolved !== "\0" + id) return null;
      const added: Record<string, number> = {};
      const folders = g.kind === "vault" ? ["vault/**/meta.json"] : ["foundry/**/meta.json"];
      try {
        const log = execFileSync("git", ["log", "--diff-filter=A", "--format=%ct", "--name-only", "--", ...folders], { cwd: g.repo, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
        let time = 0;
        for (const line of log.split("\n")) {
          if (/^\d+$/.test(line)) time = Number(line) * 1000;
          else if (line.endsWith("/meta.json")) added[line.split("/").at(-2)!] = time; // newest first: the last one seen is the first commit
        }
      } catch {
        // no git: everything counts as equally old
      }
      return `export default ${JSON.stringify(added)};`;
    },
  };
}

export default defineConfig(({ mode }) => {
  const g = gallery(mode);
  const vault = g.kind === "vault";
  const allow = [ROOT, ...g.roots.map((r) => r.repo)];
  return {
    root: here,
    // the vault gallery lives at /vault/ (on the foundry server, beside the sites gallery at /);
    // the sites gallery's base is left to `--base` (a run's preview is built for /p/<slug>/)
    base: vault ? "/vault/" : undefined,
    publicDir: g.publicDir,
    plugins: [foundryItems(g.roots), catalog(g), itemSources(g), addedDates(g), react(), tailwindcss()],
    resolve: {
      // vault items written for Next.js get plain-React stand-ins
      alias: [
        { find: /^next\/link$/, replacement: join(here, "src/shims/next-link.tsx") },
        { find: /^next\/image$/, replacement: join(here, "src/shims/next-image.tsx") },
      ],
      // one React for the gallery and every item, wherever the item's repo installed its own
      dedupe: ["react", "react-dom"],
    },
    // The run pages talk to the foundry server (`pnpm serve`); in dev the gallery passes those requests on.
    server: { port: vault ? 4402 : 4400, fs: { allow }, proxy: { "/api": "http://127.0.0.1:4401", "/p/": "http://127.0.0.1:4401" } },
    preview: { port: vault ? 4402 : 4400 },
    build: {
      outDir: join(here, vault ? "dist-vault" : "dist"),
      emptyOutDir: true,
      rollupOptions: { input: { main: join(here, "index.html"), preview: join(here, "preview.html") } },
    },
  };
});
