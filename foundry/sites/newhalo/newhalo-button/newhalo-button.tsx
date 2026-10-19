import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloButtonProps {
  /** the visible words; on hover they roll up and a copy rolls in from below */
  label: string;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: orange fill, black text that turns light on hover · outline: thin foreground
   * border that turns orange on hover · light: foreground fill (white on black panels) ·
   * quiet: a faint translucent square (language switch, icon buttons) · tile: a card-coloured
   * square (the arrow buttons in lists) that turns orange on hover
   */
  variant?: "primary" | "outline" | "light" | "quiet" | "tile";
  /** an icon in its own darker square at the left (the play button) */
  icon?: ReactNode;
  /** show only the icon (label becomes the screen-reader name) */
  iconOnly?: boolean;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  /** greys it out and blocks clicks (a form button before the form is filled in) */
  disabled?: boolean;
  /** stretch to the full width of its container */
  block?: boolean;
  /** called on click (buttons only) */
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:text-background",
  outline: "border border-foreground text-foreground hover:border-primary",
  light: "bg-foreground text-background",
  quiet: "bg-foreground/10 text-foreground hover:bg-foreground/20",
  tile: "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground",
};

// The original's easing: colours 0.3s cubic-bezier(0.32,0.94,0.6,1); the label roll 0.35s.
const ease = "ease-[cubic-bezier(0.32,0.94,0.6,1)]";

/** The 40px button with 4px corners, regular weight, and a label that rolls up on hover. */
export function NewhaloButton({ label, href, variant = "primary", icon, iconOnly, type = "button", disabled, block, onClick, className }: NewhaloButtonProps) {
  const classes = cn(
    "group/btn inline-flex h-10 shrink-0 items-center justify-center rounded-sm text-base leading-none whitespace-nowrap",
    "transition-[color,background-color,border-color] duration-300 motion-reduce:transition-none",
    ease,
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    iconOnly ? "w-10" : icon ? "gap-4 pr-4" : "px-[0.9375rem]",
    variants[variant],
    disabled && "pointer-events-none bg-foreground/5 text-foreground/30",
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {icon && (
        <span aria-hidden className={cn("flex size-10 items-center justify-center [&_svg]:size-4", !iconOnly && "rounded-l-sm bg-foreground/10")}>
          {icon}
        </span>
      )}
      {iconOnly ? (
        <span className="sr-only">{label}</span>
      ) : (
        <span className="relative block overflow-clip py-1">
          <span className={cn("block transition-[transform,opacity] duration-[350ms] group-hover/btn:-translate-y-full group-hover/btn:opacity-0 motion-reduce:transition-none", ease)}>{label}</span>
          <span
            aria-hidden
            className={cn("absolute inset-x-0 top-1 block translate-y-full opacity-0 transition-[transform,opacity] delay-75 duration-[350ms] group-hover/btn:translate-y-0 group-hover/btn:opacity-100 motion-reduce:transition-none", ease)}
          >
            {label}
          </span>
        </span>
      )}
    </>
  );
  return href && !disabled ? (
    <a href={href} className={classes} aria-label={iconOnly ? label : undefined}>
      {inner}
    </a>
  ) : (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
