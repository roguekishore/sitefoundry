import { ArcHero, type ArcHeroProps } from "./arc-hero";

export const heroSample: ArcHeroProps = {
  title: "Smarter treasury for venture-backed software teams",
  subtitle: "Hold operating cash, earn yield on reserves, line up venture debt and lean on an AI analyst, all from a single account.",
  primary: { label: "Open an account", href: "#" },
  secondary: { label: "Talk to us", href: "#" },
};

export default function Demo() {
  return <ArcHero {...heroSample} />;
}
