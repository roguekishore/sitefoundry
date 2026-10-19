// Runs inside a preview iframe. Three jobs for the gallery's site viewer:
//  1. Find the sections: which block drew which part of the page. vite.config.ts labels every
//     component an item exports with `__foundry = "<item name>"`; we walk React's tree of what
//     rendered and take the first labelled block on each branch.
//  2. Outline the hovered and the selected section, and in inspect mode let a click select one.
//  3. Links between the site's pages (#pricing, /pricing) ask the gallery to switch page, and
//     other links do nothing, so the frame never navigates away from the preview.
//
// Messages, gallery → frame: foundry:inspect { enabled, hover, selected }, foundry:scroll-to { name }
//           frame → gallery: foundry:sections { sections }, foundry:hover { name },
//                            foundry:select { name }, foundry:navigate { page }
import { byName } from "./catalog";

export interface Section {
  name: string;
  /** false for blocks that draw nothing (smooth scroll and the like) */
  visual: boolean;
}

const state = { enabled: false, hover: null as string | null, selected: null as string | null };
let frameId = "";
let sitePages: string[] | null = null;
let nodes = new Map<string, Element[]>();
let owner = new Map<Element, string>();

const post = (msg: object) => parent.postMessage({ ...msg, id: frameId }, "*");

// ---------- 1. sections ----------

interface Fiber {
  tag: number;
  type: unknown;
  elementType: unknown;
  stateNode: unknown;
  child: Fiber | null;
  sibling: Fiber | null;
}

const labelOf = (f: Fiber): string | undefined => {
  for (const t of [f.type, f.elementType]) {
    const label = t && (typeof t === "function" || typeof t === "object") ? (t as { __foundry?: string }).__foundry : undefined;
    if (label) return label;
  }
};

/** The outermost DOM elements a fiber rendered. */
function hostNodes(f: Fiber, out: Element[] = []): Element[] {
  for (let c = f.child; c; c = c.sibling) {
    if (c.tag === 4) continue; // a portal draws elsewhere
    if (c.stateNode instanceof Element) out.push(c.stateNode);
    else hostNodes(c, out);
  }
  return out;
}

function findSections(): Section[] {
  const root = document.getElementById("root");
  if (!root) return [];
  const key = Object.keys(root).find((k) => k.startsWith("__reactContainer$"));
  // the container holds the root fiber it was created with; its stateNode knows the current one
  const created = key ? (root as unknown as Record<string, Fiber>)[key] : null;
  const current = (created?.stateNode as { current?: Fiber } | null)?.current ?? created;
  const found: Section[] = [];
  nodes = new Map();
  owner = new Map();
  const visit = (f: Fiber) => {
    for (let c = f.child; c; c = c.sibling) {
      const name = labelOf(c);
      const type = name ? byName.get(name)?.meta.type : undefined;
      if (name && type === "block") {
        const els = hostNodes(c);
        if (!nodes.has(name)) found.push({ name, visual: els.length > 0 });
        nodes.set(name, [...(nodes.get(name) ?? []), ...els]);
        for (const el of els) owner.set(el, name);
        continue;
      }
      if (name && hostNodes(c).length === 0) {
        // a component that draws nothing at the top of the page: listed as behaviour
        if (!nodes.has(name)) found.push({ name, visual: false });
        nodes.set(name, []);
        continue;
      }
      visit(c);
    }
  };
  if (current) visit(current);
  return found;
}

let lastReport = "";
function report() {
  const sections = findSections();
  const text = JSON.stringify(sections);
  if (text !== lastReport) {
    lastReport = text;
    post({ type: "foundry:sections", sections });
  }
  draw();
}

// ---------- 2. outlines ----------

let layer: HTMLDivElement | null = null;
const boxes: Record<"hover" | "selected", HTMLDivElement | null> = { hover: null, selected: null };

function box(kind: "hover" | "selected"): HTMLDivElement {
  if (!layer) {
    layer = document.createElement("div");
    layer.setAttribute("data-foundry-inspector", "");
    layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
    document.body.appendChild(layer);
  }
  let el = boxes[kind];
  if (!el) {
    el = document.createElement("div");
    const tint = kind === "selected" ? "background:rgb(37 99 235 / .06);" : "";
    el.style.cssText = `position:absolute;box-shadow:inset 0 0 0 2px #2563eb;${tint}display:none`;
    const tag = document.createElement("span");
    tag.style.cssText = "position:absolute;left:0;top:0;padding:3px 8px;background:#2563eb;color:#fff;font:500 12px/1.4 ui-monospace,Menlo,Consolas,monospace;border-bottom-right-radius:6px";
    el.appendChild(tag);
    layer!.appendChild(el);
    boxes[kind] = el;
  }
  return el;
}

function rectOf(name: string): DOMRect | null {
  const els = nodes.get(name);
  if (!els?.length) return null;
  let top = Infinity, left = Infinity, right = -Infinity, bottom = -Infinity;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (!r.width && !r.height) continue;
    top = Math.min(top, r.top);
    left = Math.min(left, r.left);
    right = Math.max(right, r.right);
    bottom = Math.max(bottom, r.bottom);
  }
  return top === Infinity ? null : new DOMRect(left, top, right - left, bottom - top);
}

let frame = 0;
function draw() {
  cancelAnimationFrame(frame);
  let showing = false;
  for (const kind of ["selected", "hover"] as const) {
    const name = kind === "hover" ? (state.hover !== state.selected ? state.hover : null) : state.selected;
    const r = name ? rectOf(name) : null;
    if (!r && !boxes[kind]) continue;
    const el = box(kind);
    if (!r || !name) {
      el.style.display = "none";
      continue;
    }
    showing = true;
    // keep the outline inside the window, so a section taller than the screen still shows its edges
    const top = Math.max(0, r.top), bottom = Math.min(innerHeight, r.bottom);
    Object.assign(el.style, { display: bottom > top ? "block" : "none", left: `${Math.max(0, r.left)}px`, top: `${top}px`, width: `${Math.min(innerWidth, r.right) - Math.max(0, r.left)}px`, height: `${bottom - top}px` });
    (el.firstChild as HTMLElement).textContent = name;
  }
  // sections move as the page scrolls and animates: follow them while an outline is showing
  if (showing) frame = requestAnimationFrame(draw);
}

function sectionAt(target: EventTarget | null): string | null {
  for (let el = target instanceof Element ? target : null; el; el = el.parentElement) {
    const name = owner.get(el);
    if (name) return name;
  }
  return null;
}

// ---------- 3. links ----------

/** The site page a link points at, "landing" for home, null for anything else. */
function pageOf(a: HTMLAnchorElement): string | null {
  const href = a.getAttribute("href") ?? "";
  if (!sitePages) return null;
  const name = href.replace(/^[#/]+/, "").split(/[?#/]/)[0];
  if (sitePages.includes(name)) return name;
  // the brand link ("#" or "/") as the first link in a header goes home
  const header = a.closest("header");
  if ((href === "/" || href === "#") && header && header.querySelector("a") === a) return "landing";
  return null;
}

function onClick(e: MouseEvent) {
  const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (a) {
    const page = pageOf(a);
    const href = a.getAttribute("href") ?? "";
    if (page) {
      e.preventDefault();
      post({ type: "foundry:navigate", page });
      return;
    }
    // a jump to a part of this page is fine; anything else would load another page into the frame
    const inPage = href.startsWith("#") && href.length > 1 && document.getElementById(decodeURIComponent(href.slice(1)));
    if (!inPage) e.preventDefault();
  }
  if (state.enabled) {
    const name = sectionAt(e.target);
    if (name) {
      e.preventDefault();
      e.stopPropagation();
      post({ type: "foundry:select", name });
    }
  }
}

function onMove(e: MouseEvent) {
  if (!state.enabled) return;
  const name = sectionAt(e.target);
  if (name !== state.hover) {
    state.hover = name;
    post({ type: "foundry:hover", name });
    draw();
  }
}

// ---------- wiring ----------

/** Start listening. `pages`: the site's pages when showing a site page, else null. */
export function startInspector(id: string, pages: string[] | null) {
  frameId = id;
  sitePages = pages;
  addEventListener("click", onClick, true);
  addEventListener("mousemove", onMove, true);
  addEventListener("mouseleave", () => {
    if (state.enabled && state.hover) {
      state.hover = null;
      post({ type: "foundry:hover", name: null });
      draw();
    }
  });
  addEventListener("message", (e: MessageEvent) => {
    const d = e.data;
    if (d?.type === "foundry:inspect") {
      Object.assign(state, { enabled: !!d.enabled, hover: d.hover ?? null, selected: d.selected ?? null });
      draw();
    }
    if (d?.type === "foundry:scroll-to") {
      const r = rectOf(d.name);
      if (r) scrollTo({ top: Math.max(0, r.top + scrollY - 24), behavior: "instant" });
      draw();
    }
  });
  addEventListener("resize", draw);
}

/** Look for sections now and whenever the page changes size (late content, lazy parts). */
export function watchSections() {
  if (!sitePages) return;
  let timer = 0;
  const later = () => {
    clearTimeout(timer);
    timer = window.setTimeout(report, 150);
  };
  new ResizeObserver(later).observe(document.getElementById("root")!);
  report();
}
