// shadcn/ui → vault/shadcn/. Components (registry:ui), blocks (pages, sidebars, logins,
// charts), the use-mobile hook and the colour themes. Examples aren't items: each one is
// attached to the component it shows and rendered by that component's demo.
import { readFile } from "node:fs/promises";
import { join, posix } from "node:path";
import { ROOT } from "../../lib/scan.ts";
import { get } from "../lib/fetch.ts";
import { exportedComponents, importClause, needsJs, rewriteSpecifiers, specifiers, titleCase } from "../lib/code.ts";
import { replaceNext } from "../lib/next.ts";
import type { MirrorItem, Skip } from "../lib/write.ts";
import { STYLE, fetchShadcn, type ShadcnItem } from "./shadcn-fetch.ts";

const SOURCE = "shadcn";
const LICENSE = "MIT";
const P = `@/registry/${STYLE}`;
const itemName = (name: string) => `shadcn-${name}`;

/** Examples whose component isn't obvious from their name. */
const EXAMPLE_OWNER: Record<string, string> = {
  "data-table-demo": "table",
  "date-picker-demo": "calendar",
  "date-picker-with-presets": "calendar",
  "date-picker-with-range": "calendar",
};
/** Examples shown together as an item of their own (they need no component). */
const EXAMPLE_GROUPS: Record<string, { title: string; description: string; category: string }> = {
  typography: {
    title: "Typography",
    description: "shadcn's typography styles: headings, paragraphs, lists, quotes, inline code and a table, as plain Tailwind classes.",
    category: "text",
  },
};
const SKIP_EXAMPLES: Record<string, string> = {
  "mode-toggle": "a theme switch for next-themes' ThemeProvider (docs-site plumbing)",
};
/** App-only hooks some examples import; vendored into _examples/ from the shadcn repo. */
const APP_HOOKS: Record<string, string> = {
  "use-media-query": "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/hooks/use-media-query.tsx",
  "use-copy-to-clipboard": "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/hooks/use-copy-to-clipboard.ts",
};

const CATEGORY: Record<string, string> = {
  button: "button", "button-group": "button", toggle: "button", "toggle-group": "button",
  card: "card", item: "card", empty: "card", "aspect-ratio": "layout", separator: "layout", resizable: "layout",
  "scroll-area": "layout", sidebar: "navigation", "navigation-menu": "navigation", breadcrumb: "navigation",
  pagination: "navigation", tabs: "navigation", menubar: "navigation",
  dialog: "overlay", "alert-dialog": "overlay", sheet: "overlay", drawer: "overlay", popover: "overlay",
  "hover-card": "overlay", tooltip: "overlay", "dropdown-menu": "overlay", "context-menu": "overlay", command: "overlay",
  alert: "feedback", progress: "feedback", skeleton: "feedback", sonner: "feedback", spinner: "feedback", badge: "feedback",
  table: "data", chart: "chart", carousel: "gallery", avatar: "media", calendar: "form", accordion: "faq", collapsible: "layout",
  kbd: "text", direction: "lib",
  attachment: "chat", bubble: "chat", marker: "chat", message: "chat", "message-scroller": "chat",
};
const FORM = ["input", "textarea", "select", "native-select", "checkbox", "radio-group", "switch", "slider", "label", "field", "form", "input-group", "input-otp", "combobox"];

/** Hand-written demos for components upstream gives no example. */
const OWN_DEMOS: Record<string, string> = {
  sidebar: `import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "./sidebar"

const items = ["Inbox", "Projects", "Calendar", "Settings"]

export default function Demo() {
  return (
    <SidebarProvider className="min-h-[420px]">
      <Sidebar collapsible="none" className="h-auto">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton isActive={item === "Inbox"}>{item}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-6">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">Page content sits next to the sidebar.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
`,
};

export interface Converted {
  items: MirrorItem[];
  skipped: Skip[];
  /** npm package → ranges upstream asked for */
  packages: Map<string, Set<string>>;
}

export async function convertShadcn(log: (m: string) => void): Promise<Converted> {
  const snap = await fetchShadcn(log);
  const skipped: Skip[] = [];
  const packages = new Map<string, Set<string>>();
  const all = [...snap.items.values()];
  const byType = (t: string) => all.filter((i) => i.type === t);
  const ui = byType("registry:ui");
  const uiNames = new Set(ui.map((i) => i.name));
  const hooks = new Set(byType("registry:hook").map((i) => i.name));
  const charts = new Set(byType("registry:block").filter((b) => b.files.every((f) => f.path.includes("/charts/"))).map((b) => b.name));
  const rootPkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const rootDeps = new Set(["react", "react-dom", ...Object.keys({ ...rootPkg.dependencies })]);
  const docsDemoUsed: string[] = [];

  for (const entry of snap.index) {
    if (entry.type === "registry:font") skipped.push({ source: SOURCE, name: entry.name, reason: "font preset (themes import fonts themselves)" });
    if (entry.type === "registry:style") skipped.push({ source: SOURCE, name: entry.name, reason: "style preset for shadcn's own CLI" });
    if (entry.type === "registry:internal") skipped.push({ source: SOURCE, name: entry.name, reason: "internal to shadcn's docs, not published as an item" });
  }
  skipped.push({ source: SOURCE, name: "utils", reason: "cn() — the same as @foundry/foundry-utils" });
  for (const entry of snap.index.filter((e) => !snap.items.has(e.name) && ["registry:ui", "registry:block", "registry:example"].includes(e.type))) {
    skipped.push({ source: SOURCE, name: entry.name, reason: "listed in the index but its item URL is missing" });
  }

  /** Map one upstream import to ours. `ctx` says where the importing file lives. */
  function mapImport(spec: string, ctx: { kind: "item" | "example"; block?: string; fileDir: string; localPaths: Map<string, string> }): string | undefined | Error {
    if (spec === "cn" || spec === "@/lib/utils" || spec === `${P}/lib/utils`) return "@foundry/foundry-utils";
    let m = spec.match(/^@\/(?:registry\/[^/]+\/|components\/)ui\/([^/]+)$/);
    if (m) return uiNames.has(m[1]) ? `@foundry/${itemName(m[1])}` : new Error(`imports ui/${m[1]}, which isn't in the registry`);
    m = spec.match(/^@\/(?:registry\/[^/]+\/)?hooks\/([^/]+)$/);
    if (m) {
      if (hooks.has(m[1])) return `@foundry/${itemName(m[1])}`;
      if (ctx.kind === "example" && APP_HOOKS[m[1]]) return relativeTo(ctx.fileDir, `_examples/hooks/${m[1]}`);
      return new Error(`imports the app-only hook ${m[1]}`);
    }
    m = spec.match(/^@\/registry\/[^/]+\/blocks\/([^/]+)\/(.+)$/);
    if (m) {
      if (m[1] !== ctx.block) return new Error(`imports another block's file (${m[1]})`);
      const local = ctx.localPaths.get(m[2]);
      return local ? relativeTo(ctx.fileDir, local) : new Error(`imports ${spec}, which isn't one of its files`);
    }
    m = spec.match(/^@\/registry\/[^/]+\/charts\/([^/]+)$/);
    if (m) return charts.has(m[1]) ? `@foundry/${itemName(m[1])}` : new Error(`imports chart ${m[1]}`);
    m = spec.match(/^@\/registry\/[^/]+\/examples\/([^/]+)$/);
    if (m) return ctx.kind === "example" ? relativeTo(ctx.fileDir, `_examples/${m[1]}`) : new Error(`imports example ${m[1]}`);
    if (spec.startsWith("@/")) return new Error(`imports ${spec}`);
    return undefined;
  }

  function convertFile(content: string, ctx: Parameters<typeof mapImport>[1]): { content: string } | { error: string } {
    let error: string | undefined;
    let out = rewriteSpecifiers(content, (spec) => {
      const r = mapImport(spec, ctx);
      if (r instanceof Error) {
        error ??= r.message;
        return undefined;
      }
      return r;
    });
    if (error) return { error };
    const next = replaceNext(out);
    if ("unsupported" in next) return { error: `uses ${next.unsupported} (Next.js only)` };
    out = next.content;
    for (const spec of specifiers(out)) {
      if (spec.startsWith(".") || spec.startsWith("@foundry/")) continue;
      const pkg = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0];
      if (!packages.has(pkg)) packages.set(pkg, new Set());
    }
    return { content: out };
  }

  const recordRanges = (item: ShadcnItem) => {
    for (const dep of item.dependencies ?? []) {
      const at = dep.lastIndexOf("@");
      const [pkg, range] = at > 0 ? [dep.slice(0, at), dep.slice(at + 1)] : [dep, ""];
      if (pkg === "cn") continue;
      if (!packages.has(pkg)) packages.set(pkg, new Set());
      if (range) packages.get(pkg)!.add(range);
    }
  };

  // ---- examples, grouped by the component they show
  const examplesOf = new Map<string, ShadcnItem[]>();
  for (const ex of byType("registry:example")) {
    if (SKIP_EXAMPLES[ex.name]) {
      skipped.push({ source: SOURCE, name: ex.name, reason: SKIP_EXAMPLES[ex.name] });
      continue;
    }
    const group = Object.keys(EXAMPLE_GROUPS).find((g) => ex.name === `${g}-demo` || ex.name.startsWith(`${g}-`));
    const owner =
      EXAMPLE_OWNER[ex.name] ??
      group ??
      [...uiNames].filter((u) => ex.name === u || ex.name.startsWith(`${u}-`)).sort((a, b) => b.length - a.length)[0] ??
      ex.registryDependencies?.find((d) => uiNames.has(d));
    if (!owner) {
      skipped.push({ source: SOURCE, name: ex.name, reason: "an example of no mirrored component" });
      continue;
    }
    if (!examplesOf.has(owner)) examplesOf.set(owner, []);
    examplesOf.get(owner)!.push(ex);
  }

  /** The demo files for a set of examples: _examples/*.tsx plus a demo rendering them in turn. */
  async function exampleDemo(owner: string, examples: ShadcnItem[], demoName: string): Promise<Record<string, string> | { error: string }> {
    const files: Record<string, string> = {};
    const sorted = [...examples].sort((a, b) => (b.name === `${owner}-demo` ? 1 : 0) - (a.name === `${owner}-demo` ? 1 : 0) || a.name.localeCompare(b.name));
    const shown: { name: string; local: string; clause: string }[] = [];
    const hooksNeeded = new Set<string>();
    for (const ex of sorted) {
      const file = ex.files[0];
      if (!file?.content) continue;
      for (const spec of specifiers(file.content)) {
        const h = spec.match(/^@\/(?:registry\/[^/]+\/)?hooks\/([^/]+)$/)?.[1];
        if (h && !hooks.has(h)) hooksNeeded.add(h);
      }
      const conv = convertFile(file.content, { kind: "example", fileDir: "_examples", localPaths: new Map() });
      if ("error" in conv) {
        skipped.push({ source: SOURCE, name: ex.name, reason: `example: ${conv.error}` });
        continue;
      }
      recordRanges(ex);
      const fileName = posix.basename(file.path);
      const imp = importClause(fileName, conv.content);
      if (!imp) {
        skipped.push({ source: SOURCE, name: ex.name, reason: "example exports no component" });
        continue;
      }
      files[`_examples/${fileName}`] = conv.content;
      const local = `Example${shown.length + 1}`;
      shown.push({ name: ex.name, local, clause: imp.clause === "Main" ? local : imp.clause.replace("Main", local) });
    }
    for (const h of hooksNeeded) {
      const src = await get(APP_HOOKS[h]);
      if (!src) return { error: `app-only hook ${h} not found` };
      files[`_examples/hooks/${h}.${APP_HOOKS[h].endsWith(".tsx") ? "tsx" : "ts"}`] = src;
    }
    if (!shown.length) return { error: "none of its examples could be converted" };
    files[demoName] = composeDemo(shown, Object.values(files).some((c) => c.includes(`"@foundry/shadcn-tooltip"`)));
    return files;
  }

  const items: MirrorItem[] = [];
  const hydrateOf = new Map<string, boolean>();
  const depsOf = new Map<string, string[]>();

  // ---- the use-mobile hook (a lib)
  for (const hook of byType("registry:hook")) {
    const file = hook.files[0];
    const conv = convertFile(file.content, { kind: "item", fileDir: "", localPaths: new Map() });
    if ("error" in conv) {
      skipped.push({ source: SOURCE, name: hook.name, reason: conv.error });
      continue;
    }
    recordRanges(hook);
    const fileName = posix.basename(file.path);
    items.push({
      name: itemName(hook.name),
      source: SOURCE,
      meta: {
        type: "lib",
        title: titleCase(hook.name),
        description: hook.description ?? "React hook: true below the mobile breakpoint (768 px). Used by the shadcn sidebar.",
        license: LICENSE,
        tags: ["hook", "responsive"],
        entry: fileName,
      },
      files: { [fileName]: conv.content },
      demoFiles: {},
    });
  }

  // ---- components
  for (const comp of ui) {
    const file = comp.files[0];
    const fileName = posix.basename(file.path);
    const conv = convertFile(file.content, { kind: "item", fileDir: "", localPaths: new Map() });
    if ("error" in conv) {
      skipped.push({ source: SOURCE, name: comp.name, reason: conv.error });
      continue;
    }
    recordRanges(comp);
    const demoName = `${itemName(comp.name)}.demo.tsx`;
    let demoFiles: Record<string, string>;
    const examples = examplesOf.get(comp.name) ?? [];
    if (OWN_DEMOS[comp.name]) demoFiles = { [demoName]: OWN_DEMOS[comp.name] };
    else if (examples.length) {
      const d = await exampleDemo(comp.name, examples, demoName);
      if ("error" in d) {
        skipped.push({ source: SOURCE, name: comp.name, reason: d.error });
        continue;
      }
      demoFiles = d;
    } else {
      // no registry example: the demo its docs page opens with, if it only needs what we have
      const docsDemo = snap.docsDemos.get(comp.name);
      const usable =
        docsDemo &&
        specifiers(docsDemo).every((s) => {
          if (s.startsWith("@/")) return mapImport(s, { kind: "example", fileDir: "_examples", localPaths: new Map() }) instanceof Error === false;
          const pkg = s.startsWith("@") ? s.split("/").slice(0, 2).join("/") : s.split("/")[0];
          return s.startsWith(".") || rootDeps.has(pkg);
        });
      const d = usable ? await exampleDemo(comp.name, [{ name: `${comp.name}-demo`, type: "registry:example", files: [{ path: `${comp.name}-demo.tsx`, type: "registry:example", content: docsDemo }] }], demoName) : undefined;
      if (d && !("error" in d)) {
        demoFiles = d;
        docsDemoUsed.push(comp.name);
      } else demoFiles = { [demoName]: minimalDemo(fileName.replace(/\.tsx?$/, ""), conv.content) };
    }

    depsOf.set(comp.name, (comp.registryDependencies ?? []).filter((d) => uiNames.has(d) || hooks.has(d)));
    hydrateOf.set(comp.name, needsJs(conv.content));
    const notes = commonNotes(conv.content);
    if (examples.length > 1) notes.push(`the demo shows upstream's ${examples.length} examples`);
    if (docsDemoUsed.includes(comp.name)) notes.push("demo: the example on shadcn's docs page");
    items.push({
      name: itemName(comp.name),
      source: SOURCE,
      meta: {
        type: "component",
        title: comp.title ?? titleCase(comp.name),
        description: snap.docs.get(comp.name) ?? comp.description ?? `The shadcn/ui ${titleCase(comp.name).toLowerCase()} component.`,
        category: CATEGORY[comp.name] ?? (FORM.includes(comp.name) ? "form" : "ui"),
        license: LICENSE,
        tags: tagsFor(comp.name, conv.content),
        notes,
        entry: fileName,
      },
      files: { [fileName]: conv.content },
      demoFiles,
    });
  }

  // ---- example groups that are items of their own (typography)
  for (const [group, info] of Object.entries(EXAMPLE_GROUPS)) {
    const examples = examplesOf.get(group) ?? [];
    const main = examples.find((e) => e.name === `${group}-demo`);
    if (!main) continue;
    const demoName = `${itemName(group)}.demo.tsx`;
    const d = await exampleDemo(group, examples, demoName);
    if ("error" in d) {
      skipped.push({ source: SOURCE, name: group, reason: d.error });
      continue;
    }
    const entryName = posix.basename(main.files[0].path);
    const entry = d[`_examples/${entryName}`];
    const wrapper = wrapperFile(itemName(group), importClause(entryName, entry)!.clause, `./${entryName.replace(/\.tsx?$/, "")}`);
    items.push({
      name: itemName(group),
      source: SOURCE,
      meta: { type: "block", title: info.title, description: info.description, category: info.category, license: LICENSE, tags: ["typography", "text", "prose"], notes: [`the demo shows upstream's ${examples.length} examples`], entry: wrapper.path },
      files: { [entryName]: entry, [wrapper.path]: wrapper.content },
      demoFiles: d,
    });
    hydrateOf.set(group, false);
  }

  // ---- blocks: full pages (dashboard, sidebars, login, signup) and charts
  for (const block of byType("registry:block")) {
    const isChart = charts.has(block.name);
    const prefix = isChart ? `registry/${STYLE}/charts/` : `registry/${STYLE}/blocks/${block.name}/`;
    const localPaths = new Map<string, string>(); // upstream path inside the block (no extension) → local path
    for (const f of block.files) {
      const local = f.path.startsWith(prefix) ? f.path.slice(prefix.length) : posix.basename(f.path);
      localPaths.set(local.replace(/\.(tsx?|json)$/, ""), local);
      localPaths.set(local, local);
    }
    const files: Record<string, string> = {};
    let error: string | undefined;
    for (const f of block.files) {
      const local = f.path.startsWith(prefix) ? f.path.slice(prefix.length) : posix.basename(f.path);
      if (!/\.(tsx?|jsx?)$/.test(local)) {
        files[local] = f.content;
        continue;
      }
      const conv = convertFile(f.content, { kind: "item", block: block.name, fileDir: posix.dirname(local) === "." ? "" : posix.dirname(local), localPaths });
      if ("error" in conv) {
        error = conv.error;
        break;
      }
      files[local] = conv.content;
    }
    if (error) {
      skipped.push({ source: SOURCE, name: block.name, reason: error });
      continue;
    }
    recordRanges(block);
    const pageFile = block.files.find((f) => f.type === "registry:page");
    const entry = pageFile ? pageFile.path.slice(prefix.length) : Object.keys(files).find((p) => /\.tsx$/.test(p))!;
    const demoName = `${itemName(block.name)}.demo.tsx`;
    const imp = importClause(entry, files[entry]);
    if (!imp) {
      skipped.push({ source: SOURCE, name: block.name, reason: "its entry exports no component" });
      continue;
    }
    const wrapper = wrapperFile(itemName(block.name), imp.clause, "./" + entry.replace(/\.tsx?$/, ""));
    files[wrapper.path] = wrapper.content;
    const demo = `import ${wrapper.component} from "./${itemName(block.name)}"\n\nexport default function Demo() {\n  return <${wrapper.component}${isChart ? ` className="mx-auto w-full max-w-xl p-6"` : ""} />\n}\n`;
    const all = Object.values(files).join("\n");
    depsOf.set(block.name, (block.registryDependencies ?? []).filter((d) => uiNames.has(d) || hooks.has(d)));
    hydrateOf.set(block.name, Object.values(files).some(needsJs));
    const kind = block.name.replace(/-\d+$/, "").split("-")[0];
    const notes = commonNotes(all);
    if (!isChart) notes.push("a whole page: give it the full viewport");
    items.push({
      name: itemName(block.name),
      source: SOURCE,
      meta: {
        type: "block",
        title: isChart ? titleCase(block.name) : `${titleCase(block.name.replace(/-\d+$/, ""))} ${block.name.match(/\d+$/)?.[0] ?? ""}`.trim(),
        description: block.description ?? `shadcn/ui ${block.name} block.`,
        category: isChart ? "chart" : kind === "login" || kind === "signup" ? "auth" : kind === "sidebar" ? "sidebar" : kind,
        license: LICENSE,
        tags: [...new Set([...(isChart ? ["chart"] : ["page"]), ...block.name.split("-").filter((w) => !/^\d+$/.test(w)), ...(block.categories ?? [])])],
        notes,
        entry: wrapper.path,
      },
      files,
      demoFiles: { [demoName]: demo },
    });
  }

  // hydrate: an item needs JS if it or anything it uses does
  const memo = new Map<string, boolean>();
  const js = (n: string, seen = new Set<string>()): boolean => {
    if (memo.has(n)) return memo.get(n)!;
    if (seen.has(n)) return false;
    seen.add(n);
    const v = (hydrateOf.get(n) ?? false) || (depsOf.get(n) ?? []).some((d) => js(d, seen));
    memo.set(n, v);
    return v;
  };
  for (const item of items) {
    const upstream = item.name.slice("shadcn-".length);
    if (item.meta.type === "lib") continue;
    if (js(upstream)) item.meta.hydrate = "load";
  }

  // ---- themes
  const base = await readFile(join(ROOT, "foundry/base/foundry-base/foundry.css"), "utf8");
  for (const theme of byType("registry:theme")) {
    const css = themeCss(theme, base);
    const short = theme.name.replace(/^theme-/, "");
    items.push({
      name: itemName(theme.name),
      source: SOURCE,
      meta: {
        type: "theme",
        title: `shadcn ${titleCase(short)}`,
        description: `shadcn/ui's ${short} base colour: neutral surfaces with a ${short} tint, light and dark. Tokens shadcn doesn't define keep the foundry-base defaults.`,
        license: LICENSE,
        tags: ["neutral", short, "light", "dark"],
        entry: "theme.css",
      },
      files: { "theme.css": css },
      demoFiles: {},
    });
  }

  return { items, skipped, packages };
}

/**
 * Our entry for a block: the upstream page or chart as one component with a typed props
 * interface (the registry's props description needs one; upstream's take no props).
 */
function wrapperFile(name: string, clause: string, spec: string): { path: string; content: string; component: string } {
  const component = name.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");
  const content = `// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import ${clause} from "${spec}"

export interface ${component}Props {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ${component}({ className }: ${component}Props) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ${component}
`;
  return { path: `${name}.tsx`, content, component };
}

function relativeTo(fromDir: string, target: string): string {
  let rel = posix.relative(fromDir || ".", target).replace(/\.(tsx?|jsx?)$/, "");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

/** The demo for a component: its examples in turn, inside a TooltipProvider when they use tooltips (as shadcn's docs layout does). */
function composeDemo(shown: { name: string; local: string; clause: string }[], tooltip: boolean): string {
  const imports = [
    ...(tooltip ? [`import { TooltipProvider } from "@foundry/shadcn-tooltip"`] : []),
    ...shown.map((s) => `import ${s.clause} from "./_examples/${s.name}"`),
  ].join("\n");
  const wrap = (jsx: string) => (tooltip ? `<TooltipProvider>\n    ${jsx}\n    </TooltipProvider>` : jsx);
  if (shown.length === 1) {
    return `${imports}\n\nexport default function Demo() {\n  return (\n    ${wrap(`<div className="flex min-h-48 w-full items-center justify-center p-6">\n      <${shown[0].local} />\n    </div>`)}\n  )\n}\n`;
  }
  const list = shown.map((s) => `  ["${s.name}", ${s.local}],`).join("\n");
  const body = `<div className="flex flex-col gap-12 p-6">
      {examples.map(([name, Example]) => (
        <section key={name} className="flex flex-col gap-4">
          <p className="font-mono text-xs text-muted-foreground">{name}</p>
          <div className="flex w-full flex-wrap items-center justify-center">
            <Example />
          </div>
        </section>
      ))}
    </div>`;
  return `// shadcn's own examples for this component, one after another (gallery only).
import type { ComponentType } from "react"
${imports}

const examples: [string, ComponentType][] = [
${list}
]

export default function Demo() {
  return (
    ${wrap(body)}
  )
}
`;
}

/** For components upstream has no example of: render the main export with a little content. */
function minimalDemo(module: string, content: string): string {
  const ex = exportedComponents(module + ".tsx", content);
  const main = ex.default ?? ex.named[0];
  if (!main) return `export default function Demo() {\n  return null\n}\n`;
  const clause = ex.default ? main : `{ ${main} }`;
  return `import ${clause} from "./${module}"\n\nexport default function Demo() {\n  return (\n    <div className="flex min-h-48 items-center justify-center p-6">\n      <${main}>Sample content</${main}>\n    </div>\n  )\n}\n`;
}

function commonNotes(content: string): string[] {
  const notes: string[] = [];
  if (/\banimate-(in|out)\b|animate-accordion|animate-collapsible|\bfade-in-|\bzoom-in-|\bslide-in-from/.test(content)) {
    notes.push("open/close animations use tw-animate-css classes: add `@import \"tw-animate-css\";` to your CSS, or they just appear");
  }
  if (/placeholder\.svg/.test(content)) notes.push("uses /placeholder.svg as its image: pass or swap in your own");
  if (/from ["']recharts["']/.test(content)) notes.push("charts: recharts");
  return notes;
}

function tagsFor(name: string, content: string): string[] {
  const tags = new Set(["ui", ...name.split("-")]);
  if (/from ["']radix-ui["']/.test(content)) tags.add("radix");
  if (/@base-ui\/react/.test(content)) tags.add("base-ui");
  return [...tags];
}

/** One theme.css with every foundry-base token: shadcn's values where it has them, base defaults otherwise. */
function themeCss(theme: ShadcnItem, baseCss: string): string {
  const block = (sel: RegExp) => {
    const body = baseCss.match(sel)?.[1] ?? "";
    return [...body.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()] as const);
  };
  const root = block(/:root\s*{([^}]*)}/);
  const dark = block(/\.dark\s*{([^}]*)}/);
  const light = { ...theme.cssVars?.theme, ...theme.cssVars?.light };
  const darkVars = theme.cssVars?.dark ?? {};
  const line = (name: string, value: string, own: boolean) => `  ${name}: ${value};${own ? "" : " /* foundry-base default */"}`;
  const fill = (defaults: readonly (readonly [string, string])[], vars: Record<string, string>) =>
    defaults.map(([n, v]) => (vars[n.slice(2)] !== undefined ? line(n, vars[n.slice(2)], true) : line(n, v, false))).join("\n");
  return `/* shadcn/ui ${theme.name} (MIT), mirrored. Tokens shadcn doesn't set keep the foundry-base value. */\n\n:root {\n${fill(root, light)}\n}\n\n.dark {\n${fill(dark, darkVars)}\n}\n`;
}
