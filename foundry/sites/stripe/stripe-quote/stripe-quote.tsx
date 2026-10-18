import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import "./stripe-quote.css";

export interface StripeQuoteItem {
  /** the customer's wordmark on its tab */
  brand: string;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  link?: { label: string; href: string };
}

export interface StripeQuoteProps {
  quotes: StripeQuoteItem[];
  /** seconds each quote stays before the next (0 to stay put) */
  interval?: number;
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

/**
 * Centred slate quote with a bold attribution and an indigo link, over a row of customer
 * wordmark tabs. The quotes rotate; a gradient line fills along the active tab's top edge.
 */
export function StripeQuote({ quotes, interval = 7, rule = "none", className }: StripeQuoteProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const auto = interval > 0 && !reduce && quotes.length > 1;

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % quotes.length), interval * 1000);
    return () => clearTimeout(t);
  }, [active, auto, interval, quotes.length]);

  const q = quotes[active];
  return (
    <StripeFrame rule={rule} className={className} padded={false} innerClassName="pt-16 lg:pt-20">
      <figure key={active} className="mx-auto max-w-[52rem] animate-[stripe-quote-in_600ms_ease-out] px-gutter text-center motion-reduce:animate-none">
        <blockquote className="font-display text-xl leading-[1.25] font-light tracking-[-0.01em] text-balance text-muted-foreground lg:text-[1.625rem] lg:leading-[1.12]">
          “{q.quote}”
        </blockquote>
        <figcaption className="mt-8 text-base font-light text-muted-foreground lg:text-lg">
          <span className="font-normal text-foreground">{q.name},</span> {q.role}
        </figcaption>
        {q.link && (
          <StripeButton href={q.link.href} variant="link" className="mt-8 text-base">
            {q.link.label}
          </StripeButton>
        )}
      </figure>

      <div role="tablist" className="mt-14 flex overflow-x-auto border-t border-dashed border-border [scrollbar-width:none] lg:mt-16 lg:grid lg:grid-cols-4">
        {quotes.map((item, i) => (
          <button
            key={item.brand}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "relative h-20 min-w-[50%] shrink-0 px-6 font-display text-xl font-bold tracking-[-0.04em] transition-colors duration-300 lg:min-w-0 lg:h-[4.5rem]",
              i === active ? "text-foreground" : "text-foreground/35 hover:text-foreground/60",
            )}
          >
            {i === active && (
              <span
                aria-hidden
                key={`bar-${active}`}
                className={cn(
                  "absolute -top-px left-0 h-px w-full origin-left bg-linear-to-r from-chart-3 to-primary",
                  auto && "animate-[stripe-quote-fill_var(--quote-interval)_linear]",
                )}
                style={{ ["--quote-interval" as string]: `${interval}s` }}
              />
            )}
            {item.brand}
          </button>
        ))}
      </div>
    </StripeFrame>
  );
}
