import type { ReactNode } from "react";
import { BadgePercent, Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LevelsButton } from "@foundry/levels-button";
import { LevelsHeading } from "@foundry/levels-heading";
import { LevelsLink } from "@foundry/levels-link";

export interface LevelsPlanGroup {
  /** tracked label over the list, e.g. "Included" */
  label: string;
  /** the ticked lines; note is a small grey line under one */
  items: { text: ReactNode; note?: ReactNode }[];
}

export interface LevelsPlan {
  /** plain: white · featured: pale green with a green border · dark: near-black */
  tone?: "plain" | "featured" | "dark";
  /** small icon before the badge, e.g. a lucide icon element */
  icon?: ReactNode;
  /** the pill badge's text */
  badge?: string;
  /** the plan's name */
  name: string;
  /** grey text under the name */
  description?: ReactNode;
  /** the big price, e.g. "$19" */
  price: string;
  /** the small text after the price, e.g. "/mo" */
  period?: string;
  /** small grey line under the price */
  billing?: ReactNode;
  /** the full-width button */
  action: { label: string; href: string };
  /** the check lists */
  groups: LevelsPlanGroup[];
  /** the footer row above the perk: grey label and an ink arrow link */
  footer?: { label: string; link?: { label: string; href: string } };
  /** the small perk line at the very bottom */
  perk?: { title: string; text: string; link?: { label: string; href: string } };
}

export interface LevelsPlansProps {
  /** small tracked capitals above the title */
  eyebrow?: string;
  /** the section title */
  title: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** the pale green strip above the cards */
  recommend?: { eyebrow?: string; text: ReactNode; action?: { label: string; href: string } };
  /** the plan cards (three on the original) */
  plans: LevelsPlan[];
  /** id for in-page links */
  id?: string;
  className?: string;
}

const tones = {
  plain: "border border-border bg-card text-card-foreground",
  featured:
    "border border-highlight/35 bg-accent text-foreground shadow-[0_24px_60px_-42px_color-mix(in_oklab,var(--highlight)_35%,transparent)]",
  dark: "dark bg-background text-foreground",
};

/** Heading, a recommendation strip and three plan cards. */
export function LevelsPlans({ eyebrow, title, lead, recommend, plans, id, className }: LevelsPlansProps) {
  return (
    <section id={id} className={cn("bg-secondary px-gutter py-[calc(var(--section-y)*0.75)] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <LevelsHeading eyebrow={eyebrow} title={title} lead={lead} />

        {recommend ? (
          <div className="mt-12 flex flex-col items-start gap-5 rounded-lg border border-foreground/10 bg-accent px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-[40rem]">
              {recommend.eyebrow ? (
                <p className="text-xs leading-4 font-semibold tracking-[0.187em] text-highlight uppercase">{recommend.eyebrow}</p>
              ) : null}
              <p className="mt-3 text-base leading-7 text-foreground">{recommend.text}</p>
            </div>
            {recommend.action ? (
              <LevelsButton href={recommend.action.href} arrow>
                {recommend.action.label}
              </LevelsButton>
            ) : null}
          </div>
        ) : null}

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const tone = plan.tone ?? "plain";
            return (
              <li key={plan.name} className={cn("flex flex-col rounded-lg p-8", tones[tone])}>
                <div className="flex items-center gap-3">
                  {plan.icon ? (
                    <span aria-hidden className={cn("[&_svg]:size-5", tone === "featured" ? "text-highlight" : "text-muted-foreground")}>
                      {plan.icon}
                    </span>
                  ) : null}
                  {plan.badge ? (
                    <span
                      className={cn(
                        "rounded-full border px-3 text-[0.6875rem] leading-6 font-semibold tracking-[0.16em] uppercase",
                        tone === "featured"
                          ? "border-highlight/35 bg-background/60 text-highlight"
                          : "border-border bg-muted text-muted-foreground",
                      )}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-6 font-display text-[2rem] leading-[1.3] font-medium tracking-[-0.04em]">{plan.name}</h3>
                {plan.description ? <p className="mt-3 text-base leading-8 text-muted-foreground">{plan.description}</p> : null}
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-[3.3rem] leading-none font-medium tracking-[-0.05em]">{plan.price}</span>
                  {plan.period ? <span className="text-xl leading-none font-medium">{plan.period}</span> : null}
                </p>
                {plan.billing ? <p className="mt-3 text-sm leading-5 text-muted-foreground">{plan.billing}</p> : null}
                <LevelsButton href={plan.action.href} block className="mt-6">
                  {plan.action.label}
                </LevelsButton>

                <div className="mt-9 flex grow flex-col gap-8">
                  {plan.groups.map((group) => (
                    <div key={group.label}>
                      <p
                        className={cn(
                          "text-[0.6875rem] leading-4 font-semibold tracking-[0.16em] uppercase",
                          tone === "featured" ? "text-highlight" : "text-muted-foreground",
                        )}
                      >
                        {group.label}
                      </p>
                      <ul className="mt-4 flex flex-col gap-3">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex gap-3.5 text-sm leading-6">
                            <Check aria-hidden className="mt-1 size-4 shrink-0 text-highlight/70" strokeWidth={1.5} />
                            <span>
                              {item.text}
                              {item.note ? <span className="block text-xs leading-5 text-muted-foreground">{item.note}</span> : null}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {plan.footer || plan.perk ? (
                  <div className="mt-10 border-t border-border pt-6">
                    {plan.footer ? (
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-muted-foreground">{plan.footer.label}</span>
                        {plan.footer.link ? (
                          <LevelsLink href={plan.footer.link.href} size="sm" tone="ink">
                            {plan.footer.link.label}
                          </LevelsLink>
                        ) : null}
                      </div>
                    ) : null}
                    {plan.perk ? (
                      <div className="mt-4 text-xs leading-6">
                        <p className="flex flex-wrap items-center gap-x-2">
                          <span className="font-semibold">{plan.perk.title}</span>
                          <BadgePercent aria-hidden className="size-3.5 text-highlight" strokeWidth={1.75} />
                          <span>{plan.perk.text}</span>
                        </p>
                        {plan.perk.link ? (
                          <a href={plan.perk.link.href} className="font-semibold underline underline-offset-2 hover:opacity-80">
                            {plan.perk.link.label}
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
