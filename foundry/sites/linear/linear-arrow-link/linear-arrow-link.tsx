import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LinearArrowLinkProps {
  /** the label */
  children: ReactNode;
  href: string;
  className?: string;
}

/** Grey 15px text with an arrow after it; brightens on hover. */
export function LinearArrowLink({ children, href, className }: LinearArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-[0.9375rem] text-muted-foreground transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-foreground motion-reduce:transition-none",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.75} />
    </a>
  );
}
