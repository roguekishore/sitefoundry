import type { CSSProperties, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformGlassCard } from "@foundry/plumeform-glass-card";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformTypeChip {
  label: string;
  /** a small line icon before the label */
  icon?: ReactNode;
  /** a tier tag after it, e.g. "Plus" */
  badge?: string;
}

export interface PlumeformTypesProps {
  eyebrow?: string;
  title: ReactNode;
  /** the long paragraph on the right */
  body: ReactNode;
  link?: { label: string; href: string };
  /** chips in labelled groups; the first chip of the first group shows as selected */
  groups: { label: string; chips: PlumeformTypeChip[] }[];
  /** the demo card (a working example of the selected type); empty shows a placeholder */
  media?: ReactNode;
  /** placeholder size of the demo card, width / height */
  aspect?: string;
  /** labels for the controls under the card */
  controls?: { previousLabel: string; nextLabel: string; counter: string };
  /** a small note under the controls */
  note?: ReactNode;
  /** the complete list, in five columns on desktop */
  all?: { label: string; items: { label: string; badge?: string }[] };
  /** a closing line under the list: a bold lead-in, then the rest */
  extra?: { lead: string; text: string };
  /** art behind the band (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

/**
 * A dark band about answer types: heading and long copy side by side, then grouped pill chips
 * beside a stacked demo card with back / next controls, then the full list in five columns.
 */
export function PlumeformTypes({ eyebrow, title, body, link, groups, media, aspect = "510/430", controls, note, all, extra, backdrop, id, className }: PlumeformTypesProps) {
  return (
    <PlumeformBand id={id} backdrop={backdrop} className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-x-36 lg:pt-6">
          <PlumeformHeading eyebrow={eyebrow} title={title} className="lg:pb-24" />
          <PlumeformReveal step={1} className="max-w-[28rem]">
            <p className="text-base leading-[1.625] text-muted-foreground">{body}</p>
            {link && <PlumeformLink href={link.href} className="mt-7">{link.label}</PlumeformLink>}
          </PlumeformReveal>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-10 lg:grid-cols-[1fr_32rem] lg:gap-x-16">
          <PlumeformReveal className="space-y-7">
            {groups.map((group, g) => (
              <div key={group.label}>
                <p className="mb-3 text-[0.625rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.chips.map((chip, c) => {
                    const active = g === 0 && c === 0;
                    return (
                      <li key={chip.label}>
                        <span
                          className={cn(
                            "inline-flex h-10 cursor-default items-center gap-2 rounded-full border px-4 text-[0.8125rem] transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none [&_svg]:size-3.5 [&_svg]:stroke-[1.75]",
                            active
                              ? "border-highlight/70 bg-highlight/10 font-bold text-foreground"
                              : "border-border font-medium text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                          )}
                        >
                          {chip.icon}
                          {chip.label}
                          {chip.badge && <PlumeformBadge>{chip.badge}</PlumeformBadge>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </PlumeformReveal>

          <PlumeformReveal step={1} className="lg:mt-12">
            <div className="relative mr-4 mb-4">
              <PlumeformGlassCard className="absolute inset-0 translate-x-4 translate-y-4 opacity-40" />
              <PlumeformGlassCard className="absolute inset-0 translate-x-2 translate-y-2 opacity-70" />
              <PlumeformGlassCard className="relative overflow-clip bg-card/80 p-7">
                {media ?? <div className="w-full rounded-[calc(var(--radius)/2)] bg-muted/60" style={{ aspectRatio: aspect } as CSSProperties} />}
              </PlumeformGlassCard>
            </div>
            {controls && (
              <div className="mt-8 flex items-center gap-2">
                <button
                  type="button"
                  aria-label={controls.previousLabel}
                  className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-foreground/30 hover:bg-foreground/5"
                >
                  <ArrowLeft className="size-4" strokeWidth={1.75} />
                </button>
                <PlumeformButton type="button" arrow>
                  {controls.nextLabel}
                </PlumeformButton>
                <span className="ml-auto text-[0.8125rem] font-semibold text-muted-foreground">{controls.counter}</span>
              </div>
            )}
            {note && <p className="mt-5 text-[0.8125rem] text-muted-foreground">{note}</p>}
          </PlumeformReveal>
        </div>

        {all && (
          <PlumeformReveal className="mt-24 lg:mt-28">
            <p className="mb-6 text-[0.625rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">{all.label}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-[0.9375rem] text-muted-foreground sm:grid-cols-3 lg:grid-cols-5">
              {all.items.map((item) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {item.label}
                  {item.badge && <PlumeformBadge>{item.badge}</PlumeformBadge>}
                </li>
              ))}
            </ul>
            {extra && (
              <p className="mt-10 max-w-3xl text-[0.9375rem] leading-6 text-muted-foreground">
                <strong className="font-bold text-foreground">{extra.lead}</strong> {extra.text}
              </p>
            )}
          </PlumeformReveal>
        )}
      </div>
    </PlumeformBand>
  );
}
