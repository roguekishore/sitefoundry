import type { ReactNode } from "react";
import { WiemerArrowLink } from "@foundry/wiemer-arrow-link";
import { WiemerSplitText, wiemerDriftFrame, wiemerReveal, wiemerRevealStyle } from "@foundry/wiemer-reveal";
import { WiemerTag } from "@foundry/wiemer-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerAboutProps {
  /** the huge one-word heading */
  title: string;
  /** one line above the paragraphs */
  subline: string;
  /** the story, a few short paragraphs */
  paragraphs: string[];
  /** the link under the text */
  link: { label: string; href: string };
  /** the mono chip over the portrait, e.g. the person's role and name */
  caption: string;
  /** the portrait (an <img>, cover, 2:3); empty shows a placeholder */
  media?: ReactNode;
  /** anchor id */
  id?: string;
  className?: string;
}

/** Huge heading, a story column and a drifting portrait. */
export function WiemerAbout({ title, subline, paragraphs, link, caption, media, id, className }: WiemerAboutProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-x-3.5 px-gutter md:grid-cols-12">
        <div className={cn(wiemerDriftFrame, "relative isolate aspect-[2/3] overflow-clip rounded-xl md:col-span-5 md:col-start-8 md:row-start-2 md:rounded-2xl lg:col-span-4 lg:col-start-9")}>
          <div
            className={cn(wiemerReveal("drift"), "absolute inset-x-0 -top-12 -z-10 h-[calc(100%+6rem)] bg-linear-to-br from-muted to-glow/25 [&>img]:size-full [&>img]:object-cover")}
            style={wiemerRevealStyle(0, 46)}
          >
            {media}
          </div>
          <WiemerTag tone="plain" className="absolute top-4 left-4">
            {caption}
          </WiemerTag>
        </div>

        <WiemerSplitText text={title} className="mt-12 font-display text-[64px] leading-[1.1] font-medium tracking-[-0.025em] md:col-span-12 md:row-start-1 md:mt-0 md:text-[9vw]" />

        <div className="mt-10 md:col-span-6 md:row-start-2 md:mt-[5vw] md:self-end lg:col-span-4">
          <WiemerSplitText as="h3" size="sm" text={subline} className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em]" />
          <div className="mt-2.5 space-y-[1.3em] text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em]">
            {paragraphs.map((p, i) => (
              <p key={i} className={wiemerReveal("rise")} style={wiemerRevealStyle(i * 20)}>
                {p}
              </p>
            ))}
          </div>
          <div className={cn(wiemerReveal("fade"), "mt-10")}>
            <WiemerArrowLink label={link.label} href={link.href} />
          </div>
        </div>
      </div>
    </section>
  );
}
