import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import { ZettaJouleSplitHeading } from "@foundry/zetta-joule-split-heading";
import "./zetta-joule-technology.css";

export interface ZettaJouleTechnologyProps {
  /** the heading ("\n" breaks the line on desktop) */
  heading: string;
  /** the paragraph beside it */
  body: string;
  /** the button under the paragraph */
  cta: { label: string; href: string };
  /** the large photo (aerial view of a site); empty shows a placeholder. It is cropped like object-fit: cover */
  media?: ReactNode;
  /** the black note: over the photo on desktop, under it on phones */
  callout: { title: string; text: string };
  className?: string;
}

export function ZettaJouleTechnology({ heading, body, cta, media, callout, className }: ZettaJouleTechnologyProps) {
  return (
    <section className={cn("bg-secondary text-foreground", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter pt-20 lg:px-10 lg:pt-40">
        <ZettaJouleSplitHeading heading={heading} body={body}>
          <ZettaJouleReveal>
            <ZettaJouleButton label={cta.label} href={cta.href} />
          </ZettaJouleReveal>
        </ZettaJouleSplitHeading>
        <div className="relative -mx-gutter mt-20 lg:mx-0 lg:mt-24">
          <div className="relative aspect-[390/488] overflow-clip lg:aspect-[1360/890] lg:rounded-sm">
            <div className="zetta-joule-technology-drift absolute inset-x-0 -inset-y-16 [&>*]:size-full [&>*]:object-cover">
              {media ?? <ZettaJoulePlaceholder tone="wash" className="size-full rounded-none" />}
            </div>
          </div>
          <div className="dark bg-popover px-gutter pt-[4.5rem] pb-16 text-foreground lg:absolute lg:bottom-12 lg:left-8 lg:w-[28rem] lg:rounded-sm lg:p-6">
            <p className="flex items-center gap-3 font-display text-base leading-none font-light lg:text-lg">
              <span aria-hidden className="size-3 rounded-full bg-primary" />
              {callout.title}
            </p>
            <p className="mt-4 text-base leading-[1.3] tracking-[-0.01em] lg:text-sm lg:leading-normal">{callout.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
