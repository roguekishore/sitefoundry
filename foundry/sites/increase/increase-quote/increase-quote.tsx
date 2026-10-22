import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface IncreaseQuoteProps {
  /** the quote, without quotation marks (they are added, the opening one hanging in the margin) */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** a 32px square mark beside the name: a logo or an icon on a tile */
  mark?: ReactNode;
  /** lg: 18px grey text (beside a lead statement) · sm: 15px text in the main colour (in a row) */
  size?: "lg" | "sm";
  className?: string;
}

const quoteSizes = {
  lg: "text-base leading-[1.875rem] text-muted-foreground sm:text-lg",
  sm: "text-[0.9375rem] leading-6 text-foreground/85",
};

/** A quiet pull-quote: hanging opening quote, then a tiny logo tile with name and role. */
export function IncreaseQuote({ quote, name, role, mark, size = "lg", className }: IncreaseQuoteProps) {
  return (
    <figure className={cn("max-w-[34rem]", className)}>
      <blockquote className={cn("-indent-2 text-pretty", quoteSizes[size])}>
        {/* foundry-allow-text: typographic quotation marks around the quote prop */}
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-2.5">
        {mark && (
          <span className="grid size-8 shrink-0 place-items-center overflow-clip rounded-md [&_svg]:size-4">{mark}</span>
        )}
        <span className="flex flex-col">
          <span className="text-[0.8125rem] leading-[1.125rem] text-foreground">{name}</span>
          <span className="text-[0.6875rem] leading-4 text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
