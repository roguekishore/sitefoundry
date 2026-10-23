import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: forest fill · secondary: sage fill · outline: 2px forest ring · highlight: ochre fill */
  variant?: "primary" | "secondary" | "outline" | "highlight";
  /** xs: 38px (announcement bar) · sm: 50px (nav, cards) · md: 56px · lg: 60px (sections) */
  size?: "xs" | "sm" | "md" | "lg";
  /** a small arrow after the label that nudges right on hover */
  arrow?: boolean;
  /** stretch to the full width: always, or only on phones (below lg) */
  block?: boolean | "phone";
  /** button type when it renders a button */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/88",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/88",
  outline: "border-2 border-primary text-primary hover:bg-primary/6",
  highlight: "bg-highlight text-highlight-foreground hover:bg-highlight/88",
};

const sizes = {
  xs: "h-[2.375rem] px-6 text-sm",
  sm: "h-[3.125rem] px-6 text-sm lg:text-[0.9375rem]",
  md: "h-14 px-8 text-base",
  lg: "h-15 px-[2.125rem] text-base",
};

/** The site's pill: medium label, colour changes over 150ms, arrow nudges right on hover. */
export function ParsleyhealthButton({
  children,
  href,
  variant = "primary",
  size = "lg",
  arrow,
  block,
  type = "button",
  className,
}: ParsleyhealthButtonProps) {
  const classes = cn(
    "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-sans font-medium whitespace-nowrap",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    block === true && "w-full",
    block === "phone" && "max-lg:w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/button:translate-x-1 motion-reduce:transition-none"
          strokeWidth={1.75}
        />
      ) : null}
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
