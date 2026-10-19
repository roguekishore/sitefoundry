// The run pages: start a recreation (Gemini or Claude) and follow it. They talk to the foundry
// server (packages/server): `pnpm serve` on the laptop, the preview instance in the cloud.
//   #/runs          the run instance's switch and every run
//   #/runs/new      the form
//   #/runs/<id>     one run: its log, its calls with tokens and cost, its details
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ExternalLink, Play, Plus, Power, RotateCcw, Square } from "lucide-react";
import type { Backend, Call, MachineInfo, Options, Run, RunEvent, RunRequest, Usage } from "../../../../packages/server/src/shared";
import { navigate, type Route } from "../state";

// ---------- talking to the server ----------

class ApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

async function api<T>(path: string, init?: { method?: string; body?: unknown }): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/${path}`, {
      method: init?.method ?? "GET",
      headers: init?.body ? { "content-type": "application/json" } : undefined,
      body: init?.body ? JSON.stringify(init.body) : undefined,
    });
  } catch {
    throw new ApiError(0, "The foundry server isn't answering.");
  }
  if (res.status === 401) {
    location.href = "/login";
    throw new ApiError(401, "Log in first.");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(res.status, data.error ?? `The server answered ${res.status}.`);
  return data as T;
}

/** Fetches `path` now and every `everyMs` while `live` is true. */
function usePoll<T>(path: string | null, everyMs: number, live = true): { data?: T; error?: ApiError; reload: () => void } {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<ApiError>();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!path) return;
    let stop = false;
    const load = () =>
      api<T>(path)
        .then((d) => !stop && (setData(d), setError(undefined)))
        .catch((e) => !stop && setError(e));
    load();
    const timer = live ? setInterval(load, everyMs) : undefined;
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [path, everyMs, live, tick]);
  return { data, error, reload: () => setTick((t) => t + 1) };
}

// ---------- formatting ----------

const usd = (n: number) => (n >= 100 ? `$${n.toFixed(0)}` : `$${n.toFixed(2)}`);
const tokens = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n));
function ago(iso: string | null): string {
  if (!iso) return "";
  const s = (Date.now() - Date.parse(iso)) / 1000;
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short" });
}
function took(run: Run): string {
  if (!run.startedAt) return "";
  const ms = Date.parse(run.endedAt ?? new Date().toISOString()) - Date.parse(run.startedAt);
  const m = Math.round(ms / 60000);
  return m < 60 ? `${m} min` : `${(m / 60).toFixed(1)} h`;
}
const isActive = (r: Run) => r.state === "queued" || r.state === "claimed" || r.state === "running";

const STATE_LABEL: Record<Run["state"], string> = { queued: "Queued", claimed: "Starting", running: "Running", done: "Done", failed: "Failed", stopped: "Stopped", held: "Held" };
/** `stopping`: Stop was pressed and the runner hasn't stopped yet. */
export function StateBadge({ state, stopping }: { state: Run["state"]; stopping?: boolean }) {
  return <span className={`badge run-${state}`}>{stopping ? "Stopping…" : STATE_LABEL[state]}</span>;
}

function Problem({ error }: { error: ApiError }) {
  return (
    <div className="panel run-problem">
      <b>{error.message}</b>
      {error.status === 0 && (
        <p className="muted">
          On this computer: <code>pnpm build:server</code> once, then <code>pnpm serve</code>, and open <code>http://localhost:4401</code> (or keep this gallery open; it passes <code>/api</code> to it).
        </p>
      )}
    </div>
  );
}

// ---------- #/runs ----------

export function RunsPage({ route }: { route: Route }) {
  const [, second] = route.parts;
  if (second === "new") return <NewRun />;
  if (second && /^\d+$/.test(second)) return <RunPage key={second} id={Number(second)} />;
  return <RunList />;
}

function RunList() {
  const runs = usePoll<Run[]>("runs", 4000);
  return (
    <div className="page runs">
      <div className="page-head run-head">
        <div>
          <h1>Runs</h1>
          <p>Recreate a site with Gemini or Claude, unattended. Each run works on a branch of its own.</p>
        </div>
        <a className="btn primary" href="#/runs/new">
          <Plus className="i" />
          New run
        </a>
      </div>
      <MachineSwitch />
      {runs.error && <Problem error={runs.error} />}
      {runs.data && !runs.data.length && <div className="empty">No runs yet.</div>}
      {runs.data && runs.data.length > 0 && (
        <div className="run-list">
          {runs.data.map((r) => (
            <a key={r.id} className="run-row" href={`#/runs/${r.id}`}>
              <span className="run-id mono">#{r.id}</span>
              <span className="run-what">
                <b>{r.slug}</b>
                {r.pages.length > 0 && <span className="muted"> + {r.pages.join(", ")}</span>}
                <small className="muted">
                  {r.backend} · {r.model}
                  {r.effort ? ` · ${r.effort}` : ""}
                  {r.prompt ? " · own prompt" : ""}
                </small>
              </span>
              <StateBadge state={r.state} />
              <span className="run-num">
                {usd(r.usage.usd)}
                <small className="muted">{r.usage.calls} calls</small>
              </span>
              <span className="run-when muted">{isActive(r) ? took(r) || ago(r.createdAt) : ago(r.endedAt ?? r.createdAt)}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const MACHINE_LABEL: Record<MachineInfo["state"], string> = { off: "Off", starting: "Starting", on: "On", stopping: "Switching off", unknown: "Unknown" };

function MachineSwitch() {
  const machine = usePoll<MachineInfo>("machine", 5000);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();
  const m = machine.data;
  if (!m) return machine.error ? null : <div className="panel machine" />;
  const toggle = async (on: boolean) => {
    setBusy(true);
    setError(undefined);
    try {
      await api("machine", { method: "POST", body: { on } });
      machine.reload();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const on = m.state === "on" || m.state === "starting";
  return (
    <div className="panel machine">
      <span className={`machine-dot ${m.state}`} />
      <div>
        <b>Run instance: {MACHINE_LABEL[m.state]}</b>
        <small className="muted">
          {m.kind === "local" ? "a process on this computer" : "an EC2 instance"}; switches on for queued work and off after {m.idleMinutes} min without any
          {m.runnerSeen ? ` · runner seen ${ago(m.runnerSeen)}` : ""}
        </small>
        {error && <small className="run-bad">{error}</small>}
      </div>
      <button className="btn sm" disabled={busy || m.state === "stopping"} onClick={() => toggle(!on)}>
        <Power className="i" />
        {on ? "Switch off" : "Switch on"}
      </button>
    </div>
  );
}

// ---------- #/runs/new ----------

const DRAFT_KEY = "foundry:run-draft";

function NewRun() {
  const options = usePoll<Options>("options", 0, false);
  const [form, setForm] = useState<RunRequest>(() => {
    try {
      return { url: "", target: "", backend: "gemini", model: "gemini-4-argon", effort: null, prompt: null, ...JSON.parse(localStorage.getItem(DRAFT_KEY) ?? "{}") };
    } catch {
      return { url: "", target: "", backend: "gemini", model: "gemini-4-argon" };
    }
  });
  const [ownPrompt, setOwnPrompt] = useState(Boolean(form.prompt));
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string>();
  const o = options.data;

  // Remember the choices (not the URL) for next time.
  useEffect(() => {
    try {
      const { url: _u, target: _t, ...keep } = form;
      localStorage.setItem(DRAFT_KEY, JSON.stringify(keep));
    } catch {
      // private mode
    }
  }, [form]);

  if (options.error) return <div className="page"><Problem error={options.error} /></div>;
  if (!o) return <div className="page" />;

  const set = (patch: Partial<RunRequest>) => setForm((f) => ({ ...f, ...patch }));
  const pickBackend = (backend: Backend) => set({ backend, model: o.backends[backend].models[0], effort: null });
  const b = o.backends[form.backend];
  const [slug, ...pages] = (form.target ?? "").trim().split(/[\s,]+/).filter(Boolean);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(undefined);
    try {
      const run = await api<Run>("runs", {
        method: "POST",
        body: { ...form, prompt: ownPrompt ? form.prompt : null, maxUsd: form.maxUsd ?? o.defaults.maxUsd, maxHours: form.maxHours ?? o.defaults.maxHours },
      });
      navigate(`#/runs/${run.id}`);
    } catch (err) {
      setError((err as Error).message);
      setSending(false);
    }
  };

  return (
    <div className="page runs">
      <div className="page-head">
        <h1>New run</h1>
        <p>The run instance switches on, recreates the site on a branch of its own, and switches off when there's nothing left to do.</p>
      </div>
      <form className="run-form" onSubmit={submit}>
        <Field label="Inspiration URL">
          <input className="field" type="url" inputMode="url" required placeholder="https://linear.app" value={form.url} onChange={(e) => set({ url: e.target.value })} />
        </Field>
        <Field label="Slug and pages" hint={slug ? `foundry/sites/${slug}/ on branch ${form.backend}/${slug}${pages.length ? `, landing page plus ${pages.join(", ")}` : ", landing page only"}` : "The slug first, then any other pages to recreate: linear pricing about"}>
          <input className="field" required autoCapitalize="none" autoCorrect="off" spellCheck={false} placeholder="linear pricing about" value={form.target} onChange={(e) => set({ target: e.target.value })} />
        </Field>
        <Field label="Agent" group>
          <div className="seg wide">
            {(Object.keys(o.backends) as Backend[]).map((k) => (
              <button key={k} type="button" className={form.backend === k ? "on" : ""} aria-pressed={form.backend === k} onClick={() => pickBackend(k)}>
                {k === "gemini" ? "Gemini" : "Claude"}
              </button>
            ))}
          </div>
          <small className="muted">{b.label}</small>
        </Field>
        <div className="run-form-row">
          <Field label="Model">
            <select className="field" value={form.model} onChange={(e) => set({ model: e.target.value })}>
              {b.models.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </Field>
          {b.efforts.length > 0 && (
            <Field label="Effort">
              <select className="field" value={form.effort ?? ""} onChange={(e) => set({ effort: e.target.value || null })}>
                <option value="">CLI default</option>
                {b.efforts.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Field>
          )}
        </div>
        <div className="run-form-row">
          <Field label="Spending cap (USD)" hint={form.backend === "claude" ? "On a subscription: what the API would charge" : undefined}>
            <input className="field" type="number" inputMode="decimal" min={0.5} max={100} step={0.5} value={form.maxUsd ?? o.defaults.maxUsd} onChange={(e) => set({ maxUsd: Number(e.target.value) })} />
          </Field>
          <Field label="Time limit (hours)">
            <input className="field" type="number" inputMode="decimal" min={0.25} max={12} step={0.25} value={form.maxHours ?? o.defaults.maxHours} onChange={(e) => set({ maxHours: Number(e.target.value) })} />
          </Field>
        </div>
        <label className="run-check">
          <input type="checkbox" checked={ownPrompt} onChange={(e) => setOwnPrompt(e.target.checked)} />
          <span>
            Use my own prompt instead of /recreate-site
            <small className="muted">The skill is hidden from the agent; it gets only your words plus the unattended rules.</small>
          </span>
        </label>
        {ownPrompt && <textarea className="field" rows={5} required placeholder="Recreate linear.app…" value={form.prompt ?? ""} onChange={(e) => set({ prompt: e.target.value })} />}
        {error && <p className="run-bad">{error}</p>}
        <div>
          <button className="btn primary big" disabled={sending}>
            <Play className="i" />
            {sending ? "Starting…" : "Start the run"}
          </button>
        </div>
      </form>
    </div>
  );
}

/** A form field. `group` is for controls other than one input (the agent's buttons): a <label>
 * around buttons would make the label's whole text the first button's name. */
function Field({ label, hint, group, children }: { label: string; hint?: string; group?: boolean; children: ReactNode }) {
  const id = useId();
  const inner = (
    <>
      <span className="lbl" id={id}>{label}</span>
      {children}
      {hint && <small className="muted">{hint}</small>}
    </>
  );
  return group ? <div className="run-field" role="group" aria-labelledby={id}>{inner}</div> : <label className="run-field">{inner}</label>;
}

// ---------- #/runs/<id> ----------

function RunPage({ id }: { id: number }) {
  const [live, setLive] = useState(true);
  const run = usePoll<Run>(`runs/${id}`, 3000, live);
  const options = usePoll<Options>("options", 0, false);
  const [tab, setTab] = useState<"log" | "calls" | "details">("log");
  const [acting, setActing] = useState(false);
  const [error, setError] = useState<string>();
  const r = run.data;
  useEffect(() => {
    if (r) setLive(isActive(r));
  }, [r?.state]);

  if (run.error && !r) return <div className="page"><Problem error={run.error} /></div>;
  if (!r) return <div className="page" />;

  const act = async (what: "stop" | "resume") => {
    setActing(true);
    setError(undefined);
    try {
      await api(`runs/${id}/${what}`, { method: "POST" });
      setLive(true);
      run.reload();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setActing(false);
    }
  };
  const liveUrl = options.data?.liveUrl;

  return (
    <div className="page runs">
      <div className="page-head run-head">
        <div>
          <h1>
            {r.slug} <StateBadge state={r.state} stopping={isActive(r) && r.stopRequested} />
          </h1>
          <p>
            <a href={r.url} target="_blank" rel="noreferrer">
              {r.url}
            </a>
            {r.pages.length > 0 && ` · plus ${r.pages.join(", ")}`}
          </p>
        </div>
        <div className="run-actions">
          {r.preview && (
            <a className="btn primary" href={r.preview} target="_blank" rel="noreferrer">
              <ExternalLink className="i" />
              Open preview
            </a>
          )}
          {r.state === "running" && liveUrl && (
            <a className="btn" href={liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="i" />
              Live gallery
            </a>
          )}
          {isActive(r) && !r.stopRequested && (
            <button className="btn" disabled={acting} onClick={() => act("stop")}>
              <Square className="i" />
              Stop
            </button>
          )}
          {!isActive(r) && r.state !== "done" && (
            <button className="btn" disabled={acting} onClick={() => act("resume")}>
              <RotateCcw className="i" />
              Resume
            </button>
          )}
        </div>
      </div>
      {error && <p className="run-bad">{error}</p>}
      {r.error && <p className="run-bad">{r.error}</p>}

      <div className="run-stats">
        <Stat label="Cost" value={usd(r.usage.usd)} sub={`cap ${usd(r.maxUsd)}`} />
        <Stat label="Calls" value={String(r.usage.calls)} sub={r.usage.errors ? `${r.usage.errors} failed` : "none failed"} />
        <Stat label="Input" value={tokens(r.usage.input + r.usage.cached + r.usage.cacheWrite)} sub={`${tokens(r.usage.cached)} from cache`} />
        <Stat label="Output" value={tokens(r.usage.output + r.usage.thoughts)} sub={r.usage.thoughts ? `${tokens(r.usage.thoughts)} thinking` : "thinking included"} />
        <Stat label="Time" value={took(r) || "–"} sub={`limit ${r.maxHours} h`} />
      </div>
      {Object.keys(r.byModel).length > 1 && <ByModel byModel={r.byModel} />}

      <div className="tabs">
        {(["log", "calls", "details"] as const).map((t) => (
          <button key={t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>
            {t === "log" ? "Log" : t === "calls" ? `Calls (${r.usage.calls})` : "Details"}
          </button>
        ))}
      </div>
      <div className="tab-body">
        {tab === "log" && <Log id={id} live={isActive(r)} />}
        {tab === "calls" && <Calls id={id} live={isActive(r)} />}
        {tab === "details" && <Details run={r} />}
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="panel run-stat">
      <small className="muted">{label}</small>
      <b>{value}</b>
      <small className="muted">{sub}</small>
    </div>
  );
}

function ByModel({ byModel }: { byModel: Record<string, Usage> }) {
  return (
    <div className="panel run-table-wrap">
      <table className="run-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Calls</th>
            <th>New in</th>
            <th>Cached</th>
            <th>Out</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(byModel).map(([m, u]) => (
            <tr key={m}>
              <td className="mono">{m}</td>
              <td>{u.calls}</td>
              <td>{tokens(u.input + u.cacheWrite)}</td>
              <td>{tokens(u.cached)}</td>
              <td>{tokens(u.output + u.thoughts)}</td>
              <td>{usd(u.usd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The run's log, fetched in pieces (only what's new) while it runs, kept scrolled to the end unless you scroll up. */
function Log({ id, live }: { id: number; live: boolean }) {
  const [events, setEvents] = useState<RunEvent[]>([]);
  const [error, setError] = useState<ApiError>();
  const last = useRef(0);
  const box = useRef<HTMLDivElement>(null);
  const follow = useRef(true);
  useEffect(() => {
    let stop = false;
    const load = async () => {
      try {
        // A long log comes in pages of 2,000; keep asking while full pages arrive.
        for (let page = 0; page < 20 && !stop; page++) {
          const fresh = await api<RunEvent[]>(`runs/${id}/events?after=${last.current}`);
          if (!fresh.length || stop) break;
          last.current = fresh[fresh.length - 1].id ?? last.current;
          setEvents((e) => [...e, ...fresh]);
          if (fresh.length < 2000) break;
        }
        setError(undefined);
      } catch (e) {
        setError(e as ApiError);
      }
    };
    load();
    const timer = live ? setInterval(load, 2000) : undefined;
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [id, live]);
  useEffect(() => {
    if (follow.current && box.current) box.current.scrollTop = box.current.scrollHeight;
  }, [events]);
  return (
    <>
      {error && <Problem error={error} />}
      <div
        className="run-log mono"
        ref={box}
        onScroll={(e) => {
          const el = e.currentTarget;
          follow.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
        }}
      >
        {events.map((e) => (
          <div key={e.id} className={`ev ${e.kind}`}>
            <span className="t">{new Date(e.at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</span>
            <span className="x">{e.text}</span>
          </div>
        ))}
        {!events.length && <div className="muted">Nothing yet.</div>}
      </div>
    </>
  );
}

function Calls({ id, live }: { id: number; live: boolean }) {
  const calls = usePoll<(Call & { id: number })[]>(`runs/${id}/calls`, 5000, live);
  if (calls.error) return <Problem error={calls.error} />;
  if (!calls.data) return null;
  if (!calls.data.length) return <div className="empty">No model calls yet.</div>;
  return (
    <div className="panel run-table-wrap">
      <table className="run-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Model</th>
            <th>New in</th>
            <th>Cached</th>
            <th>Out</th>
            <th>Cost</th>
            <th>Took</th>
          </tr>
        </thead>
        <tbody>
          {calls.data
            .slice()
            .reverse()
            .map((c, i) => (
              <tr key={c.id} className={c.status >= 400 ? "bad" : ""}>
                <td className="muted">{calls.data!.length - i}</td>
                <td>{new Date(c.at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</td>
                <td className="mono">
                  {c.model}
                  {c.status >= 400 ? ` · ${c.status}` : ""}
                  {c.attempt ? ` · r${c.attempt}` : ""}
                </td>
                <td>{tokens(c.input + c.cacheWrite)}</td>
                <td>{tokens(c.cached)}</td>
                <td>{tokens(c.output + c.thoughts)}</td>
                <td>{usd(c.usd)}</td>
                <td className="muted">{c.ms == null ? "" : `${(c.ms / 1000).toFixed(1)} s`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function Details({ run: r }: { run: Run }) {
  const rows: [string, ReactNode][] = [
    ["Agent", `${r.backend} · ${r.model}${r.effort ? ` · effort ${r.effort}` : ""}`],
    ["Prompt", r.prompt ?? "/recreate-site"],
    ["Branch", r.branch ? <code>{r.branch}</code> : "–"],
    ["Note", r.note ?? "–"],
    ["Queued", new Date(r.createdAt).toLocaleString()],
    ["Started", r.startedAt ? new Date(r.startedAt).toLocaleString() : "–"],
    ["Ended", r.endedAt ? new Date(r.endedAt).toLocaleString() : "–"],
    ["Restarts", String(r.attempt)],
    ["Preview", r.preview ? <a href={r.preview}>{r.preview}</a> : "built when the run ends with commits"],
  ];
  return (
    <>
      <dl className="kv run-kv">
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: "contents" }}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      {r.commits && (
        <>
          <h3 className="run-sub">Commits</h3>
          <pre className="run-log mono short">{r.commits}</pre>
        </>
      )}
      {r.branch && (
        <>
          <h3 className="run-sub">Take it into main (on the laptop)</h3>
          <pre className="run-log mono short">{`# a run on this computer\ngit merge ${r.branch}\n\n# a run in the cloud (its branch was pushed)\ngit fetch origin\ngit merge origin/${r.branch}`}</pre>
        </>
      )}
    </>
  );
}
