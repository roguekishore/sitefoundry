// shadcn/ui, new-york-v4 style (the Radix one the docs' *-demo examples are written for).
//   index:  https://ui.shadcn.com/r/styles/new-york-v4/registry.json   (names, types, dependencies)
//   item:   https://ui.shadcn.com/r/styles/new-york-v4/<name>.json      (the same, with file contents)
//   docs:   https://ui.shadcn.com/docs/components/radix/<name>.md       (one-line description, and the demo it opens with)
import { get, getJson } from "../lib/fetch.ts";

export const STYLE = "new-york-v4";
const BASE = "https://ui.shadcn.com";
const INDEX_MAX_AGE = 24;

export interface ShadcnFile {
  path: string;
  type: string;
  target?: string;
  content: string;
}

export interface ShadcnItem {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: ShadcnFile[];
  cssVars?: { theme?: Record<string, string>; light?: Record<string, string>; dark?: Record<string, string> };
  categories?: string[];
  meta?: Record<string, unknown>;
}

export interface ShadcnSnapshot {
  index: Omit<ShadcnItem, "files">[];
  items: Map<string, ShadcnItem>;
  /** ui component name → description from its docs page */
  docs: Map<string, string>;
  /** ui component name → the code of the demo its docs page opens with */
  docsDemos: Map<string, string>;
}

/** Item types worth fetching; the rest (fonts, styles, internal docs pieces) are skipped by name. */
export const WANTED_TYPES = ["registry:ui", "registry:block", "registry:example", "registry:hook", "registry:theme", "registry:lib"];

export async function fetchShadcn(log: (m: string) => void): Promise<ShadcnSnapshot> {
  const registry = await getJson<{ items: Omit<ShadcnItem, "files">[] }>(`${BASE}/r/styles/${STYLE}/registry.json`, {
    maxAgeHours: INDEX_MAX_AGE,
  });
  if (!registry) throw new Error("shadcn registry index not found");
  const items = new Map<string, ShadcnItem>();
  const docs = new Map<string, string>();
  const docsDemos = new Map<string, string>();
  const wanted = registry.items.filter((i) => WANTED_TYPES.includes(i.type));
  log(`shadcn: ${registry.items.length} in the index, fetching ${wanted.length}`);
  for (const entry of wanted) {
    const item = await getJson<ShadcnItem>(`${BASE}/r/styles/${STYLE}/${entry.name}.json`);
    if (item) items.set(entry.name, item);
    if (entry.type === "registry:ui") {
      const md = await get(`${BASE}/docs/components/radix/${entry.name}.md`);
      const description = md?.match(/^---[\s\S]*?\ndescription:\s*(.+)\n[\s\S]*?---/)?.[1]?.trim();
      if (description) docs.set(entry.name, description.replace(/^["']|["']$/g, ""));
      const demo = md?.match(/```tsx\n([\s\S]*?)\n```/)?.[1];
      if (demo) docsDemos.set(entry.name, demo);
    }
  }
  return { index: registry.items, items, docs, docsDemos };
}
