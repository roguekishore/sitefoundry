// Every block, component and theme in one list. Type is a tab (it changes what a card is);
// everything else is a facet you can combine. Each facet shows how many results each choice
// would give with the other filters, so you never pick an empty result. All of it is in the
// URL, so a view like "React Bits text effects that need no JS" can be bookmarked.
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, CirclePlus, LayoutGrid, List, Search, X } from "lucide-react";
import type { Item } from "../catalog";
import { ItemCard, ItemRow } from "../cards";
import { addedAt, library, SOURCE_LABEL, SOURCES, siteLabel, siteList, sourceOf, titleCase, TYPE_LABEL } from "../library";
import { navigate, setSettings, useSettings, type Route } from "../state";
import { PopoverButton } from "../ui";

interface Facet {
  label: string;
  values: () => string[];
  name: (v: string) => string;
  match: (i: Item, v: string) => boolean;
}

const categories = [...new Set(library.map((i) => i.meta.category).filter((c): c is string => !!c))].sort();

const FACETS: Record<string, Facet> = {
  source: { label: "Source", values: () => SOURCES, name: (v) => SOURCE_LABEL[v] ?? v, match: (i, v) => sourceOf(i) === v },
  site: { label: "Site", values: () => siteList, name: siteLabel, match: (i, v) => i.meta.site === v },
  category: { label: "Category", values: () => categories, name: titleCase, match: (i, v) => i.meta.category === v },
  js: { label: "Runtime", values: () => ["static", "js"], name: (v) => (v === "js" ? "Needs JavaScript" : "Static HTML"), match: (i, v) => (v === "js" ? !!i.meta.hydrate : !i.meta.hydrate) },
};
const FACET_KEYS = Object.keys(FACETS);

interface BrowseState {
  type: string;
  q: string;
  sort: string;
  facets: Record<string, string[]>;
}

export function readBrowse(q: URLSearchParams): BrowseState {
  return {
    type: q.get("type") ?? "all",
    q: q.get("q") ?? "",
    sort: q.get("sort") ?? "relevance",
    facets: Object.fromEntries(FACET_KEYS.map((f) => [f, (q.get(f) ?? "").split(",").filter(Boolean)])),
  };
}

function writeBrowse(st: BrowseState) {
  const q = new URLSearchParams();
  if (st.type !== "all") q.set("type", st.type);
  for (const f of FACET_KEYS) if (st.facets[f].length) q.set(f, st.facets[f].join(","));
  if (st.q) q.set("q", st.q);
  if (st.sort !== "relevance") q.set("sort", st.sort);
  navigate("#/browse" + (q.size ? `?${q}` : ""), true);
}

function filterItems(st: BrowseState): Item[] {
  const words = st.q.toLowerCase().split(/\s+/).filter(Boolean);
  const out = library.filter((i) => {
    if (st.type !== "all" && i.meta.type !== st.type) return false;
    for (const f of FACET_KEYS) if (st.facets[f].length && !st.facets[f].some((v) => FACETS[f].match(i, v))) return false;
    const text = [i.name, i.meta.title, i.meta.description, i.meta.category, i.meta.site, i.meta.source, ...(i.meta.tags ?? []), ...(i.meta.notes ?? [])].join(" ").toLowerCase();
    return words.every((w) => text.includes(w));
  });
  if (st.sort === "newest") out.sort((a, b) => addedAt(b.name) - addedAt(a.name));
  if (st.sort === "name") out.sort((a, b) => a.meta.title.localeCompare(b.meta.title));
  return out;
}

export const browseTitle = (st: BrowseState) =>
  st.type !== "all" ? (TYPE_LABEL[st.type] ?? titleCase(st.type)) : st.facets.source.length === 1 ? SOURCE_LABEL[st.facets.source[0]] : "All items";

const BATCH = 48;

export function Browse({ route }: { route: Route }) {
  const st = readBrowse(route.q);
  const { view } = useSettings();
  const [text, setText] = useState(st.q);
  const results = useMemo(() => filterItems(st), [route.q.toString()]);
  const [shown, setShown] = useState(BATCH);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShown(BATCH);
  }, [route.q.toString()]);
  // keep the box in step when the URL changes from elsewhere (Reset, the sidebar)
  useEffect(() => {
    if (st.q !== text) setText(st.q);
  }, [st.q]);
  // load more as the end of the list comes near
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setShown((n) => n + BATCH), { rootMargin: "800px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [results]);

  const update = (patch: Partial<BrowseState>) => writeBrowse({ ...st, ...patch });
  const setFacet = (f: string, values: string[]) => {
    const facets = { ...st.facets, [f]: values };
    // sites only exist among the recreations
    if (f === "source" && values.length && !values.includes("foundry")) facets.site = [];
    update({ facets });
  };
  const anyFilter = FACET_KEYS.some((f) => st.facets[f].length) || st.q;
  const showSite = !st.facets.source.length || st.facets.source.includes("foundry");
  const title = browseTitle(st);
  const plain = st.type === "all" && !st.facets.source.length;

  return (
    <div className="page">
      <div className="page-head">
        <h1>{title}</h1>
        <p>{plain ? `Every block, component and theme in this gallery (${results.length}).` : `${results.length} shown with the current filters.`}</p>
      </div>
      <div className="filters">
        <div className="filters-row">
          <div className="seg" role="tablist">
            {["all", "block", "component", "theme"].map((t) => (
              <button key={t} role="tab" aria-selected={st.type === t} className={st.type === t ? "on" : ""} onClick={() => update({ type: t })}>
                {t === "all" ? "All" : TYPE_LABEL[t]}
                <span className="n">{filterItems({ ...st, type: t }).length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="filters-row">
          <label className="input-wrap grow">
            <Search className="i" />
            <input
              className="input"
              placeholder="Filter by name, tag, description…"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                update({ q: e.target.value });
              }}
            />
          </label>
          {FACET_KEYS.filter((f) => f !== "site" || showSite).map((f) => (
            <FacetButton key={f} facet={f} st={st} onChange={(v) => setFacet(f, v)} />
          ))}
          {anyFilter && (
            <button className="btn ghost" onClick={() => update({ q: "", facets: Object.fromEntries(FACET_KEYS.map((f) => [f, []])) })}>
              Reset <X className="i" />
            </button>
          )}
          <div className="right">
            <span className="result-count">
              {results.length} result{results.length === 1 ? "" : "s"}
            </span>
            <div className="seg" aria-label="Sort">
              {[
                ["relevance", "Type"],
                ["name", "A–Z"],
                ["newest", "Newest"],
              ].map(([v, l]) => (
                <button key={v} className={st.sort === v ? "on" : ""} onClick={() => update({ sort: v })}>
                  {l}
                </button>
              ))}
            </div>
            <div className="seg">
              {(["grid", "list"] as const).map((v) => (
                <button key={v} className={view === v ? "on" : ""} aria-label={`${v} view`} onClick={() => setSettings({ view: v })}>
                  {v === "grid" ? <LayoutGrid className="i" /> : <List className="i" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {results.length ? (
        <div className={view === "list" ? "list" : "grid"}>
          {results.slice(0, shown).map((i) => (view === "list" ? <ItemRow key={i.name} item={i} /> : <ItemCard key={i.name} item={i} />))}
        </div>
      ) : (
        <div className="empty">
          Nothing matches.
          <br />
          <button className="btn" style={{ marginTop: 12 }} onClick={() => update({ q: "", facets: Object.fromEntries(FACET_KEYS.map((f) => [f, []])) })}>
            Reset filters
          </button>
        </div>
      )}
      <div className="sentinel" ref={sentinel} />
    </div>
  );
}

function FacetButton({ facet, st, onChange }: { facet: string; st: BrowseState; onChange: (values: string[]) => void }) {
  const f = FACETS[facet];
  const selected = st.facets[facet];
  return (
    <PopoverButton
      className="btn dashed"
      minWidth={240}
      render={(close) => <FacetList facet={facet} st={st} onChange={onChange} close={close} />}
    >
      <CirclePlus className="i" />
      {f.label}
      {selected.length > 0 && (
        <span className="facet-vals">
          {selected.length > 2 ? (
            <span className="badge">{selected.length} selected</span>
          ) : (
            selected.map((v) => (
              <span key={v} className="badge">
                {f.name(v)}
              </span>
            ))
          )}
        </span>
      )}
    </PopoverButton>
  );
}

function FacetList({ facet, st, onChange, close }: { facet: string; st: BrowseState; onChange: (values: string[]) => void; close: () => void }) {
  const f = FACETS[facet];
  const selected = st.facets[facet];
  const [needle, setNeedle] = useState("");
  const counts = useMemo(() => Object.fromEntries(f.values().map((v) => [v, filterItems({ ...st, facets: { ...st.facets, [facet]: [v] } }).length])), [st, facet]);
  const values = f
    .values()
    .filter((v) => counts[v] || selected.includes(v))
    .sort((a, b) => (facet === "category" ? counts[b] - counts[a] : 0));
  const visible = values.filter((v) => f.name(v).toLowerCase().includes(needle.toLowerCase()));
  return (
    <>
      {values.length > 8 && (
        <div className="search">
          <input autoFocus placeholder={`${f.label}…`} value={needle} onChange={(e) => setNeedle(e.target.value)} />
        </div>
      )}
      <div className="scroll">
        {visible.length ? (
          visible.map((v) => {
            const on = selected.includes(v);
            return (
              <button key={v} className={`opt${!counts[v] && !on ? " faint" : ""}`} onClick={() => onChange(on ? selected.filter((x) => x !== v) : [...selected, v])}>
                <span className={`chk${on ? " on" : ""}`}>{on && <Check className="i" />}</span>
                {f.name(v)}
                <span className="n">{counts[v]}</span>
              </button>
            );
          })
        ) : (
          <div className="muted" style={{ padding: 10, fontSize: 13 }}>
            No match
          </div>
        )}
      </div>
      {selected.length > 0 && (
        <>
          <hr />
          <button
            className="opt"
            style={{ justifyContent: "center" }}
            onClick={() => {
              onChange([]);
              close();
            }}
          >
            Clear
          </button>
        </>
      )}
    </>
  );
}
