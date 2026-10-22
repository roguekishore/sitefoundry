import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoArc } from "@foundry/prenuvo-arc";
import { PrenuvoWordmark } from "@foundry/prenuvo-wordmark";

export interface PrenuvoFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface PrenuvoFooterProps {
  /** the company name, shown as the wordmark */
  brand: string;
  /** link columns, each under a small uppercase label */
  columns: { title: string; links: PrenuvoFooterLink[] }[];
  /** the contact column: its label, a heading line, and lines with an icon (phone, email) */
  contact?: { title: string; heading?: string; lines: { icon: ReactNode; label: string; href?: string }[] };
  /** social icons (lucide), each with a screen-reader label */
  socials?: { icon: ReactNode; label: string; href: string }[];
  /** the newsletter card */
  newsletter?: {
    title: ReactNode;
    /** placeholders for first name, last name and email */
    fields: [string, string, string];
    /** the submit button's screen-reader label */
    submitLabel: string;
    /** where the form posts */
    action?: string;
    /** the photo under the form (cover); empty shows a placeholder */
    media?: ReactNode;
  };
  /** the copyright line */
  copyright: string;
  /** legal links in the bottom row */
  legal?: PrenuvoFooterLink[];
  /** a quiet note at the end of the bottom row (e.g. payment partners) */
  note?: ReactNode;
  className?: string;
}

const link = "transition-colors duration-200 ease-[ease] hover:text-muted-foreground motion-reduce:transition-none";
const label = "font-display text-xs font-medium text-muted-foreground/60 uppercase";

export function PrenuvoFooter({ brand, columns, contact, socials, newsletter, copyright, legal, note, className }: PrenuvoFooterProps) {
  return (
    <PrenuvoArc as="footer" className={cn("dark z-10 bg-[linear-gradient(to_bottom,var(--background)_15%,var(--card))] pt-24 pb-20 text-foreground lg:pt-32 lg:pb-20", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-12">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-8">
          <div className="flex flex-1 flex-col gap-12 lg:flex-row lg:gap-0">
            <PrenuvoWordmark name={brand} className="lg:w-[10.75rem] lg:shrink-0" />
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
              {columns.map((c) => (
                <nav key={c.title} className="lg:w-[10rem] lg:[&:nth-child(2)]:w-[11.25rem]" aria-label={c.title}>
                  <p className={label}>{c.title}</p>
                  <ul className="mt-4 flex flex-col gap-2 lg:mt-9">
                    {c.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className={cn("font-display text-base leading-[1.45] font-medium", link)}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
              {(contact || socials) && (
                <div className="flex flex-col lg:pl-0">
                  {contact && (
                    <>
                      <p className={label}>{contact.title}</p>
                      {contact.heading && <p className="mt-4 font-display text-base leading-[1.45] font-medium lg:mt-9">{contact.heading}</p>}
                      <ul className="mt-2 flex flex-col gap-2">
                        {contact.lines.map((l) => (
                          <li key={l.label} className="flex items-center gap-3 font-display text-base leading-[1.45] font-medium [&_svg]:size-5 [&_svg]:shrink-0">
                            {l.icon}
                            {l.href ? (
                              <a href={l.href} className={link}>
                                {l.label}
                              </a>
                            ) : (
                              l.label
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {socials && (
                    <ul className="mt-12 flex gap-4 lg:mt-[5.5rem]">
                      {socials.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} aria-label={s.label} className={cn("flex size-5 items-center justify-center [&_svg]:size-5", link)}>
                            {s.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          {newsletter && (
            <div className="flex min-h-[28rem] flex-col overflow-clip rounded-lg bg-[linear-gradient(to_bottom,var(--secondary),color-mix(in_oklab,var(--secondary)_60%,var(--card)))] sm:max-w-md xl:min-h-[30.5rem] xl:w-80 xl:max-w-none xl:shrink-0">
              <form action={newsletter.action} className="p-5 pb-7">
                <p className="font-display text-2xl leading-tight font-semibold">{newsletter.title}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {newsletter.fields.map((f, i) => (
                    <label key={f} className={cn("relative block", i === 2 && "col-span-2")}>
                      <span className="sr-only">{f}</span>
                      <input
                        type={i === 2 ? "email" : "text"}
                        required
                        placeholder={f}
                        className="h-10 w-full rounded-sm bg-foreground/95 px-3 text-sm text-background placeholder:text-background/45 focus:outline-2 focus:outline-ring"
                      />
                      {i === 2 && (
                        <button type="submit" aria-label={newsletter.submitLabel} className="absolute inset-y-0 right-2 flex items-center px-1 text-background/55 transition-colors duration-200 hover:text-background">
                          <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
                        </button>
                      )}
                    </label>
                  ))}
                </div>
              </form>
              <div className="relative flex-1 [&>*]:absolute [&>*]:inset-0 [&>*]:size-full [&>*]:object-cover">
                {newsletter.media ?? <div className="bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--glow)_30%,transparent))]" />}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-6 text-xs lg:flex-row lg:items-center lg:gap-12 xl:mt-0 xl:-translate-y-3 xl:pr-[22rem]">
          <p className="text-muted-foreground/60">{copyright}</p>
          {legal && (
            <ul className="flex flex-wrap justify-between gap-x-12 gap-y-3 lg:justify-start">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={cn("font-display font-medium", link)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {note && <div className="text-muted-foreground/60 lg:ml-auto">{note}</div>}
        </div>
      </div>
    </PrenuvoArc>
  );
}
