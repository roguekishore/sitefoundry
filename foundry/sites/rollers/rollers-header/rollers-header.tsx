import { useEffect, useState, type ReactNode } from "react";
import { Cylinder, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RollersButton } from "@foundry/rollers-button";
import "./rollers-header.css";

export interface RollersHeaderLink {
  label: string;
  href: string;
}

export interface RollersHeaderProps {
  /** the wordmark beside the mark */
  brand: string;
  homeHref?: string;
  /** the mark in the charcoal logo cell; an orange roller-drum icon by default */
  mark?: ReactNode;
  /** the short uppercase line in the orange cell (what you offer, e.g. "Dry hire & wet hire") */
  tagline: string;
  /** the phone link: label as shown ("Call 1800 940 220") and its tel: href */
  phone: RollersHeaderLink;
  /** the label of the orange menu cell */
  menuLabel: string;
  /** screen-reader label of the panel's close button */
  closeLabel: string;
  /** the links listed in the sliding menu panel */
  links: RollersHeaderLink[];
  /** the button at the foot of the menu panel */
  cta?: RollersHeaderLink;
  className?: string;
}

const ease = "duration-[450ms] ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none";

/** The plant-hire header, a strip of solid cells: a charcoal logo cell, an orange tagline cell
    to the middle of the page, a white cell with the phone number and an orange Menu cell. It
    sticks to the top; on wide screens the wordmark tucks away during the first 120px of scroll.
    On phones the phone and tagline become two thin bars above it that scroll away. Menu opens a
    charcoal panel sliding in from the right. */
export function RollersHeader({
  brand,
  homeHref = "/",
  mark,
  tagline,
  phone,
  menuLabel,
  closeLabel,
  links,
  cta,
  className,
}: RollersHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("sticky -top-[4.0625rem] z-50 font-display lg:top-0", className)}>
      {/* phones: the phone number and the tagline as two thin bars that scroll away */}
      <a
        href={phone.href}
        className="flex h-[2.0625rem] items-center justify-center bg-muted-foreground text-[0.875rem] text-background uppercase lg:hidden"
      >
        {phone.label}
      </a>
      <p className="flex h-8 items-center justify-center bg-primary text-[0.875rem] text-primary-foreground uppercase lg:hidden">
        {tagline}
      </p>

      <div className="flex h-16 bg-background shadow-[0_6px_12px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)]">
        <div className="flex flex-1 lg:w-1/2 lg:flex-none">
          <a
            href={homeHref}
            className="flex min-w-0 flex-1 items-center bg-secondary px-gutter text-secondary-foreground lg:flex-none lg:px-10"
            aria-label={brand}
          >
            <span aria-hidden className="flex size-10 items-center justify-center text-primary">
              {mark ?? <Cylinder className="size-10" strokeWidth={2.5} />}
            </span>
            <span className="rollers-header-wordmark ml-3 overflow-clip text-[1.75rem] leading-none sm:text-[2.05rem] font-bold tracking-[-0.02em] whitespace-nowrap lg:max-w-[11rem]">
              {brand}
            </span>
          </a>
          <p className="hidden flex-1 items-center justify-end bg-primary pr-5 text-[1.125rem] leading-none font-medium tracking-[0.1em] text-primary-foreground uppercase lg:flex">
            {tagline}
          </p>
        </div>

        <div className="flex lg:flex-1">
          <a
            href={phone.href}
            className="hidden flex-1 items-center justify-end pr-6 text-[1.125rem] leading-none text-foreground uppercase transition-colors duration-200 ease-linear hover:text-primary lg:flex"
          >
            {phone.label}
          </a>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn(
              "flex w-[5.9375rem] items-center justify-center bg-primary text-[0.875rem] text-primary-foreground transition-colors hover:bg-muted-foreground lg:w-[6.625rem] lg:text-[1.125rem]",
              ease,
            )}
          >
            {menuLabel}
          </button>
        </div>
      </div>

      {/* the sliding panel and its scrim, in a clipping layer so the parked panel never widens the page */}
      <div className="pointer-events-none fixed inset-0 overflow-clip">
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-secondary/40 transition-opacity",
          ease,
          open ? "pointer-events-auto opacity-100" : "opacity-0",
        )}
      />
      <nav
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "dark fixed inset-y-0 right-0 flex w-full max-w-[26rem] flex-col bg-background px-gutter pt-5 pb-10 text-foreground transition-[translate,visibility] lg:px-10",
          ease,
          open ? "pointer-events-auto visible translate-x-0" : "invisible translate-x-full",
        )}
      >
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => setOpen(false)}
          className="ml-auto flex size-11 items-center justify-center bg-primary text-primary-foreground transition-colors duration-[450ms] hover:bg-muted-foreground"
        >
          <X className="size-6" strokeWidth={2} />
        </button>
        <ul className="mt-8 flex flex-col">
          {links.map((link) => (
            <li key={link.href} className="border-b border-border/40">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[1.75rem] leading-[1.2] transition-colors duration-200 ease-linear hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex pt-10">
          {cta ? (
            <RollersButton href={cta.href} variant="pill">
              {cta.label}
            </RollersButton>
          ) : null}
          <RollersButton href={phone.href}>{phone.label}</RollersButton>
        </div>
      </nav>
      </div>
    </header>
  );
}
