import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayArrowLink } from "@foundry/thirdway-arrow-link";
import { ThirdwayCarousel } from "@foundry/thirdway-carousel";
import { ThirdwayCountPill } from "@foundry/thirdway-count-pill";
import { ThirdwayHeading } from "@foundry/thirdway-heading";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";
import { ThirdwayReveal } from "@foundry/thirdway-reveal";

export interface ThirdwayTeam {
  /** the team's name, set in the serif ("Studio") */
  name: string;
  /** the person who leads it */
  lead: string;
  /** a short description: always shown on phones, slides up on hover on desktop */
  description: string;
  /** link to the team's page */
  href: string;
  /** portrait photo; a placeholder when empty */
  image?: ReactNode;
  /** the lead's signature; a placeholder when empty */
  signature?: ReactNode;
}

export interface ThirdwayTeamsProps {
  /** the heading; "\n" starts a new line */
  heading: string;
  /** the paragraph beside the heading */
  text: string;
  /** link under the paragraph */
  link: { label: string; href: string };
  /** the count shown in the pill above the carousel, e.g. "06" */
  count: string;
  /** the word after the count, e.g. "Teams" */
  countLabel: string;
  /** the small word between a team's name and its lead ("by") */
  byLabel: string;
  teams: ThirdwayTeam[];
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

function TeamTitle({ team, byLabel }: { team: ThirdwayTeam; byLabel: string }) {
  return (
    <h3 className="text-xl leading-[1.1] font-[560] tracking-[-0.04em] lg:text-2xl">
      <span className="font-[family-name:var(--typeface-serif,Georgia,serif)] font-[350] tracking-[-0.02em]">{team.name}</span> {byLabel}
      <br />
      {team.lead}
    </h3>
  );
}

function TeamCard({ team, byLabel }: { team: ThirdwayTeam; byLabel: string }) {
  const signature = team.signature ?? <ThirdwayPlaceholder tone="veil" className="size-full" />;
  return (
    <article className="group/image-card relative flex flex-col rounded-[2px] bg-secondary/60 p-4 text-foreground lg:h-[27.3rem] lg:overflow-clip lg:bg-transparent lg:p-0">
      <a href={team.href} className="absolute inset-0 z-10" aria-label={`${team.name} ${byLabel} ${team.lead}`} />
      <div className="flex gap-4 lg:contents">
        <div className="h-[8.1rem] w-[5.25rem] shrink-0 overflow-clip rounded-[2px] lg:absolute lg:inset-0 lg:h-full lg:w-full lg:rounded-none">
          {team.image ?? <ThirdwayPlaceholder className="size-full rounded-none" />}
        </div>
        {/* phones: title, arrow and signature beside the portrait */}
        <div className="min-w-0 flex-1 lg:hidden">
          <div className="flex items-start justify-between gap-2">
            <TeamTitle team={team} byLabel={byLabel} />
            <ArrowUpRight aria-hidden className="mt-1 size-3.5 shrink-0" />
          </div>
          <div className="mt-3 h-12 w-24">{signature}</div>
        </div>
        {/* desktop: cream title and signature over a dark fade; the description opens upwards on hover */}
        <div className="dark absolute inset-x-0 bottom-0 hidden flex-col bg-linear-to-t from-background/80 via-background/40 via-60% to-transparent p-6 pt-16 text-foreground lg:flex">
          <TeamTitle team={team} byLabel={byLabel} />
          <div className="mt-4 h-12 w-24">{signature}</div>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] group-hover/image-card:grid-rows-[1fr] motion-reduce:transition-none">
            <p className="min-h-0 overflow-hidden text-sm leading-[1.3] font-[560] tracking-[-0.02em]">
              <span className="block pt-3">{team.description}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 border-t border-border pt-4 text-sm leading-[1.3] font-[560] tracking-[-0.02em] lg:hidden">{team.description}</p>
    </article>
  );
}

/**
 * Heading and paragraph in two columns, then a carousel of team cards. On phones a card is a
 * sand panel with a small portrait; from lg up it is a 328×437 photo with the name over a dark
 * fade, and the description opens upwards on hover.
 */
export function ThirdwayTeams({ heading, text, link, count, countLabel, byLabel, teams, prevLabel, nextLabel, className }: ThirdwayTeamsProps) {
  return (
    <section className={cn("relative bg-background py-[5.5rem] text-foreground md:py-[8.5rem]", className)}>
      <div className="grid gap-6 px-gutter md:grid-cols-2 md:gap-x-4 md:px-[calc(var(--page-gutter)*2)]">
        <ThirdwayHeading text={heading} />
        <ThirdwayReveal className="max-w-[31.25rem] md:pl-0 lg:ml-[10.8rem] lg:max-w-none">
          <p className="text-base leading-[1.3] font-[560] tracking-[-0.04em] md:text-lg md:leading-[1.3]">{text}</p>
          <div className="mt-3">
            <ThirdwayArrowLink label={link.label} href={link.href} />
          </div>
        </ThirdwayReveal>
      </div>
      <ThirdwayCarousel
        className="mt-10 md:mt-[4rem]"
        prevLabel={prevLabel}
        nextLabel={nextLabel}
        label={
          <>
            <ThirdwayCountPill value={count} />
            <span>{countLabel}</span>
          </>
        }
        itemClassName="w-[19.5rem] lg:w-[20.5rem]"
      >
        {teams.map((t) => (
          <TeamCard key={t.href + t.lead} team={t} byLabel={byLabel} />
        ))}
      </ThirdwayCarousel>
    </section>
  );
}
