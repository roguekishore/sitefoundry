import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./vastspace-statement.css";

export interface VastspaceStatementProps {
  /** the statement; its words turn from dim to white as the band scrolls in */
  text: string;
  className?: string;
}

const corner = "absolute size-4 before:absolute before:top-1/2 before:h-px before:w-full before:bg-current after:absolute after:left-1/2 after:h-full after:w-px after:bg-current";

export function VastspaceStatement({ text, className }: VastspaceStatementProps) {
  const words = text.split(" ");
  return (
    <section className={cn("vastspace-statement relative bg-muted px-gutter min-h-[31.8rem] pt-[7.6rem] pb-40 text-highlight-foreground md:min-h-[45rem] md:pt-60 md:pb-[17.5rem]", className)}>
      <span aria-hidden className={cn(corner, "top-4 left-4 md:top-10 md:left-10")} />
      <span aria-hidden className={cn(corner, "top-4 right-4 md:top-10 md:right-10")} />
      <span aria-hidden className={cn(corner, "bottom-4 left-4 md:bottom-10 md:left-10")} />
      <span aria-hidden className={cn(corner, "right-4 bottom-4 md:right-10 md:bottom-10")} />
      <p className="max-w-[17.2em] font-display text-[2rem]/[1.02] font-[560] tracking-[-0.01em] md:ml-10 md:text-5xl/[1.04]">
        {words.map((w, i) => (
          <span key={i}>
            <span className="vastspace-statement-word" style={{ "--i": i } as CSSProperties}>
              {w}
            </span>{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
