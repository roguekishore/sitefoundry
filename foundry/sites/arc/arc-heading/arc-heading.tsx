import { cn } from "@foundry/foundry-utils";
import { ArcReveal } from "@foundry/arc-reveal";

export interface ArcHeadingProps {
  /** the heading text */
  title: string;
  /** the heading level to render (default h2) */
  as?: "h1" | "h2";
  /** left (section heads) or centre (the hero) */
  align?: "left" | "center";
  /** fades and rises in as it scrolls into view (default true) */
  reveal?: boolean;
  className?: string;
}

/** Arc's big regular-weight heading: 42px on phones, 64px on desktop, tight leading, slight negative tracking. */
export function ArcHeading({ title, as: Tag = "h2", align = "left", reveal = true, className }: ArcHeadingProps) {
  const heading = (
    <Tag
      className={cn(
        "font-display text-[2.625rem]/[1.1] font-normal tracking-[-0.015em] text-pretty lg:text-[4rem]/[1.1]",
        align === "center" ? "mx-auto text-center text-balance" : "max-w-[15ch] lg:max-w-[28ch]",
        className,
      )}
    >
      {title}
    </Tag>
  );
  return reveal ? <ArcReveal>{heading}</ArcReveal> : heading;
}
