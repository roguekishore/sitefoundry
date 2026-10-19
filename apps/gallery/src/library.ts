// What the gallery window shows about the catalog without opening any preview: which blocks each
// site page uses, each theme's colours, thumbnails, and when items were added. The preview iframe
// doesn't need any of this, so it lives apart from catalog.ts.
import added from "virtual:foundry-added";
import { BASE } from "./base";
import { byName, items, ownTheme, sitePageNames, sites, themes, type Item } from "./catalog";

const pageSources = import.meta.glob<string>(["../../../foundry/sites/*/page.tsx", "../../../foundry/sites/*/pages/*.tsx"], {
  query: "?raw",
  import: "default",
  eager: true,
});
// The design notes a recreation keeps; their first lines name the original.
const siteNotes = import.meta.glob<string>("../../../foundry/sites/*/_reference/NOTES.md", { query: "?raw", import: "default", eager: true });
const themeSources = import.meta.glob<string>(
  ["../../../foundry/**/theme.css", "../../../vault/**/theme.css", "../../../foundry/base/foundry-base/foundry.css", "!**/_*/**", "!**/node_modules/**"],
  { query: "?raw", import: "default", eager: true },
);

// ---------- what you browse ----------

/** Plumbing (lib, base) is installed along with what needs it; nobody picks it from a list. */
export const library: Item[] = items.filter((i) => !["lib", "base"].includes(i.meta.type));

export type Source = "foundry" | "shadcn" | "reactbits";
export const SOURCES: Source[] = ["foundry", "shadcn", "reactbits"];
export const SOURCE_LABEL: Record<string, string> = { foundry: "Recreations", shadcn: "shadcn", reactbits: "React Bits" };
export const SOURCE_COLOUR: Record<string, string> = { foundry: "#f2602a", shadcn: "#71717a", reactbits: "#8b5cf6" };
export const sourceOf = (i: Item): string => i.meta.source ?? "foundry";

export const TYPE_LABEL: Record<string, string> = { block: "Blocks", component: "Components", theme: "Themes", asset: "Assets" };
export const titleCase = (s: string) => s.replace(/(^|-)(\w)/g, (_, dash: string, c: string) => (dash ? " " : "") + c.toUpperCase());

export const addedAt = (name: string): number => added[name] ?? Date.now();

// ---------- sites and their pages ----------

export const LANDING = "landing";

/** "landing" first, then the site's other pages. */
export const pagesOf = (site: string): string[] => [LANDING, ...sitePageNames(site)];
const SPELLED = { faq: "FAQ" } as Record<string, string>;
export const pageLabel = (page: string) => (page === LANDING ? "Landing" : (SPELLED[page] ?? titleCase(page)));

const sourceOfPage = (site: string, page: string) =>
  pageSources[page === LANDING ? `../../../foundry/sites/${site}/page.tsx` : `../../../foundry/sites/${site}/pages/${page}.tsx`] ?? "";

/**
 * The items a page imports, in the order it imports them. The preview reports the order they
 * actually render in; this is what's known before it loads (and for pages never opened).
 */
export function pageItems(site: string, page: string): string[] {
  const names = [...sourceOfPage(site, page).matchAll(/from\s+["']@foundry\/([\w-]+)["']/g)].map((m) => m[1]);
  return [...new Set(names)].filter((n) => byName.has(n));
}

/** The original a site recreates ("huly.io"), from its notes or its landing page. */
export function siteOrigin(site: string): string | undefined {
  const domain = /\b((?:[a-z0-9-]+\.)+(?:com|io|app|dev|co|ai|net|org))\b/i;
  const notes = (siteNotes[`../../../foundry/sites/${site}/_reference/NOTES.md`] ?? "").split("\n").slice(0, 12).join("\n");
  return notes.match(domain)?.[1] ?? sourceOfPage(site, LANDING).match(domain)?.[1];
}

export const siteLabel = (site: string) => titleCase(site);
export const themeOf = (site: string): string | undefined => themes.find((t) => t.meta.site === site)?.name;

/** Sites with the most pages first. */
export const siteList: string[] = [...sites].sort((a, b) => pagesOf(b).length - pagesOf(a).length || a.localeCompare(b));

/** Every site page that uses the item, as [site, page]. */
export function usedOn(name: string): [string, string][] {
  return siteList.flatMap((s) => pagesOf(s).filter((p) => pageItems(s, p).includes(name)).map((p) => [s, p] as [string, string]));
}

export const siteItems = (site: string) => library.filter((i) => i.meta.site === site);

// ---------- themes ----------

/** The four colours a theme is recognised by: page, text, primary, muted. */
export interface Swatch {
  bg: string;
  fg: string;
  primary: string;
  muted: string;
}
export interface ThemeChoice {
  id: string;
  label: string;
  group: string;
  light?: Swatch;
  dark?: Swatch;
  description?: string;
}

function parseSwatches(css: string): { light?: Swatch; dark?: Swatch } {
  const read = (selector: RegExp): Swatch | undefined => {
    const body = css.match(selector)?.[1];
    if (!body) return undefined;
    const v = (token: string) => body.match(new RegExp(`--${token}:\\s*([^;]+);`))?.[1].trim();
    const bg = v("background");
    return bg ? { bg, fg: v("foreground") ?? "", primary: v("primary") ?? "", muted: v("muted") ?? "" } : undefined;
  };
  return { light: read(/:root\s*\{([^}]*)\}/), dark: read(/\.dark\s*\{([^}]*)\}/) };
}

const swatchesByDir = new Map(Object.entries(themeSources).map(([key, css]) => [key.replace(/^(\.\.\/)+/, "").replace(/\/[^/]+$/, ""), parseSwatches(css)]));

function themeGroup(t: Item): string {
  if (t.meta.source && t.meta.source !== "foundry") return SOURCE_LABEL[t.meta.source] ?? t.meta.source;
  if (t.meta.site && !t.name.startsWith("sample")) return "Recreated sites";
  return "Samples";
}

export const THEME_GROUPS = ["Foundry", "Recreated sites", "shadcn", "Samples"];
export const OWN: ThemeChoice = { id: "own", label: "Own theme", group: "", description: "each item in its own site's colours" };
export const themeChoices: ThemeChoice[] = [
  OWN,
  { id: "none", label: "Base defaults", group: "Foundry", ...swatchesByDir.get("foundry/base/foundry-base") },
  ...themes.map((t) => ({ id: t.name, label: t.meta.site && themeGroup(t) === "Recreated sites" ? siteLabel(t.meta.site) : t.meta.title.replace(/ theme$/i, ""), group: themeGroup(t), ...swatchesByDir.get(t.dir) })),
];
export const themeChoice = (id: string) => themeChoices.find((t) => t.id === id);

/** The theme an item is previewed in for a picker setting ("own" follows the item). */
export const themeFor = (item: Item | undefined, setting: string) => (setting === "own" ? (ownTheme(item) ?? "none") : setting);
/** The colour an item or site is marked with in lists: its theme's primary. */
export function markColour(item: Item | undefined): string {
  if (!item) return SOURCE_COLOUR.foundry;
  if (sourceOf(item) !== "foundry") return SOURCE_COLOUR[sourceOf(item)] ?? SOURCE_COLOUR.foundry;
  return themeChoice(themeFor(item, "own"))?.light?.primary || SOURCE_COLOUR.foundry;
}
export const siteColour = (site: string) => themeChoice(themeOf(site) ?? "none")?.light?.primary || SOURCE_COLOUR.foundry;

// ---------- thumbnails (pnpm build:thumbs) ----------

export interface Shot {
  file: string;
  width: number;
  height: number;
  contentHeight: number;
}
/** An item's or page's shots by variant ("desktop-light"…), and when they were taken. */
export interface ThumbEntry {
  at: string;
  shots: Record<string, Shot>;
}
export type Thumbs = Map<string, ThumbEntry>;

let thumbsPromise: Promise<Thumbs> | undefined;
/** Every thumbnail there is, by "items/<name>" or "sites/<site>/<page>". Missing ones show a placeholder. */
export function loadThumbs(): Promise<Thumbs> {
  thumbsPromise ??= fetch(`${BASE}thumbs/manifest.json`)
    .then((r) => (r.ok ? r.json() : { entries: {} }))
    .then((m: { entries: Record<string, Partial<ThumbEntry>> }) => new Map(Object.entries(m.entries).map(([k, e]) => [k, { at: e.at ?? "", shots: e.shots ?? {} }])))
    .catch(() => new Map());
  return thumbsPromise;
}

/** The screen each thumbnail variant was shot at, in CSS px. */
export const SHOT_VIEWPORT = { desktop: { w: 1280, h: 800 }, phone: { w: 390, h: 844 } } as const;
