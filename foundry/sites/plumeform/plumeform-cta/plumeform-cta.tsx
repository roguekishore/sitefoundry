import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformCtaProps {
  eyebrow?: string;
  title: ReactNode;
  /** the paper pill button */
  cta: { label: string; href: string; arrow?: boolean };
  /** an underlined text link beside it */
  secondary?: { label: string; href: string };
  /** small text under the buttons (links inside show bold and underlined) */
  note?: ReactNode;
  /** art behind the card (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

/** A dark rounded closing card, centred heading and buttons, floating in a pale mint band. */
export function PlumeformCta({ eyebrow, title, cta, secondary, note, backdrop, id, className }: PlumeformCtaProps) {
  return (
    <section id={id} className={cn("bg-linear-to-b from-background via-accent to-background px-gutter py-20 lg:py-24", className)}>
      <PlumeformReveal className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformBand
          as="div"
          backdrop={backdrop}
          className="rounded-2xl px-6 py-24 text-center shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--foreground)_60%,transparent)] lg:min-h-[33rem] lg:py-32"
        >
          {eyebrow && <p className="text-[0.72rem] font-bold tracking-[0.22em] text-muted-foreground uppercase">{eyebrow}</p>}
          <h2 className="mx-auto mt-6 max-w-[38rem] font-display text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance lg:text-[3.75rem]">{title}</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <PlumeformButton href={cta.href} size="lg" arrow={cta.arrow ?? true}>
              {cta.label}
            </PlumeformButton>
            {secondary && (
              <a href={secondary.href} className="border-b-2 border-highlight pb-0.5 text-[0.9375rem] font-bold transition-colors duration-200 hover:text-highlight">
                {secondary.label}
              </a>
            )}
          </div>
          {note && (
            <div className="mx-auto mt-8 max-w-[33rem] text-sm leading-6 text-muted-foreground [&_a]:border-b [&_a]:border-highlight [&_a]:font-bold [&_a]:text-foreground">{note}</div>
          )}
        </PlumeformBand>
      </PlumeformReveal>
    </section>
  );
}
