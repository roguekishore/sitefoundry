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

/** Resolves `@foundry/<name>` the same way the CLI does in a customer project. */
function foundryItems(): Plugin {
  let entries = scanEntries();
  return {
    name: "foundry-items",
    enforce: "pre",
    resolveId(id) {
      if (!id.startsWith("@foundry/")) return null;
      const name = id.slice("@foundry/".length);
      if (!entries.has(name)) entries = scanEntries();
      return entries.get(name) ?? null;
    },
  };
}

export default defineConfig({
  root: here,
  publicDir: join(ROOT, "public"),
  plugins: [foundryItems(), react(), tailwindcss()],
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
