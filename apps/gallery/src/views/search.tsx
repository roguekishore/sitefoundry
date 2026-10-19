// The two overlays: the command palette (Ctrl K or /: jump to a site, page, item or filter) and
// quick look (one item's live preview in a dialog; closing it removes the iframe).
import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { Box, File, Globe, LayoutTemplate, Moon, Palette, Search, Sparkles, X } from "lucide-react";
import { byName, installCommand } from "../catalog";
import { library, pageLabel, pagesOf, siteLabel, siteList, siteOrigin, themeFor } from "../library";
import { closeOverlay, navigate, openOverlay, setSettings, useDarkChrome, useOverlay, useSettings } from "../state";
import { CmdBox, DeviceSeg, ItemStage, ThemeButton } from "../ui";

interface Row {
  label: string;
  hint: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
  run?: () => void;
}

const ICON_FOR = { block: LayoutTemplate, component: Box, theme: Palette } as Record<string, ComponentType<{ className?: string }>>;

function search(query: string, dark: boolean): [string, Row[]][] {
  const q = query.trim().toLowerCase();
  const has = (s: string) => !q || s.toLowerCase().includes(q);
  const groups: [string, Row[]][] = [];
  const sites = siteList
    .filter((s) => has(`${s} ${siteLabel(s)} ${siteOrigin(s) ?? ""}`))
    .map((s) => ({ label: siteLabel(s), hint: `${pagesOf(s).length} page${pagesOf(s).length > 1 ? "s" : ""}`, icon: Globe, href: `#/site/${s}` }));
  if (sites.length) groups.push(["Sites", sites]);
  if (q) {
    const pages = siteList.flatMap((s) =>
      pagesOf(s)
        .filter((p) => p !== "landing" && has(`${s} ${p}`))
        .map((p) => ({ label: `${siteLabel(s)} › ${pageLabel(p)}`, hint: "page", icon: File, href: `#/site/${s}/${p}` })),
    );
    if (pages.length) groups.push(["Pages", pages.slice(0, 6)]);
    for (const [type, label] of [["block", "Blocks"], ["component", "Components"], ["theme", "Themes"]]) {
      const rows = library
        .filter((i) => i.meta.type === type && has(`${i.name} ${i.meta.title} ${(i.meta.tags ?? []).join(" ")}`))
        .slice(0, 6)
        .map((i) => ({ label: i.meta.title, hint: i.name, icon: ICON_FOR[type], href: `#/item/${i.name}` }));
      if (rows.length) groups.push([label, rows]);
    }
  }
  const actions: Row[] = [
    { label: dark ? "Light gallery" : "Dark gallery", hint: "gallery", icon: Moon, run: () => setSettings({ chrome: dark ? "light" : "dark" }) },
    { label: "Blocks that need no JavaScript", hint: "filter", icon: LayoutTemplate, href: "#/browse?type=block&js=static" },
    { label: "React Bits backgrounds", hint: "filter", icon: Sparkles, href: "#/browse?source=reactbits&category=background" },
    { label: "Search everything for “" + query.trim() + "”", hint: "browse", icon: Search, href: `#/browse?q=${encodeURIComponent(query.trim())}` },
  ].filter((a) => (a.hint === "browse" ? !!q : has(a.label)));
  if (actions.length) groups.push(["Actions", actions]);
  return groups;
}

export function Overlays() {
  const overlay = useOverlay();
  const current = useRef(overlay);
  current.current = overlay;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement as HTMLElement | null)?.tagName ?? "");
      const searching = current.current?.kind === "search";
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openOverlay(searching ? null : { kind: "search" });
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        openOverlay({ kind: "search" });
      } else if (e.key === "Escape") closeOverlay();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  if (!overlay) return null;
  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && closeOverlay()}>
      {overlay.kind === "search" ? <CommandPalette /> : <QuickLook name={overlay.name} />}
    </div>
  );
}

function CommandPalette() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const dark = useDarkChrome();
  const list = useRef<HTMLDivElement>(null);
  const groups = useMemo(() => search(query, dark), [query, dark]);
  const rows = groups.flatMap(([, r]) => r);
  useEffect(() => {
    setActive(0);
  }, [query]);
  useEffect(() => {
    list.current?.querySelector(".cmdk-item.active")?.scrollIntoView({ block: "nearest" });
  }, [active]);
  const run = (row?: Row) => {
    if (!row) return;
    closeOverlay();
    if (row.href) navigate(row.href);
    row.run?.();
  };
  let n = 0;
  return (
    <div className="cmdk" role="dialog" aria-label="Search">
      <div className="cmdk-input">
        <Search className="i muted" />
        <input
          autoFocus
          placeholder="Search sites, pages, blocks, components, themes…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") (e.preventDefault(), setActive((a) => Math.min(rows.length - 1, a + 1)));
            if (e.key === "ArrowUp") (e.preventDefault(), setActive((a) => Math.max(0, a - 1)));
            if (e.key === "Enter") (e.preventDefault(), run(rows[active]));
          }}
        />
        <span className="kbd">Esc</span>
      </div>
      <div className="cmdk-list" ref={list}>
        {groups.length ? (
          groups.map(([group, items]) => (
            <div key={group}>
              <h6>{group}</h6>
              {items.map((row) => {
                const i = n++;
                const Icon = row.icon;
                return (
                  <div key={i} className={`cmdk-item${i === active ? " active" : ""}`} onMouseMove={() => setActive(i)} onClick={() => run(row)}>
                    <Icon className="i muted" />
                    <span>{row.label}</span>
                    <span className={`hint${row.hint.includes("-") ? " mono" : ""}`}>{row.hint}</span>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="empty" style={{ padding: 30 }}>
            No results
          </div>
        )}
      </div>
      <div className="cmdk-foot">
        <span>↑↓ move</span>
        <span>↵ open</span>
        <span>Esc close</span>
      </div>
    </div>
  );
}

function QuickLook({ name }: { name: string }) {
  const item = byName.get(name);
  const settings = useSettings();
  if (!item) return null;
  const isTheme = item.meta.type === "theme";
  return (
    <div className="dialog" role="dialog" aria-label={item.meta.title}>
      <div className="dialog-head">
        <div style={{ minWidth: 0 }}>
          <h3>{item.meta.title}</h3>
          <div className="mono muted" style={{ fontSize: 12 }}>
            {item.name}
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <a className="btn primary" href={`#/item/${item.name}`} onClick={closeOverlay}>
            Open details
          </a>
          <button className="icon-btn" aria-label="Close" onClick={closeOverlay}>
            <X className="i" />
          </button>
        </div>
      </div>
      <div className="stage-toolbar">
        <DeviceSeg />
        {!isTheme && (
          <>
            <span className="sep-v" />
            <ThemeButton />
          </>
        )}
        <div className="right">
          <CmdBox text={installCommand(item)} />
        </div>
      </div>
      <ItemStage target={isTheme ? { specimen: item.name } : { item: item.name }} theme={isTheme ? item.name : themeFor(item, settings.theme)} minHeight={360} />
    </div>
  );
}
