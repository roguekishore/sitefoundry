import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioHeading } from "@foundry/attio-heading";
import "./attio-scale.css";

export interface AttioScaleStat {
  /** the figure, e.g. "40M" */
  value: string;
  /** what it counts */
  label: string;
}

export interface AttioScaleProps {
  /** the small label over the heading */
  badge?: string;
  /** the heading: dark lead… */
  lead: string;
  /** …and grey rest, on its own line */
  rest?: string;
  /** four figures in a 2×2 grid, each with a blue rule */
  stats: AttioScaleStat[];
  className?: string;
}

// An exponential growth line across a 1392×760 box: flat at the bottom left, steep at the top right.
const W = 1392;
const H = 760;
const BASE = 700;
const points = Array.from({ length: 61 }, (_, i) => {
  const t = i / 60;
  const y = BASE - BASE * ((Math.exp(2.4 * t) - 1) / (Math.exp(2.4) - 1));
  return `${(t * W).toFixed(1)},${y.toFixed(1)}`;
});
const LINE = `M${points.join(" L")}`;
// the area above the line, filled with the page colour so the hairlines only show beneath it
const COVER = `${LINE} L${W},0 L0,0 Z`;

/**
 * A white framed section about scale: badge, two-tone heading and four big figures with blue
 * rules on the left; behind them, a growth line sweeping from the bottom left to the top
 * right corner over a field of vertical hairlines. The blue line draws itself over a grey
 * one as the section scrolls up.
 */
export function AttioScale({ badge, lead, rest, stats, className }: AttioScaleProps) {
  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <div className="attio-scale-track relative isolate mx-auto max-w-page overflow-clip border-b border-border lg:min-h-[47.5rem] lg:border-x">
        <div className="relative px-8 pt-[5.5rem] lg:px-[3.6875rem] lg:pt-section lg:pb-56">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} restOnNewLine className="mt-5 max-w-[25rem] lg:mt-6" />
          <dl className="mt-10 grid max-w-[33rem] grid-cols-2 gap-x-6 gap-y-8 lg:mt-14">
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{ "--attio-scale-step": i } as CSSProperties}
                className="attio-scale-stat flex flex-col-reverse border-l-2 border-highlight pl-4 lg:pl-6"
              >
                <dt className="text-[0.9375rem] leading-[1.1] font-medium tracking-[-0.01em] text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.02em]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* the growth line over vertical hairlines; in flow on phones, behind everything on desktop */}
        <div aria-hidden className="relative -z-10 mt-6 h-60 lg:absolute lg:inset-0 lg:mt-0 lg:h-auto">
          <div className="absolute inset-0 bg-gradient-to-l from-highlight/8 to-transparent to-60%" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,var(--border)_0_1px,transparent_1px_10px)]" />
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 size-full">
            <path d={COVER} className="fill-background" />
            <path d={LINE} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={1.5} className="stroke-input" />
            <path d={LINE} pathLength={1} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={1.5} className="attio-scale-line stroke-highlight" />
          </svg>
        </div>
      </div>
    </section>
  );
}
