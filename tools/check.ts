// `pnpm check [name…]`: the contract, enforced. Errors stop an item from entering the registry.
// Our items (source "foundry") are held to every rule; vault items get the style rules as warnings.
// `pnpm check:vault [name…]` checks the vault repo next to this one.
import { createRequire } from "node:module";
import { mkdir, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import * as esbuild from "esbuild";
import ts from "typescript";
import { ROOT, CODE, own, propsOf, scan, scriptKind, targetFromArgs, type ScannedItem, type Target } from "./lib/scan.ts";
import { versionErrors, writePathMap } from "./build-registry.ts";

const TYPES = ["base", "lib", "theme", "component", "block", "asset"];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const RAW_COLOUR = /#[0-9a-fA-F]{3,8}\b|\b(rgba?|hsla?|oklch|oklab|lab|lch|hwb)\(/;
const PALETTE = new RegExp(
  String.raw`\b(bg|text|border|from|via|to|ring|fill|stroke|shadow|outline|decoration|accent|caret|divide|placeholder)-` +
    String.raw`(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)\b`,
);
const MOTION_LIBS = ["motion", "framer-motion", "gsap", "three", "lenis", "ogl", "@react-three/fiber"];
const REDUCED_MOTION = /useReducedMotion|prefers-reduced-motion|motion-reduce:|motion-safe:|reducedMotion|MotionConfig/;

/** Token names, read from foundry-base so the list has one source. */
async function tokenNames(): Promise<{ colours: string[]; rootOnly: string[] }> {
  const css = await readFile(join(ROOT, "foundry/base/foundry-base/foundry.css"), "utf8");
  const root = css.match(/:root\s*{([^}]*)}/)?.[1] ?? "";
  const names = [...root.matchAll(/(--[a-z0-9-]+)\s*:/g)].map((m) => m[1]);
  const dark = new Set([...(css.match(/\.dark\s*{([^}]*)}/)?.[1] ?? "").matchAll(/(--[a-z0-9-]+)\s*:/g)].map((m) => m[1]));
  return { colours: names.filter((n) => dark.has(n)), rootOnly: names.filter((n) => !dark.has(n)) };
}

function declared(css: string, selector: RegExp): Set<string> {
  const out = new Set<string>();
  for (const block of css.matchAll(selector)) for (const m of block[1].matchAll(/(--[a-z0-9-]+)\s*:/g)) out.add(m[1]);
  return out;
}

/** Visible text and literal image sources written straight into JSX. */
function hardCodedContent(path: string, content: string): string[] {
  const sf = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true, scriptKind(path));
  const found: string[] = [];
  const visit = (node: ts.Node) => {
    if (ts.isJsxText(node) && /\p{L}/u.test(node.text) && !/foundry-allow-text/.test(content)) {
      found.push(`text "${node.text.trim().slice(0, 40)}"`);
    }
    if (ts.isJsxAttribute(node) && node.initializer && ts.isStringLiteral(node.initializer)) {
      const attr = node.name.getText(sf);
      if ((attr === "src" || attr === "srcSet" || attr === "poster") && node.initializer.text) found.push(`${attr}="${node.initializer.text}"`);
      if (attr === "alt" && node.initializer.text) found.push(`alt="${node.initializer.text}"`);
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return found;
}

const HOOK = /\buse(State|Effect|LayoutEffect|Reducer|Ref|Transition|SyncExternalStore|ReducedMotion|InView|Scroll|Animate|Animation|MotionValue|Spring|Transform|Velocity)\s*[(<]/;
const HIDDEN = /style="[^"]*(opacity:\s*0[;"]|visibility:\s*hidden)/;

/** React as the target's items see it: its own copy (the vault has its own node_modules). */
async function reactOf(t: Target) {
  const req = createRequire(join(t.root, "package.json"));
  const react = await import(pathToFileURL(req.resolve("react")).href);
  const server = await import(pathToFileURL(req.resolve("react-dom/server")).href);
  return { createElement: (react.createElement ?? react.default.createElement) as typeof import("react").createElement, renderToString: (server.renderToString ?? server.default.renderToString) as typeof import("react-dom/server").renderToString };
}

/** Bundle the demo for Node and render it to HTML: what Astro and other static builds do. */
async function renderDemo(t: Target, react: Awaited<ReturnType<typeof reactOf>>, item: ScannedItem, paths: Record<string, string>): Promise<{ error?: string; html?: string }> {
  // bundled inside the target's repo, so its npm packages resolve from its node_modules
  const out = join(t.root, ".cache", "ssr", `${item.name}.mjs`);
  await mkdir(join(t.root, ".cache", "ssr"), { recursive: true });
  try {
    await esbuild.build({
      entryPoints: [join(t.root, item.demo!)],
      outfile: out,
      bundle: true,
      platform: "node",
      format: "esm",
      jsx: "automatic",
      packages: "external",
      logLevel: "silent",
      loader: { ".css": "empty", ".png": "dataurl", ".jpg": "dataurl", ".jpeg": "dataurl", ".webp": "dataurl", ".svg": "dataurl", ".woff2": "empty" },
      plugins: [
        {
          name: "foundry-alias",
          setup(build) {
            build.onResolve({ filter: /^@foundry\// }, (args) => {
              const name = args.path.slice("@foundry/".length);
              return paths[name] ? { path: join(t.root, paths[name]) } : { errors: [{ text: `unknown item @foundry/${name}` }] };
            });
          },
        },
      ],
    });
    const mod = await import(pathToFileURL(out).href + `?t=${Date.now()}`);
    if (typeof mod.default !== "function") return { error: "the demo has no default-exported component" };
    return { html: react.renderToString(react.createElement(mod.default)) };
  } catch (e) {
    const err = e as Error & { errors?: { text: string }[] };
    return { error: (err.errors?.map((x) => x.text).join("; ") || err.message).split("\n")[0] };
  } finally {
    await rm(out, { force: true });
  }
}

async function checkItem(item: ScannedItem, ctx: { t: Target; react: Awaited<ReturnType<typeof reactOf>>; tokens: Awaited<ReturnType<typeof tokenNames>>; paths: Record<string, string> }) {
  const { meta } = item;
  const strict = (meta.source ?? "foundry") === "foundry";
  const errors = [...item.errors];
  const warnings = [...item.warnings];
  const style = (msg: string) => (strict ? errors : warnings).push(msg);

  // format
  if (meta.schema !== 1) errors.push(`"schema" must be 1`);
  if (!TYPES.includes(meta.type)) errors.push(`"type" must be one of ${TYPES.join(", ")}`);
  if (!meta.title) errors.push(`"title" is missing`);
  if (!meta.license) errors.push(`"license" is missing`);
  if (!KEBAB.test(item.name)) errors.push(`folder name "${item.name}" must be kebab-case`);
  if (!meta.entry || !item.files.some((f) => f.path === meta.entry)) errors.push(`"entry" (${meta.entry}) is not a file in the item`);
  if (["block", "component"].includes(meta.type) && !item.demo) errors.push(`a ${meta.type} needs a demo (<name>.demo.tsx)`);
  if (meta.type === "block" && !meta.category) errors.push(`a block needs a "category" (header, hero, footer…)`);
  for (const dep of item.imports.foundry) if (!ctx.paths[dep]) errors.push(`imports @foundry/${dep}, which doesn't exist`);
  for (const pkg of item.imports.npm) if (pkg === "next" || pkg.startsWith("next/")) style(`imports "${pkg}"; blocks must be plain React (no next/*)`);
  errors.push(...(await versionErrors(ctx.t, item)));

  // themes fill in every token
  if (meta.type === "theme") {
    const css = item.files.filter((f) => f.path.endsWith(".css"));
    if (item.files.length !== 1 || css.length !== 1) errors.push(`a theme is exactly one CSS file`);
    else {
      const root = declared(css[0].content, /:root\s*{([^}]*)}/g);
      const dark = declared(css[0].content, /\.dark\s*{([^}]*)}/g);
      const missingRoot = [...ctx.tokens.colours, ...ctx.tokens.rootOnly].filter((t) => !root.has(t));
      const missingDark = ctx.tokens.colours.filter((t) => !dark.has(t));
      if (missingRoot.length) errors.push(`:root is missing ${missingRoot.join(", ")}`);
      if (missingDark.length) errors.push(`.dark is missing ${missingDark.join(", ")}`);
    }
  }

  // blocks: tokens only, content through props, reduced motion
  if (!["base", "theme", "asset"].includes(meta.type)) {
    let motion = item.imports.npm.some((p) => MOTION_LIBS.includes(p));
    let reduced = false;
    for (const f of item.files) {
      if (f.encoding === "base64") continue;
      const lines = f.content.split("\n");
      lines.forEach((line, n) => {
        if (/foundry-allow-colour/.test(line)) return;
        if (RAW_COLOUR.test(line)) style(`${f.path}:${n + 1} raw colour; use a token (bg-primary, text-muted-foreground…)`);
        if (PALETTE.test(line)) style(`${f.path}:${n + 1} Tailwind palette colour "${line.match(PALETTE)![0]}"; use a token`);
      });
      if (/@keyframes|animation\s*:|\banimate-[a-z]/.test(f.content)) motion = true;
      if (REDUCED_MOTION.test(f.content)) reduced = true;
      if (CODE.test(f.path) && meta.type !== "lib") {
        for (const hit of hardCodedContent(f.path, f.content)) style(`${f.path}: ${hit} is hard-coded; take it as a prop (defaults go in the demo)`);
      }
    }
    if (motion && !reduced) style(`animates but never checks reduced motion (useReducedMotion, motion-reduce:, or a prefers-reduced-motion query)`);
  }

  // props are described, and the demo renders to static HTML
  if (["block", "component"].includes(meta.type) && meta.entry && !errors.some((e) => e.startsWith(`"entry"`))) {
    if (!propsOf(join(item.abs, meta.entry))) errors.push(`no exported React component found in ${meta.entry}`);
  }
  if (meta.hydrate && !["load", "visible", "idle"].includes(meta.hydrate)) errors.push(`"hydrate" must be load, visible or idle`);
  if (["block", "component"].includes(meta.type) && !meta.hydrate) {
    const hooked = item.files.find((f) => CODE.test(f.path) && HOOK.test(f.content));
    if (hooked) style(`${hooked.path} uses React state/effects, so it only works with JavaScript: set "hydrate" in meta.json`);
  }
  if (item.demo && !errors.length) {
    const { error, html } = await renderDemo(ctx.t, ctx.react, item, ctx.paths);
    if (error) (strict ? errors : warnings).push(`doesn't render to static HTML: ${error}`);
    else if (html && HIDDEN.test(html) && !meta.hydrate) {
      style(`its static HTML starts hidden (opacity 0) and stays hidden without JavaScript: set "hydrate", or animate in with CSS`);
    }
  }
  return { errors, warnings };
}

async function main() {
  const argv = process.argv.slice(2);
  const t = targetFromArgs(argv);
  const only = argv.filter((a) => !a.startsWith("--"));
  const scanned = await scan(t);
  await writePathMap(t, scanned);
  const all = own(scanned);
  const paths = JSON.parse(await readFile(join(t.root, "foundry.paths.json"), "utf8"));
  const tokens = await tokenNames();
  const react = await reactOf(t);

  const seen = new Map<string, string>();
  let errorCount = 0;
  let warningCount = 0;
  for (const item of all) {
    const dup = seen.get(item.name);
    seen.set(item.name, item.dir);
    if (only.length && !only.includes(item.name)) continue;
    const { errors, warnings } = await checkItem(item, { t, react, tokens, paths });
    if (dup) errors.push(`name already used by ${dup}`);
    errorCount += errors.length;
    warningCount += warnings.length;
    if (!errors.length && !warnings.length) continue;
    console.log(`\n${item.dir}`);
    for (const e of errors) console.log(`  error    ${e}`);
    for (const w of warnings) console.log(`  warning  ${w}`);
  }
  const checked = only.length ? only.length : all.length;
  console.log(`\n${checked} item(s) checked: ${errorCount} error(s), ${warningCount} warning(s)`);
  process.exit(errorCount ? 1 : 0);
}

await main();
