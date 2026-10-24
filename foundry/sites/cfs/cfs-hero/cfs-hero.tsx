import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./cfs-hero.css";

export interface CfsHeroPillar {
  /** short monospace label, e.g. "Build small" */
  label: string;
  /** one or two sentences under it */
  text: string;
}

export interface CfsHeroProps {
  /** the big statement (wraps to about three lines on wide screens) */
  title: string;
  /** up to three pillars shown under the title */
  pillars: CfsHeroPillar[];
  /** which pillar's dot is filled (and pulses); default 0 */
  activeIndex?: number;
  /** the background photo or video; covers the hero. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Full-window photo hero with a light statement and three dotted pillars. */
export function CfsHero({ title, pillars, activeIndex = 0, media, className }: CfsHeroProps) {
  return (
    <section className={cn("cfs-hero dark relative flex h-svh min-h-[40rem] flex-col overflow-clip bg-background text-foreground", className)}>
      <div
        className={cn(
          "cfs-hero-media absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
          !media && "bg-muted",
        )}
      >
        {media}
      </div>
      {/* a soft scrim at the bottom keeps the white type readable on any photo */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />

      <div className="cfs-hero-in relative mx-auto mt-auto w-full max-w-page px-gutter pb-10 lg:pb-[3.25rem]">
        <h1 className="max-w-[13em] font-display text-[clamp(2.125rem,4.383vw,3.945rem)] leading-[1.2] font-light">{title}</h1>

        <ul className="cfs-hero-pillars mt-[2.875rem] grid gap-y-[2.75rem] lg:mt-[3.25rem] lg:grid-cols-4 lg:gap-x-5">
          {pillars.map((pillar, i) => (
            <li key={pillar.label}>
              <p className="flex items-center gap-[7px] font-mono text-sm leading-[1.2]">
                <span
                  aria-hidden
                  className={cn(
                    "size-3 shrink-0 rounded-full border border-primary",
                    i === activeIndex ? "cfs-hero-dot-active bg-primary" : "bg-transparent",
                  )}
                />
                {pillar.label}
              </p>
              <p className="mt-4 max-w-[18.75rem] text-sm leading-[1.5] lg:mt-[1.375rem]">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
