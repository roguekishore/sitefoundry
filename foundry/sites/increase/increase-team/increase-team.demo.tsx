// Sample content lives here (gallery only); the page reuses it. All people and companies are made up.
import { Hexagon } from "lucide-react";
import { IncreaseTeam, type IncreaseTeamProps } from "./increase-team";

export const teamSample: IncreaseTeamProps = {
  lead: "Our people built card networks, clearing houses and central-bank systems.",
  rest: "The engineers in your shared channel are the ones who run the ledger, next to the compliance team that talks to examiners.",
  quote: {
    quote:
      "They knew the plumbing better than we did: return codes, cut-off times, the odd Friday batch. We shipped a quarter early and never once felt we'd cut a corner.",
    name: "Odile Marchetti",
    role: "Head of Payments at Talon",
    mark: <span className="grid size-full place-items-center bg-primary text-primary-foreground"><Hexagon strokeWidth={2.5} /></span>,
  },
  link: { label: "How we support customers", href: "#support" },
};

export default function Demo() {
  return <IncreaseTeam {...teamSample} />;
}
