import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PaxosHeadingProps {
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** small grey label above the title */
  eyebrow?: ReactNode;
  /** centre: left on phones, centred from lg · start: left everywhere */
  align?: "centre" | "start";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Title + lead pair used at the top of most sections. */
export function PaxosHeading({ title, lead, eyebrow, align = "centre", as: Tag = "h2", className }: PaxosHeadingProps) {
  const centre = align === "centre";
  return (
    <div className={cn("flex flex-col", centre && "lg:items-center lg:text-center", className)}>
      {eyebrow ? <p className="mb-3 text-base/[1.4] tracking-[-0.01em] text-muted-foreground lg:mb-5">{eyebrow}</p> : null}
      <Tag className="font-display text-[1.75rem]/[1.2] font-normal tracking-[-0.02em] text-balance text-foreground lg:text-5xl/[1.125]">
        {title}
      </Tag>
      {lead ? (
        <p className="mt-5 max-w-[42.5rem] text-[0.9rem]/[1.4] tracking-[-0.01em] text-pretty text-muted-foreground lg:mt-8 lg:text-lg/[1.35]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
