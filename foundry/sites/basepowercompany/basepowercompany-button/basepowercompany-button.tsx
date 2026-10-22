import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /**
   * lime: the filled lime CTA with forest text · outline: a forest hairline button on light
   * bands · ghost: a light hairline button for photo bands (follows the foreground colour)
   */
  variant?: "lime" | "outline" | "ghost";
  /** sm: 44px (header) · md: 50px (sections) */
  size?: "sm" | "md";
  /** an icon after the label (e.g. a chevron or arrow); it nudges right on hover */
  trailingIcon?: ReactNode;
  /** stretch to the width of its container (used on phones) */
  block?: boolean;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  lime: "border-transparent bg-accent text-accent-foreground hover:bg-accent/70",
  outline:
    "border-primary bg-transparent text-primary hover:border-[color-mix(in_oklab,var(--primary)_65%,var(--foreground))] hover:text-[color-mix(in_oklab,var(--primary)_65%,var(--foreground))]",
  ghost:
    "border-foreground bg-transparent text-foreground hover:border-[color-mix(in_oklab,var(--accent)_55%,var(--foreground))] hover:text-[color-mix(in_oklab,var(--accent)_55%,var(--foreground))]",
};

const sizes = {
  sm: "h-11 gap-1.5 px-3 text-[0.9375rem]",
  md: "h-[3.125rem] gap-2 px-4 text-base",
};

export function BasepowercompanyButton({
  children,
  href,
  variant = "lime",
  size = "md",
  trailingIcon,
  block = false,
  type = "button",
  className,
}: BasepowercompanyButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-center rounded-lg border font-sans font-bold tracking-[-0.005em] whitespace-nowrap",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "[&_svg]:size-5 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {trailingIcon && (
        <span className="inline-flex transition-transform duration-200 group-hover/btn:translate-x-0.5 motion-reduce:transition-none">
          {trailingIcon}
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
