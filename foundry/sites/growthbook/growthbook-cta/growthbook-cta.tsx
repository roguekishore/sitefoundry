import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import "./growthbook-cta.css";

export interface GrowthbookCtaProps {
  title: string;
  body: string;
  /** violet button with an arrow */
  primary: { label: string; href: string };
  /** outline button with an arrow */
  secondary?: { label: string; href: string };
  /** art on the right (img/svg); a soft glow when empty */
  art?: ReactNode;
  /** fills the band behind the card (img); a soft violet/mint gradient when empty */
  backdrop?: ReactNode;
  className?: string;
}

export function GrowthbookCta({ title, body, primary, secondary, art, backdrop, className }: GrowthbookCtaProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background", className)}>
      <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
        {backdrop ?? (
          <div className="bg-[radial-gradient(ellipse_70%_45%_at_15%_105%,var(--highlight),transparent_70%),radial-gradient(ellipse_80%_60%_at_60%_100%,var(--glow),transparent_70%),radial-gradient(ellipse_60%_50%_at_90%_0%,var(--primary),transparent_70%),radial-gradient(ellipse_50%_40%_at_0%_20%,var(--glow),transparent_70%)] opacity-90" />
        )}
      </div>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter py-20 md:px-[calc(var(--page-gutter)*2)] lg:py-32">
        <div className="dark relative flex min-h-[34rem] flex-col overflow-clip rounded-lg bg-background px-5 pt-[14.5rem] pb-5 text-foreground lg:min-h-[37.9375rem] lg:justify-center lg:px-16 lg:py-16">
          {/* edge light: fixed on the left edge's lower half, drifting along the bottom */}
          <span aria-hidden className="absolute bottom-0 left-0 h-1/2 w-px bg-linear-to-b from-transparent to-highlight" />
          <span aria-hidden className="growthbook-cta-edge absolute bottom-0 h-px w-[56%] bg-linear-to-r from-highlight via-chart-2 to-transparent" />

          <div className="absolute top-8 right-12 size-28 lg:top-1/2 lg:right-16 lg:size-[30rem] lg:-translate-y-1/2 [&>*]:size-full">
            {art ?? <div className="rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_35%,transparent),transparent_65%)]" />}
          </div>

          <div className="relative max-w-[30rem]">
            <h2 className="font-display text-[1.75rem] leading-[1.25] font-normal lg:text-5xl lg:leading-[1.2]">{title}</h2>
            <p className="mt-3 text-lg leading-[1.5]">{body}</p>
            <div className="mt-14 flex flex-col gap-3 md:flex-row lg:mt-12">
              <GrowthbookButton href={primary.href} arrow blockOnMobile>
                {primary.label}
              </GrowthbookButton>
              {secondary && (
                <GrowthbookButton href={secondary.href} variant="outline" arrow blockOnMobile className="border-foreground/80 hover:border-foreground">
                  {secondary.label}
                </GrowthbookButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
