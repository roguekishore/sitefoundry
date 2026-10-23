import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RaycastEyebrowProps {
  /** the label text */
  children: ReactNode;
  className?: string;
}

/** A small mono, uppercase, accent-coloured label. */
export function RaycastEyebrow({ children, className }: RaycastEyebrowProps) {
  return <p className={cn("font-mono text-xs font-medium tracking-[0.12em] text-highlight uppercase", className)}>{children}</p>;
}
