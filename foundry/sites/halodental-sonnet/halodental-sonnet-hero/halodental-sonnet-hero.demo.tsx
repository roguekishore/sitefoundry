// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetHero, type HalodentalSonnetHeroProps } from "./halodental-sonnet-hero";

export const heroSample: HalodentalSonnetHeroProps = {
  wordmark: "Gleam",
  tagline: "Everyone Smiles",
  play: { label: "Play the video", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <HalodentalSonnetHero {...heroSample} />
    </div>
  );
}
