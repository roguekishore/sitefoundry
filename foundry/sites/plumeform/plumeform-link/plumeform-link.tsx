import type { ReactNode } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformLinkProps {
  /** the label */
  children: ReactNode;
  href: string;
  /** shows a thin arrow, underlined on its own */
  arrow?: boolean;
  className?: string;
}

/** A semibold text link with a 2px teal underline (the arrow gets its own short underline). */
export function PlumeformLink({ children, href, arrow = true, className }: PlumeformLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-end gap-1.5 text-[0.9375rem] font-bold text-foreground transition-colors duration-200 hover:text-highlight motion-reduce:transition-none",
        className,
      )}
    >
      <span className="border-b-2 border-highlight pb-0.5">{children}</span>
      {arrow && (
        <span aria-hidden className="border-b-2 border-highlight pb-0.5">
          <MoveRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={1.75} />
        </span>
      )}
    </a>
  );
}
