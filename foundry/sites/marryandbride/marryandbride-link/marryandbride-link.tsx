import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideLinkProps {
  href: string;
  /** the link text */
  children: ReactNode;
  className?: string;
}

/** An underlined text link (1px, currentColor, set off below the text) that fades on hover. */
export function MarryandbrideLink({ href, children, className }: MarryandbrideLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "underline decoration-1 underline-offset-[0.35em] transition-opacity duration-200 ease-out hover:opacity-70 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </a>
  );
}
