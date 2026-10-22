// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearHero, type RadiantnuclearHeroProps } from "./radiantnuclear-hero";

export const heroSample: RadiantnuclearHeroProps = {
  title: "Corvane secures $410M order to bring on-site power to twelve naval yards",
  subtitle: "12 Tessera units | The biggest order in the Keystone program | A first for the Defense Energy Office",
  cta: { label: "Read the story", href: "#story" },
  note: "Artist's impression of Tessera units at a naval yard. Buildings and equipment are illustrative only; final siting is still under review.",
};

export default function Demo() {
  return <RadiantnuclearHero {...heroSample} />;
}
