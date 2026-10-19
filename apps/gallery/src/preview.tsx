// The page inside every preview iframe: one demo (or one site page) in one theme and mode.
//   preview.html?item=<name>&theme=<name|none>&mode=light|dark&id=<frame id>
//   preview.html?site=<site>[&page=<name>]&…        preview.html?specimen=<theme>&…
import { StrictMode, useEffect, useState, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { loadDemo, loadSitePage, loadThemeCss, sitePageNames } from "./catalog";
import { startInspector, watchSections } from "./inspect";
import { ThemeSpecimen } from "./specimen";
import "./preview.css";

const params = new URLSearchParams(location.search);
const frameId = params.get("id") ?? "";
const siteParam = params.get("site");
// before anything renders, so no click can navigate the frame away
startInspector(frameId, siteParam ? ["landing", ...sitePageNames(siteParam)] : null);

async function applyTheme(theme: string | null, mode: string | null) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  let style = document.getElementById("foundry-theme") as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = "foundry-theme";
    document.head.appendChild(style);
  }
  style.textContent = theme && theme !== "none" ? ((await loadThemeCss(theme)) ?? "") : "";
}

function Preview() {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const item = params.get("item");
    const site = params.get("site");
    const specimen = params.get("specimen");
    const load = item
      ? loadDemo(item)
      : site
        ? loadSitePage(site, params.get("page"))
        : Promise.resolve(specimen ? ThemeSpecimen : undefined);
    applyTheme(params.get("theme") ?? specimen, params.get("mode"))
      .then(() => load)
      .then((c) => (c ? setComponent(() => c) : setError(site ? "Nothing to show: no such page." : "Nothing to show: no demo for this item.")))
      .catch((e: Error) => setError(e.message));
  }, []);

  // The gallery can switch theme and mode without reloading the frame.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === "foundry:look") applyTheme(e.data.theme, e.data.mode);
    };
    addEventListener("message", onMessage);
    return () => removeEventListener("message", onMessage);
  }, []);

  // Tell automation (tools/build-thumbs.ts) the preview has rendered, or failed to.
  useEffect(() => {
    if (Component || error) document.documentElement.dataset.foundryReady = error ? "error" : "ready";
    if (Component) watchSections();
  }, [Component, error]);

  // Tell the gallery how tall the content is, so the frame can fit it.
  useEffect(() => {
    // Measure the content, not the document: the document is at least as tall as the iframe.
    const root = document.getElementById("root")!;
    const report = () =>
      parent.postMessage({ type: "foundry:height", id: frameId, height: Math.ceil(root.getBoundingClientRect().height) }, "*");
    const observer = new ResizeObserver(report);
    observer.observe(root);
    report();
    return () => observer.disconnect();
  }, [Component]);

  if (error) return <p className="p-6 text-sm text-muted-foreground">{error}</p>;
  return Component ? <Component /> : null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
