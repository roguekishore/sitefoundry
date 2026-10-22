import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./prenuvo-arc.css";

export interface PrenuvoArcProps {
  children?: ReactNode;
  /** the element to render (section by default) */
  as?: ElementType;
  /** tuck the arc over the section above (true by default) */
  overlap?: boolean;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function PrenuvoArc({ children, as: Tag = "section", overlap = true, id, className }: PrenuvoArcProps) {
  return (
    <Tag id={id} className={cn("prenuvo-arc relative", overlap && "prenuvo-arc-overlap", className)}>
      {children}
    </Tag>
  );
}
