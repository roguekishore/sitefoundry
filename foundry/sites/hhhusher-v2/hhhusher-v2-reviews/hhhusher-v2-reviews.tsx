import { cn } from "@foundry/foundry-utils";
import { HhhusherV2RevealText } from "@foundry/hhhusher-v2-reveal";
import { HhhusherV2Review } from "@foundry/hhhusher-v2-review";

export interface HhhusherV2ReviewsItem {
  quote: string;
  name: string;
  /** stars out of five (default 5) */
  rating?: number;
}

export interface HhhusherV2ReviewsProps {
  /** the big statement above the list; its lines rise in one by one */
  statement?: string;
  /** the small label at the left of the list */
  label: string;
  reviews: HhhusherV2ReviewsItem[];
  id?: string;
  className?: string;
}

export function HhhusherV2Reviews({ statement, label, reviews, id, className }: HhhusherV2ReviewsProps) {
  return (
    <section id={id} className={cn("bg-secondary pt-section pb-[calc(var(--section-y)*1.1)] text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {statement && (
          <HhhusherV2RevealText
            as="h2"
            text={statement}
            className="max-w-[83rem] font-display text-[2.08rem] leading-[1.05] font-[570] tracking-[-0.02em] lg:text-[3.5625rem] lg:leading-[1.05]"
          />
        )}
        <div className={cn("grid gap-10 lg:grid-cols-[52.6%_minmax(0,1fr)] lg:gap-0", statement && "mt-[5.5rem] lg:mt-[11.5rem]")}>
          <h3 className="font-display text-[1.3rem] font-[570] tracking-[-0.02em] lg:text-[1.8125rem]">{label}</h3>
          <div className="flex flex-col gap-[3.4rem] lg:gap-[4.6rem]">
            {reviews.map((review, i) => (
              <HhhusherV2Review key={`${review.name}-${i}`} {...review} size="md" nameCase="as-written" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
