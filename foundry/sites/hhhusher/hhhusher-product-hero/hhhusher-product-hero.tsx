import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton, hhhusherEase, hhhusherLabel } from "@foundry/hhhusher-button";

export interface HhhusherProductImage {
  /** what the picture shows, for screen readers */
  label: string;
  /** the photo (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
}

export interface HhhusherProductHeroProps {
  /** the product name, one entry per line */
  title: string[];
  /** the gallery, shown large with a row of thumbnails */
  images: HhhusherProductImage[];
  /** the price now, e.g. "$289 USD" */
  price: string;
  /** the old price, struck through */
  wasPrice?: string;
  /** a small outlined tag after the price, e.g. "-15%" */
  badge?: string;
  /** a mono note after the tag, e.g. "This month" */
  priceNote?: string;
  /** the paragraphs under the price */
  paragraphs: string[];
  /** the yellow checkout button */
  checkout: { label: string; href: string };
  /** a small mono line next to (desktop) or under (phones) the button */
  guarantee?: string;
  /** screen-reader names of the controls */
  labels?: { previous: string; next: string; decrease: string; increase: string; quantity: string };
  className?: string;
}

const defaultLabels = { previous: "Previous image", next: "Next image", decrease: "One less", increase: "One more", quantity: "Quantity" };

/**
 * A dark product opener. Left, a large photo with a row of thumbnails and two long thin arrows
 * (phones add an "n/4" counter); right, the name in a large light weight, a price row (old
 * price struck through, new price bold, an outlined tag and a mono note), two paragraphs, and a
 * quantity stepper with cream squares next to a yellow checkout button.
 */
export function HhhusherProductHero({ title, images, price, wasPrice, badge, priceNote, paragraphs, checkout, guarantee, labels = defaultLabels, className }: HhhusherProductHeroProps) {
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const count = images.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);
  const current = images[index];

  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-16 px-gutter pt-[6.5rem] pb-16 lg:grid-cols-[726fr_560fr] lg:gap-[4.5rem] lg:pt-[7.875rem] lg:pb-[4.5rem]">
        <div className="flex flex-col">
          <div role="img" aria-label={current?.label} className="aspect-[1.7] overflow-hidden rounded-lg border border-border bg-muted [&>*]:size-full [&>*]:object-cover">
            {current?.media}
          </div>
          <div className="mt-[1.1rem] grid grid-cols-4 gap-[0.8rem] lg:mt-[1.1rem] lg:gap-3">
            {images.map((image, i) => (
              <button
                key={i}
                type="button"
                aria-label={image.label}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "aspect-[1.54] overflow-hidden rounded-sm border bg-muted transition-[border-color,opacity] duration-300 [&>*]:size-full [&>*]:object-cover",
                  hhhusherEase,
                  i === index ? "border-glow" : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                {image.media}
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-8 lg:mt-12">
            <span className="font-mono text-[0.86rem] font-bold lg:hidden">
              {index + 1}
              <span className="text-muted-foreground">/{count}</span>
            </span>
            <button type="button" aria-label={labels.previous} onClick={() => go(-1)} className="ml-auto text-glow transition-colors duration-300 hover:text-foreground">
              <ArrowLeft aria-hidden className="h-8 w-11" strokeWidth={1.25} />
            </button>
            <button type="button" aria-label={labels.next} onClick={() => go(1)} className="text-glow transition-colors duration-300 hover:text-foreground">
              <ArrowRight aria-hidden className="h-8 w-11" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:pt-[3.75rem]">
          <h1 className="font-display text-[2.6rem] leading-[1.1] font-normal tracking-[-0.01em] lg:text-[2.6875rem] lg:leading-[1.16]">
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-3 lg:mt-9">
            {wasPrice && <s className="text-[1.6rem] font-semibold text-muted-foreground lg:text-[1.5rem]">{wasPrice}</s>}
            <span className="text-[1.6rem] font-bold lg:text-[1.5rem]">{price}</span>
            {badge && <span className={cn(hhhusherLabel, "rounded-sm border border-foreground px-1.5 py-1 font-medium")}>{badge}</span>}
            {priceNote && <span className={hhhusherLabel}>{priceNote}</span>}
          </div>
          <div className="mt-12 flex flex-col gap-5 text-[1.3rem] leading-[1.3] font-medium lg:mt-[4.25rem] lg:text-[1.125rem] lg:leading-[1.45]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 lg:mt-[3.25rem] lg:flex-row lg:items-center">
            <div className="flex h-[3.6rem] items-center justify-between rounded-lg bg-muted p-1 lg:h-12 lg:w-[9.2rem]" role="group" aria-label={labels.quantity}>
              <button
                type="button"
                aria-label={labels.decrease}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex size-[3.1rem] items-center justify-center rounded-sm bg-foreground text-background transition-colors duration-700 hover:bg-background hover:text-foreground lg:size-[2.4rem]"
              >
                <Minus aria-hidden className="size-6" strokeWidth={1.5} />
              </button>
              <span aria-live="polite" className="text-[1.1rem] font-medium">
                {qty}
              </span>
              <button
                type="button"
                aria-label={labels.increase}
                onClick={() => setQty((q) => q + 1)}
                className="flex size-[3.1rem] items-center justify-center rounded-sm bg-foreground text-background transition-colors duration-700 hover:bg-background hover:text-foreground lg:size-[2.4rem]"
              >
                <Plus aria-hidden className="size-6" strokeWidth={1.5} />
              </button>
            </div>
            <HhhusherButton href={checkout.href} size="lg" className="h-[3.6rem] text-[0.86rem] lg:h-12 lg:px-[1.35rem] lg:text-xs">
              {checkout.label}
            </HhhusherButton>
            {guarantee && <span className="max-w-[9rem] self-center text-center font-mono text-[0.72rem] leading-[1.1] font-bold uppercase lg:ml-2 lg:text-left lg:text-[0.6875rem]">{guarantee}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
