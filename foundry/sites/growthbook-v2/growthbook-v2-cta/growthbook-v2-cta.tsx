import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2Panel } from "@foundry/growthbook-v2-panel";
import "./growthbook-v2-cta.css";

export interface GrowthbookV2CtaProps {
  title: string;
  body: string;
  /** violet button first, then outline; both get arrows */
  actions: { label: string; href: string; variant?: "primary" | "outline" }[];
  /** the art on the right (image); empty = a soft glow placeholder */
  media?: ReactNode;
  className?: string;
}

export function GrowthbookV2Cta({ title, body, actions, media, className }: GrowthbookV2CtaProps) {
  return (
    <section className={cn("relative isolate bg-background py-20 text-foreground lg:py-32", className)}>
      <GrowthbookV2Panel tone="sky" className="absolute inset-0 -z-10 rounded-none lg:hidden" />
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative">
          <div aria-hidden className="growthbook-v2-cta-outline pointer-events-none absolute inset-0 rounded-xl border border-chart-3/30">
            <span className="growthbook-v2-cta-segment absolute -bottom-px h-px w-2/5" />
            <span className="growthbook-v2-cta-segment-side absolute top-1/3 -left-px h-2/3 w-px" />
          </div>
          <div className="dark relative grid overflow-clip rounded-xl bg-background text-foreground lg:min-h-[37.9375rem] lg:grid-cols-[minmax(0,1fr)_30rem] lg:items-center">
            <div className="order-2 px-5 pb-5 lg:order-1 lg:px-16 lg:py-16">
              <GrowthbookV2Heading size="card" className="max-lg:text-[1.75rem]/[1.3]">
                {title}
              </GrowthbookV2Heading>
              <p className="mt-3 max-w-[24rem] text-lg/[1.5]">{body}</p>
              <div className="mt-14 flex flex-col gap-3 sm:flex-row lg:mt-12">
                {actions.map((a) => (
                  <GrowthbookV2Button key={a.label} href={a.href} variant={a.variant ?? "primary"} arrow className="w-full sm:w-auto">
                    {a.label}
                  </GrowthbookV2Button>
                ))}
              </div>
            </div>
            <div className="order-1 flex justify-end px-5 pt-5 lg:order-2 lg:mr-16 lg:p-0">
              <div className="size-[8rem] lg:size-[30rem] [&>*]:size-full [&>img]:object-contain">
                {media ?? (
                  <div aria-hidden className="size-full rounded-[40%] bg-radial from-foreground/25 via-glow/15 to-transparent blur-sm" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
