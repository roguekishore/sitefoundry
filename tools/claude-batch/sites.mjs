// The site list, shared by precapture.mjs and run.mjs: a JSON file that holds the sites and
// what has happened to each. You add sites; the scripts fill in the rest as they go.
//
//   { "sites": [
//       { "url": "https://linear.app" },                                  slug: from the domain
//       { "url": "https://www.example.com", "slug": "saasy", "pages": ["pricing", "about"] },
//       { "url": "https://another.dev", "status": "skip" }                 left out until you change it
//   ] }
//
// status, set by the scripts: new → captured / capture-failed (precapture.mjs) → running →
// done / needs-you / failed / timed-out / stopped (run.mjs). Next to it: when, how long, the
// report, the log.
// The file is read again before every write, so you can add sites while a batch runs.
import { readFileSync, renameSync, writeFileSync } from "node:fs";

export function readSites(file) {
  let data;
  try {
    data = JSON.parse(readFileSync(file, "utf8"));
  } catch (e) {
    throw new Error(`${file}: ${e.message}`);
  }
  const list = Array.isArray(data) ? data : data.sites;
  if (!Array.isArray(list)) throw new Error(`${file}: expected { "sites": [ … ] }`);
  const slugs = new Set();
  return list.map((entry, i) => {
    const where = `${file}: sites[${i}]`;
    let url;
    try {
      url = new URL(entry.url);
    } catch {
      throw new Error(`${where}: "${entry.url}" is not a URL`);
    }
    const slug = entry.slug ?? slugOf(url);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) throw new Error(`${where}: slug "${slug}" must be lowercase kebab-case`);
    if (slugs.has(slug)) throw new Error(`${where}: slug "${slug}" is used twice`);
    slugs.add(slug);
    const pages = (entry.pages ?? []).map((p) => String(p).replace(/^\//, "").toLowerCase());
    return { ...entry, url: entry.url, slug, pages, status: entry.status ?? "new" };
  });
}

/** Merges `patch` into the site's entry, re-reading the file first so edits made meanwhile stay. */
export function updateSite(file, slug, patch) {
  const raw = JSON.parse(readFileSync(file, "utf8"));
  const list = Array.isArray(raw) ? raw : raw.sites;
  const i = readSites(file).findIndex((s) => s.slug === slug);
  if (i === -1) return; // removed from the list meanwhile
  list[i] = { url: list[i].url, slug, ...list[i], ...patch };
  for (const [k, v] of Object.entries(list[i])) if (v === undefined) delete list[i][k];
  // Written whole to a temporary file first, so the list is never left half-written.
  writeFileSync(`${file}.tmp`, JSON.stringify(raw, null, 2) + "\n");
  renameSync(`${file}.tmp`, file);
}

/** The skill's rule: the site's name from its domain (www. dropped, first label). */
function slugOf(url) {
  return url.hostname.replace(/^www\./, "").split(".")[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const referenceDir = (repo, slug) => `${repo}/foundry/sites/${slug}/_reference`;
