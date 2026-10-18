import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import semver from "semver";
import { createTwoFilesPatch } from "diff";
import { normalize, sha256 } from "./hash.ts";
import { THEME_PLACEHOLDER, loadConfig, loadLock, saveLock } from "./project.ts";
import { openRegistry, parseSpec } from "./registry.ts";
import { rewriteImports, targetPath } from "./rewrite.ts";
import type { FoundryConfig, LockEntry, Lockfile, RegistryItem } from "./types.ts";

export interface Logger {
  info(message: string): void;
  warn(message: string): void;
}

const silent: Logger = { info() {}, warn() {} };

export interface AddOptions {
  /** overwrite files changed by hand, re-add items already at that version */
  force?: boolean;
  /** run the package manager for missing npm packages (default true) */
  install?: boolean;
  /** work out everything, write nothing */
  dryRun?: boolean;
  log?: Logger;
}

export interface AddResult {
  added: { name: string; version: string; from?: string; files: string[] }[];
  skipped: { name: string; reason: string }[];
  packages: { installed: string[]; missing: string[]; conflicts: string[] };
}

interface Write {
  item: RegistryItem;
  path: string;
  content: string;
  encoding: "utf8" | "base64";
}

/** Add items (and the items they import) to a customer project. `specs` are `name` or `name@version`. */
export async function add(projectDir: string, specs: string[], opts: AddOptions = {}): Promise<AddResult> {
  const log = opts.log ?? silent;
  const config = await loadConfig(projectDir);
  const lock = await loadLock(projectDir);
  const registry = openRegistry(resolveRegistry(projectDir, config.registry));
  const result: AddResult = { added: [], skipped: [], packages: { installed: [], missing: [], conflicts: [] } };

  // 1. Resolve: requested items at the asked (or latest) version; their dependencies only if not installed yet.
  const plan = new Map<string, RegistryItem>();
  async function visit(name: string, version: string | undefined, requested: boolean): Promise<void> {
    if (plan.has(name)) return;
    const locked = lock.items[name];
    if (!requested && locked) return;
    const item = await registry.item(name, version);
    if (requested && locked && locked.version === item.version && !opts.force) {
      result.skipped.push({ name, reason: `already at ${item.version}` });
      return;
    }
    plan.set(name, item);
    for (const dep of item.registryDependencies) await visit(dep, undefined, false);
  }
  for (const spec of specs) {
    const { name, version } = parseSpec(spec);
    await visit(name, version, true);
  }

  const themes = [...plan.values()].filter((i) => i.type === "theme");
  if (themes.length > 1) throw new Error(`only one theme at a time; asked for ${themes.map((t) => t.name).join(", ")}`);

  // 2. Work out every file to write, with @foundry imports made relative.
  const entries = entryMap(config, lock, plan);
  const writes: Write[] = [];
  for (const item of plan.values()) {
    for (const file of item.files) {
      const path = targetPath(config, item, file);
      const encoding = file.encoding ?? "utf8";
      const content = encoding === "utf8" ? rewriteImports(normalize(file.content), path, entries) : file.content;
      writes.push({ item, path, content, encoding });
    }
  }

  // 3. Never overwrite a file changed by hand (or one foundry didn't write) without --force.
  const owners = fileOwners(lock);
  const blocked: string[] = [];
  for (const w of writes) {
    const abs = join(projectDir, w.path);
    if (!existsSync(abs)) continue;
    const disk = w.encoding === "utf8" ? await readFile(abs, "utf8") : await readFile(abs);
    const diskHash = sha256(disk);
    const newHash = w.encoding === "utf8" ? sha256(w.content) : sha256(Buffer.from(w.content, "base64"));
    if (diskHash === newHash) continue;
    if (w.item.type === "theme" && typeof disk === "string" && normalize(disk) === THEME_PLACEHOLDER) continue;
    const owner = owners.get(w.path);
    if (owner && owner.hash === diskHash) continue;
    blocked.push(owner ? `${w.path} (changed by hand since foundry wrote it)` : `${w.path} (not written by foundry)`);
  }
  if (blocked.length && !opts.force) {
    throw new Error(
      `these files would be overwritten:\n  ${blocked.join("\n  ")}\n` +
        `See the changes with \`foundry diff <name>\`, or re-run with --force to overwrite.`,
    );
  }

  // 4. npm packages: install what's missing, report version clashes instead of forcing them.
  const wanted = new Map<string, string>();
  for (const item of plan.values()) for (const [pkg, range] of Object.entries(item.dependencies)) wanted.set(pkg, range);
  const packages = await checkPackages(projectDir, wanted);
  result.packages.conflicts = packages.conflicts;
  result.packages.missing = packages.missing;
  for (const c of packages.conflicts) log.warn(`package clash: ${c}`);

  if (opts.dryRun) {
    for (const item of plan.values()) {
      result.added.push({
        name: item.name,
        version: item.version,
        from: lock.items[item.name]?.version,
        files: writes.filter((w) => w.item === item).map((w) => w.path),
      });
    }
    return result;
  }

  // 5. Write, drop files an update no longer ships (if untouched), update the lock.
  for (const w of writes) {
    const abs = join(projectDir, w.path);
    await mkdir(dirname(abs), { recursive: true });
    await writeFile(abs, w.encoding === "utf8" ? w.content : Buffer.from(w.content, "base64"));
  }

  for (const item of plan.values()) {
    const mine = writes.filter((w) => w.item === item);
    const previous = item.type === "theme" ? Object.entries(lock.items).find(([, e]) => e.type === "theme") : undefined;
    if (previous && previous[0] !== item.name) delete lock.items[previous[0]];

    const old = lock.items[item.name];
    if (old) {
      for (const [path, hash] of Object.entries(old.files)) {
        if (mine.some((w) => w.path === path)) continue;
        const abs = join(projectDir, path);
        if (!existsSync(abs)) continue;
        if (sha256(await readFile(abs)) === hash || opts.force) await rm(abs);
        else log.warn(`${path} is no longer part of ${item.name} but was changed by hand; left in place`);
      }
    }

    lock.items[item.name] = {
      version: item.version,
      type: item.type,
      hash: item.hash,
      entry: targetPath(config, item, { path: item.entry }),
      files: Object.fromEntries(
        mine.map((w) => [w.path, w.encoding === "utf8" ? sha256(w.content) : sha256(Buffer.from(w.content, "base64"))]),
      ),
    };
    result.added.push({ name: item.name, version: item.version, from: old?.version, files: mine.map((w) => w.path) });
  }
  await saveLock(projectDir, lock);

  if (packages.missing.length) {
    if (opts.install === false) {
      log.info(`not installed (--no-install): ${packages.missing.join(" ")}`);
    } else {
      const pm = packageManager(projectDir);
      const args = [pm === "npm" ? "install" : "add", ...packages.missing];
      log.info(`${pm} ${args.join(" ")}`);
      const run = spawnSync(pm, args, { cwd: projectDir, stdio: "inherit", shell: process.platform === "win32" });
      if (run.status !== 0) log.warn(`${pm} failed; install these yourself: ${packages.missing.join(" ")}`);
      else result.packages.installed = packages.missing;
    }
  }
  return result;
}

/** Update installed items to their latest versions (all of them when `names` is empty). */
export async function update(projectDir: string, names: string[], opts: AddOptions = {}): Promise<AddResult> {
  const lock = await loadLock(projectDir);
  const targets = names.length ? names : Object.keys(lock.items);
  const unknown = targets.filter((n) => !lock.items[n]);
  if (unknown.length) throw new Error(`not installed: ${unknown.join(", ")}`);
  return add(projectDir, targets, opts);
}

export interface DiffResult {
  name: string;
  installed?: string;
  latest: string;
  /** unified diffs, "what's in the project" → "what the registry has now" */
  patches: string[];
}

/** Compare an installed item with the registry's latest version (or the one asked for). */
export async function diff(projectDir: string, spec: string): Promise<DiffResult> {
  const config = await loadConfig(projectDir);
  const lock = await loadLock(projectDir);
  const registry = openRegistry(resolveRegistry(projectDir, config.registry));
  const { name, version } = parseSpec(spec);
  const item = await registry.item(name, version);

  const plan = new Map([[name, item]]);
  for (const dep of item.registryDependencies) {
    if (!lock.items[dep]) plan.set(dep, await registry.item(dep));
  }
  const entries = entryMap(config, lock, plan);

  const patches: string[] = [];
  const shipped = new Set<string>();
  for (const file of item.files) {
    const path = targetPath(config, item, file);
    shipped.add(path);
    if ((file.encoding ?? "utf8") !== "utf8") continue;
    const next = rewriteImports(normalize(file.content), path, entries);
    const abs = join(projectDir, path);
    const current = existsSync(abs) ? normalize(await readFile(abs, "utf8")) : "";
    if (current !== next) patches.push(createTwoFilesPatch(path, path, current, next, "project", `registry ${item.version}`));
  }
  for (const path of Object.keys(lock.items[name]?.files ?? {})) {
    if (!shipped.has(path)) patches.push(`--- ${path}\n(removed in ${item.version})\n`);
  }
  return { name, installed: lock.items[name]?.version, latest: item.version, patches };
}

/** Paths in a customer project that hold foundry items, keyed by item name. */
function entryMap(config: FoundryConfig, lock: Lockfile, plan: Map<string, RegistryItem>): Map<string, string> {
  const entries = new Map<string, string>();
  for (const [name, e] of Object.entries(lock.items)) entries.set(name, e.entry);
  for (const item of plan.values()) entries.set(item.name, targetPath(config, item, { path: item.entry }));
  return entries;
}

function fileOwners(lock: Lockfile): Map<string, { name: string; hash: string }> {
  const owners = new Map<string, { name: string; hash: string }>();
  for (const [name, e] of Object.entries(lock.items) as [string, LockEntry][]) {
    for (const [path, hash] of Object.entries(e.files)) owners.set(path, { name, hash });
  }
  return owners;
}

async function checkPackages(projectDir: string, wanted: Map<string, string>) {
  const pkgFile = join(projectDir, "package.json");
  const pkg = existsSync(pkgFile) ? JSON.parse(await readFile(pkgFile, "utf8")) : {};
  const declared: Record<string, string> = { ...pkg.peerDependencies, ...pkg.devDependencies, ...pkg.dependencies };
  const missing: string[] = [];
  const conflicts: string[] = [];

  for (const [name, range] of wanted) {
    const installed = await installedVersion(projectDir, name);
    if (installed) {
      if (!semver.satisfies(installed, range)) conflicts.push(`${name}: project has ${installed}, foundry needs ${range}`);
      continue;
    }
    const existing = declared[name];
    if (existing) {
      if (semver.validRange(existing) && !semver.intersects(existing, range)) {
        conflicts.push(`${name}: project asks for ${existing}, foundry needs ${range}`);
      }
      continue;
    }
    missing.push(`${name}@${range}`);
  }
  return { missing, conflicts };
}

async function installedVersion(projectDir: string, name: string): Promise<string | undefined> {
  let dir = resolve(projectDir);
  for (;;) {
    const file = join(dir, "node_modules", name, "package.json");
    if (existsSync(file)) return JSON.parse(await readFile(file, "utf8")).version;
    const up = dirname(dir);
    if (up === dir) return undefined;
    dir = up;
  }
}

function packageManager(projectDir: string): "pnpm" | "yarn" | "bun" | "npm" {
  let dir = resolve(projectDir);
  for (;;) {
    if (existsSync(join(dir, "pnpm-lock.yaml"))) return "pnpm";
    if (existsSync(join(dir, "yarn.lock"))) return "yarn";
    if (existsSync(join(dir, "bun.lock")) || existsSync(join(dir, "bun.lockb"))) return "bun";
    if (existsSync(join(dir, "package-lock.json"))) return "npm";
    const up = dirname(dir);
    if (up === dir) return "npm";
    dir = up;
  }
}

/** A relative registry folder in foundry.json is relative to the project. */
export function resolveRegistry(projectDir: string, registry: string): string {
  return /^https?:\/\//i.test(registry) ? registry : resolve(projectDir, registry);
}
