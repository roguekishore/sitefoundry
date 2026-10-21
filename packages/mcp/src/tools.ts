// The foundry's MCP tools, for either transport: stdio on this computer (index.ts, every tool)
// or HTTP from the foundry server (http.ts, only the read-only ones: a server can't write into
// a project on someone else's disk).
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { add, diff, init, loadConfig, loadLock, openRegistry, resolveRegistry, search, type AddResult, type IndexEntry, type ItemType, type Logger, type Registry } from "@foundry/core";
import type { Previewer } from "./preview.ts";

export interface ToolOptions {
  registry: Registry;
  /** what `init` writes into foundry.json by default (the foundry's registry and the vault's) */
  registryLocation: string | string[];
  previews: Previewer;
  /** only search, get and preview */
  readOnly?: boolean;
}

const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
const fail = (e: unknown) => ({ content: [{ type: "text" as const, text: `error: ${(e as Error).message}` }], isError: true });

function summary(i: IndexEntry): string {
  const where = [i.type, i.category, i.site ? `site ${i.site}` : `source ${i.source ?? "foundry"}`].filter(Boolean).join(", ");
  const extra = [i.license !== "proprietary" ? `licence ${i.license}` : "", i.hydrate ? `needs JS (client:${i.hydrate})` : "", ...(i.notes ?? [])]
    .filter(Boolean)
    .join("; ");
  return `- ${i.name}@${i.version} (${where}): ${i.title}${i.description ? ` — ${i.description}` : ""}${extra ? ` [${extra}]` : ""}`;
}

/** The theme an item is shown in by default: its own site's (or source's) theme. */
function ownTheme(items: IndexEntry[], item: IndexEntry): IndexEntry | undefined {
  if (item.type === "theme") return item;
  const group = item.site ?? item.source;
  return items.find((t) => t.type === "theme" && (t.site ?? t.source) === group);
}

function report(result: AddResult, dryRun?: boolean): string {
  const lines: string[] = [];
  for (const a of result.added) {
    lines.push(`${dryRun ? "would add" : "added"} ${a.name} ${a.from && a.from !== a.version ? `${a.from} → ` : ""}${a.version}: ${a.files.join(", ")}`);
  }
  for (const s of result.skipped) lines.push(`skipped ${s.name}: ${s.reason}`);
  if (result.packages.installed.length) lines.push(`installed npm packages: ${result.packages.installed.join(" ")}`);
  if (dryRun && result.packages.missing.length) lines.push(`would install: ${result.packages.missing.join(" ")}`);
  for (const c of result.packages.conflicts) lines.push(`package clash: ${c}`);
  for (const n of result.packages.notes) lines.push(`note: ${n}`);
  const live = result.added.filter((a) => a.hydrate);
  if (live.length) lines.push(`needs JavaScript in the browser; in Astro render with: ${live.map((a) => `${a.name} → client:${a.hydrate}`).join(", ")}`);
  const blocks = result.added.filter((a) => a.files.some((f) => /\.(t|j)sx$/.test(f)));
  if (blocks.length) lines.push(`import from the files listed above (relative paths), e.g. ${blocks[0].files.find((f) => /\.(t|j)sx$/.test(f))}`);
  return lines.join("\n");
}

function collector(): { log: Logger; lines: string[] } {
  const lines: string[] = [];
  return { lines, log: { info: (m) => lines.push(m), warn: (m) => lines.push(`warning: ${m}`) } };
}

export function registerTools(server: McpServer, { registry, registryLocation, previews, readOnly }: ToolOptions) {
  server.registerTool(
    "search",
    {
      title: "Search the foundry",
      description:
        "Find blocks (page sections), components, themes and assets in the private foundry registry: our recreated sites' blocks plus the vault (shadcn, React Bits, Aceternity, Magic UI and other libraries)." +
        "Every word of `query` must match the name, title, tags, description or notes. Combine with filters. Returns one line per item; use `get` for props and code, `preview` to see it.",
      inputSchema: {
        query: z.string().optional().describe("words, e.g. 'dark header glow' or 'pricing'"),
        type: z.enum(["block", "component", "theme", "lib", "asset", "base"]).optional(),
        category: z.string().optional().describe("header, hero, features, pricing, footer, text-effect, background…"),
        site: z.string().optional().describe("a recreated site, e.g. 'huly'"),
        source: z.string().optional().describe("'foundry' for ours, or a vault library: 'shadcn', 'reactbits', 'aceternity', 'magicui'…"),
        license: z.string().optional(),
        tag: z.string().optional(),
        limit: z.number().int().min(1).max(200).optional().describe("default 30"),
      },
      annotations: { readOnlyHint: true },
    },
    async (q) => {
      try {
        const items = (await registry.index()).items;
        const found = search(items, { text: q.query, type: q.type as ItemType | undefined, category: q.category, site: q.site, source: q.source, license: q.license, tag: q.tag });
        const limit = q.limit ?? 30;
        if (!found.length) return text(`Nothing found among ${items.length} items.`);
        return text(`${found.length} found${found.length > limit ? `, first ${limit}` : ""}:\n${found.slice(0, limit).map(summary).join("\n")}`);
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "get",
    {
      title: "Get an item",
      description: "Everything about one item: description, notes, props (with types), npm packages, the items it uses, versions, and optionally its source code.",
      inputSchema: {
        name: z.string(),
        version: z.string().optional().describe("default: latest"),
        code: z.boolean().optional().describe("include the source files (default true)"),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ name, version, code }) => {
      try {
        const item = await registry.item(name, version);
        const entry = (await registry.index()).items.find((i) => i.name === name);
        const lines = [
          `${item.name}@${item.version} — ${item.title} (${item.type}${item.category ? `, ${item.category}` : ""})`,
          item.description ?? "",
          `source: ${item.source ?? "foundry"}${item.site ? `, site: ${item.site}` : ""}; licence: ${item.license}`,
          item.tags?.length ? `tags: ${item.tags.join(", ")}` : "",
          ...(item.notes ?? []).map((n) => `note: ${n}`),
          item.hydrate ? `needs JavaScript in the browser: in Astro render with client:${item.hydrate}` : "",
          item.props?.length
            ? `props:\n${item.props.map((p) => `  ${p.name}${p.required ? "" : "?"}: ${p.type}${p.default !== undefined ? ` = ${p.default}` : ""}${p.description ? `  // ${p.description}` : ""}`).join("\n")}`
            : "",
          Object.keys(item.dependencies).length ? `npm: ${Object.entries(item.dependencies).map(([k, v]) => `${k}@${v}`).join(" ")}` : "",
          item.registryDependencies.length ? `uses: ${item.registryDependencies.join(", ")}` : "",
          entry ? `versions: ${entry.versions.join(", ")}` : "",
        ].filter(Boolean);
        if (code !== false) {
          for (const f of item.files) {
            if (f.encoding === "base64") lines.push(`\n--- ${f.path} (binary)`);
            else lines.push(`\n--- ${f.path}\n${f.content}`);
          }
        }
        return text(lines.join("\n"));
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "preview",
    {
      title: "See an item",
      description:
        "A screenshot of a block, component or theme (a theme shows its colours and type), or of a recreated site's full page. " +
        "By default in the item's own theme; pass `theme` to see it in another theme (that's how mixing blocks from different sites looks).",
      inputSchema: {
        name: z.string().optional().describe("item name"),
        site: z.string().optional().describe("instead of name: a recreated site's full page"),
        theme: z.string().optional().describe("a theme item's name, or 'none' for base defaults; default: the item's own"),
        mode: z.enum(["light", "dark"]).optional(),
        width: z.number().int().min(320).max(1600).optional().describe("device width in px; default 390 (phone)"),
        fresh: z.boolean().optional().describe("ignore the cache (after editing an item without a version bump)"),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ name, site, theme, mode = "light", width = 390, fresh }) => {
      try {
        if (!name && !site) throw new Error("give `name` or `site`");
        const items = (await registry.index()).items;
        let target: { item?: string; site?: string; specimen?: string };
        let key: string;
        let chosen = theme;
        // vault items are shown by the vault gallery, ours by the sites gallery
        let gallery: "sites" | "vault" = "sites";
        if (site) {
          target = { site };
          key = `site-${site}`;
          chosen ??= items.find((t) => t.type === "theme" && t.site === site)?.name ?? "none";
        } else {
          const item = items.find((i) => i.name === name);
          if (!item) throw new Error(`no item "${name}"`);
          if (["lib", "base"].includes(item.type)) throw new Error(`${name} is a ${item.type}; there's nothing to look at`);
          target = item.type === "theme" ? { specimen: item.name } : { item: item.name };
          key = `${item.name}@${item.version}`;
          if ((item.source ?? "foundry") !== "foundry") gallery = "vault";
          chosen ??= ownTheme(items, item)?.name ?? "none";
        }
        const themeItem = items.find((t) => t.name === chosen);
        const png = await previews.screenshot({ target, key, theme: chosen!, mode, width, gallery, fresh: fresh || !!site });
        return {
          content: [
            { type: "image" as const, data: png.toString("base64"), mimeType: "image/png" },
            { type: "text" as const, text: `${site ? `site ${site}` : name} at ${width}px, ${mode}, theme ${themeItem ? `${themeItem.name}@${themeItem.version}` : chosen}` },
          ],
        };
      } catch (e) {
        return fail(e);
      }
    },
  );

  if (readOnly) return;

  const projectDir = z.string().describe("absolute path of the customer project (the folder with package.json)");

  server.registerTool(
    "init",
    {
      title: "Set a project up",
      description: "Prepare a React + Tailwind v4 project (Vite, Astro or Next.js) for foundry items: writes foundry.json, adds the base tokens and cn() helper, and imports them in the CSS file that imports Tailwind.",
      inputSchema: { project_dir: projectDir, registry: z.string().optional().describe("default: this foundry's registry") },
    },
    async ({ project_dir, registry: reg }) => {
      try {
        const { log, lines } = collector();
        const { config, css, result } = await init(project_dir, { registry: reg ?? registryLocation, log, packageOutput: "capture" });
        return text([`foundry.json written (registry ${[config.registry].flat().join(", ")})`, report(result), css, ...lines].join("\n"));
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "add",
    {
      title: "Add items to a project",
      description:
        "Install items (and the items they import) into a project set up with `init`: copies the source into its blocks folder, installs npm packages, records versions in foundry.lock. " +
        "Refuses to overwrite files changed by hand unless force is set.",
      inputSchema: {
        project_dir: projectDir,
        names: z.array(z.string()).min(1).describe("item names, optionally name@version"),
        force: z.boolean().optional(),
        dry_run: z.boolean().optional(),
        install: z.boolean().optional().describe("run the package manager (default true)"),
      },
    },
    async ({ project_dir, names, force, dry_run, install }) => {
      try {
        const { log, lines } = collector();
        const result = await add(project_dir, names, { force, dryRun: dry_run, install, log, packageOutput: "capture" });
        return text([report(result, dry_run), ...lines].filter(Boolean).join("\n"));
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "theme",
    {
      title: "Switch a project's theme",
      description: "Replace the project's theme (all its colours, fonts, radius and spacing) with a theme item. Blocks pick it up automatically.",
      inputSchema: { project_dir: projectDir, name: z.string(), force: z.boolean().optional() },
    },
    async ({ project_dir, name, force }) => {
      try {
        const item = (await registry.index()).items.find((i) => i.name === name);
        if (item && item.type !== "theme") throw new Error(`${name} is a ${item.type}, not a theme`);
        const { log, lines } = collector();
        return text([report(await add(project_dir, [name], { force, log, packageOutput: "capture" })), ...lines].join("\n"));
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "status",
    {
      title: "What a project has",
      description: "Items installed in a project, their versions, and which have newer versions in the registry.",
      inputSchema: { project_dir: projectDir },
      annotations: { readOnlyHint: true },
    },
    async ({ project_dir }) => {
      try {
        const config = await loadConfig(project_dir);
        const lock = await loadLock(project_dir);
        const index = await openRegistry(resolveRegistry(project_dir, config.registry)).index();
        const rows = Object.entries(lock.items).map(([name, e]) => {
          const latest = index.items.find((i) => i.name === name)?.version;
          return `${name} ${e.version} (${e.type})${latest && latest !== e.version ? ` → ${latest} available` : ""} — ${e.entry}`;
        });
        return text(rows.length ? rows.join("\n") : "nothing installed yet");
      } catch (e) {
        return fail(e);
      }
    },
  );

  server.registerTool(
    "diff",
    {
      title: "What changed since an item was added",
      description: "Unified diff between an installed item's files in the project and the registry's latest (or given) version.",
      inputSchema: { project_dir: projectDir, name: z.string().describe("name or name@version") },
      annotations: { readOnlyHint: true },
    },
    async ({ project_dir, name }) => {
      try {
        const d = await diff(project_dir, name);
        return text(`${d.name}: installed ${d.installed ?? "(not installed)"}, registry ${d.latest}\n${d.patches.join("\n") || "no differences"}`);
      } catch (e) {
        return fail(e);
      }
    },
  );
}
