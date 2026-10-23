import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";

export interface ParsleyhealthHeroProps {
  /** the headline (h1) */
  title: string;
  /** the paragraph under it */
  body: string;
  /** the filled pill */
  primary: { label: string; href: string };
  /** the outlined pill after it */
  secondary?: { label: string; href: string };
  /** the photo filling the hero (an img or video, sized to fill); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label of the placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Full-bleed photo with the headline over a beige wash. */
export function ParsleyhealthHero({ title, body, primary, secondary, media, mediaLabel, className }: ParsleyhealthHeroProps) {
  return (
    <section className={cn("relative isolate h-[37.5rem] overflow-clip bg-card lg:h-[47.5rem]", className)}>
      <div className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media ?? <ParsleyhealthPlaceholder label={mediaLabel} />}
      </div>
      {/* phones: beige rising from the bottom behind the text */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-linear-to-t from-card from-35% to-transparent lg:hidden" />
      {/* desktop: beige from the left to clear at 68%, and a soft shade at the foot */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-card from-0% via-card/95 via-24% to-transparent to-68% max-lg:hidden"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-55% via-foreground/8 via-85% to-foreground/18 max-lg:hidden"
      />

      <div className="flex h-full flex-col justify-end px-gutter pb-6 lg:justify-center lg:px-20 lg:pt-4 lg:pb-0">
        <ParsleyhealthHeading as="h1" size="hero" title={title} titleClassName="max-w-[21rem] lg:max-w-[33rem]" />
        <p className="mt-4 max-w-[22rem] text-base leading-[1.6] text-foreground lg:mt-8 lg:max-w-[27.5rem] lg:text-xl lg:leading-8">
          {body}
        </p>
        <div className="mt-6 flex gap-5 lg:mt-9 lg:gap-6">
          <ParsleyhealthButton href={primary.href} size="lg" className="max-lg:h-14 max-lg:px-6">
            {primary.label}
          </ParsleyhealthButton>
          {secondary ? (
            <ParsleyhealthButton href={secondary.href} size="lg" variant="outline" className="max-lg:h-14 max-lg:px-6">
              {secondary.label}
            </ParsleyhealthButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
