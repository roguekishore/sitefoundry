import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceLineReveal } from "@foundry/k2space-line-reveal";
import { K2spaceMedia } from "@foundry/k2space-media";
import "./k2space-orbits.css";

export interface K2spaceOrbit {
  /** the short tab name ("LEO") */
  code: string;
  /** the paragraph shown while this orbit is active */
  body: string;
}

export interface K2spaceOrbitsProps {
  /** the title; "\n" breaks the line on desktop */
  title: string;
  /** the orbits, in tab order */
  orbits: K2spaceOrbit[];
  /** the planet video or image (cropped to a disc) */
  media?: ReactNode;
  className?: string;
}

/** where, in the pinned stretch (0–1), the orbit steps begin: after the planet and tabs arrive */
const STEPS_FROM = 0.46;
const desktop = "(min-width: 64rem)";

/**
 * A title, then a pinned stage: the planet zooms out to its size, orbit tabs fade in and the
 * paragraph steps through the orbits with the scroll. Phones stack it and switch on tap.
 */
export function K2spaceOrbits({ title, orbits, media, className }: K2spaceOrbitsProps) {
  const pin = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = orbits.length;

  useEffect(() => {
    const el = pin.current;
    if (!el || n === 0) return;
    const mq = window.matchMedia(desktop);
    const update = () => {
      if (!mq.matches) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      if (span <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / span));
      setActive(Math.min(n - 1, Math.max(0, Math.floor(((p - STEPS_FROM) / (1 - STEPS_FROM)) * n))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [n]);

  const choose = (k: number) => {
    const el = pin.current;
    if (el && window.matchMedia(desktop).matches) {
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = STEPS_FROM + ((1 - STEPS_FROM) * (k + 0.5)) / n;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: window.scrollY + r.top + p * span, behavior: reduce ? "auto" : "smooth" });
    } else {
      setActive(k);
    }
  };

  return (
    <section
      className={cn(
        "bg-background pt-[180px] pb-[170px] text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:pt-[10.4vw] lg:pb-0",
        className,
      )}
    >
      <K2spaceLineReveal
        text={title}
        rise="lg"
        desktopBreaksOnly
        className="px-gutter font-display text-[34px]/none font-[560] lg:text-[5.027vw]/[0.9]"
      />

      <div ref={pin} className="k2space-orbits-pin relative mt-[30px] lg:mt-[4vw] lg:h-[370svh]">
        <div className="px-gutter lg:sticky lg:top-0 lg:h-svh lg:overflow-clip">
          <div className="flex items-center justify-center py-[50px] lg:absolute lg:inset-0 lg:py-0">
            <div className="k2space-orbits-planet relative aspect-square w-[50vw] max-w-[260px] lg:w-[28.5vw] lg:max-w-none">
              <span aria-hidden className="absolute -inset-[7%] rounded-full border border-foreground/20" />
              <span aria-hidden className="absolute -top-[7%] left-1/2 size-1 -translate-1/2 bg-foreground/60" />
              <span aria-hidden className="absolute top-1/2 -right-[7%] size-1 translate-x-1/2 -translate-y-1/2 bg-foreground/60" />
              <span aria-hidden className="absolute -bottom-[7%] left-1/2 size-1 -translate-x-1/2 translate-y-1/2 bg-foreground/60" />
              <span aria-hidden className="absolute top-1/2 -left-[7%] size-1 -translate-1/2 bg-foreground/60" />
              <K2spaceMedia media={media} className="absolute inset-0 rounded-full" />
            </div>
          </div>

          <div className="k2space-orbits-panel relative lg:absolute lg:bottom-[4.2vw] lg:left-gutter lg:w-[25vw]">
            <div role="tablist" className="grid grid-cols-3 gap-1 lg:flex">
              {orbits.map((orbit, k) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={k === active}
                  onClick={() => choose(k)}
                  className={cn(
                    "h-14 rounded-sm text-base/none font-[560] transition-colors duration-200 ease-[ease] motion-reduce:transition-none lg:h-[3.9vw] lg:w-[8vw] lg:text-[max(1rem,1.3227vw)]/none",
                    k === active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
                  )}
                >
                  {orbit.code}
                </button>
              ))}
            </div>
            <div className="mt-[30px] grid lg:mt-[2.1vw]">
              {orbits.map((orbit, k) => (
                <p
                  key={k}
                  role="tabpanel"
                  aria-hidden={k !== active}
                  className={cn(
                    "col-start-1 row-start-1 text-base/none font-[560] transition-opacity duration-300 ease-[ease] motion-reduce:transition-none lg:text-[max(1rem,1.3227vw)]/none",
                    k === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  {orbit.body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
