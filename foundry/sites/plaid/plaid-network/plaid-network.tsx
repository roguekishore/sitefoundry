import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AnchorageCount } from "@foundry/anchorage-count";
import { PlaidPlaceholder } from "@foundry/plaid-placeholder";

export interface PlaidNetworkNote {
  /** the app sending it */
  app: string;
  /** when, e.g. "2m ago" */
  time: string;
  /** the one-line message */
  message: string;
  /** the icon on the coloured tile */
  icon: LucideIcon;
}

export interface PlaidNetworkStat {
  /** the figure as shown, e.g. "3 in 5", "31%", "9,400"; the first number in it counts up */
  value: string;
  /** the label under it */
  label: string;
}

export interface PlaidNetworkProps {
  /** the big heading */
  title: string;
  /** the grey paragraph under it */
  body: string;
  /** the figures (four fill the 2×2 grid) */
  stats: PlaidNetworkStat[];
  /** the notifications in the feed (three or four) */
  notes: PlaidNetworkNote[];
  /** pictures for the chips between notifications; one more chip than notes is drawn, placeholders where missing */
  chips?: ReactNode[];
  className?: string;
}

// Where each feed item sits from the left edge on desktop (chip, note, chip, note…): the zig-zag.
const desktopOffsets = ["ml-[3.625rem]", "ml-[9.0625rem]", "ml-[13.5rem]", "ml-[10.8125rem]", "ml-[7.1875rem]", "ml-[10.8125rem]", "ml-[1.8125rem]"];
// The tiles take turns between the theme's bright colours.
const tiles = ["bg-glow", "bg-chart-4", "bg-chart-1", "bg-highlight"];

function Note({ note, index, className }: { note: PlaidNetworkNote; index: number; className?: string }) {
  const Icon = note.icon;
  return (
    <div className={cn("flex items-center gap-3 rounded-[0.8125rem] border border-border bg-card p-2.5 shadow-[0_14px_22px_-8px] shadow-foreground/12 lg:p-3.5", className)}>
      <span className={cn("grid size-11 shrink-0 place-items-center rounded-[0.625rem] text-card lg:size-[3.375rem]", tiles[index % tiles.length])}>
        <Icon aria-hidden className="size-6 lg:size-7" strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex justify-between gap-3 text-[0.6875rem] text-muted-foreground lg:text-[0.8125rem]">
          <span>{note.app}</span>
          <span>{note.time}</span>
        </span>
        <span className="block truncate text-base text-primary lg:text-xl">{note.message}</span>
      </span>
    </div>
  );
}

function Chip({ media, className }: { media?: ReactNode; className?: string }) {
  return (
    <div className={cn("h-16 w-[11.5rem] overflow-clip rounded-[0.8125rem] shadow-[0_14px_22px_-8px] shadow-foreground/15 lg:h-[5.1875rem] lg:w-[14.875rem]", className)}>
      {media ?? <PlaidPlaceholder tone="photo" className="size-full" />}
    </div>
  );
}

/** Plaid's network section: a notification feed beside counted-up figures. */
export function PlaidNetwork({ title, body, stats, notes, chips = [], className }: PlaidNetworkProps) {
  // chip, note, chip, note … chip
  const feed: ReactNode[] = [];
  notes.forEach((note, i) => {
    feed.push(<Chip key={`c${i}`} media={chips[i]} />);
    feed.push(<Note key={`n${i}`} note={note} index={i} className="w-[19.9375rem]" />);
  });
  feed.push(<Chip key="clast" media={chips[notes.length]} />);

  return (
    <section className={cn("overflow-clip bg-background pb-20 text-foreground lg:pb-24", className)}>
      <div className="mx-auto grid max-w-page grid-cols-[minmax(0,1fr)] px-gutter lg:grid-cols-2 lg:gap-x-5">
        {/* desktop feed: a zig-zag column pinned to the page's left edge */}
        <div className="hidden lg:block lg:ml-[calc(min(0px,(var(--page-width)-100vw)/2)-var(--page-gutter))]">
          <ul className="flex flex-col gap-[4.375rem] pt-px">
            {feed.map((item, i) => (
              <li key={i} className={desktopOffsets[i % desktopOffsets.length]}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-[9.5rem] lg:pl-[1.125rem]">
          <h2 className="font-display lg:max-w-[31rem] text-[1.875rem]/[1.22] font-medium tracking-[-0.05em] lg:text-[4.375rem]/[1.2] lg:tracking-[-0.035em]">{title}</h2>
          <p className="mt-6 max-w-[30.5rem] text-lg/[1.5] text-foreground/75 lg:mt-8 lg:text-2xl/[1.5]">{body}</p>
          <dl className="mt-12 grid gap-y-9 lg:mt-[8.75rem] lg:grid-cols-[18.75rem_1fr] lg:gap-y-[5.25rem]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-0.5 max-w-[18rem] font-display text-lg/[0.94] font-medium tracking-[-0.045em] lg:mt-5 lg:max-w-[13.5rem] lg:text-[1.875rem]/[0.94] lg:tracking-[-0.03em]">
                  {s.label}
                </dt>
                <dd className="bg-linear-[254deg] from-chart-1 to-chart-2 bg-clip-text font-[family-name:var(--typeface-serif,Georgia,serif)] text-[2.5rem]/[1.1] font-light tracking-[-0.04em] text-transparent lg:text-[4.375rem]/[1.1]">
                  <AnchorageCount value={s.value} from={0.45} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* phone feed: a notification beside a chip peeking in from the right */}
        <ul className="-mx-gutter mt-24 flex flex-col gap-10 lg:hidden">
          {notes.map((note, i) => (
            <li key={i} className="flex items-center gap-12">
              <Note note={note} index={i} className="w-[16.25rem] shrink-0 rounded-l-none border-l-0" />
              <Chip media={chips[i]} className="shrink-0" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
