import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./increase-quote-card.css";

export interface IncreaseQuoteCardProps {
  /** the quote (shown as is, no quotation marks) */
  quote: string;
  /** who said it, set in mono under the quote */
  attribution: string;
  /** a short mono line in the bottom corner (what the customer does with you) */
  note?: string;
  /** the 48px logo tile at the top */
  mark?: ReactNode;
  /** a link to the full story: shows a small arrow button in the top corner */
  href?: string;
  /** label of that arrow button, for screen readers */
  linkLabel?: string;
  /** the wash deepening into the bottom-right corner: highlight (lime) or glow (blue) */
  tone?: "highlight" | "glow";
  className?: string;
}

/** A wide customer card: logo tile, a medium 18px quote, mono attribution, mono note bottom right. */
export function IncreaseQuoteCard({
  quote,
  attribution,
  note,
  mark,
  href,
  linkLabel = "Read the story",
  tone = "highlight",
  className,
}: IncreaseQuoteCardProps) {
  return (
    <figure
      className={cn(
        "relative flex flex-col rounded-2xl border border-border p-6 text-foreground sm:p-8",
        tone === "highlight" ? "increase-quote-card-highlight border-highlight/30" : "increase-quote-card-glow",
        className,
      )}
    >
      {mark && <div className="grid size-12 place-items-center overflow-clip rounded-lg [&_svg]:size-6">{mark}</div>}
      {href && (
        <a
          href={href}
          aria-label={linkLabel}
          className="absolute top-6 right-6 grid size-8 place-items-center rounded-md border border-input bg-card text-foreground transition-colors duration-150 hover:border-foreground/30 hover:bg-muted motion-reduce:transition-none sm:top-8 sm:right-8"
        >
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </a>
      )}
      <blockquote className="mt-8 max-w-[46rem] text-lg leading-[1.875rem] font-medium text-pretty sm:mt-10">
        <p>{quote}</p>
      </blockquote>
      <div className="mt-6 flex flex-col gap-10 font-mono sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <figcaption className="text-base leading-6 text-foreground/80">{attribution}</figcaption>
        {note && <p className="max-w-[16rem] text-sm leading-5 text-foreground/90 sm:text-right">{note}</p>}
      </div>
    </figure>
  );
}
