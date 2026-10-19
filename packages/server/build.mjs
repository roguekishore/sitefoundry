// Bundles the two programs into one file each, so an instance needs only Node to run them:
//   dist/server.mjs   the foundry server (login, gallery, run page, API, the run queue)
//   dist/runner.mjs   the runner (takes a job from the server, runs Gemini or Claude on it)
import * as esbuild from "esbuild";

for (const [entry, out] of [
  ["src/server.ts", "dist/server.mjs"],
  ["src/runner/main.ts", "dist/runner.mjs"],
]) {
  await esbuild.build({
    entryPoints: [entry],
    outfile: out,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node22",
    banner: {
      js: "import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);",
    },
  });
  console.log(`built ${out}`);
}
