// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { ChartSpline, FlaskConical, ToggleRight } from "lucide-react";
import { GrowthbookHero, type GrowthbookHeroProps } from "./growthbook-hero";

export const heroSample: GrowthbookHeroProps = {
  title: ["Test the idea. Flip the switch.", "Learn before lunch."],
  lead: "The data-warehouse platform product teams lean on for split tests, gradual rollouts and the numbers that settle arguments.",
  secondary: { label: "Talk to us", href: "#" },
  primary: { label: "Try it free", href: "#" },
  tabs: [
    { label: "Split tests", icon: <FlaskConical strokeWidth={1.5} /> },
    { label: "Rollouts", icon: <ToggleRight strokeWidth={1.5} /> },
    { label: "Insights", icon: <ChartSpline strokeWidth={1.5} /> },
  ],
};

export default function Demo() {
  return <GrowthbookHero {...heroSample} />;
}
