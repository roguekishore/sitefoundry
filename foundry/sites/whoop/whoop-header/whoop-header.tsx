import { useEffect, useState } from "react";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WhoopWordmark } from "@foundry/whoop-wordmark";

export interface WhoopHeaderLink {
  label: string;
  href: string;
}

export interface WhoopHeaderProps {
  /** brand name for the wordmark, and where it links */
  brand: { name: string; href: string };
  /** one line in the thin strip above the bar (leave out for no strip) */
  announcement?: { label: string; href: string };
  /** the links: in the middle of the bar on desktop, in the drawer on phones */
  links: WhoopHeaderLink[];
  /** the account icon link (desktop) */
  account: { label: string; href: string };
  /** the bag icon link */
  bag: { label: string; href: string };
  /** screen-reader labels of the drawer's open and close buttons */
  menuLabels: { open: string; close: string };
  className?: string;
}

const band = "bg-foreground text-background dark:bg-card dark:text-card-foreground";
const iconLink =
  "grid size-10 place-items-center rounded-full transition-opacity duration-125 ease-in-out hover:opacity-60 motion-reduce:transition-none";

/** Whoop's black sticky bar with an announcement strip and a phone drawer. */
export function WhoopHeader({ brand, announcement, links, account, bag, menuLabels, className }: WhoopHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {announcement && (
        <a
          href={announcement.href}
          className="block bg-highlight text-center text-[0.73rem] leading-[0.9375rem] text-highlight-foreground lg:text-xs lg:leading-6"
        >
          {announcement.label}
        </a>
      )}
      <header className={cn("sticky top-0 z-40", band, className)}>
        <div className="mx-auto flex h-20 max-w-page items-center px-gutter">
          <WhoopWordmark name={brand.name} href={brand.href} className="text-[1.75rem]" />
          <nav className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-9">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-base underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color,color] duration-125 ease-in-out hover:decoration-current motion-reduce:transition-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-auto flex items-center gap-1 lg:ml-0">
            <button
              type="button"
              aria-label={menuLabels.open}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={cn(iconLink, "lg:hidden")}
            >
              <Menu aria-hidden className="size-6" strokeWidth={1.5} />
            </button>
            <a href={account.href} aria-label={account.label} className={cn(iconLink, "hidden lg:grid")}>
              <UserRound aria-hidden className="size-6" strokeWidth={1.5} />
            </a>
            <a href={bag.href} aria-label={bag.label} className={iconLink}>
              <ShoppingBag aria-hidden className="size-[1.375rem]" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </header>

      {/* phone drawer: slides in from the left, the backdrop fades (0.5s, like the original) */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", !open && "pointer-events-none")} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/40 transition-[opacity,visibility] duration-500 ease-in-out motion-reduce:transition-none",
            open ? "visible opacity-100" : "invisible opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[min(25rem,88%)] flex-col transition-[translate,visibility] duration-500 ease-in-out motion-reduce:transition-none",
            band,
            open ? "visible translate-x-0" : "invisible -translate-x-full",
          )}
        >
          <div className="flex h-20 items-center justify-between px-gutter">
            <WhoopWordmark name={brand.name} className="text-[1.65rem]" />
            <button type="button" aria-label={menuLabels.close} onClick={() => setOpen(false)} className={iconLink}>
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col px-gutter pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  className="block border-b border-current/15 py-4 text-2xl tracking-[-0.02em] transition-opacity duration-125 hover:opacity-60"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={account.href} tabIndex={open ? 0 : -1} className="block py-4 text-base opacity-60">
                {account.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
