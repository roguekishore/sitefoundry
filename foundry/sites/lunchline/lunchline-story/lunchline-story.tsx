import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import "./lunchline-story.css";

export interface LunchlineStoryProps {
  /** the light headline; its letters rise in as it scrolls into view */
  heading: string;
  /** the story, one entry per paragraph */
  paragraphs: string[];
  /** the photo inside the white polaroid frame (portrait, 0.79). Empty: a placeholder. */
  media?: ReactNode;
  /** the handwritten caption under the photo */
  caption: string;
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

export function LunchlineStory({ heading, paragraphs, media, caption, id, className }: LunchlineStoryProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground lg:pt-[7.6rem] lg:pb-[7.5rem]", className)}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter lg:grid-cols-2 lg:gap-12">
        <div>
          <LunchlineLetterRise
            text={heading}
            className="font-display text-[2.375rem] leading-[1.2] font-light tracking-[-0.01em] lg:max-w-[41rem] lg:text-[3.5rem]"
          />
          <div className="mt-4 space-y-4 text-lg leading-[1.4] lg:max-w-[41rem] lg:text-[1.3125rem]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <figure className="lunchline-story-polaroid w-full bg-card p-2 pb-0 text-card-foreground shadow-[0_4px_12px] shadow-foreground/10 lg:mt-6 lg:w-[20.4rem] lg:mr-[6.9rem] lg:self-start lg:justify-self-end lg:p-4 lg:pb-0">
          <div className="relative aspect-[0.79] w-full overflow-clip [&>img]:size-full [&>img]:object-cover">
            {media ?? <div className="size-full bg-muted" />}
          </div>
          <figcaption className="py-3 text-center font-[family-name:var(--typeface-hand,var(--typeface-display))] text-[2rem] leading-none lg:py-3.5 lg:text-[1.85rem]">
            {caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
