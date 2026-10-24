import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./hermeus-reveal.css";

export interface HermeusRevealProps {
  /** what fades and rises in */
  children: ReactNode;
  className?: string;
}

/** Fades and lifts its content in as it scrolls into view (scrubbed, CSS only). */
export function HermeusReveal({ children, className }: HermeusRevealProps) {
  return <div className={cn("hermeus-reveal", className)}>{children}</div>;
}
