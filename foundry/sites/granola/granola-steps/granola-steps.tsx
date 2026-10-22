import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GranolaMedia } from "@foundry/granola-media";
import "./granola-steps.css";

export interface GranolaStep {
  /** the short name in the pinned nav (and the eyebrow above the title on phones) */
  label: string;
  /** the serif step title */
  title: string;
  /** a short paragraph */
  body: string;
  /** the step's square picture or demo; a soft placeholder while empty */
  media?: ReactNode;
}

export interface GranolaStepsProps {
  /** the statement above the steps, set in the right half on desktop */
  intro?: string;
  /** the steps, in order */
  steps: GranolaStep[];
  /** prefix for the step anchors the nav links to (keep it unique on the page) */
  idPrefix?: string;
  className?: string;
}

export function GranolaSteps({ intro, steps, idPrefix = "step", className }: GranolaStepsProps) {
  // Each step publishes a named view timeline; the scope on the section lets the nav (a sibling
  // column) follow them.
  const names = steps.map((_, i) => `--granola-step-${i}`);
  const scope = { "--granola-steps-scope": names.join(", ") } as CSSProperties;

  return (
    <section className={cn("granola-steps bg-background text-foreground", className)} style={scope}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] px-gutter pb-24 lg:pb-12">
        {intro && (
          <div className="py-24 lg:grid lg:grid-cols-2 lg:pt-44 lg:pb-40">
            <h2 className="font-display text-4xl leading-none tracking-[-0.01em] lg:col-start-2 lg:max-w-[18ch] lg:text-5xl">{intro}</h2>
          </div>
        )}

        <div className="lg:grid lg:grid-cols-2">
          {/* the pinned step nav (desktop) */}
          <nav aria-label={intro ?? undefined} className="hidden lg:block">
            <ul className="sticky top-24 flex w-44 flex-col">
              {steps.map((step, i) => (
                <li key={step.label}>
                  <a
                    href={`#${idPrefix}-${i}`}
                    className="granola-steps-label relative block border-b border-foreground/10 pt-3 pb-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
                    style={{ "--granola-step-tl": names[i] } as CSSProperties}
                  >
                    {step.label}
                    <span aria-hidden className="granola-steps-fill absolute -bottom-px left-0 h-[3px] w-full origin-left bg-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ol className="flex flex-col gap-24 lg:gap-28">
            {steps.map((step, i) => (
              <li
                key={step.label}
                id={`${idPrefix}-${i}`}
                className="granola-steps-step scroll-mt-24"
                style={{ "--granola-step-tl": names[i] } as CSSProperties}
              >
                <p className="font-display text-base text-muted-foreground lg:hidden">{step.label}</p>
                <h3 className="mt-1 font-display text-2xl leading-tight tracking-[-0.01em] lg:mt-0">{step.title}</h3>
                <p className="mt-2 max-w-[29rem] text-base leading-normal lg:mt-1.5 lg:text-sm lg:leading-6">{step.body}</p>
                <GranolaMedia tone="glow" className="mt-6 aspect-square w-full rounded-2xl lg:mt-7">
                  {step.media}
                </GranolaMedia>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
