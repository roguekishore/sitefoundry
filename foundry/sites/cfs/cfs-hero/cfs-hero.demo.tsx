// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { CfsHero, type CfsHeroProps } from "./cfs-hero";

export const heroSample: CfsHeroProps = {
  title: "The first fusion power plant designed to be built by the dozen",
  pillars: [
    {
      label: "Build small",
      text: "Dense, cold-wound magnet coils shrink the whole machine to the size of a barn.",
    },
    {
      label: "Build often",
      text: "A production line, not a one-off: every unit is a copy of the last good one.",
    },
    {
      label: "Build openly",
      text: "Partner yards, universities and grid operators work from the same drawings.",
    },
  ],
};

export default function Demo() {
  return <CfsHero {...heroSample} />;
}
