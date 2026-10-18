// React Bits → vault/reactbits/. One item per component (TypeScript + Tailwind variant), named
// reactbits-<kebab name>, with upstream's file as the entry and a demo rebuilt from React Bits'
// own demo page (the props its preview renders with).
import { readFile, writeFile } from "node:fs/promises";
import { RAW_DIR } from "../lib/fetch.ts";
import { join } from "node:path";
import { ROOT } from "../../lib/scan.ts";
import { exportedComponents, kebab, needsJs, specifiers } from "../lib/code.ts";
import { extractDemo, propsInterface } from "../lib/demo-extract.ts";
import { replaceNext } from "../lib/next.ts";
import type { MirrorItem, Skip } from "../lib/write.ts";
import { fetchReactBits } from "./reactbits-fetch.ts";
import { DEMO_ASSETS, DEMO_OVERRIDES, DEMO_PATCHES, PATCHES } from "./reactbits-overrides.ts";

const SOURCE = "reactbits";
const LICENSE = "MIT + Commons Clause";

const CATEGORY: Record<string, string> = {
  TextAnimations: "text-effect",
  Backgrounds: "background",
  Animations: "animation",
  Micro: "micro-interaction",
};
/** React Bits' "Components" folder holds many kinds of thing; sort them by name. */
function componentCategory(name: string): string {
  if (/Gallery|Carousel|Masonry|Stack|Posters|Slider|Wall|Spiral|Dome|CardSwap|BounceCards/.test(name)) return "gallery";
  if (/Nav|Menu|Dock|Sidebar/.test(name)) return "navigation";
  if (/Card|Bento|Lanyard|Folder/.test(name)) return "card";
  if (/Button|Icons/.test(name)) return "button";
  if (/Input|Stepper|Counter|Wheel/.test(name)) return "form";
  return "ui";
}

const HEAVY: [RegExp, string][] = [
  [/from ["']three["']|@react-three/, "heavy: three.js (WebGL)"],
  [/from ["']ogl["']/, "WebGL (ogl)"],
  [/from ["']vgpu["']/, "WebGPU (vgpu); needs a browser with WebGPU"],
  [/from ["']gsap/, "animates with GSAP"],
  [/from ["']motion\/react["']/, "animates with motion"],
  [/from ["']matter-js["']/, "physics: matter-js"],
];

export async function convertReactBits(log: (m: string) => void) {
  const snap = await fetchReactBits(log);
  const skipped: Skip[] = [];
  const packages = new Map<string, Set<string>>();
  const items: MirrorItem[] = [];
  const extraction: { name: string; found: boolean; dropped: string[] }[] = [];
  const rootPkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const allowed = new Set(Object.keys({ ...rootPkg.dependencies }));
  if (snap.licence && !/MIT \+ Commons Clause/.test(snap.licence)) log("reactbits: LICENSE.md no longer says MIT + Commons Clause; check it before using these");

  for (const { item, category, demo, modules } of snap.components) {
    const base = item.name.replace(/-TS-TW$/, "");
    const name = `reactbits-${kebab(item.title || base)}`;
    if (item.files.length !== 1) {
      skipped.push({ source: SOURCE, name: item.name, reason: `has ${item.files.length} files; expected one` });
      continue;
    }
    const file = item.files[0];
    const fileName = file.path.split("/").pop()!;
    let content = keepContextOnRemount(PATCHES[base] ? PATCHES[base](file.content) : file.content);
    const next = replaceNext(content);
    if ("unsupported" in next) {
      skipped.push({ source: SOURCE, name: item.name, reason: `uses ${next.unsupported} (Next.js only)` });
      continue;
    }
    content = next.content;
    const bad = specifiers(content).find((s) => s.startsWith("@/") || (s.startsWith(".") && !s.startsWith("./")));
    if (bad) {
      skipped.push({ source: SOURCE, name: item.name, reason: `imports ${bad}, which isn't part of the item` });
      continue;
    }
    for (const dep of item.dependencies ?? []) {
      const at = dep.lastIndexOf("@");
      const [pkg, range] = at > 0 ? [dep.slice(0, at), dep.slice(at + 1)] : [dep, ""];
      if (!packages.has(pkg)) packages.set(pkg, new Set());
      if (range) packages.get(pkg)!.add(range);
    }
    for (const spec of specifiers(content)) {
      if (spec.startsWith(".")) continue;
      const pkg = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0];
      if (!packages.has(pkg)) packages.set(pkg, new Set());
    }

    const ex = exportedComponents(fileName, content);
    const main = ex.default ?? ex.named.find((n) => n === base) ?? ex.named[0];
    if (!main) {
      skipped.push({ source: SOURCE, name: item.name, reason: "exports no component" });
      continue;
    }
    const importLine = ex.default
      ? `import ${base} from "./${fileName.replace(/\.tsx$/, "")}"`
      : `import { ${main === base ? base : `${main} as ${base}`} } from "./${fileName.replace(/\.tsx$/, "")}"`;
    const siblings = ex.named.filter((n) => n !== main);
    const props = propsInterface(fileName, content, base);

    // the demo: hand-written override, else rebuilt from upstream's demo page, else the bare component
    const notes: string[] = [];
    let demoSource: string;
    let from = "React Bits' own demo";
    if (DEMO_OVERRIDES[base]) {
      demoSource = DEMO_OVERRIDES[base](importLine, base);
      from = "a hand-written demo (React Bits' own couldn't be rebuilt)";
    } else {
      const extracted = demo ? extractDemo(demo, { component: base, siblings, allowedPackages: allowed, modules, propNames: props ? new Set(props.keys()) : undefined }) : undefined;
      if (!extracted) from = "a minimal demo (React Bits' own couldn't be read)";
      extraction.push({ name, found: !!extracted, dropped: extracted?.dropped ?? [] });
      demoSource = buildDemo({
        base,
        importLine,
        siblingsImport: extracted?.siblingsUsed.size
          ? `import { ${[...extracted.siblingsUsed].join(", ")} } from "./${fileName.replace(/\.tsx$/, "")}"`
          : undefined,
        imports: extracted?.imports ?? new Map(),
        jsx: fillRequired(extracted?.jsx ?? `<${base} />`, base, props),
        category,
        height: extracted?.height,
        from: demo ? `src/demo/${category}/${base}Demo.jsx` : undefined,
      });
    }

    if (DEMO_PATCHES[base]) demoSource = DEMO_PATCHES[base](demoSource);
    demoSource = mapDemoAssets(demoSource);

    for (const [re, note] of HEAVY) if (re.test(content)) notes.push(note);
    if (category === "Backgrounds") notes.push("fills its parent: give the parent a size (and position: relative)");
    if (/Cursor|ClickSpark|Crosshair|Trail/.test(base)) notes.push("follows the pointer; best placed once per page");
    notes.push(`demo: ${from}`);
    notes.push("licence: MIT + Commons Clause — use it in sites and products; don't resell or redistribute the components themselves");

    const tags = new Set<string>([...(category ? [kebab(category)] : []), ...kebab(base).split("-"), "animated"]);
    for (const [re, note] of HEAVY) if (re.test(content)) tags.add(note.split(/[:( ]/)[0].replace("heavy", "three"));
    items.push({
      name,
      source: SOURCE,
      meta: {
        type: "component",
        title: item.title || base,
        description: item.description ?? `React Bits ${base}.`,
        category: category === "Components" ? componentCategory(base) : CATEGORY[category ?? ""] ?? "animation",
        license: LICENSE,
        tags: [...tags].filter(Boolean),
        notes,
        entry: fileName,
        hydrate: needsJs(content) || /from ["'](gsap|ogl|three|motion\/react|matter-js|vgpu)/.test(content) ? (/Cursor|ClickSpark|Crosshair/.test(base) ? "load" : "visible") : undefined,
      },
      files: { [fileName]: content },
      demoFiles: { [`${name}.demo.tsx`]: demoSource },
    });
  }
  // what the demo rebuild left out, for whoever improves DEMO_OVERRIDES
  await writeFile(join(RAW_DIR, "reactbits-demos.json"), JSON.stringify(extraction, null, 2) + "\n");
  return { items, skipped, packages };
}

/**
 * Many WebGL components draw on a <canvas> React renders, and release the GPU context in their
 * cleanup. React's StrictMode (development) mounts, cleans up and mounts again on the same canvas,
 * which then has a dead context: the canvas shows Chrome's broken icon. Release it only once the
 * canvas has really left the page; a real unmount still frees it.
 */
function keepContextOnRemount(content: string): string {
  return content.replaceAll(
    "gl.getExtension('WEBGL_lose_context')?.loseContext();",
    "{ const lose = gl.getExtension('WEBGL_lose_context'); const el = gl.canvas as HTMLCanvasElement; setTimeout(() => { if (!el.isConnected) lose?.loseContext(); }); }",
  );
}

/** Upstream demos load media from reactbits.dev's /assets/; swap in public stand-ins (or drop optional ones). */
function mapDemoAssets(demo: string): string {
  return demo.replace(/(\s[\w-]+=\{)?"(\/assets\/[^"]+)"(\})?/g, (match, attr: string | undefined, path: string, close: string | undefined) => {
    const to = DEMO_ASSETS[path];
    if (to === undefined) return match;
    if (to === null) return attr && close ? "" : match;
    return `${attr ?? ""}"${to}"${close ?? ""}`;
  });
}

/** Give required props the demo didn't set a plain value, so the component has something to show. */
function fillRequired(jsx: string, base: string, props: ReturnType<typeof propsInterface>): string {
  if (!props) return jsx;
  const head = jsx.match(new RegExp(`^<${base}\\b[^]*?(?=/>|>\\n)`))?.[0] ?? `<${base}`;
  const missing: string[] = [];
  for (const [prop, { required, type }] of props) {
    if (!required || prop === "children" || new RegExp(`\\s${prop}=`).test(head) || new RegExp(`\\s${prop}(\\s|$)`).test(head)) continue;
    const t = type.replace(/\s/g, "");
    const v = t === "string" ? `"React Bits"` : t === "number" ? "1" : t === "boolean" ? "false" : t === "string[]" ? `["React", "Bits", "Foundry"]` : undefined;
    if (v) missing.push(`${prop}={${v}}`);
  }
  let out = missing.length ? jsx.replace(new RegExp(`^<${base}\\b`), `<${base} ${missing.join(" ")}`) : jsx;
  // a wrapper with nothing to wrap shows nothing: give it some content (unless it was given a list to show)
  if (props.has("children") && /\/>$/.test(out) && !out.includes("\n") && !/\s(items|logos|cards|images|slides)=\{\[/.test(out)) {
    out = out.replace(/\s*\/>$/, `>\n  <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>\n</${base}>`);
  }
  return out;
}

function buildDemo(o: {
  base: string;
  importLine: string;
  siblingsImport?: string;
  imports: Map<string, Set<string>>;
  jsx: string;
  category?: string;
  height?: { px: number; min: boolean };
  from?: string;
}): string {
  const npm = [...o.imports].map(([mod, names]) => `import { ${[...names].join(", ")} } from "${mod}"`);
  const px = Math.min(Math.max(o.height?.px ?? (o.category === "Backgrounds" ? 500 : 400), 240), 720);
  const size = o.category === "Backgrounds" || !o.height?.min ? `h-[${px}px]` : `min-h-[${px}px]`;
  // React Bits previews its backgrounds on black, and many draw light-on-transparent: give them a dark backdrop
  const backdrop = o.category === "Backgrounds" && !/lightMode=\{true\}/.test(o.jsx) ? " dark bg-background" : "";
  const indented = o.jsx.split("\n").map((l) => "      " + l).join("\n");
  return `${o.from ? `// Rebuilt from React Bits' ${o.from}: the component with the props its preview uses.\n` : ""}${[o.importLine, o.siblingsImport, ...npm].filter(Boolean).join("\n")}

export default function Demo() {
  return (
    <div className="relative flex ${size} w-full items-center justify-center overflow-hidden${backdrop}">
${indented}
    </div>
  )
}
`;
}
