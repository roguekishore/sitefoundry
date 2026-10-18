import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface StripeHeadingProps {
  /** the dark lead sentence */
  lead: ReactNode;
  /** the softer sentence that follows the lead on the same line; leave out for a one-tone heading */
  rest?: ReactNode;
  /** put the rest on its own line instead of running on after the lead */
  stacked?: boolean;
  /** heading level */
  as?: "h1" | "h2" | "h3" | "h4";
  /**
   * hero: 34 → 48px · display: 34 → 56px (centred statements) · section: 22 → 32px ·
   * sub: 20 → 26px · card: 18 → 22px
   */
  size?: "hero" | "display" | "section" | "sub" | "card";
  align?: "start" | "center";
  className?: string;
}

const sizes = {
  hero: "text-[2.125rem] leading-[1.03] tracking-[-0.01em] lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.02em]",
  display: "text-[2.125rem] leading-[1.03] tracking-[-0.02em] lg:text-[3.5rem] lg:tracking-[-0.025em]",
  section: "text-[1.375rem] leading-[1.2] tracking-[-0.01em] lg:text-[2rem] lg:leading-[1.1] lg:tracking-[-0.02em]",
  sub: "text-xl leading-[1.2] tracking-[-0.01em] lg:text-[1.625rem] lg:leading-[1.12]",
  card: "text-lg leading-[1.25] lg:text-[1.375rem] lg:leading-[1.1] lg:tracking-[-0.01em]",
};

/** Stripe's two-tone heading: a dark lead sentence with a softer one running on after it. */
export function StripeHeading({ lead, rest, stacked = false, as: Tag = "h2", size = "section", align = "start", className }: StripeHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-light text-pretty text-foreground",
        sizes[size],
        align === "center" && "text-center text-balance",
        className,
      )}
    >
      {lead}
      {rest && (
        <>
          {stacked ? <br /> : " "}
          <span className="text-muted-foreground">{rest}</span>
        </>
      )}
    </Tag>
  );
}
