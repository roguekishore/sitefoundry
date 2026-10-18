// `pnpm exec tsx tools/mirror/mirror.ts [shadcn|reactbits…] [--offline]`: mirror third-party items into vault/.
// Re-runnable: downloads are cached in vault/_raw/ (indexes re-read after a day, items once),
// folders are rewritten from the cache, and an item's version goes up only when it changed.
// Afterwards: `pnpm check` and `pnpm build:registry`.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import semver from "semver";
import { ROOT } from "../lib/scan.ts";
import { RAW_DIR, setOffline, stats } from "./lib/fetch.ts";
import { staleItems, writeItem, type MirrorItem, type Skip, type WriteResult } from "./lib/write.ts";
import { convertShadcn } from "./sources/shadcn.ts";
import { convertReactBits } from "./sources/reactbits.ts";

const SOURCES: Record<string, (log: (m: string) => void) => Promise<{ items: MirrorItem[]; skipped: Skip[]; packages: Map<string, Set<string>> }>> = {
  shadcn: convertShadcn,
  reactbits: convertReactBits,
};

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--offline")) setOffline(true);
  const wanted = args.filter((a) => !a.startsWith("--"));
  const names = wanted.length ? wanted : Object.keys(SOURCES);
  const unknown = names.filter((n) => !SOURCES[n]);
  if (unknown.length) throw new Error(`unknown source(s): ${unknown.join(", ")}; known: ${Object.keys(SOURCES).join(", ")}`);

  const rootPkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const have: Record<string, string> = { ...rootPkg.devDependencies, ...rootPkg.dependencies };
  const report: Record<string, unknown> = {};

  for (const source of names) {
    const log = (m: string) => console.log(m);
    const { items, skipped, packages } = await SOURCES[source](log);
    const result: WriteResult = { written: [], unchanged: [] };
    for (const item of items) await writeItem(item, result);
    const stale = await staleItems(source, new Set(items.map((i) => i.name)));

    const missing: string[] = [];
    const clashes: string[] = [];
    for (const [pkg, ranges] of [...packages].sort(([a], [b]) => a.localeCompare(b))) {
      if (["react", "react-dom"].includes(pkg)) continue;
      if (!have[pkg]) missing.push(ranges.size ? `${pkg}@${[...ranges][0]}` : pkg);
      for (const range of ranges) {
        const ours = semver.minVersion(have[pkg] ?? "0.0.0")?.version;
        if (have[pkg] && ours && semver.validRange(range) && !semver.satisfies(ours, range)) clashes.push(`${pkg}: upstream ${range}, root package.json ${have[pkg]}`);
      }
    }
    console.log(`\n${source}: ${items.length} items (${result.written.length} written, ${result.unchanged.length} unchanged), ${skipped.length} skipped`);
    if (stale.length) console.log(`  no longer upstream (left in place): ${stale.join(", ")}`);
    if (missing.length) console.log(`  npm packages to add: pnpm add -w ${missing.map((m) => `"${m}"`).join(" ")}`);
    for (const c of clashes) console.log(`  version differs: ${c}`);
    report[source] = { items: items.length, written: result.written, skipped, stale, missing, clashes };
  }
  await mkdir(RAW_DIR, { recursive: true });
  await writeFile(join(RAW_DIR, "last-run.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(`\nrequests: ${stats.requests}, from cache: ${stats.cached}, not found: ${stats.notFound}`);
  console.log(`skip list and details: vault/_raw/last-run.json`);
}

await main();
