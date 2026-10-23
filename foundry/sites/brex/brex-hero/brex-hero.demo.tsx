import { BrexHero, type BrexHeroProps } from "./brex-hero";

export const heroSample: BrexHeroProps = {
  title: "Run your money with a lighter touch.",
  subtitle: "Cards, accounts, bill pay and bookkeeping in one place, across 90 countries.",
  form: { placeholder: "Enter your work email", label: "Work email", submitLabel: "Get started" },
  watch: { label: "Watch Kiln in action", href: "#" },
};

export default function Demo() {
  return <BrexHero {...heroSample} />;
}
