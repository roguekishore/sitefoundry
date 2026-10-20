// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { GrowthbookV2Why, type GrowthbookV2WhyProps } from "./growthbook-v2-why";

export const whySample: GrowthbookV2WhyProps = {
  title: "Why product teams\nswitch to Fernlight",
  tabs: [
    {
      label: "Why Fernlight",
      arrow: true,
      cards: [
        { title: "Open code you can read line by line", tone: "teal" },
        { title: "Run it yourself for full control", tone: "navy" },
        { title: "Statistics you can tune and trust", tone: "violet" },
        { title: "Made for agent-written code", tone: "teal" },
        { title: "Your warehouse stays the source of truth", tone: "violet" },
        { title: "A command line for every task", tone: "teal" },
      ],
    },
    {
      prefix: "For",
      label: "Engineers",
      cards: [
        { title: "Flags evaluated locally, zero round trips", tone: "navy" },
        { title: "Typed SDKs for two dozen runtimes", tone: "violet" },
        { title: "Rollbacks without a redeploy", tone: "teal" },
        { title: "Review changes like code", tone: "navy" },
      ],
    },
    {
      prefix: "For",
      label: "Data Teams",
      cards: [
        { title: "SQL you can see and edit", tone: "violet" },
        { title: "Bayesian or frequentist, your call", tone: "navy" },
        { title: "Variance reduction built in", tone: "teal" },
        { title: "Metrics defined once", tone: "violet" },
      ],
    },
    {
      prefix: "For",
      label: "Product Leads",
      cards: [
        { title: "Launch without waiting on a sprint", tone: "teal" },
        { title: "Results in plain words", tone: "violet" },
        { title: "One place for every learning", tone: "navy" },
        { title: "Visual editor for quick tests", tone: "teal" },
      ],
    },
  ],
};

export default function Demo() {
  return <GrowthbookV2Why {...whySample} />;
}
