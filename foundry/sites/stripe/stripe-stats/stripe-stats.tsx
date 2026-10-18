import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import { noise } from "./noise";
import "./stripe-stats.css";

export interface StripeStat {
  /** the big figure, e.g. "135+" */
  value: string;
  /** what it counts, one or two short lines */
  label: string;
}

export interface StripeStatsProps {
  /** the centred statement; pass two strings to choose the line break */
  title: string | [string, string];
  /** four figures; one at a time is lit while the others rest in slate */
  stats: StripeStat[];
  /** start in the dark variant (the band's own switch flips it) */
  dark?: boolean;
  /** label of the light/dark switch, for screen readers; leave out to hide the switch */
  toggleLabel?: string;
  className?: string;
}

// The burst: rays fanning up from a point at the bottom centre, each tipped with a dot.
const RAYS = Array.from({ length: 150 }, (_, i) => {
  const angle = Math.PI * (0.03 + 0.94 * noise(i, 1));
  const length = 180 + noise(i, 2) * 340 * Math.sin(angle) ** 0.6;
  return {
    x: 600 + Math.cos(angle) * length * 1.5,
    y: 600 - Math.sin(angle) * length,
    w: 0.6 + noise(i, 3) * 1.2,
    dot: noise(i, 4) > 0.45,
    o: 0.45 + noise(i, 5) * 0.55,
  };
});

/**
 * "Backbone" stats band: a centred light statement, four big figures between hairlines (one
 * lit at a time, with a short gradient line gliding along the rule above it), and a burst
 * of thin blue rays over a warm glow. A small sun/moon switch flips the band dark.
 */
export function StripeStats({ title, stats, dark: startDark = false, toggleLabel, className }: StripeStatsProps) {
  const [dark, setDark] = useState(startDark);
  const lines = Array.isArray(title) ? title : [title];
  const shown = stats.slice(0, 4);

  return (
    <StripeFrame
      className={cn("overflow-hidden transition-colors duration-700 motion-reduce:transition-none", dark && "dark", className)}
      innerClassName="px-0"
    >
      {/* a cool wash behind the whole band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_100%,color-mix(in_oklab,var(--chart-5)_45%,transparent),transparent_75%)] dark:bg-[radial-gradient(90%_70%_at_50%_100%,color-mix(in_oklab,var(--chart-3)_50%,transparent),transparent_80%)]"
      />

      <div className="relative px-gutter pt-16 pb-10 lg:pt-28 lg:pb-20">
        <StripeHeading
          size="display"
          align="center"
          lead={lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        />
      </div>

      <div className="relative grid grid-cols-2 gap-y-10 px-gutter pb-10 lg:grid-cols-4 lg:border-y lg:border-border lg:px-0 lg:py-11">
        {/* the gliding line on the top rule, over the lit figure (desktop) */}
        <span
          aria-hidden
          className="absolute -top-px left-0 hidden h-px w-1/4 animate-[stripe-stats-glide_12s_infinite] bg-[linear-gradient(90deg,transparent,var(--primary)_50%,transparent)] motion-reduce:animate-none lg:block"
        />
        {/* phones: a hairline between the two rows */}
        <span aria-hidden className="absolute inset-x-[15%] top-1/2 -mt-5 h-px bg-[linear-gradient(90deg,transparent,var(--border),transparent)] lg:hidden" />
        {shown.map((s, i) => (
          <div
            key={s.value}
            className="animate-[stripe-stats-lit_12s_infinite] text-center text-foreground motion-reduce:animate-none max-lg:animate-none"
            style={{ animationDelay: `${i * 3 - 12}s` }}
          >
            <p className="font-display text-[1.75rem] leading-none font-light tracking-[-0.01em] tabular-nums lg:text-5xl lg:tracking-[-0.02em]">
              {s.value}
            </p>
            <p className="mx-auto mt-3 max-w-[11rem] text-base leading-[1.4] font-light text-balance lg:mt-3">{s.label}</p>
          </div>
        ))}
      </div>

      {/* the burst */}
      <div className="relative h-72 sm:h-96 lg:h-[32rem]">
        {toggleLabel && (
          <button
            type="button"
            aria-label={toggleLabel}
            aria-pressed={dark}
            onClick={() => setDark((d) => !d)}
            className="absolute top-5 right-gutter z-10 hidden size-8 items-center justify-center rounded-md border border-border bg-background/60 text-foreground/80 backdrop-blur transition-colors hover:text-foreground sm:flex lg:right-6"
          >
            {dark ? <Moon className="size-4" strokeWidth={1.75} /> : <Sun className="size-4" strokeWidth={1.75} />}
          </button>
        )}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(40%_70%_at_50%_100%,color-mix(in_oklab,var(--chart-4)_80%,transparent),color-mix(in_oklab,var(--chart-1)_25%,transparent)_45%,transparent_80%)]" />
        <svg aria-hidden viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 size-full">
          <g className="origin-[50%_100%] animate-[stripe-stats-breathe_9s_ease-in-out_infinite_alternate] [transform-box:view-box] motion-reduce:animate-none">
            {RAYS.map((r, i) => (
              <g key={i} opacity={r.o}>
                <line x1={600} y1={600} x2={r.x} y2={r.y} className="stroke-primary" strokeWidth={r.w} />
                {r.dot && <circle cx={r.x} cy={r.y} r={2.2} className="fill-primary" />}
              </g>
            ))}
          </g>
        </svg>
      </div>
    </StripeFrame>
  );
}
