import { PaxosRegulation, type PaxosRegulationProps } from "./paxos-regulation";

export const regulationSample: PaxosRegulationProps = {
  eyebrow: "Oversight",
  title: "Built inside the rules, not around them",
  lead: "Keelstone holds itself to the licensing, audit and disclosure standards of a bank, in every market it serves.",
  milestones: [
    {
      year: "2016",
      title: "Chartered as a custodian",
      body: "Keelstone became one of the first firms licensed to hold digital assets for clients under a state trust charter, with every ledger, vault and process open to examiners from day one.",
    },
    {
      year: "2021",
      title: "Licensed for payments across the Pacific",
      body: "A full payments licence followed in a second financial centre, making Keelstone the first ledger network from abroad to clear transfers there for local banks and their customers.",
    },
    {
      year: "2024",
      title: "Supervised at the national level",
      body: "Our trust arm moved under national supervision, so reserve checks, custody rules and token issuance now answer to a single federal examiner.",
    },
  ],
};

export default function Demo() {
  return <PaxosRegulation {...regulationSample} />;
}
