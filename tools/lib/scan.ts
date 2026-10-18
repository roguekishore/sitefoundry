// Reads every item folder (a folder with meta.json) under foundry/ and vault/.
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { builtinModules } from "node:module";
import { dirname, join, posix, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { withCompilerOptions } from "react-docgen-typescript";
import type { ItemFile, ItemMeta, PropDoc } from "@foundry/core";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
export const SOURCE_DIRS = ["foundry", "vault"];
export const REGISTRY_DIR = join(ROOT, "public", "r");

const BINARY = /\.(png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|mp4|webm|mp3|glb|bin|wasm)$/i;
export const CODE = /\.(tsx?|jsx?|mjs)$/;

export interface ScannedItem {
  name: string;
  /** repo-relative folder, forward slashes */
  dir: string;
  meta: ItemMeta;
  files: ItemFile[];
  /** repo-relative path of the demo, if any */
  demo?: string;
  imports: { foundry: string[]; npm: string[]; relative: string[] };
  dependencies: Record<string, string>;
  errors: string[];
  warnings: string[];
}

export async function scan(): Promise<ScannedItem[]> {
  const rootPkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const versions: Record<string, string> = { ...rootPkg.devDependencies, ...rootPkg.dependencies };
  const items: ScannedItem[] = [];
  for (const source of SOURCE_DIRS) {
    if (!existsSync(join(ROOT, source))) continue;
    for (const dir of await findItemDirs(join(ROOT, source))) items.push(await readItem(dir, versions));
  }
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

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

async function readItem(absDir: string, versions: Record<string, string>): Promise<ScannedItem> {
  const dir = relative(ROOT, absDir).replace(/\\/g, "/");
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
      errors.push(`imports "${pkg}", which isn't in the root package.json (add it with \`pnpm add -w ${pkg}\`)`);
    } else {
      dependencies[pkg] = versions[pkg];
    }
  }

  return {
    name,
    dir,
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

/** Props of the component an entry file exports, or undefined if none is found. */
export function propsOf(entryAbs: string): PropDoc[] | undefined {
  const docs = docgen.parse(entryAbs);
  if (!docs.length) return undefined;
  const main = docs.reduce((a, b) => (Object.keys(b.props).length > Object.keys(a.props).length ? b : a));
  return Object.values(main.props).map((p) => ({
    name: p.name,
    type: p.type.name,
    required: p.required,
    ...(p.defaultValue?.value !== undefined ? { default: String(p.defaultValue.value) } : {}),
    ...(p.description ? { description: p.description } : {}),
  }));
}
