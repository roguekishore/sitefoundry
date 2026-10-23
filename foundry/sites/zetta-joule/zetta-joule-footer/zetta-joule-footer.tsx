import { cn } from "@foundry/foundry-utils";
import { ZettaJouleMark } from "@foundry/zetta-joule-mark";
import "./zetta-joule-footer.css";

export interface ZettaJouleFooterLink {
  /** link text */
  label: string;
  /** link target */
  href: string;
}

export interface ZettaJouleFooterProps {
  /** the light heading ("\n" starts a new line) */
  heading: string;
  /** three groups of white links: pages (two columns on phones), then social */
  groups: ZettaJouleFooterLink[][];
  /** the small grey legal links */
  legal: ZettaJouleFooterLink[];
  /** the company name, set huge at the bottom */
  brand: string;
  /** the copyright line */
  copyright: string;
  className?: string;
}

const link = "block py-[0.4rem] text-sm leading-none font-medium tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-primary";

export function ZettaJouleFooter({ heading, groups, legal, brand, copyright, className }: ZettaJouleFooterProps) {
  return (
    <footer className={cn("dark relative bg-popover pt-14 text-foreground", className)}>
      <div className="zetta-joule-footer-rise mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter pb-10 lg:px-10 lg:pb-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
          <p className="whitespace-pre-line font-display text-2xl leading-none font-light tracking-[-0.03em] lg:col-span-5">{heading}</p>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-11 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:grid-cols-3">
            {groups.map((g, i) => (
              <ul key={i} className={cn(i === groups.length - 1 && "col-span-2 lg:col-span-1")}>
                {g.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={link}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div aria-hidden className="mt-24 h-20 lg:mt-20 lg:h-24 bg-[radial-gradient(var(--foreground)_1px,transparent_1.6px)] bg-[length:16px_16px] opacity-25 [mask-image:linear-gradient(to_right,var(--foreground),transparent)] " />
        <ul className="mt-8 flex gap-6 text-sm leading-none tracking-[-0.01em] text-muted-foreground">
          {legal.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors duration-200 hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ZettaJouleMark name={brand} className="mt-10 text-[2.6rem] lg:mt-10 lg:text-[min(8vw,7rem)]" />
        <p className="mt-10 text-sm leading-none tracking-[-0.01em] text-muted-foreground lg:mt-8">{copyright}</p>
      </div>
    </footer>
  );
}
