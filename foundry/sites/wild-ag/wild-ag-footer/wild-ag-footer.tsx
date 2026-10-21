import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgWordmark } from "@foundry/wild-ag-wordmark";

export interface WildAgFooterLink {
  label: string;
  href: string;
}

export interface WildAgFooterSocial extends WildAgFooterLink {
  /** the icon inside the round button */
  icon: ReactNode;
}

export interface WildAgFooterProps {
  /** the brand name, set as the wordmark */
  brand: string;
  homeHref?: string;
  /** e.g. © 2026 All rights reserved */
  copyright: string;
  /** a credit line: a lead word, then links joined by "&" */
  credit?: { lead: string; links: WildAgFooterLink[] };
  /** the label before the social buttons */
  followLabel?: string;
  socials?: WildAgFooterSocial[];
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none";

export function WildAgFooter({ brand, homeHref = "/", copyright, credit, followLabel, socials = [], className }: WildAgFooterProps) {
  const slash = <span aria-hidden className="hidden px-3 lg:inline">/</span>;
  return (
    <footer className={cn("bg-background px-gutter", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center gap-4 border-t-2 border-border pt-9 pb-9 text-center lg:flex-row lg:justify-between lg:py-14 lg:text-left">
        <a href={homeHref} className="text-[1.6rem]">
          <WildAgWordmark text={brand} />
        </a>
        <div className="flex flex-col items-center gap-x-0 gap-y-3 text-[0.9rem] leading-[1.4] font-semibold text-highlight lg:flex-row lg:gap-y-0">
          <p>{copyright}</p>
          {credit && (
            <>
              {slash}
              <p>
                {credit.lead}{" "}
                {credit.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && " & "}
                    <a href={l.href} className={cn("text-primary transition-colors hover:text-foreground", ease)}>
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            </>
          )}
          {followLabel && (
            <>
              {slash}
              <p className="mt-2 lg:mt-0 lg:mr-3">{followLabel}</p>
            </>
          )}
          {socials.length > 0 && (
            <ul className="flex gap-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-highlight [&_svg]:size-4",
                      ease,
                    )}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
