import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface StripeFrameProps {
  children: ReactNode;
  /** draw the faint vertical guide lines at the column's edges (from 640px up) */
  rails?: boolean;
  /** a hairline across the column at its top: solid, dashed or none */
  rule?: "solid" | "dashed" | "none";
  /** html element for the outer wrapper */
  as?: "section" | "div" | "footer";
  /** id for in-page links */
  id?: string;
  /** classes for the full-width outer band (background, the dark class…) */
  className?: string;
  /** pad the column with the page gutter; turn off when rows inside need to run edge to edge */
  padded?: boolean;
  /** classes for the framed column (vertical padding…) */
  innerClassName?: string;
}

/**
 * The page column with Stripe's drawn edges: content sits inside a centred column whose left
 * and right sides are faint vertical hairlines, so stacked sections read as one framed sheet.
 */
export function StripeFrame({ children, rails = true, rule = "none", as: Tag = "section", id, padded = true, className, innerClassName }: StripeFrameProps) {
  return (
    <Tag id={id} className={cn("relative bg-background font-sans text-foreground", className)}>
      <div
        className={cn(
          "relative mx-auto max-w-page",
          padded && "px-gutter",
          rails && "sm:border-x sm:border-border",
          rule === "solid" && "border-t border-border",
          rule === "dashed" && "border-t border-dashed border-border",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
