/** Version of every format in this file. Bump only with a migration in the readers. */
export const SCHEMA = 1;

export type ItemType = "base" | "lib" | "theme" | "component" | "block" | "asset";

/** What an author writes in an item's `meta.json`. The item's name is its folder name. */
export interface ItemMeta {
  schema: number;
  version: string;
  type: ItemType;
  title: string;
  description?: string;
  /** header, hero, features, pricing, footer, text-effect, background, button… */
  category?: string;
  /** the recreated site it comes from, e.g. "huly" */
  site?: string;
  /** "foundry" for ours; "shadcn", "reactbits"… for the vault */
  source?: string;
  license: string;
  tags?: string[];
  /** hints for whoever picks it, e.g. "best on dark themes" */
  notes?: string[];
  /** main file: what `@foundry/<name>` resolves to */
  entry: string;
  /** gallery demo; never installed */
  demo?: string;
  /**
   * Needs JavaScript in the browser (state, effects, JS animation). In Astro, render it with
   * `client:<hydrate>`; without it the block is inert, or hidden if it animates in.
   */
  hydrate?: "load" | "visible" | "idle";
}

export interface PropDoc {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description?: string;
}

export interface ItemFile {
  /** path inside the item folder, forward slashes */
  path: string;
  content: string;
  encoding?: "utf8" | "base64";
  /** "public" files go to the project's public folder (images, fonts); default "item" */
  target?: "item" | "public";
}

/** One built item, as served at `r/<name>.json` and `r/<name>/<version>.json`. */
export interface RegistryItem extends ItemMeta {
  name: string;
  files: ItemFile[];
  /** npm package → version range */
  dependencies: Record<string, string>;
  /** other foundry items this one imports */
  registryDependencies: string[];
  props?: PropDoc[];
  /** sha256 of the files; a built version is immutable */
  hash: string;
}

export interface IndexEntry extends Omit<RegistryItem, "files"> {
  files: string[];
  /** where the item lives in the foundry repo (for local tools and the gallery) */
  path: string;
  /** every version built so far */
  versions: string[];
}

export interface RegistryIndex {
  schema: number;
  items: IndexEntry[];
}

/** `foundry.json` in a customer project. Paths are relative to the project. */
export interface FoundryConfig {
  schema: number;
  /** a folder path or an http(s) URL of the built registry (`…/r`), or several (the foundry's and the vault's) */
  registry: string | string[];
  blocksDir: string;
  publicDir: string;
  themeFile: string;
  /** the CSS file that imports Tailwind; foundry adds its imports there */
  cssFile?: string;
}

export interface LockEntry {
  version: string;
  type: ItemType;
  hash: string;
  /** project-relative path of the item's main file (what `@foundry/<name>` imports point to) */
  entry: string;
  /** project-relative path → sha256 of what foundry wrote */
  files: Record<string, string>;
}

/** `foundry.lock` in a customer project. */
export interface Lockfile {
  schema: number;
  items: Record<string, LockEntry>;
}
