import type { CSSProperties, ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GranolaButton } from "@foundry/granola-button";
import "./granola-integrations.css";

export interface GranolaIntegrationTile {
  /** the tool's name (shown when there is no icon, otherwise its accessible label) */
  name: string;
  /** the tool's mark (e.g. a lucide icon) */
  icon?: ReactNode;
}

export interface GranolaIntegrationsProps {
  /** the small serif line above the headline */
  eyebrow?: string;
  /** the huge serif headline */
  title: string;
  /** the ink call to action */
  cta?: { label: string; href: string };
  /** the serif statement on the left of the hairline row */
  statement: string;
  /** the paragraph on the right of it */
  body: string;
  /** the tools, as white square tiles in a strip that slides with the scroll */
  tiles: GranolaIntegrationTile[];
  className?: string;
}

/* Tile edge lengths in rem along the strip: a gentle wave, largest in the middle. */
const SIZES = [5.6, 7.2, 8.6, 9.4, 9.5, 8.9, 7.75, 6.2];

export function GranolaIntegrations({ eyebrow, title, cta, statement, body, tiles, className }: GranolaIntegrationsProps) {
  return (
    <section className={cn("bg-card text-card-foreground", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] px-gutter pt-[5.5rem] lg:pt-32">
        {eyebrow && <p className="font-display text-base">{eyebrow}</p>}
        <h2 className="mt-6 max-w-[11ch] font-display text-[3.75rem] leading-[0.97] tracking-[-0.01em] lg:mt-7 lg:max-w-[18ch] lg:text-[min(7.5vw,6.75rem)]">
          {title}
        </h2>
        {cta && (
          <GranolaButton href={cta.href} trailingIcon={<ArrowDown />} className="mt-8 h-12 w-full text-base lg:mt-10 lg:h-14 lg:w-fit lg:text-sm">
            {cta.label}
          </GranolaButton>
        )}
        <div className="mt-20 border-t border-foreground/10 pt-6 lg:mt-32 lg:grid lg:grid-cols-[1fr_28rem] lg:gap-8 lg:pt-4">
          <h3 className="max-w-[24ch] font-display text-2xl leading-[1.05] tracking-[-0.01em] lg:text-[2rem]">{statement}</h3>
          <p className="mt-3 text-base leading-snug lg:mt-0 lg:text-[1.0625rem] lg:leading-[1.75]">{body}</p>
        </div>
      </div>

      {/* the strip: it slides from the right towards the left while the section scrolls by */}
      <div className="granola-integrations-strip flex justify-center overflow-clip pt-20 pb-20 lg:pt-32 lg:pb-32">
        <ul className="granola-integrations-track flex w-max shrink-0 items-center gap-6 lg:gap-11">
          {tiles.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              title={t.name}
              className="flex size-[calc(var(--s)*0.62rem)] shrink-0 items-center justify-center border border-foreground/5 bg-popover text-popover-foreground lg:size-[calc(var(--s)*1rem)] [&_svg]:size-[38%] [&_svg]:stroke-[1.5]"
              style={{ "--s": SIZES[i % SIZES.length] } as CSSProperties}
            >
              {t.icon ? (
                <>
                  {t.icon}
                  <span className="sr-only">{t.name}</span>
                </>
              ) : (
                <span className="px-2 text-center font-sans text-[calc(var(--s)*0.1rem)] leading-none font-bold tracking-[-0.03em] lg:text-[calc(var(--s)*0.16rem)]">{t.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
