import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";

export interface RollersArrowCardProps {
  /** the card's title */
  title: string;
  /** where the card goes */
  href: string;
  /** a chip over the image's top-left corner (Guide, Safety…) */
  tag?: string;
  /** the photo; a muted placeholder of the same shape when empty */
  media?: ReactNode;
  /** screen-reader label of the arrow tile */
  arrowLabel: string;
  /** lg: the 24px title of the fleet grid · md: the two-line 18px title of the news cards */
  size?: "lg" | "md";
  className?: string;
}

/** A square-cornered photo card: image (aspect 1.45), then the title beside a 48px orange arrow
    tile tucked under the image's right edge. The tile fades to the olive grey on hover. */
export function RollersArrowCard({ title, href, tag, media, arrowLabel, size = "lg", className }: RollersArrowCardProps) {
  return (
    <a href={href} className={cn("group/card block", className)}>
      <div className="relative aspect-[1.45] overflow-hidden bg-muted">
        {media}
        {tag ? <RollersEyebrow className="absolute top-2.5 left-2.5 normal-case md:py-1.5">{tag}</RollersEyebrow> : null}
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3
          className={cn(
            "font-display",
            size === "lg"
              ? "pt-[0.8rem] text-[1.125rem] leading-[1.3] md:pt-3 md:text-[1.5rem]"
              : "pt-1 text-[1rem] leading-[1.25] font-medium md:pt-1.5 md:text-[1.125rem]",
          )}
        >
          {title}
        </h3>
        <span
          aria-label={arrowLabel}
          className="flex size-12 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors duration-[450ms] group-hover/card:bg-muted-foreground motion-reduce:transition-none"
        >
          <ArrowRight className="size-8" strokeWidth={1.75} />
        </span>
      </div>
    </a>
  );
}
