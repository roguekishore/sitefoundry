import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import { OndoHeading } from "@foundry/ondo-heading";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-nexus.css";

export interface OndoNexusProps {
  /** small label above the heading */
  eyebrow?: string;
  /** heading, first line (white) */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the serif paragraph */
  text: string;
  /** the pale button */
  action: { label: string; href: string };
  /** the tall visual under the button. A faint surface when empty */
  media?: ReactNode;
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";

/** Black band: centred two-tone heading, a pause, a paragraph and button, then a tall visual. */
export function OndoNexus({ eyebrow, lead, trail, text, action, media, className }: OndoNexusProps) {
  return (
    <section className={cn("dark bg-background pt-16 pb-section text-foreground lg:pt-[10.5rem] lg:pb-[11rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <OndoHeading eyebrow={eyebrow} lead={lead} trail={trail} align="center" />
        <p className={cn("ondo-nexus-reveal mt-[10rem] max-w-[29rem] text-center text-lg leading-[1.32] text-foreground/80 lg:mt-[19rem] lg:text-xl lg:leading-[1.32]", serif)}>
          {text}
        </p>
        <OndoButton href={action.href} size="md" className="ondo-nexus-reveal mt-12">
          {action.label}
        </OndoButton>
        <div className="ondo-nexus-reveal mt-40 h-[80svh] w-full overflow-clip rounded-3xl">{media ?? <OndoPlaceholder tone="muted" className="bg-card" />}</div>
      </div>
    </section>
  );
}
