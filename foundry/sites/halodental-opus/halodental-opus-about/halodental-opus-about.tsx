import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusAboutProps {
  /** the giant two-line heading, painted with the yellow → red gradient */
  title: string;
  /** the short paragraph beside the photo */
  text: ReactNode;
  /** the orange button under the paragraph */
  cta?: { label: string; href: string };
  /** the small square photo (team, studio…); empty → a muted square */
  media?: ReactNode;
  className?: string;
}

/**
 * Halo Dental's about band: full-bleed black, a 100px gradient heading (yellow to red),
 * then a small square photo with a short white paragraph and an orange button beside it.
 * On phones the photo is centred between the heading and the text. Always uses the
 * theme's dark palette.
 */
export function HalodentalOpusAbout({ title, text, cta, media, className }: HalodentalOpusAboutProps) {
  return (
    <section className={cn("dark bg-card py-section text-card-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HalodentalOpusHeading title={title} size="mega" gradient className="max-w-[40rem]" />

        <div className="mt-14 grid grid-cols-1 gap-x-5 lg:mt-[6.5rem] lg:grid-cols-12 lg:items-end">
          <div className="mx-auto size-[10.25rem] overflow-hidden rounded-lg bg-muted lg:col-span-2 lg:mx-0 lg:size-auto lg:aspect-square">
            {media}
          </div>
          <div className="mt-11 lg:col-span-3 lg:mt-0 lg:pl-[1.875rem]">
            <p className="text-[1.0625rem] leading-[1.3] lg:text-base lg:leading-normal">{text}</p>
            {cta && (
              <HalodentalOpusButton href={cta.href} className="mt-5">
                {cta.label}
              </HalodentalOpusButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
