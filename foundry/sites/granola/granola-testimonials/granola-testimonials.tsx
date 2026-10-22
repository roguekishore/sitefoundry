import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GranolaMedia } from "@foundry/granola-media";

export interface GranolaTestimonial {
  /** the customer's company, set as a small wordmark */
  company: string;
  /** a small mark before the company name (e.g. a lucide icon) */
  companyMark?: ReactNode;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role */
  role: string;
  /** a square portrait; a plain placeholder while empty */
  photo?: ReactNode;
}

export interface GranolaTestimonialsProps {
  /** the centred serif heading */
  heading: string;
  /** the quote cards, in a row you can swipe or scroll sideways */
  items: GranolaTestimonial[];
  /** accessible name for the scrolling row */
  listLabel?: string;
  className?: string;
}

/* The row starts at the content edge (24px on phones) and runs off the right of the window. */
const EDGE = "max(1.5rem, calc((100vw - var(--page-width)) / 2))";

export function GranolaTestimonials({ heading, items, listLabel, className }: GranolaTestimonialsProps) {
  return (
    <section className={cn("dark bg-background pt-20 pb-20 text-foreground lg:pt-28 lg:pb-28", className)}>
      <h2 className="mx-auto max-w-[17ch] px-gutter text-center font-display text-4xl leading-none tracking-[-0.01em] text-balance lg:max-w-[20ch] lg:text-[3.75rem]">
        {heading}
      </h2>
      <ul
        aria-label={listLabel}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] lg:mt-16 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        style={{ paddingInline: EDGE, scrollPaddingInline: EDGE }}
      >
        {items.map((t) => (
          <li
            key={t.name}
            className="flex w-[min(20.25rem,calc(100vw-3rem))] shrink-0 snap-start flex-col border border-foreground px-8 pt-10 pb-10 lg:grid lg:h-[27.5rem] lg:w-[43.75rem] lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr_auto] lg:gap-x-6 lg:px-14 lg:pt-12 lg:pb-9"
          >
            <p className="flex items-center gap-2 font-sans text-xl font-medium tracking-[-0.02em] lg:col-span-2 lg:col-start-1 lg:row-start-1 [&_svg]:size-6">
              {t.companyMark}
              {t.company}
            </p>
            <blockquote className="relative mt-12 font-display text-xl leading-[1.15] tracking-[-0.005em] lg:col-start-1 lg:row-start-2 lg:mt-14 lg:text-4xl lg:leading-[1.1]">
              <span aria-hidden className="absolute -left-[0.55em]">
                {"“"}
              </span>
              {t.quote}
              <span aria-hidden>{"”"}</span>
            </blockquote>
            <GranolaMedia className="mt-10 size-40 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-0 lg:size-[11.2rem] lg:self-end">{t.photo}</GranolaMedia>
            <p className="mt-6 text-sm lg:col-start-1 lg:row-start-3 lg:mt-0">
              <span className="block font-medium">{t.name}</span>
              <span className="block text-muted-foreground">{t.role}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
