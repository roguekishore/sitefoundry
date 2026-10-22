import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryHeadingProps {
  /** the title; a list of lines breaks there from lg up (phones wrap freely) */
  title: string | string[];
  /** a muted line or two under the title */
  lead?: ReactNode;
  /** heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Modern Treasury's centred section title: regular weight, tight tracking, a muted lead. */
export function ModerntreasuryHeading({ title, lead, as: Tag = "h2", className }: ModerntreasuryHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <div className={cn("mx-auto max-w-[48rem] text-center", className)}>
      <Tag className="font-display text-[2rem] leading-[1.25] font-normal tracking-[-0.035em] text-balance text-foreground lg:text-[2.9375rem]">
        {lines.map((line, i) => (
          <span key={i} className="lg:block">
            {line}
            {i < lines.length - 1 && " "}
          </span>
        ))}
      </Tag>
      {lead && <p className="mx-auto mt-5 max-w-[48rem] text-lg leading-[1.5] text-foreground/75 lg:mt-6">{lead}</p>}
    </div>
  );
}
