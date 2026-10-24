// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionCareersCallProps } from "./castelion-careers-call";
import { CastelionCareersCall } from "./castelion-careers-call";

export const careersCallSample: CastelionCareersCallProps = {
  phrases: ["Hands on Metal", "Fly Every Week", "Learn by Doing"],
  title: ["Your Turn", "to Build"],
  body: "Want to work on real flight hardware, own the systems that matter and see your work leave the ground? Look through our openings and help shape how the free world defends itself.",
  ctaLabel: "See Openings",
  ctaHref: "#",
};

export default function Demo() {
  return <CastelionCareersCall {...careersCallSample} />;
}
