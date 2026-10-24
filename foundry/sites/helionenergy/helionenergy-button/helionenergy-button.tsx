import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./helionenergy-button.css";

export interface HelionenergyButtonProps {
  /** the button text */
  children: ReactNode;
  /** where it goes */
  href: string;
  /** draw the outline in from the middle and lift the label as the button scrolls into view */
  reveal?: boolean;
  className?: string;
}

/**
 * A 48px outlined rectangle with a 13px label, 4px corners. On hover a faint wash fills it and
 * the label rolls up while a copy rolls in from below (0.4s). With `reveal`, the outline opens
 * from the middle and the label rises 20px as it scrolls into view.
 */
export function HelionenergyButton({ children, href, reveal = false, className }: HelionenergyButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center px-[1.875rem] text-[0.8125rem]/none tracking-[-0.01em]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-sm border border-current/80 transition-colors duration-200 ease-out group-hover:bg-foreground/8 motion-reduce:transition-none",
          reveal && "helionenergy-button-frame",
        )}
      />
      <span className={cn("relative block overflow-clip py-0.5", reveal && "helionenergy-button-label")}>
        <span className="block transition-transform duration-[400ms] ease-[cubic-bezier(.6,0,.2,1)] group-hover:-translate-y-full motion-reduce:transition-none">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 block translate-y-full py-0.5 transition-transform duration-[400ms] ease-[cubic-bezier(.6,0,.2,1)] group-hover:translate-y-0 motion-reduce:transition-none"
        >
          {children}
        </span>
      </span>
    </a>
  );
}
