// Reads an upstream docs demo (React Bits' src/demo/*Demo.jsx) and recovers what it renders:
// the component's JSX with the values its props have by default. Those demos are full docs
// pages (Chakra UI, preset pickers, code tabs), so instead of copying them we evaluate, without
// running anything, the constants and default props the preview uses. Anything that can't be
// worked out statically (callbacks, refs, local helper components, imported images) is left out.
import ts from "typescript";

/** An expression we can write back out: its source, and its value when it's plain data. */
interface Ev {
  code: string;
  value?: unknown;
  known: boolean;
}

const lit = (value: unknown): Ev | null => {
  if (typeof value === "function" || typeof value === "symbol" || typeof value === "bigint") return null;
  if (value === undefined) return { code: "undefined", value, known: true };
  return { code: JSON.stringify(value), value, known: true };
};

export interface ExtractOptions {
  /** the local name the demo gives the component (e.g. "SplitText") */
  component: string;
  /** other names imported from the component's module (Step, ScrollStackItem…) */
  siblings: string[];
  /** npm packages the demo may import from (they must be in the root package.json) */
  allowedPackages: Set<string>;
  /** the demo's own modules it imports from (specifier → source), e.g. "./presets/Aurora" */
  modules?: Record<string, string>;
  /** the component's prop names, when known: other attributes are dropped */
  propNames?: Set<string>;
}

export interface Extracted {
  /** JSX for the component, e.g. `<SplitText text={"Hi"} />` */
  jsx: string;
  /** npm imports the JSX needs: module → names */
  imports: Map<string, Set<string>>;
  /** names from the component's own module the JSX uses (besides the component) */
  siblingsUsed: Set<string>;
  /** the preview box's height (px) and whether it uses a min-height */
  height?: { px: number; min: boolean };
  /** props the demo set but we couldn't reproduce */
  dropped: string[];
}

export function extractDemo(source: string, opts: ExtractOptions): Extracted | undefined {
  const sf = ts.createSourceFile("demo.jsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const imports = new Map<string, Set<string>>();
  const siblingsUsed = new Set<string>();
  const dropped: string[] = [];

  // npm bindings the demo imports (only packages we have)
  const npmBinding = new Map<string, { module: string; name: string }>();
  for (const st of sf.statements) {
    if (!ts.isImportDeclaration(st) || !ts.isStringLiteral(st.moduleSpecifier)) continue;
    const mod = st.moduleSpecifier.text;
    if (mod.startsWith(".")) continue;
    const pkg = mod.startsWith("@") ? mod.split("/").slice(0, 2).join("/") : mod.split("/")[0];
    if (!opts.allowedPackages.has(pkg)) continue;
    const nb = st.importClause?.namedBindings;
    if (nb && ts.isNamedImports(nb)) for (const el of nb.elements) npmBinding.set(el.name.text, { module: mod, name: (el.propertyName ?? el.name).text });
  }
  const useImport = (local: string) => {
    const b = npmBinding.get(local)!;
    if (!imports.has(b.module)) imports.set(b.module, new Set());
    imports.get(b.module)!.add(b.name === local ? local : `${b.name} as ${local}`);
  };

  // ---- scopes: top-level consts, plus the locals of the functions around the element
  type Lazy = () => Ev | null;
  class Scope {
    vars = new Map<string, Lazy>();
    constructor(public parent?: Scope) {}
    get(name: string): Ev | null | undefined {
      const v = this.vars.get(name);
      if (v) return v();
      return this.parent?.get(name);
    }
    define(name: string, fn: Lazy) {
      let cache: Ev | null | undefined;
      let busy = false;
      this.vars.set(name, () => {
        if (cache !== undefined) return cache;
        if (busy) return null;
        busy = true;
        cache = fn();
        busy = false;
        return cache;
      });
    }
  }

  const declare = (scope: Scope, decl: ts.VariableDeclaration) => {
    const init = decl.initializer;
    if (!init) return;
    const valueOf: Lazy = () => evalInit(init, scope);
    if (ts.isIdentifier(decl.name)) scope.define(decl.name.text, valueOf);
    else if (ts.isObjectBindingPattern(decl.name)) {
      const used: string[] = [];
      for (const el of decl.name.elements) {
        if (!ts.isIdentifier(el.name)) continue;
        const local = el.name.text;
        if (el.dotDotDotToken) {
          scope.define(local, () => {
            const whole = valueOf();
            if (!whole?.known || typeof whole.value !== "object" || !whole.value) return null;
            const rest = { ...(whole.value as Record<string, unknown>) };
            for (const k of used) delete rest[k];
            return lit(rest);
          });
          continue;
        }
        const key = el.propertyName && ts.isIdentifier(el.propertyName) ? el.propertyName.text : local;
        used.push(key);
        scope.define(local, () => {
          const whole = valueOf();
          if (whole?.known && whole.value && typeof whole.value === "object" && key in (whole.value as object)) {
            return lit((whole.value as Record<string, unknown>)[key]);
          }
          return el.initializer ? evaluate(el.initializer, scope) : null;
        });
      }
    } else if (ts.isArrayBindingPattern(decl.name)) {
      decl.name.elements.forEach((el, i) => {
        if (ts.isOmittedExpression(el) || !ts.isIdentifier(el.name)) return;
        scope.define(el.name.text, () => {
          const whole = valueOf();
          return whole?.known && Array.isArray(whole.value) && i < whole.value.length ? lit(whole.value[i]) : null;
        });
      });
    }
  };

  /** Variable initialisers, with the docs' hooks understood. */
  const evalInit = (init: ts.Expression, scope: Scope): Ev | null => {
    if (ts.isCallExpression(init) && ts.isIdentifier(init.expression)) {
      const fn = init.expression.text;
      const arg = (i: number) => (init.arguments[i] ? evaluate(init.arguments[i], scope) : null);
      if (fn === "useComponentProps") {
        const d = arg(0);
        return d?.known ? lit({ props: d.value, defaultProps: d.value, hasChanges: false }) : null;
      }
      if (fn === "useState") {
        const a = init.arguments[0];
        const v = a && (ts.isArrowFunction(a) ? (ts.isBlock(a.body) ? null : evaluate(a.body, scope)) : evaluate(a, scope));
        return v?.known ? lit([v.value]) : null;
      }
      if (fn === "useMemo" || fn === "useCallback") {
        const a = init.arguments[0];
        if (fn === "useMemo" && a && ts.isArrowFunction(a)) return bodyValue(a.body, scope);
        return null;
      }
      if (fn === "useColorModeValue") return arg(0);
    }
    return evaluate(init, scope);
  };

  const bodyValue = (body: ts.ConciseBody, scope: Scope): Ev | null => {
    if (!ts.isBlock(body)) return evaluate(body, scope);
    const inner = new Scope(scope);
    for (const st of body.statements) {
      if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) declare(inner, d);
      if (ts.isReturnStatement(st)) return st.expression ? evaluate(st.expression, inner) : null;
    }
    return null;
  };

  const top = new Scope();
  for (const st of sf.statements) if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) declare(top, d);
  // names imported from the demo's own modules (./presets/Aurora): evaluate their top-level consts
  for (const st of sf.statements) {
    if (!ts.isImportDeclaration(st) || !ts.isStringLiteral(st.moduleSpecifier)) continue;
    const src = opts.modules?.[st.moduleSpecifier.text];
    const nb = st.importClause?.namedBindings;
    if (!src || !nb || !ts.isNamedImports(nb)) continue;
    const mod = ts.createSourceFile("module.js", src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const modScope = new Scope();
    for (const ms of mod.statements) if (ts.isVariableStatement(ms)) for (const d of ms.declarationList.declarations) declare(modScope, d);
    for (const el of nb.elements) {
      const remote = (el.propertyName ?? el.name).text;
      top.define(el.name.text, () => modScope.get(remote) ?? null);
    }
  }

  // ---- the evaluator
  const evaluate = (node: ts.Expression, scope: Scope): Ev | null => {
    if (ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isNonNullExpression(node) || ts.isSatisfiesExpression(node)) {
      return evaluate(node.expression, scope);
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return lit(node.text);
    if (ts.isNumericLiteral(node)) return lit(Number(node.text));
    if (node.kind === ts.SyntaxKind.TrueKeyword) return lit(true);
    if (node.kind === ts.SyntaxKind.FalseKeyword) return lit(false);
    if (node.kind === ts.SyntaxKind.NullKeyword) return lit(null);
    if (ts.isIdentifier(node)) {
      if (node.text === "undefined") return lit(undefined);
      const v = scope.get(node.text);
      if (v !== undefined) return v;
      if (npmBinding.has(node.text)) {
        useImport(node.text);
        return { code: node.text, known: false };
      }
      return null;
    }
    if (ts.isPrefixUnaryExpression(node)) {
      const v = evaluate(node.operand, scope);
      if (!v?.known) return null;
      if (node.operator === ts.SyntaxKind.MinusToken) return lit(-(v.value as number));
      if (node.operator === ts.SyntaxKind.PlusToken) return lit(+(v.value as number));
      if (node.operator === ts.SyntaxKind.ExclamationToken) return lit(!v.value);
      return null;
    }
    if (ts.isTemplateExpression(node)) {
      let s = node.head.text;
      for (const span of node.templateSpans) {
        const v = evaluate(span.expression, scope);
        if (!v?.known) return null;
        s += String(v.value) + span.literal.text;
      }
      return lit(s);
    }
    if (ts.isArrayLiteralExpression(node)) {
      const parts: Ev[] = [];
      for (const el of node.elements) {
        if (ts.isSpreadElement(el)) {
          const v = evaluate(el.expression, scope);
          if (!v?.known || !Array.isArray(v.value)) return null;
          for (const x of v.value) parts.push(lit(x)!);
          continue;
        }
        const v = evaluate(el, scope);
        if (!v) return null;
        parts.push(v);
      }
      const known = parts.every((p) => p.known);
      return { code: `[${parts.map((p) => p.code).join(", ")}]`, value: known ? parts.map((p) => p.value) : undefined, known };
    }
    if (ts.isObjectLiteralExpression(node)) {
      const entries: [string, Ev][] = [];
      for (const p of node.properties) {
        if (ts.isSpreadAssignment(p)) {
          const v = evaluate(p.expression, scope);
          if (v?.known && v.value && typeof v.value === "object") for (const [k, x] of Object.entries(v.value)) entries.push([k, lit(x)!]);
          continue;
        }
        const key = p.name && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) || ts.isNumericLiteral(p.name)) ? p.name.text : undefined;
        if (!key) continue;
        const v = ts.isPropertyAssignment(p) ? evaluate(p.initializer, scope) : ts.isShorthandPropertyAssignment(p) ? evaluate(p.name, scope) : null;
        if (!v) continue; // a callback or something local: leave it out
        const at = entries.findIndex(([k]) => k === key);
        if (at >= 0) entries.splice(at, 1);
        entries.push([key, v]);
      }
      const known = entries.every(([, v]) => v.known);
      return {
        code: `{ ${entries.map(([k, v]) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${v.code}`).join(", ")} }`,
        value: known ? Object.fromEntries(entries.map(([k, v]) => [k, v.value])) : undefined,
        known,
      };
    }
    if (ts.isBinaryExpression(node)) {
      const op = node.operatorToken.kind;
      const l = evaluate(node.left, scope);
      if (op === ts.SyntaxKind.QuestionQuestionToken) return l?.known && l.value != null ? l : l?.known ? evaluate(node.right, scope) : null;
      if (op === ts.SyntaxKind.BarBarToken) return l?.known ? (l.value ? l : evaluate(node.right, scope)) : null;
      if (op === ts.SyntaxKind.AmpersandAmpersandToken) return l?.known ? (l.value ? evaluate(node.right, scope) : l) : null;
      const r = evaluate(node.right, scope);
      if (!l?.known || !r?.known) return null;
      const a = l.value as never;
      const b = r.value as never;
      switch (op) {
        case ts.SyntaxKind.PlusToken: return lit((a as number) + (b as number));
        case ts.SyntaxKind.MinusToken: return lit((a as number) - (b as number));
        case ts.SyntaxKind.AsteriskToken: return lit((a as number) * (b as number));
        case ts.SyntaxKind.SlashToken: return lit((a as number) / (b as number));
        case ts.SyntaxKind.EqualsEqualsEqualsToken: return lit(a === b);
        case ts.SyntaxKind.ExclamationEqualsEqualsToken: return lit(a !== b);
        case ts.SyntaxKind.GreaterThanToken: return lit(a > b);
        case ts.SyntaxKind.LessThanToken: return lit(a < b);
        default: return null;
      }
    }
    if (ts.isConditionalExpression(node)) {
      const c = evaluate(node.condition, scope);
      if (!c?.known) return null;
      return evaluate(c.value ? node.whenTrue : node.whenFalse, scope);
    }
    if (ts.isPropertyAccessExpression(node)) {
      const o = evaluate(node.expression, scope);
      if (!o) return null;
      if (o.known) {
        if (o.value && typeof o.value === "object" && node.name.text in (o.value as object)) return lit((o.value as Record<string, unknown>)[node.name.text]);
        if (Array.isArray(o.value) && node.name.text === "length") return lit(o.value.length);
        return o.value && typeof o.value === "object" ? lit(undefined) : null;
      }
      return { code: `${o.code}.${node.name.text}`, known: false };
    }
    if (ts.isElementAccessExpression(node)) {
      const o = evaluate(node.expression, scope);
      const k = evaluate(node.argumentExpression, scope);
      if (!o?.known || !k?.known || !o.value || typeof o.value !== "object") return null;
      return lit((o.value as Record<string, unknown>)[k.value as string]);
    }
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const method = node.expression.name.text;
      const target = evaluate(node.expression.expression, scope);
      const fn = node.arguments[0];
      if (target?.known && Array.isArray(target.value)) {
        if (method === "map" && fn && (ts.isArrowFunction(fn) || ts.isFunctionExpression(fn))) {
          const out: Ev[] = [];
          for (const [i, x] of target.value.entries()) {
            const inner = new Scope(scope);
            const [p0, p1] = fn.parameters;
            if (p0) declare(inner, ts.factory.createVariableDeclaration(p0.name, undefined, undefined, ts.factory.createIdentifier("__item")));
            inner.define("__item", () => lit(x));
            if (p1 && ts.isIdentifier(p1.name)) inner.define(p1.name.text, () => lit(i));
            const v = bodyValue(fn.body, inner);
            if (!v) return null;
            out.push(v);
          }
          const known = out.every((o) => o.known);
          return { code: `[${out.map((o) => o.code).join(", ")}]`, value: known ? out.map((o) => o.value) : undefined, known };
        }
        if (method === "slice") {
          const a = node.arguments.map((x) => evaluate(x, scope));
          if (a.some((x) => !x?.known)) return null;
          return lit(target.value.slice(...(a.map((x) => x!.value) as number[])));
        }
        if (method === "join") {
          const a = node.arguments[0] ? evaluate(node.arguments[0], scope) : lit(",");
          return a?.known ? lit(target.value.join(a.value as string)) : null;
        }
      }
      if (target?.known && typeof target.value === "string" && ["trim", "toUpperCase", "toLowerCase"].includes(method)) {
        return lit((target.value as unknown as Record<string, () => string>)[method]());
      }
      return null;
    }
    if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) {
      const code = jsx(node, scope, false);
      return code === null ? null : { code, known: false };
    }
    return null;
  };

  // ---- JSX back to source
  const tagAllowed = (tag: string): boolean => {
    if (/^[a-z]/.test(tag)) return true;
    if (tag === opts.component) return true;
    if (opts.siblings.includes(tag)) {
      siblingsUsed.add(tag);
      return true;
    }
    if (npmBinding.has(tag)) {
      useImport(tag);
      return true;
    }
    return false;
  };

  // null: a nested element has an attribute we can't rebuild, so the element itself is left out
  const attrs = (attributes: ts.JsxAttributes, scope: Scope, main: boolean): string[] | null => {
    const out: string[] = [];
    for (const a of attributes.properties) {
      if (ts.isJsxSpreadAttribute(a)) {
        const v = evaluate(a.expression, scope);
        if (!v?.known || !v.value || typeof v.value !== "object") {
          if (!main) return null;
          dropped.push(`{...${a.expression.getText(sf)}}`);
          continue;
        }
        for (const [k, x] of Object.entries(v.value as Record<string, unknown>)) {
          if (main && opts.propNames && !opts.propNames.has(k)) continue;
          const e = lit(x);
          if (e && x !== undefined) out.push(`${k}={${e.code}}`);
        }
        continue;
      }
      const name = a.name.getText(sf);
      if (name === "ref" || (main && (name === "key" || name === "className"))) continue;
      if (main && opts.propNames && !opts.propNames.has(name)) continue;
      if (!a.initializer) {
        out.push(name);
        continue;
      }
      if (ts.isStringLiteral(a.initializer)) {
        out.push(`${name}=${JSON.stringify(a.initializer.text)}`);
        continue;
      }
      const expr = ts.isJsxExpression(a.initializer) ? a.initializer.expression : (a.initializer as ts.Expression);
      const v = expr ? evaluate(expr, scope) : null;
      if (!v) {
        if (!main) return null;
        dropped.push(name);
        continue;
      }
      if (v.known && v.value === undefined) continue;
      out.push(`${name}={${v.code}}`);
    }
    // later attributes win, as in JSX
    const seen = new Map<string, string>();
    for (const o of out) seen.set(o.split("=")[0], o);
    return [...seen.values()];
  };

  const children = (kids: ts.NodeArray<ts.JsxChild>, scope: Scope): string => {
    const out: string[] = [];
    for (const k of kids) {
      if (ts.isJsxText(k)) {
        const t = jsxText(k.text);
        if (t) out.push(`{${JSON.stringify(t)}}`);
      } else if (ts.isJsxExpression(k)) {
        if (!k.expression) continue;
        const v = evaluate(k.expression, scope);
        if (!v || (v.known && (v.value === undefined || v.value === null || v.value === false))) continue;
        out.push(`{${v.code}}`);
      } else {
        const c = jsx(k, scope, false);
        if (c) out.push(c);
      }
    }
    return out.join("\n");
  };

  const jsx = (node: ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment, scope: Scope, main: boolean): string | null => {
    if (ts.isJsxFragment(node)) return `<>${children(node.children, scope)}</>`;
    const open = ts.isJsxElement(node) ? node.openingElement : node;
    const tag = open.tagName.getText(sf);
    if (!tagAllowed(tag)) return null;
    const a = attrs(open.attributes, scope, main);
    if (!a) return null;
    const head = `<${tag}${a.length ? " " + a.join(" ") : ""}`;
    if (ts.isJsxSelfClosingElement(node)) return `${head} />`;
    const inner = children(node.children, scope);
    return inner ? `${head}>\n${inner}\n</${tag}>` : `${head} />`;
  };

  // ---- find the component's element, preferring the one in the preview tab
  const found: ts.JsxOpeningLikeElement[] = [];
  const visit = (n: ts.Node) => {
    if ((ts.isJsxOpeningElement(n) || ts.isJsxSelfClosingElement(n)) && n.tagName.getText(sf) === opts.component) found.push(n);
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!found.length) return undefined;
  const inPreview = (n: ts.Node) => {
    for (let p: ts.Node | undefined = n.parent; p; p = p.parent) {
      if (ts.isJsxElement(p) && p.openingElement.tagName.getText(sf) === "PreviewTab") return true;
    }
    return false;
  };
  const opening = found.find(inPreview) ?? found[0];
  const element: ts.JsxElement | ts.JsxSelfClosingElement = ts.isJsxSelfClosingElement(opening) ? opening : (opening.parent as ts.JsxElement);

  // the locals of every function around it, outermost first
  /**
   * The scope at a node: the locals of every function around it, outermost first. When one of
   * those functions is a little component of the demo's own (`const Scene = ({ reveal }) => …`),
   * its props come from where the demo renders it (`<Scene reveal={settings} />`).
   */
  const scopeAt = (node: ts.Node, depth = 0): Scope => {
    const fns: ts.FunctionLikeDeclaration[] = [];
    for (let p: ts.Node | undefined = node.parent; p; p = p.parent) {
      if (ts.isFunctionDeclaration(p) || ts.isArrowFunction(p) || ts.isFunctionExpression(p)) fns.unshift(p);
    }
    let scope = top;
    for (const fn of fns) {
      scope = new Scope(scope);
      const param = fn.parameters[0];
      const name = ts.isFunctionDeclaration(fn) ? fn.name?.text : ts.isVariableDeclaration(fn.parent) && ts.isIdentifier(fn.parent.name) ? fn.parent.name.text : undefined;
      if (param && name && depth < 4) {
        const uses: ts.JsxOpeningLikeElement[] = [];
        const find = (n: ts.Node) => {
          if (n === fn) return;
          if ((ts.isJsxOpeningElement(n) || ts.isJsxSelfClosingElement(n)) && n.tagName.getText(sf) === name) uses.push(n);
          ts.forEachChild(n, find);
        };
        find(sf);
        const use = uses.find(inPreview) ?? uses[0];
        if (use) {
          const outer = scopeAt(use, depth + 1);
          const props: Record<string, unknown> = {};
          for (const a of use.attributes.properties) {
            if (ts.isJsxSpreadAttribute(a)) {
              const v = evaluate(a.expression, outer);
              if (v?.known && v.value && typeof v.value === "object") Object.assign(props, v.value);
            } else if (a.initializer) {
              const expr = ts.isStringLiteral(a.initializer) ? a.initializer : ts.isJsxExpression(a.initializer) ? a.initializer.expression : undefined;
              const v = expr ? evaluate(expr, outer) : null;
              if (v?.known) props[a.name.getText(sf)] = v.value;
            } else props[a.name.getText(sf)] = true;
          }
          const holder = `__props${depth}`;
          scope.define(holder, () => lit(props));
          declare(scope, ts.factory.createVariableDeclaration(param.name, undefined, undefined, ts.factory.createIdentifier(holder)));
        }
      }
      if (fn.body && ts.isBlock(fn.body)) {
        for (const st of fn.body.statements) if (ts.isVariableStatement(st)) for (const d of st.declarationList.declarations) declare(scope, d);
      }
    }
    return scope;
  };
  const scope = scopeAt(element);
  const code = jsx(element, scope, true);
  if (!code) return undefined;

  // the preview box: <Box h={500}> or <Box minH={400}> around it
  let height: Extracted["height"];
  for (let p: ts.Node | undefined = element.parent; p && !height; p = p.parent) {
    if (!ts.isJsxElement(p)) continue;
    for (const a of p.openingElement.attributes.properties) {
      if (!ts.isJsxAttribute(a) || !a.initializer || !ts.isJsxExpression(a.initializer) || !a.initializer.expression) continue;
      const n = a.name.getText(sf);
      if (!["h", "height", "minH", "minHeight"].includes(n)) continue;
      const v = evaluate(a.initializer.expression, scope);
      if (v?.known && typeof v.value === "number") height = { px: v.value, min: n.startsWith("min") };
    }
  }
  // names recorded for elements that were later left out aren't imported
  const used = (local: string) => new RegExp(`\\b${local}\\b`).test(code);
  for (const [mod, names] of imports) {
    for (const n of names) if (!used(n.split(" as ").pop()!)) names.delete(n);
    if (!names.size) imports.delete(mod);
  }
  for (const n of siblingsUsed) if (!used(n)) siblingsUsed.delete(n);
  return { jsx: code, imports, siblingsUsed, height, dropped };
}

/** JSX text as React sees it: lines trimmed where they break, blank lines dropped, joined by spaces. */
function jsxText(raw: string): string {
  const lines = raw.split(/\r?\n/);
  if (lines.length === 1) return raw;
  return lines
    .map((line, i) => {
      let l = line;
      if (i > 0) l = l.replace(/^\s+/, "");
      if (i < lines.length - 1) l = l.replace(/\s+$/, "");
      return l;
    })
    .filter(Boolean)
    .join(" ");
}

/** Prop names (and which are required) of the props interface a component file declares. */
export function propsInterface(path: string, content: string, component: string): Map<string, { required: boolean; type: string }> | undefined {
  const sf = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const decls = new Map<string, ts.InterfaceDeclaration | ts.TypeAliasDeclaration>();
  for (const st of sf.statements) if (ts.isInterfaceDeclaration(st) || ts.isTypeAliasDeclaration(st)) decls.set(st.name.text, st);
  const members = (name: string, seen = new Set<string>()): Map<string, { required: boolean; type: string }> | undefined => {
    const d = decls.get(name);
    if (!d || seen.has(name)) return undefined;
    seen.add(name);
    const out = new Map<string, { required: boolean; type: string }>();
    const add = (els: ts.NodeArray<ts.TypeElement>) => {
      for (const m of els) if (ts.isPropertySignature(m) && m.name) out.set(m.name.getText(sf), { required: !m.questionToken, type: m.type?.getText(sf) ?? "unknown" });
    };
    if (ts.isInterfaceDeclaration(d)) {
      add(d.members);
      for (const h of d.heritageClauses ?? []) for (const t of h.types) if (ts.isIdentifier(t.expression)) members(t.expression.text, seen)?.forEach((v, k) => out.set(k, v));
    } else {
      const walk = (t: ts.TypeNode) => {
        if (ts.isTypeLiteralNode(t)) add(t.members);
        else if (ts.isIntersectionTypeNode(t)) t.types.forEach(walk);
        else if (ts.isTypeReferenceNode(t) && ts.isIdentifier(t.typeName)) members(t.typeName.text, seen)?.forEach((v, k) => out.set(k, v));
      };
      walk(d.type);
    }
    return out;
  };
  const candidates = [`${component}Props`, ...[...decls.keys()].filter((n) => n.endsWith("Props"))];
  for (const c of candidates) {
    const m = members(c);
    if (m && m.size) return m;
  }
  return undefined;
}
