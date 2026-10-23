import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import { ZettaJouleSplitHeading } from "@foundry/zetta-joule-split-heading";
import "./zetta-joule-workforce.css";

export interface ZettaJoulePhoto {
  /** a wide photo (aspect 1.47) instead of a tall one (0.72); the original alternates */
  wide?: boolean;
  /** the photo (cropped like object-fit: cover); empty shows a placeholder */
  image?: ReactNode;
}

export interface ZettaJouleWorkforceProps {
  /** the heading ("\n" breaks the line on desktop) */
  heading: string;
  /** the paragraph on the right */
  body: string;
  /** the button */
  cta: { label: string; href: string };
  /** the strip of photos, bleeding off both sides; ten fill a wide screen */
  photos: ZettaJoulePhoto[];
  className?: string;
}

export function ZettaJouleWorkforce({ heading, body, cta, photos, className }: ZettaJouleWorkforceProps) {
  return (
    <section className={cn("relative z-10 overflow-clip bg-background pt-20 pb-8 text-foreground lg:pt-40 lg:pb-12", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter lg:px-10">
        <ZettaJouleSplitHeading heading={heading} body={body}>
          <ZettaJouleReveal>
            <ZettaJouleButton label={cta.label} href={cta.href} />
          </ZettaJouleReveal>
        </ZettaJouleSplitHeading>
      </div>
      <div className="zetta-joule-workforce-strip -ml-4 mt-[4.5rem] flex w-max gap-4 lg:-ml-6 lg:mt-24">
        {photos.map((p, i) => (
          <div key={i} className={cn("h-60 shrink-0 overflow-clip rounded-sm lg:h-[29rem] [&>*]:size-full [&>*]:object-cover", p.wide ? "aspect-[352/240]" : "aspect-[172/240]")}>
            {p.image ?? <ZettaJoulePlaceholder tone="wash" className="size-full" />}
          </div>
        ))}
      </div>
    </section>
  );
}
