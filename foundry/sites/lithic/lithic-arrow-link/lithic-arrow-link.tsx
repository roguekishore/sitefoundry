import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LithicArrowLinkProps {
  children: ReactNode;
  href: string;
  /** inherit: the surrounding text colour · highlight: the bronze accent (gold on dark panels) */
  tone?: "inherit" | "highlight";
  className?: string;
}

/** "Read the docs →": medium type, an arrow after it, orange on hover. */
export function LithicArrowLink({ children, href, tone = "inherit", className }: LithicArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex w-fit items-center gap-2 font-semibold transition-colors duration-200 ease-out hover:text-primary motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        tone === "highlight" && "text-highlight",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 shrink-0" strokeWidth={2} />
    </a>
  );
}
