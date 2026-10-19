import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";
import { HalodentalSonnetMark, type HalodentalSonnetMarkProps } from "@foundry/halodental-sonnet-mark";

export interface HalodentalSonnetHeaderLink {
  label: string;
  href: string;
}

export interface HalodentalSonnetHeaderProps {
  /** the logo lockup */
  mark: HalodentalSonnetMarkProps;
  /** the centred navigation (desktop) and the phone panel's list */
  links: HalodentalSonnetHeaderLink[];
  /** the white button on the right */
  cta: HalodentalSonnetHeaderLink;
  /** the small square beside it, e.g. a language switch */
  language?: HalodentalSonnetHeaderLink;
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** lie on top of the next block (a hero behind it) instead of pushing it down */
  overlay?: boolean;
  className?: string;
}

/**
 * The top bar: transparent, logo left, links centred, a white button and a quiet square on
 * the right. It is always dark-toned (white on black). On phones, a three-line square opens a
 * simple panel (no JavaScript: a native disclosure).
 */
export function HalodentalSonnetHeader({ mark, links, cta, language, menuLabel, overlay = true, className }: HalodentalSonnetHeaderProps) {
  return (
    <header className={cn("dark relative z-20 h-[4.5rem] text-foreground lg:h-[7.5rem]", overlay && "-mb-[4.5rem] lg:-mb-[7.5rem]", className)}>
      <div className="flex h-full items-center justify-between px-[1.3rem] lg:px-10">
        <HalodentalSonnetMark {...mark} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-base text-foreground transition-colors hover:text-foreground/70 motion-reduce:transition-none">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <HalodentalSonnetButton variant="light" href={cta.href}>
            {cta.label}
          </HalodentalSonnetButton>
          {language && (
            <HalodentalSonnetButton variant="quiet" href={language.href} className="hidden w-10 px-0 lg:inline-flex">
              {language.label}
            </HalodentalSonnetButton>
          )}
          <details className="group relative lg:hidden">
            <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center rounded-sm bg-foreground/10 [&::-webkit-details-marker]:hidden">
              <span aria-hidden className="flex w-5 flex-col gap-1">
                <span className="h-px bg-current transition-transform group-open:translate-y-[5px] group-open:rotate-45 motion-reduce:transition-none" />
                <span className="h-px bg-current group-open:opacity-0" />
                <span className="h-px bg-current transition-transform group-open:-translate-y-[5px] group-open:-rotate-45 motion-reduce:transition-none" />
              </span>
            </summary>
            <nav className="absolute top-12 right-0 flex w-56 flex-col rounded-sm bg-card p-2 text-card-foreground">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="rounded-sm px-3 py-2.5 text-base hover:bg-accent">
                  {l.label}
                </a>
              ))}
              {language && (
                <a href={language.href} className="rounded-sm px-3 py-2.5 text-base hover:bg-accent">
                  {language.label}
                </a>
              )}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
