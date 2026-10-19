import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloProductOverviewProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 32px title */
  title: string;
  /** paragraphs under it */
  body: string[];
  /** what's in the box: a quantity and a name per hairline row */
  contents: { quantity: string; label: string }[];
  /** the full-width orange button */
  cta: { label: string; href: string };
  /** the dark flat-lay photo: behind everything on desktop, under the text on phones */
  media?: ReactNode;
  className?: string;
}

/**
 * A black band with a dark flat-lay photo filling it: a 32px title, paragraphs, a white
 * hairline list of what's in the box (quantity · item) and a full-width orange button in a
 * narrow column on the left. Text fades in as it scrolls into view.
 */
export function NewhaloProductOverview({ id, title, body, contents, cta, media, className }: NewhaloProductOverviewProps) {
  return (
    <section id={id} className={cn("dark relative flex flex-col overflow-clip bg-background text-foreground lg:block lg:min-h-[75rem]", className)}>
      <NewhaloMedia tone="deep" className="order-last aspect-[0.83] lg:absolute lg:inset-0 lg:left-[38%] lg:aspect-auto" innerClassName={cn("-inset-y-8", newhaloReveal("drift"))}>
        {media}
      </NewhaloMedia>
      <div className="relative mx-auto w-full max-w-page px-gutter pt-[4.4rem] pb-12 lg:pt-[7.6rem] lg:pb-section">
        <div className="max-w-[27.5rem]">
          <h2 className={cn("font-display text-[1.56rem] leading-[1.1] lg:text-[2rem]", newhaloReveal("fade"))}>{title}</h2>
          <div className={cn("mt-2 space-y-4 text-[0.91rem] leading-normal lg:mt-4 lg:text-base", newhaloReveal("fade"))}>
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-9 border-b border-foreground">
            {contents.map((c, i) => (
              <li key={c.label} className={cn("flex h-11 items-center border-t border-foreground text-base", newhaloReveal("fade"))} style={newhaloRevealStyle(i)}>
                <span className="w-[3.1rem] shrink-0">{c.quantity}</span>
                {c.label}
              </li>
            ))}
          </ul>
          <NewhaloButton label={cta.label} href={cta.href} block className="mt-10" />
        </div>
      </div>
    </section>
  );
}
