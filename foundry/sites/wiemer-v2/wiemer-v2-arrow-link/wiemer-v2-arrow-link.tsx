import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2ArrowLinkProps {
  /** the link text */
  children: ReactNode;
  /** where it goes */
  href: string;
  /** ink (default) or inverse: light text and ring, for use over a photo */
  tone?: "ink" | "inverse";
  className?: string;
}

/**
 * A plain text link followed by a small outlined circle with an arrow. On hover the circle
 * fills and the arrow turns a quarter down and grows a little (0.3s, a soft ease-out).
 */
export function WiemerV2ArrowLink({ children, href, tone = "ink", className }: WiemerV2ArrowLinkProps) {
  return (
    <a href={href} className={cn("group inline-flex items-center gap-2 text-[0.9375rem] leading-none font-medium", tone === "inverse" ? "text-background" : "text-foreground", className)}>
      <span>{children}</span>
      <span
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full border transition-colors duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] motion-reduce:transition-none",
          tone === "inverse" ? "border-background group-hover:bg-background group-hover:text-foreground" : "border-foreground group-hover:bg-foreground group-hover:text-background",
        )}
      >
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] group-hover:scale-110 group-hover:rotate-90 motion-reduce:transition-none"
        />
      </span>
    </a>
  );
}
