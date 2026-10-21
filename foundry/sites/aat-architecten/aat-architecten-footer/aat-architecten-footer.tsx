import { cn } from "@foundry/foundry-utils";
import { AatArchitectenWordmark } from "@foundry/aat-architecten-wordmark";

export interface AatArchitectenFooterLink {
  label: string;
  href: string;
}

export interface AatArchitectenFooterNavLink extends AatArchitectenFooterLink {
  /** the page you are on: shown in ink instead of grey */
  current?: boolean;
}

export interface AatArchitectenFooterProps {
  /** the studio name in the wordmark */
  brand: string;
  /** the small word after the wordmark's hairline */
  descriptor?: string;
  homeHref?: string;
  /** the page list (desktop only) */
  nav: AatArchitectenFooterNavLink[];
  /** the address, one entry per line */
  address: string[];
  /** where the address links (e.g. a map) */
  addressHref?: string;
  /** mail, phone… one per line */
  contacts: AatArchitectenFooterLink[];
  /** social profiles, one per line */
  socials: AatArchitectenFooterLink[];
  /** the copyright line */
  copyright: string;
  /** small legal links (privacy, cookies) */
  legal: AatArchitectenFooterLink[];
  /** a registration or licence line */
  registration?: string;
  /** a small italic credit at the far right (e.g. who made the site) */
  credit?: AatArchitectenFooterLink;
  className?: string;
}

const fade = "transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";
// Five columns from 1024px; the second starts 27% in, as in the header.
const columns = "lg:grid-cols-[27.3fr_18.2fr_22.7fr_22.8fr_9fr]";

export function AatArchitectenFooter({
  brand,
  descriptor,
  homeHref = "/",
  nav,
  address,
  addressHref,
  contacts,
  socials,
  copyright,
  legal,
  registration,
  credit,
  className,
}: AatArchitectenFooterProps) {
  const inkLink = cn("hover:text-muted-foreground", fade);
  return (
    <footer className={cn("border-t border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-20 pb-11 lg:pt-28">
        <div className={cn("grid grid-cols-1 text-base leading-[1.75] lg:text-xl lg:leading-[1.9]", columns)}>
          <div>
            <AatArchitectenWordmark name={brand} descriptor={descriptor} href={homeHref} />
          </div>

          <ul className="hidden lg:block">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(link.current ? "text-foreground" : "text-muted-foreground hover:text-foreground", fade)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <address className="mt-[4.5rem] not-italic lg:mt-0">
            {addressHref ? (
              <a href={addressHref} className={cn("block", inkLink)}>
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            ) : (
              address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))
            )}
          </address>

          <ul className="mt-4 lg:mt-0">
            {contacts.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={inkLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-4 lg:mt-0">
            {socials.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={inkLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* small print: spread over three columns on phones, on the five columns from 1024px */}
        <div className={cn("mt-[4.5rem] grid grid-cols-3 items-baseline gap-y-7 text-[0.8125rem] leading-none lg:mt-[7.5rem] lg:text-base", columns)}>
          <span>{copyright}</span>
          {legal.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(i === 0 ? "justify-self-center" : "justify-self-end", "lg:justify-self-start", inkLink)}
            >
              {link.label}
            </a>
          ))}
          {registration && <span className="col-span-2 lg:col-span-1">{registration}</span>}
          {credit && (
            <a href={credit.href} className={cn("col-start-3 justify-self-end text-base italic lg:col-start-auto", inkLink)}>
              {credit.label}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
