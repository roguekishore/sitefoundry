import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { cn } from "@foundry/foundry-utils";

export interface KononenkogroupAboutFact {
  /** small serif label, e.g. "Established" */
  label: string;
  /** the value beside it */
  value: string;
}

export interface KononenkogroupAboutEntry {
  /** the entry's first line, in ink */
  title: string;
  /** further lines in grey */
  detail?: string[];
}

export interface KononenkogroupAboutList {
  /** small serif label beside the list */
  label: string;
  /** groups of entries; a wider gap separates the groups */
  groups: KononenkogroupAboutEntry[][];
}

export interface KononenkogroupAboutProps {
  /** label/value facts at the top left */
  facts: KononenkogroupAboutFact[];
  /** the serif paragraph beside the facts */
  text: string;
  /** small serif label that opens the lower row */
  recordLabel: string;
  /** the lists of the lower row (two on the original: awards and publications) */
  lists: KononenkogroupAboutList[];
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";
const label = cn(small, "font-display tracking-[-0.01em]");
// where each list's label starts on the 15-column grid; its entries take the next column
const listStart = ["lg:col-start-5", "lg:col-start-10"];
const entriesStart = ["lg:col-start-6", "lg:col-start-11"];

function Entries({ groups }: { groups: KononenkogroupAboutEntry[][] }) {
  return (
    <div className="grid gap-[7vw] lg:gap-[4.6vw]">
      {groups.map((group, g) => (
        <ul key={g} className="grid gap-[3vw] lg:gap-[0.75vw]">
          {group.map((entry, i) => (
            <li key={i}>
              <KononenkogroupLines text={entry.title} className={small} />
              {entry.detail?.map((line, j) => (
                <KononenkogroupLines key={j} text={line} className={cn(small, "text-muted-foreground")} />
              ))}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

/**
 * A studio profile on a 15-column grid: small label/value facts at the left, a serif
 * paragraph across the right two thirds, and below a row of record lists (awards,
 * publications) set in tiny type with grey details. Every line rises from its mask on entry.
 */
export function KononenkogroupAbout({ facts, text, recordLabel, lists, className }: KononenkogroupAboutProps) {
  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <div className="lg:grid lg:grid-cols-15 lg:gap-x-[1.11vw]">
        <dl className="grid grid-cols-[33.3vw_1fr] gap-y-[5.5vw] lg:col-span-4 lg:grid-cols-4 lg:gap-x-[1.11vw] lg:gap-y-[1.1vw]">
          {facts.map((fact) => (
            <div key={fact.label} className="contents">
              <dt className="lg:col-start-1"><KononenkogroupLines as="span" text={fact.label} className={cn(label, "block")} /></dt>
              <dd className="lg:col-span-2"><KononenkogroupLines as="span" text={fact.value} className={cn(small, "block")} /></dd>
            </div>
          ))}
        </dl>
        <KononenkogroupLines
          text={text}
          className="mt-[11vw] font-display text-[6.93vw] leading-[1.1] tracking-[-0.03em] lg:col-span-9 lg:col-start-6 lg:mt-[-0.4vw] lg:text-[2.083vw]"
        />
      </div>

      <div className="mt-[17vw] grid gap-[17vw] lg:mt-[8.3vw] lg:grid-cols-15 lg:gap-x-[1.11vw] lg:gap-y-0">
        <KononenkogroupLines text={recordLabel} className={cn(label, "lg:col-span-3")} />
        {lists.map((list, i) => (
          <div key={list.label} className="contents">
            <KononenkogroupLines text={list.label} className={cn(label, "lg:col-span-1", listStart[i % 2])} />
            <div className={cn("-mt-[7vw] lg:col-span-3 lg:mt-0", entriesStart[i % 2])}>
              <Entries groups={list.groups} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
