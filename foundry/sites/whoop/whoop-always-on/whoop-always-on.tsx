import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";
import { WhoopSnapTrack } from "@foundry/whoop-snap-track";
import "./whoop-always-on.css";

export interface WhoopStep {
  /** the step's title */
  title: string;
  /** its paragraph */
  body: string;
  /** its photo, filling the square (object-cover); a faint placeholder when empty */
  media?: ReactNode;
}

export interface WhoopAlwaysOnProps {
  /** the big heading */
  heading: string;
  /** the steps, in order */
  steps: WhoopStep[];
  /** how long each step plays on desktop before the next opens, in milliseconds */
  interval?: number;
  /** screen-reader labels of the phone track and its dots ("Show step" → "Show step 2") */
  labels: { track: string; dot: string };
  className?: string;
}

/** A black band telling a few steps: a self-advancing accordion on desktop, a card track on phones. */
export function WhoopAlwaysOn({ heading, steps, interval = 6000, labels, className }: WhoopAlwaysOnProps) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLElement>(null);

  // play only on desktop, while in view, and never under reduced motion
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const wide = window.matchMedia("(min-width: 64rem)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () => setPlaying(inView && wide.matches && !still.matches);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      update();
    });
    io.observe(el);
    wide.addEventListener("change", update);
    still.addEventListener("change", update);
    return () => {
      io.disconnect();
      wide.removeEventListener("change", update);
      still.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), interval);
    return () => window.clearTimeout(t);
  }, [playing, active, interval, steps.length]);

  const photo = (
    <div className="grid aspect-square overflow-clip rounded-[1.0625rem]">
      {steps.map((s, i) => (
        <div
          key={i}
          className={cn(
            "[grid-area:1/1] transition-opacity duration-300 ease-out motion-reduce:transition-none *:size-full *:object-cover",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          {s.media ?? <WhoopPlaceholder tone="band" />}
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={root}
      className={cn(
        "bg-foreground pt-[3.4rem] pb-20 text-background lg:py-24 dark:bg-card dark:text-card-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} />
        <div className="mt-[4.5rem] lg:mt-16 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div className="lg:order-2">{photo}</div>
          {/* desktop: the accordion */}
          <ol className="hidden lg:block">
            {steps.map((s, i) => {
              const open = i === active;
              return (
                <li key={i} className="border-b border-current/15 py-6 first:pt-0">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActive(i)}
                    className={cn(
                      "w-full text-left text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.01em] transition-opacity duration-300 ease-out motion-reduce:transition-none",
                      open ? "opacity-100" : "opacity-40 hover:opacity-70",
                    )}
                  >
                    {s.title}
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[32rem] pt-3 text-base leading-[1.6] opacity-80">{s.body}</p>
                      <div className="mt-5 h-0.5 bg-current/15">
                        {open && playing && (
                          <span
                            key={active}
                            className="whoop-always-on-progress block h-full bg-current"
                            style={{ animationDuration: `${interval}ms` }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      {/* phones: the steps as translucent cards; the photo follows the current card */}
      <WhoopSnapTrack
        className="mt-[3.0625rem] lg:hidden"
        slides={steps.map((s, i) => (
          <article key={i} className="h-60 rounded-lg bg-background/10 p-5 dark:bg-foreground/10">
            <h3 className="text-base leading-[1.2] font-bold">{s.title}</h3>
            <p className="mt-4 text-base leading-[1.6] opacity-85">{s.body}</p>
          </article>
        ))}
        slideClassName="w-[15.8rem]"
        tone="dark"
        label={labels.track}
        dotLabel={labels.dot}
        onActiveChange={setActive}
        dotsClassName="mt-9"
      />
    </section>
  );
}
