// Phase A of a batch: captures every site in a list ahead of time, on a network that can reach
// them, so the recreation (run.mjs) can run later without opening the sites at all.
//
//   node tools/claude-batch/precapture.mjs <sites.json> [--only huly,linear] [--force]
//
// Takes the sites whose status is "new" or "capture-failed" (--only: the ones named, whatever
// their status). For each: the landing page with the skill's capture.mjs, then each page named in
// its entry, found the way the skill finds it (the landing page's own links, else <origin>/<name>).
// Writes foundry/sites/<slug>/_reference/precapture.json, which tells the skill the captures are
// there and which pages couldn't be found, and sets the site's status in the list to "captured"
// or "capture-failed". Already captured pages are skipped unless --force.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readSites, referenceDir, updateSite } from "./sites.mjs";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const CAPTURE = join(REPO, ".claude/skills/recreate-site/capture.mjs");
const BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};
const force = args.includes("--force");
const only = flag("only")?.split(",");
const listFile = args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--only");
if (!listFile) {
  console.error("usage: node tools/claude-batch/precapture.mjs <sites.json> [--only slug,slug] [--force]");
  process.exit(1);
}

const EARLY = ["new", "capture-failed"]; // sites further along keep their status when captured again
const sites = readSites(listFile).filter((s) => (only ? only.includes(s.slug) : EARLY.includes(s.status)));
if (!sites.length) console.log(`nothing to capture: no site in ${listFile} is "new" or "capture-failed" (--only <slug> captures one again)`);
const results = []; // { slug, page, status }

for (const site of sites) {
  const dir = referenceDir(REPO, site.slug);
  console.log(`\n=== ${site.slug}: ${site.url}${site.pages.length ? ` + ${site.pages.join(", ")}` : ""}`);

  // A site that's already built and gets no new pages: the run would stop and ask. Say so now.
  const siteDir = dirname(dir);
  const built = existsSync(siteDir) && readdirSync(siteDir).some((f) => f !== "_reference");
  if (built && !site.pages.length) console.log(`  note: foundry/sites/${site.slug}/ is already built; the run will stop there (name pages to add, or pick another slug)`);

  const manifest = { url: site.url, slug: site.slug, capturedAt: new Date().toISOString(), landing: "original", pages: [] };

  if (!captured(dir, "original") || force) {
    if (!capture(site.url, dir, "original")) {
      results.push({ slug: site.slug, page: "landing", status: "FAILED" });
      updateSite(listFile, site.slug, { status: "capture-failed", capture: { at: new Date().toISOString(), error: "the landing page capture failed (see the console output)" } });
      continue; // pages are found through the landing capture
    }
    results.push({ slug: site.slug, page: "landing", status: "captured" });
  } else results.push({ slug: site.slug, page: "landing", status: "already captured" });

  for (const name of site.pages) {
    const label = `original-${name}`;
    const found = await findPage(site.url, dir, name);
    if (!found.url) {
      manifest.pages.push({ name, missing: found.reason });
      results.push({ slug: site.slug, page: name, status: `NOT FOUND (${found.reason})` });
      continue;
    }
    if (captured(dir, label) && !force) {
      manifest.pages.push({ name, url: found.url, label, foundBy: found.by });
      results.push({ slug: site.slug, page: name, status: "already captured" });
      continue;
    }
    if (capture(found.url, dir, label)) {
      manifest.pages.push({ name, url: found.url, label, foundBy: found.by });
      results.push({ slug: site.slug, page: name, status: `captured (${found.url})` });
    } else {
      manifest.pages.push({ name, url: found.url, missing: "the capture failed" });
      results.push({ slug: site.slug, page: name, status: "FAILED" });
    }
  }
  writeFileSync(join(dir, "precapture.json"), JSON.stringify(manifest, null, 2) + "\n");
  updateSite(listFile, site.slug, {
    status: EARLY.includes(site.status) ? "captured" : site.status,
    capture: {
      at: manifest.capturedAt,
      pages: Object.fromEntries(manifest.pages.map((p) => [p.name, p.missing ? `not captured: ${p.missing}` : p.url])),
    },
  });
}

console.log("\n=== summary");
for (const r of results) console.log(`  ${r.slug.padEnd(20)} ${r.page.padEnd(12)} ${r.status}`);
const ok = sites.filter((s) => existsSync(join(referenceDir(REPO, s.slug), "precapture.json")));
if (ok.length) {
  console.log("\nThe captures are plain files, not git-ignored. To run the batch on another machine, commit and push them, then git pull there:");
  console.log(`  git add ${ok.map((s) => `foundry/sites/${s.slug}/_reference`).join(" ")} tools/claude-batch/sites.json`);
}
process.exit(results.some((r) => /FAILED|NOT FOUND/.test(r.status)) ? 1 : 0);

/** Captured with this label: the design summary and at least one section crop. */
function captured(dir, label) {
  return existsSync(join(dir, `${label}-design.md`)) && existsSync(join(dir, `${label}-390-section-01.png`));
}

function capture(url, dir, label) {
  console.log(`  capturing ${url} as ${label}…`);
  const r = spawnSync(process.execPath, [CAPTURE, url, dir, label], { cwd: REPO, stdio: "inherit", timeout: 15 * 60_000 });
  const ok = r.status === 0 && captured(dir, label);
  if (!ok) console.log(`  capture of ${url} failed${r.error ? `: ${r.error.message}` : ""}`);
  return ok;
}

/** A page's URL: from the landing page's own links, else <origin>/<name> if that answers. */
async function findPage(siteUrl, dir, name) {
  const origin = new URL(siteUrl).origin;
  let links = [];
  try {
    const design = JSON.parse(readFileSync(join(dir, "original-design.json"), "utf8"));
    links = Object.values(design).flatMap((d) => d.links ?? []);
  } catch {}
  const words = name.toLowerCase();
  const segments = (path) => path.toLowerCase().split("/").filter(Boolean);
  const byLink =
    links.find((l) => segments(l.path).at(-1) === words) ?? // /pricing
    links.find((l) => segments(l.path).includes(words)) ?? // /en/pricing/teams
    links.find((l) => l.name.toLowerCase() === words.replace(/-/g, " ")); // "About us" for about-us
  if (byLink) return { url: origin + byLink.path, by: `link "${byLink.name}"` };

  const guess = `${origin}/${name}`;
  try {
    const res = await fetch(guess, { redirect: "follow", headers: { "user-agent": BROWSER_UA } });
    if (res.ok) return { url: res.url || guess, by: "guessed <origin>/<name>" };
    return { reason: `not in the site's links, and ${guess} answered ${res.status}` };
  } catch (e) {
    return { reason: `not in the site's links, and ${guess} failed: ${e.message}` };
  }
}
