import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsMonitorProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** the grey paragraph under the title */
  lead?: ReactNode;
  /** the stacked note cards */
  notes: ReactNode[];
  /** the photo; fills its frame. Empty: a placeholder */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
  /** the caption over the bottom of the photo */
  caption?: {
    /** sage tracked capitals */
    eyebrow?: string;
    /** the white sentence */
    text: ReactNode;
  };
  className?: string;
}

/** Captioned photo card beside a heading and three note cards. */
export function LevelsMonitor({ eyebrow, title, lead, notes, media, mediaLabel, caption, className }: LevelsMonitorProps) {
  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto grid max-w-page gap-y-14 lg:grid-cols-2 lg:gap-x-12">
        <div className="relative isolate aspect-[0.78] overflow-clip rounded-lg lg:aspect-auto lg:min-h-[38rem]">
          <div className="absolute inset-0 -z-10 [&>*]:size-full [&>img]:object-cover">
            {media ?? <LevelsPlaceholder tone="photo" label={mediaLabel} />}
          </div>
          {caption ? (
            <div className="dark absolute inset-x-0 bottom-0 bg-linear-to-t from-background/70 via-background/25 to-transparent px-8 pt-24 pb-12 lg:px-10 lg:pt-32">
              {caption.eyebrow ? (
                <p className="text-xs leading-4 font-semibold tracking-[0.187em] text-glow uppercase">{caption.eyebrow}</p>
              ) : null}
              <p className="mt-5 max-w-[30rem] text-lg leading-8 text-foreground/86">{caption.text}</p>
            </div>
          ) : null}
        </div>

        <div className="lg:py-2.5">
          <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} />
          <ul className="mt-10 flex flex-col gap-4">
            {notes.map((note, i) => (
              <li
                key={i}
                className="rounded-lg border border-foreground/8 bg-secondary px-5 py-[1.1875rem] text-sm leading-6 text-secondary-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
