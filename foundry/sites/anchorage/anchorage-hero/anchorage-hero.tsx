import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./anchorage-hero.css";

export interface AnchorageHeroProps {
  /** the small bold caps line above the headline */
  eyebrow?: string;
  /** the headline, set huge and thin in metallic silver */
  title: string;
  /** one sentence under the headline */
  subtitle?: string;
  /** the art behind the hero (image, video, canvas), as tall as the window; empty shows a soft glow placeholder */
  art?: ReactNode;
  /** the left product panel (about 340×418); empty shows a placeholder panel */
  cardLeft?: ReactNode;
  /** the right product panel (about 348×428), raised above the left one; empty shows a placeholder panel */
  cardRight?: ReactNode;
  /** hide the two panels (phones never show them) */
  hideCards?: boolean;
  className?: string;
}

function PanelSlot({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-clip rounded-xl border border-highlight/45 bg-linear-to-b from-background/90 to-card/25 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Centred black hero with a metallic headline and two staggered product panels. */
export function AnchorageHero({ eyebrow, title, subtitle, art, cardLeft, cardRight, hideCards, className }: AnchorageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      {/* window-tall art behind the text (390×533 frame on phones) */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[33.3rem] lg:h-svh [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">
        {art ?? (
          <div aria-hidden className="size-full bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,color-mix(in_oklab,var(--glow)_55%,transparent),transparent_70%)]" />
        )}
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[10.7rem] pb-[8.75rem] text-center lg:pt-[15.875rem] lg:pb-[5.5rem]">
        {eyebrow && <p className="text-xs leading-[1.8] font-bold uppercase">{eyebrow}</p>}
        <h1 className="anchorage-hero-title mt-2 max-w-[22rem] font-display text-[3rem] leading-[1.16] font-[350] tracking-[0.005em] sm:max-w-none lg:mt-3 lg:text-[6rem] lg:leading-[1.15]">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-[21rem] text-base leading-[1.6] font-medium sm:max-w-none sm:text-lg lg:mt-6 lg:text-[1.69rem] lg:leading-[1.3]">{subtitle}</p>}

        {!hideCards && (
          <div className="mt-14 hidden items-start justify-center gap-[3.125rem] md:flex lg:mt-[3.75rem]">
            <PanelSlot className="mt-[4.2rem] h-[26.1rem] w-[21.25rem]">{cardLeft}</PanelSlot>
            <PanelSlot className="h-[26.75rem] w-[21.75rem]">{cardRight}</PanelSlot>
          </div>
        )}
      </div>
    </section>
  );
}
