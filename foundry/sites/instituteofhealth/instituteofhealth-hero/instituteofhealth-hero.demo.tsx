// Sample content (gallery only); the page reuses it.
import { InstituteofhealthHero, type InstituteofhealthHeroProps } from "./instituteofhealth-hero";

export const heroSample: InstituteofhealthHeroProps = {
  headline: "Where root-cause nutrition careers begin",
  subhead: "A practitioner certificate that pairs lab interpretation, clinical nutrition and the craft of running a practice.",
  action: { label: "See how it works", href: "#" },
  stats: [
    { label: "Lessons in the library", value: 840 },
    { label: "Nations with graduates", value: 38 },
    { label: "Lab panels covered", value: 19 },
  ],
};

export default function Demo() {
  return <InstituteofhealthHero {...heroSample} pinned={false} />;
}
