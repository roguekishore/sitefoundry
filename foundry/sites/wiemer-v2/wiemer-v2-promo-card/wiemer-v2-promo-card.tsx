import type { ReactNode } from "react";
import { WiemerV2ArrowLink } from "@foundry/wiemer-v2-arrow-link";
import { WiemerV2Tag } from "@foundry/wiemer-v2-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2PromoCardProps {
  /** the small status tag at the top */
  tag: string;
  /** two or three lines of text */
  text: string;
  /** the link at the bottom */
  link: { label: string; href: string };
  /** the square picture on the left (an <img>); shown from lg up, a grey square when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A small off-white card: a square product picture on the left (from lg), and on the right a
 * status tag, a short pitch and an arrow link pinned to the bottom.
 */
export function WiemerV2PromoCard({ tag, text, link, media, className }: WiemerV2PromoCardProps) {
  return (
    <div className={cn("flex gap-4 rounded-lg bg-background p-3 text-foreground lg:rounded-xl", className)}>
      <div className="hidden size-41 shrink-0 overflow-clip rounded-md bg-muted lg:block [&>img]:size-full [&>img]:object-cover">{media}</div>
      <div className="flex min-w-0 flex-col items-start gap-3 lg:py-0.5">
        <WiemerV2Tag>{tag}</WiemerV2Tag>
        <p className="max-w-[16rem] text-base leading-[1.3] lg:max-w-[14.5rem] lg:text-[max(1rem,1.2vw)]">{text}</p>
        <WiemerV2ArrowLink href={link.href} className="mt-auto pt-1">
          {link.label}
        </WiemerV2ArrowLink>
      </div>
    </div>
  );
}
