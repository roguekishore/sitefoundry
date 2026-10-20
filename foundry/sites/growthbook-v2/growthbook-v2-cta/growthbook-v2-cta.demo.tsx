// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { GrowthbookV2Cta, type GrowthbookV2CtaProps } from "./growthbook-v2-cta";

export const ctaSample: GrowthbookV2CtaProps = {
  title: "Ready when you are",
  body: "No card needed. Begin with flags, experiments and analytics on the free plan.",
  actions: [
    { label: "Start now", href: "#", variant: "primary" },
    { label: "Talk to us", href: "#", variant: "outline" },
  ],
};

export default function Demo() {
  return <GrowthbookV2Cta {...ctaSample} />;
}
