import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./attio-quote.css";

export interface AttioQuoteProps {
  /** the quote, with its own quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company, on the line under */
  role?: string;
  className?: string;
}

/**
 * A white stage with a faint dot grid that pins under the header for about half a screen of
 * scrolling while a big serif quote inks in word by word; the speaker's name and role sit
 * small underneath.
 */
export function AttioQuote({ quote, name, role, className }: AttioQuoteProps) {
  const words = quote.split(/\s+/).filter(Boolean);
  // each word darkens over a short slice of the pinned stretch, in reading order
  const slice = (i: number): CSSProperties =>
    ({
      "--attio-quote-a": `${30 + (i / words.length) * 28}%`,
      "--attio-quote-b": `${36 + (i / words.length) * 28}%`,
    }) as CSSProperties;

  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <div className="attio-quote-track mx-auto h-[150svh] max-w-page border-b border-border lg:border-x">
        <div className="sticky top-[6.25rem] flex h-[calc(100svh-6.25rem)] flex-col items-center justify-center bg-[radial-gradient(var(--border)_1px,transparent_1.2px)] bg-[size:12px_12px] px-gutter text-center lg:top-[7.25rem] lg:h-[calc(100svh-7.25rem)]">
          <blockquote className="max-w-[20rem] font-[family-name:var(--attio-serif,var(--typeface-display))] text-[2rem] leading-[1.13] tracking-[-0.01em] text-balance sm:max-w-[45rem] lg:text-5xl lg:leading-[1.08] lg:tracking-[-0.015em]">
            {words.map((w, i) => (
              <span key={i} className="attio-quote-word" style={slice(i)}>
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </blockquote>
          <p className="mt-11 text-sm font-semibold tracking-[-0.01em] lg:mt-14">{name}</p>
          {role && <p className="mt-1 text-sm font-medium tracking-[-0.01em] text-foreground/85">{role}</p>}
        </div>
      </div>
    </section>
  );
}
