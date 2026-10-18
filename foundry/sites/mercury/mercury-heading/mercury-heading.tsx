import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MercuryHeadingProps {
  /** the heading; pass a list to choose where the lines break (from sm up) */
  title: ReactNode | string[];
  /** a full-width hairline above the heading, as Mercury opens most sections */
  rule?: boolean;
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /**
   * hero: 36 → 65px · statement: 28 → 42px (centred lines) · section: 24 → 32px ·
   * sub: 21 → 24px (beside tab lists) · card: 21 → 28px
   */
  size?: "hero" | "statement" | "section" | "sub" | "card";
  align?: "start" | "center";
  className?: string;
}

const sizes = {
  hero: "text-[2.25rem] leading-[1.1] font-[500] tracking-[-0.01em] lg:text-[4.085rem] lg:tracking-[-0.015em]",
  statement: "text-[1.75rem] leading-[1.2] font-[500] lg:text-[2.625rem] lg:leading-[1.15] lg:tracking-[-0.01em]",
  section: "text-2xl leading-[1.2] font-[540] lg:text-[2rem] lg:leading-[1.15]",
  sub: "text-[1.3125rem] leading-[1.2] font-[540] lg:text-2xl",
  card: "text-[1.3125rem] leading-[1.2] font-[520] lg:text-[1.75rem]",
};

/** Mercury's heading: never bold, never tight, with a hairline above when it opens a section. */
export function MercuryHeading({ title, rule = false, as: Tag = "h2", size = "section", align = "start", className }: MercuryHeadingProps) {
  const text = Array.isArray(title)
    ? title.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br className="hidden sm:block" />}
          {i > 0 && <span className="sm:hidden"> </span>}
          {line}
        </Fragment>
      ))
    : title;
  return (
    <div className={cn(rule && "border-t border-border pt-8 lg:pt-10", className)}>
      <Tag className={cn("font-display text-pretty text-foreground", sizes[size], align === "center" && "text-center text-balance")}>{text}</Tag>
    </div>
  );
}
