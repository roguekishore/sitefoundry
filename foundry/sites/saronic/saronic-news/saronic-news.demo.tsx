import type { SaronicNewsProps } from "./saronic-news";
import { SaronicNews } from "./saronic-news";

export const newsSample: SaronicNewsProps = {
  eyebrow: "Dispatch",
  title: "A Petrel skiff pulls two sailors from a capsized trawler off Cape Verde",
  body: "Our first night recovery: a crewless boat carried two survivors home.",
  cta: { label: "Read the log", href: "#" },
};

export const newsSampleTwo: SaronicNewsProps = {
  eyebrow: "Long-range autonomous hauler",
  title: "Gulf Guard orders the first squadron of Albatross haulers",
  body: "The 170-foot Albatross carries 140 tonnes of modular cargo, cruises past 24 knots and crosses up to 5,000 nautical miles between ports without a crew aboard.",
  cta: { label: "Read the log", href: "#" },
  mobileAspect: "16/9",
};

export default function Demo() {
  return <SaronicNews {...newsSample} />;
}
