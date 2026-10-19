import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";
import { HalodentalSonnetHeading } from "@foundry/halodental-sonnet-heading";
import { HalodentalSonnetMedia } from "@foundry/halodental-sonnet-media";

export interface HalodentalSonnetStatementProps {
  /** the giant orange statement; a list sets the line breaks */
  title: string | string[];
  /** the paragraph beside the photo */
  text: string;
  /** the orange button */
  action: { label: string; href: string };
  /** the small photo. Empty shows the placeholder. */
  media?: ReactNode;
  className?: string;
}

/** A black band: a huge orange statement, then a small photo, a paragraph and a button. */
export function HalodentalSonnetStatement({ title, text, action, media, className }: HalodentalSonnetStatementProps) {
  return (
    <section className={cn("dark bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        <HalodentalSonnetHeading size="giant" title={title} className="text-primary" />
        <div className="mt-14 flex flex-col items-start gap-5 pb-[calc(var(--section-y)*2.5)] max-lg:mx-auto max-lg:max-w-[22rem] sm:flex-row sm:items-end sm:gap-12 lg:mt-24 lg:pb-0">
          <HalodentalSonnetMedia ratio="1.38" tone="dark" className="w-full max-w-[15.5rem] shrink-0 max-sm:max-w-[10.5rem] max-sm:self-center">
            {media}
          </HalodentalSonnetMedia>
          <div className="flex max-w-[20.5rem] flex-col items-start gap-4 sm:gap-5">
            <p className="text-[0.9rem] leading-[1.5] lg:text-base">{text}</p>
            <HalodentalSonnetButton href={action.href} size="sm">
              {action.label}
            </HalodentalSonnetButton>
          </div>
        </div>
      </div>
    </section>
  );
}
