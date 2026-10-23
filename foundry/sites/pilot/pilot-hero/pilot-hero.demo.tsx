import { PilotHero, type PilotHeroProps } from "./pilot-hero";

export const heroSample: PilotHeroProps = {
  rating: { source: "R", score: "4.8", count: "(210 reviews)" },
  title: "Bookkeeping, tax and advice\nfor companies on the way up",
  lede: "Your books closed on time, your taxes filed, and a finance lead on call when the big questions land.",
  cta: { label: "Get going", href: "#" },
  link: { label: "See how it works", href: "#" },
  logosLabel: "Counted on by 3,000+ ambitious small companies like",
  logos: [
    { name: "Northwind" },
    { name: "Quarry & Co" },
    { name: "fernlab", href: "#", tag: "Case study" },
    { name: "Bellhop", face: "mono" },
    { name: "Oakmere", href: "#", tag: "Case study" },
    { name: "TIDEWORKS", face: "mono", href: "#", tag: "Case study" },
    { name: "Hollis Grange", face: "serif" },
    { name: "Marrow", href: "#", tag: "Case study", face: "serif" },
  ],
};

export default function Demo() {
  return <PilotHero {...heroSample} />;
}
