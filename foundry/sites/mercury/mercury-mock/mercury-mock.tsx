import { ArrowDownLeft, ArrowUpRight, Check, ChevronDown, ChevronRight, MoreVertical, Plus, Sparkles } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AccountsMock {
  kind: "accounts";
  /** panel title, e.g. "Accounts" */
  title: string;
  /** one row per account; the cents are set small and raised */
  rows: { name: string; whole: string; cents: string }[];
  /** the "+4 · View all" row */
  more?: { count: string; label: string };
  /** a footer strip with a blue toggle dot, e.g. "2 rules move money between these" */
  note?: { text: string; action: string };
}

export interface CardMock {
  kind: "card";
  /** status beside the green dot, e.g. "Active" */
  status: string;
  /** brand in the corner of the card */
  brand: string;
  /** what the card is for */
  label: string;
  /** last digits, shown after the dots */
  last4: string;
}

export interface BillMock {
  kind: "bill";
  /** the big word at the top of the sheet */
  title: string;
  /** floating chips the reader "picked out" of the bill */
  chips: string[];
}

export interface InvoiceMock {
  kind: "invoice";
  /** two fields side by side; set select for a dropdown arrow */
  fields: { label: string; value: string; select?: boolean }[];
  /** label beside the switched-on toggle */
  toggle: string;
  /** the boxed field below */
  repeat: { label: string; value: string };
}

export interface UploadMock {
  kind: "upload";
  /** e.g. "Uploading" */
  label: string;
  /** e.g. "1/3" */
  count: string;
}

export interface RulesMock {
  kind: "rules";
  /** the account at the root of the tree */
  source: { name: string; amount: string };
  /** the rules branching from it; "in" rules get an arrow pointing in */
  rules: { title: string; sub: string; direction?: "in" | "out" }[];
}

export interface RoleMock {
  kind: "role";
  /** the teammate's name */
  name: string;
  /** "Role" */
  roleLabel: string;
  /** the picked role */
  role: string;
  /** the line above the permissions, e.g. "Sam can" */
  intro: string;
  /** permissions; the list fades out towards the bottom */
  permissions: string[];
}

export type MercuryMockContent = AccountsMock | CardMock | BillMock | InvoiceMock | UploadMock | RulesMock | RoleMock;

export interface MercuryMockProps {
  /** which vignette to draw, and its words */
  mock: MercuryMockContent;
  className?: string;
}

// Light panels: warm paper (chart-5) and mist (chart-3). "ink" is dark text on them in
// both modes; sheets float on the panel with a soft, wide shadow.
const ink = "text-foreground dark:text-background";
const paper = "bg-[radial-gradient(120%_100%_at_30%_20%,var(--chart-5),color-mix(in_oklab,var(--chart-5)_88%,var(--chart-3)))]";
const mist = "bg-[radial-gradient(120%_100%_at_30%_20%,color-mix(in_oklab,var(--chart-3)_75%,var(--chart-5)),var(--chart-3))]";
const sheet = "bg-chart-5 shadow-[0_1.5cqw_5cqw_color-mix(in_oklab,currentColor_10%,transparent),0_0_0_1px_color-mix(in_oklab,currentColor_6%,transparent)]";

function Accounts({ mock }: { mock: AccountsMock }) {
  return (
    <div className="absolute inset-0 bg-card text-card-foreground">
      <div className="absolute inset-x-[7%] top-[6%] overflow-hidden rounded-[2.4cqw] bg-muted/70 ring-1 ring-border/40">
        <div className="flex items-center justify-between px-[5%] pt-[4.5%] pb-[2%] text-[3.2cqw] text-muted-foreground">
          {mock.title}
          <span className="flex items-center gap-[3cqw]">
            <span className="flex size-[6cqw] items-center justify-center rounded-full bg-secondary">
              <Plus className="size-[3.2cqw]" strokeWidth={1.75} />
            </span>
            <MoreVertical className="size-[3.2cqw]" strokeWidth={1.75} />
          </span>
        </div>
        <ul className="px-[5%]">
          {mock.rows.map((r) => (
            <li key={r.name} className="flex items-center gap-[3cqw] py-[1.6cqw] text-[3.2cqw]">
              <span className="flex size-[5.6cqw] shrink-0 items-center justify-center rounded-full ring-1 ring-foreground/50">
                <span className="size-[3cqw] rounded-full ring-1 ring-foreground/40" />
              </span>
              <span className="flex-1 truncate">{r.name}</span>
              <span className="tabular-nums">
                {r.whole}
                <sup className="ml-px text-[2cqw] text-muted-foreground">{r.cents}</sup>
              </span>
            </li>
          ))}
          {mock.more && (
            <li className="flex items-center gap-[3cqw] py-[1.6cqw] text-[3.2cqw] text-muted-foreground">
              <span className="flex size-[5.6cqw] shrink-0 items-center justify-center rounded-full bg-secondary text-[2cqw]">{mock.more.count}</span>
              {mock.more.label}
            </li>
          )}
        </ul>
        {mock.note && (
          <div className="mt-[2%] flex items-center gap-[2.4cqw] border-t border-border/50 px-[5%] py-[3.5%] text-[3cqw]">
            <span className="relative h-[2.4cqw] w-[4cqw] rounded-full bg-primary">
              <span className="absolute top-1/2 left-[2px] size-[1.8cqw] -translate-y-1/2 rounded-full bg-primary-foreground/80" />
            </span>
            <span className="flex-1 truncate">{mock.note.text}</span>
            <span className="flex items-center text-highlight">
              {mock.note.action}
              <ChevronRight className="size-[3cqw]" strokeWidth={1.75} />
            </span>
          </div>
        )}
      </div>
      {/* ghost cards under the list, as if more of the dashboard sat below */}
      <div className="absolute inset-x-[7%] top-[76%] bottom-[-10%] flex gap-[4%]">
        <span className="w-[38%] rounded-[2.4cqw] bg-muted/40 ring-1 ring-border/25" />
        <span className="flex-1 rounded-[2.4cqw] bg-muted/40 ring-1 ring-border/25" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-card to-transparent" />
    </div>
  );
}

function Card({ mock }: { mock: CardMock }) {
  // a dark slate card in both modes, with light text on it
  const body = "rounded-[2.4cqw] bg-[color-mix(in_oklab,var(--chart-1)_10%,color-mix(in_oklab,var(--foreground)_75%,var(--background)))] dark:bg-[color-mix(in_oklab,var(--chart-1)_12%,color-mix(in_oklab,var(--foreground)_30%,var(--background)))]";
  return (
    <div className={cn("absolute inset-0", paper)}>
      {/* two blurred cards stacked behind */}
      <span className={cn(body, "absolute top-[11%] left-1/2 h-[30%] w-[48%] -translate-x-1/2 opacity-40 blur-[3px]")} />
      <span className={cn(body, "absolute top-[18%] left-1/2 h-[30%] w-[58%] -translate-x-1/2 opacity-60 blur-[2px]")} />
      <div className={cn(body, "absolute top-[26%] left-1/2 flex h-[62%] w-[67%] -translate-x-1/2 flex-col justify-between p-[4.5%] text-background shadow-[0_3cqw_6cqw_color-mix(in_oklab,var(--foreground)_20%,transparent)] dark:text-foreground dark:shadow-[0_3cqw_6cqw_color-mix(in_oklab,var(--background)_30%,transparent)]")}>
        <div className="flex items-start justify-between text-[2.8cqw]">
          <span className="flex items-center gap-[1.5cqw] text-background dark:text-foreground">
            <span className="size-[1.6cqw] rounded-full bg-chart-4" />
            {mock.status}
          </span>
          <span className="font-display text-[3.6cqw] tracking-[0.05em] text-background dark:text-foreground">{mock.brand}</span>
        </div>
        <div className="flex items-end justify-between text-background dark:text-foreground">
          <div className="space-y-[1cqw] text-[2.4cqw]">
            <p>{mock.label}</p>
            <p className="font-mono tracking-[0.15em]">
              <span aria-hidden className="opacity-80">
                {"•••• •••• •••• " /* foundry-allow-text */}
              </span>
              {mock.last4}
            </p>
          </div>
          <span className="flex">
            <span className="size-[7cqw] rounded-full bg-[color-mix(in_oklab,var(--chart-5)_45%,transparent)] ring-1 ring-chart-5/50" />
            <span className="-ml-[3cqw] size-[7cqw] rounded-full bg-[color-mix(in_oklab,var(--chart-5)_25%,transparent)] ring-1 ring-chart-5/50 backdrop-blur-sm" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Bill({ mock }: { mock: BillMock }) {
  const spots = ["top-[38%] left-[9%]", "top-[34%] right-[9%]", "top-[74%] right-[14%]"];
  return (
    <div className={cn("absolute inset-0", paper, ink)}>
      <div className={cn(sheet, "absolute top-[14%] left-[19%] h-[100%] w-[62%] rounded-[1.2cqw] p-[4%]")}>
        <p className="font-display text-[5cqw] opacity-60">{mock.title}</p>
        <div className="mt-[6%] space-y-[3cqw] opacity-25">
          {[70, 90, 60, 80, 50].map((w) => (
            <div key={w} className="flex gap-[3cqw]">
              <span className="h-[0.9cqw] w-[18%] rounded-full bg-current" />
              <span className="h-[0.9cqw] rounded-full bg-current" style={{ width: `${w * 0.5}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-chart-5 to-transparent" />
      {mock.chips.slice(0, 3).map((chip, i) => (
        <span key={chip} className={cn(sheet, spots[i], "absolute flex items-center gap-[1.6cqw] rounded-full px-[3cqw] py-[1.8cqw] text-[2.6cqw]")}>
          <Sparkles className="size-[3cqw] opacity-60" strokeWidth={1.5} />
          {chip}
        </span>
      ))}
    </div>
  );
}

function Invoice({ mock }: { mock: InvoiceMock }) {
  return (
    <div className={cn("absolute inset-0", paper, ink)}>
      <div className={cn(sheet, "absolute top-[13%] left-[9%] h-[100%] w-[100%] rounded-tl-[2.4cqw] p-[6%] pr-0")}>
        <div className="flex gap-[1.6cqw]">
          {mock.fields.map((f, i) => (
            <div key={f.label} className={i === 0 ? "w-[50%]" : "flex-1"}>
              <p className="mb-[1.2cqw] text-[2.6cqw] opacity-60">{f.label}</p>
              <div className="flex h-[8cqw] items-center justify-between rounded-[0.8cqw] px-[2.4cqw] text-[3.4cqw] ring-1 ring-current/15">
                {f.value}
                {f.select && <ChevronDown className="size-[3cqw]" strokeWidth={2} />}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[4%] flex items-center gap-[2.4cqw] text-[2.6cqw] opacity-50">
          <span className="relative h-[3.4cqw] w-[6.4cqw] rounded-full bg-primary">
            <span className="absolute top-1/2 right-[0.4cqw] size-[2.6cqw] -translate-y-1/2 rounded-full bg-chart-5" />
          </span>
          {mock.toggle}
        </div>
        <div className="mt-[6%] mr-[9%] rounded-[1.2cqw] p-[3cqw] ring-1 ring-current/15">
          <p className="mb-[1.2cqw] text-[2.6cqw] opacity-60">{mock.repeat.label}</p>
          <div className="flex h-[8cqw] items-center rounded-[0.8cqw] px-[2.4cqw] text-[3.4cqw] opacity-80 ring-1 ring-current/15 blur-[0.4px]">{mock.repeat.value}</div>
        </div>
      </div>
    </div>
  );
}

function Upload({ mock }: { mock: UploadMock }) {
  return (
    <div className={cn("absolute inset-0", paper, ink)}>
      <div className="absolute top-[30%] right-[-10%] h-[45%] w-[70%] rounded-full bg-glow/50 blur-3xl" />
      <div className={cn(sheet, "absolute top-[38%] right-0 left-[9%] flex h-[24%] items-center gap-[3cqw] rounded-l-full pl-[6%] text-[5cqw]")}>
        <span className="relative size-[5cqw] shrink-0">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <span
              key={deg}
              className="absolute top-1/2 left-1/2 size-[0.9cqw] rounded-full bg-primary"
              style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-2.2cqw)`, opacity: 0.3 + i * 0.1 }}
            />
          ))}
        </span>
        <span className="opacity-90">{mock.label}</span>
        <span className="opacity-50">{mock.count}</span>
      </div>
    </div>
  );
}

function Rules({ mock }: { mock: RulesMock }) {
  return (
    <div className={cn("absolute inset-0", mist, ink)}>
      <div className={cn(sheet, "absolute top-[10%] left-[6.5%] rounded-[1.6cqw] px-[4.5cqw] py-[3cqw]")}>
        <p className="text-[3.2cqw]">{mock.source.name}</p>
        <p className="mt-[1cqw] text-[2.4cqw] opacity-55">{mock.source.amount}</p>
      </div>
      {/* the tree's trunk and branches */}
      <span className="absolute top-[32%] left-[12%] h-[34%] w-px bg-current/70" />
      {mock.rules.slice(0, 2).map((rule, i) => {
        const Icon = rule.direction === "in" ? ArrowDownLeft : ArrowUpRight;
        return (
          <div key={rule.title} className="absolute right-0 left-[12%] flex items-center" style={{ top: `${40 + i * 28}%` }}>
            <span className="h-[5cqw] w-[8%] -translate-y-1/2 rounded-bl-[2cqw] border-b border-l border-current/70" />
            <div className={cn(sheet, "flex flex-1 items-center gap-[3cqw] rounded-l-[1.6cqw] px-[4cqw] py-[3cqw]")}>
              <span className="flex size-[5cqw] shrink-0 items-center justify-center rounded-[1.2cqw] bg-foreground text-background dark:bg-background dark:text-foreground">
                <Icon className="size-[3cqw]" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[3.1cqw]">{rule.title}</p>
                <p className="mt-[0.6cqw] truncate text-[2.3cqw] opacity-55">{rule.sub}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Role({ mock }: { mock: RoleMock }) {
  return (
    <div className={cn("absolute inset-0", mist, ink)}>
      <div className={cn(sheet, "absolute top-[12%] left-[17%] h-[100%] w-[66%] rounded-[2.4cqw] px-[5.5%] pt-[5%]")}>
        <p className="text-[3.6cqw]">{mock.name}</p>
        <p className="mt-[4%] text-[1.8cqw] opacity-55">{mock.roleLabel}</p>
        <div className="mt-[0.6cqw] flex h-[6cqw] items-center justify-between rounded-[0.8cqw] px-[1.6cqw] text-[2.2cqw] ring-1 ring-current/15">
          {mock.role}
          <ChevronDown className="size-[2.4cqw]" strokeWidth={2} />
        </div>
        <p className="mt-[4%] text-[1.8cqw] opacity-55">{mock.intro}</p>
        <ul className="mt-[1.5cqw] space-y-[2.2cqw] text-[2.2cqw]">
          {mock.permissions.map((p, i) => (
            <li key={p} className="flex items-center gap-[1.4cqw]" style={{ opacity: Math.max(0.15, 0.85 - i * 0.18) }}>
              <Check className="size-[2.2cqw]" strokeWidth={2} />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-chart-3 to-transparent" />
    </div>
  );
}

/**
 * Product-UI vignettes in Mercury's manner: white sheets floating on warm paper or misty
 * blue panels, small quiet type, one periwinkle accent. Scales with its box (container units),
 * so it reads the same in a phone card and a desktop panel.
 */
export function MercuryMock({ mock, className }: MercuryMockProps) {
  return (
    <div className={cn("@container relative isolate size-full overflow-hidden font-sans font-[400]", className)}>
      {mock.kind === "accounts" && <Accounts mock={mock} />}
      {mock.kind === "card" && <Card mock={mock} />}
      {mock.kind === "bill" && <Bill mock={mock} />}
      {mock.kind === "invoice" && <Invoice mock={mock} />}
      {mock.kind === "upload" && <Upload mock={mock} />}
      {mock.kind === "rules" && <Rules mock={mock} />}
      {mock.kind === "role" && <Role mock={mock} />}
    </div>
  );
}
