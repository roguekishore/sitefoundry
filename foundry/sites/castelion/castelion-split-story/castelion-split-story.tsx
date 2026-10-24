import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CastelionLines } from "@foundry/castelion-lines";
import { CastelionPlaceholder } from "@foundry/castelion-placeholder";
import "./castelion-split-story.css";

export interface CastelionStory {
  /** the story's title, one entry per desktop line */
  title: string[];
  /** the justified paragraph under it */
  body: string;
}

export interface CastelionSplitStoryProps {
  /** the stories in the panel (two in the original) */
  stories: CastelionStory[];
  /** the full-bleed painting or photo behind the panel (empty: a dusk wash) */
  backdrop?: ReactNode;
  /** what the backdrop shows, for screen readers while the slot is empty */
  backdropLabel?: string;
  /** up to two transparent cut-outs floating over the backdrop's left side (empty: translucent panels) */
  objects?: ReactNode[];
  className?: string;
}

/** where each cut-out slot sits and how big it is (phones / desktop) */
const objectSlots = [
  "left-[30%] top-[-4%] w-[17%] aspect-[0.21] lg:left-[13%] lg:top-[4%] lg:w-[11.5%]",
  "left-[56%] top-[4%] w-[14%] aspect-[0.31] lg:left-[30%] lg:top-[30%] lg:w-[8.5%]",
];

/** Backdrop band with a page-colour story panel over its middle and two floating cut-outs. */
export function CastelionSplitStory({ stories, backdrop, backdropLabel, objects = [], className }: CastelionSplitStoryProps) {
  return (
    <section className={cn("bg-background pt-[10.5rem] lg:pt-36 lg:pb-[6.5rem]", className)}>
      <div className="castelion-split-story-band relative isolate overflow-clip">
        <div className="castelion-split-story-backdrop absolute inset-x-0 -top-48 -bottom-48 -z-20">
          <CastelionPlaceholder media={backdrop} tone="dusk" label={backdropLabel} className="size-full" />
        </div>
        {objectSlots.map((slot, i) => (
          <div key={i} aria-hidden className={cn("castelion-split-story-object absolute -z-10", `castelion-split-story-object-${i}`, slot)}>
            {objects[i] ?? <div className="size-full rounded-lg border border-background/60 bg-background/25" />}
          </div>
        ))}

        <div className="mt-[9.25rem] mb-[7.875rem] bg-background px-gutter pt-12 pb-12 text-foreground lg:my-0 lg:ml-[45.4%] lg:w-[30.6%] lg:px-[2.625rem] lg:pt-[2.125rem] lg:pb-8">
          {stories.map((story, i) => (
            <div key={i} className={cn(i > 0 && "mt-9 lg:mt-[4.25rem]")}>
              <CastelionLines
                as="h2"
                lines={story.title}
                className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.1] font-bold tracking-[0.01em]"
              />
              <p className="castelion-split-story-body mt-7 text-justify text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium">
                {story.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
