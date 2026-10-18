// Bundles the CLI into one file, so it runs anywhere with Node and no install step.
import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/foundry.mjs",
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  banner: {
    js: "#!/usr/bin/env node\nimport { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);",
  },
});
console.log("built dist/foundry.mjs");
