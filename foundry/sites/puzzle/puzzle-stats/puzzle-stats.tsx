import type { CSSProperties } from "react";
import { Info } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./puzzle-stats.css";

export interface PuzzleStat {
  /** the large figure, e.g. "8,000+" */
  value: string;
  /** the line under it */
  label: string;
  /** a small footnote link with an info icon, e.g. "See the terms" */
  footnote?: { label: string; href: string };
}

export interface PuzzleStatsProps {
  /** four figures read best */
  stats: PuzzleStat[];
  className?: string;
}

/** A row of figure cards that rise in as they scroll into view. */
export function PuzzleStats({ stats, className }: PuzzleStatsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <ul className="mx-auto grid max-w-[78.5rem] gap-[1.375rem] px-gutter pb-10 lg:grid-cols-4 lg:gap-7 lg:pb-14">
        {stats.map((s, i) => (
          <li
            key={s.value + s.label}
            style={{ "--puzzle-stats-i": i } as CSSProperties}
            className="puzzle-stats-card rounded-[calc(var(--radius)*0.9)] border border-border bg-card px-4 pt-4 pb-4 text-card-foreground shadow-[0_2px_20px_0_color-mix(in_oklab,var(--highlight)_16%,transparent)] lg:min-h-[12.75rem] lg:rounded-[calc(var(--radius)+2px)] lg:px-5 lg:pt-5 lg:pb-6"
          >
            <p className="font-display text-[1.75rem]/[1.3] font-normal lg:text-4xl/[1.2]">{s.value}</p>
            <p className="mt-4 text-base/[1.55] text-muted-foreground lg:mt-7">{s.label}</p>
            {s.footnote && (
              <a href={s.footnote.href} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-highlight motion-reduce:transition-none">
                <Info aria-hidden className="size-4" strokeWidth={1.5} />
                {s.footnote.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
