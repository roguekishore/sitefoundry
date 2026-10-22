import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";
import "./instituteofhealth-hero.css";

export interface InstituteofhealthStat {
  /** small label above the number */
  label: string;
  /** the figure; it counts up from 0 when the page loads */
  value: number;
}

export interface InstituteofhealthHeroProps {
  /** the big statement at the bottom left */
  headline: string;
  /** one or two lines under the headline */
  subhead?: string;
  /** the see-through button under the subhead */
  action?: { label: string; href: string };
  /** the figures at the top right (phones show one at a time) */
  stats: InstituteofhealthStat[];
  /** the full-bleed background (a video or image, cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  /** stay pinned while the next sections slide over (wrap what follows in a `relative z-10` layer) */
  pinned?: boolean;
  className?: string;
}

/** Counts from 0 to `to` once, after hydration; static HTML and reduced motion show the final figure. */
function useCountUp(to: number, ms = 1800) {
  const [n, setN] = useState(to);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return n;
}

function StatFigure({ value }: { value: number }) {
  return <>{useCountUp(value)}</>;
}

/** Three dots, one brighter at a time (a loop in CSS). */
function Dots() {
  return (
    <span aria-hidden className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span key={i} className="ioh-hero-dot size-[3px] rounded-full bg-current" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
    </span>
  );
}

export function InstituteofhealthHero({ headline, subhead, action, stats, media, pinned = true, className }: InstituteofhealthHeroProps) {
  // Phones show one stat at a time; the line above fills a third more for each.
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (stats.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % stats.length), 4500);
    return () => window.clearInterval(id);
  }, [stats.length]);

  return (
    <section
      className={cn(
        "relative isolate h-svh overflow-clip text-highlight-foreground",
        pinned && "sticky top-0 z-0",
        className,
      )}
    >
      {/* Background: media or a flat placeholder, under a dark scrim (darker at the top and bottom). */}
      <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">{media ?? <div className="bg-muted-foreground" />}</div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(oklch(0_0_0/0.6),oklch(0_0_0/0.15)_50%,oklch(0_0_0/0.35))]" /> {/* foundry-allow-colour: the scrim is plain black at 60/15/35%, whatever the theme */}

      <div className="flex h-full flex-col justify-between px-gutter pt-[6.8rem] pb-3.5 lg:pt-[7.25rem] lg:pb-[5.75rem]">
        {/* Stats. Phones: one at a time under a progress line. Desktop: all, stacked at the right. */}
        <div className="lg:hidden">
          <div className="relative h-0.5 bg-highlight-foreground/30">
            <div
              className="absolute inset-y-0 left-0 bg-highlight-foreground transition-[width] duration-[1500ms] ease-in-out motion-reduce:transition-none"
              style={{ width: `${((active + 1) / Math.max(stats.length, 1)) * 100}%` }}
            />
          </div>
          <div className="grid">
            {stats.map((s, i) => (
              <div
                key={s.label}
                aria-hidden={i !== active}
                className={cn(
                  "col-start-1 row-start-1 transition-opacity duration-[550ms] ease-[ease] motion-reduce:transition-none",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              >
                <p className="pt-3.5 text-[0.975rem] leading-none font-medium tracking-[-0.03em] text-highlight-foreground/70">{s.label}</p>
                <div className="flex items-center justify-between pt-8">
                  <p className="text-[1.46rem] leading-none font-medium tracking-[-0.02em]">
                    <StatFigure value={s.value} />
                  </p>
                  <Dots />
                </div>
              </div>
            ))}
          </div>
        </div>
        <dl className="ml-auto hidden w-[21.5rem] lg:block">
          {stats.map((s) => (
            <div key={s.label} className="border-t-2 border-highlight-foreground/85 pt-[1.05rem] pb-[1.6rem]">
              <dt className="text-[0.765rem] leading-none font-medium tracking-[-0.03em] text-highlight-foreground/75">{s.label}</dt>
              <dd className="flex items-center justify-between pt-[1.85rem]">
                <span className="text-[2.25rem] leading-[0.6] font-medium tracking-[-0.02em]">
                  <StatFigure value={s.value} />
                </span>
                <Dots />
              </dd>
            </div>
          ))}
        </dl>

        {/* Headline block, bottom left. */}
        <div className="ioh-hero-rise lg:max-w-[38rem]">
          <h1 className="font-display text-[2.49rem] leading-[1.05] font-medium tracking-[-0.035em] lg:text-[3.6rem] lg:leading-none">{headline}</h1>
          {subhead && (
            <p className="mt-4 max-w-[22.5rem] text-[0.975rem] leading-[1.5] font-medium tracking-[-0.02em] lg:max-w-[26rem] lg:text-[0.945rem]">{subhead}</p>
          )}
          {action && (
            <InstituteofhealthButton href={action.href} variant="glass" className="mt-14 h-[5.35rem] w-full lg:mt-8 lg:h-[4.0625rem] lg:w-[15.25rem]">
              {action.label}
            </InstituteofhealthButton>
          )}
        </div>
      </div>
    </section>
  );
}
