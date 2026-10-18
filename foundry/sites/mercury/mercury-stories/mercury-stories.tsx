import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryHeading } from "@foundry/mercury-heading";
import { MercuryLogos, type MercuryLogo } from "@foundry/mercury-logos";

export interface MercuryStory {
  /** the small chip in the top corner, e.g. the customer's industry */
  tag?: string;
  /** the customer's words */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** the picture behind the quote (a photo or art) */
  media: ReactNode;
  /** label for the bar that switches to this story */
  label: string;
}

export interface MercuryStoriesProps {
  /** the centred statement above; pass a list of lines to choose the breaks */
  title: string | string[];
  /** an optional row of customer logos under the statement */
  logos?: MercuryLogo[];
  /** the stories; the bars under the card switch between them */
  stories: MercuryStory[];
  className?: string;
}

/**
 * Mercury's customer section: a centred statement, a row of logos, then one wide picture
 * card with the quote set over a soft shade in its lower-left corner. Thin bars under the
 * card switch stories. Tall on phones, wide (2:1) on desktop.
 */
export function MercuryStories({ title, logos, stories, className }: MercuryStoriesProps) {
  const [at, setAt] = useState(0);
  const story = stories[at];

  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.6)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <MercuryHeading size="statement" align="center" title={title} className="mx-auto max-w-[34rem]" />
      </div>
      {logos && <MercuryLogos logos={logos} className="mx-auto mt-10 max-w-[90rem] lg:mt-12" />}

      {story && (
        <div className="mx-auto max-w-page px-gutter">
          <figure className="relative isolate mt-12 aspect-[9/16] overflow-hidden rounded-xl sm:aspect-[4/3] lg:mt-[4.5rem] lg:aspect-[2/1]">
            <div key={at} className="absolute inset-0 -z-10">
              {story.media}
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-background/80 via-background/25 via-45% to-transparent lg:bg-linear-to-tr lg:via-background/20 lg:via-50%" />
            {story.tag && <span className="absolute top-6 left-6 rounded-[calc(var(--radius)-8px)] bg-background px-2 py-1 text-sm text-foreground lg:top-8 lg:left-8">{story.tag}</span>}
            <figcaption className="absolute inset-x-6 bottom-8 lg:right-auto lg:bottom-9 lg:left-8 lg:max-w-[24rem]">
              <blockquote className="text-lg leading-[1.35] font-[540] -indent-[0.4em] text-foreground lg:text-[1.3125rem]">{story.quote}</blockquote>
              <p className="mt-6 text-base font-[540] text-foreground lg:mt-7 lg:text-[1.3125rem]">{story.name}</p>
              <p className="text-base text-muted-foreground lg:text-[1.3125rem]">{story.role}</p>
            </figcaption>
          </figure>

          {stories.length > 1 && (
            <div className="mx-auto mt-8 flex max-w-[31rem] gap-2 lg:mt-10">
              {stories.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  aria-label={s.label}
                  aria-pressed={i === at}
                  onClick={() => setAt(i)}
                  className="group flex-1 py-2"
                >
                  <span
                    className={cn(
                      "block h-[3px] rounded-full transition-colors duration-200 motion-reduce:transition-none",
                      i === at ? "bg-foreground" : "bg-foreground/20 group-hover:bg-foreground/40",
                    )}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
