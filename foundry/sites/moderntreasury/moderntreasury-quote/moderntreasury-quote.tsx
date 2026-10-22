import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryButton } from "@foundry/moderntreasury-button";

export interface ModerntreasuryStory {
  /** the customer's name, shown as a bold wordmark when there is no logo */
  company: string;
  /** the customer's logo, replacing the wordmark */
  logo?: ReactNode;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** the button to the full story */
  link?: { label: string; href: string };
}

export interface ModerntreasuryQuoteProps {
  /** the stories; the arrows step through them */
  stories: ModerntreasuryStory[];
  /** screen-reader labels for the arrows */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** A one-at-a-time customer story card with round arrow buttons. */
export function ModerntreasuryQuote({ stories, prevLabel, nextLabel, className }: ModerntreasuryQuoteProps) {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  const step = (d: number) => setIndex((i) => (i + d + stories.length) % stories.length);
  const arrow = "flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-150 hover:bg-primary/80 motion-reduce:transition-none";
  if (!story) return null;

  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {stories.length > 1 && (
          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => step(-1)} aria-label={prevLabel} className={arrow}>
              <ArrowLeft aria-hidden className="size-4" strokeWidth={1.75} />
            </button>
            <button type="button" onClick={() => step(1)} aria-label={nextLabel} className={arrow}>
              <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        )}
        <figure aria-live="polite" className="mt-6 grid rounded-lg bg-popover px-6 pt-6 pb-14 text-popover-foreground lg:min-h-[15rem] lg:grid-cols-[18rem_1fr] lg:items-center lg:py-14 lg:pr-12 lg:pl-0">
          <div className="flex h-[10.5rem] items-center justify-center lg:h-auto">
            {story.logo ?? <span className="font-display text-[2rem] leading-none font-bold tracking-[-0.03em]">{story.company}</span>}
          </div>
          <div className="mt-6 lg:mt-0">
            <blockquote className="max-w-[50rem] -indent-[0.4em] text-base leading-6 text-foreground/70">
              {"“"}
              {story.quote}
              {"”"}
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-base leading-6">
                <span className="block">{story.name}</span>
                <span className="block">{story.role}</span>
              </p>
              {story.link && (
                <ModerntreasuryButton href={story.link.href} size="xs" arrow className="self-start lg:self-auto">
                  {story.link.label}
                </ModerntreasuryButton>
              )}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
