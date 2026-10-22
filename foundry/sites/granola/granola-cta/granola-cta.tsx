import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GranolaButton } from "@foundry/granola-button";
import { GranolaMedia } from "@foundry/granola-media";
import { GranolaWindow } from "@foundry/granola-window";
import "./granola-cta.css";

export interface GranolaCtaProps {
  /** the big serif headline in the card */
  title: string;
  /** a short paragraph under it */
  body: string;
  /** the ink button */
  primary: { label: string; href: string };
  /** the outline button beside it */
  secondary?: { label: string; href: string };
  /** the full-bleed art behind the card; a two-tone placeholder while empty */
  backdrop?: ReactNode;
  className?: string;
}

export function GranolaCta({ title, body, primary, secondary, backdrop, className }: GranolaCtaProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      <div className="granola-cta-backdrop absolute inset-0 -z-10">
        <GranolaMedia tone="field" className="size-full">
          {backdrop}
        </GranolaMedia>
      </div>
      <div className="px-gutter pt-16 lg:pt-24">
        <GranolaWindow className="mx-auto max-w-[48rem] rounded-b-none shadow-[0_4px_50px_color-mix(in_oklab,var(--foreground)_25%,transparent)] lg:rounded-b-none lg:shadow-none">
          <div className="px-6 pt-10 pb-16 lg:px-12 lg:pt-16 lg:pb-24">
            <h2 className="max-w-[11ch] font-display text-4xl leading-[0.95] tracking-[-0.01em] lg:text-[5.4rem] lg:leading-[0.98]">{title}</h2>
            <p className="mt-6 max-w-[36ch] text-base leading-snug lg:mt-14 lg:text-[1.375rem] lg:leading-[1.45]">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-5">
              <GranolaButton href={primary.href} trailingIcon={<ArrowDown />} className="h-12 text-base sm:w-fit lg:h-14">
                {primary.label}
              </GranolaButton>
              {secondary && (
                <GranolaButton href={secondary.href} variant="outline" className="h-12 text-base sm:w-fit lg:h-14">
                  {secondary.label}
                </GranolaButton>
              )}
            </div>
          </div>
        </GranolaWindow>
      </div>
    </section>
  );
}
