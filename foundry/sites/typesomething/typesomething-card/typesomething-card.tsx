import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface TypesomethingCardProps {
  children: ReactNode;
  /** card: a white panel (for paper bands) · outline: page-coloured with a hairline (for white bands) */
  surface?: "card" | "outline";
  className?: string;
}

/** The 24px-radius panel every TypeSomething grid is made of: a hairline border, no shadow. */
export function TypesomethingCard({ children, surface = "card", className }: TypesomethingCardProps) {
  return (
    <div className={cn("rounded-lg border p-6 lg:p-8", surface === "card" ? "border-foreground/14 bg-card text-card-foreground" : "border-foreground/16 bg-background", className)}>
      {children}
    </div>
  );
}
