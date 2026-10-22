import { SharplinkHero, type SharplinkHeroProps } from "./sharplink-hero";
import { Landmark } from "lucide-react";

export const heroSample: SharplinkHeroProps = {
  title: "Capital that\nKeeps Working",
  primary: { label: "Open the ledger", href: "#ledger" },
  secondary: { label: "Shareholder center", href: "#shareholders" },
  listedLabel: "Trading on",
  exchange: (
    <span className="flex items-center gap-1.5 text-lg font-medium tracking-[-0.02em]">
      <Landmark strokeWidth={2} /> Northgate
    </span>
  ),
  lead: "Ferrowell is a listed treasury company that holds and stakes LMN, giving shareholders a disciplined, yield-bearing route into the Lumen network.",
  news: {
    label: "Company update",
    date: "Sep 30, 2026",
    title: "Ferrowell publishes its third-quarter reserve and staking report",
    href: "#journal",
  },
};

export default function Demo() {
  return <SharplinkHero {...heroSample} />;
}
