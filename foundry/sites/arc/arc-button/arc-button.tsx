import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ArcButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: primary fill with a trailing chevron · outline: 2px hairline outline that fills with the primary colour on hover */
  variant?: "solid" | "outline";
  /** sm: 44px (header) · md: 56px (hero and closing band) · full: 36px, stretches to its box (newsletter form) */
  size?: "sm" | "md" | "full";
  /** shows the small chevron after the label (solid buttons show it by default) */
  chevron?: boolean;
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-11 px-[1.25rem] text-[0.875rem]",
  md: "h-14 px-8 text-base",
  full: "h-9 w-full px-4 text-[0.875rem]",
};

/** Arc's square-cornered button: 4px corners, medium weight, colours ease over 0.2s on hover. */
export function ArcButton({ children, href, variant = "solid", size = "md", chevron, type = "button", className }: ArcButtonProps) {
  const showChevron = chevron ?? (variant === "solid" && size !== "full");
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 font-medium whitespace-nowrap",
    "transition-colors duration-200 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variant === "solid"
      ? "border-primary bg-primary text-primary-foreground hover:border-primary/90 hover:bg-primary/90"
      : "border-foreground/15 bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
    sizes[size],
    className,
  );
  const inner = (
    <>
      {children}
      {showChevron && <ChevronRight aria-hidden className="-mr-1 size-4" strokeWidth={2} />}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
