import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface MeowButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: orange fill that dims a little on hover · invert: orange fill that turns ink on
   * hover · outline: hairline box that fills with the card colour · accent: the blue fill ·
   * ghost: no box until hovered · link: bare text with an arrow, fades on hover
   */
  variant?: "primary" | "invert" | "outline" | "accent" | "ghost" | "link";
  /** sm: 40px tall (header) · md: 42px tall (sections) · lg: 48px tall (inside the email form) */
  size?: "sm" | "md" | "lg";
  /** a small icon before the label */
  icon?: ReactNode;
  /** a small arrow after the label */
  arrow?: boolean;
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-10 gap-2 px-4 text-sm",
  md: "h-[2.625rem] gap-2.5 px-5 text-sm",
  lg: "h-12 gap-2 px-[1.125rem] text-base font-normal",
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90 duration-100",
  invert: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
  outline: "border border-border bg-transparent text-foreground hover:bg-card",
  accent: "bg-highlight text-highlight-foreground hover:bg-highlight/90 duration-200",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  link: "h-auto! px-0! bg-transparent text-foreground hover:opacity-80 duration-200",
};

/** Meow's button: 4px corners, medium weight, a flat colour change on hover. */
export function MeowButton({ children, href, variant = "primary", size = "md", icon, arrow, type = "button", className }: MeowButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-lg font-semibold tracking-[-0.005em] whitespace-nowrap",
    "transition-[color,background-color,border-color,opacity] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {icon && <span aria-hidden className="flex [&_svg]:size-4">{icon}</span>}
      {children}
      {arrow && <ArrowRight aria-hidden className={variant === "link" || size === "md" ? "size-4" : "size-3"} strokeWidth={2} />}
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
