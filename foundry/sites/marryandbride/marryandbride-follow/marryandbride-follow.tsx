import { cn } from "@foundry/foundry-utils";
import { MarryandbrideLink } from "@foundry/marryandbride-link";

export interface MarryandbrideFollowProps {
  /** the serif line in the box */
  title: string;
  /** the social links */
  links: { label: string; href: string }[];
  className?: string;
}

/** A hairline-bordered box with a serif line and underlined social links. */
export function MarryandbrideFollow({ title, links, className }: MarryandbrideFollowProps) {
  return (
    <section className={cn("bg-background px-8 pt-[5.6rem] text-foreground lg:px-gutter lg:pt-[6.4rem]", className)}>
      <div className="mx-auto max-w-[22.5rem] border border-border px-4 pt-5 pb-3.5 text-center lg:pt-[1.15rem]">
        <p className="font-display text-[1.13rem] leading-[1.4] lg:text-[1.32rem]">{title}</p>
        <ul className="mt-4 flex justify-center gap-[1.6rem] font-sans text-[0.78rem] leading-none tracking-[0.07em] uppercase lg:mt-[1.4rem] lg:text-[0.863rem]">
          {links.map((link) => (
            <li key={link.href}>
              <MarryandbrideLink href={link.href}>{link.label}</MarryandbrideLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
