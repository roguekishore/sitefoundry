import { useRef, useState, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { DaqEyebrow } from "@foundry/daq-eyebrow";

export interface DaqCoreStep {
  /** the step's short name */
  name: string;
  /** one or two sentences, shown while the step is active */
  description: string;
  /** the panel's status label while this step is active (shown uppercase) */
  status: string;
}

export interface DaqCoreProps {
  /** the eyebrow, e.g. "01 / How it flows" */
  eyebrow: string;
  /** the large title */
  title: string;
  /** the steps, in order; scrolling through the pin walks through them */
  steps: DaqCoreStep[];
  /** the panel's title, and a second part set dimmer */
  panelTitle: string;
  panelTitleMuted?: string;
  /** the small legend entries under the panel title (shown uppercase) */
  legend?: string[];
  /** the caption at the panel's foot (pointer devices), and the one for touch screens */
  caption?: string;
  captionTouch?: string;
  /** the diagram: an image, video or SVG. Empty: a placeholder */
  diagram?: ReactNode;
  className?: string;
}

const ease = "duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

export function DaqCore({
  eyebrow,
  title,
  steps,
  panelTitle,
  panelTitleMuted,
  legend = [],
  caption,
  captionTouch,
  diagram,
  className,
}: DaqCoreProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  // progress 0 → 1 while the section is pinned (its top at the window top until its bottom
  // reaches the window bottom); each step gets an equal share of it
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(p * steps.length))));
  });

  return (
    <section ref={ref} className={cn("relative h-[230svh] bg-background", className)}>
      <div className="sticky top-0 min-h-svh px-gutter pt-[7.25rem] pb-10 lg:pt-[6.5rem]">
        <DaqEyebrow label={eyebrow} />
        <h2 className="mt-3 font-display text-[clamp(2.4rem,5.6vw,7rem)] leading-[1.05] font-normal tracking-[-0.03em] lg:mt-2">{title}</h2>

        <div className="mt-6 flex flex-col gap-6 lg:mt-7 lg:grid lg:grid-cols-[19.25rem_1fr] lg:items-center lg:gap-8">
          <ol>
            {steps.map((step, i) => (
              <li
                key={step.name}
                className={cn(
                  "border-l pl-5 transition-colors lg:pl-6",
                  ease,
                  i === active ? "border-foreground" : "border-border",
                )}
              >
                <div className={cn("flex items-baseline gap-3.5 py-1 transition-colors", ease, i <= active ? "text-foreground" : "text-foreground/58")}>
                  <span className="font-mono text-[0.5625rem] font-bold tracking-[0.15em]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.9375rem] font-medium tracking-[-0.01em]">{step.name}</span>
                </div>
                {/* the description opens for the active step only */}
                <div className={cn("grid transition-[grid-template-rows,opacity]", ease, i === active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="min-h-0 overflow-clip">
                    <span className="block max-w-[21rem] pb-2 text-sm leading-normal text-foreground/72 lg:max-w-[17rem] lg:text-[0.8125rem] lg:leading-relaxed">
                      {step.description}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative flex flex-col border border-border bg-card lg:h-[max(22rem,calc(100svh-19.5rem))]">
            <div className="flex items-start justify-between gap-6 px-4 pt-4 lg:px-8 lg:pt-8">
              <div>
                <p className="text-xl leading-tight tracking-[-0.02em]">
                  {panelTitle}
                  {panelTitleMuted && <span className="text-foreground/50"> {panelTitleMuted}</span>}
                </p>
                {legend.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {legend.map((entry) => (
                      <li key={entry} className="flex items-center gap-2 font-mono text-[0.6875rem] font-medium tracking-[0.05em] text-foreground/72 uppercase">
                        <span aria-hidden className="size-1.5 bg-foreground/50" />
                        {entry}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p aria-live="polite" className="pt-1 text-right font-mono text-[0.5625rem] font-bold tracking-[0.15em] uppercase">
                {steps[active]?.status}
              </p>
            </div>

            <div className="mx-4 mt-5 aspect-[16/9] lg:mx-8 lg:mt-4 lg:aspect-auto lg:flex-1">
              {diagram ?? <div aria-hidden className="size-full border border-dashed border-foreground/10 bg-muted/40" />}
            </div>

            <div className="mt-5 flex flex-col gap-10 border-t border-border px-4 pt-6 pb-4 lg:mt-0 lg:flex-row lg:items-end lg:justify-between lg:border-t-0 lg:px-8 lg:pt-6 lg:pb-8">
              <p className="font-mono text-[0.5625rem] font-bold tracking-[0.3em] text-foreground/58 uppercase">
                {captionTouch && <span className="lg:hidden">{captionTouch}</span>}
                {caption && <span className={cn(captionTouch && "hidden lg:inline")}>{caption}</span>}
              </p>
              <div aria-hidden className="flex gap-2">
                {steps.map((step, i) => (
                  <span key={step.name} className={cn("h-px w-4 transition-colors", ease, i === active ? "bg-foreground" : "bg-foreground/25")} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
