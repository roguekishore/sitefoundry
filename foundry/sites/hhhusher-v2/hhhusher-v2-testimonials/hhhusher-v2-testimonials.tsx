import { cn } from "@foundry/foundry-utils";
import { HhhusherV2RevealText } from "@foundry/hhhusher-v2-reveal";
import { HhhusherV2Review } from "@foundry/hhhusher-v2-review";

export interface HhhusherV2Testimonial {
  quote: string;
  name: string;
  /** stars out of five (default 5) */
  rating?: number;
}

export interface HhhusherV2TestimonialsProps {
  /** the heading; use \n to break it where the original does */
  heading: string;
  /** usually two */
  reviews: HhhusherV2Testimonial[];
  id?: string;
  className?: string;
}

export function HhhusherV2Testimonials({ heading, reviews, id, className }: HhhusherV2TestimonialsProps) {
  return (
    <section id={id} className={cn("bg-secondary pt-[calc(var(--section-y)*1.45)] pb-[calc(var(--section-y)*1.3)] text-secondary-foreground lg:pt-[calc(var(--section-y)*0.85)] lg:pb-[calc(var(--section-y)*1.1)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {heading.split("\n").map((line) => (
          <HhhusherV2RevealText
            key={line}
            as="h2"
            text={line}
            className="font-display text-[2.6rem] leading-[1.1] font-[570] tracking-[-0.015em] lg:text-[4.25rem] lg:leading-[1.02]"
          />
        ))}
        <div className="mt-[3.2rem] grid gap-[4.5rem] lg:mt-[5.4rem] lg:grid-cols-2 lg:gap-x-[7%]">
          {reviews.map((review, i) => (
            <HhhusherV2Review key={review.name} {...review} step={i} className="max-w-[40rem]" />
          ))}
        </div>
      </div>
    </section>
  );
}
