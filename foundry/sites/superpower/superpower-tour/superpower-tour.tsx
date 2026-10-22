import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerAccordion, type SuperpowerAccordionItem } from "@foundry/superpower-accordion";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerTourStep {
  /** the tab's short label, e.g. "Your first panel" */
  tab: string;
  title: string;
  text: string;
  /** two or three questions that open in place */
  questions: SuperpowerAccordionItem[];
  /** the step's visual (fills the window on desktop); empty: a placeholder */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface SuperpowerTourProps {
  /** usually four steps; tabs are numbered 01, 02… */
  steps: SuperpowerTourStep[];
  id?: string;
  className?: string;
}

const ease = "ease-[cubic-bezier(0.45,0,0.55,1)]";

export function SuperpowerTour({ steps, id, className }: SuperpowerTourProps) {
  const wrap = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });

  // The pinned stretch is split into equal parts, one per step.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(p * steps.length))));
  });

  const goTo = (i: number) => {
    const el = wrap.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / steps.length) * travel, behavior: "smooth" });
  };

  return (
    <section ref={wrap} id={id} className={cn("relative h-[289svh] bg-background text-foreground lg:h-[300svh]", className)}>
      <div className="sticky top-0 h-svh overflow-clip">
        {/* the visuals: a card at the bottom on phones, the whole window on desktop */}
        <div className="absolute inset-x-2 bottom-2 aspect-[374/314] max-h-[45svh] overflow-clip rounded-lg lg:inset-0 lg:aspect-auto lg:max-h-none lg:rounded-none">
          {steps.map((s, i) => (
            <div
              key={s.tab}
              aria-hidden={i !== active}
              style={{ zIndex: i }}
              className={cn(
                "absolute inset-0 transition-[clip-path] duration-[900ms] motion-reduce:transition-none",
                ease,
                i <= active ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(100%_0_0_0)]",
              )}
            >
              <SuperpowerMedia
                media={s.media}
                label={s.mediaLabel}
                className={cn(
                  "size-full transition-[transform,filter] duration-[1100ms] motion-reduce:transition-none",
                  ease,
                  i === active ? "scale-100 blur-none" : "scale-[1.06] blur-[2px]",
                )}
              >
                {/* placeholders only: a soft light that sits differently per step, so each wipe reads */}
                {!s.media && (
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(45%_55%_at_var(--superpower-tour-x)_55%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent)]"
                    style={{ "--superpower-tour-x": `${[72, 58, 80, 64][i % 4]}%` } as CSSProperties}
                  />
                )}
              </SuperpowerMedia>
            </div>
          ))}
          {/* desktop: a fade from the page colour so the copy on the left reads over the visual */}
          <div className="absolute inset-0 z-10 hidden bg-linear-to-r from-background via-background/60 via-30% to-transparent to-55% lg:block" aria-hidden />
        </div>

        <div className="relative z-20 flex h-full flex-col px-4 pt-[6.25rem] lg:w-[30.9rem] lg:px-0 lg:pt-[33svh] lg:pb-[2.8rem] lg:pl-[2.8rem]">
          <div className="flex items-center justify-center gap-1 lg:justify-start" role="tablist">
            {steps.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => goTo(i)}
                className={cn(
                  "flex h-11 shrink-0 items-center rounded-full px-1.5 transition-[background-color,box-shadow,opacity] duration-750 motion-reduce:transition-none",
                  ease,
                  i === active
                    ? "bg-card shadow-[0_10px_24px_-8px_color-mix(in_oklab,var(--foreground)_22%,transparent)]"
                    : "opacity-65 hover:opacity-100",
                )}
              >
                <span className="grid size-[1.375rem] shrink-0 place-items-center rounded-full border border-border font-mono text-[0.6875rem] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "overflow-hidden text-left text-[0.875rem] whitespace-nowrap transition-[max-width] duration-750 motion-reduce:transition-none",
                    ease,
                    i === active ? "max-w-[14rem]" : "max-w-0",
                  )}
                >
                  <span className="block pr-3 pl-2">{s.tab}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid flex-1 lg:mt-7">
            {steps.map((s, i) => (
              <div
                key={s.tab}
                aria-hidden={i !== active}
                inert={i !== active}
                className={cn(
                  "flex flex-col [grid-area:1/1] transition-[opacity,transform] duration-600 ease-out motion-reduce:transition-none",
                  i === active ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
                )}
              >
                <h2 className="text-[1.5rem] leading-[1.3] font-normal tracking-[-0.02em] lg:text-[1.875rem] lg:leading-[1.2]">{s.title}</h2>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-muted-foreground lg:mt-2.5 lg:max-w-[21rem] lg:text-[1.0625rem] lg:text-foreground">
                  {s.text}
                </p>
                <SuperpowerAccordion items={s.questions} variant="tour" className="mt-5 lg:mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
