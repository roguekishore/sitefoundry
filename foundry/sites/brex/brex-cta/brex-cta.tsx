import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexCtaProps {
  title: string;
  text: string;
  /** the orange button */
  button: { label: string; href: string };
  /** the photo. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** The closing call to action: dark text half, photo half. */
export function BrexCta({ title, text, button, media, className }: BrexCtaProps) {
  return (
    <section className={cn("grid lg:min-h-[53svh] lg:grid-cols-2", className)}>
      <div className="relative aspect-[390/286] lg:order-2 lg:aspect-auto">
        {media ?? <BrexPlaceholder tone="photo" className="absolute inset-0" />}
      </div>
      <div className="dark flex items-center bg-background px-gutter py-12 text-foreground lg:py-16 lg:pl-[calc(var(--page-gutter)*3)]">
        <div className="max-w-[30rem]">
          <h2 className="font-display text-[1.875rem]/9 font-semibold tracking-[-0.02em] lg:max-w-[24.5rem] lg:text-5xl/12">{title}</h2>
          <p className="mt-4 max-w-[24rem] text-base/6 lg:max-w-[28rem] lg:text-xl/6">{text}</p>
          <BrexButton href={button.href} size="lg" className="mt-8">
            {button.label}
          </BrexButton>
        </div>
      </div>
    </section>
  );
}
