import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";

export interface RaycastSnippetCard {
  /** a small icon before the title */
  icon: ReactNode;
  /** the title */
  title: ReactNode;
  /** the sentence under it */
  description: ReactNode;
  /** the media slot (window shot); a token placeholder when empty */
  media?: ReactNode;
}

export interface RaycastKeycap {
  /** the key's name, bottom-left */
  label: ReactNode;
  /** the small glyph, top-right (optional) */
  glyph?: ReactNode;
}

export interface RaycastSnippetsProps {
  /** the white heading sentence */
  title: ReactNode;
  /** the grey heading sentence */
  subtitle?: ReactNode;
  /** the wide card at the top */
  wide: RaycastSnippetCard;
  /** the lower left card (a search-list slot) */
  list: RaycastSnippetCard;
  /** the lower right card: three keycaps */
  hotkeys: Omit<RaycastSnippetCard, "media"> & { keys: RaycastKeycap[] };
  className?: string;
}

const card = "group relative min-w-0 overflow-clip rounded-xl bg-linear-to-br from-foreground/[0.05] to-foreground/[0.015] ring-1 ring-foreground/[0.08] transition-shadow duration-300 hover:ring-foreground/20 motion-reduce:transition-none";

function Caption({ icon, title, description }: Pick<RaycastSnippetCard, "icon" | "title" | "description">) {
  return (
    <div>
      <h3 className="flex items-center gap-4 text-lg font-medium tracking-[0.2px] [&_svg]:size-5">
        {icon}
        {title}
      </h3>
      <p className="mt-3.5 max-w-[22rem] text-base leading-[1.4] lg:text-sm lg:leading-[1.6] font-medium tracking-[0.2px] text-muted-foreground lg:mt-4">{description}</p>
    </div>
  );
}

const keycap =
  "relative shrink-0 rounded-[11px] bg-linear-to-b from-foreground/[0.07] to-foreground/[0.03] shadow-[0_1.5px_0.5px_2.5px_color-mix(in_oklab,var(--background)_40%,transparent),0_0_0.5px_1px_var(--background),inset_0_2px_1px_1px_color-mix(in_oklab,var(--background)_25%,transparent),inset_0_1px_1px_1px_color-mix(in_oklab,var(--foreground)_15%,transparent)]";

/** Heading and a three-card bento: a wide feature, a list shot, and hotkey keycaps. */
export function RaycastSnippets({ title, subtitle, wide, list, hotkeys, className }: RaycastSnippetsProps) {
  return (
    <section className={cn("bg-background px-gutter py-section text-foreground lg:py-56", className)}>
      <RaycastHeading title={title} subtitle={subtitle} />
      <div className="mx-auto mt-14 grid max-w-page gap-5 lg:mt-[4.5rem] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
        <div className={cn(card, "flex flex-col gap-6 p-4 lg:col-span-2 lg:h-[13.5rem] lg:flex-row-reverse lg:items-stretch lg:justify-between lg:gap-0 lg:p-0")}>
          <div className="h-[11.125rem] overflow-clip rounded-lg lg:h-full lg:w-[58%] lg:rounded-none [&>*]:size-full">
            {wide.media ?? <RaycastPlaceholder tone="panel" className="rounded-lg lg:rounded-none" />}
          </div>
          <div className="px-2 pb-2 lg:flex lg:items-center lg:px-6 lg:pb-0">
            <Caption icon={wide.icon} title={wide.title} description={wide.description} />
          </div>
        </div>

        <div className={cn(card, "flex flex-col justify-between gap-6 p-4 pb-6 lg:h-[21.25rem] lg:p-6")}>
          <div className="h-[7.5rem] overflow-clip rounded-lg [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:h-[11.5rem] [&>*]:size-full">
            {list.media ?? <RaycastPlaceholder tone="panel" className="rounded-lg" />}
          </div>
          <Caption icon={list.icon} title={list.title} description={list.description} />
        </div>

        <div className={cn(card, "flex flex-col justify-between gap-6 p-4 pb-6 lg:h-[21.25rem] lg:p-6")}>
          <div className="flex items-center justify-center gap-3 pt-1 lg:gap-4 lg:pt-2">
            {hotkeys.keys.map((k, i) => (
              <div key={i} className="contents">
                {i > 0 && <Plus aria-hidden className="size-3.5 text-muted-foreground" />}
                <div className={cn(keycap, "flex h-[4.125rem] items-end p-2 text-base font-semibold lg:h-[6.625rem] lg:p-3.5 lg:text-[1.75rem] lg:font-medium", k.glyph ? "min-w-[4.5rem] lg:min-w-[6.875rem]" : "w-[3.75rem] justify-center lg:w-[6.875rem]")}>
                  {k.glyph && <span className="absolute top-2 right-2.5 text-muted-foreground lg:top-3 lg:right-3.5 [&_svg]:size-4 lg:[&_svg]:size-5">{k.glyph}</span>}
                  {k.label}
                </div>
              </div>
            ))}
          </div>
          <Caption icon={hotkeys.icon} title={hotkeys.title} description={hotkeys.description} />
        </div>
      </div>
    </section>
  );
}
