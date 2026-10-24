import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HadrianButtonProps {
  /** the button's text (shown uppercase) */
  label: string;
  /** where it goes; without it the component renders a <button> */
  href?: string;
  /** a small trailing icon, e.g. a thin arrow */
  icon?: ReactNode;
  /** outline: 1px border on the page colour · solid: a gold block with dark text */
  variant?: "outline" | "solid";
  /** sm: the header's MENU box · md: a compact call to action · lg: full-width hero buttons */
  size?: "sm" | "md" | "lg";
  /** click handler (buttons only) */
  onClick?: () => void;
  /** for menu toggles: whether what it controls is open */
  expanded?: boolean;
  /** for menu toggles: the id of what it opens */
  controls?: string;
  className?: string;
}

const variants = {
  outline: "border border-foreground bg-background text-foreground hover:bg-foreground/5",
  solid: "bg-primary text-primary-foreground hover:bg-primary/85",
};

const sizes = {
  sm: "h-[1.875rem] min-w-[6.125rem] px-3 text-sm lg:h-8 lg:text-base",
  md: "h-[2.125rem] px-3.5 text-sm lg:h-11 lg:px-[1.125rem] lg:text-base",
  lg: "h-10 w-full px-4 text-sm lg:h-[3.3125rem] lg:text-base",
};

/** Square mono button used across the Hadrian blocks. */
export function HadrianButton({
  label,
  href,
  icon,
  variant = "outline",
  size = "md",
  onClick,
  expanded,
  controls,
  className,
}: HadrianButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-3 font-mono leading-none whitespace-nowrap uppercase transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-4 lg:[&_svg]:size-[1.125rem]",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span>{label}</span>
      {icon && <span aria-hidden className="flex">{icon}</span>}
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
    <button type="button" onClick={onClick} aria-expanded={expanded} aria-controls={controls} className={classes}>
      {inner}
    </button>
  );
}
