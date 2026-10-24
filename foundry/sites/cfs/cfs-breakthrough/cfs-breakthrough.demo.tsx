// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { CfsBreakthrough, type CfsBreakthroughProps } from "./cfs-breakthrough";

export const breakthroughSample: CfsBreakthroughProps = {
  title: "A shorter road to power from fusion",
  body:
    "For half a century, fusion research pointed one way: if you want a machine to give back more energy than it takes, build it enormous. National programmes poured concrete for reactors the size of cathedrals and timelines the length of careers. Brightwater started from the opposite end. Our coils are wound from a ceramic tape that carries current with no loss at temperatures a refrigerator plant can hold, which lets the field grow stronger while the vessel grows smaller. We design every part to be built on a line rather than in a pit: the first compact core is under assembly in our yard, and the plant that follows it is drawn to be copied. A team of physicists, welders, grid engineers and builders now works on one goal, a fusion station that a regional utility can order, site and run.",
  figures: [{ label: "01" }, { label: "02" }, { label: "03" }],
  link: { label: "Read the plan", href: "#" },
};

export default function Demo() {
  return <CfsBreakthrough {...breakthroughSample} />;
}
