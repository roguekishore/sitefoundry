import { posix } from "node:path";
import type { FoundryConfig, ItemType } from "./types.ts";

/** Where one file of an item lands in a customer project (project-relative, forward slashes). */
export function targetPath(
  config: FoundryConfig,
  item: { name: string; type: ItemType },
  file: { path: string; target?: "item" | "public" },
): string {
  if (item.type === "theme") return toPosix(config.themeFile);
  if (file.target === "public") return posix.join(toPosix(config.publicDir), "foundry", item.name, file.path);
  return posix.join(toPosix(config.blocksDir), item.name, file.path);
}

const CODE_EXT = /\.(tsx?|jsx?|mjs|cjs)$/;

/**
 * Turns `@foundry/<name>` imports into relative paths, so a customer project needs no
 * alias setup. `entries` maps item name → project-relative path of its main file.
 */
export function rewriteImports(content: string, fromFile: string, entries: Map<string, string>): string {
  return content.replace(
    /((?:\bfrom|\bimport)\s*\(?\s*)(["'])@foundry\/([a-z0-9][a-z0-9-]*)\2/g,
    (match, lead: string, quote: string, name: string) => {
      const entry = entries.get(name);
      if (!entry) return match;
      const target = CODE_EXT.test(entry) && CODE_EXT.test(fromFile) ? entry.replace(CODE_EXT, "") : entry;
      let rel = posix.relative(posix.dirname(fromFile), target);
      if (!rel.startsWith(".")) rel = "./" + rel;
      return `${lead}${quote}${rel}${quote}`;
    },
  );
}

/** Names of the foundry items a source file imports. */
export function foundryImports(content: string): string[] {
  const names = new Set<string>();
  for (const m of content.matchAll(/(?:\bfrom|\bimport)\s*\(?\s*["']@foundry\/([a-z0-9][a-z0-9-]*)["']/g)) names.add(m[1]);
  return [...names];
}

export function toPosix(p: string): string {
  return p.replace(/\\/g, "/");
}
