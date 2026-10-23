import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanButtonProps {
  /** the label */
  label: ReactNode;
  /** where it links */
  href: string;
  /** primary: purple fill · secondary: lilac fill with dark text · outline: thin white ring for deep fields */
  variant?: "primary" | "secondary" | "outline";
  /** md is the section-heading button, sm sits in the hero */
  size?: "md" | "sm";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary),var(--foreground)_25%)]",
  secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklab,var(--secondary),var(--primary)_25%)]",
  outline: "border border-primary-foreground/65 bg-transparent text-secondary hover:bg-primary-foreground/10",
} as const;

export function SuperhumanButton({ label, href, variant = "primary", size = "md", className }: SuperhumanButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-semibold transition-colors duration-200 ease-in-out motion-reduce:transition-none",
        size === "md" ? "h-[3.25rem] px-5 text-base" : "h-9 px-4 text-base",
        variants[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}
