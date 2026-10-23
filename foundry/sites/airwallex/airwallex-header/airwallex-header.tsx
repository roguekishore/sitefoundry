import { useId, type ReactNode } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AirwallexButton } from "@foundry/airwallex-button";
import { AirwallexWordmark } from "@foundry/airwallex-wordmark";

export interface AirwallexLink {
  label: string;
  href: string;
}

export interface AirwallexAnnouncement {
  /** a small picture before the text (an icon or a 24px image) */
  icon?: ReactNode;
  /** the message */
  text: string;
  /** the underlined link after the message */
  link?: AirwallexLink;
  /** accessible name of the close cross */
  closeLabel: string;
}

export interface AirwallexHeaderProps {
  /** the strip above the nav; leave out for none */
  announcement?: AirwallexAnnouncement;
  /** the company name */
  wordmark: string;
  /** the small mark before the name (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where the wordmark links to */
  homeHref?: string;
  /** the main links beside the wordmark (desktop) */
  links: AirwallexLink[];
  /** the language chip's label ("EN") */
  language?: string;
  /** the violet text link ("Log in") */
  login?: AirwallexLink;
  /** the outline button ("See demo") */
  demo?: AirwallexLink;
  /** the filled button, also shown on phones ("Get started") */
  action: AirwallexLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass =
  "text-base font-semibold text-foreground/75 transition-colors duration-250 ease-out hover:text-primary motion-reduce:transition-none";

/** Announcement strip and nav, stuck to the top together. */
export function AirwallexHeader({
  announcement,
  wordmark,
  mark,
  homeHref = "#",
  links,
  language,
  login,
  demo,
  action,
  menuLabel,
  className,
}: AirwallexHeaderProps) {
  const closeId = useId();
  return (
    <header className={cn("sticky top-0 z-40 text-foreground", className)}>
      {announcement && (
        <>
          <input id={closeId} type="checkbox" className="peer sr-only" aria-hidden tabIndex={-1} />
          <div className="relative bg-accent text-accent-foreground peer-checked:hidden">
            <div className="mx-auto flex min-h-[3.0625rem] max-w-page items-center gap-3 py-2 pr-12 pl-4 lg:min-h-10 lg:justify-center lg:px-12 lg:py-1.5">
              {announcement.icon && <span className="shrink-0 [&_svg]:size-6 [&>img]:size-6">{announcement.icon}</span>}
              <p className="text-sm leading-[1.5] lg:leading-5">
                {announcement.text}{" "}
                {announcement.link && (
                  <a
                    href={announcement.link.href}
                    className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[100%_1px] bg-bottom-left bg-no-repeat font-semibold text-primary transition-[background-size] duration-200 ease-out hover:bg-size-[100%_2px] motion-reduce:transition-none"
                  >
                    {announcement.link.label}
                  </a>
                )}
              </p>
            </div>
            <label
              htmlFor={closeId}
              aria-label={announcement.closeLabel}
              className="absolute top-1/2 right-4 grid size-6 -translate-y-1/2 cursor-pointer place-items-center lg:right-6"
            >
              <X aria-hidden className="size-4" strokeWidth={2.5} />
            </label>
          </div>
        </>
      )}
      <div className="relative bg-background">
        <div className="mx-auto flex h-14 max-w-page items-center gap-12 px-gutter lg:h-20 lg:px-12">
          <AirwallexWordmark name={wordmark} mark={mark} href={homeHref} />
          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4 lg:gap-2">
            {language && (
              <span className="mr-6 hidden items-center gap-2 text-base font-semibold text-foreground/75 lg:flex">
                <span className="grid h-5 w-7 place-items-center rounded-sm bg-chart-5 text-card">
                  <Globe aria-hidden className="size-3.5" strokeWidth={2.25} />
                </span>
                {language}
              </span>
            )}
            {login && (
              <AirwallexButton href={login.href} variant="text" className="mr-4 hidden lg:inline-flex">
                {login.label}
              </AirwallexButton>
            )}
            {demo && (
              <AirwallexButton href={demo.href} variant="outline" className="hidden lg:inline-flex">
                {demo.label}
              </AirwallexButton>
            )}
            <AirwallexButton href={action.href} size="sm" className="lg:h-10 lg:px-4 lg:text-base">
              {action.label}
            </AirwallexButton>
            <details className="group lg:hidden">
              <summary aria-label={menuLabel} className="grid size-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden className="size-7 group-open:hidden" strokeWidth={2.25} />
                <X aria-hidden className="hidden size-7 group-open:block" strokeWidth={2.25} />
              </summary>
              <nav className="absolute inset-x-0 top-full flex flex-col border-y border-border bg-background px-gutter pt-2 pb-6">
                {[...links, ...(login ? [login] : []), ...(demo ? [demo] : [])].map((link) => (
                  <a key={link.label} href={link.href} className={cn(linkClass, "border-b border-border py-4")}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
