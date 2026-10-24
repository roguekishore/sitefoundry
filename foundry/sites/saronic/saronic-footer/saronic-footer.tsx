import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton } from "@foundry/saronic-button";

export interface SaronicFooterLink {
  /** the link text */
  label: ReactNode;
  href: string;
}

export interface SaronicFooterGroup {
  /** the mono caption over the group (desktop) */
  title: ReactNode;
  links: SaronicFooterLink[];
}

export interface SaronicSocialLink {
  /** the network's name, for screen readers */
  label: string;
  href: string;
  /** its icon */
  icon: ReactNode;
}

export interface SaronicFooterProps {
  /** a big mark shown in its own cell (an icon) */
  mark?: ReactNode;
  /** where the mark links */
  markHref?: string;
  /** screen-reader label for the mark's link */
  markLabel?: string;
  /** two link groups: one column each on desktop, one merged list on phones */
  groups: SaronicFooterGroup[];
  /** the caption over the merged list on phones ("More") */
  mobileTitle: ReactNode;
  /** the caption over the social icons */
  socialTitle?: ReactNode;
  social?: SaronicSocialLink[];
  /** the careers cell: caption, invitation and button */
  join?: { eyebrow: ReactNode; text: ReactNode; cta: { label: ReactNode; href: string; external?: boolean } };
  /** the address cell's line ("Built in …") */
  place?: ReactNode;
  /** small links under it (privacy…) */
  legal?: SaronicFooterLink[];
  /** the copyright line */
  copyright?: ReactNode;
  /** labels for the live pointer readout chips (desktop); leave out to hide it */
  readout?: { x: string; y: string };
  /** a small glyph at the bottom-right corner (desktop) */
  cornerGlyph?: ReactNode;
  className?: string;
}

/**
 * The ink footer, a grid of hairline cells. Desktop: a narrow first column (a big mark that
 * tints on hover, a careers cell with a lime button, the address and legal lines), then two
 * wide columns of huge grey links that brighten on hover, the last with social icons and a
 * mono X / Y readout that follows the pointer. Phones: one merged link list first, then
 * careers, address, the mark and the copyright, centred.
 */
export function SaronicFooter({
  mark,
  markHref = "/",
  markLabel,
  groups,
  mobileTitle,
  socialTitle,
  social = [],
  join,
  place,
  legal = [],
  copyright,
  readout,
  cornerGlyph,
  className,
}: SaronicFooterProps) {
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!readout) return;
    setPointer({ x: Math.round(window.innerWidth / 2), y: Math.round(window.innerHeight / 2) });
    const onMove = (e: PointerEvent) => setPointer({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [readout]);

  const caption = "font-mono text-xs/[1.5] tracking-[0.06em] text-muted-foreground uppercase";
  const fade = "opacity-50 transition-opacity duration-200 hover:opacity-75 motion-reduce:transition-none";

  return (
    <footer className={cn("dark bg-card text-card-foreground", className)}>
      <div className="grid lg:grid-cols-[25fr_37.5fr_37.5fr]">
        {/* link groups: one list on phones, a column each on desktop */}
        <div className="order-1 px-4 pt-10 pb-10 lg:contents">
          <p className={cn(caption, "lg:hidden")}>{mobileTitle}</p>
          {groups.map((group, i) => {
            const last = i === groups.length - 1;
            return (
              <div
                key={i}
                className={cn(
                  "lg:relative lg:row-span-3 lg:row-start-1 lg:border-l lg:border-border lg:p-10 lg:pb-32",
                  i === 0 ? "mt-5 lg:col-start-2" : "mt-2 lg:col-start-3",
                  "lg:mt-0",
                )}
              >
                <p className={cn(caption, "max-lg:hidden")}>{group.title}</p>
                <ul className="space-y-2 lg:mt-20 lg:space-y-6">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className={cn("font-display text-[2rem]/[1.12] tracking-[-0.02em] [word-spacing:-0.08em] lg:text-[min(3.75vw,4.5rem)]/[1.12]", fade)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {last && social.length > 0 && (
                  <div className="mt-14 lg:mt-[4.5rem]">
                    {socialTitle && <p className={caption}>{socialTitle}</p>}
                    <ul className="mt-5 flex items-center gap-4">
                      {social.map((s, k) => (
                        <li key={k}>
                          <a href={s.href} aria-label={s.label} className={cn("flex [&>svg]:size-10", fade)}>
                            {s.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {last && (readout || cornerGlyph) && (
                  <div className="absolute inset-x-10 bottom-10 hidden items-end justify-between lg:flex">
                    {readout ? (
                      <p aria-hidden className="flex gap-1 font-mono text-xs/none tracking-[0.06em] text-muted-foreground uppercase tabular-nums">
                        <span className="bg-accent px-2 py-1.5">
                          {readout.x} = {pointer ? pointer.x : "—"}
                        </span>
                        <span className="bg-accent px-2 py-1.5">
                          {readout.y} = {pointer ? pointer.y : "—"}
                        </span>
                      </p>
                    ) : (
                      <span />
                    )}
                    {cornerGlyph && <span aria-hidden className="flex [&>svg]:size-7">{cornerGlyph}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* careers cell */}
        {join && (
          <div className="order-2 border-t border-border px-4 py-10 lg:col-start-1 lg:row-start-2 lg:p-10">
            <p className={caption}>{join.eyebrow}</p>
            <p className="mt-4 max-w-[13.5rem] text-lg/[1.33] font-medium tracking-[-0.02em] [word-spacing:-0.08em] lg:mt-5 lg:max-w-[17rem] lg:text-[1.375rem]/[1.33]">{join.text}</p>
            <SaronicButton href={join.cta.href} icon="external" external={join.cta.external} className="mt-10 min-w-55">
              {join.cta.label}
            </SaronicButton>
          </div>
        )}

        {/* address and legal */}
        {(place || legal.length > 0 || copyright) && (
          <div className="order-3 border-t border-border px-4 py-10 lg:col-start-1 lg:row-start-3 lg:p-10">
            {place && <p className="text-lg/[1.33] font-medium tracking-[-0.02em] [word-spacing:-0.08em] lg:text-[1.375rem]/[1.33]">{place}</p>}
            {legal.length > 0 && (
              <ul className="mt-6 space-y-2 lg:mt-7">
                {legal.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-base/[1.5] opacity-50 transition-opacity hover:opacity-75 motion-reduce:transition-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {copyright && <p className="mt-6 text-base/[1.5] opacity-70 max-lg:hidden">{copyright}</p>}
          </div>
        )}

        {/* the mark */}
        {mark && (
          <a
            href={markHref}
            aria-label={markLabel}
            className="order-4 flex items-center justify-center border-t border-border py-20 transition-colors hover:bg-accent motion-reduce:transition-none lg:col-start-1 lg:row-start-1 lg:border-t-0 lg:py-[4.375rem] [&>svg]:size-40"
          >
            {mark}
          </a>
        )}

        {copyright && <p className="order-5 px-4 pb-10 text-center text-base/[1.5] opacity-70 lg:hidden">{copyright}</p>}
      </div>
    </footer>
  );
}
