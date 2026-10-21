import { useEffect, useState, type ReactNode } from "react";
import { Menu, Wine, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MrcresidencesbocaratonUnderlineLink } from "@foundry/mrcresidencesbocaraton-underline-link";

export interface MrcresidencesbocaratonHeaderLink {
  label: string;
  href: string;
}

export interface MrcresidencesbocaratonHeaderProps {
  /** the big light word of the lockup (the brand) */
  name: string;
  /** the word stacked to its right, e.g. "Residences" */
  title: string;
  /** the tiny line under the title, e.g. the city */
  place: string;
  homeHref?: string;
  /** a small mark in front of the lockup; empty: a thin lucide glass icon */
  mark?: ReactNode;
  /** the nav links (a column at the right on desktop; the side menu on phones) */
  links: MrcresidencesbocaratonHeaderLink[];
  /** label of the phone menu button */
  menuLabel: string;
  /** screen-reader label of the side menu's close button */
  closeLabel: string;
  className?: string;
}

function Lockup({ name, title, place, mark }: Pick<MrcresidencesbocaratonHeaderProps, "name" | "title" | "place" | "mark">) {
  return (
    <span className="flex items-center gap-2 lg:gap-3">
      <span className="flex h-5 w-3 items-center justify-center [&>svg]:size-5 lg:h-8 lg:w-5 lg:[&>svg]:size-8">
        {mark ?? <Wine aria-hidden strokeWidth={1.25} />}
      </span>
      <span className="text-[27px] leading-none font-light tracking-[-0.01em] lg:text-[40px]">{name}</span>
      <span className="flex flex-col pt-0.5">
        <span className="text-[17px] leading-[0.95] font-light tracking-[0.01em] uppercase lg:text-[23px]">{title}</span>
        <span className="text-[7px] leading-[1.2] tracking-[0.08em] uppercase lg:text-[11px]">{place}</span>
      </span>
    </span>
  );
}

export function MrcresidencesbocaratonHeader({
  name,
  title,
  place,
  homeHref = "/",
  mark,
  links,
  menuLabel,
  closeLabel,
  className,
}: MrcresidencesbocaratonHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 text-primary-foreground lg:absolute", className)}>
      <div className="flex h-[62px] items-center justify-between bg-primary px-[25px] lg:h-auto lg:items-start lg:bg-transparent lg:px-10 lg:pt-10">
        <a href={homeHref} aria-label={`${name} ${title}`}>
          <Lockup name={name} title={title} place={place} mark={mark} />
        </a>

        {/* phones: MENU + burger */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex items-center gap-4 text-[12px] font-semibold uppercase lg:hidden"
        >
          {menuLabel}
          <Menu aria-hidden className="size-7" strokeWidth={1.25} />
        </button>

        {/* desktop: a right-aligned column closed by a thin rule */}
        <nav className="hidden lg:block">
          <ul className="flex flex-col items-end gap-2 border-r border-current pt-2 pb-3 pr-[15px]">
            {links.map((link) => (
              <li key={link.href + link.label} className="leading-4">
                <MrcresidencesbocaratonUnderlineLink
                  href={link.href}
                  behaviour="grow"
                  duration={300}
                  lineClassName="-bottom-0.5"
                  className="text-[14px] leading-4 font-semibold uppercase"
                >
                  {link.label}
                </MrcresidencesbocaratonUnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* phones: the side menu */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-primary px-[25px] transition-[translate,visibility] duration-500 ease-in-out motion-reduce:transition-none lg:hidden",
          open ? "visible translate-x-0" : "invisible translate-x-full",
        )}
      >
        <div className="flex h-[62px] shrink-0 items-center justify-between">
          <Lockup name={name} title={title} place={place} mark={mark} />
          <button type="button" aria-label={closeLabel} onClick={() => setOpen(false)}>
            <X aria-hidden className="size-7" strokeWidth={1.25} />
          </button>
        </div>
        <ul className="mt-6 flex flex-col">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[16px] leading-[47px] font-semibold uppercase transition-opacity duration-300 hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
