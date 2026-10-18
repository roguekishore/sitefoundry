// Developer and platform vignettes: embedded dashboard with code callouts, code editor,
// chat + QR payment link, wall of app tiles.
import type { ReactNode } from "react";
import {
  Blocks,
  Boxes,
  Cloud,
  Feather,
  Flame,
  Hexagon,
  Layers,
  Leaf,
  MessageSquare,
  Orbit,
  Rocket,
  ShoppingCart,
  Sparkles,
  Store,
  Waves,
  Zap,
} from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrowserWindow, Initial, float, noise } from "./parts";

/** An app's dashboard embedded in a platform, with floating "component + code" callouts. */
export interface DashboardMock {
  kind: "dashboard";
  url: string;
  app: string;
  nav: string[];
  /** which nav item is current */
  current?: number;
  greeting: string;
  offer: { expires: string; title: string; text: string; action: string };
  payments: { title: string; columns: [string, string, string, string]; rows: { amount: string; status: string; ok: boolean; method: string; note: string }[] };
  /** floating callouts: a title, a line of description, one line of code */
  callouts: { title: string; text: string; code: string }[];
}

/** A code editor with an autocomplete list, a modal status line and a terminal. */
export interface EditorMock {
  kind: "editor";
  /** code lines; 'quoted' strings and a few keywords are coloured */
  lines: string[];
  /** autocomplete suggestions; the third is shown selected */
  suggestions: string[];
  /** line after which the suggestions open */
  suggestAt: number;
  status: { mode: string; file: string; position: string };
  terminal: string[];
}

/** A support chat that hands over a payment link, beside a price card with a QR code. */
export interface QrChatMock {
  kind: "qr-chat";
  question: string;
  answer: string;
  link: string;
  product: string;
  price: string;
  scan: string;
}

/** A staggered wall of colourful app tiles, cropped at the edges (no text). */
export interface AppsMock {
  kind: "apps";
}

export type DeveloperMock = DashboardMock | EditorMock | QrChatMock | AppsMock;

const sidebarTint = "bg-[color-mix(in_oklab,var(--chart-3)_35%,var(--foreground))]";
const pinkInk = "text-[color-mix(in_oklab,var(--chart-2)_55%,var(--foreground))]";

function Dashboard(m: DashboardMock) {
  return (
    <div className="relative h-full">
      <BrowserWindow url={m.url} className="absolute inset-x-[4%] top-4 bottom-0 rounded-b-none sm:inset-x-[17%] sm:top-4">
        <div className="grid h-full grid-cols-[4.5rem_1fr] text-[0.5rem] sm:grid-cols-[6.5rem_1fr]">
          <div className={cn("space-y-1.5 p-3 text-background", sidebarTint)}>
            <p className="mb-3 flex items-center gap-1 text-[0.6rem] font-normal">
              <Initial letter={m.app[0]} hue={3} className="size-4" />
              {m.app}
            </p>
            {m.nav.map((n, i) => (
              <p key={n} className={cn("font-normal", i === (m.current ?? 1) && "text-chart-2")}>
                {n}
              </p>
            ))}
          </div>
          <div className="space-y-2.5 bg-[color-mix(in_oklab,var(--chart-2)_4%,var(--card))] p-4">
            <p className={cn("text-[0.6rem] font-normal", pinkInk)}>{m.greeting}</p>
            <div className="h-10 rounded border border-dashed border-chart-2/40" />
            <div className="grid grid-cols-[0.6fr_1fr] gap-2">
              <div className="rounded border border-chart-2/25" />
              <div className="rounded border border-chart-2/40 bg-card p-2.5">
                <p className="text-[0.45rem] text-muted-foreground">{m.offer.expires}</p>
                <p className="mt-1 text-[0.6rem] font-normal">{m.offer.title}</p>
                <p className="mt-1 text-muted-foreground">{m.offer.text}</p>
                <p className={cn("mt-2 w-2/3 rounded bg-chart-2/25 py-1.5 text-center", pinkInk)}>{m.offer.action}</p>
              </div>
            </div>
            <div className="rounded border border-chart-2/25 bg-card p-2.5">
              <p className="text-[0.6rem] font-normal">{m.payments.title}</p>
              <div className="mt-2 grid grid-cols-4 gap-2 border-b border-border pb-1 text-[0.45rem] text-muted-foreground">
                {m.payments.columns.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              {m.payments.rows.map((r) => (
                <div key={r.amount + r.method} className="grid grid-cols-4 items-center gap-2 border-b border-border py-1 last:border-0">
                  <span className="tabular-nums">{r.amount}</span>
                  <span>
                    <span className={cn("rounded-sm border px-1 py-px text-[0.45rem]", r.ok ? "border-chart-3/30 bg-accent text-accent-foreground" : "border-border bg-muted text-muted-foreground")}>
                      {r.status}
                    </span>
                  </span>
                  <span>{r.method}</span>
                  <span>{r.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserWindow>
      {m.callouts.map((c, i) => (
        <div
          key={c.title}
          className={cn(
            "absolute w-[15.5rem] rounded-md bg-card text-[0.5rem] text-card-foreground sm:w-[17rem]",
            float,
            i === 0 ? "bottom-[10%] left-[3%] sm:left-[4%]" : "top-[34%] right-[3%] hidden sm:block",
          )}
        >
          <div className="p-2.5">
            <p className="text-[0.6rem] font-normal">{c.title}</p>
            <p className="mt-0.5 text-muted-foreground">{c.text}</p>
          </div>
          <p className="truncate border-t border-border bg-muted px-2.5 py-2 font-mono text-[0.5rem]">
            <Code text={c.code} />
          </p>
        </div>
      ))}
    </div>
  );
}

/** Colours 'strings', a few keywords and method calls; everything else stays plain. */
function Code({ text }: { text: string }) {
  const parts = text.split(/('[^']*'|\b(?:const|await|return|require|new|import|from)\b|\.\w+(?=\())/g);
  return (
    <>
      {parts.map((p, i) =>
        !p ? null : p.startsWith("'") ? (
          <span key={i} className="text-chart-1">{p}</span>
        ) : /^(const|await|return|require|new|import|from)$/.test(p) ? (
          <span key={i} className="text-chart-2">{p}</span>
        ) : p.startsWith(".") ? (
          <span key={i} className="text-primary">{p}</span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Editor(m: EditorMock) {
  return (
    <div className="dark flex h-full flex-col overflow-hidden bg-card font-mono text-[0.6rem] text-card-foreground">
      <div className="relative flex-1 space-y-1 p-3">
        {m.lines.map((l, i) => (
          <p key={i} className="flex gap-4 whitespace-pre">
            <span className="w-3 text-right text-muted-foreground">{i + 1}</span>
            <span>
              <Code text={l} />
            </span>
          </p>
        ))}
        <div className="absolute left-[36%] rounded-sm bg-secondary py-1 shadow-lg" style={{ top: `calc(${m.suggestAt} * 1.2rem + 0.9rem)` }}>
          {m.suggestions.map((s, i) => (
            <p key={s} className={cn("px-2 py-0.5", i === 2 && "bg-accent")}>
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 bg-secondary pr-3 text-[0.5rem]">
        <span className="bg-chart-5 px-1.5 py-0.5 font-normal text-background">{m.status.mode}</span>
        <span className="text-chart-5">{m.status.file}</span>
        <span className="ml-auto text-muted-foreground">{m.status.position}</span>
      </div>
      <div className="space-y-1 bg-muted p-3 text-[0.55rem]">
        {m.terminal.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  );
}

function Qr({ seed = 7 }: { seed?: number }) {
  const n = 21;
  const finder = (x: number, y: number) => (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  return (
    <div className="grid aspect-square w-full grid-cols-[repeat(21,1fr)] bg-card p-1.5" aria-hidden>
      {Array.from({ length: n * n }, (_, i) => {
        const x = i % n;
        const y = Math.floor(i / n);
        let on = noise(i, seed) > 0.5;
        if (finder(x, y)) {
          const fx = x >= n - 7 ? x - (n - 7) : x;
          const fy = y >= n - 7 ? y - (n - 7) : y;
          const ring = Math.max(Math.abs(fx - 3), Math.abs(fy - 3));
          on = ring !== 2;
        }
        return <span key={i} className={on ? "bg-foreground" : ""} />;
      })}
    </div>
  );
}

function QrChat(m: QrChatMock) {
  return (
    <div className="dark flex h-full items-center gap-3 bg-[color-mix(in_oklab,var(--primary)_22%,var(--background))] p-4 text-[0.5rem] text-foreground">
      <div className="relative flex-1 space-y-2 rounded-md bg-secondary p-3">
        <p className="w-4/5 rounded bg-background p-1.5 text-foreground">{m.question}</p>
        <p className="ml-auto w-4/5 rounded bg-card p-1.5 font-normal">{m.answer}</p>
        <p className="truncate rounded bg-card p-1.5 underline">{m.link}</p>
        <span className="absolute -right-2 -bottom-3 flex size-5 items-center justify-center rounded bg-background">
          <MessageSquare className="size-3" />
        </span>
      </div>
      <div className="w-[38%] shrink-0 space-y-1.5 rounded-md bg-secondary p-3 text-center">
        <p className="font-normal">{m.product}</p>
        <p className="text-sm font-normal tabular-nums">{m.price}</p>
        <div className="rounded bg-card p-1">
          <Qr />
        </div>
        <p className="text-[0.45rem]">{m.scan}</p>
      </div>
    </div>
  );
}

function Apps() {
  const icons = [Zap, Layers, Store, ShoppingCart, Flame, Blocks, Hexagon, Waves, Feather, Sparkles, Cloud, Orbit, Leaf, Rocket, Boxes];
  const fills = [
    "bg-primary text-primary-foreground",
    "bg-card text-foreground",
    "bg-chart-3 text-primary-foreground",
    "bg-chart-4 text-foreground",
    "bg-highlight text-primary-foreground",
    "bg-chart-2 text-primary-foreground",
    "bg-chart-5 text-foreground",
    "bg-chart-1 text-primary-foreground",
  ];
  return (
    <div className="dark flex h-full flex-col justify-center gap-3 overflow-hidden bg-card py-4">
      {[0, 1, 2].map((row) => (
        <div key={row} className={cn("flex gap-3", row === 1 ? "-ml-9" : "ml-0")}>
          {Array.from({ length: 7 }, (_, i) => {
            const n = row * 5 + i;
            const Icon = icons[n % icons.length];
            return (
              <span key={i} className={cn("flex size-12 shrink-0 items-center justify-center rounded-md", fills[(n * 3) % fills.length])}>
                <Icon className="size-6" strokeWidth={2.25} />
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function renderDeveloper(m: DeveloperMock): ReactNode {
  switch (m.kind) {
    case "dashboard":
      return <Dashboard {...m} />;
    case "editor":
      return <Editor {...m} />;
    case "qr-chat":
      return <QrChat {...m} />;
    case "apps":
      return <Apps />;
  }
}
