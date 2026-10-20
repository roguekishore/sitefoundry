import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";
import "./growthbook-v2-cost.css";

export interface GrowthbookV2CostMarker {
  /** the chip's text, e.g. "4x tests" */
  label: string;
  /** a small line icon in the glowing dot */
  icon?: ReactNode;
}

export interface GrowthbookV2CostProps {
  /** the heading; \n for line breaks */
  title: string;
  body: string;
  action: { label: string; href: string };
  /** the upper (violet) and lower (green) chips */
  markers: [GrowthbookV2CostMarker, GrowthbookV2CostMarker];
  /** the chart drawing (image or svg); empty = a faint placeholder wash */
  media?: ReactNode;
  className?: string;
}

function Marker({ marker, tone, className }: { marker: GrowthbookV2CostMarker; tone: "violet" | "green"; className?: string }) {
  return (
    <div className={cn("absolute right-0 flex items-center gap-8 lg:gap-9", className)}>
      <span className="rounded-md bg-card px-3.5 py-2.5 text-sm text-card-foreground shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_6%,transparent)]">
        {marker.label}
      </span>
      <span
        className={cn(
          "growthbook-v2-cost-dot flex size-9 items-center justify-center rounded-full text-primary-foreground [&_svg]:size-4",
          tone === "violet" ? "growthbook-v2-cost-dot-violet bg-primary" : "growthbook-v2-cost-dot-green bg-chart-3",
        )}
      >
        {marker.icon}
      </span>
    </div>
  );
}

export function GrowthbookV2Cost({ title, body, action, markers, media, className }: GrowthbookV2CostProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative grid border-l border-border pt-24 pb-16 lg:grid-cols-2 lg:pt-36 lg:pb-24">
          <GrowthbookV2RailAccent />
          <div className="pl-4 lg:pl-9">
            <GrowthbookV2Heading className="whitespace-pre-line">{title}</GrowthbookV2Heading>
            <p className="mt-6 max-w-[34rem] text-sm/[1.65] text-foreground/85 lg:mt-12 lg:text-base/[1.65]">{body}</p>
            <GrowthbookV2Button href={action.href} arrow fullOnMobile className="mt-8 lg:mt-12">
              {action.label}
            </GrowthbookV2Button>
          </div>
          <div className="relative mt-12 mr-6 ml-8 h-[18rem] lg:mt-0 lg:mr-20 lg:ml-28 lg:h-[30rem]">
            {media ? (
              <div className="absolute inset-0 [&>*]:size-full [&>img]:object-contain">{media}</div>
            ) : (
              <div aria-hidden className="absolute inset-x-0 top-[12%] bottom-0 rounded-xl bg-linear-to-tr from-chart-4/15 via-transparent to-glow/15" />
            )}
            <div aria-hidden className="absolute inset-x-0 top-[12%] bottom-0 flex justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="w-px bg-linear-to-b from-transparent via-border/70 to-border/40" />
              ))}
            </div>
            <Marker marker={markers[0]} tone="violet" className="-top-1 lg:top-0" />
            <Marker marker={markers[1]} tone="green" className="-bottom-5 lg:-bottom-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
