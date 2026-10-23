import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./ouraring-footer.css";

export interface OuraringFooterLink {
  label: ReactNode;
  href: string;
  /** leaves the site: shows a small up-right arrow */
  external?: boolean;
}

export interface OuraringPaymentGroup {
  /** shown beside the chips on phones only, e.g. "Instant checkout" */
  caption: string;
  /** small white chips: an icon (or short text) and its name for screen readers */
  methods: { icon: ReactNode; label: string }[];
}

export interface OuraringFooterProps {
  /** the wordmark, set large and light */
  logo: ReactNode;
  /** one or two payment groups; on phones two groups crossfade in turn */
  payments?: OuraringPaymentGroup[];
  /** the newsletter line */
  newsletter: {
    title: ReactNode;
    /** the field's placeholder and label */
    placeholder: string;
    /** the arrow button's label for screen readers */
    submitLabel: string;
    /** where the form posts */
    action?: string;
    /** small print under the field */
    note?: ReactNode;
  };
  /** up to four link columns */
  columns: { title: string; links: OuraringFooterLink[] }[];
  /** small links in the bottom row */
  legal: OuraringFooterLink[];
  /** the copyright line */
  copyright: ReactNode;
  /** the language pill */
  language?: { label: string; href: string };
  /** tuck 40px under the block before it (one with rounded bottom corners) */
  overlap?: boolean;
  className?: string;
}

function FooterLink({ link, className }: { link: OuraringFooterLink; className?: string }) {
  return (
    <a href={link.href} className={cn("inline-flex items-center gap-2 transition-colors duration-150 hover:text-muted-foreground", className)}>
      {link.label}
      {link.external && <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4" />}
    </a>
  );
}

export function OuraringFooter({ logo, payments, newsletter, columns, legal, copyright, language, overlap, className }: OuraringFooterProps) {
  const rotate = payments && payments.length > 1;
  return (
    <footer
      className={cn(
        "dark bg-linear-to-br from-card via-background via-60% to-background text-foreground",
        overlap ? "-mt-10 pt-[100px] lg:pt-[105px]" : "pt-[60px] lg:pt-[65px]",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter pb-16 lg:pb-[70px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <span className="text-[56px] leading-[0.85] font-light tracking-[0.04em] text-muted-foreground uppercase">{logo}</span>
          {payments && (
            <div className={cn("grid lg:flex lg:gap-2", rotate && "ouraring-footer-pay")}>
              {payments.map((group, g) => (
                <div key={g} className={cn("flex items-center gap-2 [grid-area:1/1]", rotate && `ouraring-footer-pay-${g === 0 ? "a" : "b"}`)}>
                  {group.methods.map((m, i) => (
                    <span
                      key={i}
                      role="img"
                      aria-label={m.label}
                      className="flex h-[34px] min-w-[46px] items-center justify-center rounded-sm bg-foreground px-2.5 text-[11px] font-bold text-background [&_svg]:size-5"
                    >
                      {m.icon}
                    </span>
                  ))}
                  <span className="ml-2 text-[15px] lg:hidden">{group.caption}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-11 flex flex-col gap-14 lg:mt-[70px] lg:grid lg:grid-cols-[432px_1fr] lg:gap-0">
          <div className="order-2 lg:order-1">
            <p className="max-w-[22rem] font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-muted-foreground lg:text-[40px] lg:leading-[1.25]">
              {newsletter.title}
            </p>
            <form action={newsletter.action} className="mt-14 flex h-10 w-full items-center rounded-md bg-secondary/70 pr-3 pl-5 lg:mt-[60px] lg:w-[320px]">
              <label className="sr-only" htmlFor="ouraring-footer-email">
                {newsletter.placeholder}
              </label>
              <input
                id="ouraring-footer-email"
                type="email"
                name="email"
                placeholder={newsletter.placeholder}
                className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-foreground outline-none placeholder:text-foreground"
              />
              <button type="submit" aria-label={newsletter.submitLabel} className="flex size-8 items-center justify-center text-foreground/80 hover:text-foreground">
                <ArrowRight aria-hidden strokeWidth={1.25} className="size-5" />
              </button>
            </form>
            {newsletter.note && (
              <p className="mt-9 max-w-[20rem] text-[12px] leading-[1.5] tracking-[0.02em] text-muted-foreground lg:max-w-[16rem] [&_a]:underline">{newsletter.note}</p>
            )}
          </div>

          <div className="order-1 columns-2 gap-x-4 lg:order-2 lg:grid lg:grid-cols-4 lg:gap-x-0">
            {columns.map((col) => (
              <div key={col.title} className="mb-12 break-inside-avoid lg:mb-0 lg:pr-6">
                <p className="text-[16px] leading-6 font-medium text-muted-foreground">{col.title}</p>
                <ul className="mt-2 flex flex-col gap-2 text-[16px] leading-6 tracking-[0.02em]">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-7 lg:mt-[90px] lg:flex-row lg:items-start lg:justify-between">
          <div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] leading-[1.5] tracking-[0.02em] text-muted-foreground">
              {legal.map((link, i) => (
                <li key={i}>
                  <FooterLink link={link} className="hover:text-foreground" />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-[1.5] tracking-[0.02em] text-muted-foreground">{copyright}</p>
          </div>
          {language && (
            <a
              href={language.href}
              className="order-first inline-flex h-[42px] items-center gap-2 self-start rounded-full border border-foreground px-4 text-[16px] transition-colors duration-150 hover:bg-foreground/10 lg:order-none lg:mt-[3px]"
            >
              <Globe aria-hidden strokeWidth={1.25} className="size-5" />
              {language.label}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
