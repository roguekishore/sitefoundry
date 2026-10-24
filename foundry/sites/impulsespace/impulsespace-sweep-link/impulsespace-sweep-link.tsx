import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./impulsespace-sweep-link.css";

export interface ImpulsespaceSweepLinkProps {
  /** the label (set in uppercase mono) */
  children: ReactNode;
  /** where it goes */
  href: string;
  className?: string;
}

/** Uppercase mono link at 50% ink whose underline sweeps out and back in on hover. */
export function ImpulsespaceSweepLink({ children, href, className }: ImpulsespaceSweepLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "impulsespace-sweep-link relative inline-block font-mono text-sm leading-[1.5] tracking-[0.08em] text-foreground/50 uppercase",
        "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground/70 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </a>
  );
}
