// The gallery window: a sidebar (what there is), a top bar (where you are, search, light/dark)
// and the current view. Sites open the site viewer; items (blocks, components, themes) open an
// item page. Layout follows docs/mockups/gallery-redesign.html.
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { Box, House, KeyRound, Laptop, LayoutTemplate, Menu, Moon, Palette, Play, Search, Sun } from "lucide-react";
import { byName, items } from "./catalog";
import { library, pageLabel, pagesOf, SOURCE_COLOUR, SOURCE_LABEL, SOURCES, siteColour, siteLabel, siteList, sourceOf, TYPE_LABEL } from "./library";
import { openOverlay, setSettings, useDarkChrome, useRoute, type Route } from "./state";
import { Browse, browseTitle, readBrowse } from "./views/browse";
import { DevicesPage } from "./views/devices";
import { ItemPage } from "./views/item";
import { Overview, Sites } from "./views/overview";
import { PasskeysPage } from "./views/passkeys";
import { RunsPage } from "./views/runs";
import { Overlays } from "./views/search";
import { FullSite, SiteViewer, sitePageOf } from "./views/site";

export function App() {
  const route = useRoute();
  const dark = useDarkChrome();
  const [navOpen, setNavOpen] = useState(false);
  const [tools, setTools] = useState<HTMLDivElement | null>(null);
  const head = route.parts[0];
  const path = route.parts.join("/");

  useEffect(() => {
    setNavOpen(false);
    if (head !== "site" && head !== "full") scrollTo(0, 0);
  }, [path]);
  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  let view: ReactNode;
  if (head === "item" && route.parts[1]) view = <ItemPage key={route.parts[1]} name={route.parts[1]} />;
  else if (head === "site" && route.parts[1]) view = <SiteViewer key={route.parts[1]} route={route} tools={tools} />;
  else if (head === "full" && route.parts[1]) view = <FullSite route={route} />;
  else if (head === "browse") view = <Browse route={route} />;
  else if (head === "sites") view = <Sites />;
  else if (head === "runs") view = <RunsPage route={route} />;
  else if (head === "devices") view = <DevicesPage />;
  else if (head === "passkeys") view = <PasskeysPage />;
  else view = <Overview />;

  return (
    <>
      <div className="scrim" onClick={() => setNavOpen(false)} />
      <div className={`app${head === "site" ? " focus" : ""}`}>
        <Sidebar route={route} />
        <div className="main">
          <header className="topbar">
            <button className="icon-btn ghost menu-btn" aria-label="Menu" onClick={() => setNavOpen(true)}>
              <Menu className="i" />
            </button>
            <Crumbs route={route} />
            <div className="top-tools" ref={setTools} />
            <div className="top-actions">
              <button className="search-btn" aria-label="Search" onClick={() => openOverlay({ kind: "search" })}>
                <Search className="i" />
                <span className="lbl">Search or jump to…</span>
                <span className="kbd">Ctrl K</span>
              </button>
              <button className="icon-btn" aria-label={dark ? "Light gallery" : "Dark gallery"} title={dark ? "Light gallery" : "Dark gallery"} onClick={() => setSettings({ chrome: dark ? "light" : "dark" })}>
                {dark ? <Sun className="i" /> : <Moon className="i" />}
              </button>
            </div>
          </header>
          <main className="view">{view}</main>
        </div>
      </div>
      <Overlays />
    </>
  );
}

function Sidebar({ route }: { route: Route }) {
  const head = route.parts[0];
  const browsing = head === "browse";
  const q = route.q;
  const count = (f: (i: (typeof library)[number]) => boolean) => library.filter(f).length;
  const link = (href: string, icon: ReactNode, label: string, n: ReactNode, on: boolean) => (
    <a key={href} className={`nav-link${on ? " on" : ""}`} href={href}>
      {icon}
      <span>{label}</span>
      {n != null && <span className="count">{n}</span>}
    </a>
  );
  const typeLink = (type: string, Icon: typeof Box) =>
    link(`#/browse?type=${type}`, <Icon className="i" />, TYPE_LABEL[type], count((i) => i.meta.type === type), browsing && q.get("type") === type && !q.get("source"));
  return (
    <aside className="sidebar">
      <a className="brand" href="#/">
        <span className="brand-mark">SF</span>
        <div>
          SITEFOUNDRY
          <small>local gallery</small>
        </div>
      </a>
      <nav className="nav-group">
        {link("#/", <House className="i" />, "Overview", null, !head)}
        {typeLink("block", LayoutTemplate)}
        {typeLink("component", Box)}
        {typeLink("theme", Palette)}
        {link("#/runs", <Play className="i" />, "Runs", null, head === "runs")}
        {link("#/devices", <Laptop className="i" />, "Devices", null, head === "devices")}
        {link("#/passkeys", <KeyRound className="i" />, "Passkeys", null, head === "passkeys")}
      </nav>
      <nav className="nav-group">
        <h6>Sources</h6>
        {SOURCES.map((s) =>
          link(`#/browse?source=${s}`, <span className="dot" style={{ background: SOURCE_COLOUR[s] }} />, SOURCE_LABEL[s], count((i) => sourceOf(i) === s), browsing && q.get("source") === s && !q.get("type")),
        )}
      </nav>
      <nav className="nav-group">
        <h6>Recreated sites</h6>
        {siteList.map((s) => {
          const n = pagesOf(s).length;
          return link(`#/site/${s}`, <span className="dot" style={{ background: siteColour(s) }} />, siteLabel(s), n > 1 ? `${n} pages` : "1 page", (head === "site" || head === "full") && route.parts[1] === s);
        })}
      </nav>
      <div className="sidebar-foot">
        {items.length} items in the catalog
        <br />
        <span className="mono">{location.host}</span>
      </div>
    </aside>
  );
}

function Crumbs({ route }: { route: Route }) {
  const [head, a] = route.parts;
  let list: [string, string?][] = [["Overview"]];
  if (head === "sites") list = [["Overview", "#/"], ["Sites"]];
  if (head === "runs") list = a ? [["Overview", "#/"], ["Runs", "#/runs"], [a === "new" ? "New run" : `Run #${a}`]] : [["Overview", "#/"], ["Runs"]];
  if (head === "devices") list = [["Overview", "#/"], ["Devices"]];
  if (head === "passkeys") list = [["Overview", "#/"], ["Passkeys"]];
  if (head === "browse") list = [["Overview", "#/"], [browseTitle(readBrowse(route.q))]];
  if (head === "item") {
    const type = byName.get(a)?.meta.type ?? "";
    list = [["Overview", "#/"], [TYPE_LABEL[type] ?? "Items", `#/browse?type=${type}`], [a]];
  }
  if (head === "site" || head === "full") list = [["Overview", "#/"], ["Sites", "#/sites"], [siteLabel(a), `#/site/${a}`], [pageLabel(sitePageOf(route))]];
  return (
    <nav className="crumbs" aria-label="Breadcrumbs">
      {list.map(([label, href], k) =>
        k === list.length - 1 ? (
          <span key={k} className="cur">
            {label}
          </span>
        ) : (
          <Fragment key={k}>
            <a href={href} className={k > 0 ? "hide-sm" : ""}>
              {label}
            </a>
            <span className={`sep${k > 0 ? " hide-sm" : ""}`}>/</span>
          </Fragment>
        ),
      )}
    </nav>
  );
}
