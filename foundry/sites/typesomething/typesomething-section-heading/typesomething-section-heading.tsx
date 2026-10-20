import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface TypesomethingSectionHeadingProps {
  /** the heading; may hold a wordmark or other inline pieces */
  title: ReactNode;
  /** one or two sentences under it */
  subtitle?: ReactNode;
  /** heading level for the document outline */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Centred light-weight heading (30px on phones, 44px on desktop) with a quiet subtitle. */
export function TypesomethingSectionHeading({ title, subtitle, as: Tag = "h2", className }: TypesomethingSectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-[40rem] text-center", className)}>
      <Tag className="font-display text-[1.9rem] leading-[1.5] font-normal tracking-[-0.02em] text-balance lg:text-[2.75rem]">{title}</Tag>
      {subtitle && <p className="mt-2 text-[1.05rem] leading-[1.6] text-foreground/80 lg:mt-3 lg:text-[1.05rem]">{subtitle}</p>}
    </div>
  );
}
