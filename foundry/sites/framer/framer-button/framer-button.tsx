import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FramerButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: solid white (theme primary) · secondary: quiet dark-grey surface */
  variant?: "primary" | "secondary";
  /** sm: 30px header button · md: 28px on phones, 34px on desktop */
  size?: "sm" | "md";
  /** small icon after the label (e.g. a download arrow) */
  icon?: ReactNode;
  className?: string;
}

const sizes = {
  sm: "h-7 gap-1.5 px-2.5 text-sm lg:h-[1.875rem]",
  md: "h-7 gap-2 px-3 text-[0.8125rem] lg:h-[2.125rem] lg:px-3.5 lg:text-sm",
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
};

/** The site's compact 8px-corner button. */
export function FramerButton({ children, href, variant = "primary", size = "md", icon, className }: FramerButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-lg font-medium tracking-[-0.01em] whitespace-nowrap",
    "transition-colors duration-150 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {icon && <span className="flex size-4 items-center justify-center [&_svg]:size-4">{icon}</span>}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}
