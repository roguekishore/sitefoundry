// The page inside every preview iframe: one demo (or one site page) in one theme and mode.
//   preview.html?item=<name>&theme=<name|none>&mode=light|dark&id=<frame id>
//   preview.html?site=<site>&…        preview.html?specimen=<theme>&…
import { StrictMode, useEffect, useState, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { loadDemo, loadSitePage, loadThemeCss } from "./catalog";
import { ThemeSpecimen } from "./specimen";
import "./preview.css";

const params = new URLSearchParams(location.search);
const frameId = params.get("id") ?? "";

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
        ? loadSitePage(site)
        : Promise.resolve(specimen ? ThemeSpecimen : undefined);
    applyTheme(params.get("theme") ?? specimen, params.get("mode"))
      .then(() => load)
      .then((c) => (c ? setComponent(() => c) : setError("Nothing to show: no demo for this item.")))
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
