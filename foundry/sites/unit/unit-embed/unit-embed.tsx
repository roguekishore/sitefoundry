import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UnitButton } from "@foundry/unit-button";

export interface UnitEmbedProps {
  /** the two-line heading */
  heading: string;
  /** a sentence or two under it */
  body: string;
  /** the black pill */
  cta: { label: string; href: string };
  /** the product screenshot that bleeds off the card's right and bottom (630×400 on desktop); an empty frame when empty */
  media?: ReactNode;
  className?: string;
}

/** A wide tinted card: text and a black pill on the left, a screenshot frame bleeding off the right and bottom edges under a cyan glow. */
export function UnitEmbed({ heading, body, cta, media, className }: UnitEmbedProps) {
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pb-16 lg:pb-36">
        <div className="relative isolate overflow-clip rounded-lg bg-muted lg:min-h-[21.75rem]">
          {/* the tint fades out toward the right, where a cyan glow sits behind the screenshot */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-[165deg] from-muted from-25% to-background lg:bg-linear-[120deg]" />
          <div aria-hidden className="absolute -right-24 -bottom-24 -z-10 size-[26rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_45%,transparent),transparent)] lg:-top-48 lg:right-0 lg:bottom-auto lg:size-[36rem]" />

          <div className="relative px-6 pt-8 lg:max-w-[33rem] lg:px-0 lg:pt-16 lg:pb-[4.5rem] lg:pl-[4.5rem]">
            <h2 className="font-display text-[1.640625rem] leading-[1.05] tracking-[-0.02em] lg:text-[2.5rem] lg:leading-none">{heading}</h2>
            <p className="mt-4 max-w-[28rem] text-[0.984rem] leading-[1.45] text-muted-foreground lg:mt-5 lg:text-lg">{body}</p>
            <UnitButton href={cta.href} className="mt-5 lg:mt-6">
              {cta.label}
            </UnitButton>
          </div>

          <div className="relative mt-14 ml-[5.375rem] h-[12.5rem] overflow-clip rounded-tl-lg border-t border-l border-glow/60 bg-card lg:absolute lg:top-10 lg:right-0 lg:mt-0 lg:ml-0 lg:h-auto lg:w-[25.75rem] lg:bottom-0">
            {media && <div className="absolute inset-0">{media}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
