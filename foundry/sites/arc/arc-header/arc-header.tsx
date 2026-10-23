import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ArcButton } from "@foundry/arc-button";
import "./arc-header.css";

export interface ArcHeaderLink {
  label: string;
  href: string;
}

export interface ArcHeaderProps {
  /** the wordmark, set bold in the display face */
  brand: { name: string; href: string };
  /** the centred nav links */
  links: ArcHeaderLink[];
  /** the plain link on the right, e.g. "Log in" */
  login: ArcHeaderLink;
  /** the outlined button on the right */
  cta: ArcHeaderLink;
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Arc's pinned header: wordmark left, links centred, a log-in link and an outlined button right. */
export function ArcHeader({ brand, links, login, cta, menuLabel, className }: ArcHeaderProps) {
  const linkClass =
    "text-base font-medium text-muted-foreground transition-colors duration-200 ease-[ease] hover:text-foreground motion-reduce:transition-none";
  return (
    <header className={cn("arc-header sticky top-0 z-40 bg-muted text-foreground", className)}>
      <nav className="relative mx-auto grid h-[4.5rem] max-w-page grid-cols-[1fr_auto] items-center px-gutter lg:h-[6.25rem] lg:grid-cols-[1fr_auto_1fr]">
        <a href={brand.href} className="justify-self-start font-display text-[1.75rem]/none font-bold tracking-[-0.05em] lg:text-[2.25rem]">
          {brand.name}
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center justify-self-end gap-[2.375rem] lg:flex">
          <a href={login.href} className={linkClass}>
            {login.label}
          </a>
          <ArcButton href={cta.href} variant="outline" size="sm" className="mr-[1.0625rem]">
            {cta.label}
          </ArcButton>
        </div>

        <details className="group justify-self-end lg:hidden">
          <summary aria-label={menuLabel} className="-mr-1 flex size-9 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-7 group-open:hidden" strokeWidth={1.5} />
            <X aria-hidden className="hidden size-7 group-open:block" strokeWidth={1.5} />
          </summary>
          <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-y border-border bg-background px-gutter pt-2 pb-6">
            <ul className="divide-y divide-border">
              {[...links, login].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="block py-4 text-lg font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ArcButton href={cta.href} variant="outline" size="sm" className="mt-4 w-full">
              {cta.label}
            </ArcButton>
          </div>
        </details>
      </nav>
    </header>
  );
}
