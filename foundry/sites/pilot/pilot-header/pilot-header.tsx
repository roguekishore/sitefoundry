import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PilotButton } from "@foundry/pilot-button";

export interface PilotHeaderLink {
  label: string;
  href: string;
  /** shows a chevron, as for items that open a menu */
  menu?: boolean;
}

export interface PilotHeaderProps {
  /** the pink strip on top: a sentence and an uppercase mono link; leave out to hide the strip */
  announcement?: { text: string; link: { label: string; href: string } };
  /** the lowercase wordmark */
  brand: { name: string; href: string };
  /** the nav links */
  links: PilotHeaderLink[];
  /** the plain mono link on the right, e.g. "Sign in" */
  signIn: { label: string; href: string };
  /** the yellow pill */
  primary: { label: string; href: string };
  /** the outlined pill */
  secondary: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Pilot's pinned header: pink announcement strip over the aubergine nav bar. */
export function PilotHeader({ announcement, brand, links, signIn, primary, secondary, menuLabel, className }: PilotHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40", className)}>
      {announcement && (
        <div className="bg-glow px-gutter py-3 text-center text-foreground lg:py-4 dark:text-background">
          <p className="flex flex-col items-center gap-x-4 gap-y-1 text-base leading-[1.6] lg:flex-row lg:justify-center lg:leading-6">
            <span>{announcement.text}</span>
            <a
              href={announcement.link.href}
              className="font-mono text-sm leading-[1.6] uppercase underline underline-offset-2 transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none"
            >
              {announcement.link.label}
            </a>
          </p>
        </div>
      )}
      <div className="relative border-b border-secondary-foreground/10 bg-secondary text-secondary-foreground">
        <nav className="flex h-20 items-center justify-between px-gutter lg:px-14">
          <div className="flex items-center gap-14">
            <a href={brand.href} className="font-display text-[2.125rem] leading-none font-medium tracking-[-0.04em] lowercase">
              {brand.name}
            </a>
            <ul className="hidden items-center gap-6 xl:flex">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-1.5 text-base leading-6 font-medium transition-opacity duration-150 hover:opacity-75 motion-reduce:transition-none"
                  >
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2.5} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={signIn.href}
              className="mr-5 font-mono text-sm uppercase transition-opacity duration-150 hover:opacity-75 motion-reduce:transition-none"
            >
              {signIn.label}
            </a>
            <PilotButton href={primary.href} variant="sun" size="md">
              {primary.label}
            </PilotButton>
            <PilotButton href={secondary.href} variant="outline-light" size="md" className="h-[2.875rem] px-5">
              {secondary.label}
            </PilotButton>
          </div>

          <details className="group xl:hidden">
            <summary
              aria-label={menuLabel}
              className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden className="size-9 group-open:hidden" strokeWidth={1.5} />
              <X aria-hidden className="hidden size-8 group-open:block" strokeWidth={1.5} />
            </summary>
            <div className="absolute inset-x-0 top-full max-h-[calc(100svh-10rem)] overflow-y-auto border-t border-secondary-foreground/10 bg-secondary px-gutter pt-2 pb-8">
              <ul className="divide-y divide-secondary-foreground/10">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="flex items-center justify-between py-4 text-lg font-medium">
                      {l.label}
                      {l.menu && <ChevronDown aria-hidden className="size-4 -rotate-90" strokeWidth={2} />}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={signIn.href} className="block py-4 font-mono text-base uppercase">
                    {signIn.label}
                  </a>
                </li>
              </ul>
              <div className="mt-4 grid gap-3">
                <PilotButton href={primary.href} variant="sun" size="lg">
                  {primary.label}
                </PilotButton>
                <PilotButton href={secondary.href} variant="outline-light" size="lg">
                  {secondary.label}
                </PilotButton>
              </div>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
