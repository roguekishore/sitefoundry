import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceButton, type ApexspaceButtonProps } from "@foundry/apexspace-button";
import { ApexspaceHeading } from "@foundry/apexspace-heading";

export interface ApexspaceHeroProps {
  /** the headline; a \n starts a new line */
  title: string;
  /** the paragraph in the right column */
  text: string;
  /** the black button under the paragraph */
  cta: Pick<ApexspaceButtonProps, "label" | "href">;
  /** the full-bleed film or photo (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Window-tall hero: dimmed full-bleed media, headline top-left, copy + button right. */
export function ApexspaceHero({ title, text, cta, media, className }: ApexspaceHeroProps) {
  return (
    <section className={cn("relative isolate min-h-svh overflow-clip bg-background text-foreground", className)}>
      <div className="absolute inset-0 -z-10 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">{media ?? <div className="bg-muted" />}</div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/50" />

      <div className="flex flex-col gap-5 px-gutter pt-[7.1rem] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pt-[5.9rem]">
        <ApexspaceHeading as="h1" size="hero" text={title} className="max-w-[48rem]" />
        <div className="flex flex-col items-start gap-5 lg:w-[30rem] lg:shrink-0 lg:gap-4 lg:pt-1">
          <p className="text-[length:clamp(0.875rem,0.82rem_+_0.24vw,1.0625rem)] leading-[1.4]">{text}</p>
          <ApexspaceButton {...cta} variant="dark" />
        </div>
      </div>
    </section>
  );
}
