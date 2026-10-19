import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, "../..");
const SOURCES = ["foundry", "vault"];

/** name → absolute entry path, from every meta.json (rescanned when an unknown name shows up). */
function scanEntries(): Map<string, string> {
  const map = new Map<string, string>();
  const walk = (dir: string) => {
    if (existsSync(join(dir, "meta.json"))) {
      try {
        const meta = JSON.parse(readFileSync(join(dir, "meta.json"), "utf8"));
        if (meta.entry) map.set(dir.split(/[\\/]/).pop()!, join(dir, meta.entry));
      } catch {
        // a half-written meta.json; `pnpm check` reports it
      }
      return;
    }
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith(".") && e.name !== "node_modules") walk(join(dir, e.name));
    }
  };
  for (const s of SOURCES) if (existsSync(join(ROOT, s))) walk(join(ROOT, s));
  return map;
}

const slash = (p: string) => p.replace(/\\/g, "/");

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
function foundryItems(): Plugin {
  let entries = scanEntries();
  let byPath = new Map([...entries].map(([name, path]) => [slash(path), name]));
  return {
    name: "foundry-items",
    enforce: "pre",
    resolveId(id) {
      if (!id.startsWith("@foundry/")) return null;
      const name = id.slice("@foundry/".length);
      if (!entries.has(name)) {
        entries = scanEntries();
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

/** `virtual:foundry-added`: when each item's meta.json was first committed (ms), for "Recently added". */
function addedDates(): Plugin {
  const id = "virtual:foundry-added";
  return {
    name: "foundry-added",
    resolveId: (source) => (source === id ? "\0" + id : null),
    load(resolved) {
      if (resolved !== "\0" + id) return null;
      const added: Record<string, number> = {};
      try {
        const log = execFileSync("git", ["log", "--diff-filter=A", "--format=%ct", "--name-only", "--", "foundry/**/meta.json", "vault/**/meta.json"], { cwd: ROOT, encoding: "utf8" });
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

export default defineConfig({
  root: here,
  publicDir: join(ROOT, "public"),
  plugins: [foundryItems(), addedDates(), react(), tailwindcss()],
  resolve: {
    // vault items written for Next.js get plain-React stand-ins
    alias: [
      { find: /^next\/link$/, replacement: join(here, "src/shims/next-link.tsx") },
      { find: /^next\/image$/, replacement: join(here, "src/shims/next-image.tsx") },
    ],
    dedupe: ["react", "react-dom"],
  },
  server: { port: 4400, fs: { allow: [ROOT] } },
  preview: { port: 4400 },
  build: {
    outDir: join(here, "dist"),
    emptyOutDir: true,
    rollupOptions: { input: { main: join(here, "index.html"), preview: join(here, "preview.html") } },
  },
});
