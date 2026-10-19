import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalGeminiButtonProps {
  /** button label or icon content */
  children: ReactNode;
  /** renders an anchor when provided, otherwise a button element */
  href?: string;
  /**
   * primary: vermilion fill with ink text · solid-inverse: foreground fill with background text (e.g. white button on dark header) ·
   * outline: 1px foreground border · secondary: quiet stone/charcoal surface · icon-card: 32px white square with outward arrow
   */
  variant?: "primary" | "solid-inverse" | "outline" | "secondary" | "icon-card";
  /** sm: 38px tall · md: 42px tall · lg: 48px tall · square: 40x40px utility square */
  size?: "sm" | "md" | "lg" | "square";
  /** optional leading icon box (as on the mobile "Play the video" button) */
  leadingIcon?: ReactNode;
  /** shows a subtle outward arrow after the label */
  external?: boolean;
  /** accessible label when rendering an icon-only button */
  ariaLabel?: string;
  /** button type attribute when not a link */
  type?: "button" | "submit";
  /** disabled state */
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeClasses = {
  sm: "h-[2.375rem] px-4 text-[0.875rem] lg:text-[0.9375rem]",
  md: "h-[2.625rem] px-5 text-[0.875rem] lg:text-base",
  lg: "h-12 px-5 text-[0.9375rem] lg:text-base",
  square: "size-10 p-0 text-[0.875rem] lg:text-base",
};

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--foreground))]",
  "solid-inverse":
    "bg-foreground text-background hover:bg-foreground/90",
  outline:
    "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-55",
  "icon-card":
    "size-8! p-0! bg-card text-card-foreground border border-border/20 hover:bg-primary hover:text-primary-foreground",
};

/**
 * Halo Dental's crisp 4px-radius rectangular button. Supports solid vermilion CTAs,
 * white header buttons, 1px bordered action buttons, and split-icon video triggers.
 */
export function HalodentalGeminiButton({
  children,
  href,
  variant = "primary",
  size = "md",
  leadingIcon,
  external,
  ariaLabel,
  type = "button",
  disabled,
  onClick,
  className,
}: HalodentalGeminiButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-normal leading-none whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    leadingIcon ? "pl-1.5 pr-4" : sizeClasses[size],
    leadingIcon && "h-12 text-[0.9375rem]",
    variantClasses[variant],
    className,
  );

  const inner = leadingIcon ? (
    <>
      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-foreground/10 text-current"
      >
        {leadingIcon}
      </span>
      <span className="px-2">{children}</span>
    </>
  ) : (
    <>
      {children}
      {external && <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />}
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {inner}
    </button>
  );
}
