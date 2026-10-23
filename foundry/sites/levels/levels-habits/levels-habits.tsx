import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsHabitsItem {
  /** the item title */
  title: ReactNode;
  /** grey text under it */
  body: ReactNode;
}

export interface LevelsHabitsProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the titled items, divided by hairlines (three on the original) */
  items: LevelsHabitsItem[];
  /** the panel on the right */
  panel: {
    /** tracked capitals at the top of the panel */
    eyebrow?: string;
    /** grey line under it */
    text?: ReactNode;
    /** the phone screen; fills a 0.49 frame. Empty: a placeholder */
    media?: ReactNode;
    /** screen-reader label for the placeholder */
    mediaLabel?: string;
  };
  className?: string;
}

/** Heading and divided items beside a panel holding a phone screen. */
export function LevelsHabits({ eyebrow, title, lead, items, panel, className }: LevelsHabitsProps) {
  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto grid max-w-page items-center gap-y-14 lg:grid-cols-[minmax(0,33.75rem)_27.125rem] lg:justify-between lg:gap-x-12">
        <div>
          <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} />
          <ul className="mt-12 lg:mt-14">
            {items.map((item, i) => (
              <li key={i} className="border-border py-8 first:pt-0 not-first:border-t last:pb-0">
                <h3 className="font-display text-[1.45rem] leading-8 font-[550] tracking-[-0.03em] text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-secondary px-6 pt-8 pb-8">
          {panel.eyebrow ? (
            <p className="text-sm leading-5 font-semibold tracking-[0.16em] text-muted-foreground uppercase">{panel.eyebrow}</p>
          ) : null}
          {panel.text ? <p className="mt-5 max-w-[22.5rem] text-base leading-7 text-muted-foreground">{panel.text}</p> : null}
          <div className="mx-auto mt-8 aspect-[0.49] w-[16.75rem] overflow-clip rounded-[calc(var(--radius)+2.25rem)] sm:w-80 [&>*]:size-full [&>img]:object-contain">
            {panel.media ?? <LevelsPlaceholder tone="film" label={panel.mediaLabel} />}
          </div>
        </div>
      </div>
    </section>
  );
}
