// foundry-allow-text: the small opening quote mark over each quote is a decorative glyph.
import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OuraringMedia } from "@foundry/ouraring-media";
import { OuraringReveal } from "@foundry/ouraring-reveal";

export interface OuraringStory {
  /** the tag chip, e.g. "Recovery" (shown uppercase) */
  tag: string;
  /** the quote, ending with its closing mark */
  quote: ReactNode;
  /** who said it */
  name: string;
  /** a round portrait */
  avatar?: ReactNode;
}

export interface OuraringTestimonialsProps {
  stories: OuraringStory[];
  className?: string;
}

export function OuraringTestimonials({ stories, className }: OuraringTestimonialsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <ul className="mx-auto grid max-w-page gap-6 px-gutter lg:grid-cols-3 lg:gap-[30px]">
        {stories.map((s, i) => (
          <OuraringReveal key={i} as="li" step={i} className="flex flex-col rounded-lg bg-card p-6 text-card-foreground lg:min-h-[426px] lg:p-10">
            <span className="self-start rounded-sm bg-primary px-3 py-[9px] text-[12px] leading-4 font-bold tracking-[-0.01em] text-primary-foreground uppercase">
              {s.tag}
            </span>
            <span aria-hidden className="mt-6 font-display text-[14px] leading-none lg:mt-11">
              “
            </span>
            <blockquote className="mt-3 font-display text-[19px] leading-[1.2] lg:text-[25px]">{s.quote}</blockquote>
            <div className="mt-6 flex items-center gap-4 lg:mt-auto lg:pt-6">
              <OuraringMedia media={s.avatar} className="size-8 shrink-0 overflow-clip rounded-full lg:size-[60px]" />
              <span className="text-[16px] font-semibold lg:text-[20px]">{s.name}</span>
            </div>
          </OuraringReveal>
        ))}
      </ul>
    </section>
  );
}
