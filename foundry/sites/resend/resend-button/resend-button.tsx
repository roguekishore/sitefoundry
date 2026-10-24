import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ResendButtonProps {
  /** the label */
  children: ReactNode;
  href: string;
  /** primary: graphite, glowing white on hover · ghost: grey text that brightens · pill: small rounded chip */
  variant?: "primary" | "ghost" | "pill";
  /** sm: 38px (header) · md: 48px (sections) */
  size?: "sm" | "md";
  /** a small chevron after the label that nudges right on hover */
  chevron?: boolean;
  className?: string;
}

const variants = {
  primary:
    "border border-foreground/10 bg-linear-to-b from-secondary to-background text-foreground shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)] hover:border-transparent hover:bg-none hover:bg-primary/90 hover:text-primary-foreground hover:shadow-[0_0_4px_color-mix(in_oklab,var(--glow)_6%,transparent),0_1px_14px_color-mix(in_oklab,var(--glow)_12%,transparent),0_3px_32px_color-mix(in_oklab,var(--glow)_18%,transparent)]",
  ghost: "text-muted-foreground hover:text-foreground",
  pill: "rounded-full bg-accent text-foreground hover:bg-foreground/15",
};

const sizes = {
  sm: "h-[2.375rem] px-4 text-sm",
  md: "h-12 px-[1.375rem] text-base",
};

export function ResendButton({ children, href, variant = "primary", size = "md", chevron = false, className }: ResendButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/button inline-flex items-center justify-center gap-2 rounded-sm font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
        sizes[size],
        variant === "pill" && "h-9 px-3.5 text-sm",
        variants[variant],
        className,
      )}
    >
      {children}
      {chevron && (
        <ChevronRight
          aria-hidden
          className="-mr-1 size-4 opacity-50 transition-transform duration-200 group-hover/button:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={2}
        />
      )}
    </a>
  );
}
