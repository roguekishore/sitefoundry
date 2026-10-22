import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import { BasepowercompanyTag } from "@foundry/basepowercompany-tag";

export interface BasepowercompanyBannerProps {
  /** the small light tag above the heading */
  tag?: string;
  /** the heading; wrap a phrase in BasepowercompanySwash (tone accent) to underline it */
  title: ReactNode;
  /** a sentence under the heading */
  body?: string;
  /** the lime button */
  primaryCta?: { label: string; href: string };
  /** the light hairline button beside it */
  secondaryCta?: { label: string; href: string };
  /** the full-bleed photo behind */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  className?: string;
}

/*
 * A full-bleed photo band with a scrim from the left: a light tag, a big white heading with a
 * lime hand-drawn underline, an optional sentence and two buttons. Its height comes from the
 * content and padding. Used for the mid-page pitch and for the closing call to action.
 */
export function BasepowercompanyBanner({ tag, title, body, primaryCta, secondaryCta, media, mediaLabel, className }: BasepowercompanyBannerProps) {
  return (
    <section className={cn("dark relative isolate overflow-clip bg-background text-foreground", className)}>
      <BasepowercompanyMedia media={media} tone="photo" label={mediaLabel} className="absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--background)_55%,transparent),color-mix(in_oklab,var(--background)_35%,transparent)_45%,transparent_75%)]"
      />
      <div className="mx-auto max-w-page px-gutter py-16 lg:px-[calc(var(--page-gutter)*2)] lg:py-24">
        {tag && <BasepowercompanyTag tone="inverse">{tag}</BasepowercompanyTag>}
        <h2 className="mt-6 max-w-[20ch] font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] lg:mt-5 lg:max-w-[26ch] lg:text-[2.5rem] lg:leading-[1.1]">
          {title}
        </h2>
        {body && <p className="mt-9 max-w-[26rem] text-base leading-6 font-semibold tracking-[-0.005em] lg:mt-10">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className={cn("flex flex-col gap-3 lg:flex-row", body ? "mt-6 lg:mt-8" : "mt-8 lg:mt-7")}>
            {primaryCta && (
              <BasepowercompanyButton href={primaryCta.href} className="w-full lg:w-auto">
                {primaryCta.label}
              </BasepowercompanyButton>
            )}
            {secondaryCta && (
              <BasepowercompanyButton href={secondaryCta.href} variant="ghost" className="w-full lg:w-auto">
                {secondaryCta.label}
              </BasepowercompanyButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
