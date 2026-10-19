// The site viewer: a recreated site in a browser window, with its pages on the left and the block
// behind the selected section on the right. Links inside the site switch page (the frame asks the
// gallery, see inspect.ts), and the address bar, back/forward and the page list follow.
// Also the full-screen view: the site alone, as a visitor on that device would see it.
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ChevronsUpDown, File, Globe, House, Maximize2, MousePointerClick, RotateCw, X } from "lucide-react";
import { byName, installCommand } from "../catalog";
import { MiniItem } from "../cards";
import { PreviewFrame, type FrameApi, type FrameMessage } from "../frame";
import { LANDING, pageItems, pageLabel, pagesOf, siteColour, siteLabel, siteList, siteOrigin, themeOf } from "../library";
import type { Section } from "../inspect";
import { DEVICES, navigate, setSettings, useSettings, useSize, useWindowWidth, type Device, type Route } from "../state";
import { Badges, CmdBox, DeviceSeg, PopoverButton, ThemeButton } from "../ui";
import { PropsTable, useIndexEntry } from "./item";

const siteHash = (site: string, page: string, block?: string | null) => `#/site/${site}${page === LANDING ? "" : `/${page}`}${block ? `?block=${block}` : ""}`;
const fullHash = (site: string, page: string, device: Device) => `#/full/${site}/${page}?device=${device}`;
/** Below this the gallery shows the site edge to edge: no device inside a device. */
const NATIVE_BELOW = 860;

/** Back and forward inside the viewer, like a browser's, per site. */
const histories = new Map<string, { stack: string[]; idx: number }>();
function followHistory(site: string, page: string) {
  const h = histories.get(site) ?? { stack: [page], idx: 0 };
  histories.set(site, h);
  if (h.stack[h.idx] === page) return h;
  if (h.stack[h.idx - 1] === page) h.idx--;
  else if (h.stack[h.idx + 1] === page) h.idx++;
  else {
    h.stack = [...h.stack.slice(0, h.idx + 1), page];
    h.idx = h.stack.length - 1;
  }
  return h;
}

export const sitePageOf = (route: Route) => {
  const site = route.parts[1];
  return pagesOf(site).includes(route.parts[2]) ? route.parts[2] : LANDING;
};

/** What a page shows before its preview reports: the blocks it imports. */
const fallbackSections = (site: string, page: string): Section[] =>
  pageItems(site, page)
    .filter((n) => byName.get(n)?.meta.type === "block")
    .map((name) => ({ name, visual: true }));

export function SiteViewer({ route, tools }: { route: Route; tools: HTMLElement | null }) {
  const site = route.parts[1];
  const page = sitePageOf(route);
  const selected = route.q.get("block");
  const settings = useSettings();
  const native = useWindowWidth() < NATIVE_BELOW;
  const [stage, setStage] = useState<HTMLDivElement | null>(null);
  const size = useSize(stage);
  const [report, setReport] = useState<{ key: string; sections: Section[] }>({ key: "", sections: [] });
  const [hover, setHover] = useState<string | null>(null);
  const [reload, setReload] = useState(0);
  const api = useRef<FrameApi | null>(null);
  // arriving with ?block=… (from an item's "Used on"): scroll to it once the page reports its sections
  const scrollPending = useRef<string | null>(selected);
  const history = followHistory(site, page);

  const key = `${site}/${page}`;
  const sections = report.key === key ? report.sections : fallbackSections(site, page);
  const theme = settings.theme === "own" ? (themeOf(site) ?? "none") : settings.theme;

  useEffect(() => {
    setHover(null);
  }, [key]);

  const select = (name: string | null, scroll = false) => {
    navigate(siteHash(site, page, name), true);
    if (scroll && name) api.current?.post({ type: "foundry:scroll-to", name });
  };
  const goPage = (p: string) => {
    scrollPending.current = null;
    navigate(siteHash(site, p));
  };

  const onMessage = (m: FrameMessage) => {
    if (m.type === "foundry:sections") {
      setReport({ key, sections: m.sections as Section[] });
      const pending = scrollPending.current;
      if (pending && (m.sections as Section[]).some((s) => s.name === pending)) {
        scrollPending.current = null;
        api.current?.post({ type: "foundry:scroll-to", name: pending });
      }
    }
    if (m.type === "foundry:hover") setHover((m.name as string | null) ?? null);
    if (m.type === "foundry:select") select(m.name === selected ? null : (m.name as string));
    if (m.type === "foundry:navigate") goPage(m.page as string);
  };

  if (!pagesOf(site).length || !siteList.includes(site)) {
    return (
      <div className="page">
        <div className="empty">No site called “{site}”.</div>
      </div>
    );
  }

  // the browser window, fitted inside the stage (width and height)
  let { w, h } = DEVICES[settings.device];
  if (native) ({ width: w, height: h } = size);
  const chromeH = native ? 0 : 40;
  const bezel = !native && settings.device === "phone" ? 20 : 0;
  const scale = native ? 1 : size.width ? Math.max(0.1, Math.min(1, (size.width - 48 - bezel) / w, (size.height - 48 - bezel) / (h + chromeH))) : 0;
  const pageButton = (p: string) => (
    <button key={p} className={`p-link${p === page ? " on" : ""}`} onClick={() => goPage(p)}>
      {p === LANDING ? <House className="i muted" /> : <File className="i muted" />}
      {pageLabel(p)}
      <span className="n">{pageItems(site, p).filter((n) => byName.get(n)?.meta.type === "block").length}</span>
    </button>
  );
  let index = 0;

  return (
    <div className={`viewer${selected ? " inspecting" : ""}`}>
      {tools &&
        createPortal(
          <>
            <DeviceSeg />
            <span className="sep-v" />
            <ThemeButton />
            <button className="btn sm ghost" aria-pressed={settings.inspect} title="Inspect: hover outlines a section, a click selects it. Turn off to use the site's own buttons." onClick={() => setSettings({ inspect: !settings.inspect })}>
              <MousePointerClick className="i" />
              <span className="t">Inspect</span>
            </button>
            <a className="icon-btn" href={fullHash(site, page, native ? "phone" : settings.device)} title="Full screen: the site alone, as a visitor sees it" aria-label="Full screen">
              <Maximize2 className="i" />
            </a>
          </>,
          tools,
        )}

      <aside className="pane left">
        <div className="pane-sec">
          <PopoverButton
            className="site-switch"
            minWidth={220}
            render={(close) => (
              <>
                <h6>Switch site</h6>
                {siteList.map((s) => (
                  <a key={s} className={`opt${s === site ? " active" : ""}`} href={`#/site/${s}`} onClick={close}>
                    <span className="dot" style={{ background: siteColour(s) }} />
                    {siteLabel(s)}
                    <span className="n">{pagesOf(s).length}p</span>
                  </a>
                ))}
              </>
            )}
          >
            <span className="mark" style={{ background: siteColour(site) }} />
            <span style={{ minWidth: 0, flex: 1 }}>
              <span className="t">{siteLabel(site)}</span>
              <span className="s">{siteOrigin(site) ? `from ${siteOrigin(site)}` : "recreation"}</span>
            </span>
            <ChevronsUpDown className="i muted" />
          </PopoverButton>
        </div>
        <div className="pane-sec">
          <h6>
            Pages<span className="n">{pagesOf(site).length}</span>
          </h6>
          {pagesOf(site).map(pageButton)}
        </div>
        <div className="pane-sec">
          <h6>
            Sections on this page<span className="n">{sections.filter((s) => s.visual).length}</span>
          </h6>
          {sections.map((s) =>
            s.visual ? (
              <button
                key={s.name}
                className={`p-link${selected === s.name ? " sel" : ""}${hover === s.name ? " hover" : ""}`}
                onMouseEnter={() => setHover(s.name)}
                onMouseLeave={() => setHover(null)}
                onClick={() => select(selected === s.name ? null : s.name, selected !== s.name)}
              >
                <span className="idx">{++index}</span>
                <span className="nm">{s.name.replace(`${site}-`, "")}</span>
                <span className="n">{byName.get(s.name)?.meta.category}</span>
              </button>
            ) : (
              <button key={s.name} className="p-link ghosty" onClick={() => select(s.name)}>
                <span className="idx">·</span>
                <span className="nm">{s.name.replace(`${site}-`, "")}</span>
                <span className="n">behaviour</span>
              </button>
            ),
          )}
        </div>
      </aside>

      <div className="center">
        <div className="mobile-pages">{pagesOf(site).map(pageButton)}</div>
        <div className="stage" ref={setStage}>
          <div className="device-wrap" style={native ? { padding: 0 } : undefined}>
            {scale > 0 && w > 0 && (
              <div className={`browser${native ? " native" : settings.device === "phone" ? " phone" : ""}`} style={{ width: w * scale, height: (h + chromeH) * scale }}>
                <div className="scaled" style={{ width: w, transform: `scale(${scale})` }}>
                  {!native && (
                    <div className="browser-bar">
                      {settings.device !== "phone" && (
                        <div className="lights">
                          <span />
                          <span />
                          <span />
                        </div>
                      )}
                      <button className="icon-btn" aria-label="Back" disabled={history.idx === 0} onClick={() => goPage(history.stack[history.idx - 1])}>
                        <ChevronLeft className="i" />
                      </button>
                      <button className="icon-btn" aria-label="Forward" disabled={history.idx >= history.stack.length - 1} onClick={() => goPage(history.stack[history.idx + 1])}>
                        <ChevronRight className="i" />
                      </button>
                      <div className="addr">
                        <Globe className="i" />
                        <span>{site}.local</span>
                        <b>/{page === LANDING ? "" : page}</b>
                      </div>
                      <button className="icon-btn" aria-label="Reload" onClick={() => setReload((n) => n + 1)}>
                        <RotateCw className="i" />
                      </button>
                    </div>
                  )}
                  <div className="screen" style={{ height: h }}>
                    <PreviewFrame
                      key={reload}
                      title={`${siteLabel(site)}: ${pageLabel(page)}`}
                      target={{ site, page: page === LANDING ? undefined : page }}
                      width={w}
                      height={h}
                      theme={theme}
                      mode={settings.mode}
                      inspect={{ enabled: settings.inspect, hover, selected }}
                      onMessage={onMessage}
                      api={api}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <aside className="pane right">
        <Inspector site={site} page={page} selected={selected} onClose={() => select(null)} />
      </aside>
    </div>
  );
}

function Inspector({ site, page, selected, onClose }: { site: string; page: string; selected: string | null; onClose: () => void }) {
  const block = selected ? byName.get(selected) : undefined;
  const entry = useIndexEntry(block?.name);
  if (!block) {
    const all = pageItems(site, page);
    const theme = themeOf(site);
    const themeItem = theme ? byName.get(theme) : undefined;
    return (
      <>
        <div className="pane-sec">
          <h6>This page</h6>
          <p className="insp-title">{pageLabel(page)}</p>
          <p className="muted" style={{ fontSize: 12.5, margin: "4px 0 12px" }}>
            {all.length} items. Install them all into a project at once:
          </p>
          <CmdBox text={`foundry add ${all.join(" ")}`} />
        </div>
        {themeItem && (
          <div className="pane-sec">
            <h6>Site theme</h6>
            <MiniItem item={themeItem} />
          </div>
        )}
        <div className="pane-sec">
          <p className="note">Select a section in the preview (or in the list) to see its block, props and install command.</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="pane-sec" style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h6 style={{ padding: 0 }}>Selected block</h6>
          <p className="insp-title">{block.meta.title}</p>
          <div className="mono muted" style={{ fontSize: 12 }}>
            {block.name} · v{block.meta.version}
          </div>
        </div>
        <button className="icon-btn ghost" aria-label="Close" onClick={onClose}>
          <X className="i" />
        </button>
      </div>
      <div className="pane-sec">
        {block.meta.description && (
          <p className="muted" style={{ margin: "0 0 10px", fontSize: 12.5 }}>
            {block.meta.description}
          </p>
        )}
        <div className="chips" style={{ marginBottom: 12 }}>
          <Badges item={block} />
        </div>
        <CmdBox text={installCommand(block)} />
        <a className="btn" style={{ width: "100%", marginTop: 8 }} href={`#/item/${block.name}`}>
          Open block page <ChevronRight className="i" />
        </a>
      </div>
      <div className="pane-sec">
        <h6>Props</h6>
        {entry ? <PropsTable entry={entry} compact /> : <p className="note">{entry === null ? "Not in the registry yet." : "…"}</p>}
      </div>
      {!!entry?.registryDependencies.length && (
        <div className="pane-sec">
          <h6>Installs with it</h6>
          <div className="chips">
            {entry.registryDependencies.map((d) => (
              <a key={d} className="chip-link" href={`#/item/${d}`}>
                {d}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/** The site and nothing else: no bezel, no browser bar, no gallery. A pill bottom-left goes back. */
export function FullSite({ route }: { route: Route }) {
  const site = route.parts[1];
  const page = sitePageOf(route);
  const settings = useSettings();
  const windowWidth = useWindowWidth();
  const device = (route.q.get("device") as Device | null) ?? settings.device;
  const w = Math.min(DEVICES[device in DEVICES ? device : "desktop"].w, windowWidth);
  const theme = settings.theme === "own" ? (themeOf(site) ?? "none") : settings.theme;
  const onMessage = (m: FrameMessage) => {
    if (m.type === "foundry:navigate") navigate(fullHash(site, m.page as string, device));
  };
  return (
    <div className="full">
      <PreviewFrame title={`${siteLabel(site)}: ${pageLabel(page)}`} target={{ site, page: page === LANDING ? undefined : page }} width={w} height={innerHeight} theme={theme} mode={settings.mode} onMessage={onMessage} />
      <div className="full-bar">
        <a href={siteHash(site, page)}>
          <ChevronLeft className="i" />
          Gallery
        </a>
        <DeviceSegPill device={device} onChange={(d) => navigate(fullHash(site, page, d), true)} />
      </div>
    </div>
  );
}

function DeviceSegPill({ device, onChange }: { device: Device; onChange: (d: Device) => void }) {
  return (
    <>
      {(Object.keys(DEVICES) as Device[]).map((d) => (
        <button key={d} className={device === d ? "on" : ""} title={`${DEVICES[d].label} · ${DEVICES[d].w}px`} onClick={() => onChange(d)}>
          {DEVICES[d].label}
        </button>
      ))}
    </>
  );
}
