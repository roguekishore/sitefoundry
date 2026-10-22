import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BevelHeading } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-more-features.css";

export interface BevelFeatureTab {
  /** the feature's name */
  title: ReactNode;
  /** one line about it */
  text: ReactNode;
  /** the phone screenshot shown while this tab is active; a phone-shaped placeholder when empty */
  media?: ReactNode;
}

export interface BevelMoreFeaturesProps {
  /** the section title */
  title: ReactNode;
  /** the line under it */
  lead?: ReactNode;
  /** four or five features */
  tabs: BevelFeatureTab[];
  /** seconds each tab stays before the next one takes over */
  interval?: number;
  className?: string;
}

/**
 * A left-aligned title over a stack of pale rounded tabs, a phone on the right. The active
 * tab is full size with a ring that fills as it plays, then hands over to the next; the
 * others sit shrunk to 93% and faded. On phones the tabs become a sideways-scrolling row
 * above the phone.
 */
export function BevelMoreFeatures({ title, lead, tabs, interval = 6, className }: BevelMoreFeaturesProps) {
  const [active, setActive] = useState(0);
  // the ring only runs while the section is in view, so visitors arrive on the first tab
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const next = () => setActive((a) => (a + 1) % tabs.length);
  return (
    <section ref={ref} className={cn("bg-background pt-section pb-section text-foreground lg:pt-[calc(var(--section-y)*2)] lg:pb-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto grid max-w-[71.25rem] gap-12 lg:grid-cols-[34.75rem_1fr] lg:items-center lg:gap-8 lg:px-gutter">
        <div className="min-w-0">
          <BevelHeading title={title} lead={lead} align="left" className="px-gutter lg:px-0" />
          <ul className="bevel-features-list mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter [scrollbar-width:none] lg:mt-20 lg:flex-col lg:gap-3 lg:overflow-visible lg:px-0">
            {tabs.map((tab, i) => {
              const on = i === active;
              return (
                <li key={i} className="shrink-0 snap-start lg:shrink">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-[18.75rem] items-center gap-4 rounded-2xl bg-card px-6 py-6 text-left transition-[transform,opacity] duration-250 ease-out lg:w-full motion-reduce:transition-none",
                      on ? "scale-100" : "opacity-50 hover:opacity-80 lg:scale-[0.93]",
                    )}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-2xl leading-[1.3] font-semibold tracking-[-0.01em]">{tab.title}</span>
                      <span className="mt-1 block text-[1.125rem] leading-[1.3] font-medium text-muted-foreground">{tab.text}</span>
                    </span>
                    <span aria-hidden className="relative flex size-10 shrink-0 items-center justify-center">
                      {on ? (
                        <svg viewBox="0 0 40 40" className="size-10 -rotate-90">
                          <circle cx="20" cy="20" r="18" fill="none" strokeWidth="2" className="stroke-foreground/20" />
                          <circle
                            key={active}
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            strokeWidth="2"
                            pathLength={100}
                            strokeDasharray="100"
                            className="bevel-features-ring stroke-foreground/70"
                            style={{ animationDuration: `${interval}s`, animationPlayState: inView ? "running" : "paused" }}
                            onAnimationEnd={next}
                          />
                        </svg>
                      ) : (
                        <span className="flex size-9 items-center justify-center rounded-full ring-2 ring-foreground/40">
                          <ArrowRight className="size-4" strokeWidth={2.5} />
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative mx-auto w-[14.75rem] lg:w-[19.0625rem]">
          <div className="grid aspect-[305/640] [&>*]:[grid-area:1/1]">
            {tabs.map((tab, i) => (
              <div key={i} aria-hidden={i !== active} className={cn("transition-opacity duration-300 ease-out motion-reduce:transition-none", i === active ? "opacity-100" : "opacity-0")}>
                {tab.media ?? <BevelPlaceholder tone="phone" className="size-full rounded-[2.75rem]" />}
              </div>
            ))}
          </div>
          <div aria-hidden className="mx-auto -mt-4 h-8 w-[115%] -translate-x-[6.5%] rounded-[50%] bg-foreground/25 blur-xl" />
        </div>
      </div>
    </section>
  );
}
