import { useEffect, useState, type ReactNode } from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-download-dock.css";

export interface BevelDownloadDockProps {
  /** desktop card: the QR code image (a placeholder square when empty) */
  qr?: ReactNode;
  /** desktop card: its title */
  qrTitle: ReactNode;
  /** desktop card: the small line under the title */
  qrText: ReactNode;
  /** phone banner: the app icon (a placeholder tile when empty) */
  appIcon?: ReactNode;
  /** phone banner: the app's name */
  appName: ReactNode;
  /** phone banner: the line under the name */
  appTagline: ReactNode;
  /** phone banner: star rating out of five (halves allowed) */
  rating?: number;
  /** phone banner: the text after the stars (e.g. a count of ratings) */
  ratingLabel?: ReactNode;
  /** phone banner: the button */
  cta: { label: ReactNode; href: string };
  className?: string;
}

/**
 * The floating "get the app" prompt. Desktop: a small dark QR card in the bottom-right corner
 * that fades out over the first ~900px of scroll (CSS scroll timeline). Phones: a white
 * banner at the bottom that slides up while the visitor scrolls up and away when they scroll down.
 */
export function BevelDownloadDock({ qr, qrTitle, qrText, appIcon, appName, appTagline, rating = 5, ratingLabel, cta, className }: BevelDownloadDockProps) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setShown(y < last && y > 400);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={className}>
      <aside className="bevel-dock-qr fixed right-4 bottom-4 z-40 hidden w-[14rem] items-center gap-2.5 rounded-lg bg-primary p-2 text-primary-foreground lg:flex">
        <div className="size-16 shrink-0 overflow-clip rounded-md bg-primary-foreground p-1">{qr ?? <BevelPlaceholder tone="muted" className="size-full rounded-sm" />}</div>
        <div className="min-w-0">
          <p className="text-base leading-tight font-semibold">{qrTitle}</p>
          <p className="mt-1 text-xs leading-[1.1] font-semibold text-primary-foreground/60">{qrText}</p>
        </div>
      </aside>

      <aside
        className={cn(
          "fixed inset-x-4 bottom-3 z-40 flex items-center gap-3 rounded-2xl bg-background p-2.5 text-foreground shadow-[0_4px_16px_0_color-mix(in_oklab,var(--foreground)_15%,transparent)] transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden",
          shown ? "translate-y-0" : "translate-y-[calc(100%+1.5rem)]",
        )}
      >
        <div className="size-[4.5rem] shrink-0 overflow-clip rounded-2xl">{appIcon ?? <BevelPlaceholder tone="muted" className="size-full" />}</div>
        <div className="min-w-0 flex-1">
          <p className="text-[1.125rem] leading-tight font-semibold">{appName}</p>
          <p className="text-base leading-tight font-medium text-muted-foreground">{appTagline}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <span className="flex text-highlight [&_svg]:size-3.5 [&_svg]:fill-current">
              {Array.from({ length: Math.floor(rating) }, (_, i) => (
                <Star key={i} strokeWidth={0} />
              ))}
              {rating % 1 >= 0.5 && <StarHalf strokeWidth={0} />}
            </span>
            {ratingLabel}
          </p>
        </div>
        <a href={cta.href} className="flex h-10 shrink-0 items-center rounded-full bg-primary px-4 text-base font-semibold text-primary-foreground">
          {cta.label}
        </a>
      </aside>
    </div>
  );
}
