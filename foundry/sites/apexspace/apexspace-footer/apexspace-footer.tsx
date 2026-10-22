import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceButton } from "@foundry/apexspace-button";
import { ApexspaceWordmark, type ApexspaceWordmarkProps } from "@foundry/apexspace-wordmark";

export interface ApexspaceFooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface ApexspaceFooterProps {
  /** the logo, top left */
  wordmark: ApexspaceWordmarkProps;
  /** the black contact bar */
  contact: { label: string; href: string };
  /** the newsletter sign-up */
  subscribe: {
    /** the mono label over the field */
    label: string;
    /** the field's placeholder */
    placeholder: string;
    /** screen-reader label for the arrow button */
    submitLabel: string;
    /** where the form posts */
    action: string;
    /** the consent line, followed by the policy link */
    consent: string;
    policy: { label: string; href: string };
  };
  /** the link columns, four in a row on desktop */
  columns: ApexspaceFooterColumn[];
  /** the copyright line */
  copyright: string;
  /** social links, shown as icons */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** the faint full-bleed backdrop (cropped like object-fit: cover); empty shows a faint tint */
  media?: ReactNode;
  className?: string;
}

const mono = "font-mono text-[0.75rem] leading-[1.4] tracking-[0.06em] uppercase";

/** Wordmark, contact and sign-up left; mono link columns, copyright and socials right. */
export function ApexspaceFooter({ wordmark, contact, subscribe, columns, copyright, socials, media, className }: ApexspaceFooterProps) {
  return (
    <footer className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      <div aria-hidden className="absolute inset-0 -z-10 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">{media ?? <div className="bg-muted/15" />}</div>

      {/* Phones: the four parts stack in source order. Desktop: brand and contact share the left
          column, links and the copyright row the right one (from 44%). */}
      <div className="grid grid-cols-1 gap-y-8 px-gutter py-[3.75rem] lg:grid-cols-[44.1%_minmax(0,1fr)] lg:gap-y-0 lg:py-20">
        <div className="lg:col-start-1 lg:row-start-1">
          <ApexspaceWordmark {...wordmark} size="lg" />
        </div>

        <div className="grid gap-[2.6rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[48rem] lg:grid-cols-4 lg:gap-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className={mono}>{col.heading}</p>
              <ul className="mt-[0.3rem] flex flex-col gap-[0.3rem] lg:mt-[0.45rem] lg:gap-[0.45rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={cn(mono, "block w-fit text-muted-foreground transition-colors duration-300 ease-[ease] hover:text-foreground motion-reduce:transition-none")}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:mt-[3.75rem] lg:max-w-[22rem]">
          <ApexspaceButton {...contact} variant="dark" className="h-[3.125rem] w-full justify-between px-8" />
          <form action={subscribe.action} className="mt-6 lg:mt-14">
            <label className={cn(mono, "block")}>
              {subscribe.label}
              <span className="mt-4 flex h-[3.125rem] items-center border border-foreground/30 transition-colors duration-300 focus-within:border-foreground">
                <input
                  type="email"
                  name="email"
                  placeholder={subscribe.placeholder}
                  className="h-full min-w-0 flex-1 bg-transparent px-4 font-sans text-base tracking-normal normal-case placeholder:text-muted-foreground focus:outline-none"
                />
                <button type="submit" aria-label={subscribe.submitLabel} className="flex h-full w-12 items-center justify-center">
                  <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.5} />
                </button>
              </span>
            </label>
            <p className="mt-6 text-[0.8125rem] leading-[1.4]">
              {subscribe.consent}{" "}
              <a href={subscribe.policy.href} className="underline underline-offset-2">
                {subscribe.policy.label}
              </a>
            </p>
          </form>
        </div>

        <div className="flex flex-col-reverse gap-12 lg:col-start-2 lg:row-start-3 lg:flex-row lg:items-center lg:gap-16 lg:self-end">
          <p className="text-base leading-[1.4]">{copyright}</p>
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="flex size-5 items-center justify-center transition-colors duration-300 hover:text-muted-foreground motion-reduce:transition-none [&>svg]:size-4">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
