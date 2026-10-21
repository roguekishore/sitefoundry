// Everything the gallery knows, found in the item folders when it is built (vite.config.ts's
// virtual:foundry-catalog). New items appear without touching gallery code: drop a folder with
// meta.json into foundry/ (the sites gallery) or the vault repo's vault/ (the vault gallery).
import type { ComponentType } from "react";
import type { IndexEntry, ItemMeta } from "@foundry/core";
import { demos, metas, otherPages, sitePages, themeCss } from "virtual:foundry-catalog";
import { BASE } from "./base";

export { gallery } from "virtual:foundry-catalog";

export interface Item {
  name: string;
  /** folder relative to its repo, e.g. foundry/sites/huly/huly-header or vault/magicui/magicui-marquee */
  dir: string;
  meta: ItemMeta;
  hasDemo: boolean;
}

/** What you came to pick comes first; plumbing last. */
const TYPE_ORDER = ["block", "component", "theme", "asset", "lib", "base"];

export const items: Item[] = Object.entries(metas)
  .map(([dir, meta]) => ({ name: dir.split("/").pop()!, dir, meta, hasDemo: dir in demos }))
  .sort((a, b) => TYPE_ORDER.indexOf(a.meta.type) - TYPE_ORDER.indexOf(b.meta.type) || a.name.localeCompare(b.name));

export const byName = new Map(items.map((i) => [i.name, i]));
export const themes = items.filter((i) => i.meta.type === "theme");

/** The recreated sites (none in the vault gallery). */
export const sites = Object.keys(sitePages).sort();

export async function loadDemo(name: string): Promise<ComponentType | undefined> {
  const item = byName.get(name);
  const load = item && demos[item.dir];
  return load ? (await load()).default : undefined;
}

/** The pages a site has besides its landing page, e.g. ["about", "pricing"]. */
export function sitePageNames(site: string): string[] {
  return Object.keys(otherPages)
    .filter((key) => key.startsWith(`${site}/`))
    .map((key) => key.slice(site.length + 1))
    .sort();
}

/** The landing page, or with `page` one of the site's other pages. */
export async function loadSitePage(site: string, page?: string | null): Promise<ComponentType | undefined> {
  const load = page ? otherPages[`${site}/${page}`] : sitePages[site];
  return load ? (await load()).default : undefined;
}

export async function loadThemeCss(name: string): Promise<string | undefined> {
  const item = byName.get(name);
  const load = item && themeCss[item.dir];
  return load ? await load() : undefined;
}

/**
 * The theme a block is shown in when the picker says "own theme": the theme of the same site
 * (or source), so a recreation looks like the original until you choose to test it elsewhere.
 */
export function ownTheme(item: Item | undefined): string | undefined {
  if (!item) return undefined;
  if (item.meta.type === "theme") return item.name;
  const group = item.meta.site ?? item.meta.source;
  return group ? themes.find((t) => (t.meta.site ?? t.meta.source) === group)?.name : undefined;
}

/** The built registry (props, versions, npm packages). Items not built yet are simply missing. */
let indexPromise: Promise<Map<string, IndexEntry>> | undefined;
export function registryIndex(): Promise<Map<string, IndexEntry>> {
  indexPromise ??= fetch(`${BASE}r/index.json`)
    .then((r) => (r.ok ? r.json() : { items: [] }))
    .then((data: { items: IndexEntry[] }) => new Map(data.items.map((i) => [i.name, i])))
    .catch(() => new Map());
  return indexPromise;
}

export const installCommand = (item: Item) =>
  item.meta.type === "theme" ? `foundry theme ${item.name}` : `foundry add ${item.name}`;
