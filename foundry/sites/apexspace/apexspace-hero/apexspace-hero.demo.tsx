// Sample content lives here (gallery only); the page reuses it.
import { ApexspaceHero, type ApexspaceHeroProps } from "./apexspace-hero";

export const heroSample: ApexspaceHeroProps = {
  title: "Satellite buses,\noff the line",
  text: "Pick a flight-proven Orrery bus, set it up for your payload in an afternoon, and have hardware on the launch manifest in months instead of half a decade.",
  cta: { label: "Build yours", href: "#" },
};

export default function Demo() {
  return <ApexspaceHero {...heroSample} />;
}
