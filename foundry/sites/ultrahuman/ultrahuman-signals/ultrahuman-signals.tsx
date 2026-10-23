import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanHeading } from "@foundry/ultrahuman-heading";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import { UltrahumanReveal } from "@foundry/ultrahuman-reveal";
import "./ultrahuman-signals.css";

export interface UltrahumanSignal {
  /** the short tab name, e.g. "Rest" (also the dot's screen-reader label) */
  tab: string;
  /** the caption title under the photo */
  title: string;
  /** one or two sentences under the caption title */
  body: string;
  /** the photo or video in the card (cover); a placeholder when empty */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface UltrahumanSignalsProps {
  /** the centred section title */
  title: string;
  /** one line under it */
  body: string;
  /** the slides (five on the original) */
  items: UltrahumanSignal[];
  /** seconds each slide stays before the next one slides in */
  interval?: number;
  className?: string;
}

/**
 * A centred intro over a sliding photo carousel: on desktop a black band with a row of tabs and a
 * wide card centred between peeking neighbours; on phones a white band with tall cards from the
 * left. Captions sit under each card; the active dot stretches into a bar that fills as a timer,
 * then the track slides on. Tabs and dots jump to a slide; phones can swipe.
 */
export function UltrahumanSignals({ title, body, items, interval = 6, className }: UltrahumanSignalsProps) {
  const n = items.length;
  const reduce = useReducedMotion();
  const [pos, setPos] = useState(n); // index into three copies of the list; the middle copy is "home"
  const [animate, setAnimate] = useState(true);
  const touchX = useRef<number | null>(null);
  const active = ((pos % n) + n) % n;

  // after a jump back to the middle copy (done without a transition), turn transitions back on
  useEffect(() => {
    if (animate) return;
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const normalise = (p: number) => (p >= 2 * n ? p - n : p < n ? p + n : p);
  const go = (next: number) => {
    setAnimate(!reduce);
    setPos(reduce ? normalise(next) : next);
  };
  const onTrackEnd = () => {
    const home = normalise(pos);
    if (home !== pos) {
      setAnimate(false);
      setPos(home);
    }
  };

  const slides = [...items, ...items, ...items];

  return (
    <section className={cn("bg-background pt-[5.75rem] pb-8 text-foreground lg:bg-foreground lg:pt-[8.5rem] lg:pb-32 lg:text-background", className)}>
      <UltrahumanHeading title={title} body={body} bodyWidth="sm" />

      <UltrahumanReveal className="mt-12 lg:mt-[5.75rem]">
        <div role="tablist" className="mx-auto hidden w-fit lg:flex">
          {items.map((item, i) => (
            <button
              key={item.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => go(n + i)}
              className={cn(
                "h-[2.3125rem] w-[9.75rem] rounded-full text-[0.8125rem] tracking-[-0.01em] transition-[color,background-color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                i === active ? "bg-current/10 text-current" : "text-current/60 hover:text-current",
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div
          className="overflow-clip lg:mt-10"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(pos + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <div
            className={cn(
              "ultrahuman-signals-track flex gap-[var(--gap)] pl-6 [--gap:1rem] [--w:18.125rem] lg:[--gap:2.5rem] lg:[--w:53.4vw] lg:pl-[calc(50%-var(--w)/2)]",
              animate && "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            )}
            style={{ transform: `translateX(calc(${-pos} * (var(--w) + var(--gap))))` }}
            onTransitionEnd={onTrackEnd}
          >
            {slides.map((item, i) => {
              const home = i >= n && i < 2 * n;
              return (
                <article key={i} aria-hidden={home ? undefined : true} className="w-[var(--w)] shrink-0">
                  <div className="aspect-[290/392] overflow-clip rounded-lg bg-current/10 lg:aspect-[769/432] lg:rounded-xl">
                    {item.media ?? <UltrahumanPlaceholder tone="photo" label={home ? item.mediaLabel : undefined} />}
                  </div>
                  <h3 className="mt-6 text-base leading-tight font-medium tracking-[-0.03em] lg:mt-9 lg:text-[1.375rem] lg:tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-2 max-w-[31.25rem] text-[0.8125rem] leading-[1.0625rem] tracking-[-0.005em] text-current/60 lg:mt-4 lg:text-[0.9375rem] lg:leading-[1.3125rem]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2.5 lg:mt-[4.25rem]">
          {items.map((item, i) => (
            <button
              key={item.tab}
              type="button"
              aria-label={item.tab}
              aria-current={i === active}
              onClick={() => go(n + i)}
              className={cn(
                "relative h-1 overflow-clip rounded-full transition-[width] duration-[220ms] ease-in-out motion-reduce:transition-none",
                i === active ? "w-10 bg-current/25 lg:w-12" : "w-1 bg-current/40",
              )}
            >
              {i === active && (
                <span
                  key={active}
                  className="ultrahuman-signals-fill absolute inset-y-0 left-0 w-full rounded-full bg-current"
                  style={{ animationDuration: `${interval}s` }}
                  onAnimationEnd={() => go(pos + 1)}
                />
              )}
            </button>
          ))}
        </div>
      </UltrahumanReveal>
    </section>
  );
}
