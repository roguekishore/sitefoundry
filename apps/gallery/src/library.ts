// What the gallery window shows about the catalog without opening any preview: which blocks each
// site page uses, each theme's colours, thumbnails, and when items were added. The preview iframe
// doesn't need any of this, so it lives apart from catalog.ts.
import added from "virtual:foundry-added";
// page sources, and the design notes a recreation keeps (their first lines name the original)
import { gallery, pageSources, siteNotes, sources, themeSources } from "virtual:foundry-catalog";
import { BASE } from "./base";
import { byName, items, ownTheme, sitePageNames, sites, themes, type Item } from "./catalog";

// ---------- the two galleries ----------

/** This gallery's name in the sidebar, and where the other one is (same server: / and /vault/). */
export const GALLERY_LABEL = gallery === "vault" ? "Vault" : "Recreated sites";
export const OTHER_GALLERY =
  gallery === "vault"
    ? { label: "Recreated sites", href: location.port === "4402" ? `${location.protocol}//${location.hostname}:4400/` : "/" }
    : { label: "Vault", href: location.port === "4400" ? `${location.protocol}//${location.hostname}:4402/vault/` : "/vault/" };

// ---------- what you browse ----------

/** Plumbing (lib, base) is installed along with what needs it; nobody picks it from a list. */
export const library: Item[] = items.filter((i) => !["lib", "base"].includes(i.meta.type));

export const titleCase = (s: string) => s.replace(/(^|-)(\w)/g, (_, dash: string, c: string) => (dash ? " " : "") + c.toUpperCase());
export const sourceOf = (i: Item): string => i.meta.source ?? "foundry";

// in the vault gallery, our items are only the site themes it borrows (to preview vault items in a site's colours)
const KNOWN_LABEL: Record<string, string> = { foundry: gallery === "vault" ? "Site themes" : "Recreations", shadcn: "shadcn", reactbits: "React Bits" };
const KNOWN_COLOUR: Record<string, string> = { foundry: "#f2602a", shadcn: "#71717a", reactbits: "#8b5cf6" };
/** A steady colour for a library without one of its own: a hue from its name. */
const hueOf = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);

/** The sources this gallery has items from: ours first, then shadcn and React Bits, then the libraries by name. */
export const SOURCES: string[] = [...new Set(library.map(sourceOf))].sort(
  (a, b) => (["foundry", "shadcn", "reactbits"].indexOf(a) + 1 || 9) - (["foundry", "shadcn", "reactbits"].indexOf(b) + 1 || 9) || a.localeCompare(b),
);
export const SOURCE_LABEL: Record<string, string> = Object.fromEntries(SOURCES.map((s) => [s, KNOWN_LABEL[s] ?? sources[s]?.label ?? titleCase(s)]));
export const SOURCE_COLOUR: Record<string, string> = { ...Object.fromEntries(SOURCES.map((s) => [s, `hsl(${hueOf(s)} 62% 52%)`])), ...KNOWN_COLOUR };
/** A vault library's home page, when the mirror knows it. */
export const sourceHome = (s: string): string | undefined => sources[s]?.homepage;

export const TYPE_LABEL: Record<string, string> = { block: "Blocks", component: "Components", theme: "Themes", asset: "Assets" };

export const addedAt = (name: string): number => added[name] ?? Date.now();

// ---------- sites and their pages ----------

export const LANDING = "landing";

/** "landing" first, then the site's other pages. */
export const pagesOf = (site: string): string[] => [LANDING, ...sitePageNames(site)];
const SPELLED = { faq: "FAQ", cta: "CTA", ui: "UI" } as Record<string, string>;
export const pageLabel = (page: string) => (page === LANDING ? "Landing" : (SPELLED[page] ?? titleCase(page)));
/** A category in running text: "text effect", "CTA". */
export const categoryLabel = (category: string) => SPELLED[category] ?? titleCase(category).toLowerCase();

const sourceOfPage = (site: string, page: string) => pageSources[`${site}/${page}`] ?? "";

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
  const notes = (siteNotes[site] ?? "").split("\n").slice(0, 12).join("\n");
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

const swatchesByDir = new Map(Object.entries(themeSources).map(([dir, css]) => [dir, parseSwatches(css)]));

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
