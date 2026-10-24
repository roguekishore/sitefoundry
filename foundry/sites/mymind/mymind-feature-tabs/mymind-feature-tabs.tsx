import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MymindMedia } from "@foundry/mymind-media";
import "./mymind-feature-tabs.css";

export interface MymindFeatureTab {
  /** short tab name */
  label: string;
  /** title shown while the tab is active */
  title: string;
  /** paragraph under the title */
  text: string;
  /** tall picture on the right; empty shows a placeholder */
  media?: ReactNode;
}

export interface MymindFeatureTabsProps {
  /** the tabs, in order */
  tabs: MymindFeatureTab[];
  /** seconds each tab stays before the next one */
  seconds?: number;
  className?: string;
}

/** Auto-advancing tabs with a filling progress line. */
export function MymindFeatureTabs({ tabs, seconds = 6, className }: MymindFeatureTabsProps) {
  const [active, setActive] = useState(0);
  return (
    <section className={cn("rounded-lg bg-sidebar px-5 pt-5 pb-8 text-foreground shadow-[0_4px_22px_color-mix(in_oklab,var(--muted-foreground)_14%,transparent)] lg:h-[50rem] lg:px-[3.125rem] lg:pt-[3.125rem] lg:pb-[4.75rem]", className)}>
      <div className="flex flex-col lg:h-full">
        <div role="tablist" className="grid gap-2 lg:gap-6" style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative border-t border-border pt-3 text-left text-xl tracking-[-0.02em] transition-colors duration-200 ease-linear hover:text-foreground",
                i === active ? "text-foreground" : "text-muted-foreground/60",
              )}
            >
              {i === active && (
                <span
                  key={active}
                  aria-hidden
                  className="mymind-feature-tabs-fill absolute -top-px left-0 h-px w-full bg-primary"
                  style={{ animationDuration: `${seconds}s` }}
                  onAnimationEnd={() => setActive((active + 1) % tabs.length)}
                />
              )}
              <span className="sr-only lg:not-sr-only">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-1">
          {tabs.map((t, i) => (
            <div
              key={t.label}
              role="tabpanel"
              aria-hidden={i !== active}
              className={cn(
                "col-start-1 row-start-1 grid min-w-0 grid-cols-1 content-start gap-5 pt-6 transition-opacity duration-500 ease-out motion-reduce:transition-none lg:grid-cols-2 lg:content-stretch lg:gap-10 lg:pt-0",
                i === active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <div className="contents lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:self-end">
                <h3 className="text-[1.5rem] leading-[1.25] tracking-[-0.035em] lg:text-[2.5rem] lg:leading-[3.375rem]">{t.title}</h3>
                <p className="order-2 text-base leading-[1.45] text-muted-foreground lg:order-none lg:mt-2 lg:max-w-[28rem] lg:leading-[1.6667]">{t.text}</p>
              </div>
              <MymindMedia className="order-1 aspect-[0.83] w-full max-w-[28rem] justify-self-center rounded-[6px] lg:order-none lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:h-[33.75rem] lg:max-w-[28.125rem] lg:self-center">
                {t.media}
              </MymindMedia>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
