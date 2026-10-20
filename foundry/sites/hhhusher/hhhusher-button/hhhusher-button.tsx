import type { MouseEventHandler, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HhhusherButtonProps {
  /** the label, set in the mono face in capitals */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * solid: yellow fill that empties to a yellow outline on hover · glass: a see-through tile
   * (cream at 15% on dark) that turns into an outline on hover · link: a bare label with an
   * arrow that dims on hover
   */
  variant?: "solid" | "glass" | "link";
  /** sm: the 32px header size · md: the 43px size used in sections · lg: the 56px checkout size */
  size?: "sm" | "md" | "lg";
  /** add the small arrow after the label (link variant shows it by default) */
  arrow?: boolean;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  /** called on click */
  onClick?: MouseEventHandler<HTMLElement>;
  /** screen-reader name, for icon-only buttons */
  ariaLabel?: string;
  className?: string;
}

// The original's easing for every colour change: 0.3s cubic-bezier(0.32, 0.94, 0.6, 1).
export const hhhusherEase = "ease-[cubic-bezier(0.32,0.94,0.6,1)]";

/** The mono label used on every button, tab and tag: 12px bold capitals. */
export const hhhusherLabel = "font-mono text-[0.78rem] leading-none font-bold tracking-normal uppercase lg:text-xs";

const variants = {
  solid: "border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
  glass: "border-2 border-transparent bg-foreground/15 text-foreground hover:border-foreground hover:bg-transparent",
  link: "text-current hover:opacity-70",
};

const sizes = {
  sm: "h-8 px-[1.3rem]",
  md: "h-[2.6875rem] px-5",
  lg: "h-14 px-6",
};

/** A 5px-cornered button with a mono capital label: yellow, glass, or a bare arrow link. */
export function HhhusherButton({ children, href, variant = "solid", size = "md", arrow, type = "button", onClick, ariaLabel, className }: HhhusherButtonProps) {
  const classes = cn(
    hhhusherLabel,
    "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg whitespace-nowrap",
    "transition-[color,background-color,border-color,opacity] duration-300 motion-reduce:transition-none",
    hhhusherEase,
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    variant === "link" ? "h-auto px-0" : sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {(arrow ?? variant === "link") && <ArrowRight aria-hidden className="size-3" strokeWidth={3} />}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
