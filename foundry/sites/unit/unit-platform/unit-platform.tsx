import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Check } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { UnitButton } from "@foundry/unit-button";
import "./unit-platform.css";

export interface UnitPlatformOption {
  /** the row's label */
  label: string;
  /** whether it's ticked / switched on */
  on: boolean;
  /** check: a ticked box · toggle: a small switch */
  control?: "check" | "toggle";
}

export interface UnitPlatformTab {
  /** the tab's title */
  title: string;
  /** one or two lines under it */
  body: string;
  /** the rows of the settings card shown in the dark panel */
  options: UnitPlatformOption[];
}

export interface UnitPlatformProps {
  /** the heading (three short lines on desktop) */
  heading: string;
  /** the outline pill under it */
  cta?: { label: string; href: string };
  /** two to four tabs, told in scroll order on desktop and on a timer on phones */
  tabs: UnitPlatformTab[];
  /** the dark panel's backdrop (a blurred colour image in the original); a glow wash when empty */
  backdrop?: ReactNode;
  /** seconds per tab on phones */
  seconds?: number;
  className?: string;
}

const ease = "duration-[625ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

/** Desktop progress line of tab k: fills while the scroll crosses its slice of the pinned stretch. */
function ScrollLine({ progress, k, n }: { progress: MotionValue<number>; k: number; n: number }) {
  const scaleY = useTransform(progress, [k / n, (k + 1) / n], [0, 1], { clamp: true });
  return <motion.span aria-hidden className="absolute inset-y-0 -left-px hidden w-px origin-top bg-foreground lg:block lg:motion-reduce:hidden" style={{ scaleY }} />;
}

function Control({ on, control = "check" }: Pick<UnitPlatformOption, "on" | "control">) {
  if (control === "toggle") {
    return (
      <span aria-hidden className={cn("relative flex h-4 w-[1.875rem] shrink-0 items-center rounded-full", on ? "bg-background" : "bg-foreground/15")}>
        <span className={cn("absolute size-3 rounded-full bg-foreground", on ? "right-0.5" : "left-0.5")} />
      </span>
    );
  }
  return (
    <span aria-hidden className="flex size-[1.125rem] shrink-0 items-center justify-center rounded-[0.1875rem] border border-foreground/25">
      {on && <Check className="size-2.5" strokeWidth={2.5} />}
    </span>
  );
}

/** A pinned tour: heading, pill and tabs with filling left lines on one side, a dark glowing panel whose settings card changes per tab on the other. */
export function UnitPlatform({ heading, cta, tabs, backdrop, seconds = 5, className }: UnitPlatformProps) {
  const n = tabs.length;
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 64px", "end end"] });

  // desktop: the pinned stretch picks the tab
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (reduced || !window.matchMedia("(min-width: 64rem)").matches) return;
    const k = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    setActive((a) => (a === k ? a : k));
  });

  const pick = (k: number) => {
    const el = section.current;
    if (el && !reduced && window.matchMedia("(min-width: 64rem)").matches) {
      // scroll to the middle of tab k's slice; the scroll then sets it
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      const stretch = el.offsetHeight - window.innerHeight + 64;
      window.scrollTo({ top: top + ((k + 0.5) / n) * stretch, behavior: "smooth" });
    } else {
      setActive(k);
    }
  };

  return (
    <section
      ref={section}
      className={cn("unit-platform relative bg-background font-sans text-foreground", className)}
      style={{ "--unit-platform-n": n, "--unit-platform-time": `${seconds}s` } as CSSProperties}
    >
      <div className="unit-platform-stage mx-auto grid max-w-page gap-4 px-gutter pt-16 pb-16 lg:grid-cols-[minmax(0,1fr)_60%] lg:gap-0 lg:pt-20 lg:pb-36">
        <div className="contents lg:block">
          <div className="order-1">
            <h2 className="max-w-[22rem] font-display text-[1.640625rem] leading-[1.15] tracking-[-0.02em] lg:max-w-[23rem] lg:text-[2.5rem] lg:leading-[1.1]">{heading}</h2>
            {cta && (
              <UnitButton href={cta.href} variant="outline" className="mt-4 lg:mt-6 lg:h-11">
                {cta.label}
              </UnitButton>
            )}
          </div>

          <div role="tablist" className="order-3 -mr-gutter flex snap-x gap-6 overflow-x-auto pt-2 [scrollbar-width:none] lg:mt-20 lg:mr-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:pt-0">
            {tabs.map((t, k) => (
              <button
                key={t.title}
                type="button"
                role="tab"
                aria-selected={k === active}
                onClick={() => pick(k)}
                className="relative w-[85%] shrink-0 snap-start border-l border-border pl-4 text-left lg:w-auto lg:max-w-[22rem]"
              >
                <ScrollLine progress={scrollYProgress} k={k} n={n} />
                {k === active && (
                  <span
                    key={`fill-${active}`}
                    aria-hidden
                    className="unit-platform-fill absolute inset-y-0 -left-px w-px bg-foreground lg:hidden lg:motion-reduce:block"
                    onAnimationEnd={() => setActive((a) => (a + 1) % n)}
                  />
                )}
                <span className="block text-[1.09375rem] leading-[1.25] tracking-[-0.01em] lg:text-lg">{t.title}</span>
                <span className="mt-1.5 block text-[0.875rem] leading-[1.45] tracking-[0.01em] text-muted-foreground lg:mt-2 lg:text-base lg:leading-[1.4]">{t.body}</span>
              </button>
            ))}
          </div>
        </div>

        {/* the dark panel: a dark island, whatever the page's mode */}
        <div className="dark relative isolate order-2 mt-2 grid overflow-clip rounded-lg bg-background p-3.5 text-foreground lg:mt-0 lg:aspect-[770/576] lg:place-items-center lg:p-16">
          <div aria-hidden className="absolute inset-0 -z-10">
            {backdrop ?? (
              <div className="size-full bg-[radial-gradient(60%_45%_at_30%_100%,color-mix(in_oklab,var(--glow)_45%,transparent),transparent),radial-gradient(45%_40%_at_75%_100%,color-mix(in_oklab,var(--chart-1)_40%,transparent),transparent),radial-gradient(70%_35%_at_50%_100%,color-mix(in_oklab,var(--highlight)_25%,transparent),transparent)]" />
            )}
          </div>
          {tabs.map((t, k) => (
            <ul
              key={t.title}
              role="tabpanel"
              aria-hidden={k !== active}
              className={cn(
                "col-start-1 row-start-1 w-full self-center rounded-lg bg-foreground/20 px-[1.125rem] backdrop-blur-sm transition-opacity lg:max-w-[25rem] lg:px-5",
                ease,
                k === active ? "opacity-100" : "pointer-events-none invisible opacity-0",
              )}
            >
              {t.options.map((o) => (
                <li key={o.label} className="flex h-12 items-center justify-between gap-4 border-b border-foreground/10 text-[0.8125rem] tracking-[0.01em] last:border-0 lg:h-[3.4375rem] lg:text-sm">
                  {o.label}
                  <Control on={o.on} control={o.control} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
