import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerAccordion, type SuperpowerAccordionItem } from "@foundry/superpower-accordion";
import { SuperpowerButton } from "@foundry/superpower-button";
import { SuperpowerFacts, type SuperpowerFact } from "@foundry/superpower-facts";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerGalleryImage {
  /** the image; empty: a placeholder */
  media?: ReactNode;
  /** describes it (thumbnail button label and placeholder label) */
  label: string;
}

export interface SuperpowerMembershipProps {
  /** the gallery: the first is shown large, all appear as thumbnails (up to seven) */
  gallery: SuperpowerGalleryImage[];
  /** the rating line above the plan name */
  rating?: ReactNode;
  /** the plan name, e.g. "Kestrel yearly membership" */
  title: string;
  lead?: string;
  /** e.g. "$179" */
  price: string;
  /** after the price, e.g. "/year*" */
  period?: string;
  /** what's included, one line each */
  features: string[];
  cta: { label: string; href: string };
  /** small facts under the button */
  facts?: SuperpowerFact[];
  /** grey footnotes, one line each */
  footnotes?: string[];
  /** survey figures in a grey card */
  stats?: { value: string; label: string }[];
  /** the line under the figures */
  statsNote?: string;
  faq?: SuperpowerAccordionItem[];
  id?: string;
  className?: string;
}

export function SuperpowerMembership({
  gallery,
  rating,
  title,
  lead,
  price,
  period,
  features,
  cta,
  facts,
  footnotes,
  stats,
  statsNote,
  faq,
  id,
  className,
}: SuperpowerMembershipProps) {
  const [shown, setShown] = useState(0);
  const main = gallery[shown] ?? gallery[0];

  return (
    <section id={id} className={cn("bg-background py-12 text-foreground lg:py-section", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter lg:grid-cols-[minmax(0,41.25rem)_minmax(17rem,1fr)] lg:gap-x-[3.6rem]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {main && <SuperpowerMedia media={main.media} label={main.label} className="aspect-square rounded-[calc(var(--radius)*1.75)] lg:rounded-[calc(var(--radius)*2)]" />}
          <div className="mt-3.5 grid grid-cols-7 gap-1.5 lg:mt-5 lg:gap-2">
            {gallery.slice(0, 7).map((g, i) => (
              <button
                key={g.label}
                type="button"
                aria-label={g.label}
                aria-pressed={i === shown}
                onClick={() => setShown(i)}
                className={cn(
                  "rounded-sm ring-offset-2 ring-offset-background transition-shadow duration-200 motion-reduce:transition-none",
                  i === shown ? "ring-2 ring-foreground" : "hover:ring-1 hover:ring-border",
                )}
              >
                <SuperpowerMedia media={g.media} className="aspect-square rounded-sm" />
              </button>
            ))}
          </div>
        </div>

        <div>
          {rating && <div className="text-muted-foreground">{rating}</div>}
          <h2 className="mt-4 text-[2.5rem] leading-[1.05] font-normal tracking-[-0.03em] lg:mt-5 lg:text-[3.5rem]">{title}</h2>
          {lead && <p className="mt-5 text-[1rem] leading-[1.45] text-muted-foreground lg:mt-6 lg:text-[1.125rem]">{lead}</p>}
          <p className="mt-6 flex items-baseline gap-2.5">
            <span className="text-[2rem] leading-none tracking-[-0.04em] lg:text-[3.5rem]">{price}</span>
            {period && <span className="text-[0.875rem]">{period}</span>}
          </p>
          <ul className="mt-6 flex flex-col gap-3.5 lg:mt-8 lg:gap-4">
            {features.map((f) => (
              <li key={f} className="flex gap-3.5 text-[1rem] leading-[1.45] lg:text-[1.0625rem] lg:leading-[1.3]">
                <span className="mt-px grid size-[1.375rem] shrink-0 place-items-center rounded-full bg-foreground/85 text-background">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <SuperpowerButton href={cta.href} size="lg" block className="mt-9 h-[3.625rem] lg:mt-11">
            {cta.label}
          </SuperpowerButton>
          {facts && facts.length > 0 && <SuperpowerFacts items={facts} centered className="mt-5 px-6 [&_svg]:size-3.5" />}
          {footnotes && footnotes.length > 0 && (
            <div className="mt-6 text-center text-[0.8125rem] leading-[1.6] text-muted-foreground/75">
              {footnotes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>
          )}
          {stats && stats.length > 0 && (
            <div className="mt-6 rounded-lg bg-secondary px-5 py-5 lg:px-[1.15rem]">
              <dl className="grid grid-cols-3 gap-4 lg:gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse justify-end">
                    <dt className="mt-3 text-[0.8125rem] leading-[1.4] text-muted-foreground lg:mt-2 lg:max-w-[8.5rem]">{s.label}</dt>
                    <dd className="text-[2rem] leading-none tracking-[-0.03em] lg:text-[1.875rem]">{s.value}</dd>
                  </div>
                ))}
              </dl>
              {statsNote && <p className="mt-5 text-[0.75rem] leading-[1.45] text-muted-foreground/75 lg:mt-4 lg:text-[0.8125rem]">{statsNote}</p>}
            </div>
          )}
          {faq && faq.length > 0 && <SuperpowerAccordion items={faq} className="mt-6 lg:mt-8" />}
        </div>
      </div>
    </section>
  );
}
