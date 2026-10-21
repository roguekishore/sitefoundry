/** Made by vite.config.ts from git: item name → when its meta.json was first committed (ms). */
declare module "virtual:foundry-added" {
  const added: Record<string, number>;
  export default added;
}

/** Made by vite.config.ts from the item folders of this gallery (the sites one, or the vault one). */
declare module "virtual:foundry-catalog" {
  import type { ComponentType } from "react";
  import type { ItemMeta } from "@foundry/core";
  /** which gallery this build is */
  export const gallery: "sites" | "vault";
  /** the vault's libraries (vault/sources.json): label, homepage, licence */
  export const sources: Record<string, { label?: string; homepage?: string; license?: string }>;
  /** item folder (relative to its repo) → meta.json */
  export const metas: Record<string, ItemMeta>;
  export const demos: Record<string, () => Promise<{ default: ComponentType }>>;
  /** theme item folder → its CSS, loaded on demand */
  export const themeCss: Record<string, () => Promise<string>>;
  /** theme item folder (and foundry-base's) → its CSS text */
  export const themeSources: Record<string, string>;
  /** site → its landing page */
  export const sitePages: Record<string, () => Promise<{ default: ComponentType }>>;
  /** "site/page" → one of its other pages */
  export const otherPages: Record<string, () => Promise<{ default: ComponentType }>>;
  /** "site/landing" or "site/page" → the page's source */
  export const pageSources: Record<string, string>;
  /** site → its _reference/NOTES.md */
  export const siteNotes: Record<string, string>;
}
