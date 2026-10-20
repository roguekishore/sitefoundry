import type { ReactNode } from "react";
import { WiemerArrowLink } from "@foundry/wiemer-arrow-link";
import { WiemerTag } from "@foundry/wiemer-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerTeaserCardProps {
  /** small mono label above the text, e.g. a launch note */
  tag: string;
  /** two or three short lines */
  text: string;
  /** the link at the bottom */
  link: { label: string; href: string };
  /** square thumbnail (an <img>); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Card with a square thumbnail, a tag, a few lines and an arrow link. */
export function WiemerTeaserCard({ tag, text, link, media, className }: WiemerTeaserCardProps) {
  return (
    <div className={cn("flex gap-4 rounded-xl bg-card p-3 text-card-foreground md:rounded-2xl", className)}>
      <div className="hidden aspect-square w-[164px] shrink-0 overflow-clip rounded-lg bg-muted md:block [&>img]:size-full [&>img]:object-cover">
        {media}
      </div>
      <div className="flex min-w-0 flex-col items-start">
        <WiemerTag>{tag}</WiemerTag>
        <p className="mt-2.5 max-w-[16rem] text-base leading-[1.35] font-medium tracking-[-0.015em] md:text-[17px]">{text}</p>
        <WiemerArrowLink label={link.label} href={link.href} className="mt-4 md:mt-auto" />
      </div>
    </div>
  );
}
