import { WiemerV2ArrowLink } from "@foundry/wiemer-v2-arrow-link";
import { wiemerV2Reveal, wiemerV2RevealStyle } from "@foundry/wiemer-v2-reveal";
import { WiemerV2SplitHeading } from "@foundry/wiemer-v2-split-heading";
import { WiemerV2Tag } from "@foundry/wiemer-v2-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2IntroProps {
  /** the small status tag above the heading */
  tag: string;
  /** the big two-line heading; "\n" breaks the line */
  heading: string;
  /** the short line that opens the text column */
  subheading: string;
  /** the paragraphs under it */
  paragraphs: string[];
  /** the link that closes the text column */
  link: { label: string; href: string };
  className?: string;
}

/**
 * An introduction on the off-white page: a tag and a very large display heading on the left,
 * then, a little lower and in the right third, a short subheading, a few paragraphs and an
 * arrow link. The heading's letters rise into place one by one; the text lifts in as it comes.
 */
export function WiemerV2Intro({ tag, heading, subheading, paragraphs, link, className }: WiemerV2IntroProps) {
  return (
    <section className={cn("bg-background px-gutter pt-section pb-section text-foreground", className)}>
      <div className="mx-auto max-w-page">
        <div className={wiemerV2Reveal("fade")}>
          <WiemerV2Tag className="lg:ml-[0.3vw]">{tag}</WiemerV2Tag>
        </div>
        <WiemerV2SplitHeading text={heading} className="mt-5 font-display text-[4rem] leading-[1.1] font-medium tracking-[-0.02em] lg:mt-6 lg:text-[9vw] lg:tracking-[-0.008em]" />

        <div className="mt-12 lg:mt-[6.5rem] lg:grid lg:grid-cols-3 lg:gap-x-4">
          <div className="lg:col-start-3">
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
      </div>
    </section>
  );
}
