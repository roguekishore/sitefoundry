import { createElement } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RampHeadingProps {
  /** the first clause, in full ink */
  lead: string;
  /** the rest of the sentence, in hushed grey (optional) */
  rest?: string;
  /** put the hushed part on its own line instead of running on */
  breakBeforeRest?: boolean;
  /**
   * display: 40→64px (hero) · section: 34→48px · row: 22→28px · card: 20→24px · sm: 18→20px
   */
  size?: "display" | "section" | "row" | "card" | "sm";
  /** the heading level */
  as?: "h1" | "h2" | "h3" | "p";
  align?: "left" | "center";
  className?: string;
}

const sizes = {
  display: "text-[2.5rem]/[1.05] tracking-[-0.015em] lg:text-[4rem]/[1.02]",
  section: "text-[2.125rem]/[1.12] tracking-[-0.01em] lg:text-[3rem]/[1.05]",
  row: "text-[1.375rem]/[1.18] lg:text-[1.75rem]/[1.15]",
  card: "text-[1.25rem]/[1.2] lg:text-[1.5rem]/[1.17]",
  sm: "text-lg/6 lg:text-xl/6",
};

/** Ramp's headline voice: the point in ink, the explanation in grey, one weight throughout. */
export function RampHeading({ lead, rest, breakBeforeRest, size = "section", as = "h2", align = "left", className }: RampHeadingProps) {
  return createElement(
    as,
    {
      className: cn("font-display font-normal text-balance text-foreground", sizes[size], align === "center" && "text-center", className),
    },
    lead,
    rest && (breakBeforeRest ? <br /> : " "),
    rest && <span className="text-muted-foreground">{rest}</span>,
  );
}
