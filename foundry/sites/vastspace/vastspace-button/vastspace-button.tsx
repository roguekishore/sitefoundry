import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VastspaceButtonProps {
  /** the label */
  label: ReactNode;
  /** where it links; leave out to render a <button> (e.g. a form submit) */
  href?: string;
  /** dark: filled black · light: white fill, for photos · outline: thin dark outline */
  variant?: "dark" | "light" | "outline";
  /** md is 45px, lg is 56px */
  size?: "md" | "lg";
  /** button type when there is no href */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  dark: "bg-primary text-primary-foreground",
  light: "bg-popover text-popover-foreground",
  outline: "border-2 border-foreground bg-transparent text-foreground",
} as const;

export function VastspaceButton({ label, href, variant = "dark", size = "md", type = "button", className }: VastspaceButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-5 text-sm font-medium tracking-[0.01em] whitespace-nowrap transition-[filter] duration-500 ease-[cubic-bezier(0.62,0.05,0.01,0.99)] hover:brightness-90 motion-reduce:transition-none",
    size === "md" ? "h-[2.8125rem]" : "h-14 text-base",
    variants[variant],
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {label}
    </a>
  ) : (
    <button type={type} className={classes}>
      {label}
    </button>
  );
}
