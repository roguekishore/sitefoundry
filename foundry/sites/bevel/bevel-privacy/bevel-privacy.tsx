import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { bevelLead, bevelTitle } from "@foundry/bevel-heading";
import "./bevel-privacy.css";

export interface BevelPrivacyProps {
  /** the title, one line on desktop */
  title: ReactNode;
  /** the paragraph under it */
  text: ReactNode;
  /** the big emblem behind the text (an illustration); a faint rounded shape when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A single wide charcoal card with 32px corners, lit by a deep green glow along its sides and
 * lower corners: a big emblem rises from the bottom edge behind a centered white title and a
 * grey paragraph, and a fine dot grid fades in over it as the card comes into view.
 */
export function BevelPrivacy({ title, text, media, className }: BevelPrivacyProps) {
  return (
    <section className={cn("bg-background py-10 lg:py-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2)]">
        <div className="relative isolate flex h-[33.5rem] flex-col items-center justify-center overflow-clip rounded-[calc(var(--radius)*2)] bg-foreground px-8 text-center text-background lg:h-[40.625rem]">
          <div aria-hidden className="bevel-privacy-glow absolute inset-0 -z-20" />
          <div aria-hidden className="absolute top-[8%] left-1/2 -z-10 h-[105%] w-[82%] -translate-x-1/2 lg:top-0 lg:w-[34rem]">
            {media ?? <div className="size-full rounded-[3rem] bg-background/4 ring-2 ring-background/10 lg:rounded-[4.5rem]" />}
            <div className="bevel-privacy-dots absolute inset-[12%] bg-[radial-gradient(circle,color-mix(in_oklab,var(--background)_22%,transparent)_1px,transparent_1.5px)] bg-size-[14px_14px] [mask-image:radial-gradient(ellipse_at_50%_55%,black,transparent_70%)]" />
          </div>
          <h2 className={cn(bevelTitle.lg, "max-w-[11ch] text-balance lg:max-w-none")}>{title}</h2>
          <p className={cn(bevelLead, "mt-4 max-w-[19rem] text-balance text-background/60 lg:max-w-[34rem]")}>{text}</p>
        </div>
      </div>
    </section>
  );
}
