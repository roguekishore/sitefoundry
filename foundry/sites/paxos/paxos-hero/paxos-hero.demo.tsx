import { PaxosHero, type PaxosHeroProps } from "./paxos-hero";

export const heroSample: PaxosHeroProps = {
  title: "Tokenisation Rails for Institutions",
  lead: "Banks and fintechs run their tokenised dollars and custody on the Keelstone network.",
  action: { label: "Talk to Us", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background py-6">
      <PaxosHero {...heroSample} />
    </div>
  );
}
