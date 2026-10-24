import { useEffect, useState } from "react";
import { ChevronDown, Menu, UserRound, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoeWordmark } from "@foundry/zoe-wordmark";

export interface ZoeHeaderLink {
  label: string;
  href: string;
  /** a small badge after the label (e.g. "New") */
  badge?: string;
  /** links shown in a small menu under this one (desktop: on hover; phones: listed under it) */
  children?: ZoeHeaderLink[];
}

export interface ZoeHeaderProps {
  /** brand name for the wordmark, and where it links */
  brand: { name: string; href: string };
  /** the navy strip above the bar: plain text, then a yellow link (leave out for no strip) */
  announcement?: { text: string; link: { label: string; href: string } };
  /** the bar's links */
  links: ZoeHeaderLink[];
  /** the outlined button on the right */
  login: { label: string; href: string };
  /** screen-reader labels of the phone menu's open and close buttons */
  menuLabels: { open: string; close: string };
  className?: string;
}

const navLink =
  "transition-colors duration-200 ease-in-out hover:text-ring focus-visible:text-ring motion-reduce:transition-none";

function Badge({ label }: { label: string }) {
  return (
    <span className="ml-2 rounded-[calc(var(--radius)/3)] bg-primary px-1.5 py-0.5 text-xs font-semibold text-primary-foreground">
      {label}
    </span>
  );
}

/** Zoe's pinned strip + white bar, with a hover menu and a phone panel. */
export function ZoeHeader({ brand, announcement, links, login, menuLabels, className }: ZoeHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-40", className)}>
      {announcement && (
        <p className="flex min-h-[4.625rem] items-center justify-center bg-foreground px-gutter text-center text-base font-medium text-background lg:min-h-11 dark:bg-card dark:text-card-foreground">
          <span>
            {announcement.text}{" "}
            <a href={announcement.link.href} className="font-semibold text-primary hover:underline">
              {announcement.link.label}
            </a>
          </span>
        </p>
      )}

      <div className="relative bg-background text-foreground">
        <div className="mx-auto flex h-[4.5rem] max-w-page items-center px-gutter lg:px-7">
          <ZoeWordmark name={brand.name} href={brand.href} />

          <nav className="ml-8 hidden lg:block">
            <ul className="flex items-center gap-6 text-lg">
              {links.map((l) =>
                l.children ? (
                  <li key={l.label} className="group relative">
                    <a href={l.href} className={cn(navLink, "inline-flex items-center gap-1.5")}>
                      {l.label}
                      <ChevronDown
                        aria-hidden
                        className="size-4 transition-transform duration-300 ease-in-out group-hover:rotate-180 motion-reduce:transition-none"
                        strokeWidth={1.5}
                      />
                    </a>
                    {/* the product menu: fades and drops in on hover or keyboard focus */}
                    <div className="invisible absolute top-full -left-4 pt-4 opacity-0 transition-[opacity,translate,visibility] duration-250 ease-out group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none -translate-y-1">
                      <ul className="min-w-60 rounded-lg bg-popover p-2 text-base text-popover-foreground shadow-[0_10px_40px_0_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
                        {l.children.map((c) => (
                          <li key={c.label}>
                            <a href={c.href} className={cn(navLink, "flex items-center rounded-md px-3 py-2.5 hover:bg-card")}>
                              {c.label}
                              {c.badge && <Badge label={c.badge} />}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={l.label}>
                    <a href={l.href} className={navLink}>
                      {l.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <ZoeButton
            href={login.href}
            variant="outline"
            size="sm"
            icon={<UserRound aria-hidden className="size-3.5" strokeWidth={1.75} />}
            className="ml-auto hidden lg:inline-flex"
          >
            {login.label}
          </ZoeButton>

          <button
            type="button"
            aria-label={open ? menuLabels.close : menuLabels.open}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 ml-auto grid size-10 place-items-center text-foreground/60 lg:hidden"
          >
            {open ? (
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden className="size-7" strokeWidth={1.25} />
            )}
          </button>
        </div>

        {/* phone panel: drops in under the bar and fills the rest of the screen */}
        <div
          aria-hidden={!open}
          className={cn(
            "absolute inset-x-0 top-full h-[calc(100svh-9.125rem)] overflow-y-auto border-t bg-background px-gutter pt-4 pb-10 transition-[opacity,translate,visibility] duration-300 ease-in-out motion-reduce:transition-none lg:hidden",
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
          )}
        >
          <ul className="text-xl">
            {links.map((l) => (
              <li key={l.label} className="border-b">
                <a href={l.href} tabIndex={open ? 0 : -1} className={cn(navLink, "block py-4")}>
                  {l.label}
                </a>
                {l.children && (
                  <ul className="-mt-1 pb-4 text-base">
                    {l.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} tabIndex={open ? 0 : -1} className={cn(navLink, "flex items-center py-2 pl-4")}>
                          {c.label}
                          {c.badge && <Badge label={c.badge} />}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ZoeButton
            href={login.href}
            variant="outline"
            icon={<UserRound aria-hidden className="size-4" strokeWidth={1.75} />}
            className="mt-8 w-full"
          >
            {login.label}
          </ZoeButton>
        </div>
      </div>
    </header>
  );
}
