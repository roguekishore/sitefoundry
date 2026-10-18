import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { SCHEMA, type FoundryConfig, type Lockfile } from "./types.ts";

export const CONFIG_FILE = "foundry.json";
export const LOCK_FILE = "foundry.lock";

/** What `foundry init` leaves in the theme file until a theme is added. */
export const THEME_PLACEHOLDER =
  "/* No theme yet: run `foundry theme <name>`. Until then the defaults in foundry-base apply. */\n";

export async function loadConfig(projectDir: string): Promise<FoundryConfig> {
  const file = join(projectDir, CONFIG_FILE);
  if (!existsSync(file)) throw new Error(`no ${CONFIG_FILE} in ${projectDir}. Run \`foundry init\` first.`);
  const config = JSON.parse(await readFile(file, "utf8")) as FoundryConfig;
  if (config.schema > SCHEMA) throw new Error(`${CONFIG_FILE} uses format ${config.schema}; update the foundry tool.`);
  return config;
}

export async function saveConfig(projectDir: string, config: FoundryConfig): Promise<void> {
  await writeJson(join(projectDir, CONFIG_FILE), config);
}

export async function loadLock(projectDir: string): Promise<Lockfile> {
  const file = join(projectDir, LOCK_FILE);
  if (!existsSync(file)) return { schema: SCHEMA, items: {} };
  return JSON.parse(await readFile(file, "utf8")) as Lockfile;
}

export async function saveLock(projectDir: string, lock: Lockfile): Promise<void> {
  const items = Object.fromEntries(Object.entries(lock.items).sort(([a], [b]) => a.localeCompare(b)));
  await writeJson(join(projectDir, LOCK_FILE), { schema: SCHEMA, items });
}

async function writeJson(file: string, data: unknown): Promise<void> {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}
