import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayArrowLink } from "@foundry/thirdway-arrow-link";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";
import "./thirdway-hero.css";

export interface ThirdwayHeroProps {
  /** the big headline; "\n" starts a new line */
  headline: string;
  /** the statement that fills in character by character as you scroll */
  statement: string;
  /** the link under the statement */
  link: { label: string; href: string };
  /** the word beside the scroll cue */
  scrollLabel: string;
  /** the full-window background video or image; a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** The statement, split into words and characters so each character can brighten on its own. */
function Chars({ text }: { text: string }) {
  const total = [...text].filter((c) => c !== " ").length;
  let n = 0;
  return (
    <>
      {text.split(" ").map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 && " "}
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch, ci) => (
              <span key={ci} className="thirdway-hero-char" style={{ "--i": n++, "--n": total } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </>
  );
}

/**
 * 155svh tall. A full-bleed media layer is pinned to the window for the whole section. The first
 * window height holds a huge headline that scrolls away over it; in the remaining 55svh the
 * statement brightens character by character, and the cream page then slides up over the media.
 */
export function ThirdwayHero({ headline, statement, link, scrollLabel, media, className }: ThirdwayHeroProps) {
  const lines = headline.split("\n");
  return (
    <section className={cn("dark relative h-[155svh]", className)}>
      {/* the media layer: pinned to the window for the whole section, out of the flow */}
      <div className="sticky top-0 z-0 -mb-[100svh] h-svh overflow-clip">
        <div className="absolute inset-0">{media ?? <ThirdwayPlaceholder className="size-full rounded-none" />}</div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background/35 to-transparent" />
      </div>
      {/* first window: the headline sits at the bottom and scrolls away over the pinned media */}
      <div className="relative z-10 flex h-svh flex-col justify-end px-gutter pb-[4.5rem] md:px-[calc(var(--page-gutter)*2)] md:pb-[5.5rem]">
        <h1 className="text-[clamp(3.5rem,8.4vw,7.5rem)] leading-[0.92] font-[560] tracking-[-0.06em] [word-spacing:-0.07em] text-foreground md:leading-[0.9]">
          {lines.map((l, i) => (
            <span key={i} className={cn("block", i > 0 && "mt-1.5 md:mt-0")}>
              {l}
            </span>
          ))}
        </h1>
        <div className="thirdway-hero-scroll mt-8 flex items-center justify-end gap-2 text-sm font-[560] tracking-[-0.04em] text-foreground md:absolute md:right-8 md:bottom-8 md:mt-0">
          <span>{scrollLabel}</span>
          <span aria-hidden className="relative flex h-[1.875rem] w-5 justify-center overflow-clip rounded-full border-2 border-foreground">
            <span className="thirdway-hero-arrow mt-1 block h-2 w-0.5 rounded-full bg-foreground" />
          </span>
        </div>
      </div>
      {/* the rest: the statement over a darkening gradient while the media stays put */}
      <div className="relative z-10 h-[55svh] px-gutter pt-[15svh] md:px-[calc(var(--page-gutter)*2)]">
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-transparent to-background/50" />
        <div className="md:ml-[50%] md:max-w-[calc(50%-1rem)]">
          <p className="text-2xl leading-[1.1] font-[560] tracking-[-0.04em] [word-spacing:-0.06em] text-foreground md:text-[2rem] md:tracking-[-0.06em]">
            <span className="sr-only">{statement}</span>
            <span aria-hidden className="thirdway-hero-fill block">
              <Chars text={statement} />
            </span>
          </p>
          <div className="mt-8 md:mt-10">
            <ThirdwayArrowLink label={link.label} href={link.href} />
          </div>
        </div>
      </div>
    </section>
  );
}
