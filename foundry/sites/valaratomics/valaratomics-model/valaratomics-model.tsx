import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsButton } from "@foundry/valaratomics-button";
import { ValaratomicsIntro } from "@foundry/valaratomics-intro";
import { ValaratomicsPlaceholder } from "@foundry/valaratomics-placeholder";
import "./valaratomics-model.css";

export interface ValaratomicsModelProps {
  /** the heading on the card */
  title: string;
  /** the paragraph beside it */
  body: string;
  /** the framed button under the paragraph */
  cta?: { label: string; href: string };
  /** the image or video filling the card (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A big black card with 8px corners, inset by the page gutter on the page grey and 85% of
 * the window tall on desktop. Heading on the left half, paragraph and a gold-framed button
 * on the right, over a picture that fills the card under a black fade from the top. The
 * picture rises and settles in as the card enters.
 */
export function ValaratomicsModel({ title, body, cta, media, className }: ValaratomicsModelProps) {
  return (
    <section className={cn("bg-background px-gutter", className)}>
      <div className="valaratomics-model-card dark relative isolate mx-auto max-w-page overflow-clip rounded-lg bg-background text-foreground ring-1 ring-border/40 ring-inset lg:h-[85svh] lg:min-h-[36rem]">
        <div className="valaratomics-model-media absolute inset-0 -z-10 origin-bottom [&>*]:size-full [&_img]:object-cover [&_video]:object-cover">
          {media ?? <ValaratomicsPlaceholder />}
        </div>
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-linear-to-b from-background to-transparent" />
        <div className="px-[1.6875rem] pt-[8.75rem] pb-[25rem] lg:px-[5.9vw] lg:pt-[9rem] lg:pb-section">
          <ValaratomicsIntro
            title={title}
            body={
              <>
                <p>{body}</p>
                {cta && <ValaratomicsButton label={cta.label} href={cta.href} className="mt-14" />}
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
