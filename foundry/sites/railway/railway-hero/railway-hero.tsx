import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RailwayButton } from "@foundry/railway-button";
import { RailwayPanel } from "@foundry/railway-panel";
import "./railway-hero.css";

export interface RailwayHeroTab {
  label: string;
  /** a small lucide icon before the label */
  icon?: ReactNode;
  /** what the app window shows while this tab is active (a screenshot or video); a placeholder when empty */
  media?: ReactNode;
}

export interface RailwayHeroProps {
  /** the serif headline */
  title: string;
  /** one line under it; may contain an underlined link */
  lead: ReactNode;
  /** call-to-action links: the first is violet, the rest near-black */
  actions: { label: string; href: string }[];
  /** the art behind everything (an illustration or photo, cropped like object-fit: cover); a soft gradient when empty */
  background?: ReactNode;
  /** the pill tabs under the app window; they take turns automatically */
  tabs: RailwayHeroTab[];
  /** screen-reader name of the tab list */
  tabsLabel: string;
  /** milliseconds each tab stays active before the next one */
  interval?: number;
  className?: string;
}

/**
 * Framed hero: a big centred serif line over a full-panel art slot, two buttons, then (from
 * tablets up) a near-black app window whose tab pill bar overlaps its bottom edge and steps
 * through the tabs with a filling progress highlight.
 */
export function RailwayHero({ title, lead, actions, background, tabs, tabsLabel, interval = 5000, className }: RailwayHeroProps) {
  const [active, setActive] = useState(0);

  // Step to the next tab after `interval`; clicking a tab restarts the wait. Off with reduced motion.
  useEffect(() => {
    if (tabs.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % tabs.length), interval);
    return () => window.clearTimeout(timer);
  }, [active, interval, tabs.length]);

  return (
    <section className={cn("railway-hero px-gutter pb-4 text-foreground", className)}>
      <RailwayPanel tint="chart-5">
        <div className="railway-hero-art absolute inset-y-0 -inset-x-16" aria-hidden={background ? undefined : true}>
          {background ?? (
            <div className="size-full bg-linear-to-b from-chart-5/15 via-glow/10 to-chart-2/20">
              <div className="size-full bg-[radial-gradient(45%_40%_at_8%_80%,color-mix(in_oklab,var(--chart-3)_22%,transparent),transparent)]" />
            </div>
          )}
        </div>

        <div className="relative flex flex-col items-center px-4 pt-24 pb-12 text-center lg:pt-[7.75rem] lg:pb-11">
          <h1 className="max-w-[20rem] font-display text-[2.5rem] leading-[1.15] font-medium tracking-[-0.01em] text-balance sm:max-w-none lg:text-[3.375rem] lg:leading-[1.2]">
            {title}
          </h1>
          <p className="mt-6 max-w-[19rem] text-lg leading-7 text-foreground/80 sm:max-w-none lg:text-xl">{lead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((action, i) => (
              <RailwayButton key={action.label} href={action.href} size="lg" variant={i === 0 ? "primary" : "dark"}>
                {action.label}
              </RailwayButton>
            ))}
          </div>

          <div className="relative mt-24 hidden w-full max-w-[66.375rem] md:block">
            <div className="aspect-[1062/755] overflow-clip rounded-lg border border-border bg-muted shadow-[0_-12px_127px_0_color-mix(in_oklab,var(--chart-5)_22%,transparent)]">
              {tabs[active]?.media}
            </div>
            <div
              role="tablist"
              aria-label={tabsLabel}
              className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center rounded-lg border border-border bg-muted p-1"
            >
              {tabs.map((tab, i) => (
                <div key={tab.label} className="flex items-center">
                  {i > 0 && <span className="mx-2 h-4 w-px bg-border" aria-hidden />}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative flex h-[2.125rem] items-center gap-2 overflow-clip rounded-md px-4 text-base whitespace-nowrap transition-colors duration-150 motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0",
                      i === active ? "bg-primary/45 text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {i === active && (
                      <span
                        key={active}
                        className="railway-hero-fill absolute inset-0 origin-left bg-primary/55 motion-reduce:hidden"
                        style={{ animationDuration: `${interval}ms` }}
                        aria-hidden
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {tab.icon}
                      {tab.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RailwayPanel>
    </section>
  );
}
