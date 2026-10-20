import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button } from "@foundry/hhhusher-v2-button";
import { HhhusherV2RevealText, hhhusherV2Reveal } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2SpecGroup {
  /** the group's name, in the first column */
  name: string;
  /** measurement → value rows */
  rows: { label: string; value: string }[];
}

export interface HhhusherV2SpecsProps {
  /** the heading; use \n to break it */
  heading: string;
  /** the short note beside (desktop) or under (phone) the table */
  note?: string;
  /** the yellow button under the note */
  action?: { label: string; href: string };
  groups: HhhusherV2SpecGroup[];
  id?: string;
  className?: string;
}

export function HhhusherV2Specs({ heading, note, action, groups, id, className }: HhhusherV2SpecsProps) {
  return (
    <section id={id} className={cn("dark bg-background pt-[calc(var(--section-y)*1.1)] pb-[calc(var(--section-y)*1.1)] text-foreground lg:pt-[calc(var(--section-y)*1.08)] lg:pb-[calc(var(--section-y)*1.15)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {heading.split("\n").map((line) => (
          <HhhusherV2RevealText key={line} as="h2" text={line} className="font-display text-[2.6rem] leading-[1] font-[570] tracking-[-0.02em] lg:text-[4.75rem] lg:leading-[1.03]" />
        ))}

        <div className="mt-12 flex flex-col gap-16 lg:mt-20 lg:grid lg:grid-cols-[25.7%_minmax(0,1fr)] lg:gap-0">
          {(note || action) && (
            <div className="order-2 lg:order-1">
              {note && <p className="max-w-[22rem] font-display text-[1.04rem] leading-[1.3] font-[570] tracking-[-0.01em] lg:max-w-[16.5rem] lg:text-base">{note}</p>}
              {action && (
                <HhhusherV2Button href={action.href} className="mt-6 w-[3.9rem] lg:w-[5.25rem]">
                  {action.label}
                </HhhusherV2Button>
              )}
            </div>
          )}

          <div className="order-1 font-mono text-[0.78rem] font-bold uppercase lg:order-2 lg:text-[0.875rem]">
            {groups.map((group) => (
              <div key={group.name} className={cn(hhhusherV2Reveal("fade"), "grid border-t-2 border-foreground lg:grid-cols-[34.6%_minmax(0,1fr)]")}>
                <p className="border-b border-border py-5 lg:border-0 lg:py-[1.3rem]">{group.name}</p>
                <dl>
                  {group.rows.map((row, i) => (
                    <div key={row.label} className={cn("flex justify-between gap-6 py-5 lg:py-[1.3rem]", i < group.rows.length - 1 && "border-b border-border")}>
                      <dt>{row.label}</dt>
                      <dd className="text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
