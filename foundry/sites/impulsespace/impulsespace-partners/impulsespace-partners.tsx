import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./impulsespace-partners.css";

export interface ImpulsespacePartner {
  /** the partner's name (also read out when a logo is given) */
  name: string;
  /** a logo to show instead of the name */
  logo?: ReactNode;
}

export interface ImpulsespacePartnersProps {
  /** the small mono label over the strip */
  label: string;
  /** sixteen work best: the marquee shows all, phones pair n with n+8 in eight slots */
  partners: ImpulsespacePartner[];
  className?: string;
}

function Name({ partner }: { partner: ImpulsespacePartner }) {
  return partner.logo ? (
    <span role="img" aria-label={partner.name} className="flex items-center [&_svg]:h-7 [&_svg]:w-auto">
      {partner.logo}
    </span>
  ) : (
    <span className="font-display text-xl leading-[1.2] font-semibold tracking-[-0.01em] whitespace-nowrap">{partner.name}</span>
  );
}

/** Black partner strip: a drifting marquee on desktop, a blur-swapping grid on phones. */
export function ImpulsespacePartners({ label, partners, className }: ImpulsespacePartnersProps) {
  const half = Math.ceil(partners.length / 2);
  const slots = partners.slice(0, Math.min(half, 8)).map((a, i) => [a, partners[i + half]] as const);
  return (
    <section className={cn("dark bg-background pt-12 pb-14 text-foreground lg:py-[2.8rem]", className)}>
      <p className="px-gutter text-center font-mono text-sm leading-[1.5] tracking-[0.08em] text-muted-foreground uppercase">{label}</p>

      {/* desktop marquee */}
      <div className="mt-8 hidden overflow-clip [mask-image:linear-gradient(90deg,transparent,var(--foreground)_12%,var(--foreground)_88%,transparent)] lg:block">
        <ul className="impulsespace-partners-track flex w-max">
          {[0, 1].map((copy) =>
            partners.map((p) => (
              <li key={`${copy}-${p.name}`} aria-hidden={copy === 1 || undefined} className="flex h-10 shrink-0 items-center px-10">
                <Name partner={p} />
              </li>
            )),
          )}
        </ul>
      </div>

      {/* phone grid */}
      <ul className="mt-8 grid grid-cols-2 px-gutter lg:hidden">
        {slots.map(([a, b], i) => (
          <li key={a.name} className="grid h-24 place-items-center">
            <span className={cn("[grid-area:1/1]", b && "impulsespace-partners-a")} style={b ? { animationDelay: `${i * 0.35}s` } : undefined}>
              <Name partner={a} />
            </span>
            {b && (
              <span className="impulsespace-partners-b [grid-area:1/1]" style={{ animationDelay: `${i * 0.35 - 4.5}s` }}>
                <Name partner={b} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
