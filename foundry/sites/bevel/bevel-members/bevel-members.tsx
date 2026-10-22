import type { ReactNode } from "react";
import { Wheat } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-members.css";

export interface BevelAward {
  /** a tiny mark above the label (lucide icon) */
  icon?: ReactNode;
  /** the award's name, two short lines */
  label: ReactNode;
}

export interface BevelMembersProps {
  /** two laurel-framed awards above the title */
  awards?: BevelAward[];
  /** the big centered title */
  title: ReactNode;
  /** the tall 9:16 social posts in the drifting row (images or videos) */
  posts?: ReactNode[];
  /** how many placeholder posts to show when posts is empty */
  placeholderCount?: number;
  className?: string;
}

/**
 * Social proof: two small laurel awards, a big two-line centered title, then a row of tall
 * 9:16 posts with 16px corners drifting slowly left, faded out at both edges.
 */
export function BevelMembers({ awards = [], title, posts, placeholderCount = 12, className }: BevelMembersProps) {
  const items: ReactNode[] = posts?.length ? posts : Array.from({ length: placeholderCount }, () => null);
  const row = (copy: number) =>
    items.map((post, i) => (
      <li key={`${copy}-${i}`} aria-hidden={copy > 0 || undefined} className="h-[15.8rem] w-[8.875rem] shrink-0 overflow-clip rounded-lg lg:h-[26.25rem] lg:w-[14.75rem]">
        {post ?? <BevelPlaceholder tone="muted" className="size-full" />}
      </li>
    ));
  return (
    <section className={cn("bg-background pt-section pb-10 text-foreground lg:pt-[calc(var(--section-y)*2)] lg:pb-section", className)}>
      {awards.length > 0 && (
        <ul className="flex justify-center gap-8 px-gutter lg:gap-10">
          {awards.map((award, i) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <Wheat aria-hidden className="size-9 -scale-x-100 -rotate-12 lg:size-10" strokeWidth={1.75} />
              <span className="flex flex-col items-center text-center text-[0.9375rem] leading-[1.1] font-medium [&_svg]:mb-1 [&_svg]:size-3.5">
                {award.icon}
                {award.label}
              </span>
              <Wheat aria-hidden className="size-9 rotate-12 lg:size-10" strokeWidth={1.75} />
            </li>
          ))}
        </ul>
      )}
      <h2 className={cn(bevelTitle.lg, "mx-auto mt-10 max-w-[22rem] px-gutter text-center text-balance lg:max-w-[56rem]")}>{title}</h2>
      <div className="bevel-members-fade mt-12 overflow-clip lg:mt-20">
        <ul className="bevel-members-track flex w-max gap-4 lg:gap-8">
          {row(0)}
          {row(1)}
        </ul>
      </div>
    </section>
  );
}
