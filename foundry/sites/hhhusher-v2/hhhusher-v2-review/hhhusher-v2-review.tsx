import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherV2Reveal, hhhusherV2RevealStyle } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2ReviewProps {
  /** what they said */
  quote: string;
  /** who said it */
  name: string;
  /** stars out of five */
  rating?: number;
  /** lg: the landing page's 24px quotes · md: the product page's 21px quotes */
  size?: "md" | "lg";
  /** caps: the name in capitals (landing) · as-written: as typed (product page) */
  nameCase?: "caps" | "as-written";
  /** stagger position when several reveal together */
  step?: number;
  className?: string;
}

export function HhhusherV2Review({ quote, name, rating = 5, size = "lg", nameCase = "caps", step = 0, className }: HhhusherV2ReviewProps) {
  return (
    <figure className={cn(hhhusherV2Reveal("rise"), className)} style={hhhusherV2RevealStyle(step)}>
      <div className="flex gap-1.5 text-primary" role="img" aria-label={`${rating} / 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={cn("size-[1.15rem] stroke-0", i < rating ? "fill-current" : "fill-current opacity-30")} />
        ))}
      </div>
      <blockquote
        className={cn(
          "mt-7 font-display font-[570] tracking-[-0.02em]",
          size === "lg" ? "text-[1.3rem] leading-[1.45] lg:mt-9 lg:text-[1.5rem] lg:leading-[1.7]" : "text-[1.15rem] leading-[1.3] lg:text-[1.625rem] lg:leading-[1.33]",
        )}
      >
        {quote}
      </blockquote>
      <figcaption className={cn("mt-7 font-mono font-bold", nameCase === "caps" ? "text-[0.8rem] uppercase lg:text-base" : "text-[0.72rem] lg:text-[1rem]")}>
        {name}
      </figcaption>
    </figure>
  );
}
