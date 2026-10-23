import { cn } from "@foundry/foundry-utils";
import { ZoeHeading } from "@foundry/zoe-heading";
import { ZoeSlider } from "@foundry/zoe-slider";
import "./zoe-stories.css";

export interface ZoeStory {
  /** the member's words */
  quote: string;
  /** their first name */
  name: string;
}

export interface ZoeStoriesProps {
  /** the small line above the heading */
  eyebrow?: string;
  /** the heading */
  title: string;
  /** the quote cards, in order */
  stories: ZoeStory[];
  /** screen-reader names for the row and its buttons */
  labels: { region: string; prev: string; next: string };
  className?: string;
}

/** Zoe's teal band of member quotes. */
export function ZoeStories({ eyebrow, title, stories, labels, className }: ZoeStoriesProps) {
  return (
    <section className={cn("bg-highlight py-24 text-highlight-foreground", className)}>
      <ZoeHeading eyebrow={eyebrow} title={title} className="mx-auto max-w-page px-gutter" />
      <ZoeSlider
        tone="band"
        className="mt-12"
        label={labels.region}
        prevLabel={labels.prev}
        nextLabel={labels.next}
        slideClassName="w-[17.25rem]"
        trackClassName="px-8 scroll-px-8 lg:justify-center"
        controlsClassName="mt-12 lg:hidden"
        slides={stories.map((s) => (
          <figure key={s.name} className="flex h-[21.5rem] flex-col rounded-lg bg-muted p-6 text-foreground">
            {/* foundry-allow-text: a decorative opening quote mark */}
            <span
              aria-hidden
              className="zoe-stories-mark block h-16 font-[family-name:var(--zoe-serif,var(--typeface-display))] text-[8rem] leading-[0.9] text-foreground/15"
            >
              “
            </span>
            <blockquote className="mt-auto text-base leading-[1.35]">{s.quote}</blockquote>
            <figcaption className="mt-4 font-semibold">{s.name}</figcaption>
          </figure>
        ))}
      />
    </section>
  );
}
