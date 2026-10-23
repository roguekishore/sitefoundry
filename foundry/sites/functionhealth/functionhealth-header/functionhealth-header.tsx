import { useEffect, useState, type ReactNode } from "react";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";

export interface FunctionhealthHeaderLink {
  label: string;
  href: string;
}

export interface FunctionhealthHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (text, svg or img), shown in light on glass and in brand colour once solid */
  logo: ReactNode;
  homeHref?: string;
  /** centred links on wide screens */
  links: FunctionhealthHeaderLink[];
  /** every link, listed in the panel the menu icon opens */
  menuLinks: FunctionhealthHeaderLink[];
  /** plain "Log in" link beside the pill (hidden on phones) */
  login?: FunctionhealthHeaderLink;
  /** the pill */
  cta: FunctionhealthHeaderLink;
  /** announcement strip above the bar, with an optional underlined link inside it */
  announcement?: { text: string; link?: FunctionhealthHeaderLink };
  /** screen-reader labels of the two icon buttons */
  searchLabel?: string;
  menuLabel?: string;
  closeLabel?: string;
  /** the bar turns solid once the page has scrolled this many window heights (the hero is ~0.95) */
  solidAfter?: number;
  className?: string;
}

export function FunctionhealthHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  menuLinks,
  login,
  cta,
  announcement,
  searchLabel = "Search",
  menuLabel = "Menu",
  closeLabel = "Close menu",
  solidAfter = 0.9,
  className,
}: FunctionhealthHeaderProps) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * solidAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidAfter]);

  const glass = !solid && !open;

  return (
    <>
      {announcement && (
        <div className="bg-primary text-primary-foreground">
          <p className="mx-auto flex h-10 max-w-page items-center justify-center px-gutter text-sm leading-none font-light">
            <span className="truncate">
              {announcement.text}
              {announcement.link && (
                <>
                  {" "}
                  <a href={announcement.link.href} className="underline underline-offset-2 transition-opacity duration-200 hover:opacity-80">
                    {announcement.link.label}
                  </a>
                </>
              )}
            </span>
          </p>
        </div>
      )}
      <div className={cn("sticky top-0 z-40 h-0", className)}>
        <div className="px-[clamp(1.25rem,4.1353vw+0.2782rem,4rem)] pt-4">
          <header
            className={cn(
              "relative mx-auto flex h-[4.125rem] max-w-[82rem] items-center justify-between gap-3 rounded-lg pr-3 pl-4 transition-[background-color,color,backdrop-filter] duration-[180ms] ease-in-out motion-reduce:transition-none lg:h-20 lg:pr-6 lg:pl-8",
              glass ? "bg-foreground/15 text-background backdrop-blur-md" : "bg-background/85 text-foreground backdrop-blur-md",
            )}
          >
            <a href={homeHref} aria-label={brand} className={cn("flex items-center transition-colors duration-[180ms]", glass ? "text-background" : "text-primary")}>
              {logo}
            </a>
            <nav aria-label={brand} className="hidden flex-1 items-center justify-center gap-6 text-base font-light lg:flex">
              {links.map((l) => (
                <a key={l.href + l.label} href={l.href} className="transition-opacity duration-150 hover:opacity-70">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 lg:gap-5">
              {login && (
                <a href={login.href} className="hidden text-base font-semibold transition-opacity duration-150 hover:opacity-70 lg:block">
                  {login.label}
                </a>
              )}
              <FunctionhealthButton href={cta.href} variant={glass ? "light" : "solid"} className="h-11 px-4 text-[0.9375rem] lg:h-[3.125rem] lg:px-6 lg:text-base">
                {cta.label}
              </FunctionhealthButton>
              <div className="flex items-center lg:gap-2">
                <button type="button" aria-label={searchLabel} className="grid size-8 place-items-center transition-opacity duration-150 hover:opacity-70 lg:size-9">
                  <Search className="size-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label={open ? closeLabel : menuLabel}
                  aria-expanded={open}
                  onClick={() => setOpen((o) => !o)}
                  className="grid size-8 place-items-center transition-opacity duration-150 hover:opacity-70 lg:size-9"
                >
                  {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
                </button>
              </div>
            </div>
            {open && (
              <nav aria-label={menuLabel} className="absolute top-[calc(100%+0.5rem)] right-0 left-0 rounded-lg bg-popover p-3 text-popover-foreground shadow-[0_18px_40px_color-mix(in_oklab,var(--foreground)_14%,transparent)] lg:left-auto lg:w-72">
                <ul>
                  {menuLinks.map((l) => (
                    <li key={l.href + l.label}>
                      <a href={l.href} className="block rounded-md px-4 py-2.5 text-lg font-light transition-colors duration-150 hover:bg-accent">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </header>
        </div>
      </div>
    </>
  );
}
