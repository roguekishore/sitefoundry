// Reads every item folder (a folder with meta.json) of one target: this repo's foundry/, or the
// vault repo next to it (its vault/ folder; `--vault` on the tools that take a target).
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { builtinModules } from "node:module";
import { dirname, join, posix, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { withCompilerOptions } from "react-docgen-typescript";
import { findVault, type ItemFile, type ItemMeta, type PropDoc } from "@foundry/core";

/** This repo, the foundry: our recreations, base and themes, and every tool. */
export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
/** The vault repo next to it (mirrored third-party items), if there is one. */
export const VAULT_ROOT = findVault(ROOT);

/** A repo whose items are checked, built and shot together. */
export interface Target {
  kind: "foundry" | "vault";
  /** the repo's root: item folders, the path map and .cache/ are relative to it */
  root: string;
  /** folders under root that hold its items */
  sourceDirs: string[];
  /** foundry folders whose items the target's items may import or be shown in, without building them */
  borrowed: string[];
  /** its built registry, public/r */
  registryDir: string;
  /** its thumbnails, public/thumbs (git-ignored) */
  thumbsDir: string;
}

export function target(kind: "foundry" | "vault"): Target {
  if (kind === "foundry") {
    return { kind, root: ROOT, sourceDirs: ["foundry"], borrowed: [], registryDir: join(ROOT, "public", "r"), thumbsDir: join(ROOT, "public", "thumbs") };
  }
  if (!VAULT_ROOT) throw new Error(`no vault repo next to ${ROOT} (looked for ${ROOT}-VAULT); set FOUNDRY_VAULT to its folder`);
  return {
    kind,
    root: VAULT_ROOT,
    sourceDirs: ["vault"],
    // foundry-utils is what vault items import; the themes let the vault be previewed in our sites' colours
    borrowed: [join(ROOT, "foundry", "base"), join(ROOT, "foundry", "themes")],
    registryDir: join(VAULT_ROOT, "public", "r"),
    thumbsDir: join(VAULT_ROOT, "public", "thumbs"),
  };
}

/** The target a tool's arguments ask for: `--vault` for the vault repo, else the foundry. */
export const targetFromArgs = (argv: string[]): Target => target(argv.includes("--vault") ? "vault" : "foundry");

const BINARY = /\.(png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|mp4|webm|mp3|glb|bin|wasm)$/i;
export const CODE = /\.(tsx?|jsx?|mjs)$/;

export interface ScannedItem {
  name: string;
  /** folder relative to the target's root, forward slashes (a borrowed item's starts with ../) */
  dir: string;
  /** absolute folder */
  abs: string;
  /** a foundry item the vault may use: there, it is neither checked nor built */
  borrowed?: boolean;
  meta: ItemMeta;
  files: ItemFile[];
  /** repo-relative path of the demo, if any */
  demo?: string;
  imports: { foundry: string[]; npm: string[]; relative: string[] };
  dependencies: Record<string, string>;
  errors: string[];
  warnings: string[];
}

/** Every item of a target (the foundry by default), plus the foundry items it borrows. */
export async function scan(t: Target = target("foundry")): Promise<ScannedItem[]> {
  const rootPkg = JSON.parse(await readFile(join(t.root, "package.json"), "utf8"));
  const versions: Record<string, string> = { ...rootPkg.devDependencies, ...rootPkg.dependencies };
  const items: ScannedItem[] = [];
  for (const source of t.sourceDirs) {
    if (!existsSync(join(t.root, source))) continue;
    for (const dir of await findItemDirs(join(t.root, source))) items.push(await readItem(t, dir, versions));
  }
  for (const dir of t.borrowed) {
    if (!existsSync(dir)) continue;
    for (const d of await findItemDirs(dir)) items.push({ ...(await readItem(t, d, versions)), borrowed: true });
  }
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

/** The items a target checks and builds: not the borrowed ones. */
export const own = (items: ScannedItem[]) => items.filter((i) => !i.borrowed);

async function findItemDirs(dir: string): Promise<string[]> {
  if (existsSync(join(dir, "meta.json"))) return [dir];
  const found: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_") || entry.name.startsWith(".") || entry.name === "node_modules") continue;
    found.push(...(await findItemDirs(join(dir, entry.name))));
  }
  return found;
}

async function listFiles(dir: string, base = dir): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listFiles(abs, base)));
    else out.push(relative(base, abs).replace(/\\/g, "/"));
  }
  return out;
}

async function readItem(t: Target, absDir: string, versions: Record<string, string>): Promise<ScannedItem> {
  const dir = relative(t.root, absDir).replace(/\\/g, "/");
  const name = posix.basename(dir);
  const errors: string[] = [];
  const warnings: string[] = [];
  let meta: ItemMeta;
  try {
    meta = JSON.parse(await readFile(join(absDir, "meta.json"), "utf8"));
  } catch (e) {
    meta = {} as ItemMeta;
    errors.push(`meta.json is not valid JSON: ${(e as Error).message}`);
  }

  const files: ItemFile[] = [];
  let demo: string | undefined;
  for (const path of await listFiles(absDir)) {
    if (path === "meta.json") continue;
    if (path === meta.demo || /\.demo\.(tsx?|jsx?)$/.test(path)) {
      demo = `${dir}/${path}`;
      continue;
    }
    const binary = BINARY.test(path);
    const content = binary
      ? (await readFile(join(absDir, path))).toString("base64")
      : (await readFile(join(absDir, path), "utf8")).replace(/\r\n/g, "\n");
    const isPublic = path.startsWith("public/");
    files.push({
      path: isPublic ? path.slice("public/".length) : path,
      content,
      ...(binary ? { encoding: "base64" as const } : {}),
      ...(isPublic ? { target: "public" as const } : {}),
    });
  }

  const imports = { foundry: new Set<string>(), npm: new Set<string>(), relative: new Set<string>() };
  for (const f of files) {
    if (f.encoding === "base64") continue;
    const specs = CODE.test(f.path) ? codeImports(f.path, f.content) : f.path.endsWith(".css") ? cssImports(f.content) : [];
    for (const spec of specs) {
      if (spec.startsWith(".") || spec.startsWith("/")) imports.relative.add(spec);
      else if (spec.startsWith("@foundry/")) imports.foundry.add(spec.slice("@foundry/".length));
      else if (spec === "tailwindcss") continue;
      else imports.npm.add(packageName(spec));
    }
  }

  const dependencies: Record<string, string> = {};
  for (const pkg of [...imports.npm].sort()) {
    if (builtinModules.includes(pkg.replace(/^node:/, ""))) {
      errors.push(`imports the Node module "${pkg}"; blocks run in the browser`);
    } else if (pkg.startsWith("next")) {
      continue; // reported by check; the gallery stands in for next/*
    } else if (!versions[pkg]) {
      errors.push(
        t.kind === "vault"
          ? `imports "${pkg}", which isn't in the vault's package.json (add it there with \`pnpm add ${pkg}\`)`
          : `imports "${pkg}", which isn't in the root package.json (add it with \`pnpm add -w ${pkg}\`)`,
      );
    } else {
      dependencies[pkg] = versions[pkg];
    }
  }

  return {
    name,
    dir,
    abs: absDir,
    meta,
    files,
    demo,
    imports: { foundry: [...imports.foundry].sort(), npm: [...imports.npm].sort(), relative: [...imports.relative] },
    dependencies,
    errors,
    warnings,
  };
}

/** "lodash/fp" → "lodash", "@scope/pkg/sub" → "@scope/pkg", "react/jsx-runtime" → "react" */
export function packageName(spec: string): string {
  const parts = spec.split("/");
  return spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
}

export function codeImports(path: string, content: string): string[] {
  const sf = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true, scriptKind(path));
  const specs: string[] = [];
  const visit = (node: ts.Node) => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      if (!(ts.isImportDeclaration(node) && node.importClause?.isTypeOnly)) specs.push(node.moduleSpecifier.text);
    } else if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
      const arg = node.arguments[0];
      if (arg && ts.isStringLiteral(arg)) specs.push(arg.text);
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return specs;
}

export function cssImports(content: string): string[] {
  return [...content.matchAll(/@import\s+(?:url\()?["']([^"']+)["']/g)].map((m) => m[1]);
}

export function scriptKind(path: string): ts.ScriptKind {
  if (path.endsWith(".tsx")) return ts.ScriptKind.TSX;
  if (path.endsWith(".jsx")) return ts.ScriptKind.JSX;
  if (path.endsWith(".ts")) return ts.ScriptKind.TS;
  return ts.ScriptKind.JS;
}

const docgen = withCompilerOptions(
  { jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, allowImportingTsExtensions: true, noEmit: true },
  {
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    savePropValueAsString: true,
    // keep the block's own props, not every HTML attribute inherited from @types/react
    propFilter: (prop) => !prop.parent || !/node_modules/.test(prop.parent.fileName),
  },
);

/**
 * react-docgen skips components that take no props at all, so look for one ourselves: an
 * exported function or arrow function with a capitalised name, or a default export of one.
 */
function exportsPropLessComponent(entryAbs: string): boolean {
  const src = ts.createSourceFile(entryAbs, ts.sys.readFile(entryAbs) ?? "", ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const isComponentName = (name?: string) => !!name && /^[A-Z]/.test(name);
  const isExported = (n: ts.Node) => !!ts.getModifiers(n as ts.HasModifiers)?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
  const isDefault = (n: ts.Node) => !!ts.getModifiers(n as ts.HasModifiers)?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword);
  const named = new Set<string>(); // capitalised top-level functions and arrow functions
  let exported = false;
  for (const st of src.statements) {
    if (ts.isFunctionDeclaration(st) && (st.name || isDefault(st))) {
      if (isComponentName(st.name?.text) || isDefault(st)) named.add(st.name?.text ?? "default");
      if (isExported(st) && (isComponentName(st.name?.text) || isDefault(st))) exported = true;
    } else if (ts.isVariableStatement(st)) {
      for (const d of st.declarationList.declarations) {
        const fn = d.initializer && (ts.isArrowFunction(d.initializer) || ts.isFunctionExpression(d.initializer));
        if (!fn || !ts.isIdentifier(d.name) || !isComponentName(d.name.text)) continue;
        named.add(d.name.text);
        if (isExported(st)) exported = true;
      }
    } else if (ts.isExportAssignment(st) && ts.isIdentifier(st.expression) && named.has(st.expression.text)) {
      exported = true;    } else if (ts.isExportDeclaration(st) && st.exportClause && ts.isNamedExports(st.exportClause)) {
      // export { Name }, or a re-export such as export { Name as default } from "..."
      for (const e of st.exportClause.elements) {
        const local = (e.propertyName ?? e.name).text;
        if (st.moduleSpecifier ? isComponentName(local) : named.has(local)) exported = true;
      }
    }
  }
  return exported;
}

/** Props of the component an entry file exports, or undefined if none is found. */
export function propsOf(entryAbs: string): PropDoc[] | undefined {
  const docs = docgen.parse(entryAbs);
  if (!docs.length) return exportsPropLessComponent(entryAbs) ? [] : undefined;
  const main = docs.reduce((a, b) => (Object.keys(b.props).length > Object.keys(a.props).length ? b : a));
  return Object.values(main.props).map((p) => ({
    name: p.name,
    type: p.type.name,
    required: p.required,
    ...(p.defaultValue?.value !== undefined ? { default: String(p.defaultValue.value) } : {}),
    ...(p.description ? { description: p.description } : {}),
  }));
}
