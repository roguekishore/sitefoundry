import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Eyebrow } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  cta: { label: string; href: string };
  /** an underlined link beside the button */
  secondary?: { label: string; href: string };
  /** a small line under the buttons; links in it are bold and underlined */
  note?: ReactNode;
  /** what fills the card (a video or WebGL scene); empty shows a placeholder */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

export function PlumeformV2CtaBand({ eyebrow, title, cta, secondary, note, backdrop, id, className }: PlumeformV2CtaBandProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--accent)_75%,transparent)_45%,color-mix(in_oklab,var(--accent)_75%,transparent)_55%,transparent)] px-gutter py-20 lg:py-24",
        className,
      )}
    >
      <PlumeformV2Reveal className="dark relative isolate mx-auto flex min-h-[37rem] max-w-[calc(var(--page-width)-2*var(--page-gutter))] flex-col items-center justify-center overflow-clip rounded-2xl px-6 py-20 text-center text-foreground shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--background)_70%,transparent)] lg:min-h-[35rem]">
        <PlumeformV2Backdrop media={backdrop} entrance="none" />
        {eyebrow && <PlumeformV2Eyebrow className="mb-6">{eyebrow}</PlumeformV2Eyebrow>}
        <h2 className="max-w-[38rem] font-display text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance lg:text-[3.75rem]">{title}</h2>
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <PlumeformV2Button href={cta.href} arrow size="lg">
            {cta.label}
          </PlumeformV2Button>
          {secondary && (
            <PlumeformV2Button variant="link" href={secondary.href}>
              {secondary.label}
            </PlumeformV2Button>
          )}
        </div>
        {note && (
          <p className="mt-9 max-w-[33rem] text-sm leading-[1.65] text-muted-foreground [&_a]:border-b-2 [&_a]:border-primary [&_a]:font-bold [&_a]:text-foreground">{note}</p>
        )}
      </PlumeformV2Reveal>
    </section>
  );
}
