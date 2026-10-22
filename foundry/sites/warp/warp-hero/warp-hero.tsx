import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpButton } from "@foundry/warp-button";
import { WarpGuides } from "@foundry/warp-section";
import { WarpPlate } from "@foundry/warp-plate";
import "./warp-hero.css";

export type WarpHeroCellState = "queued" | "working" | "waiting" | "done";

export interface WarpHeroProps {
  /** the big monospace headline (wraps at about 25 characters on desktop) */
  title: string;
  /** the line under the headline */
  lead: string;
  /** the solid ink button */
  primary: { label: string; href: string };
  /** the outline button (brand-blue outline on phones) */
  secondary?: { label: string; href: string };
  /** caption of the figure frame, e.g. "fig. 1 — the floor" */
  caption: string;
  /** small label at the top left of the figure card */
  figureLabel: string;
  /** small label at the top right of the figure card, e.g. "8 × 28 · live" */
  figureMeta?: string;
  /** legend labels for the four cell states */
  legend: Record<WarpHeroCellState, string>;
  /** the running totals at the bottom right, e.g. ["224 jobs", "41 running"] */
  totals?: string[];
  /** rows and columns of the matrix */
  rows?: number;
  columns?: number;
  /** each cell's state, row by row; a fixed pattern is used when not given */
  cells?: WarpHeroCellState[];
  className?: string;
}

/** A stable, varied pattern: about one cell in five is active. */
function defaultState(i: number): WarpHeroCellState {
  const h = (i * 7919 + 31) % 101;
  if (h < 15) return "working";
  if (h < 19) return "waiting";
  if (h < 23) return "done";
  return "queued";
}

const cellLook: Record<WarpHeroCellState, string> = {
  queued:
    "border border-foreground/25 bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--foreground)_22%,transparent)_0_1px,transparent_1px_3px)]",
  working: "warp-hero-cell-working bg-primary",
  waiting: "border border-primary/70 bg-[repeating-linear-gradient(-45deg,var(--primary)_0_1px,transparent_1px_3px)] opacity-80",
  done: "border border-primary bg-card",
};

const states: WarpHeroCellState[] = ["queued", "working", "waiting", "done"];

/** Warp's hero: mono headline, two buttons, and the status-matrix figure, window tall. */
export function WarpHero({
  title,
  lead,
  primary,
  secondary,
  caption,
  figureLabel,
  figureMeta,
  legend,
  totals = [],
  rows = 8,
  columns = 28,
  cells,
  className,
}: WarpHeroProps) {
  const count = rows * columns;
  const grid = Array.from({ length: count }, (_, i) => cells?.[i] ?? defaultState(i));
  const step = (i: number) => ({ "--warp-hero-i": i }) as CSSProperties;

  return (
    <section
      className={cn(
        "relative isolate h-svh min-h-[40rem] overflow-clip bg-background text-foreground",
        "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--foreground)_7%,transparent)_1.2px,transparent_0)] bg-[size:24px_24px]",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-y-0 right-2 left-2 -z-10 mx-auto max-w-page bg-background/70 lg:right-0 lg:left-0" />
      <WarpGuides ticks={false} />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[26rem] bg-linear-to-b from-card to-transparent" />

      <div className="relative mx-2 max-w-page px-4 pt-[3.25rem] lg:mx-auto lg:px-6 lg:pt-[5.25rem]">
        <h1
          className="warp-hero-in max-w-[25ch] font-mono text-[2rem] leading-[1.08] font-[380] tracking-[calc(0.02em_-_var(--warp-squeeze,0em))] lg:text-[3.25rem] lg:leading-[1.1] lg:tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]"
          style={step(0)}
        >
          {title}
        </h1>
        <p
          className="warp-hero-in mt-5 max-w-[17.5rem] text-base leading-[1.65] tracking-[calc(0.05em_-_var(--warp-squeeze,0em))] text-muted-foreground sm:max-w-none lg:mt-6"
          style={step(1)}
        >
          {lead}
        </p>
        <div className="warp-hero-in mt-7 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap" style={step(2)}>
          <WarpButton href={primary.href} className="min-h-[3.375rem] sm:min-h-[2.125rem]">
            {primary.label}
          </WarpButton>
          {secondary && (
            <WarpButton
              href={secondary.href}
              variant="blue"
              className="min-h-[3.375rem] sm:min-h-[2.125rem] lg:border-border lg:text-foreground lg:hover:border-primary lg:hover:bg-card lg:hover:text-primary"
            >
              {secondary.label}
            </WarpButton>
          )}
        </div>

        <div className="warp-hero-in mt-7 lg:mt-10" style={step(3)}>
          <WarpPlate caption={caption} rules innerClassName="px-6 py-6 lg:px-8 lg:pt-8 lg:pb-0">
            <div className="flex items-start justify-between gap-4 font-mono text-[0.5625rem] leading-[1.65] tracking-[calc(0.12em_-_var(--warp-squeeze,0em))] text-muted-foreground uppercase lg:text-[0.625rem]">
              <span>[ {figureLabel} ]</span>
              {figureMeta && <span className="shrink-0">{figureMeta}</span>}
            </div>

            <div
              role="img"
              aria-label={states.map((s) => `${grid.filter((c) => c === s).length} ${legend[s]}`).join(", ")}
              className="mt-6 grid lg:mt-7"
              style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
              {grid.map((s, i) => (
                <span key={i} className="flex aspect-square items-center justify-center">
                  <span
                    className={cn("size-full lg:size-2.5", cellLook[s])}
                    style={s === "working" ? { animationDelay: `${-((i * 337) % 1800)}ms` } : undefined}
                  />
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-border py-4 font-mono text-[0.5625rem] tracking-[calc(0.12em_-_var(--warp-squeeze,0em))] uppercase lg:mt-6 lg:flex-row lg:items-center lg:justify-between lg:py-5 lg:text-[0.625rem]">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-muted-foreground">
                {states.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span aria-hidden className={cn("size-2", cellLook[s])} />
                    {legend[s]}
                  </li>
                ))}
              </ul>
              {totals.length > 0 && <p className="leading-[1.8] text-foreground/78">{totals.join(" · ")}</p>}
            </div>
          </WarpPlate>
        </div>
      </div>
    </section>
  );
}
