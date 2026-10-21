import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rollers-band.css";

export interface RollersBandProps {
  children?: ReactNode;
  /** the element to render (section by default) */
  as?: ElementType;
  /** an in-page anchor */
  id?: string;
  /** false: plain charcoal, without the sawtooth texture */
  pattern?: boolean;
  className?: string;
}

/** A charcoal band: it sets the theme's dark palette on itself (so it stays dark in light mode)
    and lays a faint diagonal sawtooth texture over the surface. */
export function RollersBand({ children, as: Tag = "section", id, pattern = true, className }: RollersBandProps) {
  return (
    <Tag id={id} className={cn("dark relative bg-background text-foreground", pattern && "rollers-band", className)}>
      {children}
    </Tag>
  );
}
