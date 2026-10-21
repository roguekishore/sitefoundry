import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import {
  add,
  diff,
  findVault,
  init,
  loadConfig,
  loadLock,
  openRegistry,
  registryDirOf,
  resolveRegistry,
  search,
  update,
  type AddResult,
  type ItemType,
  type Logger,
} from "@foundry/core";

const HELP = `foundry — add blocks from the foundry registry to a project

  foundry init [--registry <folder|url>[,…]]  set this project up (foundry.json, base, CSS imports)
  foundry list [words…] [filters]          find items
        --type block|component|theme|lib|asset  --category header  --site huly
        --source shadcn  --license MIT  --tag dark
  foundry info <name>                      details, props and versions of one item
  foundry add <name[@version]>…            add items and what they import
  foundry theme <name>                     switch the project's theme
  foundry diff <name[@version]>            what changed in the registry since you added it
  foundry update [name…]                   update to the latest versions (all when no names)
  foundry status                           what's installed, and what's out of date

  --force        overwrite files changed by hand
  --no-install   don't run the package manager
  --dry-run      show what would happen, change nothing
  --cwd <dir>    the project folder (default: current folder)
  --json         machine-readable output (list, info, status)`;

/** The registries built here, used by `init` when no --registry is given: this repo's, then the vault repo's next to it. */
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const VAULT = findVault(REPO);
const LOCAL_REGISTRY = [registryDirOf(REPO), ...(VAULT ? [registryDirOf(VAULT)] : [])];

const log: Logger = {
  info: (m) => console.log(m),
  warn: (m) => console.warn(`warning: ${m}`),
};

async function main(argv: string[]) {
  const { values: o, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      registry: { type: "string" },
      type: { type: "string" },
      category: { type: "string" },
      site: { type: "string" },
      source: { type: "string" },
      license: { type: "string" },
      tag: { type: "string" },
      force: { type: "boolean" },
      "no-install": { type: "boolean" },
      "dry-run": { type: "boolean" },
      cwd: { type: "string" },
      json: { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
  });
  const [command, ...args] = positionals;
  const cwd = resolve(o.cwd ?? process.cwd());
  const addOpts = { force: o.force, install: !o["no-install"], dryRun: o["dry-run"], log };

  switch (command) {
    case "init": {
      const { config, css, result } = await init(cwd, { registry: o.registry ?? LOCAL_REGISTRY, ...addOpts });
      console.log(`foundry.json written (registry: ${[config.registry].flat().join(", ")})`);
      report(result, !!o["dry-run"]);
      console.log(css);
      console.log(`next: foundry theme <name>, then foundry add <block>. Browse with \`foundry list\`.`);
      return;
    }
    case "list": {
      const registry = await projectRegistry(cwd, o.registry);
      const items = search((await registry.index()).items, {
        text: args.join(" "),
        type: o.type as ItemType | undefined,
        category: o.category,
        site: o.site,
        source: o.source,
        license: o.license,
        tag: o.tag,
      });
      if (o.json) return console.log(JSON.stringify(items, null, 2));
      if (!items.length) return console.log("nothing found");
      const width = Math.max(...items.map((i) => i.name.length));
      for (const i of items) {
        const where = [i.type, i.category, i.site ?? i.source].filter(Boolean).join(" · ");
        console.log(`${i.name.padEnd(width)}  ${i.version.padEnd(7)} ${where}  — ${i.title}`);
      }
      console.log(`\n${items.length} item(s)`);
      return;
    }
    case "info": {
      need(args, 1, "foundry info <name>");
      const registry = await projectRegistry(cwd, o.registry);
      const item = (await registry.index()).items.find((i) => i.name === args[0]);
      if (!item) throw new Error(`no item "${args[0]}"`);
      if (o.json) return console.log(JSON.stringify(item, null, 2));
      console.log(`${item.name} ${item.version}  (${item.type}${item.category ? ` · ${item.category}` : ""})`);
      console.log(item.title + (item.description ? ` — ${item.description}` : ""));
      console.log(`source: ${item.source ?? "foundry"}${item.site ? ` · site: ${item.site}` : ""} · licence: ${item.license}`);
      if (item.tags?.length) console.log(`tags: ${item.tags.join(", ")}`);
      if (item.hydrate) console.log(`needs JavaScript: in Astro use client:${item.hydrate}`);
      for (const n of item.notes ?? []) console.log(`note: ${n}`);
      if (item.props?.length) {
        console.log("props:");
        for (const p of item.props) {
          const extra = [p.default !== undefined ? `default ${p.default}` : "", p.description ?? ""].filter(Boolean).join(" — ");
          console.log(`  ${p.name}${p.required ? "" : "?"}: ${p.type}${extra ? `   ${extra}` : ""}`);
        }
      }
      const deps = Object.entries(item.dependencies).map(([k, v]) => `${k}@${v}`);
      if (deps.length) console.log(`npm: ${deps.join(" ")}`);
      if (item.registryDependencies.length) console.log(`uses: ${item.registryDependencies.join(", ")}`);
      console.log(`versions: ${item.versions.join(", ")}`);
      return;
    }
    case "add": {
      need(args, 1, "foundry add <name>…");
      report(await add(cwd, args, addOpts), !!o["dry-run"]);
      return;
    }
    case "theme": {
      need(args, 1, "foundry theme <name>");
      const registry = await projectRegistry(cwd);
      const item = (await registry.index()).items.find((i) => i.name === args[0]);
      if (item && item.type !== "theme") throw new Error(`"${args[0]}" is a ${item.type}, not a theme (see \`foundry list --type theme\`)`);
      report(await add(cwd, [args[0]], addOpts), !!o["dry-run"]);
      return;
    }
    case "diff": {
      need(args, 1, "foundry diff <name>");
      const d = await diff(cwd, args[0]);
      console.log(`${d.name}: installed ${d.installed ?? "(not installed)"}, registry ${d.latest}`);
      console.log(d.patches.length ? d.patches.join("\n") : "no differences");
      return;
    }
    case "update": {
      report(await update(cwd, args, addOpts), !!o["dry-run"]);
      return;
    }
    case "status": {
      const config = await loadConfig(cwd);
      const lock = await loadLock(cwd);
      const index = await openRegistry(resolveRegistry(cwd, config.registry)).index();
      const rows = Object.entries(lock.items).map(([name, e]) => {
        const latest = index.items.find((i) => i.name === name)?.version;
        return { name, type: e.type, installed: e.version, latest, outdated: !!latest && latest !== e.version };
      });
      if (o.json) return console.log(JSON.stringify(rows, null, 2));
      for (const r of rows) {
        console.log(`${r.name.padEnd(24)} ${r.installed.padEnd(8)} ${r.outdated ? `→ ${r.latest} available` : r.latest ? "up to date" : "not in registry"}`);
      }
      return;
    }
    case undefined:
    case "help":
      console.log(HELP);
      return;
    default:
      throw new Error(`unknown command "${command}"\n\n${HELP}`);
  }
}

async function projectRegistry(cwd: string, override?: string) {
  if (override) return openRegistry(override);
  try {
    const config = await loadConfig(cwd);
    return openRegistry(resolveRegistry(cwd, config.registry));
  } catch {
    return openRegistry(LOCAL_REGISTRY);
  }
}

function report(result: AddResult, dryRun: boolean) {
  const verb = dryRun ? "would add" : "added";
  for (const a of result.added) {
    console.log(`${verb} ${a.name} ${a.from && a.from !== a.version ? `${a.from} → ` : ""}${a.version}`);
    for (const f of a.files) console.log(`  ${f}`);
  }
  for (const s of result.skipped) console.log(`skipped ${s.name}: ${s.reason}`);
  const live = result.added.filter((a) => a.hydrate);
  if (live.length) {
    console.log(`
needs JavaScript in the browser; in Astro render with:`);
    for (const a of live) console.log(`  ${a.name}: client:${a.hydrate}`);
  }
  if (dryRun && result.packages.missing.length) console.log(`would install: ${result.packages.missing.join(" ")}`);
}

function need(args: string[], n: number, usage: string) {
  if (args.length < n) throw new Error(`usage: ${usage}`);
}

main(process.argv.slice(2)).catch((e: Error) => {
  console.error(`foundry: ${e.message}`);
  process.exit(1);
});
