import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideButtonProps {
  href: string;
  /** the button text, set in uppercase */
  children: ReactNode;
  className?: string;
}

/** A charcoal block button with tracked uppercase text; darkens on hover. */
export function MarryandbrideButton({ href, children, className }: MarryandbrideButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-[2.4rem] items-center justify-center bg-primary px-[2.1rem] font-sans text-[0.78rem] leading-none tracking-[0.07em] text-primary-foreground uppercase transition-colors duration-300 ease-out hover:bg-foreground hover:text-background motion-reduce:transition-none lg:text-[0.863rem]",
        className,
      )}
    >
      {children}
    </a>
  );
}
