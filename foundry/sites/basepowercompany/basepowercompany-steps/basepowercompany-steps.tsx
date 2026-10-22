import { useState, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import { BasepowercompanyTag } from "@foundry/basepowercompany-tag";

export interface BasepowercompanyStep {
  /** the small number above the title, e.g. "01" */
  number: string;
  /** the step's title */
  title: string;
  /** the text shown when the step is open */
  body: string;
  /** the photo for this step */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyStepsProps {
  /** the white tag above the heading */
  tag?: string;
  /** the centred heading */
  title: string;
  /** the lime button under it */
  cta?: { label: string; href: string };
  /** the steps; the first starts open */
  steps: BasepowercompanyStep[];
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

/*
 * "How to switch": a centred tag, heading and button, then a column of step cards beside a
 * photo. Choosing a step turns its card forest green, opens its text and swaps the photo;
 * on phones the open card holds the photo itself.
 */
export function BasepowercompanySteps({ tag, title, cta, steps, className }: BasepowercompanyStepsProps) {
  const [open, setOpen] = useState(0);
  return (
    <section className={cn("bg-background px-gutter pt-16 pb-12 text-foreground lg:pb-[7.75rem]", className)}>
      <div className="mx-auto max-w-page">
        <div className="flex flex-col items-center text-center">
          {tag && <BasepowercompanyTag>{tag}</BasepowercompanyTag>}
          <h2 className="mt-2.5 max-w-[17rem] font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] sm:max-w-[30rem] lg:mt-3 lg:text-[2.5rem] lg:leading-[1.1]">
            {title}
          </h2>
          {cta && (
            <BasepowercompanyButton href={cta.href} trailingIcon={<ChevronRight />} className="mt-6">
              {cta.label}
            </BasepowercompanyButton>
          )}
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <ol className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const isOpen = i === open;
              return (
                <li key={s.number}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(i)}
                    className={cn(
                      "block w-full rounded-[calc(var(--radius)*2.5)] p-6 text-left transition-colors",
                      ease,
                      isOpen ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground hover:bg-card/70",
                    )}
                  >
                    <span className={cn("block text-xs leading-[1.5] font-bold", !isOpen && "text-muted-foreground")}>{s.number}</span>
                    <span className="mt-2 block font-display text-xl leading-[1.35] font-bold tracking-[-0.025em]">{s.title}</span>
                    <span className={cn("grid transition-[grid-template-rows]", ease, isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                      <span className="min-h-0 overflow-hidden">
                        <span className="block pt-3 text-base leading-6 font-semibold tracking-[-0.005em]">{s.body}</span>
                        <BasepowercompanyMedia
                          media={s.media}
                          label={s.mediaLabel}
                          className="mt-6 aspect-[1.33] rounded-[calc(var(--radius)*2.5)] lg:hidden"
                        />
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative hidden aspect-[1.63] overflow-clip rounded-[calc(var(--radius)*2.5)] lg:block">
            {steps.map((s, i) => (
              <BasepowercompanyMedia
                key={s.number}
                media={s.media}
                label={s.mediaLabel}
                className={cn("absolute inset-0 transition-opacity", ease, i === open ? "opacity-100" : "opacity-0")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
