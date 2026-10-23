import { useRef, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspaceArrows } from "@foundry/vastspace-arrows";
import { VastspaceSectionHeading } from "@foundry/vastspace-section-heading";
import "./vastspace-press.css";

export type VastspaceOutletStyle = "heavy" | "mono" | "italic" | "light";

export interface VastspaceOutlet {
  /** the outlet's name, shown as a plain-text wordmark */
  name: string;
  /** which text treatment stands in for its logo */
  style?: VastspaceOutletStyle;
  /** a real logo (an <img>) to use instead of the text */
  mark?: ReactNode;
}

export interface VastspaceQuote {
  /** the outlet that said it */
  outlet: VastspaceOutlet;
  /** the quote */
  quote: string;
}

export interface VastspacePressProps {
  /** the section title */
  title: string;
  /** the quote cards */
  quotes: VastspaceQuote[];
  /** the outlets in the looping row under the cards */
  outlets: VastspaceOutlet[];
  /** screen-reader label of the previous arrow */
  prevLabel: string;
  /** screen-reader label of the next arrow */
  nextLabel: string;
  className?: string;
}

const styles: Record<VastspaceOutletStyle, string> = {
  heavy: "font-display font-bold tracking-[-0.03em] uppercase",
  mono: "font-mono font-medium tracking-[-0.02em] uppercase",
  italic: "font-display font-medium italic tracking-[-0.01em]",
  light: "font-display font-normal tracking-[0.2em] uppercase",
};

function Outlet({ outlet, className }: { outlet: VastspaceOutlet; className?: string }) {
  return <span className={cn("inline-block leading-none", styles[outlet.style ?? "heavy"], className)}>{outlet.mark ?? outlet.name}</span>;
}

export function VastspacePress({ title, quotes, outlets, prevLabel, nextLabel, className }: VastspacePressProps) {
  const track = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.children[0] as HTMLElement | undefined;
    if (el && card) el.scrollBy({ left: dir * card.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className={cn("bg-card pt-16 pb-section text-card-foreground md:pt-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <VastspaceSectionHeading title={title} action={<VastspaceArrows prevLabel={prevLabel} nextLabel={nextLabel} onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />} />
      </div>
      <ul
        ref={track}
        className="mx-auto mt-12 flex max-w-page snap-x snap-mandatory overflow-x-auto px-gutter [scrollbar-width:none] md:mt-[6.1rem] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "var(--page-gutter)" }}
      >
        {quotes.map((q) => (
          <li key={q.quote} className="w-[18.75rem] shrink-0 snap-start border-l border-border pr-6 pb-8 pl-4 md:w-[31.25vw] md:max-w-[28.125rem] md:pr-[4.5rem] md:pl-[3.75rem]">
            <Outlet outlet={q.outlet} className="h-5 text-xl" />
            <p className="mt-4 text-lg/[1.12] font-[450] md:text-xl/[1.12]">{q.quote}</p>
          </li>
        ))}
        <li aria-hidden className="w-px shrink-0 border-l border-border" />
      </ul>
      <div className="mt-28 overflow-clip md:mt-36">
        <div className="vastspace-press-shift">
          <ul className="vastspace-press-track flex w-max items-center">
            {[...outlets, ...outlets].map((o, i) => (
              <li key={i} aria-hidden={i >= outlets.length} className="shrink-0 pr-[6.5rem]">
                <Outlet outlet={o} className="text-2xl" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
