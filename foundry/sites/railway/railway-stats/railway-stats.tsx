import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./railway-stats.css";

export interface RailwayStat {
  /** the row's name, shown in grey capitals, e.g. "users" */
  label: string;
  /** the full figure for wide screens, e.g. "4,812,906" */
  value: string;
  /** a shorter figure for phones, e.g. "4.81M" (defaults to value) */
  short?: string;
}

export interface RailwayStatsProps {
  /** the serif heading */
  title: string;
  /** one grey line under it */
  lead: string;
  /** one board row each */
  stats: RailwayStat[];
  className?: string;
}

// Board geometry: 43 cells a row on desktops (the middle 31 hold the text, the rest fill the
// edges), 30 on phones and tablets, left-aligned so a phone shows about twelve.
const WIDE = { cells: 43, labelAt: 9, valueEnd: 33 };
const NARROW = { cells: 30, at: 1 };

function blankRow(n: number) {
  return Array.from({ length: n }, () => "");
}

function place(row: string[], text: string, start: number) {
  [...text].forEach((ch, i) => {
    if (start + i >= 0 && start + i < row.length) row[start + i] = ch;
  });
  return row;
}

function wideRows(stats: RailwayStat[]) {
  const blank = { chars: blankRow(WIDE.cells), labelEnd: 0 };
  const rows = stats.map((s) => {
    const chars = place(blankRow(WIDE.cells), s.label.toUpperCase(), WIDE.labelAt);
    place(chars, s.value, WIDE.valueEnd + 1 - s.value.length);
    return { chars, labelEnd: WIDE.labelAt + s.label.length };
  });
  return [blank, ...rows, blank];
}

function narrowRows(stats: RailwayStat[]) {
  const rows: { chars: string[]; label: boolean }[] = [{ chars: blankRow(NARROW.cells), label: false }];
  stats.forEach((s) => {
    rows.push({ chars: place(blankRow(NARROW.cells), s.label.toUpperCase(), NARROW.at), label: true });
    rows.push({ chars: place(blankRow(NARROW.cells), s.short ?? s.value, NARROW.at), label: false });
  });
  rows.push({ chars: blankRow(NARROW.cells), label: false });
  return rows;
}

function Cell({ ch, col, grey, tickDelay }: { ch: string; col: number; grey: boolean; tickDelay?: number }) {
  return (
    <span className="railway-stats-cell relative flex shrink-0 items-center justify-center rounded-sm border border-foreground/5 bg-muted">
      {/* the split-flap seam across the middle */}
      <span className="absolute inset-x-0 top-1/2 h-px bg-background/70" aria-hidden />
      {ch && (
        <span
          className={cn("railway-stats-char block", grey ? "text-muted-foreground/70" : "text-foreground")}
          style={{ "--railway-stats-col": `${col * 10}px` } as CSSProperties}
        >
          <span className={cn("block", tickDelay !== undefined && "railway-stats-tick")} style={tickDelay !== undefined ? { animationDelay: `${tickDelay}s` } : undefined}>
            {ch}
          </span>
        </span>
      )}
    </span>
  );
}

/**
 * A departures-board stats section: a centred serif heading and grey line, then a full-bleed
 * grid of near-black split-flap cells spelling each figure in mono capitals, grey names on
 * the left and white numbers on the right. Characters flip down into place, column by
 * column, as the board scrolls in; the last digits keep ticking.
 */
export function RailwayStats({ title, lead, stats, className }: RailwayStatsProps) {
  const wide = wideRows(stats);
  const narrow = narrowRows(stats);
  return (
    <section className={cn("overflow-clip pt-24 pb-28 text-center text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="mx-auto max-w-[22rem] font-display text-[2.5rem] leading-[1.2] tracking-[-0.01em] text-balance lg:max-w-none">{title}</h2>
        <p className="mx-auto mt-2.5 max-w-[22rem] text-base leading-7 text-muted-foreground sm:max-w-none lg:mt-1.5">{lead}</p>
      </div>

      <div className="mt-14 font-mono" role="table" aria-label={title}>
        {/* screen readers get a plain list instead of the cells */}
        <ul className="sr-only">
          {stats.map((s) => (
            <li key={s.label}>
              {s.label}: {s.value}
            </li>
          ))}
        </ul>

        <div className="hidden flex-col items-center gap-4 xl:flex" aria-hidden>
          {wide.map((r, ri) => (
            <div key={ri} className="flex gap-1 [&_.railway-stats-cell]:h-14 [&_.railway-stats-cell]:w-[2.625rem] [&_.railway-stats-cell]:text-[2.5rem]">
              {r.chars.map((ch, ci) => (
                <Cell key={ci} ch={ch} col={ci} grey={ci < r.labelEnd} tickDelay={ci >= WIDE.valueEnd - 1 && ch !== "" ? ri * 0.7 + (ci - WIDE.valueEnd) * 0.3 : undefined} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3.5 xl:hidden" aria-hidden>
          {narrow.map((r, ri) => (
            <div key={ri} className="flex gap-0.5 [&_.railway-stats-cell]:h-10 [&_.railway-stats-cell]:w-8 [&_.railway-stats-cell]:text-[1.75rem]">
              {r.chars.map((ch, ci) => (
                <Cell key={ci} ch={ch} col={ci} grey={r.label} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
