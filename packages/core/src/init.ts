import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, posix } from "node:path";
import { add, registryList, type AddOptions, type AddResult } from "./install.ts";
import { CONFIG_FILE, THEME_PLACEHOLDER, loadLock, saveConfig } from "./project.ts";
import { toPosix } from "./rewrite.ts";
import { SCHEMA, type FoundryConfig } from "./types.ts";

export interface InitOptions extends AddOptions {
  /** one registry, or several: a list, or comma-separated (the foundry's and the vault's) */
  registry: string | string[];
  blocksDir?: string;
  publicDir?: string;
  themeFile?: string;
  cssFile?: string;
}

/** Usual places for the CSS file that imports Tailwind. */
const CSS_CANDIDATES = [
  "src/index.css",
  "src/styles/global.css",
  "src/styles/globals.css",
  "src/app/globals.css",
  "app/globals.css",
  "src/global.css",
  "src/App.css",
  "styles/globals.css",
];

/** Set a project up for foundry: foundry.json, the base items, and the CSS imports. */
export async function init(projectDir: string, opts: InitOptions): Promise<{ config: FoundryConfig; css: string; result: AddResult }> {
  if (existsSync(join(projectDir, CONFIG_FILE)) && !opts.force) {
    throw new Error(`${CONFIG_FILE} already exists (use --force to redo the setup)`);
  }
  const src = existsSync(join(projectDir, "src")) ? "src/" : "";
  const cssFile = opts.cssFile ?? (await findTailwindCss(projectDir));
  const config: FoundryConfig = {
    schema: SCHEMA,
    registry: registryList(opts.registry).length > 1 ? registryList(opts.registry) : registryList(opts.registry)[0],
    blocksDir: opts.blocksDir ?? `${src}components/foundry`,
    publicDir: opts.publicDir ?? "public",
    themeFile: opts.themeFile ?? `${src}styles/foundry-theme.css`,
    ...(cssFile ? { cssFile } : {}),
  };
  await saveConfig(projectDir, config);

  const themeAbs = join(projectDir, config.themeFile);
  if (!existsSync(themeAbs)) {
    await mkdir(dirname(themeAbs), { recursive: true });
    await writeFile(themeAbs, THEME_PLACEHOLDER, "utf8");
  }

  const result = await add(projectDir, ["foundry-base", "foundry-utils"], opts);
  const css = await wireCss(projectDir, config);
  return { config, css, result };
}

async function findTailwindCss(projectDir: string): Promise<string | undefined> {
  for (const candidate of CSS_CANDIDATES) {
    const abs = join(projectDir, candidate);
    if (existsSync(abs) && /@import\s+["']tailwindcss/.test(await readFile(abs, "utf8"))) return candidate;
  }
  return undefined;
}

/** Add the base and theme imports right after `@import "tailwindcss"`. Returns what happened. */
async function wireCss(projectDir: string, config: FoundryConfig): Promise<string> {
  const lock = await loadLock(projectDir);
  const baseEntry = lock.items["foundry-base"]?.entry;
  if (!baseEntry) return "foundry-base is not installed";

  const relFrom = (from: string, to: string) => {
    const rel = posix.relative(posix.dirname(toPosix(from)), toPosix(to));
    return rel.startsWith(".") ? rel : "./" + rel;
  };
  const lines = (cssFile: string) => [
    `@import "${relFrom(cssFile, baseEntry)}";`,
    `@import "${relFrom(cssFile, config.themeFile)}";`,
  ];

  if (!config.cssFile) {
    return (
      "No CSS file importing Tailwind was found. Add these after `@import \"tailwindcss\";` in your main CSS file " +
      "(paths relative to that file):\n  " + lines("src/index.css").join("\n  ")
    );
  }
  const abs = join(projectDir, config.cssFile);
  const css = await readFile(abs, "utf8");
  const wanted = lines(config.cssFile);
  if (wanted.every((l) => css.includes(l))) return `${config.cssFile} already imports foundry`;

  const updated = css.replace(/(@import\s+["']tailwindcss[^;]*;[^\n]*\n?)/, (m) => `${m.endsWith("\n") ? m : m + "\n"}${wanted.join("\n")}\n`);
  await writeFile(abs, updated, "utf8");
  return `added the foundry imports to ${config.cssFile}`;
}
