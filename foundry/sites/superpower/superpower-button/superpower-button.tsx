import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperpowerButtonProps {
  /** the label (an icon may come first) */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** solid: ink pill · brand: vermillion pill with a glow on hover · glass: frosted pill over photos */
  variant?: "solid" | "brand" | "glass";
  /** sm: 40px (header) · md: 46px · lg: 54px (the big membership CTA) */
  size?: "sm" | "md" | "lg";
  /** stretch to the width of its container */
  block?: boolean;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-10 px-5 text-[0.875rem]",
  md: "h-[2.875rem] px-5 text-[0.9375rem]",
  lg: "h-[3.375rem] px-8 text-[1.0625rem]",
};

const variants = {
  solid: "bg-foreground text-background hover:bg-foreground/85",
  brand:
    "bg-primary text-primary-foreground hover:bg-highlight hover:shadow-[0_0_16px_color-mix(in_oklab,var(--glow)_50%,transparent),0_0_24px_color-mix(in_oklab,var(--glow)_5%,transparent)]",
  glass: "bg-foreground/15 text-foreground backdrop-blur-md hover:bg-foreground/25",
};

export function SuperpowerButton({
  children,
  href,
  variant = "solid",
  size = "md",
  block = false,
  type = "button",
  onClick,
  className,
}: SuperpowerButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,box-shadow,transform] duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
