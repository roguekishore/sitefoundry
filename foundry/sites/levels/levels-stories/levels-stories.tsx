import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsPlaceholder } from "@foundry/levels-placeholder";

export interface LevelsStory {
  /** the quote */
  quote: ReactNode;
  /** the member's name, set in tracked capitals */
  name: string;
  /** grey line under the name */
  role?: string;
  /** the video still; fills a 4:5 frame. Empty: a placeholder */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
  /** where the watch pill links */
  href?: string;
}

export interface LevelsStoriesProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the story cards (four on the original) */
  stories: LevelsStory[];
  /** the pill's text over each still */
  watchLabel?: string;
  className?: string;
}

/** Centred heading over four lifting story cards. */
export function LevelsStories({ eyebrow, title, lead, stories, watchLabel, className }: LevelsStoriesProps) {
  return (
    <section className={cn("bg-muted px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <LevelsHeading align="centre" eyebrow={eyebrow} title={title} lead={lead} className="[&>p:last-child]:max-w-[46rem] [&>p:last-child]:lg:text-lg" />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.625rem]">
          {stories.map((story, i) => (
            <li
              key={i}
              className="group overflow-clip rounded-[calc(var(--radius)+1.375rem)] bg-card shadow-[0_20px_60px_-40px_color-mix(in_oklab,var(--foreground)_28%,transparent)] transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 motion-reduce:transition-none"
            >
              <div className="relative aspect-[0.8] overflow-clip">
                <div className="size-full transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:transition-none [&>*]:size-full [&>img]:object-cover">
                  {story.media ?? <LevelsPlaceholder tone="photo" label={story.mediaLabel} />}
                </div>
                {watchLabel ? (
                  <a
                    href={story.href ?? "#"}
                    className="absolute bottom-6 left-6 inline-flex h-10 items-center gap-3 rounded-full bg-background/92 px-5 text-xs font-semibold tracking-[0.16em] text-foreground uppercase transition-colors duration-150 hover:bg-background motion-reduce:transition-none"
                  >
                    <Play aria-hidden className="size-3 fill-current" strokeWidth={0} />
                    {watchLabel}
                  </a>
                ) : null}
              </div>
              <div className="px-7 pt-7 pb-9">
                <blockquote className="text-lg leading-8 tracking-[-0.01em] text-card-foreground">{story.quote}</blockquote>
                <p className="mt-6 text-sm leading-5 font-semibold tracking-[0.16em] text-muted-foreground uppercase">{story.name}</p>
                {story.role ? <p className="mt-1 text-sm leading-5 text-muted-foreground">{story.role}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
