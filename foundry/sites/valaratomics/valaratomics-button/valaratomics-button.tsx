import type { MouseEventHandler } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ValaratomicsButtonProps {
  /** the button text (shown uppercase in the mono face) */
  label: string;
  /** where it goes; without it a <button> is rendered */
  href?: string;
  /** frame: a see-through dark box with a 1px gold frame · solid: a filled ink box (e.g. SHOW MORE) */
  variant?: "frame" | "solid";
  /** click handler (for the <button> form) */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const variants = {
  frame: "border border-primary bg-background/50 text-foreground",
  solid: "border border-foreground bg-foreground text-background",
};

/**
 * The site's one button: a rectangular mono label, 48px tall with 40px side padding. On hover
 * it fills with the gold and the text turns to the gold's ink (0.15s, the site's ease).
 */
export function ValaratomicsButton({ label, href, variant = "frame", onClick, className }: ValaratomicsButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center px-10 font-mono text-lg leading-none whitespace-nowrap uppercase",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-primary hover:bg-primary hover:text-primary-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none",
    variants[variant],
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
