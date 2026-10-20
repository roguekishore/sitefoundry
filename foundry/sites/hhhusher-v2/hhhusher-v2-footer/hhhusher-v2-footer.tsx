import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherV2Ease } from "@foundry/hhhusher-v2-button";
import "./hhhusher-v2-footer.css";

export interface HhhusherV2FooterLink {
  label: string;
  href: string;
}

export interface HhhusherV2FooterProps {
  /** the newsletter title */
  title: string;
  /** placeholder of the email field */
  emailPlaceholder: string;
  /** label of the email field, for screen readers */
  emailLabel?: string;
  /** the subscribe button */
  submitLabel: string;
  /** the consent line next to the checkbox; subscribe lights up once it's ticked */
  consent: string;
  /** where the form posts */
  action?: string;
  /** links, laid out in two columns */
  links: HhhusherV2FooterLink[];
  /** the giant wordmark across the bottom, set at 24% of the window width: keep it to about six capitals */
  wordmark: string;
  /** curtain mode: sticks to the window bottom behind the page, which lifts off it at the end */
  reveal?: boolean;
  className?: string;
}

export function HhhusherV2Footer({ title, emailPlaceholder, emailLabel, submitLabel, consent, action, links, wordmark, reveal = false, className }: HhhusherV2FooterProps) {
  const letters = Array.from(wordmark);
  return (
    <footer
      data-reveal={reveal || undefined}
      className={cn("hhhusher-v2-footer dark bg-background text-foreground", reveal && "sticky bottom-0 z-0", className)}
    >
      <div className="mx-auto max-w-page px-gutter pt-20 lg:pt-7">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
          <form action={action} className="group max-w-[30rem]">
            <p className="font-display text-[1.3rem] leading-[1.3] font-[570] tracking-[-0.02em] lg:text-[1.5rem]">{title}</p>
            <div className="mt-9 flex gap-2.5 lg:mt-5">
              <label className="min-w-0 flex-1 lg:max-w-[21.25rem]">
                <span className="sr-only">{emailLabel ?? emailPlaceholder}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={emailPlaceholder}
                  className="h-[2.8rem] w-full rounded-lg bg-foreground/20 px-4 font-mono text-base font-bold text-foreground uppercase placeholder:text-foreground/60 focus:outline-2 focus:outline-ring lg:h-[2.6875rem] lg:text-[0.75rem]"
                />
              </label>
              <button
                type="submit"
                className={cn(
                  "h-[2.8rem] w-[8.4rem] shrink-0 rounded-lg border border-foreground/20 bg-foreground/15 font-mono text-[0.75rem] font-bold text-foreground/50 uppercase transition-colors lg:h-[2.6875rem] lg:w-[8.125rem]",
                  "group-has-[input[type=checkbox]:checked]:border-primary group-has-[input[type=checkbox]:checked]:bg-primary group-has-[input[type=checkbox]:checked]:text-primary-foreground",
                  hhhusherV2Ease,
                )}
              >
                {submitLabel}
              </button>
            </div>
            <label className="mt-6 flex cursor-pointer items-start gap-3 lg:mt-7">
              <input type="checkbox" name="consent" required className="mt-0.5 size-[1.15rem] shrink-0 cursor-pointer appearance-none rounded-sm border border-foreground bg-transparent checked:border-primary checked:bg-primary" />
              <span className="font-display text-[0.92rem] leading-[1.4] font-semibold lg:text-[0.875rem] lg:leading-[1.45]">{consent}</span>
            </label>
          </form>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 self-start lg:pt-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cn("font-mono text-[0.75rem] font-bold uppercase transition-colors hover:text-primary", hhhusherV2Ease)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* the giant wordmark: each letter slides in through its own mask */}
        <p
          aria-label={wordmark}
          className="mt-16 pb-12 font-display text-[24vw] leading-[0.8] font-black tracking-[-0.025em] whitespace-nowrap lg:mt-[4.6rem] lg:pb-[7rem] lg:text-[min(24vw,21.6rem)]"
        >
          {letters.map((letter, i) => (
            <span key={i} aria-hidden className="inline-block overflow-x-clip">
              <span className="hhhusher-v2-footer-letter inline-block" style={{ "--hh-far": `${45 + i * 12}%` } as CSSProperties}>
                {letter}
              </span>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
