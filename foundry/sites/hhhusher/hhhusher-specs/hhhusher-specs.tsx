import { cn } from "@foundry/foundry-utils";
import { HhhusherButton } from "@foundry/hhhusher-button";
import { HhhusherLines } from "@foundry/hhhusher-lines";
import "./hhhusher-specs.css";

export interface HhhusherSpecRow {
  /** what is measured, e.g. "Height" */
  label: string;
  /** the value, e.g. "62 mm (2.4 in)" */
  value: string;
}

export interface HhhusherSpecGroup {
  /** the group's name, e.g. "Snares" */
  label: string;
  rows: HhhusherSpecRow[];
}

export interface HhhusherSpecsProps {
  /** the big heading, one entry per line */
  title: string[];
  /** a short note beside (desktop) or under (phones) the table */
  text: string;
  /** the yellow button under the note */
  cta?: { label: string; href: string };
  /** the table, in groups */
  groups: HhhusherSpecGroup[];
  /** the id other links jump to */
  id?: string;
  className?: string;
}

/**
 * A dark spec sheet: a big two-line heading, then a table set entirely in bold mono capitals,
 * groups divided by cream rules and rows by faint ones (group name, what, value right-aligned),
 * with a short note and a yellow button in a narrow column on the left. Phones put the group
 * name on its own row and move the note under the table. Rows fade in as they enter.
 */
export function HhhusherSpecs({ title, text, cta, groups, id, className }: HhhusherSpecsProps) {
  const mono = "font-mono text-[0.86rem] leading-[1.15] font-bold uppercase lg:text-sm";
  return (
    <section id={id} className={cn("dark bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page px-gutter lg:grid-cols-[350fr_1010fr]">
        <HhhusherLines
          as="h2"
          lines={title}
          className="font-display text-[2.6rem] leading-[1.05] font-medium tracking-[-0.02em] lg:col-span-2 lg:text-[4.5rem] lg:leading-[1.08]"
        />

        <div className="order-3 mt-24 max-w-[19rem] lg:order-none lg:mt-[5.4rem]">
          <p className="text-[1.04rem] leading-[1.3] font-semibold lg:text-base">{text}</p>
          {cta && (
            <HhhusherButton href={cta.href} className="mt-5 px-8 lg:mt-5">
              {cta.label}
            </HhhusherButton>
          )}
        </div>

        <div className="mt-16 lg:mt-[5.25rem]">
          {groups.map((group, g) => (
            <div key={g} className="hhhusher-specs-row grid border-t-2 border-foreground lg:grid-cols-[350fr_660fr]">
              <h3 className={cn(mono, "flex h-[3.75rem] items-center lg:h-[3.625rem]")}>{group.label}</h3>
              <dl className="flex flex-col">
                {group.rows.map((row, r) => (
                  <div key={r} className={cn("flex items-center justify-between gap-6 border-t border-border py-[1.3rem] lg:min-h-[3.625rem] lg:py-2", r === 0 && "lg:border-t-0")}>
                    <dt className={mono}>{row.label}</dt>
                    <dd className={cn(mono, "text-right")}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
