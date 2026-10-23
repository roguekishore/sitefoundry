import { UnitHero, type UnitHeroProps } from "./unit-hero";

export const heroSample: UnitHeroProps = {
  badge: { label: "Just shipped: card controls, payouts in 40 currencies, and FedNow", href: "#" },
  title: "Launch money features on proven rails",
  subtitle: "Hold, send, issue, and lend funds right inside your app.",
  cta: { label: "Book a walkthrough", href: "#" },
};

export default function Demo() {
  return <UnitHero {...heroSample} />;
}
