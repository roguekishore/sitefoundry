// Sample content lives here (gallery only); the page reuses it.
import { HalodentalOpusHero, type HalodentalOpusHeroProps } from "./halodental-opus-hero";

export const heroSample: HalodentalOpusHeroProps = {
  wordmark: "Lumo",
  tagline: "Smile Brighter",
  video: { label: "Watch the film", href: "#" },
};

export default function Demo() {
  return <HalodentalOpusHero {...heroSample} />;
}
