import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GranolaWindowProps {
  /** what sits inside the window, under the three dots */
  children: ReactNode;
  className?: string;
}

/** The oat card with three window dots that frames content like a desktop app window. */
export function GranolaWindow({ children, className }: GranolaWindowProps) {
  return (
    <div className={cn("rounded-[calc(var(--radius)*3)] bg-card text-card-foreground lg:rounded-[calc(var(--radius)*3.5)]", className)}>
      <div aria-hidden className="flex gap-2.5 px-6 pt-7 lg:px-12 lg:pt-7">
        <span className="size-3 rounded-full bg-destructive/85" />
        <span className="size-3 rounded-full bg-chart-1" />
        <span className="size-3 rounded-full bg-highlight" />
      </div>
      {children}
    </div>
  );
}
