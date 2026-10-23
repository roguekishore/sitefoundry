// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanGlobe, type UltrahumanGlobeProps } from "./ultrahuman-globe";

export const globeSample: UltrahumanGlobeProps = {
  title: "Everyone's nights, on one map.",
  body: "Millions already sleep with Kinrise. Find a stockist close to you and try one on.",
  action: { label: "Find a stockist", href: "#" },
  stats: [
    { value: "98,417,302", label: "Nights recorded" },
    { value: "150+", label: "Countries with active bands" },
  ],
  cards: [
    { label: "Average sleep score", value: "79", place: "Canada" },
    { label: "Average sleep score", value: "76", place: "Lisbon" },
  ],
  mediaLabel: "A night-side globe with city lights",
};

export default function Demo() {
  return <UltrahumanGlobe {...globeSample} />;
}
