import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsLinkProps {
  children: ReactNode;
  /** where it goes */
  href: string;
  /** md: 16px (section links) · sm: 14px (inside panels and cards) */
  size?: "sm" | "md";
  /** green: the brand green · ink: the text colour (plan-card footers) */
  tone?: "green" | "ink";
  className?: string;
}

/** Green semibold link with an arrow that nudges right on hover. */
export function LevelsLink({ children, href, size = "md", tone = "green", className }: LevelsLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2 font-semibold tracking-[0.01em]",
        "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
        size === "md" ? "text-base" : "text-sm",
        tone === "green"
          ? "text-highlight hover:text-[color-mix(in_oklab,var(--highlight),var(--foreground)_25%)]"
          : "text-current hover:opacity-80",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/link:translate-x-1 motion-reduce:transition-none"
        strokeWidth={2}
      />
    </a>
  );
}
