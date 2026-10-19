import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";

export interface HalodentalOpusHeaderLink {
  label: string;
  href: string;
}

export interface HalodentalOpusHeaderTile {
  /** text (e.g. a language code) or an icon */
  content: ReactNode;
  href: string;
  /** screen-reader label, needed when content is an icon */
  ariaLabel?: string;
}

export interface HalodentalOpusHeaderProps {
  /** the logo: an emblem and the brand name set large beside it */
  brand: { name: string; href: string; emblem?: ReactNode };
  /** the centred navigation (desktop) */
  links: HalodentalOpusHeaderLink[];
  /** the solid light button on the right */
  cta: { label: string; href: string };
  /** a shorter cta label for phones */
  ctaShort?: string;
  /** small square tiles after the button (language, accessibility…), desktop only */
  tiles?: HalodentalOpusHeaderTile[];
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** lie on top of the next section (the hero panel) instead of pushing it down */
  overlay?: boolean;
  className?: string;
}

/**
 * Halo Dental's top bar: transparent, sitting inside the hero's black panel. Large logo
 * left, nav centred, a solid light button and two see-through squares right. On phones the
 * button stays and a square opens a simple panel (a native disclosure, no JavaScript).
 * It always uses the theme's dark palette (white on black).
 */
export function HalodentalOpusHeader({ brand, links, cta, ctaShort, tiles = [], menuLabel, overlay = true, className }: HalodentalOpusHeaderProps) {
  return (
    <header className={cn("dark relative z-20 pt-1.5 text-foreground lg:pt-2.5", overlay && "-mb-[4.25rem] lg:-mb-[6.875rem]", className)}>
      <div className="relative flex h-[3.875rem] items-center justify-between px-gutter lg:h-[6.25rem]">
        <a href={brand.href} className="flex items-center gap-2.5 lg:gap-3">
          {brand.emblem && <span className="flex text-foreground [&>svg]:size-[2.125rem] lg:[&>svg]:size-10">{brand.emblem}</span>}
          <span className="font-display text-[2.375rem] leading-none tracking-[-0.03em] lg:text-[3rem]">{brand.name}</span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-base text-foreground transition-opacity hover:opacity-70 motion-reduce:transition-none">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <HalodentalOpusButton variant="light" href={cta.href}>
            {cta.label}
          </HalodentalOpusButton>
          {tiles.map((t, i) => (
            <HalodentalOpusButton key={i} variant="tile" href={t.href} ariaLabel={t.ariaLabel} className="w-10 px-0">
              {t.content}
            </HalodentalOpusButton>
          ))}
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <HalodentalOpusButton variant="light" href={cta.href}>
            {ctaShort ?? cta.label}
          </HalodentalOpusButton>
          <details className="group">
            <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center rounded-sm bg-foreground/10 [&::-webkit-details-marker]:hidden">
              <span aria-hidden className="flex w-5 flex-col gap-[0.3125rem]">
                <span className="h-px bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45 motion-reduce:transition-none" />
                <span className="h-px bg-current group-open:opacity-0" />
                <span className="h-px bg-current transition-transform group-open:-translate-y-[6px] group-open:-rotate-45 motion-reduce:transition-none" />
              </span>
            </summary>
            <div className="absolute inset-x-gutter top-[4rem] rounded-lg bg-popover p-2 text-popover-foreground ring-1 ring-border/40">
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a key={l.label} href={l.href} className="rounded-sm px-3 py-3 text-base hover:bg-foreground/10">
                    {l.label}
                  </a>
                ))}
              </nav>
              {tiles.length > 0 && (
                <div className="mt-2 flex gap-2.5 border-t border-border/50 px-3 pt-3 pb-1">
                  {tiles.map((t, i) => (
                    <HalodentalOpusButton key={i} variant="tile" href={t.href} ariaLabel={t.ariaLabel} className="w-10 px-0">
                      {t.content}
                    </HalodentalOpusButton>
                  ))}
                </div>
              )}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
