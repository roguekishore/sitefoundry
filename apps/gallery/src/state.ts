// The gallery's settings (remembered per browser) and its routes (everything is in the URL hash,
// so any view can be bookmarked):
//   #/                          overview          #/sites                     every site
//   #/browse?type=&source=&site=&category=&js=&q=&sort=
//   #/item/<name>               one item          #/site/<site>[/<page>][?block=<name>]
//   #/full/<site>/<page>?device=phone|tablet|desktop   the site alone, full screen
//   #/runs  #/runs/new  #/runs/<id>                     runs (they need the foundry server)
import { useEffect, useState, useSyncExternalStore } from "react";

export type Device = "phone" | "tablet" | "desktop";
export const DEVICES: Record<Device, { w: number; h: number; label: string }> = {
  phone: { w: 390, h: 844, label: "Phone" },
  tablet: { w: 768, h: 1024, label: "Tablet" },
  desktop: { w: 1280, h: 800, label: "Desktop" },
};

export interface Settings {
  /** the gallery's own light/dark */
  chrome: "system" | "light" | "dark";
  /** what previews are shown on */
  device: Device;
  /** previews' theme: "own" (each item its own site's), "none" (base defaults) or a theme name */
  theme: string;
  /** previews' light/dark */
  mode: "light" | "dark";
  view: "grid" | "list";
  /** site viewer: hovering outlines sections and a click selects one (off: the site is fully clickable) */
  inspect: boolean;
}

const KEY = "foundry:gallery";
const DEFAULTS: Settings = { chrome: "system", device: "desktop", theme: "own", mode: "light", view: "grid", inspect: true };

let settings: Settings = (() => {
  try {
    const saved = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") };
    return saved.device in DEVICES ? saved : { ...saved, device: DEFAULTS.device };
  } catch {
    return DEFAULTS;
  }
})();
const listeners = new Set<() => void>();

export function setSettings(patch: Partial<Settings>) {
  settings = { ...settings, ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(settings));
  } catch {
    // private mode: settings just aren't remembered
  }
  listeners.forEach((l) => l());
}

/** The settings, shared by every part of the gallery; changing them re-renders whoever uses them. */
export function useSettings(): Settings {
  return useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => settings,
  );
}

const darkQuery = matchMedia("(prefers-color-scheme: dark)");
/** Whether the gallery itself is dark right now (its setting, or the system's when "system"). */
export function useDarkChrome(): boolean {
  const { chrome } = useSettings();
  const system = useSyncExternalStore(
    (l) => (darkQuery.addEventListener("change", l), () => darkQuery.removeEventListener("change", l)),
    () => darkQuery.matches,
  );
  useEffect(() => {
    if (chrome === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", chrome);
  }, [chrome]);
  return chrome === "dark" || (chrome === "system" && system);
}

// ---------- routes ----------

export interface Route {
  parts: string[];
  q: URLSearchParams;
}

function readRoute(): Route {
  const [path, qs] = location.hash.replace(/^#\/?/, "").split("?");
  return { parts: path.split("/").filter(Boolean).map(decodeURIComponent), q: new URLSearchParams(qs ?? "") };
}

const ROUTE_EVENT = "foundry:route";

/** Go to a hash. `replace` swaps the current history entry (filters, selections) instead of adding one. */
export function navigate(hash: string, replace = false) {
  if (replace) {
    history.replaceState(null, "", hash);
    dispatchEvent(new Event(ROUTE_EVENT));
  } else location.hash = hash;
}

export function useRoute(): Route {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const update = () => setRoute(readRoute());
    addEventListener("hashchange", update);
    addEventListener(ROUTE_EVENT, update);
    return () => {
      removeEventListener("hashchange", update);
      removeEventListener(ROUTE_EVENT, update);
    };
  }, []);
  return route;
}

/** The size of an element, kept up to date. */
export function useSize(el: HTMLElement | null): { width: number; height: number } {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(el);
    return () => observer.disconnect();
  }, [el]);
  return size;
}

/** The window's width, kept up to date. */
export function useWindowWidth(): number {
  return useSyncExternalStore(
    (l) => (addEventListener("resize", l), () => removeEventListener("resize", l)),
    () => innerWidth,
  );
}

// ---------- overlays: the command palette and quick look ----------

export type Overlay = { kind: "search" } | { kind: "quick"; name: string } | null;
let overlay: Overlay = null;
const overlayListeners = new Set<() => void>();

export function openOverlay(next: Overlay) {
  overlay = next;
  overlayListeners.forEach((l) => l());
}
export const closeOverlay = () => openOverlay(null);
export function useOverlay(): Overlay {
  return useSyncExternalStore(
    (l) => (overlayListeners.add(l), () => overlayListeners.delete(l)),
    () => overlay,
  );
}
