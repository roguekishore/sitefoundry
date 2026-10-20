import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HhhusherV2ButtonProps {
  children?: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: yellow, empties to a yellow outline on hover · glass: cream at 15% (for dark
   * backdrops), outlined on hover · soft: cream at 20%, a little brighter on hover (the play
   * button) · outline: 2px foreground border · link: bare caps text with an arrow, dims on hover
   */
  variant?: "primary" | "glass" | "soft" | "outline" | "link";
  /** md: 43px tall (the original's buy buttons) · sm: 36px · icon: a 43px square */
  size?: "sm" | "md" | "icon";
  /** for the link variant: the arrow after the label (default on) */
  arrow?: boolean;
  /** stretch to the container's width */
  block?: boolean;
  /** for an icon-only button: what a screen reader says */
  label?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

// The site's one easing for every hover, 0.3s.
export const hhhusherV2Ease = "duration-300 ease-[cubic-bezier(0.32,0.94,0.6,1)] motion-reduce:transition-none";

const sizes = {
  sm: "h-9 px-4",
  md: "h-[2.6875rem] px-5",
  icon: "size-[2.6875rem]",
};

const variants = {
  primary: "border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
  glass: "border-2 border-transparent bg-foreground/15 text-foreground hover:border-foreground hover:bg-transparent",
  soft: "border-2 border-transparent bg-foreground/20 text-primary hover:bg-foreground/40",
  outline: "border-2 border-foreground/80 text-foreground hover:bg-foreground hover:text-background",
};

/** Buttons and the "discover more →" link, in the site's bold monospaced caps. */
export function HhhusherV2Button({ children, href, variant = "primary", size = "md", arrow = true, block, label, type = "button", onClick, className }: HhhusherV2ButtonProps) {
  const isLink = variant === "link";
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-1.5 font-mono text-[0.75rem] leading-none font-bold tracking-normal whitespace-nowrap uppercase transition-[background-color,color,border-color,opacity]",
    hhhusherV2Ease,
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    isLink ? "h-auto px-0 text-current hover:opacity-70" : cn("rounded-lg", sizes[size], variants[variant]),
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {isLink && arrow && (
        <svg aria-hidden viewBox="0 0 10 10" className="size-[0.6rem] shrink-0 fill-none stroke-current stroke-[1.6]">
          <path d="M1 5h7.5M5.5 2 8.5 5l-3 3" />
        </svg>
      )}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick} aria-label={label}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick} aria-label={label}>
      {inner}
    </button>
  );
}
