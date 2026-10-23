import { LithicHero, type LithicHeroProps } from "./lithic-hero";

export const heroSample: LithicHeroProps = {
  title: "Card programs and payouts, built as code",
  text: "Ship a card in weeks, grow without new headcount, and hand the hard parts of issuing to a platform engineers like and partner banks rely on.",
  secondary: { label: "Try the test bench", href: "#" },
  primary: { label: "Talk to us", href: "#" },
};

export default function Demo() {
  return <LithicHero {...heroSample} />;
}
