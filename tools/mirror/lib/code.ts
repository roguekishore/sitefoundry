// Small source-code helpers shared by the converters.
import ts from "typescript";
import { codeImports } from "../../lib/scan.ts";

/** Rewrites every import/export specifier; return undefined to keep it as is. */
export function rewriteSpecifiers(content: string, fn: (spec: string) => string | undefined): string {
  return content.replace(
    /((?:\bfrom|\bimport)\s*\(?\s*)(["'])([^"'\n]+)\2/g,
    (match, lead: string, quote: string, spec: string) => {
      const next = fn(spec);
      return next === undefined ? match : `${lead}${quote}${next}${quote}`;
    },
  );
}

/** Import/export specifiers, read with the TypeScript parser (strings in code don't count). */
export function specifiers(content: string): string[] {
  return codeImports("file.tsx", content);
}

/** The components a file exports: its default export's name (if any) and named exports. */
export function exportedComponents(path: string, content: string): { default?: string; named: string[] } {
  const sf = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const named: string[] = [];
  let def: string | undefined;
  const isComponentName = (n: string) => /^[A-Z]/.test(n);
  for (const st of sf.statements) {
    const mods = ts.canHaveModifiers(st) ? ts.getModifiers(st) ?? [] : [];
    const exported = mods.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
    const isDefault = mods.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword);
    if (ts.isFunctionDeclaration(st) && exported) {
      const n = st.name?.text ?? "Component";
      if (isDefault) def = n;
      else if (isComponentName(n)) named.push(n);
    } else if (ts.isVariableStatement(st) && exported) {
      for (const d of st.declarationList.declarations) if (ts.isIdentifier(d.name) && isComponentName(d.name.text)) named.push(d.name.text);
    } else if (ts.isClassDeclaration(st) && exported && st.name) {
      if (isDefault) def = st.name.text;
      else named.push(st.name.text);
    } else if (ts.isExportAssignment(st)) {
      def = ts.isIdentifier(st.expression) ? st.expression.text : "Component";
    } else if (ts.isExportDeclaration(st) && !st.moduleSpecifier && st.exportClause && ts.isNamedExports(st.exportClause)) {
      for (const el of st.exportClause.elements) {
        if (el.name.text === "default") def = (el.propertyName ?? el.name).text;
        else if (isComponentName(el.name.text) && !st.isTypeOnly && !el.isTypeOnly) named.push(el.name.text);
      }
    }
  }
  return { default: def, named };
}

/** How to import a file's main component: `import X from` or `import { X } from`. */
export function importClause(path: string, content: string, preferred?: string): { clause: string; local: string } | undefined {
  const ex = exportedComponents(path, content);
  if (ex.default) return { clause: "Main", local: "Main" };
  const pick = (preferred && ex.named.find((n) => n === preferred)) ?? ex.named[0];
  return pick ? { clause: `{ ${pick} as Main }`, local: "Main" } : undefined;
}

const HOOK = /\buse(State|Effect|LayoutEffect|Reducer|Ref|Transition|SyncExternalStore|ReducedMotion|InView|Scroll|Animate|Animation|MotionValue|Spring|Transform|Velocity|GSAP|Frame|Three)\s*[(<]/;

/** Needs JavaScript in the browser: a client directive, or React state/effects. */
export function needsJs(content: string): boolean {
  return /^\s*["']use client["']/.test(content) || HOOK.test(content);
}

export const kebab = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

export const titleCase = (kebabName: string) =>
  kebabName
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
