import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherEase, hhhusherLabel } from "@foundry/hhhusher-button";
import "./hhhusher-footer.css";

export interface HhhusherFooterLink {
  label: string;
  href: string;
}

export interface HhhusherFooterProps {
  /** the small heading over the sign-up form */
  newsletterTitle: string;
  /** placeholder (and screen-reader name) of the email field */
  emailPlaceholder: string;
  /** the button next to the field */
  subscribeLabel: string;
  /** the consent text next to the checkbox */
  consent: string;
  /** where the form posts to */
  action?: string;
  /** link columns on the right (two columns of two in the original) */
  columns: HhhusherFooterLink[][];
  /** the giant wordmark across the bottom */
  wordmark: string;
  className?: string;
}

/**
 * A dark footer that looks fixed under the page: as the page scrolls off it, the footer stays
 * put and is uncovered from the bottom up. A small "stay in touch" form left (glass field, glass
 * button, consent checkbox), two columns of mono links right, and a giant black-weight wordmark
 * across the bottom whose letters slide in from the left as it is uncovered.
 */
export function HhhusherFooter({ newsletterTitle, emailPlaceholder, subscribeLabel, consent, action = "#", columns, wordmark, className }: HhhusherFooterProps) {
  return (
    <footer className={cn("hhhusher-footer dark overflow-clip bg-background text-foreground", className)}>
      <div className="hhhusher-footer-inner mx-auto flex max-w-page flex-col px-gutter pt-[7.4rem] pb-8 lg:pt-8 lg:pb-[7.5rem]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <form action={action} className="flex max-w-[30rem] flex-col">
            <h2 className="font-display text-[1.3rem] leading-[1.2] font-medium tracking-[-0.01em] lg:text-2xl">{newsletterTitle}</h2>
            <div className="mt-[3.4rem] flex gap-2.5 lg:mt-7">
              <input
                type="email"
                name="email"
                required
                placeholder={emailPlaceholder}
                aria-label={emailPlaceholder}
                className={cn(
                  hhhusherLabel,
                  "h-[2.8rem] min-w-0 flex-1 rounded-lg bg-foreground/20 px-4 text-[1rem] text-foreground placeholder:text-foreground/50 focus:outline-2 focus:outline-ring lg:h-[2.6875rem] lg:text-xs",
                )}
              />
              <button
                type="submit"
                className={cn(
                  hhhusherLabel,
                  "h-[2.8rem] shrink-0 rounded-lg border border-foreground/20 bg-foreground/15 px-8 text-foreground/50 transition-colors duration-300 hover:border-foreground hover:text-foreground lg:h-[2.6875rem]",
                  hhhusherEase,
                )}
              >
                {subscribeLabel}
              </button>
            </div>
            <label className="mt-6 flex items-start gap-3 text-[0.9rem] leading-[1.45] font-semibold lg:text-sm lg:leading-[1.4]">
              <input type="checkbox" name="consent" required className="mt-0.5 size-[1.15rem] shrink-0 appearance-none rounded-[3px] border border-foreground checked:bg-primary" />
              <span>{consent}</span>
            </label>
          </form>

          <nav className="grid grid-cols-2 gap-10">
            {columns.map((links, c) => (
              <ul key={c} className="flex flex-col gap-7">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href} className={cn(hhhusherLabel, "transition-colors duration-300 hover:text-primary", hhhusherEase)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <p aria-label={wordmark} className="mt-16 overflow-clip font-display text-[20vw] leading-[0.8] font-black tracking-[-0.03em] whitespace-nowrap lg:mt-[6.25rem] lg:text-[18.125rem] lg:tracking-[-0.017em]">
          {Array.from(wordmark).map((char, i) => (
            <span key={i} aria-hidden className="hhhusher-footer-char inline-block" style={{ "--hhhusher-char": i } as CSSProperties}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
