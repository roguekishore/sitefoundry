// Illustrations for clerk-card. Each one fills its parent (absolute inset-0) and animates on
// the card's hover (the card is the `group`). Text inside them comes in as props.
import type { ReactNode } from "react";
import { ChevronDown, CirclePlus, LoaderCircle, Lock, User } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./clerk-art.css";

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("clerk-art pointer-events-none absolute inset-0 overflow-hidden select-none", className)}>{children}</div>;
}

/** A person shown as initials on a soft tinted tile (stands in for a photo). */
export interface ClerkArtPerson {
  initials: string;
  /** which chart colour tints the tile */
  tone?: 1 | 2 | 3 | 4 | 5;
}

const tones = {
  1: "from-chart-1/35 to-chart-2/25",
  2: "from-chart-2/35 to-chart-3/30",
  3: "from-chart-3/40 to-chart-4/25",
  4: "from-chart-4/35 to-chart-1/25",
  5: "from-chart-5/35 to-chart-2/25",
};

function Face({ person, className }: { person: ClerkArtPerson; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center bg-linear-to-br font-display font-semibold text-foreground/70",
        tones[person.tone ?? 1],
        className,
      )}
    >
      {person.initials}
    </span>
  );
}

// ─── code boxes ──────────────────────────────────────────────────────────────

export interface CodeBoxesArtProps {
  /** digits that appear in the boxes on hover; the box after them gets the focus ring */
  digits: string;
  /** number of boxes */
  boxes?: number;
}

export function CodeBoxesArt({ digits, boxes = 6 }: CodeBoxesArtProps) {
  return (
    <Frame className="flex items-center justify-center pt-4">
      <div className="flex gap-2.5 sm:gap-3">
        {Array.from({ length: boxes }, (_, i) => (
          <span
            key={i}
            className={cn(
              "clerk-well flex h-10 w-8 items-center justify-center rounded-md font-mono text-base font-medium text-foreground transition-shadow duration-300",
              i === digits.length && "group-hover:ring-2 group-hover:ring-highlight/70",
            )}
          >
            <span
              className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {digits[i] ?? ""}
            </span>
          </span>
        ))}
      </div>
    </Frame>
  );
}

// ─── alert over a timeline ───────────────────────────────────────────────────

export interface AlertTimelineArtProps {
  /** mono message in the pill */
  message: string;
  /** small time stamp at the pill's right end */
  time?: string;
  /** dots on the timeline under the pill */
  dots?: number;
}

export function AlertTimelineArt({ message, time, dots = 4 }: AlertTimelineArtProps) {
  return (
    <Frame>
      <div className="absolute inset-x-6 top-6 sm:inset-x-10">
        <div className="clerk-chip relative z-10 flex h-11 items-center gap-3 rounded-lg px-4 font-mono text-xs text-muted-foreground">
          <LoaderCircle className="clerk-art-spin size-3.5 shrink-0" strokeWidth={1.75} />
          <span className="truncate">{message}</span>
          {time && <span className="ml-auto font-sans text-[0.6875rem] opacity-70">{time}</span>}
        </div>
        <div className="absolute top-11 left-14 h-[40rem] w-px bg-foreground/10" />
        <div className="absolute top-11 left-6 h-10 w-8 rounded-bl-xl border-b border-l border-foreground/10" />
        {Array.from({ length: dots }, (_, i) => (
          <span
            key={i}
            className="absolute left-14 flex size-5 -translate-x-1/2 items-center justify-center rounded-full bg-foreground/5 ring-1 ring-foreground/10 transition-colors duration-300 group-hover:bg-highlight/15"
            style={{ top: `${6 + i * 3.75}rem`, transitionDelay: `${i * 120}ms` }}
          >
            <span className="size-1 rounded-full bg-foreground/40" />
          </span>
        ))}
      </div>
    </Frame>
  );
}

// ─── dial (fingerprint, key, shield…) ────────────────────────────────────────

export interface DialArtProps {
  /** icon in the dial (e.g. lucide Fingerprint) */
  icon: ReactNode;
  /** a wide tray behind the dial, as under a lock */
  tray?: boolean;
}

export function DialArt({ icon, tray = false }: DialArtProps) {
  return (
    <Frame className="flex items-center justify-center">
      <span className="absolute inset-y-0 left-1/2 w-px bg-foreground/10" />
      {tray && (
        <div className="clerk-chip absolute inset-x-4 top-1/2 h-20 [clip-path:polygon(6%_0,94%_0,100%_35%,100%_100%,0_100%,0_35%)] opacity-70">
          <div className="clerk-well absolute inset-x-[15%] bottom-3 h-7 rounded-md" />
        </div>
      )}
      <span className="clerk-chip relative flex size-[4.5rem] items-center justify-center rounded-full">
        <span className="clerk-well flex size-14 items-center justify-center rounded-full text-muted-foreground transition-[color,transform] duration-500 group-hover:text-foreground group-hover:rotate-12 motion-reduce:transition-none [&_svg]:size-8 [&_svg]:stroke-[1.25]">
          {icon}
        </span>
      </span>
    </Frame>
  );
}

// ─── device sheet ────────────────────────────────────────────────────────────

export interface DeviceSheetArtProps {
  /** labels of the sheet's rows (e.g. device, browser, place) */
  rows: string[];
  /** quiet action at the bottom of the sheet */
  action?: string;
}

export function DeviceSheetArt({ rows, action }: DeviceSheetArtProps) {
  return (
    <Frame className="flex items-end justify-center pb-6">
      <div className="absolute inset-x-6 bottom-0 h-3/4 rounded-t-3xl border-x border-t border-foreground/5" />
      <div className="clerk-chip relative w-64 rounded-xl px-6 pt-5 pb-5 transition-transform duration-500 group-hover:-translate-y-1.5 motion-reduce:transition-none">
        <div className="mx-auto flex w-28 flex-col items-center">
          <span className="h-5 w-24 rounded-t-md border-2 border-b-0 border-foreground/15 bg-background/60" />
          <span className="h-1.5 w-28 rounded-b-md bg-foreground/20" />
        </div>
        <ul className="mt-4 text-center text-[0.6875rem] text-foreground/70">
          {rows.map((r) => (
            <li key={r} className="border-b border-foreground/7 py-2 last:border-0">
              {r}
            </li>
          ))}
        </ul>
        {action && <p className="mt-4 text-center text-[0.625rem] text-muted-foreground/70">{action}</p>}
      </div>
    </Frame>
  );
}

// ─── orbit of provider icons ─────────────────────────────────────────────────

export interface OrbitArtProps {
  /** icon in the centre square */
  center: ReactNode;
  /** four satellite icons, left to right */
  icons: ReactNode[];
}

const orbit = [
  { x: 12, y: 22 },
  { x: 25, y: 48 },
  { x: 75, y: 48 },
  { x: 88, y: 22 },
];

export function OrbitArt({ center, icons }: OrbitArtProps) {
  return (
    <Frame>
      <svg aria-hidden className="absolute inset-0 size-full text-foreground/10" viewBox="0 0 100 100" preserveAspectRatio="none">
        {orbit.slice(0, icons.length).map((p, i) => (
          <path key={i} d={`M${p.x} 0 V${p.y} Q${p.x} 80 50 60`} fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {icons.slice(0, 4).map((icon, i) => (
        <span
          key={i}
          className="clerk-chip absolute flex size-10 -translate-1/2 items-center justify-center rounded-full text-foreground/80 transition-transform duration-500 ease-out motion-reduce:transition-none [&_svg]:size-5"
          style={{ left: `${orbit[i].x}%`, top: `${orbit[i].y}%` }}
        >
          <span className={cn("transition-transform duration-500", i < 2 ? "group-hover:translate-x-1" : "group-hover:-translate-x-1")}>{icon}</span>
        </span>
      ))}
      <span className="clerk-chip absolute top-[48%] left-1/2 flex size-16 -translate-1/2 items-center justify-center rounded-xl">
        <span className="clerk-well flex size-12 items-center justify-center rounded-lg text-foreground/80 [&_svg]:size-6">{center}</span>
      </span>
    </Frame>
  );
}

// ─── radar spotlight ─────────────────────────────────────────────────────────

const radarDots = [
  [22, 46], [35, 70], [48, 40], [61, 63], [72, 32], [80, 70], [14, 78], [90, 50],
];

/** A spotlight from above over scattered dots, one of them targeted. */
export function RadarArt({ target = 4 }: { /** index of the targeted dot (0–7) */ target?: number }) {
  return (
    <Frame>
      <div className="absolute -top-1/3 left-1/2 size-[130%] -translate-x-1/2 rounded-full bg-radial from-foreground/12 via-foreground/4 via-40% to-transparent to-70%" />
      <div className="absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-foreground/15 blur-2xl" />
      {radarDots.map(([x, y], i) =>
        i === target ? (
          <span key={i} className="absolute -translate-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <span className="clerk-art-ping absolute inset-0 rounded-full ring-1 ring-highlight/60" />
            <span className="flex size-4 items-center justify-center rounded-full ring-1 ring-foreground/40 transition-colors duration-300 group-hover:ring-highlight">
              <span className="size-1.5 rounded-full bg-foreground/60 group-hover:bg-highlight" />
            </span>
          </span>
        ) : (
          <span
            key={i}
            className="absolute size-1 rounded-full bg-foreground/30 transition-transform duration-[1.2s] ease-out group-hover:translate-y-2 motion-reduce:transition-none"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ),
      )}
    </Frame>
  );
}

// ─── phone app grid ──────────────────────────────────────────────────────────

export interface PhoneGridArtProps {
  /** app tiles: an icon and a tiny label */
  apps: { icon: ReactNode; label: string }[];
  /** small count bubble on the second tile */
  badge?: string;
}

export function PhoneGridArt({ apps, badge }: PhoneGridArtProps) {
  return (
    <Frame className="[mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
      <div className="absolute inset-x-[12%] top-6 h-full rounded-t-[2.75rem] border-[6px] border-b-0 border-foreground/7 bg-foreground/[0.02]">
        <span className="mx-auto mt-4 flex size-6 items-center justify-center rounded-full bg-background/70 text-muted-foreground">
          <Lock className="size-3" strokeWidth={2} />
        </span>
        <div className="mt-5 flex justify-center gap-3 px-4 sm:gap-4">
          {apps.slice(0, 4).map((a, i) => (
            <div key={a.label} className="flex flex-col items-center gap-1.5">
              <span className="clerk-chip relative flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors duration-300 group-hover:text-foreground [&_svg]:size-5">
                {a.icon}
                {badge && i === 1 && (
                  <span className="absolute -top-1.5 -left-1.5 flex size-4 items-center justify-center rounded-full bg-muted text-[0.5625rem] font-semibold text-foreground ring-2 ring-card transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {badge}
                  </span>
                )}
              </span>
              <span className="text-[0.625rem] text-muted-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

// ─── scrambled token over a profile ──────────────────────────────────────────

export interface ScrambleArtProps {
  /** the highlighted token in the scramble */
  token: string;
  /** name under the profile tile */
  name: string;
  /** mono email under the name */
  email: string;
}

const ALPHABET = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

/** Deterministic pseudo-random characters, so server and client render the same. */
function scramble(seed: number, length: number) {
  let s = seed;
  let out = "";
  for (let i = 0; i < length; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    out += ALPHABET[s % ALPHABET.length];
  }
  return out;
}

export function ScrambleArt({ token, name, email }: ScrambleArtProps) {
  const rows = Array.from({ length: 9 }, (_, r) => scramble(r * 7919 + 17, 96));
  return (
    <Frame>
      <div className="absolute inset-x-0 top-2 overflow-hidden font-mono text-[0.625rem] leading-[1.15rem] text-foreground/10 [mask-image:radial-gradient(ellipse_55%_60%_at_50%_45%,black,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="clerk-art-drift w-max whitespace-pre motion-reduce:animate-none" style={{ animationDuration: `${26 + r * 3}s` }}>
            {r === 4 ? (
              <>
                {row.slice(0, 40)}
                <span className="rounded-sm bg-foreground/10 px-1 text-foreground/80">{token}</span>
                {row.slice(40)}
              </>
            ) : (
              row
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-[-20%] top-[52%] h-full rounded-[50%] border-t border-foreground/7 bg-linear-to-b from-foreground/[0.03] to-transparent" />
      <div className="absolute inset-x-0 top-[40%] flex flex-col items-center">
        <span className="clerk-chip flex size-20 items-center justify-center rounded-lg text-foreground/30 transition-colors duration-300 group-hover:text-foreground/50">
          <User className="size-12" strokeWidth={0.75} />
        </span>
        <p className="mt-4 text-[0.6875rem] font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 font-mono text-[0.6875rem] text-muted-foreground">{email}</p>
      </div>
    </Frame>
  );
}

// ─── server rack with a status pill ──────────────────────────────────────────

export interface RackArtProps {
  /** mono status in the pill (e.g. "Verifying…") */
  status: string;
  /** rack units on the right */
  units?: number;
}

export function RackArt({ status, units = 3 }: RackArtProps) {
  return (
    <Frame>
      <div className="absolute right-0 bottom-0 flex translate-x-[35%] flex-col gap-1.5 sm:right-3 sm:translate-x-0">
        {Array.from({ length: units }, (_, i) => (
          <div key={i} className="clerk-chip flex h-10 w-56 items-center gap-3 rounded-md px-3">
            <span className="size-4 rounded-full ring-2 ring-foreground/20" />
            <span className="h-2 w-6 border-y border-foreground/20" />
            <span className="h-3 flex-1 bg-[repeating-linear-gradient(90deg,var(--muted-foreground)_0_1px,transparent_1px_3px)] opacity-40" />
            <span
              className="size-4 rounded-sm bg-foreground/10 transition-colors duration-300 group-hover:bg-highlight/60"
              style={{ transitionDelay: `${i * 150}ms` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-6 hidden flex-col items-center sm:flex">
        <span className="h-4 w-32 rounded-t-md border-2 border-b-0 border-foreground/15 bg-background/60" />
        <span className="h-1.5 w-36 rounded-b-md bg-foreground/20" />
      </div>
      <span className="absolute bottom-[3.75rem] left-6 h-px w-[60%] bg-foreground/10" />
      <div className="clerk-chip absolute bottom-12 left-6 flex h-9 items-center gap-2.5 rounded-lg px-3 font-mono text-[0.6875rem] text-muted-foreground sm:left-1/2 sm:-translate-x-1/2">
        <LoaderCircle className="clerk-art-spin size-3.5" strokeWidth={1.75} />
        {status}
      </div>
    </Frame>
  );
}

// ─── node graph ──────────────────────────────────────────────────────────────

export interface NodeGraphArtProps {
  /** icon in the big centre node */
  center: ReactNode;
  /** small nodes to its right, joined by dotted lines */
  icons: ReactNode[];
}

export function NodeGraphArt({ center, icons }: NodeGraphArtProps) {
  return (
    <Frame>
      <div className="clerk-chip absolute top-6 -left-6 h-[85%] w-24 rounded-lg [clip-path:polygon(0_0,85%_0,100%_8%,100%_100%,0_100%)]" />
      <svg aria-hidden className="absolute inset-0 size-full text-foreground/25" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="clerk-art-dash" d="M30 60 H50" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" />
        <path className="clerk-art-dash" d="M50 60 L72 55 L90 30" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" />
        <path className="clerk-art-dash" d="M72 55 L84 85" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="clerk-chip absolute top-[60%] left-1/2 flex size-20 -translate-1/2 items-center justify-center rounded-full">
        <span className="clerk-well flex size-14 items-center justify-center rounded-full text-foreground/70 transition-colors duration-300 group-hover:text-foreground [&_svg]:size-7">
          {center}
        </span>
      </span>
      {icons.slice(0, 3).map((icon, i) => {
        const spots = [
          { left: "72%", top: "55%" },
          { left: "90%", top: "30%" },
          { left: "84%", top: "85%" },
        ];
        return (
          <span
            key={i}
            className="clerk-chip absolute flex size-9 -translate-1/2 items-center justify-center rounded-full text-foreground/80 [&_svg]:size-4"
            style={spots[i]}
          >
            {icon}
          </span>
        );
      })}
    </Frame>
  );
}

// ─── light-card art: roles, auto-join, invite, org switcher ─────────────────

export interface RoleGridArtProps {
  /** faces placed in a checkerboard of tiles */
  people: ClerkArtPerson[];
  /** role chips under the grid */
  roles: string[];
  /** index of the selected role */
  active?: number;
}

export function RoleGridArt({ people, roles, active = 0 }: RoleGridArtProps) {
  const spots = [1, 3, 5, 7];
  return (
    <Frame className="flex flex-col items-center justify-end pb-6">
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }, (_, i) => {
          const p = people[spots.indexOf(i)];
          return (
            <span
              key={i}
              className={cn(
                "size-20 overflow-hidden rounded-lg ring-1 ring-border",
                p ? "bg-card p-1 shadow-sm" : i === 2 ? "bg-muted" : "bg-card",
              )}
            >
              {p && <Face person={p} className="size-full rounded-md text-lg transition-transform duration-500 group-hover:scale-105" />}
            </span>
          );
        })}
      </div>
      <div className="mt-6 flex w-full justify-center gap-1 overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {roles.map((r, i) => (
          <span
            key={r}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem]",
              i === active ? "bg-card font-medium text-foreground ring-1 ring-border" : "text-muted-foreground/70",
            )}
          >
            {r}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export interface AutoJoinArtProps {
  /** three faces that branch into the pill */
  people: ClerkArtPerson[];
  /** label of the pill (e.g. "Auto-join") */
  label: string;
}

export function AutoJoinArt({ people, label }: AutoJoinArtProps) {
  return (
    <Frame>
      {[60, 44, 28].map((s) => (
        <span key={s} className="absolute top-[35%] left-1/2 aspect-square -translate-1/2 rounded-full border border-foreground/5" style={{ width: `${s * 1.5}%` }} />
      ))}
      <svg aria-hidden className="absolute inset-0 size-full text-foreground/12" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M36 30 V46 Q36 52 42 52 H58 Q64 52 64 46 V30 M50 30 V80" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute top-[30%] left-1/2 flex -translate-1/2 gap-5">
        {people.slice(0, 3).map((p, i) => (
          <span
            key={i}
            className={cn(
              "size-9 overflow-hidden rounded-full p-0.5 ring-1 ring-border bg-card shadow-sm transition-opacity duration-500",
              i < 2 && "opacity-45 group-hover:opacity-100",
            )}
          >
            <Face person={p} className="size-full rounded-full text-[0.625rem]" />
          </span>
        ))}
      </div>
      <span className="absolute top-[80%] left-1/2 flex h-7 -translate-1/2 items-center gap-1.5 rounded-lg bg-card px-2 text-xs font-medium text-foreground shadow-[0_0_0_1px_var(--border),0_2px_6px_color-mix(in_oklab,var(--foreground)_8%,transparent)]">
        <CirclePlus className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
        {label}
      </span>
    </Frame>
  );
}

export interface InviteArtProps {
  /** label of the dark pill */
  label: string;
  /** small icon before the label (e.g. lucide Mail) */
  icon?: ReactNode;
}

export function InviteArt({ label, icon }: InviteArtProps) {
  return (
    <Frame>
      <div className="absolute top-0 left-[8%] h-[45%] w-[84%] rounded-bl-2xl border-b border-l border-border" />
      <div className="absolute top-[45%] right-[8%] h-full w-[40%] rounded-tr-2xl border-t border-r border-border" />
      <span className="absolute top-[45%] left-1/2 flex h-8 -translate-1/2 items-center gap-2 rounded-full bg-foreground px-3.5 text-xs font-semibold text-background shadow-[0_6px_16px_-4px_color-mix(in_oklab,var(--foreground)_40%,transparent)] transition-transform duration-300 group-hover:-translate-y-[calc(50%+3px)] motion-reduce:transition-none [&_svg]:size-3.5">
        {icon}
        {label}
      </span>
    </Frame>
  );
}

export interface OrgSwitcherArtProps {
  /** the organisation's name in the switcher */
  name: string;
  /** small mark before the name */
  mark?: ReactNode;
  /** skeleton rows that fill the panel on hover */
  rows?: number;
}

export function OrgSwitcherArt({ name, mark, rows = 4 }: OrgSwitcherArtProps) {
  return (
    <Frame className="flex flex-col items-center px-6 pt-4 sm:px-12">
      <span className="flex h-8 items-center gap-2 rounded-lg bg-card px-2.5 text-xs font-medium text-foreground shadow-[0_0_0_1px_var(--border),0_2px_6px_color-mix(in_oklab,var(--foreground)_8%,transparent)] [&_svg]:size-3.5">
        {mark}
        {name}
        <ChevronDown className="ml-2 text-muted-foreground" strokeWidth={1.75} />
      </span>
      <div className="mt-4 w-full flex-1 rounded-t-xl border border-b-0 border-dashed border-foreground/15 p-4">
        {Array.from({ length: rows }, (_, i) => (
          <div
            key={i}
            className="flex translate-y-1 items-center gap-3 border-b border-border py-3 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="size-6 rounded-md bg-muted" />
            <span className="h-2 rounded-full bg-muted" style={{ width: `${40 + ((i * 23) % 35)}%` }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}
