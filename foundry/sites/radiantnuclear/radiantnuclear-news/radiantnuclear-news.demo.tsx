// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearNews, type RadiantnuclearNewsProps } from "./radiantnuclear-news";

export const newsSample: RadiantnuclearNewsProps = {
  title: "Recent updates",
  cta: { label: "All updates", href: "#updates" },
  items: [
    {
      date: "March 3, 2026",
      title: "Coast Guard Picks Corvane for an Arctic Station Pilot",
      summary: "Two Tessera cells will heat and power a remote research outpost through the polar night.",
      href: "#arctic-pilot",
    },
    {
      date: "February 9, 2026",
      title: "The First Tessera Rolls Off the Line",
      summary: "The crated unit leaves our Ridgeline plant for its test pad.",
      href: "#first-unit",
    },
    {
      date: "January 21, 2026",
      title: "Corvane Signs a Ten-Year Fuel Agreement",
      summary: "A long-term deal with Halden Isotopes secures fuel for the first forty commercial units and keeps the supply chain close to home.",
      href: "#fuel-deal",
    },
    {
      date: "December 4, 2025",
      title: "National Lab Opens Its Test Bays to Corvane",
      summary: "Shared bays at a federal research campus clear the way for full-power trials next spring.",
      href: "#test-bays",
    },
    {
      date: "October 30, 2025",
      title: "Corvane Breaks Ground on Its Second Factory in the Midwest",
      summary: "Regulators open an early review of the plant's licence to build fission cells at scale.",
      href: "#second-factory",
    },
  ],
};

export default function Demo() {
  return <RadiantnuclearNews {...newsSample} />;
}
