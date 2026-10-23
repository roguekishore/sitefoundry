import { cn } from "@foundry/foundry-utils";

export interface WhoopDisclaimerNote {
  /** the bold term at the start (numbered automatically) */
  lead: string;
  /** the rest of the paragraph */
  text: string;
}

export interface WhoopDisclaimerProps {
  /** the small heading */
  title: string;
  /** the numbered notes */
  notes: WhoopDisclaimerNote[];
  className?: string;
}

/** A black band of numbered small print. */
export function WhoopDisclaimer({ title, notes, className }: WhoopDisclaimerProps) {
  return (
    <section className={cn("bg-foreground pt-24 pb-10 text-background lg:pt-28 dark:bg-card dark:text-card-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="max-w-[56rem]">
          <h2 className="text-lg leading-[1.3] font-semibold">{title}</h2>
          <ol className="mt-5 space-y-6">
            {notes.map((n, i) => (
              <li key={n.lead} className="text-[0.8125rem] leading-[1.35]">
                <b className="font-bold">
                  {i + 1}. {n.lead}
                </b>{" "}
                {n.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
