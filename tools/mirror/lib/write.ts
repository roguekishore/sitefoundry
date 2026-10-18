// Writes mirrored items into vault/<source>/<name>/ in the foundry item format (CONTRACT.md).
// The mirror owns these folders: a re-run rewrites them, and bumps "version" when anything
// that ends up in the registry changed (built versions never change).
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import semver from "semver";
import type { ItemMeta } from "@foundry/core";
import { REGISTRY_DIR, ROOT } from "../../lib/scan.ts";

export const VAULT = join(ROOT, "vault");

/** A converted item, ready to write. */
export interface MirrorItem {
  name: string;
  source: string;
  meta: Omit<ItemMeta, "schema" | "version" | "source">;
  /** item files (installed): path inside the folder → content */
  files: Record<string, string>;
  /** gallery-only files: the demo and anything under `_examples/` */
  demoFiles: Record<string, string>;
}

export interface Skip {
  source: string;
  name: string;
  reason: string;
}

export interface WriteResult {
  written: string[];
  unchanged: string[];
}

async function listAll(dir: string, base = dir): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const abs = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listAll(abs, base)));
    else out.push(relative(base, abs).replace(/\\/g, "/"));
  }
  return out;
}

const norm = (s: string) => s.replace(/\r\n/g, "\n");

export async function writeItem(item: MirrorItem, result: WriteResult): Promise<void> {
  const dir = join(VAULT, item.source, item.name);
  const metaPath = join(dir, "meta.json");
  const old: ItemMeta | undefined = existsSync(metaPath) ? JSON.parse(await readFile(metaPath, "utf8")) : undefined;

  // Did anything the registry sees change? (item files + meta; the demo and _examples don't count)
  const oldFiles = (await listAll(dir)).filter((p) => p !== "meta.json" && !p.startsWith("_") && !/\.demo\.tsx?$/.test(p));
  let changed = !old || oldFiles.length !== Object.keys(item.files).length;
  if (!changed) {
    for (const [path, content] of Object.entries(item.files)) {
      const abs = join(dir, path);
      if (!existsSync(abs) || norm(await readFile(abs, "utf8")) !== norm(content)) {
        changed = true;
        break;
      }
    }
  }
  const { version: _v, schema: _s, ...oldRest } = old ?? ({} as ItemMeta);
  const newRest = { ...item.meta, source: item.source };
  if (!changed && JSON.stringify(sortKeys(oldRest)) !== JSON.stringify(sortKeys(newRest))) changed = true;

  // a built version is immutable, so a change needs a new one; an unbuilt version can still change
  const built = old && existsSync(join(REGISTRY_DIR, item.name, `${old.version}.json`));
  const version = !old ? "1.0.0" : changed && built ? semver.inc(old.version, "minor")! : old.version;
  const meta = {
    schema: 1,
    version,
    type: item.meta.type,
    title: item.meta.title,
    description: item.meta.description,
    category: item.meta.category,
    source: item.source,
    license: item.meta.license,
    tags: item.meta.tags,
    notes: item.meta.notes?.length ? item.meta.notes : undefined,
    entry: item.meta.entry,
    hydrate: item.meta.hydrate,
  };

  const wanted: Record<string, string> = { ...item.files, ...item.demoFiles, "meta.json": JSON.stringify(meta, null, 2) + "\n" };
  // remove files the item no longer has (the mirror owns the folder; vault/_raw is elsewhere)
  for (const p of await listAll(dir)) if (!(p in wanted)) await rm(join(dir, p));
  let touched = false;
  for (const [path, content] of Object.entries(wanted)) {
    const abs = join(dir, path);
    if (existsSync(abs) && norm(await readFile(abs, "utf8")) === norm(content)) continue;
    await mkdir(dirname(abs), { recursive: true });
    await writeFile(abs, content);
    touched = true;
  }
  (changed || touched ? result.written : result.unchanged).push(item.name);
}

function sortKeys(o: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(o)
      .filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0))
      .sort(([a], [b]) => a.localeCompare(b)),
  );
}

/** Item folders under vault/<source>/ that this run didn't produce (upstream dropped them). */
export async function staleItems(source: string, produced: Set<string>): Promise<string[]> {
  const dir = join(VAULT, source);
  if (!existsSync(dir)) return [];
  return (await readdir(dir, { withFileTypes: true }))
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !produced.has(e.name))
    .map((e) => e.name);
}
