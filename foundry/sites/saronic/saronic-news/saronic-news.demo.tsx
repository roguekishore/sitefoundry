import type { SaronicNewsProps } from "./saronic-news";
import { SaronicNews } from "./saronic-news";

export const newsSample: SaronicNewsProps = {
  eyebrow: "Dispatch",
  title: "A Petrel skiff pulls two sailors from a capsized trawler off Cape Verde",
  body: "The night recovery is the first time one of our crewless boats has carried survivors home.",
  cta: { label: "Read the log", href: "#" },
};

export const newsSampleTwo: SaronicNewsProps = {
  eyebrow: "Long-range autonomous hauler",
  title: "Gulf Guard orders the first squadron of Albatross haulers",
  body: "The 170-foot Albatross carries 140 tonnes of modular cargo, cruises past 24 knots and crosses up to 5,000 nautical miles between ports without a crew aboard.",
  cta: { label: "Read the log", href: "#" },
};

export default function Demo() {
  return <SaronicNews {...newsSample} />;
}
