// React Bits (reactbits.dev), the TypeScript + Tailwind variant of each component.
//   index:  https://reactbits.dev/r/registry.json            (every variant; we keep *-TS-TW)
//   item:   https://reactbits.dev/r/<Name>-TS-TW.json         (with file contents)
//   tree:   GitHub API, one request: where each component and its demo live (gives the category)
//   demo:   https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/demo/<Category>/<Name>Demo.jsx
//           (+ the ./presets/<Name>.js module some demos keep their default props in)
// Only the free library is in this registry; React Bits Pro is a separate, paid site we never touch.
import { get, getJson } from "../lib/fetch.ts";

const SITE = "https://reactbits.dev";
const REPO = "DavidHDev/react-bits";
const BRANCH = "main";
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const VARIANT = "-TS-TW";
const INDEX_MAX_AGE = 24;

export interface RbFile {
  path: string;
  type: string;
  content: string;
}

export interface RbItem {
  name: string;
  title: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RbFile[];
}

export interface RbComponent {
  item: RbItem;
  /** Animations, Backgrounds, Components, Micro, TextAnimations */
  category?: string;
  demo?: string;
  /** the demo's own modules it imports (./presets/<Name>): specifier → source */
  modules: Record<string, string>;
}

export interface RbSnapshot {
  components: RbComponent[];
  licence?: string;
  /** names in the index without a TS-TW variant */
  noVariant: string[];
}

export async function fetchReactBits(log: (m: string) => void): Promise<RbSnapshot> {
  const index = await getJson<{ items: Omit<RbItem, "files">[] }>(`${SITE}/r/registry.json`, { maxAgeHours: INDEX_MAX_AGE });
  if (!index) throw new Error("React Bits registry index not found");
  const tree = await getJson<{ tree: { path: string }[]; truncated: boolean }>(
    `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`,
    { maxAgeHours: INDEX_MAX_AGE },
  );
  const paths = tree?.tree.map((t) => t.path) ?? [];
  const licence = await get(`${RAW}/LICENSE.md`, { maxAgeHours: INDEX_MAX_AGE });

  const titles = new Set(index.items.map((i) => i.title));
  const wanted = index.items.filter((i) => i.name.endsWith(VARIANT));
  const noVariant = [...titles].filter((t) => !wanted.some((w) => w.title === t));
  log(`reactbits: ${index.items.length} in the index (${titles.size} components × variants), fetching ${wanted.length} TS + Tailwind`);

  const components: RbComponent[] = [];
  for (const entry of wanted) {
    const item = await getJson<RbItem>(`${SITE}/r/${entry.name}.json`);
    if (!item) continue;
    const base = entry.name.slice(0, -VARIANT.length);
    const compPath = paths.find((p) => p.startsWith("src/ts-tailwind/") && p.split("/")[3] === base);
    const category = compPath?.split("/")[2];
    const demoPath = category && paths.find((p) => p === `src/demo/${category}/${base}Demo.jsx` || p === `src/demo/${category}/${base}Demo.tsx`);
    const demo = demoPath ? await get(`${RAW}/${demoPath}`) : undefined;
    const modules: Record<string, string> = {};
    if (demo && demoPath) {
      const dir = demoPath.slice(0, demoPath.lastIndexOf("/"));
      for (const m of demo.matchAll(/from\s+["'](\.\/presets\/[^"']+)["']/g)) {
        const stem = `${dir}/${m[1].slice(2)}`;
        const file = paths.find((p) => [".js", ".jsx", ".ts", ".tsx"].some((ext) => p === stem + ext));
        const src = file ? await get(`${RAW}/${file}`) : undefined;
        if (src) modules[m[1]] = src;
      }
    }
    components.push({ item, category, demo, modules });
  }
  return { components, licence, noVariant };
}
