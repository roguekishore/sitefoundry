// Everything the gallery knows, discovered from the repo's folders at build time.
// New items appear without touching gallery code: drop a folder with meta.json into foundry/ or vault/.
import type { ComponentType } from "react";
import type { IndexEntry, ItemMeta } from "@foundry/core";

const metaFiles = import.meta.glob<ItemMeta>(
  ["../../../foundry/**/meta.json", "../../../vault/**/meta.json", "!**/_*/**", "!**/node_modules/**"],
  { eager: true, import: "default" },
);
const demoFiles = import.meta.glob<{ default: ComponentType }>(
  ["../../../foundry/**/*.demo.tsx", "../../../vault/**/*.demo.tsx", "../../../vault/**/*.demo.jsx", "!**/_*/**", "!**/node_modules/**"],
);
const themeFiles = import.meta.glob<string>(
  ["../../../foundry/**/theme.css", "../../../vault/**/theme.css", "!**/_*/**", "!**/node_modules/**"],
  { query: "?inline", import: "default" },
);
const sitePages = import.meta.glob<{ default: ComponentType }>("../../../foundry/sites/*/page.tsx");

export interface Item {
  name: string;
  /** repo-relative folder, e.g. foundry/sites/huly/huly-header */
  dir: string;
  meta: ItemMeta;
  hasDemo: boolean;
}

const dirOf = (key: string) => key.replace(/^(\.\.\/)+/, "").replace(/\/[^/]+$/, "");

const demoByDir = new Map(Object.entries(demoFiles).map(([key, load]) => [dirOf(key), load]));
const themeByDir = new Map(Object.entries(themeFiles).map(([key, load]) => [dirOf(key), load]));

/** What you came to pick comes first; plumbing last. */
const TYPE_ORDER = ["block", "component", "theme", "asset", "lib", "base"];

export const items: Item[] = Object.entries(metaFiles)
  .map(([key, meta]) => {
    const dir = dirOf(key);
    return { name: dir.split("/").pop()!, dir, meta, hasDemo: demoByDir.has(dir) };
  })
  .sort((a, b) => TYPE_ORDER.indexOf(a.meta.type) - TYPE_ORDER.indexOf(b.meta.type) || a.name.localeCompare(b.name));

export const byName = new Map(items.map((i) => [i.name, i]));
export const themes = items.filter((i) => i.meta.type === "theme");

export const sites = Object.keys(sitePages)
  .map((key) => key.match(/sites\/([^/]+)\/page\.tsx$/)?.[1])
  .filter((s): s is string => !!s)
  .sort();

export async function loadDemo(name: string): Promise<ComponentType | undefined> {
  const item = byName.get(name);
  const load = item && demoByDir.get(item.dir);
  return load ? (await load()).default : undefined;
}

export async function loadSitePage(site: string): Promise<ComponentType | undefined> {
  const load = sitePages[`../../../foundry/sites/${site}/page.tsx`];
  return load ? (await load()).default : undefined;
}

export async function loadThemeCss(name: string): Promise<string | undefined> {
  const item = byName.get(name);
  const load = item && themeByDir.get(item.dir);
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
  indexPromise ??= fetch("/r/index.json")
    .then((r) => (r.ok ? r.json() : { items: [] }))
    .then((data: { items: IndexEntry[] }) => new Map(data.items.map((i) => [i.name, i])))
    .catch(() => new Map());
  return indexPromise;
}

export const installCommand = (item: Item) =>
  item.meta.type === "theme" ? `foundry theme ${item.name}` : `foundry add ${item.name}`;
