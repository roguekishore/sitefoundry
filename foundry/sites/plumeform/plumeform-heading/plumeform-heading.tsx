import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformHeadingProps {
  /** small tracked capitals above the title */
  eyebrow?: ReactNode;
  /** the heading itself (may hold inline badges) */
  title: ReactNode;
  /** text under the title: a string or your own paragraphs */
  children?: ReactNode;
  /** heading level */
  as?: "h1" | "h2";
  /** display: 60→72px (the hero) · page: 48→60px (a page title) · section: 36→48px */
  size?: "display" | "page" | "section";
  align?: "start" | "center";
  /** each part rises in as it scrolls into view */
  reveal?: boolean;
  className?: string;
}

const titleSizes = {
  display: "text-[3.75rem] leading-[1.05] font-extrabold tracking-[-0.03em] lg:text-[4.5rem]",
  page: "text-[3rem] leading-[1.05] font-extrabold tracking-[-0.03em] lg:text-[3.75rem]",
  section: "text-[2.25rem] leading-[1.06] font-bold tracking-[-0.025em] lg:text-[3rem]",
};

/** Plumeform's section heading: eyebrow, tight bold title, slate body. */
export function PlumeformHeading({ eyebrow, title, children, as: Tag = "h2", size = "section", align = "start", reveal = true, className }: PlumeformHeadingProps) {
  const Wrap = reveal ? PlumeformReveal : "div";
  return (
    <Wrap className={cn("max-w-xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-5 text-[0.72rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase lg:mb-6">{eyebrow}</p>}
      <Tag className={cn("font-display text-balance text-foreground", titleSizes[size])}>{title}</Tag>
      {children && (
        <div className="mt-6 space-y-4 text-base leading-[1.625] text-muted-foreground lg:mt-7 [&_strong]:font-semibold [&_strong]:text-foreground">
          {typeof children === "string" ? <p>{children}</p> : children}
        </div>
      )}
    </Wrap>
  );
}
