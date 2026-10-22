// Sample content lives here (gallery only); the page reuses it. Cairn is a made-up bank.
import { IncreaseHero, type IncreaseHeroProps } from "./increase-hero";

export const heroSample: IncreaseHeroProps = {
  badge: { label: "Now live: Cairn Trust, a chartered bank", href: "#news" },
  lead: "The bank for software that moves money.",
  rest: "Launch real financial products on a bank that speaks API.",
  primary: { label: "Talk to our team", href: "#sales" },
  secondary: { label: "Get started", href: "#start" },
};

export default function Demo() {
  return <IncreaseHero {...heroSample} />;
}
