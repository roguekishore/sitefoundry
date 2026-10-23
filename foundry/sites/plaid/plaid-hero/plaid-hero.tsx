import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";
import { PlaidPlaceholder } from "@foundry/plaid-placeholder";
import "./plaid-hero.css";

export interface PlaidHeroProps {
  /** the headline, in gradient type (the line break comes from the width) */
  title: string;
  /** the white sentence under it */
  subtitle: string;
  /** the pale mint pill */
  primary: { label: string; href: string };
  /** the near-black rainbow-rimmed pill */
  secondary: { label: string; href: string };
  /** customer names for the drifting row */
  logos: string[];
  /** the small frosted card at the bottom (desktop) or under the row (phones) */
  announcement?: { label: string; href: string; media?: ReactNode };
  /** the big illustration: right and bleeding off the bottom on desktop, on top on phones. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Plaid's gradient first screen. */
export function PlaidHero({ title, subtitle, primary, secondary, logos, announcement, media, className }: PlaidHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[calc(100svh+1.75rem)] flex-col overflow-clip bg-glow",
        "bg-linear-to-b from-highlight/90 via-glow to-foreground/70 lg:bg-linear-to-br lg:from-foreground/75 lg:via-glow lg:to-highlight",
        "dark:to-background/70 lg:dark:from-background/75 lg:dark:to-highlight",
        className,
      )}
    >
      {/* the illustration: on top on phones (wider than the screen), right half on desktop */}
      <div className="relative mx-[calc(50%-13.3125rem)] mt-[4.75rem] h-80 w-[26.625rem] lg:absolute lg:right-0 lg:bottom-0 lg:z-[-1] lg:m-0 lg:h-[79%] lg:w-[min(59rem,65.5%)]">
        {media ?? <PlaidPlaceholder tone="art" className="size-full" />}
      </div>

      <div className="mx-auto w-full max-w-page px-gutter text-center lg:pt-[17.75rem] lg:text-left">
        <h1 className="mx-auto max-w-[22rem] bg-linear-to-r from-chart-4 via-highlight to-background bg-clip-text pb-1 font-display text-[2.5rem]/[0.94] font-medium tracking-[-0.05em] text-transparent dark:to-foreground lg:mx-0 lg:max-w-[56rem] lg:text-[4.75rem]/[1.12] lg:tracking-[-0.046em]">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-[22rem] text-lg/[1.3] text-background dark:text-foreground lg:mx-0 lg:mt-6 lg:max-w-[37rem] lg:text-[1.625rem]/[1.4] lg:tracking-[-0.01em]">
          {subtitle}
        </p>
        <div className="mt-6 flex justify-center gap-2.5 lg:mt-12 lg:justify-start lg:gap-4">
          <PlaidButton href={primary.href} variant="mint" className="flex-1 lg:flex-none">
            {primary.label}
          </PlaidButton>
          <PlaidButton href={secondary.href} className="flex-1 lg:flex-none">
            {secondary.label}
          </PlaidButton>
        </div>
      </div>

      {/* customer names drifting left: the list twice, so the loop has no seam */}
      <div className="mt-10 overflow-clip lg:mt-[4.6rem]">
        <ul className="plaid-hero-marquee flex w-max items-center">
          {[...logos, ...logos].map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= logos.length || undefined}
              className="px-8 font-display text-xl font-semibold tracking-[-0.03em] whitespace-nowrap text-background/90 dark:text-foreground/90 lg:px-[3.25rem] lg:text-[1.375rem]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {announcement && (
        <div className="mx-auto mt-auto w-full max-w-page px-gutter pt-8 pb-6 lg:pb-4">
          <a
            href={announcement.href}
            className="group flex w-full items-center gap-4 rounded-[1.25rem] bg-card/85 bg-linear-to-r from-highlight/25 to-card/60 p-2.5 pr-5 text-left text-base font-medium text-foreground backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_1px_16px] hover:shadow-foreground/30 motion-reduce:transition-none lg:w-[32.5rem]"
          >
            <span className="block h-14 w-20 shrink-0 overflow-clip rounded-[0.8125rem]">
              {announcement.media ?? <PlaidPlaceholder tone="photo" className="size-full" />}
            </span>
            <span className="flex-1">{announcement.label}</span>
            <ArrowRight aria-hidden className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
          </a>
        </div>
      )}
    </section>
  );
}
