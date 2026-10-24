import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendHeading } from "@foundry/resend-heading";
import { ResendPlaceholder } from "@foundry/resend-placeholder";
import "./resend-testimonials.css";

export interface ResendTestimonial {
  /** the quote, with its quotation marks */
  quote: string;
  name: string;
  role: string;
  /** the company's logo circle; empty shows a placeholder */
  companyAvatar?: ReactNode;
  /** the person's photo circle; empty shows a placeholder */
  avatar?: ReactNode;
}

export interface ResendTestimonialsProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: string | string[];
  items: ResendTestimonial[];
  className?: string;
}

function Card({ item }: { item: ResendTestimonial }) {
  return (
    <figure className="flex w-[20.5rem] shrink-0 flex-col rounded-lg border border-border bg-linear-to-br from-card to-muted p-8 lg:w-[28rem]">
      <blockquote className="text-sm leading-[1.75] text-muted-foreground">
        <p>{item.quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-start gap-5">
        <span className="flex shrink-0">
          <span className="relative size-10 overflow-clip rounded-full">{item.companyAvatar ?? <ResendPlaceholder shape="round" className="size-full" />}</span>
          <span className="relative -ml-2 size-10 overflow-clip rounded-full">{item.avatar ?? <ResendPlaceholder shape="round" className="size-full" />}</span>
        </span>
        <span>
          <span className="block text-sm leading-6 text-foreground">{item.name}</span>
          <span className="block text-sm leading-6 text-muted-foreground">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ResendTestimonials({ title, text, items, className }: ResendTestimonialsProps) {
  return (
    <section className={cn("bg-background pt-[calc(var(--section-y)*0.5)] pb-8 text-foreground lg:pt-section lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading title={title} text={text} />
      </div>
      <div className="group/track mt-16 h-[20rem] overflow-x-auto overflow-y-clip mask-b-from-30% mask-b-to-80% [scrollbar-width:none] motion-safe:overflow-x-clip lg:mt-24 lg:h-[16.5rem]">
        <div
          className="resend-testimonials-track flex w-max items-start gap-8 pr-8 group-hover/track:[animation-play-state:paused]"
          style={{ "--resend-lap": `${Math.max(60, items.length * 30)}s` } as CSSProperties}
        >
          {items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
          <div aria-hidden className="contents">
            {items.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
