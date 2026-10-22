import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerButton } from "@foundry/superpower-button";
import { SuperpowerFacts, type SuperpowerFact } from "@foundry/superpower-facts";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerCloserProps {
  /** a small line above the headline (a rating) */
  eyebrow?: ReactNode;
  title: string;
  facts?: SuperpowerFact[];
  /** the white pill */
  primary: { label: string; href: string };
  /** the frosted pill */
  secondary?: { label: string; href: string };
  /** the photo or video; empty: a warm placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  /** shown over the lower part of the photo on desktop, below it on phones (the footer) */
  children?: ReactNode;
  className?: string;
}

export function SuperpowerCloser({ eyebrow, title, facts, primary, secondary, media, mediaLabel, children, className }: SuperpowerCloserProps) {
  return (
    <section className={cn("relative overflow-clip", className)}>
      <div className="dark absolute inset-x-0 top-0 h-[32rem] lg:bottom-0 lg:h-auto">
        <SuperpowerMedia media={media} tone="warm" label={mediaLabel} className="size-full" />
      </div>
      <div className="dark relative flex h-[32rem] flex-col justify-center text-foreground lg:block lg:h-auto lg:pt-[4.3rem] lg:pb-[15rem]">
        <div className="mx-auto w-full max-w-page px-gutter">
          {eyebrow && <div className="text-[0.8125rem]">{eyebrow}</div>}
          <h2 className="mt-4 max-w-[19rem] text-[2rem] lg:max-w-[34rem] leading-[1.05] font-normal tracking-[-0.03em] lg:text-[3.5rem]">{title}</h2>
          {facts && facts.length > 0 && <SuperpowerFacts items={facts} className="mt-5 max-w-[20rem] lg:mt-6 lg:max-w-none" />}
          <div className="mt-7 flex flex-wrap gap-2.5 lg:mt-8 lg:gap-4">
            <SuperpowerButton href={primary.href}>{primary.label}</SuperpowerButton>
            {secondary && (
              <SuperpowerButton href={secondary.href} variant="glass">
                {secondary.label}
              </SuperpowerButton>
            )}
          </div>
        </div>
      </div>
      {children && <div className="relative lg:px-[1.375rem] lg:pb-[1.375rem]">{children}</div>}
    </section>
  );
}
