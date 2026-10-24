// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionHeroProps } from "./castelion-hero";
import { CastelionHero } from "./castelion-hero";

export const heroSample: CastelionHeroProps = {
  title: ["Why We", "Build"],
  lead: [
    "Pellworth draws, flies and builds the next wave of",
    "airframes in weeks, not decades, and in numbers",
    "large enough to keep the peace.",
  ],
  motto: ["Strength That Keeps Peace"],
  mediaLabel: "Film of a test convoy on a dusty range at dawn",
};

export default function Demo() {
  return <CastelionHero {...heroSample} />;
}
