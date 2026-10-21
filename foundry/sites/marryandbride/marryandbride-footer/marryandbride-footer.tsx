import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideFooterLink {
  label: string;
  href: string;
}

export interface MarryandbrideFooterColumn {
  /** the serif column heading */
  title: string;
  links: MarryandbrideFooterLink[];
}

export interface MarryandbrideFooterProps {
  /** the giant wordmark across the top */
  wordmark: string;
  /** the about text, one string per paragraph */
  about: string[];
  /** the link columns (two fill the desktop row) */
  columns: MarryandbrideFooterColumn[];
  /** accepted payment methods, as short text labels */
  payments: string[];
  /** tiny legal links (bottom left) */
  legal: MarryandbrideFooterLink[];
  /** social links (bottom centre) */
  social: MarryandbrideFooterLink[];
  /** the copyright line (bottom right) */
  copyright: string;
  /** an optional credit after the copyright */
  credit?: string;
  className?: string;
}

const tiny = "font-sans text-[0.65rem] leading-none tracking-[0.07em] uppercase lg:text-[0.7rem]";
const tinyLink = cn(tiny, "transition-opacity duration-200 hover:opacity-70");

/** Giant wordmark, about text, link columns, payments and a hairline-topped legal row. */
export function MarryandbrideFooter({ wordmark, about, columns, payments, legal, social, copyright, credit, className }: MarryandbrideFooterProps) {
  return (
    <footer className={cn("overflow-clip bg-background px-gutter pt-[4.5rem] pb-3 text-foreground lg:pt-[4.5rem]", className)}>
      <p aria-hidden className="text-center font-display text-[23.6vw] leading-[0.7] font-light tracking-[-0.02em] whitespace-nowrap">
        {wordmark}
      </p>

      <div className="mt-5 lg:mt-6 lg:grid lg:grid-cols-5 lg:gap-x-gutter">
        <div className="max-w-[22rem] space-y-[1.5em] lg:max-w-[23.5rem] font-sans text-[0.78rem] leading-[1.5] lg:col-span-3 lg:text-[0.863rem]">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-11 grid grid-cols-2 gap-x-gutter lg:col-span-2 lg:mt-0">
          {columns.map((column) => (
            <nav key={column.title}>
              <h2 className="font-display text-[1.36rem] leading-none lg:text-[1.63rem]">{column.title}</h2>
              <ul className="mt-7 space-y-[0.85rem] leading-none lg:mt-9 lg:space-y-[0.95rem]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-[0.78rem] leading-none tracking-[0.07em] uppercase transition-opacity duration-200 hover:opacity-70 lg:text-[0.863rem]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-muted-foreground lg:mt-8 lg:justify-start">
        {payments.map((method) => (
          <li key={method} className="font-sans text-[0.8rem] leading-none font-semibold tracking-[-0.01em] italic">
            {method}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-border pt-3 lg:mt-5 lg:flex lg:items-center lg:justify-between lg:pt-2.5">
        <ul className="flex flex-wrap justify-center gap-x-[1.1rem] gap-y-3 lg:justify-start">
          {legal.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={tinyLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex justify-center gap-x-[1.6rem] lg:mt-0">
          {social.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={tinyLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={cn(tiny, "mt-4 flex justify-between gap-x-[1.1rem] lg:mt-0")}>
          <span>{copyright}</span>
          {credit && <span>{credit}</span>}
        </div>
      </div>
    </footer>
  );
}
