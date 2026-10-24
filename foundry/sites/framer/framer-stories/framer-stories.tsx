import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FramerArrowLink } from "@foundry/framer-arrow-link";
import { FramerButton } from "@foundry/framer-button";
import { FramerSectionHead } from "@foundry/framer-heading";
import "./framer-stories.css";

export interface FramerStory {
  /** the customer's name, shown as a wordmark in the card's middle */
  name: string;
  /** a real logo instead of the text wordmark */
  mark?: ReactNode;
  /** the link at the card's foot */
  link: { label: string; href: string };
}

export interface FramerStoriesProps {
  /** section title; "\n" breaks on desktop only */
  title: string;
  /** the small dark button on the right (below the title on phones) */
  action: { label: string; href: string };
  /** the cards in the ticker (five or more fill a wide screen) */
  stories: FramerStory[];
  className?: string;
}

/** Edge-to-edge ticker of customer-story cards. */
export function FramerStories({ title, action, stories, className }: FramerStoriesProps) {
  return (
    <section className={cn("bg-background py-15 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter lg:box-content">
        <FramerSectionHead
          title={title}
          actions={
            <FramerButton href={action.href} variant="secondary">
              {action.label}
            </FramerButton>
          }
        />
      </div>

      <div className="framer-stories-viewport mt-12 overflow-x-clip lg:mt-11">
        <div className="framer-stories-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className={cn("flex shrink-0 gap-2.5 pr-2.5", copy === 1 && "framer-stories-copy")}
            >
              {stories.map((story) => (
                <li
                  key={story.name}
                  className="relative flex h-80 w-[15.625rem] flex-col items-center rounded-[calc(var(--radius)*2.5)] border border-border bg-background px-5 pb-6 transition-colors duration-300 hover:bg-card motion-reduce:transition-none lg:h-[28.75rem] lg:w-[22.5rem] lg:pb-9"
                >
                  <div className="flex flex-1 items-center">
                    {story.mark ? (
                      <span role="img" aria-label={story.name}>
                        {story.mark}
                      </span>
                    ) : (
                      <span className="font-display text-[1.75rem] font-semibold tracking-[-0.03em] whitespace-nowrap lg:text-[2.375rem]">
                        {story.name}
                      </span>
                    )}
                  </div>
                  <FramerArrowLink
                    href={story.link.href}
                    label={story.link.label}
                    className="text-[0.9375rem] after:absolute after:inset-0 lg:text-lg"
                    tabIndex={copy === 1 ? -1 : undefined}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
