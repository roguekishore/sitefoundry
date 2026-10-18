import type { ReactNode } from "react";
import {
  Calendar,
  ChartGantt,
  CircleDot,
  Ellipsis,
  FileText,
  Inbox,
  Kanban,
  LayoutGrid,
  List,
  MessageCircle,
  Plus,
  Search,
  SlidersHorizontal,
  SquareCheck,
  Users,
  Video,
  X,
} from "lucide-react";
import { cn } from "@foundry/foundry-utils";

type Tone = "glow" | "highlight" | "chart-2" | "chart-5" | "destructive";

export interface WindowCard {
  title: string;
  tags?: { label: string; tone?: Tone }[];
  /** e.g. "40%" */
  progress?: string;
  /** initials */
  people?: string[];
}

export interface WindowColumn {
  name: string;
  count: string;
  /** colour of the status dot */
  tone: "backlog" | "todo" | "progress" | "done";
  cards: WindowCard[];
}

export interface HulyWindowProps {
  /** mark shown in the app tile at the top of the rail */
  logo?: ReactNode;
  /** small stat widget under the app tile */
  widget?: { value: string; label: string };
  sidebar: { title: string; search: string; items: string[]; groupLabel?: string; groups?: string[] };
  breadcrumb: string[];
  title: string;
  /** initials shown at the top right of the board */
  people?: string[];
  /** e.g. "+5" next to the people */
  more?: string;
  /** view tabs; the first is active */
  views: string[];
  filter?: string;
  /** up to four status columns */
  columns: WindowColumn[];
  inbox?: {
    title: string;
    /** tabs; the first is active, the second carries the badge */
    tabs: string[];
    badge?: string;
    items: { name: string; action: string; target?: string; time: string; place: string; unread?: boolean }[];
  };
  className?: string;
}

const DOT = { backlog: "bg-highlight", todo: "bg-foreground/80", progress: "bg-glow", done: "bg-chart-2" };
const TAG: Record<Tone, string> = {
  glow: "bg-glow/25 text-glow",
  highlight: "bg-highlight/25 text-highlight",
  "chart-2": "bg-chart-2/20 text-chart-2",
  "chart-5": "bg-chart-5/25 text-chart-5",
  destructive: "bg-destructive/20 text-destructive",
};
const FACE = ["from-glow to-chart-5", "from-highlight to-chart-1", "from-chart-2 to-chart-3", "from-chart-4 to-highlight"];
const RAIL = [Inbox, SquareCheck, Calendar, Video, FileText, MessageCircle, Users];
const SIDE = [CircleDot, LayoutGrid, Kanban, ChartGantt, List];
const VIEW = [Kanban, List, ChartGantt];
const RING = ["border-glow", "border-highlight", "border-destructive", "border-chart-2"];

function Faces({ people, className }: { people: string[]; className?: string }) {
  return (
    <span className={cn("flex", className)}>
      {people.map((p, i) => (
        <span
          key={i}
          className={cn("-ml-1.5 flex size-5 items-center justify-center rounded-full bg-linear-to-br ring-2 ring-background first:ml-0", FACE[i % FACE.length])}
        >
          <span className="text-[0.4em] font-semibold">{p}</span>
        </span>
      ))}
    </span>
  );
}

export function HulyWindow({ logo, widget, sidebar, breadcrumb, title, people, more, views, filter, columns, inbox, className }: HulyWindowProps) {
  return (
    // The wrapper is a size container. Inside, 1em = 1/76 of its width and Tailwind's spacing
    // is switched to em, so the whole window scales like an image (16px type at 1216px wide).
    // Text sizes sit on leaf elements only, so they don't compound.
    <div aria-hidden className={cn("dark w-full [container-type:inline-size] select-none", className)}>
      <div className="text-[1.3158cqw] [--spacing:0.25em]">
        <div className="relative overflow-hidden rounded-t-[0.9em] border border-foreground/10 border-t-foreground/60 bg-background text-foreground shadow-[0_-0.2em_2.5em_-0.2em_var(--glow)] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
          <div className="flex h-[34em]">
            {/* rail */}
            <div className="flex w-16 shrink-0 flex-col items-center gap-4 border-r border-foreground/8 bg-card/40 py-3">
              <div className="flex size-9 items-center justify-center rounded-[0.6em] bg-linear-to-br from-highlight/80 to-foreground/20 [&_svg]:size-5">
                {logo}
              </div>
              {widget && (
                <div className="flex h-24 w-11 flex-col items-center justify-between rounded-[0.6em] border border-foreground/15 bg-linear-to-b from-foreground/5 to-highlight/40 py-2">
                  <span className="text-[0.8em]">{widget.value}</span>
                  <span className="h-0.5 w-5 rounded bg-highlight" />
                  <span className="text-[0.5em] font-semibold uppercase">{widget.label}</span>
                </div>
              )}
              {RAIL.map((Icon, i) => (
                <Icon key={i} className={cn("size-4 text-foreground/45", i === 1 && "text-foreground")} strokeWidth={1.5} />
              ))}
            </div>

            {/* sidebar */}
            <div className="w-52 shrink-0 border-r border-foreground/8 bg-card/40 px-3 py-3">
              <p className="px-1 pb-3 font-medium">{sidebar.title}</p>
              <div className="flex items-center gap-2 rounded-[0.5em] border border-foreground/10 px-2.5 py-1.5 text-foreground/35">
                <Search className="size-3" />
                <span className="text-[0.65em]">{sidebar.search}</span>
              </div>
              <div className="mt-3 space-y-0.5 text-foreground/55">
                {sidebar.items.map((it, i) => {
                  const Icon = SIDE[i % SIDE.length];
                  return (
                    <div key={it} className={cn("flex items-center gap-2 rounded-[0.4em] px-1.5 py-1.5", i === 1 && "bg-foreground/8 text-foreground")}>
                      <Icon className="size-3.5" strokeWidth={1.5} />
                      <span className="text-[0.7em]">{it}</span>
                    </div>
                  );
                })}
              </div>
              {sidebar.groupLabel && (
                <p className="mt-4 px-1.5 pb-1.5 text-foreground/35">
                  <span className="text-[0.55em] tracking-wider uppercase">{sidebar.groupLabel}</span>
                </p>
              )}
              <div className="space-y-0.5 text-foreground/55">
                {sidebar.groups?.map((g, i) => (
                  <div key={g} className="flex items-center gap-2 px-1.5 py-1.5">
                    <span className={cn("size-2.5 rounded-full border-2", RING[i % RING.length])} />
                    <span className="text-[0.7em]">{g}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* board */}
            <div className="min-w-0 flex-1 bg-card/20">
              <div className="flex items-start justify-between px-4 pt-3">
                <div>
                  <p className="flex gap-1.5 text-foreground/35">
                    {breadcrumb.map((b, i) => (
                      <span key={b} className={cn("text-[0.6em]", i === breadcrumb.length - 1 && "text-glow")}>
                        {i > 0 && <span className="mr-1.5 text-foreground/20">/</span>}
                        {b}
                      </span>
                    ))}
                  </p>
                  <p className="mt-1.5">{title}</p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {people && <Faces people={people} />}
                  {more && <span className="text-[0.6em] text-foreground/50">{more}</span>}
                  <Ellipsis className="size-4 rotate-90 text-foreground/40" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5 border-b border-foreground/8 px-4 text-foreground/45">
                {views.map((v, i) => {
                  const Icon = VIEW[i % VIEW.length];
                  return (
                    <span key={v} className={cn("flex items-center gap-1.5 pb-2", i === 0 && "border-b border-glow text-foreground")}>
                      <Icon className="size-3.5" strokeWidth={1.5} />
                      <span className="text-[0.7em]">{v}</span>
                    </span>
                  );
                })}
                {filter && (
                  <span className="ml-auto flex items-center gap-1.5 pb-2">
                    <SlidersHorizontal className="size-3.5" strokeWidth={1.5} />
                    <span className="text-[0.65em]">{filter}</span>
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3 px-4 pt-3">
                {columns.slice(0, 4).map((col) => (
                  <div key={col.name} className="min-w-0">
                    <div className="flex items-center gap-1.5 pb-2">
                      <span className={cn("size-1.5 rounded-full", DOT[col.tone])} />
                      <span className="text-[0.6em] font-medium uppercase">{col.name}</span>
                      <span className="text-[0.6em] text-foreground/35">· {col.count}</span>
                      <Ellipsis className="ml-auto size-3.5 text-foreground/35" />
                    </div>
                    <div className="mb-2 flex h-6 items-center justify-center rounded-[0.4em] border border-dashed border-foreground/10 text-foreground/40">
                      <Plus className="size-3" />
                    </div>
                    <div className="space-y-2">
                      {col.cards.map((card) => (
                        <div key={card.title} className="rounded-[0.6em] border border-foreground/8 bg-popover/80 p-2.5">
                          <p className="text-[0.65em] leading-snug text-foreground/85">{card.title}</p>
                          {card.tags && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {card.tags.map((t) => (
                                <span key={t.label} className={cn("flex h-4 items-center rounded-full px-1.5", TAG[t.tone ?? "glow"])}>
                                  <span className="text-[0.5em] font-medium">{t.label}</span>
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            {card.progress && (
                              <span className="flex items-center gap-1 text-foreground/50">
                                <span className="size-2.5 rounded-full border-2 border-highlight border-r-transparent" />
                                <span className="text-[0.55em]">{card.progress}</span>
                              </span>
                            )}
                            {card.people && <Faces people={card.people} className="ml-auto" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* inbox */}
            {inbox && (
              <div className="w-60 shrink-0 border-l border-foreground/8 bg-card/40 px-3 py-3">
                <div className="flex items-center justify-between px-1">
                  <span>{inbox.title}</span>
                  <X className="size-3.5 text-foreground/40" />
                </div>
                <div className="mt-3 flex gap-4 border-b border-foreground/8 px-1 text-foreground/40">
                  {inbox.tabs.map((t, i) => (
                    <span key={t} className={cn("flex items-center gap-1 pb-2", i === 0 && "border-b border-glow text-foreground")}>
                      <span className="text-[0.65em]">{t}</span>
                      {i === 1 && inbox.badge && (
                        <span className="flex size-3.5 items-center justify-center rounded-full bg-glow text-foreground">
                          <span className="text-[0.5em]">{inbox.badge}</span>
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="divide-y divide-foreground/8">
                  {inbox.items.map((it, i) => (
                    <div key={i} className="flex gap-2.5 px-1 py-3">
                      <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br", FACE[i % FACE.length])}>
                        <span className="text-[0.45em] font-semibold">
                          {it.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </span>
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.62em] leading-snug">
                          <span>{it.name}</span> <span className="text-foreground/50">{it.action}</span> {it.target && <span>{it.target}</span>}
                        </p>
                        <p className="mt-0.5 text-[0.55em] text-foreground/35">
                          {it.time} · {it.place}
                        </p>
                      </div>
                      {it.unread && <span className="mt-1 size-1.5 shrink-0 rounded-full bg-glow" />}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
