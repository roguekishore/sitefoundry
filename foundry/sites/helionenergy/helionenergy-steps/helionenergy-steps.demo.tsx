import type { HelionenergyStepsProps } from "./helionenergy-steps";
import { HelionenergySteps } from "./helionenergy-steps";

export const stepsSample: HelionenergyStepsProps = {
  eyebrow: "From fuel to the grid",
  title: ["Inside the reactor"],
  steps: [
    "Fields squeeze two clouds of plasma together",
    "They collide, fuse, and give off a burst of energy",
    "We catch that pulse as power for the grid",
  ],
  ctaLabel: "See the science",
  ctaHref: "#",
  skipLabel: "Skip ahead",
  skipHref: "#pillars",
};

export default function Demo() {
  return <HelionenergySteps {...stepsSample} />;
}
