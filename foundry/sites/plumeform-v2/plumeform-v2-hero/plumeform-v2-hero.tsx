import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import "./plumeform-v2-hero.css";

export interface PlumeformV2HeroProps {
  /** the headline */
  title: ReactNode;
  /** the lead paragraph */
  lead: ReactNode;
  /** the pill button */
  cta: { label: string; href: string };
  /** the small labels in the frame's top strip: left and right */
  frameLabel?: string;
  frameNote?: string;
  /** what fills the frame (an embedded form, a video, a screenshot); empty shows a placeholder */
  media?: ReactNode;
  /** what fills the dark band (a video or WebGL scene); empty shows a placeholder */
  backdrop?: ReactNode;
  className?: string;
}

export function PlumeformV2Hero({ title, lead, cta, frameLabel, frameNote, media, backdrop, className }: PlumeformV2HeroProps) {
  return (
    <section className={cn("relative isolate overflow-x-clip bg-background pb-12 lg:pb-0", className)}>
      {/* the dark band; on desktop it stops above the frame's foot so the frame overhangs it */}
      <div className="dark absolute inset-x-0 top-0 bottom-0 -z-10 lg:bottom-[4.75rem]">
        <PlumeformV2Backdrop media={backdrop} entrance="load" veil />
      </div>

      <div className="dark px-gutter pt-[6.75rem] text-center text-foreground lg:pt-[8.5rem]">
        <h1 className="plumeform-v2-hero-settle mx-auto max-w-5xl font-display text-5xl leading-[1.04] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.5rem] lg:leading-[1.08]">
          {title}
        </h1>
        <p className="plumeform-v2-hero-settle mx-auto mt-7 max-w-3xl text-lg leading-[1.65] text-foreground/75 lg:mt-6 lg:text-xl">{lead}</p>
        <div className="plumeform-v2-hero-rise mt-9 flex justify-center lg:mt-10" style={{ animationDelay: "120ms" }}>
          <PlumeformV2Button href={cta.href} arrow className="px-6">
            {cta.label}
          </PlumeformV2Button>
        </div>
      </div>

      <div className="relative mt-2 px-gutter lg:mt-10">
        <div className="plumeform-v2-hero-grow relative mx-auto w-full max-w-[64rem]">
          {/* a soft light behind the frame that fades as it grows */}
          <span aria-hidden className="plumeform-v2-hero-glow absolute -inset-8 -z-10 rounded-[3rem] bg-glow opacity-0 blur-3xl" />
          <div
            className="plumeform-v2-hero-rise relative aspect-[342/680] overflow-clip rounded-[1.75rem] p-[3px] shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--foreground)_55%,transparent)] sm:aspect-[4/3] lg:aspect-[1026/670]"
            style={{ animationDelay: "220ms" }}
          >
            {/* the halo: a conic gradient spinning behind the 3px rim */}
            <span aria-hidden className="absolute inset-0 overflow-clip rounded-[inherit]">
              <span className="plumeform-v2-hero-halo absolute -inset-full bg-[conic-gradient(from_0deg,var(--glow),var(--chart-5),var(--glow),var(--chart-3),var(--glow))]" />
            </span>
            <div className="relative flex h-full flex-col overflow-clip rounded-[calc(1.75rem-3px)] bg-card text-card-foreground">
              {(frameLabel || frameNote) && (
                <div className="flex items-center justify-between gap-4 px-4 pt-3 text-[0.625rem] lg:px-6 lg:text-[0.6875rem]">
                  <span className="font-semibold">{frameLabel}</span>
                  <span className="text-muted-foreground">{frameNote}</span>
                </div>
              )}
              <div className="relative m-2 flex-1 overflow-clip rounded-[1.25rem] lg:m-3 [&>*]:size-full">
                {media ?? <div className="bg-muted/70" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
