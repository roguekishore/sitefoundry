import type { ReactNode } from "react";
import { WiemerV2ArrowLink } from "@foundry/wiemer-v2-arrow-link";
import { wiemerV2Reveal, wiemerV2RevealStyle } from "@foundry/wiemer-v2-reveal";
import { WiemerV2SplitHeading } from "@foundry/wiemer-v2-split-heading";
import { WiemerV2Tag } from "@foundry/wiemer-v2-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2AboutProps {
  /** the big heading at the top left */
  heading: string;
  /** the short line that opens the text */
  subheading: string;
  /** the paragraphs */
  paragraphs: string[];
  /** the link under the text */
  link: { label: string; href: string };
  /** the portrait photo (4:5, an <img>); a grey placeholder when empty */
  media?: ReactNode;
  /** the small mono label pinned to the photo's top-left corner */
  mediaLabel?: string;
  className?: string;
}

/**
 * A brand story: a very large heading top left, then the text in the left third, bottom-aligned
 * with a tall 4:5 portrait photo in the right third that carries a small mono label. On phones
 * the photo comes first. Letters rise in, paragraphs lift in, the photo drifts in its frame.
 */
export function WiemerV2About({ heading, subheading, paragraphs, link, media, mediaLabel, className }: WiemerV2AboutProps) {
  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page lg:grid-cols-3 lg:gap-x-4">
        <WiemerV2SplitHeading
          text={heading}
          className="mt-12 font-display text-[4rem] leading-[1.1] font-medium tracking-[-0.02em] lg:col-span-3 lg:row-start-1 lg:mt-0 lg:text-[9vw] lg:tracking-[-0.008em]"
        />

        <figure className="relative order-first aspect-[4/5] overflow-clip rounded-lg lg:order-none lg:col-start-3 lg:row-start-2 lg:mt-14 lg:rounded-xl">
          <div className={cn(wiemerV2Reveal("drift"), "absolute inset-x-0 -top-12 h-[calc(100%+6rem)] bg-muted [&>img]:size-full [&>img]:object-cover")} style={wiemerV2RevealStyle(0, [-46, 46])}>
            {media}
          </div>
          {mediaLabel && <WiemerV2Tag tone="card" className="absolute top-4 left-4">{mediaLabel}</WiemerV2Tag>}
        </figure>

        <div className="mt-8 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-end">
          <WiemerV2SplitHeading as="h3" text={subheading} className="text-xl leading-[1.2] font-medium tracking-[-0.02em] lg:text-[1.6vw]" />
          <div className="mt-2 space-y-[1.3em] text-base leading-[1.3] tracking-[-0.01em] lg:mt-3 lg:text-[1.2vw]">
            {paragraphs.map((p, i) => (
              <p key={i} className={wiemerV2Reveal("rise")} style={wiemerV2RevealStyle(i)}>
                {p}
              </p>
            ))}
          </div>
          <div className={cn(wiemerV2Reveal("fade"), "mt-10")}>
            <WiemerV2ArrowLink href={link.href}>{link.label}</WiemerV2ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
