import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2Badge } from "@foundry/plumeform-v2-badge";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2GlassCard } from "@foundry/plumeform-v2-glass-card";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2GridCard {
  /** a line icon (e.g. from lucide-react), drawn in mint */
  icon?: ReactNode;
  /** small mint capitals above the title */
  eyebrow?: string;
  title: string;
  /** a badge after the title (e.g. a plan name) */
  badge?: string;
  body: string;
}

export interface PlumeformV2CardGridProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** heading alignment */
  align?: "left" | "center";
  /** a pill button under the heading */
  cta?: { label: string; href: string };
  /** a short line beside the button */
  note?: ReactNode;
  cards: PlumeformV2GridCard[];
  /** what fills the band (a video or WebGL scene); empty shows a placeholder */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

export function PlumeformV2CardGrid({
  eyebrow,
  title,
  body,
  align = "center",
  cta,
  note,
  cards,
  backdrop,
  id,
  className,
}: PlumeformV2CardGridProps) {
  const centred = align === "center";
  return (
    <section id={id} className={cn("dark relative isolate overflow-clip px-gutter py-[calc(var(--section-y)*0.85)] text-foreground lg:py-section", className)}>
      <PlumeformV2Backdrop media={backdrop} />
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Heading
          eyebrow={eyebrow}
          title={title}
          body={body}
          align={align}
          className={cn(centred ? "mx-auto max-w-3xl [&_h2]:mx-auto [&_h2]:max-w-2xl" : "max-w-2xl")}
        />
        {(cta || note) && (
          <PlumeformV2Reveal
            step={1}
            className={cn("mt-9 flex flex-col gap-5 sm:flex-row sm:items-center", centred && "items-center justify-center text-center sm:text-left")}
          >
            {cta && (
              <PlumeformV2Button href={cta.href} arrow className="px-6">
                {cta.label}
              </PlumeformV2Button>
            )}
            {note && <p className="text-sm text-muted-foreground [&_strong]:font-bold [&_strong]:text-foreground">{note}</p>}
          </PlumeformV2Reveal>
        )}
        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <PlumeformV2GlassCard as="li" key={card.title} step={i % 3} className="p-7 lg:p-8">
              {card.icon && <span className="block text-highlight [&_svg]:size-7 [&_svg]:stroke-[1.5]">{card.icon}</span>}
              {card.eyebrow && (
                <p className="text-[0.625rem] font-bold tracking-[0.2em] text-highlight uppercase">{card.eyebrow}</p>
              )}
              <h3 className={cn("flex flex-wrap items-center gap-2 text-lg font-bold tracking-[-0.02em] lg:text-[1.1875rem]", card.icon ? "mt-6" : "mt-4 text-xl lg:text-[1.375rem]")}>
                {card.title}
                {card.badge && <PlumeformV2Badge>{card.badge}</PlumeformV2Badge>}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">{card.body}</p>
            </PlumeformV2GlassCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
