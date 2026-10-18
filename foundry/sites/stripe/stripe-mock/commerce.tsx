// Commerce vignettes: card terminal + checkout, billing meter, shopping chat, payment card,
// dotted globe, platform receipt + accounts table.
import type { ReactNode } from "react";
import { Gauge, Nfc, ShoppingBag, Wifi } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrowserWindow, Initial, Row, float, noise } from "./parts";

/** A handheld card terminal beside a checkout page in a browser window. */
export interface CheckoutMock {
  kind: "checkout";
  terminal: {
    /** small line over the amount, e.g. "Pay Bluebird Café" */
    merchant: string;
    amount: string;
    /** hint under the amount, e.g. "Tap or insert a card" */
    hint: string;
    lines: { label: string; value: string }[];
    action: string;
  };
  page: {
    url: string;
    /** the shop's name in caps at the top of the page */
    shop: string;
    emailLabel: string;
    email: string;
    /** the two express-pay buttons */
    express: [string, string];
    /** small word between the express buttons and the methods, e.g. "or" */
    divider: string;
    methodsLabel: string;
    /** payment methods; the one with `note` is shown selected */
    methods: { label: string; note?: string }[];
    action: string;
    summary: { title: string; product: string; price: string; lines: { label: string; value: string }[]; total: { label: string; value: string } };
  };
}

/** A plan card with a usage meter over a bar chart of usage. */
export interface BillingMock {
  kind: "billing";
  plan: string;
  cadence: string;
  item: string;
  rate: string;
  meterLabel: string;
  /** how full the meter is, 0–1 */
  meter: number;
  chartLabel: string;
  chartValue: string;
}

/** A shopping chat: the customer's question, the assistant's answer and two product cards. */
export interface ChatShopMock {
  kind: "chat-shop";
  question: string;
  answer: string;
  products: { name: string; variant: string; price: string; shop: string }[];
  action: string;
}

/** A tall payment card in an iridescent ribbon of colour, with chip and contactless mark. */
export interface CardMock {
  kind: "card";
  /** the network or brand word at the bottom right */
  brand: string;
}

/** A globe drawn from scattered coloured dots (no text). */
export interface GlobeMock {
  kind: "globe";
}

/** A receipt card overlapping a "connected accounts" table in a browser window. */
export interface PlatformMock {
  kind: "platform";
  url: string;
  /** the platform's name in the window's sidebar */
  app: string;
  receipt: { business: string; heading: string; text: string; lines: { label: string; value: string }[]; total: { label: string; value: string } };
  table: { title: string; columns: [string, string, string, string]; rows: [string, string, string, string][] };
}

export type CommerceMock = CheckoutMock | BillingMock | ChatShopMock | CardMock | GlobeMock | PlatformMock;

function Checkout({ terminal, page }: CheckoutMock) {
  return (
    <div className="relative flex h-full items-end gap-4 pl-3 sm:pl-6">
      {/* the reader */}
      <div className={cn("relative z-10 mb-4 w-[9.5rem] shrink-0 rounded-[1.25rem] bg-foreground p-1.5 sm:w-[10.5rem]", float)}>
        <div className="rounded-[0.9rem] bg-card px-2.5 pt-5 pb-2.5 text-center text-card-foreground">
          <Nfc className="mx-auto size-4 text-muted-foreground" strokeWidth={1.5} />
          <p className="mt-3 text-[0.5rem] text-muted-foreground">{terminal.merchant}</p>
          <p className="mt-0.5 text-[1.375rem] leading-tight font-normal tabular-nums">{terminal.amount}</p>
          <p className="mt-1 text-[0.45rem] text-muted-foreground">{terminal.hint}</p>
          <div className="mt-4 text-left text-[0.5rem] text-muted-foreground">
            {terminal.lines.map((l, i) => (
              <Row key={l.label} label={l.label} value={l.value} strong={i === terminal.lines.length - 1} />
            ))}
          </div>
          <div className="mt-3 rounded bg-highlight/15 py-1.5 text-[0.5rem] font-normal text-highlight">{terminal.action}</div>
        </div>
        <span className="mx-auto mt-1.5 block h-1 w-10 rounded-full bg-background/20" />
      </div>

      {/* the checkout page, cropped by the tile on the right */}
      <BrowserWindow url={page.url} className="relative -mr-20 mb-0 min-w-[26rem] flex-1 rounded-b-none border-b-0 sm:-mr-6">
        <div className="grid grid-cols-[1fr_0.85fr] text-[0.5rem]">
          <div className="space-y-2.5 border-r border-border p-4">
            <p className="text-[0.55rem] font-normal tracking-[0.08em] uppercase">{page.shop}</p>
            <div>
              <p className="text-muted-foreground">{page.emailLabel}</p>
              <p className="mt-1 rounded border border-border px-1.5 py-1">{page.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <span className="rounded bg-chart-4/70 py-1.5 text-center font-normal text-foreground">{page.express[0]}</span>
              <span className="rounded bg-foreground py-1.5 text-center font-normal text-background">{page.express[1]}</span>
            </div>
            <p className="text-center text-muted-foreground">{page.divider}</p>
            <div>
              <p className="mb-1 text-muted-foreground">{page.methodsLabel}</p>
              <div className="rounded border border-border">
                {page.methods.map((m) => (
                  <div key={m.label} className="flex gap-1.5 border-b border-border px-1.5 py-1.5 last:border-0">
                    <span className={cn("mt-px size-1.5 shrink-0 rounded-full border border-foreground/30", m.note && "border-[3px] border-foreground")} />
                    <span>
                      {m.label}
                      {m.note && <span className="mt-0.5 block text-[0.45rem] text-muted-foreground">{m.note}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded bg-highlight/15 py-1.5 text-center font-normal text-highlight">{page.action}</div>
          </div>
          <div className="space-y-2 p-4">
            <p className="text-[0.55rem] font-normal">{page.summary.title}</p>
            <div className="flex gap-2">
              <span className="flex size-10 items-center justify-center rounded bg-muted">
                <ShoppingBag className="size-4 text-foreground/70" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-normal">{page.summary.product}</p>
                <p className="mt-1 text-muted-foreground">{page.summary.price}</p>
              </div>
            </div>
            <div className="pt-2 text-muted-foreground">
              {page.summary.lines.map((l) => (
                <Row key={l.label} label={l.label} value={l.value} />
              ))}
              <Row label={page.summary.total.label} value={page.summary.total.value} strong className="mt-1" />
            </div>
          </div>
        </div>
      </BrowserWindow>
    </div>
  );
}

function Billing(m: BillingMock) {
  const bars = Array.from({ length: 32 }, (_, i) => 0.15 + noise(i, 3) * 0.55 + (i > 18 && i < 26 ? 0.25 : 0));
  return (
    <div className="mx-auto flex w-full max-w-[17rem] flex-col gap-1.5">
      <div className={cn("rounded-md bg-card p-3 text-[0.55rem] text-card-foreground", float)}>
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded border border-border text-primary">
            <Gauge className="size-3.5" strokeWidth={1.75} />
          </span>
          <span>
            <span className="block text-[0.65rem] font-normal">{m.plan}</span>
            <span className="block text-muted-foreground">{m.cadence}</span>
          </span>
        </div>
        <p className="mt-3 font-normal">{m.item}</p>
        <p className="text-muted-foreground">{m.rate}</p>
        <p className="mt-3 flex items-center gap-1 font-normal">
          <Gauge className="size-2.5" />
          {m.meterLabel}
        </p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-linear-to-r from-chart-3 via-chart-2 to-chart-4" style={{ width: `${Math.round(m.meter * 100)}%` }} />
        </div>
      </div>
      <div className={cn("rounded-md bg-card p-3 text-[0.55rem] text-card-foreground", float)}>
        <p className="text-muted-foreground">{m.chartLabel}</p>
        <p className="text-[0.65rem] font-normal tabular-nums">{m.chartValue}</p>
        <div className="mt-3 flex h-24 items-end gap-[3px]">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-t-[1px] bg-primary/70" style={{ height: `${Math.min(h, 1) * 100}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatShop(m: ChatShopMock) {
  const tints = ["bg-primary/80", "bg-foreground/85"];
  return (
    <div className="mx-auto w-full max-w-[16.5rem] text-[0.55rem]">
      <p className="ml-6 rounded-md bg-card/90 p-2 leading-snug text-card-foreground shadow-sm">{m.question}</p>
      <p className="mt-2 mr-6 rounded-md bg-card/90 p-2 leading-snug text-card-foreground shadow-sm">{m.answer}</p>
      <div className={cn("mt-2 rounded-md bg-card p-1.5 text-card-foreground", float)}>
        <div className="grid grid-cols-2 gap-1.5">
          {m.products.map((p, i) => (
            <div key={p.name} className="overflow-hidden rounded border border-border">
              <div className="flex h-16 items-center justify-center bg-muted">
                {/* a folded garment: two shoulders and a body */}
                <span className={cn("relative block h-9 w-8 rounded-t-[0.6rem] rounded-b-sm", tints[i % tints.length])}>
                  <span className={cn("absolute top-0 -left-2 h-4 w-2.5 -skew-y-[25deg] rounded-l-sm", tints[i % tints.length])} />
                  <span className={cn("absolute top-0 -right-2 h-4 w-2.5 skew-y-[25deg] rounded-r-sm", tints[i % tints.length])} />
                </span>
              </div>
              <div className="space-y-0.5 p-1.5 text-[0.45rem]">
                <p className="font-normal">{p.name}</p>
                <p className="text-primary">{p.variant}</p>
                <p className="font-normal">{p.price}</p>
                <p className="text-muted-foreground">{p.shop}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1.5 rounded bg-accent py-2 text-center font-normal text-accent-foreground">{m.action}</div>
      </div>
    </div>
  );
}

function Card({ brand }: CardMock) {
  return (
    <div className={cn("relative mx-auto aspect-[0.63] w-full max-w-[12.5rem] overflow-hidden rounded-xl bg-card", float)}>
      <div className="absolute inset-x-0 top-0 h-[72%] bg-linear-to-b from-chart-5/40 via-chart-2/70 to-chart-1/80" />
      <div className="absolute inset-x-0 top-[22%] h-[30%] -skew-y-12 bg-linear-to-r from-chart-2/80 via-chart-3/60 to-chart-5/50 blur-md" />
      <div className="absolute inset-x-0 top-[45%] h-[22%] skew-y-6 bg-linear-to-r from-chart-1/80 via-chart-4/70 to-chart-2/70 blur-md" />
      {/* torn lower edge of the colour */}
      <div className="absolute inset-x-0 top-[70%] h-2 bg-[radial-gradient(circle_at_4px_0,transparent_3px,var(--card)_3.5px)] bg-[length:8px_8px]" />
      <div className="absolute top-[12%] left-[38%] grid h-6 w-7 grid-cols-2 gap-px rounded-[3px] border border-background/80 bg-background/50 p-px">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="rounded-[1px] border border-background/80" />
        ))}
      </div>
      <Wifi className="absolute top-[13%] left-[60%] size-4 rotate-90 text-background/90" strokeWidth={2} />
      <span className="absolute right-4 bottom-3 text-lg font-extrabold tracking-[-0.02em] text-primary italic">{brand}</span>
    </div>
  );
}

function Globe() {
  // Dots on a sphere: longitude/latitude grid, kept on the visible half and on rough "land".
  const dots: { x: number; y: number; r: number; c: string }[] = [];
  const colours = ["bg-chart-3", "bg-primary", "bg-chart-2", "bg-chart-1"];
  for (let i = 0; i < 2600; i++) {
    const lat = Math.asin(noise(i, 1) * 2 - 1);
    const lon = (noise(i, 2) - 0.5) * Math.PI;
    // rough continents: overlapping blobs of "land" on the facing half
    const land = Math.sin(lat * 2.2 + 0.6) * Math.cos(lon * 1.6 - 0.4) + Math.sin(lon * 3.1 + lat * 1.7) * 0.45 > 0.18;
    if (!land) continue;
    const x = 50 + 46 * Math.cos(lat) * Math.sin(lon);
    const y = 50 - 46 * Math.sin(lat);
    dots.push({ x, y, r: 0.3 + noise(i, 4) * 0.45, c: colours[Math.floor(noise(i, 5) * colours.length)] });
  }
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[24rem]">
      <div className="absolute inset-[4%] rounded-full bg-radial from-chart-5/10 to-chart-3/15" />
      {dots.map((d, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full opacity-70", d.c)}
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: `${d.r * 4}px`, height: `${d.r * 4}px` }}
        />
      ))}
    </div>
  );
}

function Platform({ url, app, receipt, table }: PlatformMock) {
  return (
    <div className="relative h-full">
      <BrowserWindow url={url} className="absolute top-0 left-[18%] w-[min(46rem,140%)] rounded-r-none sm:left-[38%]">
        <div className="grid grid-cols-[6.5rem_1fr] text-[0.5rem]">
          <div className="space-y-2 border-r border-border p-3">
            <p className="flex items-center gap-1.5 text-[0.6rem] font-normal">
              <Initial letter={app[0]} hue={3} className="size-4" />
              {app}
            </p>
          </div>
          <div className="p-4">
            <p className="text-[0.65rem] font-normal">{table.title}</p>
            <div className="mt-3 grid grid-cols-[1.4fr_1fr_1.2fr_1.2fr] gap-x-2 border-b border-border pb-1.5 text-muted-foreground">
              {table.columns.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            {table.rows.map((r, i) => (
              <div key={r[0]} className="grid grid-cols-[1.4fr_1fr_1.2fr_1.2fr] items-center gap-x-2 border-b border-border py-1.5 last:border-0">
                <span className="flex items-center gap-1.5 truncate font-normal">
                  <Initial letter={r[0][0]} hue={i} />
                  {r[0]}
                </span>
                <span className="text-muted-foreground">{r[1]}</span>
                <span className="tabular-nums">{r[2]}</span>
                <span className="tabular-nums">{r[3]}</span>
              </div>
            ))}
          </div>
        </div>
      </BrowserWindow>
      <div className={cn("absolute top-[22%] left-[4%] w-[13.5rem] rounded-md bg-card p-3.5 text-[0.5rem] text-card-foreground sm:left-[22%]", float)}>
        <p className="flex items-center gap-1.5 text-[0.7rem] font-normal">
          <Initial letter={receipt.business[0]} hue={2} className="size-5 text-[0.5rem]" />
          {receipt.business}
        </p>
        <p className="mt-3 font-normal">{receipt.heading}</p>
        <p className="text-muted-foreground">{receipt.text}</p>
        <div className="mt-3 text-muted-foreground">
          {receipt.lines.map((l) => (
            <Row key={l.label} label={l.label} value={l.value} className="py-2" />
          ))}
          <Row label={receipt.total.label} value={receipt.total.value} strong className="py-2" />
        </div>
      </div>
    </div>
  );
}

export function renderCommerce(m: CommerceMock): ReactNode {
  switch (m.kind) {
    case "checkout":
      return <Checkout {...m} />;
    case "billing":
      return <Billing {...m} />;
    case "chat-shop":
      return <ChatShop {...m} />;
    case "card":
      return <Card {...m} />;
    case "globe":
      return <Globe />;
    case "platform":
      return <Platform {...m} />;
  }
}

