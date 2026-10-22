import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GranolaButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /**
   * brand: the olive Download pill · ink: the ink-black pill used through the page ·
   * outline: an ink hairline pill (secondary CTA) · soft: a faint hairline pill (header)
   */
  variant?: "brand" | "ink" | "outline" | "soft";
  /** sm: 38px (header) · md: 56px with 14px text · lg: 56px with 16px text */
  size?: "sm" | "md" | "lg";
  /** an icon before the label (e.g. a lucide icon) */
  icon?: ReactNode;
  /** an icon after the label (e.g. a down arrow) */
  trailingIcon?: ReactNode;
  /** stretch to the width of its container */
  block?: boolean;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  brand: "border-transparent bg-primary text-primary-foreground hover:bg-primary/85",
  ink: "border-transparent bg-foreground text-background hover:bg-foreground/85",
  outline: "border-foreground/80 bg-transparent text-foreground hover:bg-accent",
  soft: "border-border bg-transparent text-foreground hover:bg-accent",
};

const sizes = {
  sm: "h-[2.375rem] gap-2 px-3 text-sm",
  md: "h-14 gap-2 px-6 text-sm",
  lg: "h-14 gap-2 px-6 text-base",
};

export function GranolaButton({
  children,
  href,
  variant = "ink",
  size = "md",
  icon,
  trailingIcon,
  block = false,
  type = "button",
  className,
}: GranolaButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full border font-sans font-medium whitespace-nowrap",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {icon}
      {children}
      {trailingIcon}
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
