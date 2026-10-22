import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MeowHeadingProps {
  /** the title */
  title: ReactNode;
  /** small print right under the title (a disclaimer, a footnote) */
  fineprint?: ReactNode;
  /** the heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Meow's section title: 500 weight, −0.8px tracking at desktop size. */
export function MeowHeading({ title, fineprint, as: Tag = "h2", className }: MeowHeadingProps) {
  return (
    <div className={className}>
      <Tag className="font-display text-2xl/8 font-semibold tracking-[-0.015em] text-foreground lg:text-[2rem]/10 lg:tracking-[-0.025em]">
        {title}
      </Tag>
      {fineprint && <p className="mt-2 text-[0.8125rem]/[1.125rem] text-foreground lg:mt-1">{fineprint}</p>}
    </div>
  );
}
