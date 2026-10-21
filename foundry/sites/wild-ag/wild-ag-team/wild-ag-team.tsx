import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgCarousel } from "@foundry/wild-ag-carousel";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgMedia } from "@foundry/wild-ag-media";

export interface WildAgTeamMember {
  /** first name (first line) */
  first: string;
  /** last name (second line) */
  last: string;
  /** role, set in small caps */
  role: string;
  /** portrait photo. Empty: a placeholder */
  media?: ReactNode;
}

export interface WildAgTeamProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  members: WildAgTeamMember[];
  /** screen-reader labels of the slider arrows */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

export function WildAgTeam({ id, title, members, prevLabel, nextLabel, className }: WildAgTeamProps) {
  return (
    <section id={id} className={cn("bg-muted px-gutter pt-[4.4rem] pb-[5.4rem] lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <WildAgCarousel
          title={<WildAgHeading>{title}</WildAgHeading>}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          columns={4}
          items={members.map((m) => (
            <article key={m.first + m.last} className="overflow-clip rounded-lg">
              <WildAgMedia media={m.media} className="aspect-[0.95] w-full lg:aspect-square" />
              <div className="bg-linear-15 from-primary to-highlight px-9 py-9 text-primary-foreground lg:px-10 lg:py-[2.4rem]">
                <h3 className="text-[1.9rem] leading-[1.2] font-semibold tracking-[-0.01em]">
                  <span className="block">{m.first}</span>
                  <span className="block">{m.last}</span>
                </h3>
                <p className="mt-3 text-[0.84rem] leading-[1.4] font-bold uppercase">{m.role}</p>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}
