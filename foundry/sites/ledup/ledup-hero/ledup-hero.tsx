import { type ReactNode, useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LedupHeroSlide {
  /** the headline */
  title: ReactNode;
  /** one line under the headline */
  text?: ReactNode;
  /** the full-bleed photo or video; empty shows a grey placeholder */
  media?: ReactNode;
}

export interface LedupHeroProps {
  /** the slides (two in the original) */
  slides: LedupHeroSlide[];
  /** seconds each slide stays before the next one fades in (0 = no auto-advance) */
  interval?: number;
  /** screen-reader label for a tab, followed by its number ("Show slide") */
  tabLabel: string;
  className?: string;
}

export function LedupHero({ slides, interval = 7, tabLabel, className }: LedupHeroProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!interval || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), interval * 1000);
    return () => window.clearTimeout(id);
  }, [active, interval, slides.length]);

  return (
    <section
      className={cn(
        "relative isolate h-[80svh] min-h-[32rem] overflow-clip rounded-b-[1.5rem] bg-muted font-sans text-foreground lg:h-[calc(100svh-1rem)] lg:rounded-b-[3.125rem]",
        className,
      )}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-[800ms] ease-out motion-reduce:transition-none [&>*]:size-full [&>*]:object-cover",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          {slide.media ?? <div className="bg-[radial-gradient(120%_90%_at_80%_10%,var(--muted),var(--secondary)_55%,color-mix(in_oklch,var(--muted-foreground)_45%,var(--secondary)))]" />}
        </div>
      ))}

      <div className="mx-auto flex h-full max-w-page flex-col justify-end px-gutter pb-9 lg:pb-[4.5rem]">
        <div className="grid">
          {slides.map((slide, i) => (
            <div
              key={i}
              aria-hidden={i !== active}
              className={cn(
                "[grid-area:1/1] transition-opacity duration-[800ms] ease-out motion-reduce:transition-none",
                i === active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <h1 className="max-w-[12.5em] font-display text-4xl leading-[1.2] lg:text-[3.6rem]">{slide.title}</h1>
              {slide.text && <p className="mt-4 max-w-[34rem] text-sm leading-[1.6] lg:mt-7 lg:max-w-none lg:text-base">{slide.text}</p>}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <div className="mt-[4.5rem] flex gap-12 lg:mt-24">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${tabLabel} ${i + 1}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "relative w-10 pb-2.5 text-center text-base transition-colors duration-300 motion-reduce:transition-none",
                  i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-500 motion-reduce:transition-none",
                    i === active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
