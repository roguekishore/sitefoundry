import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./helionenergy-header.css";

export interface HelionenergyHeaderLink {
  /** the link text (set in uppercase mono) */
  label: ReactNode;
  href: string;
}

export interface HelionenergyHeaderProps {
  /** the brand mark (an icon), shown left of the nav; it fades out once the page scrolls */
  mark: ReactNode;
  /** the brand's name, for screen readers */
  brandLabel: string;
  /** where the mark links */
  brandHref?: string;
  /** the links in the navy pill */
  links: HelionenergyHeaderLink[];
  /** the white pill after them (e.g. careers) */
  cta: HelionenergyHeaderLink;
  /** the phone menu button's label, for screen readers */
  menuLabel: string;
  /** fade the mark out over the first 300px of scrolling */
  fadeMark?: boolean;
  /** "fixed" floats over the page (the original); "static" sits in the flow (for previews) */
  position?: "fixed" | "static";
  className?: string;
}

/**
 * A floating header with no bar: on desktop a centred group of the brand mark, a navy pill of
 * uppercase mono links and a white pill for the main call to action; on phones the mark on the
 * left and a white menu square on the right, opening a navy panel. The mark fades out as the
 * page scrolls; links dim to 60% on hover (0.2s ease-out).
 */
export function HelionenergyHeader({
  mark,
  brandLabel,
  brandHref = "/",
  links,
  cta,
  menuLabel,
  fadeMark = true,
  position = "fixed",
  className,
}: HelionenergyHeaderProps) {
  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 h-14 px-gutter font-mono text-sm/none tracking-[-0.01em] uppercase lg:h-[3.125rem]",
        position === "fixed" ? "fixed" : "relative",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-page items-center justify-between lg:items-start lg:justify-center lg:pt-2.5">
        <a
          href={brandHref}
          aria-label={brandLabel}
          className={cn(
            "flex size-8 items-center justify-center text-secondary-foreground lg:mr-[1.3rem] lg:size-10 [&>svg]:size-full lg:[&>svg]:size-[1.875rem]",
            fadeMark && "helionenergy-header-mark",
          )}
        >
          {mark}
        </a>

        <nav className="flex gap-1 max-lg:hidden">
          <ul className="flex h-10 items-center rounded-sm bg-secondary px-1 text-secondary-foreground">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="flex h-10 items-center px-5 transition-opacity duration-200 ease-out hover:opacity-60 motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cta.href}
            className="flex h-10 items-center rounded-sm bg-card px-4 text-card-foreground transition-opacity duration-200 ease-out hover:opacity-80 motion-reduce:transition-none"
          >
            {cta.label}
          </a>
        </nav>

        <details className="group/menu lg:hidden">
          <summary
            aria-label={menuLabel}
            className="flex size-[2.125rem] cursor-pointer list-none items-center justify-center rounded-sm bg-card text-card-foreground [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden strokeWidth={1.75} className="size-4" />
          </summary>
          <div className="absolute inset-x-gutter top-full hidden rounded-sm bg-secondary p-2 text-secondary-foreground group-open/menu:block">
            <ul className="flex flex-col">
              {[...links, cta].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="flex px-3 py-3.5 transition-opacity duration-200 ease-out hover:opacity-60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
