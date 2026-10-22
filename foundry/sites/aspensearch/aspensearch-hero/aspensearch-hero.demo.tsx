import { AspensearchHero, type AspensearchHeroProps } from "./aspensearch-hero";

export const heroSample: AspensearchHeroProps = {
  wordTop: "Corvo",
  wordBottom: "Talent",
  headline: ["Finding", "Outliers."],
  intro: "Matching systematic researchers, low-latency engineers and ML scientists with the desks and labs setting the pace since 2009.",
  action: { label: "Book an intro call", href: "#contact" },
  pitch: "We don't run numbers games. We place people whose careers keep compounding, with the teams wise enough to back them.",
  hiresLabel: "Lately placed at:",
  hires: ["Northfold", "Quillon", "Arbor Labs", "Helix Rail", "Tessel AI", "Brightwater", "Kinetic Ledger"],
};

export default function Demo() {
  return <AspensearchHero {...heroSample} />;
}
