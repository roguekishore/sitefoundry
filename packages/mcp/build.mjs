// Bundles the MCP server into one file. Vite and Playwright stay external: they're resolved
// from this repo's node_modules at run time (the bundle lives inside the repo).
import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/mcp.mjs",
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  external: ["vite", "playwright", "playwright-core", "fsevents", "lightningcss"],
  banner: {
    js: "import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);",
  },
});
console.log("built dist/mcp.mjs");
