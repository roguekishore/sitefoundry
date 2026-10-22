import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MeowQuoteProps {
  /** the customer's wordmark or logo */
  company: ReactNode;
  /** the quote itself, with its quotation marks */
  quote: ReactNode;
  /** who said it, e.g. "Ada Lin, founder of Fernwick" */
  author: ReactNode;
  /** small print under the name */
  fineprint?: ReactNode;
  /** the portrait; a placeholder panel when empty */
  media?: ReactNode;
  className?: string;
}

/** A grey band with a big quote on the left and a portrait on the right. */
export function MeowQuote({ company, quote, author, fineprint, media, className }: MeowQuoteProps) {
  return (
    <section className={cn("overflow-x-clip bg-muted text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-x-9 px-gutter py-6 lg:grid-cols-[37.5rem_minmax(0,1fr)] lg:py-[4.3rem]">
        <div className="relative aspect-[600/440] w-full overflow-clip rounded-lg bg-accent lg:col-start-2 lg:row-start-1 lg:w-[calc(100%+5rem)]">{media}</div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <div className="hidden items-center text-xl font-semibold lg:flex">{company}</div>
          <blockquote className="mt-9 font-display text-2xl/8 font-semibold tracking-[-0.01em] lg:text-[1.75rem]/9">{quote}</blockquote>
          <p className="mt-6 text-base/6 lg:mt-9">{author}</p>
          {fineprint && <p className="mt-6 text-[0.8125rem]/[1.125rem] tracking-[0.01em] lg:mt-8">{fineprint}</p>}
          <div className="mt-6 flex items-center text-xl font-semibold lg:hidden">{company}</div>
        </div>
      </div>
    </section>
  );
}
