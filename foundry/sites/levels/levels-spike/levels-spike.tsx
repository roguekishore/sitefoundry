import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsLink } from "@foundry/levels-link";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsSpikeChoice {
  /** the chip's text */
  label: string;
  /** the chart shown while this chip is selected; fills the chart area. Empty: a placeholder */
  chart?: ReactNode;
}

export interface LevelsSpikeProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** the long grey paragraph */
  lead?: ReactNode;
  /** the green arrow link under the paragraph */
  link?: { label: string; href: string };
  /** the tiny caption above the chips */
  caption?: string;
  /** the chips; the first starts selected */
  choices: LevelsSpikeChoice[];
  /** screen-reader label for the chart placeholder */
  chartLabel?: string;
  className?: string;
}

/** Text beside a tall chart card whose chips swap the chart. */
export function LevelsSpike({ eyebrow, title, lead, link, caption, choices, chartLabel, className }: LevelsSpikeProps) {
  const [active, setActive] = useState(0);
  const current = choices[active];

  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto grid max-w-page items-center gap-y-14 lg:grid-cols-[minmax(0,1fr)_34.125rem] lg:gap-x-14">
        <div>
          <LevelsHeading eyebrow={eyebrow} title={title} />
          {lead ? (
            <p className="mt-6 max-w-[37.5rem] text-lg leading-8 text-pretty text-muted-foreground lg:mt-4">{lead}</p>
          ) : null}
          {link ? (
            <LevelsLink href={link.href} className="mt-10 lg:mt-12">
              {link.label}
            </LevelsLink>
          ) : null}
        </div>

        <div className="relative h-[37.5rem] overflow-clip rounded-[calc(var(--radius)+1.25rem)] border border-border bg-[radial-gradient(circle_at_12%_15%,color-mix(in_oklab,var(--highlight)_10%,transparent),transparent_28%),radial-gradient(circle_at_88%_80%,color-mix(in_oklab,var(--highlight)_8%,transparent),transparent_30%),linear-gradient(to_bottom,var(--background),var(--secondary))] shadow-[0_24px_60px_-42px_color-mix(in_oklab,var(--highlight)_35%,transparent)]">
          <div className="absolute inset-x-1 top-[10%] bottom-0">
            {current?.chart ?? <LevelsPlaceholder tone="wash" label={chartLabel} className="rounded-t-[calc(var(--radius)+0.5rem)]" />}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-linear-to-b from-secondary/0 via-secondary/90 via-40% to-secondary px-6 pt-16 pb-8">
            {caption ? (
              <p className="text-center text-[0.6875rem] leading-[1.5] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {caption}
              </p>
            ) : null}
            <div role="tablist" className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-3">
              {choices.map((choice, i) => (
                <button
                  key={choice.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-[2.375rem] rounded-full border px-[0.875rem] text-sm font-medium",
                    "transition duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                    i === active
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/6 bg-background/92 text-foreground/80 hover:border-foreground/15 hover:bg-background",
                  )}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
