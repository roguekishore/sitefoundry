import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ValaratomicsIntroProps {
  /** the section heading */
  title: string;
  /** the paragraph beside it (strings or rich text); omit for a heading on its own */
  body?: ReactNode;
  /** heading level, for the outline */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * A section intro: a tight 42/48px heading on the left half and a 18/22px paragraph from the
 * middle of the page, top-aligned. Stacked on phones, 22px apart.
 */
export function ValaratomicsIntro({ title, body, as: Tag = "h2", className }: ValaratomicsIntroProps) {
  return (
    <div className={cn("grid gap-[1.375rem] lg:grid-cols-2 lg:gap-x-[2vw]", className)}>
      <Tag className="font-sans text-[2.625rem] leading-[0.9] font-semibold tracking-[-0.03em] lg:text-5xl lg:leading-[0.9]">
        {title}
      </Tag>
      {body && (
        <div className="max-w-[38rem] text-lg leading-[1.1] tracking-[-0.02em] lg:pt-1 lg:text-[1.375rem] lg:leading-[1.1]">
          {body}
        </div>
      )}
    </div>
  );
}
