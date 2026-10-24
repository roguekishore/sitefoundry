import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceButton } from "@foundry/k2space-button";
import { K2spaceMedia } from "@foundry/k2space-media";
import "./k2space-quote.css";

export interface K2spaceQuoteProps {
  /** the quote, without quotation marks (they are added) */
  quote: string;
  /** who said it, and their role */
  attribution: string;
  /** a button under the attribution */
  action?: { label: string; href: string };
  /** the full-bleed footage behind it */
  media?: ReactNode;
  className?: string;
}

/** A window-tall footage band with a big centred quote, its source and one button. */
export function K2spaceQuote({ quote, attribution, action, media, className }: K2spaceQuoteProps) {
  return (
    <section
      className={cn(
        "dark relative isolate flex h-[80svh] items-center justify-center overflow-clip bg-background px-gutter text-center text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:h-svh",
        className,
      )}
    >
      <K2spaceMedia media={media} scrub className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/35" />
      <figure className="flex flex-col items-center">
        <blockquote className="k2space-quote-in max-w-[360px] font-display text-[34px]/none font-[560] lg:max-w-[66vw] lg:text-[5.027vw]/[0.9]">
          “{quote}”
        </blockquote>
        <figcaption className="k2space-quote-in mt-9 text-base/none font-[560] lg:mt-[2vw] lg:text-[max(1rem,1.3227vw)]/none">
          {attribution}
        </figcaption>
        {action && (
          <K2spaceButton href={action.href} className="k2space-quote-in k2space-quote-in-late mt-9 lg:mt-[2.08vw] lg:w-[14vw]">
            {action.label}
          </K2spaceButton>
        )}
      </figure>
    </section>
  );
}
