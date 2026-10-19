import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalOpusButtonProps {
  /** the label; leave empty for an icon-only square (give it an `ariaLabel`) */
  children?: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: orange fill with ink text · light: solid foreground fill (white on a black
   * panel) · outline: 1px foreground border, no fill · tile: a quiet see-through square
   * (menu, language, accessibility) · card: a small card-coloured square (arrow links)
   */
  variant?: "primary" | "light" | "outline" | "tile" | "card";
  /** an icon in a slightly darker square at the start, as on the "play" button */
  lead?: ReactNode;
  /** screen-reader label, needed when there's no visible text */
  ariaLabel?: string;
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--primary-foreground))]",
  light: "bg-foreground text-background hover:bg-foreground/85",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
  tile: "bg-foreground/10 text-foreground hover:bg-foreground/20",
  card: "bg-card text-card-foreground/60 hover:text-card-foreground",
};

/**
 * Halo Dental's button: 40px tall, 4px corners, regular-weight 16px label, no shadow.
 * Hover only shifts the colour. Icon-only buttons become 40px squares.
 */
export function HalodentalOpusButton({ children, href, variant = "primary", lead, ariaLabel, type = "button", className }: HalodentalOpusButtonProps) {
  const square = children == null || children === "";
  const classes = cn(
    "inline-flex h-10 shrink-0 items-center justify-center rounded-sm text-base leading-none whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    square ? "w-10" : lead ? "pr-[0.9375rem]" : "px-[0.9375rem]",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {lead && (
        <span aria-hidden className="mr-[1.125rem] flex h-full w-9 items-center justify-center rounded-l-sm bg-primary-foreground/10">
          {lead}
        </span>
      )}
      {children}
    </>
  );
  return href ? (
    <a href={href} aria-label={ariaLabel} className={classes}>
      {inner}
    </a>
  ) : (
    <button type={type} aria-label={ariaLabel} className={classes}>
      {inner}
    </button>
  );
}
