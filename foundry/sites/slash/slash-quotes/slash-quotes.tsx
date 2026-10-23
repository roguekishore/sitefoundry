import { useId, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashHeadingText, type SlashHeadingPart } from "@foundry/slash-heading";
import { SlashPlaceholder } from "@foundry/slash-placeholder";
import "./slash-quotes.css";

export interface SlashQuote {
  /** the quote, as runs; `{ italic: "…" }` sets a run in italic (quote marks included in the text) */
  quote: SlashHeadingPart[];
  /** who said it */
  name: string;
  /** their company */
  company: string;
  /** their portrait (40px circle); a dim circle stands in when empty */
  avatar?: ReactNode;
}

export interface SlashQuotesProps {
  /** the quotes that take turns (one to five) */
  quotes: SlashQuote[];
  /** seconds each quote stays */
  seconds?: number;
  className?: string;
}

/** One large centred serif quote at a time; they cross-fade with a small rise, and the dots below follow. */
export function SlashQuotes({ quotes, seconds = 6, className }: SlashQuotesProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const n = quotes.length;
  const slot = 100 / n;
  // Keyframes depend on how many quotes there are, so they are written per instance.
  const fadeIn = slot * 0.12;
  const fadeOut = slot * 0.9;
  const css =
    n > 1
      ? `@keyframes slash-quotes-${id}-show{0%{opacity:0;transform:translateY(16px)}${fadeIn}%{opacity:1;transform:translateY(0)}${fadeOut}%{opacity:1;transform:translateY(0)}${slot}%,100%{opacity:0;transform:translateY(16px)}}` +
        `@keyframes slash-quotes-${id}-dot{0%{width:.25rem;opacity:.4}${fadeIn}%,${fadeOut}%{width:1.5rem;opacity:1}${slot}%,100%{width:.25rem;opacity:.4}}`
      : "";
  const timing = (i: number, name: string) =>
    n > 1 ? { animation: `slash-quotes-${id}-${name} ${n * seconds}s ease-out ${i * seconds}s infinite both` } : undefined;

  return (
    <section className={cn("bg-background py-20 text-foreground lg:pt-[7.5rem] lg:pb-28", className)}>
      {css && <style>{css}</style>}
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              aria-hidden={i > 0 || undefined}
              style={timing(i, "show")}
              className={cn("slash-quotes-item col-start-1 row-start-1 flex flex-col items-center text-center", i > 0 && "slash-quotes-later")}
            >
              <blockquote className="max-w-[21.5rem] font-display text-2xl leading-[1.375] tracking-[-0.02em] text-balance lg:max-w-[52rem] lg:text-[3.25rem] lg:leading-[1.15]">
                <SlashHeadingText parts={q.quote} />
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-[0.9375rem] tracking-[-0.02em] lg:mt-12">
                <span className="relative size-10 shrink-0 overflow-clip rounded-full">
                  {q.avatar ?? <SlashPlaceholder tone="chip" className="absolute inset-0 rounded-full" />}
                </span>
                <span className="font-medium">{q.name}</span>
                <span className="-ml-1 text-muted-foreground">{q.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {n > 1 && (
          <div aria-hidden className="mt-7 flex justify-center gap-1.5">
            {quotes.map((q, i) => (
              <span key={q.name} style={timing(i, "dot")} className={cn("slash-quotes-dot h-1 rounded-full bg-foreground", i === 0 ? "w-6" : "w-1 opacity-40")} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
