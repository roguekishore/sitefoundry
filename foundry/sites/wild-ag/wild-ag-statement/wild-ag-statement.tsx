import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgMedia } from "@foundry/wild-ag-media";
import { WildAgTicker } from "@foundry/wild-ag-ticker";

export interface WildAgStatementPart {
  /** words of the line */
  text: string;
  /** set in the light serif italic instead of the sans */
  serif?: boolean;
}

export interface WildAgStatementProps {
  /** the line that runs as a ticker, in parts that switch between sans and serif italic */
  line: WildAgStatementPart[];
  /** the mark between repeats of the line */
  separator?: string;
  /** footage seen through the window; fixed to the window. Empty: a placeholder */
  media?: ReactNode;
  /** seconds for the line to pass once */
  duration?: number;
  className?: string;
}

export function WildAgStatement({ line, separator = "—", media, duration = 30, className }: WildAgStatementProps) {
  const text = line.map((p) => p.text).join(" ");
  return (
    <section
      className={cn(
        "relative z-10 flex h-svh flex-col overflow-clip rounded-b-[calc(var(--radius)*3.4)] bg-linear-15 from-primary to-highlight text-primary-foreground lg:rounded-b-[calc(var(--radius)*4.5)]",
        className,
      )}
    >
      <WildAgMedia media={media} tone="soft" fixed roundBottom className="min-h-0 w-full flex-1" />
      <h2 className="sr-only">{text}</h2>
      <WildAgTicker duration={duration} gap="0.3em" className="py-[3.3rem] text-[6.125rem] leading-none tracking-[-0.01em] uppercase lg:py-[3.6rem] lg:text-[7.9rem]">
        <span aria-hidden className="flex shrink-0 gap-[0.3em] whitespace-nowrap">
          {line.map((p, i) => (
            <span key={i} className={p.serif ? "font-display font-light italic" : "font-light"}>
              {p.text}
            </span>
          ))}
          <span className="font-extralight">{separator}</span>
        </span>
      </WildAgTicker>
    </section>
  );
}
