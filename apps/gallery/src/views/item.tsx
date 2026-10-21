// One item: exactly one live preview (device, theme and light/dark sit on the preview they
// change), then its props, code and details, and on the side where it's used and what's like it.
import { useEffect, useState, type ReactNode } from "react";
import { ExternalLink, RotateCw } from "lucide-react";
import type { IndexEntry, RegistryItem } from "@foundry/core";
import { byName, installCommand, registryIndex } from "../catalog";
import { MiniItem } from "../cards";
import { categoryLabel, library, pageLabel, themeFor, titleCase, usedOn } from "../library";
import { BASE } from "../base";
import { useSettings } from "../state";
import { Badges, CmdBox, DeviceSeg, ItemStage, ThemeButton } from "../ui";

type Tab = "props" | "code" | "details";

export function useIndexEntry(name: string | undefined): IndexEntry | undefined | null {
  // undefined: still loading; null: not in the built registry
  const [entry, setEntry] = useState<IndexEntry | null>();
  useEffect(() => {
    setEntry(undefined);
    if (name) registryIndex().then((index) => setEntry(index.get(name) ?? null));
  }, [name]);
  return entry;
}

export function ItemPage({ name }: { name: string }) {
  const item = byName.get(name);
  const settings = useSettings();
  const entry = useIndexEntry(name);
  const [tab, setTab] = useState<Tab>("props");
  const [reload, setReload] = useState(0);

  if (!item) {
    return (
      <div className="page">
        <div className="empty">No item called “{name}”.</div>
      </div>
    );
  }
  const isTheme = item.meta.type === "theme";
  const target: Record<string, string> | undefined = isTheme ? { specimen: item.name } : item.hasDemo ? { item: item.name } : undefined;
  const theme = isTheme ? item.name : themeFor(item, settings.theme);
  const used = usedOn(item.name);
  const related = library
    .filter((x) => x.name !== item.name && x.meta.type === item.meta.type && x.meta.category === item.meta.category)
    .sort((a, b) => Number(b.meta.site === item.meta.site) - Number(a.meta.site === item.meta.site))
    .slice(0, 5);
  const deps = (entry?.registryDependencies ?? []).filter((d) => byName.has(d));
  const fullScreen = target ? `${BASE}preview.html?${new URLSearchParams({ ...target, theme, mode: settings.mode })}` : "";

  return (
    <div className="page">
      <div className="detail-head">
        <div style={{ minWidth: 0 }}>
          <h1>{item.meta.title}</h1>
          <div className="mono muted" style={{ fontSize: 13, marginTop: 2 }}>
            {item.name} · v{item.meta.version}
          </div>
          {item.meta.description && <p className="desc">{item.meta.description}</p>}
          {!!item.meta.notes?.length && (
            <ul className="notes">
              {item.meta.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
          <div className="chips">
            <Badges item={item} extra />
          </div>
        </div>
        <div style={{ width: "min(100%, 340px)" }}>
          <CmdBox text={installCommand(item)} />
        </div>
      </div>

      {target ? (
        <div className="panel">
          <div className="stage-toolbar">
            <DeviceSeg />
            {!isTheme && (
              <>
                <span className="sep-v" />
                <ThemeButton />
              </>
            )}
            <div className="right">
              <button className="icon-btn" title="Reload preview" aria-label="Reload preview" onClick={() => setReload((n) => n + 1)}>
                <RotateCw className="i" />
              </button>
              <a className="icon-btn" title="Open on its own, full window" aria-label="Open full window" href={fullScreen} target="_blank" rel="noreferrer">
                <ExternalLink className="i" />
              </a>
            </div>
          </div>
          <ItemStage target={target} theme={theme} reloadKey={reload} />
        </div>
      ) : (
        <div className="panel empty">No demo: this item has nothing to show on its own.</div>
      )}

      <div className="detail">
        <div style={{ minWidth: 0 }}>
          <div className="tabs" role="tablist">
            {(["props", "code", "details"] as const).map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>
                {titleCase(t)}
                {t === "props" && entry?.props?.length ? <span className="muted"> {entry.props.length}</span> : null}
              </button>
            ))}
          </div>
          <div className="tab-body">
            {entry === null && (
              <p className="muted">
                Not in the registry yet: run <code className="mono">pnpm build:registry</code>.
              </p>
            )}
            {entry && tab === "props" && <PropsTable entry={entry} />}
            {entry && tab === "code" && <Code name={item.name} />}
            {entry && tab === "details" && <Details entry={entry} />}
          </div>
        </div>
        <aside className="rail">
          {used.length > 0 && (
            <div className="panel">
              <h6>Used on</h6>
              <div className="chips">
                {used.map(([s, p]) => (
                  <a key={`${s}/${p}`} className="chip-link" href={`#/site/${s}${p === "landing" ? "" : `/${p}`}?block=${item.name}`} title={`${s}: ${pageLabel(p)}`}>
                    {s}/{p === "landing" ? "" : p}
                  </a>
                ))}
              </div>
            </div>
          )}
          {deps.length > 0 && (
            <div className="panel">
              <h6>Installs with it</h6>
              <div className="chips">
                {deps.map((d) => (
                  <a key={d} className="chip-link" href={`#/item/${d}`}>
                    {d}
                  </a>
                ))}
              </div>
            </div>
          )}
          {related.length > 0 && (
            <div className="panel">
              <h6>More {isTheme ? "themes" : categoryLabel(item.meta.category ?? "items")}</h6>
              {related.map((x) => (
                <MiniItem key={x.name} item={x} />
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export function PropsTable({ entry, compact = false }: { entry: IndexEntry; compact?: boolean }) {
  if (!entry.props?.length) return <p className="muted" style={{ fontSize: 12.5, margin: 0 }}>No props.</p>;
  if (compact) {
    return (
      <table className="props">
        <tbody>
          {entry.props.map((p) => (
            <tr key={p.name}>
              <td className="mono">
                {p.name}
                {p.required ? "" : "?"}
              </td>
              <td className="mono muted wrap">{p.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="props">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {entry.props.map((p) => (
            <tr key={p.name}>
              <td className="mono">
                {p.name}
                {p.required ? "" : "?"}
              </td>
              <td className="mono muted wrap">{p.type}</td>
              <td className="mono muted">{p.default ?? ""}</td>
              <td className="muted">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Code({ name }: { name: string }) {
  const [built, setBuilt] = useState<RegistryItem>();
  const [file, setFile] = useState(0);
  useEffect(() => {
    fetch(`${BASE}r/${name}.json`)
      .then((r) => r.json())
      .then(setBuilt)
      .catch(() => setBuilt(undefined));
  }, [name]);
  if (!built) return null;
  const text = built.files.filter((f) => f.encoding !== "base64");
  const current = text[file];
  return (
    <div>
      <div className="file-tabs">
        {text.map((f, i) => (
          <button key={f.path} className={i === file ? "on" : ""} onClick={() => setFile(i)}>
            {f.path}
          </button>
        ))}
      </div>
      {current && <pre className="code">{current.content}</pre>}
    </div>
  );
}

function Details({ entry }: { entry: IndexEntry }) {
  const rows: [string, ReactNode][] = [
    ["Versions", entry.versions.join(", ")],
    ["Licence", entry.license],
    ["Needs JavaScript", entry.hydrate ? <>yes · in Astro use <span className="mono">client:{entry.hydrate}</span></> : "no, static HTML"],
    ["npm packages", <span className="mono">{Object.entries(entry.dependencies).map(([k, v]) => `${k}@${v}`).join("  ") || "none"}</span>],
    ["Uses", <span className="mono">{entry.registryDependencies.join(", ") || "none"}</span>],
    ["Files", <span className="mono">{entry.files.join(", ")}</span>],
    ["In the repo", <span className="mono">{entry.path}</span>],
  ];
  return (
    <dl className="kv">
      {rows.map(([k, v]) => (
        <div key={k} style={{ display: "contents" }}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
