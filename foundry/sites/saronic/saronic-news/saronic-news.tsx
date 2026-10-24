import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton, type SaronicButtonProps } from "@foundry/saronic-button";
import { SaronicPlaceholder } from "@foundry/saronic-placeholder";

export interface SaronicNewsProps {
  /** the mono caption at the top of the card ("News") */
  eyebrow: ReactNode;
  /** the story's headline */
  title: ReactNode;
  /** one or two sentences under it */
  body?: ReactNode;
  /** the button under the text */
  cta?: { label: ReactNode; href: string; icon?: SaronicButtonProps["icon"]; external?: boolean };
  /** the story's photo; empty it is a placeholder */
  media?: ReactNode;
  /** the photo's shape on phones, under the text: 4:3 or a wide 16:9 */
  mobileAspect?: "4/3" | "16/9";
  className?: string;
}

/**
 * A news card on a slate band: a hairline-framed half with a mono caption and a lime dot at
 * the top and the headline, a short paragraph and a lime button at the bottom, beside a photo
 * the same height. Phones stack the text over a 4:3 (or 16:9) photo.
 */
export function SaronicNews({ eyebrow, title, body, cta, media, mobileAspect = "4/3", className }: SaronicNewsProps) {
  return (
    <section className={cn("dark bg-background p-5 text-foreground lg:p-10", className)}>
      <article className="grid lg:grid-cols-2">
        <div className="flex flex-col rounded-t-lg border border-border p-6 lg:justify-between lg:rounded-l-lg lg:rounded-tr-none lg:border-r-0 lg:p-10">
          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-xs/[1.5] tracking-[0.06em] uppercase">{eyebrow}</p>
            <span aria-hidden className="size-2 shrink-0 rounded-full bg-primary" />
          </div>
          <div className="mt-16 lg:mt-24">
            <h3 className="font-display text-2xl/[1.2] font-normal tracking-[-0.02em] [word-spacing:-0.08em] text-balance lg:text-[2.5rem]/[1.2]">{title}</h3>
            {body && <p className="mt-4 text-base/[1.4] text-foreground/80 [word-spacing:-0.05em] lg:mt-3 lg:max-w-[36rem] lg:text-lg/[1.4]">{body}</p>}
            {cta && (
              <SaronicButton href={cta.href} icon={cta.icon ?? "external"} external={cta.external} className="mt-6">
                {cta.label}
              </SaronicButton>
            )}
          </div>
        </div>
        <SaronicPlaceholder
          media={media}
          className={cn(
            mobileAspect === "16/9" ? "aspect-video" : "aspect-[4/3]",
            "rounded-b-lg lg:aspect-[680/620] lg:rounded-r-lg lg:rounded-bl-none",
          )}
        />
      </article>
    </section>
  );
}
