import {
  Bell,
  Calendar,
  Check,
  Clock,
  FileText,
  ListTodo,
  MessageSquare,
  Mic,
  Paperclip,
  Plus,
  Search,
  SendHorizontal,
  Star,
  Type,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { Avatar, AvatarStack, Glow, Halftone, lightPanel, panel } from "./parts";

/** Command palette floating over a keyboard, lit from above in the highlight colour. */
export interface CommandMock {
  kind: "command";
  /** text in the search field */
  placeholder: string;
  /** small label over the list */
  label: string;
  /** rows of the list; the first is shown selected */
  actions: { label: string; key: string }[];
}
/** A light "today" column of task cards between two dimmed columns. */
export interface PlannerMock {
  kind: "planner";
  heading: string;
  tasks: { tag: string; title: string; meta: string; people?: string[] }[];
}
/** Calendar grid with a large event card and a smaller one. */
export interface ScheduleMock {
  kind: "schedule";
  events: { time: string; title: string; note?: string; people?: string[] }[];
  /** label of the join button on the first event */
  action?: string;
}
/** Bell in a dark disc inside a slowly turning halftone ring of light. */
export interface BellMock {
  kind: "bell";
  /** number on the badge */
  count: string;
}
/** A staggered checklist; done items are struck through. */
export interface TasksMock {
  kind: "tasks";
  items: { label: string; done?: boolean }[];
}
/** An event card with a shadow card behind it, hanging from a timeline. */
export interface EventMock {
  kind: "event";
  title: string;
  time: string;
  people: string[];
  more?: string;
}
/** A block-insert menu, like a document editor's slash menu. */
export interface MenuMock {
  kind: "menu";
  heading: string;
  items: { label: string; hint: string }[];
}
/** A glowing microphone with people around it. */
export interface VoiceMock {
  kind: "voice";
  /** initials, up to eight */
  people: string[];
}
/** Two chat bubbles and a message field. */
export interface ChatMock {
  kind: "chat";
  messages: { mention: string; text: string; initials: string; mine?: boolean }[];
  placeholder: string;
}
/** A light project panel between dimmed ones. */
export interface ProjectMock {
  kind: "project";
  title: string;
  item: string;
  members: string;
  people: string[];
  rows: string[];
}

export type HulyMockProps = (
  | CommandMock
  | PlannerMock
  | ScheduleMock
  | BellMock
  | TasksMock
  | EventMock
  | MenuMock
  | VoiceMock
  | ChatMock
  | ProjectMock
) & { className?: string };

const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

/** Fills its parent (give the parent a size). Reads the colours of the surrounding .dark element. */
export function HulyMock(props: HulyMockProps) {
  return (
    <div aria-hidden className={cn("relative h-full w-full overflow-hidden text-foreground select-none", props.className)}>
      {render(props)}
    </div>
  );
}

function render(p: HulyMockProps) {
  switch (p.kind) {
    case "command": {
      const lit = new Set(p.actions.map((a) => a.key.toUpperCase()));
      return (
        <>
          <Glow className="top-[-30%] left-1/2 h-[70%] w-[45%] -translate-x-1/2 bg-highlight/70" />
          <div className="absolute top-0 left-1/2 h-[45%] w-24 -translate-x-1/2 bg-linear-to-b from-highlight/80 to-transparent blur-xl" />
          <Halftone className="[mask-image:radial-gradient(70%_60%_at_50%_10%,black,transparent)]" />
          <div className="absolute inset-x-0 top-[44%] flex flex-col items-center gap-1.5 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]">
            {KEYS.map((row) => (
              <div key={row} className="flex gap-1.5">
                {row.split("").map((k) => (
                  <span
                    key={k}
                    className={cn(
                      "flex size-7 items-center justify-center rounded-md border border-foreground/10 bg-foreground/5 text-[0.5625rem] text-foreground/40",
                      lit.has(k) && "border-highlight/40 bg-highlight/20 text-highlight",
                    )}
                  >
                    {k}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className={cn(panel, "absolute top-[16%] left-1/2 w-[17rem] -translate-x-1/2 p-1.5 text-xs")}>
            <div className="flex items-center gap-2 rounded-lg bg-foreground/5 px-2.5 py-2">
              <Search className="size-3.5 text-foreground/50" />
              <span className="border-l border-foreground/20 pl-2">{p.placeholder}</span>
              <X className="ml-auto size-3.5 text-foreground/40" />
            </div>
            <p className="px-2 pt-3 pb-1.5 text-[0.5625rem] tracking-wide text-foreground/45 uppercase">{p.label}</p>
            {p.actions.map((a, i) => (
              <div key={a.label} className={cn("flex items-center rounded-md px-2 py-1.5", i === 0 ? "bg-foreground/10" : "text-foreground/55")}>
                {a.label}
                <kbd className="ml-auto rounded border border-foreground/15 px-1 text-[0.5625rem] text-foreground/60">{a.key}</kbd>
              </div>
            ))}
          </div>
        </>
      );
    }

    case "planner":
      return (
        <>
          <Glow className="top-[-20%] left-[40%] h-1/2 w-1/2 bg-glow/40" />
          <Halftone className="[mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
          <div className={cn(panel, "absolute top-[18%] left-[-8%] h-40 w-48 opacity-50")} />
          <div className={cn(panel, "absolute top-[18%] right-[-8%] h-40 w-48 opacity-50")} />
          <div className={cn(lightPanel, "absolute top-[12%] left-1/2 w-[15rem] -translate-x-1/2 p-2 text-[0.6875rem]")}>
            <div className="flex items-center justify-between px-1.5 pt-0.5 pb-2 text-xs font-semibold">
              {p.heading}
              <Plus className="size-3.5 opacity-50" />
            </div>
            <div className="space-y-1.5">
              {p.tasks.map((t, i) => (
                <div key={t.title} className="rounded-lg bg-foreground p-2 shadow-sm shadow-background/20">
                  <span className={cn("rounded px-1.5 py-px text-[0.5625rem] font-medium", i === 0 ? "bg-destructive/15 text-destructive" : "bg-highlight/20 text-highlight-foreground")}>
                    {t.tag}
                  </span>
                  <p className="mt-1.5 leading-snug font-medium">{t.title}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-[0.5625rem] opacity-55">
                    <Calendar className="size-3" />
                    {t.meta}
                    {t.people && <AvatarStack people={t.people} className="ml-auto [&>span]:size-4 [&>span]:text-[0.375rem] [&>span]:ring-foreground" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );

    case "schedule":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px)] bg-size-[56px_44px]" />
          <Glow className="top-[-10%] left-[10%] h-1/2 w-1/2 bg-glow/30" />
          {p.events[0] && (
            <div className={cn(lightPanel, "absolute top-[12%] left-[8%] w-[13.5rem] p-3 text-[0.6875rem] lg:left-[12%]")}>
              <p className="text-[0.625rem] opacity-55">{p.events[0].time}</p>
              <p className="mt-2 leading-snug font-medium">{p.events[0].title}</p>
              {p.events[0].note && <p className="mt-1 text-[0.625rem] opacity-55">{p.events[0].note}</p>}
              <div className="mt-3 flex items-center justify-between">
                {p.action && <span className="rounded-full bg-glow/25 px-2.5 py-1 text-[0.625rem] font-medium text-glow">+ {p.action}</span>}
                {p.events[0].people && <AvatarStack people={p.events[0].people} className="[&>span]:size-5 [&>span]:ring-foreground" />}
              </div>
            </div>
          )}
          {p.events[1] && (
            <div className={cn(panel, "absolute top-[34%] right-[6%] w-44 border-l-2 border-l-highlight p-2.5 text-[0.625rem] lg:right-[14%]")}>
              <p className="leading-snug">{p.events[1].title}</p>
              <p className="mt-1 text-foreground/50">{p.events[1].time}</p>
              {p.events[1].people && <AvatarStack people={p.events[1].people} className="mt-2 [&>span]:size-4 [&>span]:text-[0.375rem]" />}
            </div>
          )}
        </>
      );

    case "bell":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute size-64 animate-[spin_24s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--glow),transparent_25%,var(--highlight)_45%,transparent_60%,var(--chart-3)_80%,var(--glow))] opacity-80 blur-md [mask-image:radial-gradient(closest-side,transparent_38%,black_55%,transparent_100%)] motion-reduce:animate-none" />
          <Halftone className="[mask-image:radial-gradient(closest-side,transparent_25%,black_45%,transparent_75%)]" />
          <div className="relative flex size-20 items-center justify-center rounded-full bg-background shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_15%,transparent),0_0_0_1px_color-mix(in_oklab,var(--glow)_40%,transparent)]">
            <Bell className="size-9 fill-foreground/85 text-foreground/85" strokeWidth={1.25} />
            <span className="absolute top-4 right-3.5 rounded-full bg-highlight px-1 text-[0.5625rem] font-semibold text-highlight-foreground">{p.count}</span>
          </div>
        </div>
      );

    case "tasks":
      return (
        <>
          <Glow className="bottom-[-30%] left-[-20%] h-[90%] w-[70%] bg-glow/70" />
          <div className="absolute top-[34%] left-[22%] flex flex-col gap-3 text-[0.6875rem]">
            {p.items.map((t, i) => (
              <div
                key={t.label}
                className={cn(panel, "flex w-56 items-center gap-2.5 px-3 py-2.5", i === 1 && "-ml-10", i === 2 && "opacity-50")}
              >
                <span className={cn("flex size-4 items-center justify-center rounded border border-foreground/40", t.done && "border-foreground bg-foreground")}>
                  {t.done && <Check className="size-3 text-background" strokeWidth={3} />}
                </span>
                <span className={cn(t.done && "text-foreground/50 line-through")}>{t.label}</span>
              </div>
            ))}
          </div>
        </>
      );

    case "event":
      return (
        <>
          <Halftone className="[mask-image:radial-gradient(60%_60%_at_70%_40%,black,transparent)]" />
          <div className="absolute top-[36%] left-[calc(30%+10rem)] h-full w-px bg-foreground/15" />
          <div className={cn(panel, "absolute top-[50%] left-[38%] h-20 w-44 opacity-60")}>
            <AvatarStack people={p.people.slice(0, 3)} className="absolute bottom-3 left-3 [&>span]:size-4 [&>span]:text-[0.375rem]" />
          </div>
          <div className={cn(panel, "absolute top-[30%] left-[16%] w-48 border-l-2 border-l-foreground/60 p-3 text-[0.6875rem]")}>
            <p className="leading-snug">{p.title}</p>
            <p className="mt-1 text-[0.625rem] text-foreground/50">{p.time}</p>
            <AvatarStack people={p.people} more={p.more} className="mt-2.5 [&>span]:size-5" />
          </div>
        </>
      );

    case "menu":
      return (
        <>
          <Glow className="top-[-30%] right-[-20%] h-[80%] w-[60%] bg-glow/80" />
          <div className={cn(panel, "absolute top-[38%] left-1/2 w-60 -translate-x-1/2 p-2 text-[0.6875rem]")}>
            <p className="px-1.5 pb-2 text-[0.625rem] text-foreground/45">{p.heading}</p>
            {p.items.map((it, i) => {
              const Icon: LucideIcon = [Type, ListTodo, FileText][i % 3];
              return (
                <div key={it.label} className={cn("flex items-center gap-2.5 rounded-md p-1.5", i > 1 && "opacity-50")}>
                  <span className="flex size-7 items-center justify-center rounded-md border border-foreground/15 bg-foreground/5">
                    <Icon className="size-3.5" />
                  </span>
                  <span>
                    <span className="block">{it.label}</span>
                    <span className="block text-[0.5625rem] text-foreground/45">{it.hint}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </>
      );

    case "voice": {
      const spots = ["left-[8%] top-[55%]", "left-[22%] top-[78%]", "left-[30%] top-[46%]", "right-[30%] top-[46%]", "right-[22%] top-[76%]", "right-[8%] top-[55%]", "left-[4%] top-[88%]", "right-[4%] top-[86%]"];
      return (
        <>
          <Glow className="bottom-[-55%] left-1/2 h-[90%] w-[85%] -translate-x-1/2 bg-glow/90" />
          <Glow className="bottom-[-40%] left-1/2 h-[60%] w-[45%] -translate-x-1/2 bg-chart-5/60" />
          {p.people.slice(0, 8).map((pp, i) => (
            <Avatar key={i} initials={pp} index={i} className={cn("absolute size-11 text-xs", spots[i], i > 5 && "opacity-40 blur-[1px]")} />
          ))}
          <div className="absolute top-[58%] left-1/2 flex size-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background shadow-[0_0_0_2px_color-mix(in_oklab,var(--glow)_70%,transparent),0_0_32px_color-mix(in_oklab,var(--glow)_80%,transparent)]">
            <Mic className="size-7" strokeWidth={1.5} />
          </div>
        </>
      );
    }

    case "chat":
      return (
        <>
          <Glow className="right-[-10%] bottom-[-40%] h-[80%] w-[70%] bg-highlight/50" />
          <Halftone className="[mask-image:linear-gradient(to_bottom,transparent,black)]" />
          <div className="absolute inset-x-5 top-[34%] space-y-3 text-[0.6875rem] lg:inset-x-6">
            {p.messages.map((m, i) => (
              <div key={i} className={cn("flex items-end gap-2", m.mine ? "flex-row-reverse pl-10" : "pr-10")}>
                <Avatar initials={m.initials} index={i + 2} className="size-6" />
                <p className={cn("max-w-[11rem] rounded-xl px-2.5 py-2 leading-snug", m.mine ? lightPanel : panel)}>
                  <span className={m.mine ? "opacity-55" : "text-highlight"}>{m.mention}</span> {m.text}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-4 flex items-center rounded-full border border-foreground/10 bg-foreground/8 px-3.5 py-2 text-[0.6875rem] text-foreground/45 lg:inset-x-6">
            {p.placeholder}
            <SendHorizontal className="ml-auto size-3.5" />
          </div>
        </>
      );

    case "project":
      return (
        <>
          <Glow className="top-[-30%] right-[-10%] h-[70%] w-[60%] bg-highlight/45" />
          <div className={cn(panel, "absolute top-[44%] left-[2%] h-40 w-48 p-3 text-[0.625rem] text-foreground/40")}>
            <div className="h-2 w-10 rounded bg-foreground/15" />
            <div className="mt-6 h-2 w-24 rounded bg-foreground/10" />
          </div>
          <div className={cn(panel, "absolute top-[44%] right-[2%] h-40 w-48")} />
          <div className={cn(lightPanel, "absolute top-[34%] left-1/2 w-56 -translate-x-1/2 p-2.5 text-[0.6875rem]")}>
            <div className="flex items-center justify-between px-0.5 pb-2 text-xs font-semibold">
              {p.title}
              <Star className="size-3.5 fill-highlight text-highlight" />
            </div>
            <div className="rounded-lg bg-foreground p-2">
              <p className="font-medium">{p.item}</p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[0.5625rem] opacity-60">
                <Users className="size-3" />
                {p.members}
                <AvatarStack people={p.people} className="ml-auto [&>span]:size-4 [&>span]:text-[0.375rem] [&>span]:ring-foreground" />
              </div>
              <div className="mt-2 space-y-1.5 border-t border-background/10 pt-2 text-[0.625rem] opacity-70">
                {p.rows.map((r, i) => {
                  const Icon: LucideIcon = [FileText, MessageSquare, Paperclip, Clock][i % 4];
                  return (
                    <div key={r} className="flex items-center gap-1.5">
                      <Icon className="size-3" />
                      {r}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
  }
}

