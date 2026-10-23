import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";
import "./thirdway-footer.css";

export interface ThirdwayFooterLink {
  label: string;
  href: string;
}

export interface ThirdwayFooterProps {
  /** photo behind the call-to-action card; a placeholder when empty */
  media?: ReactNode;
  /** the sentence in the cream card, up to its linked ending */
  cta: string;
  /** the underlined ending of the sentence */
  ctaLink: ThirdwayFooterLink;
  /** the wordmark, set vertically along the left edge */
  wordmark: string;
  /** text before the live scroll length, e.g. "You've scrolled" */
  scrolledPrefix: string;
  /** the unit after it, e.g. "cm" */
  scrolledUnit: string;
  /** small serif heading above the address */
  addressLabel: string;
  /** address lines */
  address: string[];
  emailLabel: string;
  email: ThirdwayFooterLink;
  socialLabel: string;
  social: ThirdwayFooterLink[];
  /** small serif heading above the large links */
  exploreLabel: string;
  explore: ThirdwayFooterLink[];
  /** the small legal list */
  legal: ThirdwayFooterLink[];
  copyright: string;
  /** credits at the bottom right: a lead-in and a link each */
  credits: { prefix: string; link: ThirdwayFooterLink }[];
  className?: string;
}

/** The page's scroll position in centimetres (96 px to the inch), one decimal. */
function useScrolledCm() {
  const [cm, setCm] = useState("0");
  useEffect(() => {
    const update = () => setCm(String(Math.round(window.scrollY * 0.02646 * 10) / 10).replace(/\.0$/, ""));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return cm;
}

const small = "text-sm leading-[1.3] font-[560] tracking-[-0.02em]";
const serifLabel = "font-[family-name:var(--typeface-serif,Georgia,serif)] text-sm leading-[1.3] font-[350] tracking-[-0.01em]";

/**
 * A full-width photo with a cream call-to-action card, then the dark footer: a vertical wordmark
 * beside a ruler that counts how far you have scrolled, address and contact details, large page
 * links, a small legal list and a credits bar.
 */
export function ThirdwayFooter({ media, cta, ctaLink, wordmark, scrolledPrefix, scrolledUnit, addressLabel, address, emailLabel, email, socialLabel, social, exploreLabel, explore, legal, copyright, credits, className }: ThirdwayFooterProps) {
  const cm = useScrolledCm();
  return (
    <footer id="footer" className={cn("relative bg-background text-foreground", className)}>
      <div className="relative h-[30rem] lg:h-[37.9rem]">
        <div className="absolute inset-0">{media ?? <ThirdwayPlaceholder className="size-full rounded-none" />}</div>
        <div className="absolute inset-x-4 bottom-4 rounded-[2px] bg-background p-4 text-foreground lg:right-6 lg:bottom-6 lg:left-auto lg:h-[15.4rem] lg:w-[calc(50%-0.7rem)] lg:p-8">
          <p className="[word-spacing:-0.07em] max-w-[30rem] text-[2rem] leading-none font-[560] tracking-[-0.06em] lg:max-w-[40rem] lg:text-[3rem]">
            {cta}{" "}
            <a href={ctaLink.href} className="underline decoration-2 underline-offset-[0.12em]">
              {ctaLink.label}
            </a>
          </p>
        </div>
      </div>

      <div className="dark bg-background text-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[22rem] border-b border-border lg:h-auto lg:border-b-0">
            <span className="absolute bottom-4 left-4 text-[3.5rem] leading-none font-[560] tracking-[-0.06em] [text-orientation:mixed] [writing-mode:vertical-rl] rotate-180 lg:bottom-6 lg:left-8 lg:text-[7.5rem]">{wordmark}</span>
            <div aria-hidden className="thirdway-footer-ruler absolute inset-y-0 left-[5.2rem] w-3.5 border-r border-foreground/60 lg:left-[9.4rem]" />
            <div className="absolute top-0 left-[6rem] flex items-center gap-4 text-xl leading-none font-[560] tracking-[-0.04em] lg:left-[10.2rem]">
              <span aria-hidden className="h-px w-10 bg-foreground/60 lg:w-14" />
              <span className="tabular-nums">{`${scrolledPrefix} ${cm}${scrolledUnit}`}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-x-4 px-gutter py-5 lg:min-h-[29.3rem] lg:border-b lg:border-border lg:px-0 lg:pr-8 lg:pb-0">
              <div className="order-2 grid content-start gap-8 lg:order-1">
                <div>
                  <p className={serifLabel}>{addressLabel}</p>
                  <address className={cn(small, "mt-2 not-italic")}>
                    {address.map((l, i) => (
                      <span key={i} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>
                <div>
                  <p className={serifLabel}>{emailLabel}</p>
                  <a href={email.href} className={cn(small, "mt-2 block")}>
                    {email.label}
                  </a>
                </div>
                <div>
                  <p className={serifLabel}>{socialLabel}</p>
                  <ul className={cn(small, "mt-2 grid gap-1.5")}>
                    {social.map((l) => (
                      <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className={serifLabel}>{exploreLabel}</p>
                <ul className="mt-2 [word-spacing:-0.07em] text-[1.375rem] leading-[1.1] font-[560] tracking-[-0.06em] lg:text-[2rem] lg:leading-[1.1]">
                  {explore.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-opacity duration-150 hover:opacity-60 motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className={cn(small, "grid gap-0.5 border-t border-border px-gutter py-5 lg:border-t-0 lg:px-0 lg:py-7")}>
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 border-t border-border px-gutter py-4 text-xs leading-[1.1] font-[560] tracking-[-0.02em] md:px-[calc(var(--page-gutter)*2)] lg:items-center">
          <p>{copyright}</p>
          <p className="flex flex-col items-end gap-2 lg:flex-row lg:gap-3">
            {credits.map((c) => (
              <span key={c.link.label}>
                {c.prefix}{" "}
                <a href={c.link.href} className="underline underline-offset-2">
                  {c.link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
