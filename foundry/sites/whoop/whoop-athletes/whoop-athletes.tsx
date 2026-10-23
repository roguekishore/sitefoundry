import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";
import { WhoopSnapTrack } from "@foundry/whoop-snap-track";

export interface WhoopAthlete {
  /** the person's name */
  name: string;
  /** what they're known for */
  role: string;
  /** where the card links */
  href: string;
  /** their photo, filling the card (object-cover); a shade placeholder when empty */
  media?: ReactNode;
}

export interface WhoopAthletesProps {
  /** the big heading */
  heading: string;
  /** the paragraph beside or under it */
  body?: string;
  /** the people, filled column by column in pairs (eight make a 4 × 2 grid on desktop) */
  people: WhoopAthlete[];
  /** screen-reader name of the track */
  label: string;
  className?: string;
}

function AthleteCard({ person }: { person: WhoopAthlete }) {
  return (
    <a href={person.href} className="group relative block aspect-[229/150] overflow-clip rounded-[0.6875rem]">
      <div className="absolute inset-0 transition-transform duration-250 ease-out group-hover:scale-[1.015] motion-reduce:transition-none *:size-full *:object-cover">
        {person.media ?? <WhoopPlaceholder tone="shade" />}
      </div>
      <div className="relative flex h-full flex-col justify-center pr-10 pl-2.5 text-background">
        <p className="text-2xl leading-none font-semibold tracking-[-0.01em]">{person.name}</p>
        <p className="mt-1 text-sm leading-[1.6] text-background/85">{person.role}</p>
      </div>
      <span
        aria-hidden
        className="absolute top-9 right-2.5 grid size-5 place-items-center rounded-full bg-background text-foreground transition-transform duration-250 ease-out group-hover:scale-110 motion-reduce:transition-none"
      >
        <Plus className="size-3" strokeWidth={2.5} />
      </span>
    </a>
  );
}

/** Heading, then a two-row wall of people cards. */
export function WhoopAthletes({ heading, body, people, label, className }: WhoopAthletesProps) {
  // pair the people into columns of two: the rows scroll together on phones
  const columns: WhoopAthlete[][] = [];
  for (let i = 0; i < people.length; i += 2) columns.push(people.slice(i, i + 2));

  return (
    <section className={cn("bg-background py-section text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} body={body} />
      </div>
      <WhoopSnapTrack
        className="mt-12 lg:mt-16"
        slides={columns.map((col, i) => (
          <div key={i} className="grid gap-4 lg:gap-6">
            {col.map((p) => (
              <AthleteCard key={p.name} person={p} />
            ))}
          </div>
        ))}
        slideClassName="w-[14.3rem] lg:w-auto"
        trackClassName="gap-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
        label={label}
        dotLabel=""
        showDots={false}
      />
    </section>
  );
}
