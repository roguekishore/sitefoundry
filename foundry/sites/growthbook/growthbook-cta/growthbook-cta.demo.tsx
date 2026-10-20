// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { GrowthbookCta, type GrowthbookCtaProps } from "./growthbook-cta";

export const ctaSample: GrowthbookCtaProps = {
  title: "Ready to learn faster?",
  body: "Free to start, no card needed. Flags, tests and usage insights from day one.",
  primary: { label: "Get going", href: "#" },
  secondary: { label: "Talk to us", href: "#" },
};

export default function Demo() {
  return <GrowthbookCta {...ctaSample} />;
}
