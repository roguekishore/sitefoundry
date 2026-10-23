import { useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";

export interface FunctionhealthBoardMember {
  name: string;
  /** one or two lines about them */
  bio: string;
  /** square portrait; empty shows a placeholder */
  photo?: ReactNode;
}

export interface FunctionhealthBoardProps {
  title: HeadingPart[];
  text?: string;
  members: FunctionhealthBoardMember[];
  /** screen-reader label of the arrow button */
  nextLabel: string;
  className?: string;
}

export function FunctionhealthBoard({ title, text, members, nextLabel, className }: FunctionhealthBoardProps) {
  const rail = useRef<HTMLUListElement>(null);
  const next = () => {
    const el = rail.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: 312, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} text={text} textClassName="text-base lg:text-lg" />
      </div>
      <div className="relative mx-auto mt-10 max-w-page lg:mt-[4.5rem]">
        <ul
          ref={rail}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-[var(--page-gutter)] px-gutter [scrollbar-width:none] lg:gap-8 lg:[mask-image:linear-gradient(to_right,var(--foreground)_78%,transparent)] [&::-webkit-scrollbar]:hidden"
        >
          {members.map((m) => (
            <li key={m.name} className="w-[17rem] shrink-0 snap-start lg:w-[17.5rem]">
              <FunctionhealthMedia media={m.photo} ratio="aspect-square w-full" rounded="rounded-[0.375rem]" />
              <p className="mt-4 text-base leading-snug font-semibold lg:text-lg">{m.name}</p>
              <p className="mt-2 text-sm leading-[1.5] font-light">{m.bio}</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={next}
          aria-label={nextLabel}
          className="absolute top-[7.5rem] right-[calc(var(--page-gutter)-1.25rem)] hidden size-10 place-items-center rounded-full border border-primary bg-background text-primary transition-[background-color,color] duration-200 hover:bg-primary hover:text-primary-foreground motion-reduce:transition-none lg:grid"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
