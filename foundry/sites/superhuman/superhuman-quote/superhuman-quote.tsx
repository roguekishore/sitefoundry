import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanLink } from "@foundry/superhuman-link";

export interface SuperhumanQuoteProps {
  /** the quote; wrap the emphasised phrase in <strong> */
  quote: ReactNode;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** the link under the quote */
  link: { label: string; href: string };
  className?: string;
}

export function SuperhumanQuote({ quote, name, role, link, className }: SuperhumanQuoteProps) {
  return (
    <section className={cn("bg-accent px-gutter py-10 text-center text-accent-foreground lg:py-24", className)}>
      <figure className="mx-auto max-w-[52rem]">
        <blockquote className="text-[1.75rem]/[1.2] font-[460] tracking-[-0.0275em] lg:text-[2.4375rem]/[1.2] [&_strong]:font-semibold">{quote}</blockquote>
        <figcaption className="mt-6 text-base/[1.5] font-[460] lg:mt-7">
          <p>{name}</p>
          <p className="mx-auto max-w-[19rem] text-accent-foreground/65 lg:max-w-none">{role}</p>
        </figcaption>
      </figure>
      <SuperhumanLink label={link.label} href={link.href} className="mt-7 text-sm lg:text-base" />
    </section>
  );
}
