import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalButtonProps {
  children: ReactNode;
  /** renders an anchor when set, or a button otherwise */
  href?: string;
  /**
   * primary: vivid orange fill with black text · contrast: solid foreground fill with background text ·
   * outline: 1px foreground border · muted: warm stone secondary fill · ghost-square: 40×40 translucent square ·
   * play: split primary button with a left play-icon compartment
   */
  variant?: "primary" | "contrast" | "outline" | "muted" | "ghost-square" | "play";
  /** button type when rendered as <button> */
  type?: "button" | "submit";
  /** accessible label for icon-only buttons */
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

const variants: Record<NonNullable<HalodentalButtonProps["variant"]>, string> = {
  primary:
    "h-10 rounded-[var(--radius)] bg-primary px-4 text-sm text-primary-foreground hover:bg-primary/85 lg:px-5 lg:text-base",
  contrast:
    "h-10 rounded-[var(--radius)] bg-foreground px-4 text-sm text-background hover:bg-primary hover:text-primary-foreground lg:px-5 lg:text-base",
  outline:
    "h-10 rounded-[var(--radius)] border border-foreground bg-transparent px-4 text-sm text-foreground hover:bg-foreground hover:text-background lg:h-[2.625rem] lg:px-5 lg:text-base",
  muted:
    "h-10 rounded-[var(--radius)] bg-secondary px-5 text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground lg:text-base",
  "ghost-square":
    "size-10 rounded-[var(--radius)] bg-foreground/10 p-0 text-sm text-foreground hover:bg-foreground/20 lg:text-base",
  play:
    "h-10 overflow-hidden rounded-[var(--radius)] bg-primary pr-4 pl-0 text-sm text-primary-foreground hover:bg-primary/90 lg:text-base",
};

/**
 * Halo Dental's action button: 40px tall, 4px radius, regular 400 weight, no shadow.
 */
export function HalodentalButton({
  children,
  href,
  variant = "primary",
  type = "button",
  ariaLabel,
  onClick,
  className,
}: HalodentalButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center font-normal whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    className,
  );

  const inner =
    variant === "play" ? (
      <>
        <span aria-hidden className="mr-3.5 grid size-10 shrink-0 place-items-center bg-primary-foreground/12">
          <Play className="size-4 fill-none stroke-current" strokeWidth={1.5} />
        </span>
        <span className="pr-1">{children}</span>
      </>
    ) : (
      children
    );

  return href ? (
    <a href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type={type} aria-label={ariaLabel} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
