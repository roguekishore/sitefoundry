import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthWordmark } from "@foundry/parsleyhealth-wordmark";

export interface ParsleyhealthLink {
  /** the link's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface ParsleyhealthHeaderProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** monogram shown instead of the name on phones */
  monogram?: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the announcement bar: a short note and a small pill; omit to hide the bar */
  announcement?: { text: string; action: ParsleyhealthLink };
  /** screen-reader label of the bar's close × */
  closeLabel?: string;
  /** the nav links (five on the original) */
  links: ParsleyhealthLink[];
  /** the pill on the right */
  action: ParsleyhealthLink;
  /** the quiet "Log in →" link after the pill */
  secondary?: ParsleyhealthLink;
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

const linkClass =
  "text-[1.1rem] font-medium text-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent-foreground motion-reduce:transition-none";

/** Mint announcement bar over a deep-sea nav, both sticky. */
export function ParsleyhealthHeader({
  brand,
  monogram,
  brandHref = "#",
  announcement,
  closeLabel,
  links,
  action,
  secondary,
  menuLabel,
  className,
}: ParsleyhealthHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40", className)}>
      {announcement ? (
        <div className="relative bg-accent text-accent-foreground has-[input:checked]:hidden">
          <div className="mx-auto flex min-h-[5.375rem] items-center justify-between gap-4 py-3 pr-10 pl-4 lg:min-h-[3.625rem] lg:justify-center lg:gap-10 lg:py-2.5 lg:pr-12">
            <p className="max-w-[9.5rem] text-[0.825rem] leading-[1.409] tracking-[0.01em] lg:max-w-none lg:text-[1.3063rem] lg:leading-[1.273] lg:tracking-[-0.01em]">
              {announcement.text}
            </p>
            <ParsleyhealthButton href={announcement.action.href} size="xs" className="max-lg:h-[2.375rem] max-lg:px-6 max-lg:text-[1.0312rem]">
              {announcement.action.label}
            </ParsleyhealthButton>
          </div>
          <label className="absolute top-1.5 right-2 grid size-7 cursor-pointer place-items-center lg:top-2 lg:right-4">
            <input type="checkbox" className="peer sr-only" aria-label={closeLabel} />
            <X aria-hidden className="size-4 peer-focus-visible:outline-2 peer-focus-visible:outline-ring" strokeWidth={1.75} />
          </label>
        </div>
      ) : null}

      <div className="dark relative bg-muted text-foreground">
        <div className="flex h-[5.125rem] items-center gap-4 px-5 lg:gap-0 lg:px-14">
          <details className="group lg:hidden">
            <summary
              aria-label={menuLabel}
              className="grid size-9 cursor-pointer list-none place-items-center text-foreground [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.25} />
              <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.25} />
            </summary>
            <nav className="absolute inset-x-0 top-full flex h-[calc(100svh-10rem)] flex-col overflow-y-auto border-t border-foreground/10 bg-muted px-5 pt-2 pb-8">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="border-b border-foreground/10 py-4 text-[1.2375rem] font-medium">
                  {link.label}
                </a>
              ))}
              {secondary ? (
                <a href={secondary.href} className="py-4 text-[1.2375rem] font-medium">
                  {secondary.label}
                </a>
              ) : null}
            </nav>
          </details>

          <ParsleyhealthWordmark brand={brand} short={monogram} href={brandHref} />

          <nav className="ml-13 hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <ParsleyhealthButton href={action.href} size="sm" className="max-lg:hidden">
              {action.label}
            </ParsleyhealthButton>
            <ParsleyhealthButton href={action.href} size="sm" variant="outline" className="px-[1.0625rem] lg:hidden">
              {action.label}
            </ParsleyhealthButton>
            {secondary ? (
              <a href={secondary.href} className={cn(linkClass, "group hidden items-center gap-1.5 px-1 lg:inline-flex")}>
                {secondary.label}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
                  →
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
