import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RadiantnuclearButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a plain <button> */
  href?: string;
  className?: string;
}

// A translucent charcoal wash: on cream it reads grey-brown, on tan a deep brown, over a photo
// a dark glass. Hover deepens it (the original's 40% → 80% in 150ms).
const look =
  "inline-flex min-w-[9.375rem] items-center justify-center px-7 py-2.5 font-sans text-sm leading-[0.875rem] font-bold text-card " +
  "bg-foreground/40 transition-colors duration-150 hover:bg-foreground/80 motion-reduce:transition-none " +
  "dark:bg-foreground/85 dark:text-background dark:hover:bg-foreground " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function RadiantnuclearButton({ children, href, className }: RadiantnuclearButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(look, className)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cn(look, className)}>
      {children}
    </button>
  );
}
