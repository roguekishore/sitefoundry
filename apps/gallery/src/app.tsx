import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowLeft, Check, Copy, Moon, Search, Sun } from "lucide-react";
import type { IndexEntry, RegistryItem } from "@foundry/core";
import { byName, installCommand, items, ownTheme, registryIndex, sites, themes, type Item } from "./catalog";
import { DeviceFrame } from "./frame";

const WIDTHS = [360, 390, 430, 768, 1280];
const PAGE = 24;

// ---------- settings (remembered per browser) and routing ----------

interface Settings {
  mode: "light" | "dark";
  /** "own" = each block in its own site's theme; "none" = foundry-base defaults */
  theme: string;
  width: number;
}

function useSettings(): [Settings, (patch: Partial<Settings>) => void] {
  const [settings, setSettings] = useState<Settings>(() => {
    const fallback: Settings = { mode: "light", theme: "own", width: 390 };
    try {
      return { ...fallback, ...JSON.parse(localStorage.getItem("foundry:settings") ?? "{}") };
    } catch {
      return fallback;
    }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", settings.mode === "dark");
    try {
      localStorage.setItem("foundry:settings", JSON.stringify(settings));
    } catch {
      // private mode: settings just aren't remembered
    }
  }, [settings]);
  return [settings, (patch) => setSettings((s) => ({ ...s, ...patch }))];
}

function useRoute(): string[] {
  const read = () => location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onHash = () => {
      setRoute(read());
      scrollTo(0, 0);
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

const themeFor = (item: Item | undefined, setting: string) => (setting === "own" ? (ownTheme(item) ?? "none") : setting);
const groupOf = (item: Item) => item.meta.site ?? item.meta.source ?? "foundry";

// ---------- app ----------

export function App() {
  const [settings, set] = useSettings();
  const route = useRoute();
  const [query, setQuery] = useState("");

  let page: ReactNode;
  if (route[0] === "item" && route[1]) page = <ItemPage name={route[1]} settings={settings} set={set} />;
  else if (route[0] === "site" && route[1]) page = <SitePage site={route[1]} settings={settings} set={set} />;
  else page = <ListPage query={query} settings={settings} set={set} />;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[90rem] items-center gap-3 px-4">
          <a href="#/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-md bg-foreground text-[13px] font-bold text-background">F</span>
            <span className="hidden sm:inline">Foundry</span>
          </a>
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (route.length) location.hash = "#/";
              }}
              placeholder={`Search ${items.length} items`}
              className="h-9 w-full rounded-lg border bg-muted/50 pl-9 pr-3 text-sm outline-none focus:border-ring focus:bg-background"
            />
          </label>
          <IconButton label={settings.mode === "dark" ? "Light mode" : "Dark mode"} onClick={() => set({ mode: settings.mode === "dark" ? "light" : "dark" })}>
            {settings.mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </IconButton>
        </div>
      </header>
      <main className="mx-auto max-w-[90rem] px-4 pb-24 pt-5">{page}</main>
    </div>
  );
}

// ---------- list ----------

function ListPage({ query, settings, set }: { query: string; settings: Settings; set: (p: Partial<Settings>) => void }) {
  const [type, setType] = useState("all");
  const [group, setGroup] = useState("all");
  const [category, setCategory] = useState("all");
  const [shown, setShown] = useState(PAGE);

  const groups = useMemo(() => [...new Set(items.map(groupOf))].sort(), []);
  const categories = useMemo(() => [...new Set(items.map((i) => i.meta.category).filter((c): c is string => !!c))].sort(), []);

  const filtered = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((i) => {
      if (type !== "all" && i.meta.type !== type) return false;
      if (group !== "all" && groupOf(i) !== group) return false;
      if (category !== "all" && i.meta.category !== category) return false;
      const text = [i.name, i.meta.title, i.meta.description, i.meta.category, groupOf(i), ...(i.meta.tags ?? []), ...(i.meta.notes ?? [])]
        .join(" ")
        .toLowerCase();
      return words.every((w) => text.includes(w));
    });
  }, [query, type, group, category]);

  useEffect(() => setShown(PAGE), [query, type, group, category]);

  return (
    <>
      <div className="-mx-4 mb-5 flex items-center gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        <Select value={type} onChange={setType} options={[["all", "All types"], ["block", "Blocks"], ["component", "Components"], ["theme", "Themes"], ["lib", "Libraries"], ["asset", "Assets"]]} />
        <Select value={group} onChange={setGroup} options={[["all", "All sites & sources"], ...groups.map((g) => [g, g] as [string, string])]} />
        <Select value={category} onChange={setCategory} options={[["all", "All categories"], ...categories.map((c) => [c, c] as [string, string])]} />
        <div className="flex shrink-0 items-center gap-2 md:ml-auto">
          <ThemePicker settings={settings} set={set} />
          <WidthPicker settings={settings} set={set} />
        </div>
      </div>

      {sites.length > 0 && !query && type === "all" && group === "all" && category === "all" && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">Recreated sites</h2>
          <div className="flex flex-wrap gap-2">
            {sites.map((s) => (
              <a key={s} href={`#/site/${s}`} className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent">
                {s} — full page
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="mb-3 text-sm text-muted-foreground">{filtered.length} item{filtered.length === 1 ? "" : "s"}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filtered.slice(0, shown).map((item) => (
          <Card key={item.name} item={item} settings={settings} />
        ))}
      </div>
      {shown < filtered.length && (
        <div className="mt-6 text-center">
          <button onClick={() => setShown((n) => n + PAGE)} className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-accent">
            Show more ({filtered.length - shown} left)
          </button>
        </div>
      )}
    </>
  );
}

function Card({ item, settings }: { item: Item; settings: Settings }) {
  const target = item.meta.type === "theme" ? { specimen: item.name } : item.hasDemo ? { item: item.name } : undefined;
  return (
    <a href={`#/item/${item.name}`} className="group flex flex-col overflow-hidden rounded-xl border bg-card transition hover:border-foreground/25 hover:shadow-sm">
      <div className="h-[260px] overflow-hidden border-b bg-muted/40">
        {target ? (
          <DeviceFrame target={target} width={settings.width} theme={themeFor(item, settings.theme)} mode={settings.mode} maxHeight={260} inert lazy />
        ) : (
          <div className="grid h-full place-items-center font-mono text-xs text-muted-foreground">{item.meta.entry}</div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate font-mono text-[13px] font-medium">{item.name}</span>
          <span className="shrink-0 text-xs text-muted-foreground">{item.meta.version}</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.meta.description ?? item.meta.title}</p>
        <Badges item={item} />
      </div>
    </a>
  );
}

// ---------- one item ----------

function ItemPage({ name, settings, set }: { name: string; settings: Settings; set: (p: Partial<Settings>) => void }) {
  const item = byName.get(name);
  const [entry, setEntry] = useState<IndexEntry>();
  const [tab, setTab] = useState<"props" | "code" | "details">("props");
  useEffect(() => {
    registryIndex().then((index) => setEntry(index.get(name)));
  }, [name]);

  if (!item) return <p className="text-muted-foreground">No item called “{name}”. <a href="#/" className="underline">Back to all items</a></p>;
  const target = item.meta.type === "theme" ? { specimen: item.name } : item.hasDemo ? { item: item.name } : undefined;
  const theme = themeFor(item, settings.theme);

  return (
    <div className="space-y-5">
      <a href="#/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All items
      </a>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">{item.meta.title}</h1>
          <p className="font-mono text-sm text-muted-foreground">
            {item.name} · {item.meta.version}
          </p>
          {item.meta.description && <p className="max-w-2xl text-muted-foreground">{item.meta.description}</p>}
          <Badges item={item} />
          {(item.meta.notes ?? []).map((n) => (
            <p key={n} className="text-sm">
              <span className="text-muted-foreground">Note:</span> {n}
            </p>
          ))}
        </div>
        <CopyCommand command={installCommand(item)} />
      </div>

      {target && (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <WidthPicker settings={settings} set={set} />
            {item.meta.type !== "theme" && <ThemePicker settings={settings} set={set} />}
            <span className="text-xs text-muted-foreground">showing {theme === "none" ? "base defaults" : theme}</span>
          </div>
          <div className="overflow-hidden rounded-xl border bg-muted/30">
            <DeviceFrame target={target} width={settings.width} theme={theme} mode={settings.mode} />
          </div>
        </>
      )}

      <div className="flex gap-1 border-b">
        {(["props", "code", "details"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`-mb-px border-b-2 px-3 py-2 text-sm capitalize ${tab === t ? "border-foreground font-medium" : "border-transparent text-muted-foreground"}`}>
            {t}
          </button>
        ))}
      </div>
      {!entry && <p className="text-sm text-muted-foreground">Not in the registry yet: run <code className="font-mono">pnpm build:registry</code>.</p>}
      {entry && tab === "props" && <PropsTable entry={entry} />}
      {entry && tab === "code" && <Code name={name} />}
      {entry && tab === "details" && <Details entry={entry} />}
    </div>
  );
}

function PropsTable({ entry }: { entry: IndexEntry }) {
  if (!entry.props?.length) return <p className="text-sm text-muted-foreground">No props.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-muted-foreground">
          <tr>
            <th className="py-2 pr-4 font-medium">Prop</th>
            <th className="py-2 pr-4 font-medium">Type</th>
            <th className="py-2 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody>
          {entry.props.map((p) => (
            <tr key={p.name} className="border-t align-top">
              <td className="py-2 pr-4 font-mono text-[13px]">
                {p.name}
                {p.required ? "" : "?"}
              </td>
              <td className="py-2 pr-4 font-mono text-[13px] text-muted-foreground">{p.type}</td>
              <td className="py-2 text-muted-foreground">
                {[p.description, p.default !== undefined ? `default ${p.default}` : ""].filter(Boolean).join(" · ")}
              </td>
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
    fetch(`/r/${name}.json`).then((r) => r.json()).then(setBuilt).catch(() => setBuilt(undefined));
  }, [name]);
  if (!built) return null;
  const text = built.files.filter((f) => f.encoding !== "base64");
  const current = text[file];
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1">
        {text.map((f, i) => (
          <button key={f.path} onClick={() => setFile(i)} className={`rounded-md px-2.5 py-1 font-mono text-xs ${i === file ? "bg-accent" : "text-muted-foreground"}`}>
            {f.path}
          </button>
        ))}
      </div>
      {current && <pre className="max-h-[70vh] overflow-auto rounded-xl border bg-muted/40 p-4 font-mono text-[12.5px] leading-relaxed">{current.content}</pre>}
    </div>
  );
}

function Details({ entry }: { entry: IndexEntry }) {
  const rows: [string, ReactNode][] = [
    ["Versions", entry.versions.join(", ")],
    ["Licence", entry.license],
    ["Needs JavaScript", entry.hydrate ? `yes — in Astro use client:${entry.hydrate}` : "no"],
    ["npm packages", Object.entries(entry.dependencies).map(([k, v]) => `${k}@${v}`).join("  ") || "none"],
    ["Uses", entry.registryDependencies.join(", ") || "none"],
    ["Files", entry.files.join(", ")],
    ["In the repo", entry.path],
  ];
  return (
    <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[10rem_1fr]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="break-words font-mono text-[13px]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

// ---------- a whole recreated site ----------

function SitePage({ site, settings, set }: { site: string; settings: Settings; set: (p: Partial<Settings>) => void }) {
  const siteTheme = themes.find((t) => t.meta.site === site)?.name ?? "none";
  const theme = settings.theme === "own" ? siteTheme : settings.theme;
  const blocks = items.filter((i) => i.meta.site === site && i.meta.type !== "theme");
  return (
    <div className="space-y-5">
      <a href="#/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All items
      </a>
      <h1 className="text-2xl font-semibold tracking-tight">{site}</h1>
      <div className="flex flex-wrap items-center gap-2">
        <WidthPicker settings={settings} set={set} />
        <ThemePicker settings={settings} set={set} />
      </div>
      <div className="overflow-hidden rounded-xl border">
        <DeviceFrame target={{ site }} width={settings.width} theme={theme} mode={settings.mode} />
      </div>
      <h2 className="pt-4 text-sm font-medium text-muted-foreground">Its blocks</h2>
      <div className="flex flex-wrap gap-2">
        {blocks.map((b) => (
          <a key={b.name} href={`#/item/${b.name}`} className="rounded-lg border px-3 py-1.5 font-mono text-[13px] hover:bg-accent">
            {b.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// ---------- small pieces ----------

function Badges({ item }: { item: Item }) {
  const { meta } = item;
  const badges = [meta.type, meta.category, groupOf(item), meta.license !== "proprietary" ? meta.license : "", meta.hydrate ? "needs JS" : ""].filter(Boolean);
  return (
    <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
      {badges.map((b) => (
        <span key={b} className="rounded-md bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
          {b}
        </span>
      ))}
    </div>
  );
}

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no clipboard (insecure context): the command is visible to copy by hand
    }
  };
  return (
    <button onClick={copy} className="flex h-11 w-full items-center justify-between gap-3 rounded-lg border bg-muted/50 pl-4 pr-3 font-mono text-sm hover:bg-accent sm:w-auto">
      <span className="truncate">{command}</span>
      {copied ? <Check className="size-4 shrink-0" /> : <Copy className="size-4 shrink-0 text-muted-foreground" />}
    </button>
  );
}

function WidthPicker({ settings, set }: { settings: Settings; set: (p: Partial<Settings>) => void }) {
  return (
    <div className="flex shrink-0 rounded-lg border p-0.5">
      {WIDTHS.map((w) => (
        <button key={w} onClick={() => set({ width: w })} className={`rounded-md px-2.5 py-1 text-xs tabular-nums ${settings.width === w ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>
          {w}
        </button>
      ))}
    </div>
  );
}

function ThemePicker({ settings, set }: { settings: Settings; set: (p: Partial<Settings>) => void }) {
  return (
    <Select
      value={settings.theme}
      onChange={(theme) => set({ theme })}
      options={[["own", "Own theme"], ["none", "Base defaults"], ...themes.map((t) => [t.name, t.meta.title] as [string, string])]}
    />
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="h-9 shrink-0 rounded-lg border bg-background px-2.5 text-sm">
      {options.map(([v, label]) => (
        <option key={v} value={v}>
          {label}
        </option>
      ))}
    </select>
  );
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button aria-label={label} title={label} onClick={onClick} className="grid size-9 shrink-0 place-items-center rounded-lg border hover:bg-accent">
      {children}
    </button>
  );
}
