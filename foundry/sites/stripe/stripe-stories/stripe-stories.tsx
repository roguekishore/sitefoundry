import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeArt, type StripeArtVariant } from "@foundry/stripe-art";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import { StripeSegment, type StripeSegmentProps } from "@foundry/stripe-segment";

export interface StripeStory {
  /** one to three characters for the square logo chip */
  mark: string;
  /** chip colours: ink (dark), sun (yellow), paper (light with a border) */
  markTone?: "ink" | "sun" | "paper";
  /** the story's headline */
  title: string;
  href: string;
  /** the picture shown when the story is open */
  art: StripeArtVariant;
  /** short facts under the picture: a dark figure and its slate description */
  facts: { strong: string; text: string }[];
}

export interface StripeStoriesProps {
  /** optional section heading above the segment (two-tone) */
  heading?: { lead: string; rest?: string };
  /** the segment opener: title, paragraph and button */
  segment?: StripeSegmentProps;
  stories: StripeStory[];
  /** label of the story link button */
  readLabel: string;
  /** label of the plus button, for screen readers */
  openLabel?: string;
  className?: string;
}

const tones = {
  ink: "bg-foreground text-background",
  sun: "bg-chart-4 text-foreground",
  paper: "border border-border bg-muted text-foreground",
};

/**
 * Customer stories as an accordion: rows with a square logo chip, a light headline and a
 * lavender plus; the open story shows a wide picture and a row of facts. On phones every
 * story is open, each with its own outline button.
 */
export function StripeStories({ heading, segment, stories, readLabel, openLabel, className }: StripeStoriesProps) {
  const [open, setOpen] = useState(0);
  return (
    <StripeFrame className={className} innerClassName="px-0">
      {heading && (
        <div className="px-gutter py-14 lg:py-24">
          <StripeHeading lead={heading.lead} rest={heading.rest} className="max-w-[47rem]" />
        </div>
      )}
      <div className={cn("px-gutter pb-6", heading && "border-t border-border pt-12 lg:pt-14")}>
        {segment && <StripeSegment {...segment} className="mb-10 lg:mb-12" />}
        {stories.map((s, i) => {
          const isOpen = i === open;
          return (
            <div key={s.title} className={cn("py-4 lg:py-3", i > 0 && "border-t border-dashed border-border max-lg:mt-4 max-lg:pt-8")}>
              <div className="flex items-start gap-4 lg:items-center">
                <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-sm font-display text-sm leading-none font-bold tracking-[-0.04em]", tones[s.markTone ?? "ink"])}>
                  {s.mark}
                </span>
                <h3 className="flex-1 font-display text-lg leading-[1.25] font-light text-foreground lg:text-[1.375rem] lg:tracking-[-0.01em]">
                  <button type="button" className="text-left lg:cursor-pointer" onClick={() => setOpen(i)} aria-expanded={isOpen}>
                    {s.title}
                  </button>
                </h3>
                <div className="hidden shrink-0 lg:block">
                  {isOpen ? (
                    <StripeButton href={s.href} variant="outline" size="sm">
                      {readLabel}
                    </StripeButton>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-label={openLabel}
                      className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Plus className="size-4" strokeWidth={1.75} />
                    </button>
                  )}
                </div>
              </div>

              {/* grid-rows 0fr → 1fr animates the height; phones keep every story open */}
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none max-lg:grid-rows-[1fr]",
                  isOpen ? "lg:grid-rows-[1fr]" : "lg:grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-4 h-40 overflow-hidden rounded-md sm:h-72 lg:mt-3 lg:h-[26rem]">
                    <StripeArt variant={s.art} />
                  </div>
                  <div className="mt-4 grid gap-3 text-base font-light lg:grid-cols-[1fr_1fr_2fr] lg:gap-8">
                    {s.facts.map((f) => (
                      <p key={f.strong} className="text-muted-foreground">
                        <span className="font-normal text-foreground">{f.strong}</span> {f.text}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 lg:hidden">
                    <StripeButton href={s.href} variant="outline">
                      {readLabel}
                    </StripeButton>
                  </div>
                  <div className="h-4 lg:h-8" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StripeFrame>
  );
}
