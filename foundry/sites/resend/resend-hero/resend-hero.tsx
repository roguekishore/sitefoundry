import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import { ResendPlaceholder } from "@foundry/resend-placeholder";
import "./resend-hero.css";

export interface ResendHeroProps {
  /** the pill above the title, with a turning rainbow rim */
  badge?: { label: string; href: string };
  /** the title; each entry is a line on wide screens */
  title: string[];
  /** the lead; each entry is a line on wide screens */
  text: string[];
  /** the graphite button */
  primary: { label: string; href: string };
  /** the plain text link beside it */
  secondary?: { label: string; href: string };
  /** the 3D object at the right (on top on phones); empty shows a placeholder */
  object?: ReactNode;
  /** the full-bleed backdrop behind everything (cover); empty shows a soft light wash */
  backdrop?: ReactNode;
  className?: string;
}

export function ResendHero({ badge, title, text, primary, secondary, object, backdrop, className }: ResendHeroProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground lg:flex lg:min-h-svh lg:items-center", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        {backdrop ?? (
          <div className="size-full bg-linear-to-bl from-foreground/[0.09] via-foreground/[0.02] via-35% to-transparent to-60%" />
        )}
      </div>

      <div className="mx-auto flex w-full max-w-page flex-col items-center px-gutter pb-8 lg:flex-row lg:items-center lg:justify-between lg:pb-20 lg:pl-[calc(var(--page-gutter)+4rem)]">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          {badge && (
            <a href={badge.href} className="group/badge relative inline-flex overflow-clip rounded-full p-px">
              <span
                aria-hidden
                className="resend-hero-rim absolute top-1/2 left-1/2 aspect-square w-[300%] -translate-1/2 bg-conic from-chart-5/70 via-highlight/70 via-50% to-chart-3/70"
              />
              <span className="relative flex h-[1.875rem] items-center gap-1.5 rounded-full bg-background/95 px-3 text-sm text-foreground transition-colors duration-200 group-hover/badge:bg-background/80">
                {badge.label}
                <ChevronRight aria-hidden className="size-3.5 opacity-70" strokeWidth={2} />
              </span>
            </a>
          )}
          <h1 className="mt-9 bg-linear-to-br from-foreground from-30% to-foreground/50 bg-clip-text pb-2 font-[family-name:var(--resend-serif,var(--typeface-display))] text-[4rem] leading-none font-normal tracking-[-0.035em] text-transparent lg:mt-10 lg:text-[6rem]">
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[29rem] text-base leading-7 text-muted-foreground lg:mt-4 lg:max-w-none lg:text-lg lg:leading-[1.5]">
            {text.map((line, i) => (
              <span key={i} className="lg:block">
                {line}
                {i < text.length - 1 && " "}
              </span>
            ))}
          </p>
          <div className="mt-8 flex w-full flex-col gap-4 lg:mt-8 lg:w-auto lg:flex-row lg:items-center">
            <ResendButton href={primary.href} className="w-full lg:w-auto">
              {primary.label}
            </ResendButton>
            {secondary && (
              <ResendButton href={secondary.href} variant="ghost">
                {secondary.label}
              </ResendButton>
            )}
          </div>
        </div>

        <div className="relative order-1 size-[14rem] shrink-0 lg:order-2 lg:-mr-8 lg:h-[31.375rem] lg:w-[37rem]">
          {object ?? <ResendPlaceholder className="absolute inset-0 rounded-2xl" />}
        </div>
      </div>
    </section>
  );
}
