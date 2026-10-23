import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopWordmark } from "@foundry/whoop-wordmark";

export interface WhoopHeroProps {
  /** the banner image or video, filling the frame (object-cover); a warm placeholder when empty */
  media?: ReactNode;
  /** an optional pale panel at the top: a bold uppercase line over a big wordmark */
  badge?: { title: string; brand: string };
  /** where the whole banner links (leave out for no link) */
  href?: string;
  /** screen-reader name of the banner link */
  label?: string;
  className?: string;
}

/** Whoop's campaign banner with a rounded white lip rising over its foot. */
export function WhoopHero({ media, badge, href, label, className }: WhoopHeroProps) {
  const Frame = href ? "a" : "div";
  return (
    <section className={cn("relative bg-background", className)}>
      <Frame
        {...(href ? { href, "aria-label": label } : {})}
        className="relative block aspect-[390/693] overflow-clip sm:aspect-[4/3] lg:aspect-[1440/640]"
      >
        <div className="absolute inset-0 *:size-full *:object-cover">
          {media ?? <WhoopPlaceholder tone="warm" />}
        </div>
        {badge && (
          <div className="absolute inset-x-4 top-4 bg-background/75 px-4 pt-4 pb-4 text-foreground sm:right-auto sm:w-[26rem] lg:top-12 lg:left-[max(var(--page-gutter),calc((100%_-_var(--page-width))/2_+_var(--page-gutter)))] lg:w-[34rem] lg:px-7 lg:pt-7 lg:pb-8">
            <p className="text-[1.375rem] leading-[1.2] font-bold tracking-[0.06em] uppercase lg:text-[2rem]">
              {badge.title}
            </p>
            <WhoopWordmark name={badge.brand} className="mt-3 text-[3.5rem] lg:mt-6 lg:text-[4.75rem]" />
          </div>
        )}
      </Frame>
      {/* the white lip: overlaps the image's bottom 30px with rounded top corners */}
      <div aria-hidden className="relative -mt-[1.875rem] h-[1.875rem] rounded-t-[1.875rem] bg-background" />
    </section>
  );
}
