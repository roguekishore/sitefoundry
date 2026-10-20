import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton } from "@foundry/hhhusher-button";
import { HhhusherLines } from "@foundry/hhhusher-lines";
import "./hhhusher-features.css";

export interface HhhusherFeaturesLink {
  label: string;
  href: string;
}

export interface HhhusherFeature {
  /** the heading, one entry per line as it breaks on a wide screen */
  title: string[];
  /** the paragraph under it */
  text: string;
  /** the yellow button */
  primary?: HhhusherFeaturesLink;
  /** the arrow link next to it */
  more?: HhhusherFeaturesLink;
}

export interface HhhusherFeaturesProps {
  /** the section heading, one entry per line */
  title: string[];
  /** the small paragraph low in the first screen */
  intro: string;
  /** the yellow button under the intro */
  primary?: HhhusherFeaturesLink;
  /** the arrow link under the intro */
  more?: HhhusherFeaturesLink;
  /** the feature blocks, one per screen, in the right-hand column */
  features: HhhusherFeature[];
  /** the 3D scene or image held in place behind the whole section */
  media?: ReactNode;
  /** the id other links jump to */
  id?: string;
  className?: string;
}

function Actions({ primary, more }: { primary?: HhhusherFeaturesLink; more?: HhhusherFeaturesLink }) {
  if (!primary && !more) return null;
  return (
    <div className="hhhusher-features-fade mt-7 flex items-center gap-7">
      {primary && <HhhusherButton href={primary.href}>{primary.label}</HhhusherButton>}
      {more && (
        <HhhusherButton href={more.href} variant="link">
          {more.label}
        </HhhusherButton>
      )}
    </div>
  );
}

/**
 * A long cream section with a window-sized media frame pinned behind it the whole way down (a
 * 3D object in the original; a soft placeholder here). The first screen holds a big heading
 * at the top and a small paragraph with a yellow button lower down; then one feature per
 * screen scrolls past in the right-hand column: a two-line heading that rises in line by line,
 * a paragraph that fades in, a yellow button and an arrow link.
 */
export function HhhusherFeatures({ title, intro, primary, more, features, media, id, className }: HhhusherFeaturesProps) {
  return (
    <section id={id} className={cn("hhhusher-features relative bg-background pb-section text-foreground", className)}>
      <div aria-hidden={media ? undefined : true} className="hhhusher-features-frame pointer-events-none sticky top-0 -mb-[100svh] h-svh overflow-clip">
        {media ? (
          <div className="size-full [&>*]:size-full [&>*]:object-cover">{media}</div>
        ) : (
          <div className="absolute top-[18%] left-[25%] h-[42svh] w-[75%] rounded-[50%] bg-foreground/[0.07] blur-3xl lg:top-[4%] lg:left-[26%] lg:h-[92svh] lg:w-[36%]" />
        )}
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        <div className="flex min-h-svh flex-col justify-center gap-[4.8rem] py-24 lg:justify-between lg:gap-0 lg:pt-40 lg:pb-28">
          <HhhusherLines
            as="h2"
            lines={title}
            className="max-w-[40rem] font-display text-[2.6rem] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[4.25rem] lg:leading-[1.15]"
          />
          <div className="max-w-[22rem]">
            <p className="hhhusher-features-fade text-[1.04rem] leading-[1.3] font-medium lg:text-base lg:leading-[1.3]">{intro}</p>
            <Actions primary={primary} more={more} />
          </div>
        </div>

        {features.map((feature, i) => (
          <article key={i} className="flex min-h-svh flex-col pt-28 lg:ml-[63.5%] lg:max-w-[28rem] lg:pt-28">
            <HhhusherLines
              as="h3"
              lines={feature.title}
              className="font-display text-[2.08rem] leading-[1.06] font-medium tracking-[-0.01em] lg:text-[3.5625rem] lg:leading-[1.05]"
            />
            <p className="hhhusher-features-fade mt-4 text-[1.3rem] leading-[1.3] font-medium tracking-[-0.01em] lg:mt-8 lg:text-[1.25rem] lg:leading-[1.3]">
              {feature.text}
            </p>
            <Actions primary={feature.primary} more={feature.more} />
          </article>
        ))}
      </div>
    </section>
  );
}
