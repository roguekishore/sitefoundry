import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorMedia } from "@foundry/cursor-media";

export interface CursorQuote {
  /** the quote, with its own quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** a 40px round portrait (an img); a muted circle when empty */
  avatar?: ReactNode;
}

export interface CursorTestimonialsProps {
  /** the centred heading */
  title: string;
  /** six quotes (phones show the first three) */
  quotes: CursorQuote[];
  className?: string;
}

/** Centred heading and a 3×2 grid of quote cards. */
export function CursorTestimonials({ title, quotes, className }: CursorTestimonialsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <h2 className="mx-auto max-w-[9em] text-center font-display text-[2.125rem] leading-[1.2] tracking-[-0.015em] text-balance sm:max-w-none lg:text-4xl">
          {title}
        </h2>
        <ul className="mt-13 grid gap-2.5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <li
              key={q.name}
              className={cn("flex flex-col rounded-lg border border-border bg-card px-4 pt-4 pb-4.5", i >= 3 && "max-md:hidden")}
            >
              <blockquote className="text-[0.9375rem] leading-[1.5] max-md:line-clamp-4 lg:text-base">{q.quote}</blockquote>
              <div className="mt-auto flex items-center gap-3 pt-11">
                <CursorMedia tone="plain" className="size-10 shrink-0 rounded-full">
                  {q.avatar}
                </CursorMedia>
                <div className="text-[0.8125rem] leading-5 lg:text-sm">
                  <p>{q.name}</p>
                  <p className="text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
