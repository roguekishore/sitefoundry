import { DaqCapabilities, type DaqCapabilitiesProps } from "./daq-capabilities";

export const capabilitiesSample: DaqCapabilitiesProps = {
  eyebrow: "02 / What we build",
  lead: "Designed for",
  payoff: "Load.",
  linkLabel: "Explore",
  items: [
    {
      title: "Pipelines",
      description: "Batch and streaming flows, a tidy lakehouse and figures people can quote in a board pack.",
      tags: ["Streaming", "Lakehouse", "Orchestration", "Data contracts", "Quality checks"],
      href: "#pipelines",
    },
    {
      title: "Applied AI",
      description: "Assistants and agents that respect who may see what, with tests, guardrails and a trail for every answer.",
      tags: ["Agents", "Retrieval", "Evaluation", "Guardrails"],
      href: "#applied-ai",
    },
    {
      title: "Reporting",
      description: "One shared set of measures under every dashboard, so the same question gets the same number.",
      tags: ["Metric layer", "Dashboards", "Self-serve", "Row security", "Exports"],
      href: "#reporting",
    },
    {
      title: "Replatforming",
      description: "Legacy jobs read, explained and rebuilt on a modern stack, with each object checked by an engineer.",
      tags: ["Legacy to cloud", "Report rebuilds", "Assisted rewrite", "Signed off"],
      href: "#replatforming",
    },
    {
      title: "Run & Support",
      description: "We watch, tune and patch what we built, so your team spends its week on the next thing.",
      tags: ["Monitoring", "Spend tuning", "On-call", "Policy"],
      href: "#run",
      tab: "Run & support",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqCapabilities {...capabilitiesSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
