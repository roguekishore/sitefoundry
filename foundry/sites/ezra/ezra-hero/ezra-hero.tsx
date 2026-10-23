import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EzraButton } from "@foundry/ezra-button";
import { EzraPlaceholder } from "@foundry/ezra-placeholder";
import "./ezra-hero.css";

export interface EzraLink {
  label: string;
  href: string;
}

export interface EzraHeroProps {
  /** the headline's first line on desktop ("Full-body MRI that") */
  title: string;
  /** plain words that start the second desktop line, before the accent */
  lead?: string;
  /** the italic terracotta words that end the headline */
  accent: string;
  /** the short line under the headline */
  body: string;
  /** the terracotta pill */
  action: EzraLink;
  /** the white notice card under the pill */
  notice?: {
    /** a wordmark at the top of the card (e.g. an EzraLockup) */
    logo?: ReactNode;
    /** one or two lines of text */
    text: string;
    /** the outline pill */
    link: EzraLink;
  };
  /** the tall portrait cut-out at the bottom (an <img>); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Centred serif headline with an italic accent, pill, notice card and a bottom-anchored cut-out. */
export function EzraHero({ title, lead, accent, body, action, notice, media, className }: EzraHeroProps) {
  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="mx-auto box-content flex max-w-page flex-col items-center px-gutter pt-[calc(var(--section-y)*0.65)] pb-14 text-center lg:pt-[calc(var(--section-y)*1.35)] lg:pb-0">
        <h1 className="font-display text-[2rem] leading-[1.1] font-light tracking-[-0.01em] lg:text-[5.5rem] lg:leading-none">
          {title}
          <br className="hidden lg:block" /> {lead}{" "}
          <em className="text-highlight max-lg:block">{accent}</em>
        </h1>
        <p className="mt-6 max-w-[27rem] text-base leading-[1.6] lg:mt-6 lg:text-lg">{body}</p>
        <EzraButton href={action.href} className="mt-11 lg:mt-12">
          {action.label}
        </EzraButton>
        {notice && (
          <div className="mt-22 flex w-full max-w-[36rem] flex-col items-center rounded-lg border border-border bg-card px-6 pt-8 pb-8 text-card-foreground">
            {notice.logo && <div className="text-[1.5rem] lg:text-[1.65rem]">{notice.logo}</div>}
            <p className="mt-6 max-w-[24rem] text-base leading-[1.6]">{notice.text}</p>
            <EzraButton href={notice.link.href} variant="outline" className="mt-4">
              {notice.link.label}
            </EzraButton>
          </div>
        )}
        <div className="relative mt-34 aspect-[366/662] w-[17rem] lg:mt-36 lg:w-[23rem]">
          {media ?? (
            <>
              <EzraPlaceholder tone="wash" className="absolute inset-0" />
              <div aria-hidden className="ezra-hero-wash absolute inset-0 bg-highlight/12" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
