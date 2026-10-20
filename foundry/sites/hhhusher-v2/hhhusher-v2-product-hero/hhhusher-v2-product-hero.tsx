import { useState, type ReactNode } from "react";
import { Minus, MoveLeft, MoveRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button, hhhusherV2Ease } from "@foundry/hhhusher-v2-button";

export interface HhhusherV2ProductPicture {
  /** what the picture shows, for screen readers (and the empty placeholder's label) */
  label: string;
  /** the picture; a placeholder when empty */
  media?: ReactNode;
}

export interface HhhusherV2ProductHeroProps {
  /** the product name; use \n to break it into two lines */
  name: string;
  /** the current price, as shown (e.g. "$289 USD") */
  price: string;
  /** the old price, struck through */
  oldPrice?: string;
  /** the outlined tag next to the price (e.g. "-15%") */
  tag?: string;
  /** the small mono note after the tag */
  tagNote?: string;
  /** one or more paragraphs under the price */
  paragraphs: string[];
  /** pictures for the gallery (up to four thumbnails show) */
  pictures: HhhusherV2ProductPicture[];
  /** the yellow checkout button */
  checkout: { label: string; href: string };
  /** the small mono guarantee next to (desktop) or under (phone) the button */
  note?: string;
  /** screen-reader labels for the arrows and the stepper */
  labels?: { previous: string; next: string; less: string; more: string; quantity: string };
  id?: string;
  className?: string;
}

export function HhhusherV2ProductHero({ name, price, oldPrice, tag, tagNote, paragraphs, pictures, checkout, note, labels, id, className }: HhhusherV2ProductHeroProps) {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const count = pictures.length;
  const go = (step: number) => setActive((a) => (a + step + count) % count);

  return (
    <section id={id} className={cn("dark bg-card text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter pt-[4.5rem] pb-16 lg:grid-cols-[53.5%_minmax(0,1fr)] lg:gap-[5.4%] lg:pt-[7.9rem] lg:pb-[4.7rem]">
        {/* gallery */}
        <div>
          <div className="relative aspect-[1.7] overflow-clip rounded-lg border border-border bg-muted">
            {pictures.map((p, i) => (
              <div
                key={p.label}
                role="img"
                aria-label={p.label}
                aria-hidden={i !== active}
                className={cn("absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none [&>*]:size-full [&>*]:object-cover", i === active ? "opacity-100" : "opacity-0")}
              >
                {p.media}
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[repeat(4,2.1rem)] gap-3 lg:grid-cols-4 lg:gap-3">
            {pictures.slice(0, 4).map((p, i) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={p.label}
                aria-pressed={i === active}
                className={cn(
                  "aspect-[1.54] overflow-clip rounded-sm border bg-muted transition-[border-color,opacity] lg:rounded-md [&>*]:size-full [&>*]:object-cover",
                  hhhusherV2Ease,
                  i === active ? "border-glow" : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                {p.media}
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between lg:mt-9 lg:justify-end">
            <p className="font-mono text-[0.85rem] font-bold lg:hidden">
              {active + 1}
              <span className="text-glow">/{count}</span>
            </p>
            <div className="flex gap-8 text-glow lg:gap-11">
              <button type="button" onClick={() => go(-1)} aria-label={labels?.previous} className="transition-colors hover:text-foreground">
                <MoveLeft className="size-7 lg:size-11" strokeWidth={1.2} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label={labels?.next} className="transition-colors hover:text-foreground">
                <MoveRight className="size-7 lg:size-11" strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="lg:pt-[3.6rem]">
          <h1 className="font-display text-[2.6rem] leading-[1.15] font-normal tracking-[-0.01em] whitespace-pre-line lg:text-[2.6875rem] lg:leading-[1.16]">{name}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 lg:mt-7">
            {oldPrice && <s className="font-display text-[1.3rem] font-bold text-muted-foreground lg:text-[1.5rem]">{oldPrice}</s>}
            <span className="font-display text-[1.3rem] font-bold lg:text-[1.5rem]">{price}</span>
            {tag && <span className="rounded-sm border border-foreground px-1.5 py-0.5 font-display text-[0.75rem] font-bold">{tag}</span>}
            {tagNote && <span className="pl-1 font-mono text-[0.72rem] font-bold uppercase">{tagNote}</span>}
          </div>
          <div className="mt-10 space-y-5 font-display text-[1.04rem] leading-[1.45] font-[570] tracking-[-0.01em] lg:mt-[4.4rem] lg:text-[1.125rem] lg:leading-[1.47]">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:mt-[3.1rem] lg:flex-row lg:items-center">
            <div className="flex h-12 items-center justify-between rounded-sm bg-foreground/25 px-1.5 lg:w-[9.2rem]">
              <button type="button" aria-label={labels?.less} onClick={() => setQty((q) => Math.max(1, q - 1))} className={cn("flex size-[2.4rem] items-center justify-center rounded-sm bg-foreground text-background transition-colors hover:bg-background hover:text-foreground", hhhusherV2Ease)}>
                <Minus className="size-5" strokeWidth={1.75} />
              </button>
              <output aria-label={labels?.quantity} className="font-display text-[1.1rem] font-[570]">{qty}</output>
              <button type="button" aria-label={labels?.more} onClick={() => setQty((q) => q + 1)} className={cn("flex size-[2.4rem] items-center justify-center rounded-sm bg-foreground text-background transition-colors hover:bg-background hover:text-foreground", hhhusherV2Ease)}>
                <Plus className="size-5" strokeWidth={1.75} />
              </button>
            </div>
            <HhhusherV2Button href={checkout.href} className="h-12 w-full lg:w-[11.9rem]">
              {checkout.label}
            </HhhusherV2Button>
            {note && <p className="text-center font-mono text-[0.68rem] leading-[1.15] font-bold uppercase lg:max-w-[8.5rem] lg:pl-1 lg:text-left">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
