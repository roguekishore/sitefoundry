import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface TypesomethingV2HeadingProps {
  /** the heading; may hold inline elements such as a wordmark */
  title: ReactNode;
  /** a sentence under it */
  subtitle?: ReactNode;
  /** heading level for the document outline */
  as?: "h1" | "h2" | "h3";
  /** subtitle at full ink (the "why" and "features" sections) or softened (the steps) */
  subtitleTone?: "ink" | "soft";
  className?: string;
}

export function TypesomethingV2Heading({ title, subtitle, as: Tag = "h2", subtitleTone = "ink", className }: TypesomethingV2HeadingProps) {
  return (
    <div className={cn("mx-auto max-w-[40rem] text-center", className)}>
      <Tag className="font-display text-[1.9rem] leading-[1.5] font-normal tracking-[-0.02em] text-balance lg:text-[2.75rem]">
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-[1.1rem] leading-[1.5] text-pretty lg:mt-3 lg:text-[1.15rem]",
            subtitleTone === "soft" ? "text-muted-foreground" : "text-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
