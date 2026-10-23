import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import type { HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";

export interface FunctionhealthFooterProps {
  /** wordmark in terracotta (text, svg or img) */
  logo: ReactNode;
  /** link columns, e.g. Company, Explore, Community */
  columns: { title: string; links: { label: string; href: string }[] }[];
  newsletter: {
    title: HeadingPart[];
    text: string;
    placeholder: string;
    submit: string;
    action?: string;
  };
  /** QR code slot and the store buttons */
  apps: { qr?: ReactNode; qrLabel: string; stores: { caption: string; name: string; href: string }[] };
  socials: { label: string; href: string; icon: ReactNode }[];
  /** small legal links beside the socials */
  legal: { label: string; href: string }[];
  /** fine-print paragraphs under the card */
  disclaimers: string[];
  /** last line, in semibold */
  copyright: string;
  className?: string;
}

export function FunctionhealthFooter({ logo, columns, newsletter, apps, socials, legal, disclaimers, copyright, className }: FunctionhealthFooterProps) {
  return (
    <footer className={cn("bg-card pb-12 text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-10 rounded-b-[2.25rem] bg-background px-6 pt-8 pb-8 shadow-[12px_32px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:[grid-template-areas:'logo_logo'_'cols_news'_'apps_social'] lg:grid-cols-[minmax(0,41.5rem)_minmax(0,1fr)] lg:gap-x-6 lg:gap-y-0 lg:px-14 lg:pt-14 lg:pb-14">
          <div className={cn("text-primary", "lg:[grid-area:logo]")}>{logo}</div>

          <div className={cn("lg:mt-[4.25rem]", "lg:[grid-area:news]")}>
            <h2 className="font-display text-2xl leading-[1.2] font-light text-balance">
              {newsletter.title.map((p, i) =>
                typeof p === "string" ? (
                  p
                ) : (
                  <em key={i} className="text-primary italic">
                    {p.accent}
                  </em>
                ),
              )}
            </h2>
            <p className="mt-4 text-sm leading-[1.5] font-light">{newsletter.text}</p>
            <form action={newsletter.action} className="mt-6 flex flex-col items-start gap-3 lg:mt-7 lg:flex-row lg:items-center">
              <input
                type="email"
                name="email"
                placeholder={newsletter.placeholder}
                className="h-12 w-full min-w-0 rounded-full border border-input bg-background px-5 text-base font-light outline-none transition-colors duration-200 placeholder:text-muted-foreground focus-visible:border-primary lg:flex-1"
              />
              <FunctionhealthButton type="submit">{newsletter.submit}</FunctionhealthButton>
            </form>
          </div>

          <div className={cn("grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-[4.25rem] lg:grid-cols-3 lg:gap-y-0", "lg:[grid-area:cols]")}>
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <p className="text-sm leading-none font-semibold">{c.title}</p>
                <ul className="mt-4 space-y-[0.4375rem] lg:mt-[1.125rem]">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-base leading-6 font-light transition-colors duration-150 hover:text-primary lg:text-[1.0625rem]">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className={cn("flex flex-wrap items-start gap-4 lg:mt-28", "lg:[grid-area:apps]")}>
            <FunctionhealthMedia media={apps.qr} ratio="size-[7.6875rem]" rounded="rounded-md" className="border-border" />
            <span className="sr-only">{apps.qrLabel}</span>
            <div className="flex w-[11.4rem] flex-col gap-3">
              {apps.stores.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex h-[3.3rem] flex-col justify-center rounded-md border border-border bg-card px-4 leading-none transition-colors duration-200 hover:border-primary motion-reduce:transition-none"
                >
                  <span className="text-[0.625rem] font-light uppercase">{s.caption}</span>
                  <span className="mt-1 text-lg font-semibold">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={cn("lg:mt-28", "lg:[grid-area:social]")}>
            <ul className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid size-8 place-items-center rounded-full bg-card transition-[transform,color] duration-150 hover:-translate-y-px hover:text-primary motion-reduce:transition-none [&_svg]:size-4"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-none font-light lg:mt-6">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors duration-150 hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 px-0 pt-8 text-xs leading-[1.4] font-light text-muted-foreground lg:px-4 lg:text-[0.8125rem] lg:leading-[1.35]">
          {disclaimers.map((d) => (
            <p key={d.slice(0, 40)}>{d}</p>
          ))}
          <p className="font-semibold">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
