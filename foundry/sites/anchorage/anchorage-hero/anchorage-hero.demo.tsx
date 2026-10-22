// Sample content lives here (gallery only); the page reuses it.
import { AnchorageHero, type AnchorageHeroProps } from "./anchorage-hero";

export const heroSample: AnchorageHeroProps = {
  eyebrow: "A chartered trust bank for digital assets",
  title: "Assets, held steady",
  subtitle: "Bank-grade rails for the institutions moving markets on-chain.",
};

export default function Demo() {
  return <AnchorageHero {...heroSample} />;
}
