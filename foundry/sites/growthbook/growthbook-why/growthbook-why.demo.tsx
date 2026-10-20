// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { GrowthbookWhy, type GrowthbookWhyProps } from "./growthbook-why";

export const whySample: GrowthbookWhyProps = {
  title: ["Why careful teams", "settle on Northvane"],
  carouselLabel: "Reasons to choose Northvane",
  tabs: [
    {
      label: "Why Northvane",
      cards: [
        { title: "Run it on your own servers if you like", tone: "navy" },
        { title: "Statistics you can read and trust", tone: "violet" },
        { title: "Ready for AI-written code", tone: "teal" },
        { title: "Open code, open roadmap", tone: "violet" },
        { title: "Your data never leaves home", tone: "navy" },
      ],
    },
    {
      label: "Developers",
      prefix: "For",
      cards: [
        { title: "SDKs that weigh almost nothing", tone: "navy" },
        { title: "Flags evaluated locally, no round trips", tone: "teal" },
        { title: "A real API and a CLI", tone: "violet" },
      ],
    },
    {
      label: "Analysts",
      prefix: "For",
      cards: [
        { title: "SQL you can see and edit", tone: "violet" },
        { title: "Sequential and Bayesian engines", tone: "navy" },
        { title: "Variance reduction built in", tone: "teal" },
      ],
    },
    {
      label: "Product Leads",
      prefix: "For",
      cards: [
        { title: "Results in plain words", tone: "teal" },
        { title: "One place for every launch", tone: "violet" },
        { title: "Guardrails that watch for you", tone: "navy" },
      ],
    },
  ],
};

export default function Demo() {
  return <GrowthbookWhy {...whySample} />;
}
