import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BridgeButton } from "@foundry/bridge-button";
import { BridgePlaceholder } from "@foundry/bridge-placeholder";

export interface BridgeCtaProps {
  /** the dark first line */
  title: string;
  /** the grey line under it */
  text: string;
  /** the small underline link */
  link: { label: string; href: string };
  /** a blurred photo band behind the card, faded at top and bottom; a soft wash when empty */
  backdrop?: ReactNode;
  className?: string;
}

/** Bridge's white closing card on a fading colour band. */
export function BridgeCta({ title, text, link, backdrop, className }: BridgeCtaProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[6.25rem] pb-[6.25rem] text-card-foreground lg:pt-[5.9375rem] lg:pb-[11.125rem]", className)}>
      <div className="absolute inset-x-0 inset-y-0 -z-10 mask-y-from-60% mask-y-to-95% lg:top-6 lg:bottom-20 lg:mask-y-from-65% [&>*]:size-full [&>*]:object-cover">
        {backdrop ?? <BridgePlaceholder tone="sky" />}
      </div>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex min-h-[31.125rem] flex-col items-start rounded-lg bg-card px-10 pt-[6.875rem] pb-12 lg:mx-16 lg:min-h-0 lg:flex-row lg:justify-between lg:gap-10 lg:px-40 lg:pt-[9.5rem] lg:pb-[7.75rem]">
          <div>
            <h2 className="font-display text-[1.625rem]/[1.1] font-normal tracking-[-0.035em] lg:text-[2rem]/[1.1]">{title}</h2>
            <p className="mt-7 max-w-[35rem] font-display text-[1.625rem]/[1.1] tracking-[-0.035em] text-muted-foreground lg:mt-8 lg:text-[2rem]/[1.1]">{text}</p>
          </div>
          <BridgeButton href={link.href} variant="link" className="mt-10 lg:mt-0">
            {link.label}
          </BridgeButton>
        </div>
      </div>
    </section>
  );
}
