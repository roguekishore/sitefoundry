// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { ChartSpline, FlaskConical, Flag } from "lucide-react";
import { GrowthbookFeatures, type GrowthbookFeaturesProps } from "./growthbook-features";

export const featuresSample: GrowthbookFeaturesProps = {
  title: ["Every test, flag and chart", "in one quiet place"],
  rows: [
    {
      eyebrow: "Split testing",
      icon: <FlaskConical strokeWidth={1.5} />,
      title: ["Sharper answers,", "sooner"],
      body: "Analysts at busy marketplaces trust Northvane to run careful tests on huge traffic and call the winner without second-guessing the maths.",
      cta: { label: "See how tests work", href: "#" },
    },
    {
      eyebrow: "Gradual Rollouts",
      icon: <Flag strokeWidth={1.5} />,
      title: ["Release often,", "land softly"],
      body: "Your team ships more code than ever. Staged rollouts, automatic rollback and health checks mean a bad deploy turns itself off before anyone notices.",
      cta: { label: "See how rollouts work", href: "#" },
    },
    {
      eyebrow: "Usage Insights",
      icon: <ChartSpline strokeWidth={1.5} />,
      title: ["Numbers that tell", "you what to build"],
      body: "Point Northvane at the tables you already keep and watch how people really use your product. Ask a plain question and get a chart back in seconds.",
      cta: { label: "See how insights work", href: "#" },
    },
  ],
};

export default function Demo() {
  return <GrowthbookFeatures {...featuresSample} />;
}
