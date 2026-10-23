import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import { OndoHeading } from "@foundry/ondo-heading";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-cta.css";

export interface OndoCtaProps {
  /** heading, first line */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the button */
  action: { label: string; href: string };
  /** the photo. A mid-grey surface when empty */
  media?: ReactNode;
  className?: string;
}

/** Closing photo card with the heading and button in its corner. */
export function OndoCta({ lead, trail, action, media, className }: OndoCtaProps) {
  return (
    <section className={cn("bg-background pt-[8rem] lg:px-[calc(var(--page-gutter)*2.75)] lg:pt-0", className)}>
      <div className="ondo-cta-text mb-10 px-gutter lg:hidden">
        <OndoHeading lead={lead} trail={trail} reveal={false} />
        <OndoButton href={action.href} size="md" className="mt-6">
          {action.label}
        </OndoButton>
      </div>
      <div className="ondo-cta-card dark relative mx-auto h-[31rem] max-w-[84.5rem] overflow-clip lg:h-[43.75rem] lg:rounded-3xl">
        <div className="ondo-cta-photo absolute inset-0">{media ?? <OndoPlaceholder tone="photo" />}</div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />
        <div className="ondo-cta-text absolute bottom-0 left-0 hidden p-12 lg:block">
          <OndoHeading lead={lead} trail={trail} reveal={false} />
          <OndoButton href={action.href} size="md" className="mt-8">
            {action.label}
          </OndoButton>
        </div>
      </div>
    </section>
  );
}
