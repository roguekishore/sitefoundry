import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendFeatureCard } from "@foundry/resend-feature-card";
import { ResendHeading } from "@foundry/resend-heading";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendBeyondCard {
  /** the screenshot in the card's lit box; empty shows a placeholder */
  media?: ReactNode;
  /** a small line icon above the title */
  icon?: ReactNode;
  title: string;
  text: ReactNode;
  link?: { label: string; href: string };
}

export interface ResendBeyondProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: ReactNode | ReactNode[];
  /** two cards */
  cards: ResendBeyondCard[];
  className?: string;
}

export function ResendBeyond({ title, text, cards, className }: ResendBeyondProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading align="start" title={title} text={text} className="max-lg:items-center max-lg:text-center" textClassName="lg:max-w-none" />
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {cards.map((c) => (
            <ResendFeatureCard
              key={c.title}
              visualClassName="h-60 lg:h-[18.25rem]"
              visual={
                <div className="absolute top-14 left-14 h-[7.4rem] w-[17.25rem] overflow-clip rounded-lg lg:top-[4.6rem] lg:left-12 lg:h-[14.25rem] lg:w-[33.4rem]">
                  {c.media ?? <ResendPlaceholder className="size-full" />}
                </div>
              }
              icon={c.icon}
              title={c.title}
              text={c.text}
              link={c.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
