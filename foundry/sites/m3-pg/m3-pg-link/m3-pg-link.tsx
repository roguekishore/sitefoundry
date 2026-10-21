import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface M3PgLinkProps {
  /** where it goes */
  href: string;
  /** the label */
  children: ReactNode;
  /** "read": underlined, the underline goes on hover; "nav": plain, underlined on hover */
  variant?: "read" | "nav";
  className?: string;
}

export function M3PgLink({ href, children, variant = "read", className }: M3PgLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "underline-offset-[0.18em] transition-all duration-300 ease-[ease] motion-reduce:transition-none",
        variant === "read"
          ? "font-semibold text-highlight underline decoration-1 hover:no-underline"
          : "no-underline hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
