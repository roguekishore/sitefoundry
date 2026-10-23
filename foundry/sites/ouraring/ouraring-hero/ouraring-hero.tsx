import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OuraringButton } from "@foundry/ouraring-button";
import { OuraringMedia } from "@foundry/ouraring-media";

export interface OuraringHeroProps {
  /** the title; a "\n" marks the desktop line break */
  title: string;
  /** one or two sentences under the title */
  lede: ReactNode;
  /** the blue pill */
  cta: { label: ReactNode; href: string };
  /** the photo or video filling the hero (cover) */
  media?: ReactNode;
  className?: string;
}

export function OuraringHero({ title, lede, cta, media, className }: OuraringHeroProps) {
  const lines = title.split("\n");
  return (
    <section className={cn("relative isolate flex min-h-[calc(100svh-3.25rem)] flex-col justify-end overflow-clip bg-card text-foreground lg:justify-center", className)}>
      <OuraringMedia media={media} className="absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-page px-gutter pt-[120px] pb-12 text-center lg:pt-0 lg:pb-14 lg:text-left">
        <h1 className="font-display text-[48px] leading-[1.08] font-normal tracking-[-0.015em] lg:text-[80px] lg:leading-[1.1] lg:tracking-[-0.02em]">
          {lines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-6 max-w-[19rem] text-[20px] leading-[1.12] tracking-[-0.01em] lg:mx-0 lg:mt-8 lg:max-w-[29.5rem]">{lede}</p>
        <OuraringButton tone="blue" href={cta.href} className="mt-5 lg:mt-10">
          {cta.label}
        </OuraringButton>
      </div>
    </section>
  );
}
