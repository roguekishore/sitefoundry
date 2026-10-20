import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformGlassCard } from "@foundry/plumeform-glass-card";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformCardGridCard {
  /** a line icon (e.g. from lucide-react) above the title */
  icon?: ReactNode;
  /** small mint capitals above the title */
  eyebrow?: string;
  title: string;
  /** a tier tag after the title, e.g. "Plus" */
  badge?: string;
  text: ReactNode;
}

export interface PlumeformCardGridProps {
  eyebrow?: string;
  title: ReactNode;
  /** the paragraph under the title */
  body?: ReactNode;
  /** centre the heading (and button row) or keep it on the left */
  align?: "center" | "start";
  /** a pill button under the heading */
  cta?: { label: string; href: string };
  /** a short line beside the button (under it on phones) */
  ctaNote?: ReactNode;
  /** the glass cards, three to a row on desktop */
  cards: PlumeformCardGridCard[];
  /** art behind the band (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

/** A dark band with a heading and a grid of glass cards (icon or eyebrow, title, tier tag, text) that rise in one by one. */
export function PlumeformCardGrid({ eyebrow, title, body, align = "center", cta, ctaNote, cards, backdrop, id, className }: PlumeformCardGridProps) {
  const center = align === "center";
  return (
    <PlumeformBand id={id} backdrop={backdrop} className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading eyebrow={eyebrow} title={title} align={align} className={center ? "max-w-[44rem]" : "max-w-[42rem]"}>
          {body}
        </PlumeformHeading>

        {(cta || ctaNote) && (
          <PlumeformReveal
            step={1}
            className={cn("mt-10 flex flex-col items-center gap-5 lg:flex-row lg:gap-5", center ? "justify-center text-center" : "lg:items-center")}
          >
            {cta && (
              <PlumeformButton href={cta.href} arrow className="h-10 px-6 text-[0.9375rem]">
                {cta.label}
              </PlumeformButton>
            )}
            {ctaNote && <p className="max-w-xs text-sm text-muted-foreground lg:max-w-none [&_strong]:font-bold [&_strong]:text-foreground">{ctaNote}</p>}
          </PlumeformReveal>
        )}

        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <PlumeformReveal key={card.title} as="li" step={i % 3}>
              <PlumeformGlassCard className="h-full px-7 py-8">
                {card.icon && <span className="mb-6 block text-highlight [&_svg]:size-7 [&_svg]:stroke-[1.5]">{card.icon}</span>}
                {card.eyebrow && <p className="mb-4 text-[0.625rem] font-bold tracking-[0.16em] text-highlight uppercase">{card.eyebrow}</p>}
                <h3 className={cn("flex flex-wrap items-center gap-2 font-bold tracking-[-0.02em]", card.eyebrow ? "text-xl" : "text-lg")}>
                  {card.title}
                  {card.badge && <PlumeformBadge>{card.badge}</PlumeformBadge>}
                </h3>
                <div className="mt-3 text-sm leading-[1.65] text-muted-foreground">{card.text}</div>
              </PlumeformGlassCard>
            </PlumeformReveal>
          ))}
        </ul>
      </div>
    </PlumeformBand>
  );
}
