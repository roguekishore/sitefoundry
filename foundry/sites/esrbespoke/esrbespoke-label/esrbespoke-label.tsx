import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeLabelProps {
  /** the label text (written in any case; it is shown in capitals) */
  children: ReactNode;
  /** the element to render: a span by default, a p or h2 where it heads a section */
  as?: "span" | "p" | "h2" | "h3" | "div";
  /** grey instead of full ink (footer group titles) */
  quiet?: boolean;
  className?: string;
}

/** Tiny tracked capitals in the label face, set solid: the site's eyebrow, nav and note style. */
export function EsrbespokeLabel({ children, as: Tag = "span", quiet = false, className }: EsrbespokeLabelProps) {
  return (
    <Tag
      className={cn(
        "block font-mono text-[0.875rem] leading-none font-normal tracking-[0.09em] uppercase font-stretch-[88%]",
        quiet && "text-muted-foreground",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
