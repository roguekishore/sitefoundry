import { ThirdwayTeams, type ThirdwayTeamsProps } from "./thirdway-teams";

export const teamsSample: ThirdwayTeamsProps = {
  heading: "Six teams.\nOne standard.",
  text: "Every project starts with the right people. Hollin is six small teams, each shaped around a different kind of client and led by a specialist, so whoever you hire gets a team that already knows their world.",
  link: { label: "Meet the teams", href: "#" },
  count: "06",
  countLabel: "Teams",
  byLabel: "by",
  prevLabel: "Previous team",
  nextLabel: "Next team",
  teams: [
    { name: "Studio", lead: "Maren Oakley", href: "#", description: "Studio designs lively, culture-led workplaces for the people who own and occupy them. Maren leads with a people-first view of design." },
    { name: "Tailored", lead: "Idris Vale", href: "#", description: "Tailored delivers precise, high-end interiors for professional firms, with a single point of contact from brief to handover." },
    { name: "Curate", lead: "Corin Bayles", href: "#", description: "Curate shapes landlord and speculative space that photographs well and lets quickly, from lobby to lift lobby." },
    { name: "Boutique", lead: "Wren Aldous", href: "#", description: "Boutique takes on smaller, characterful fit-outs where every joint, handle and fabric gets a decision." },
    { name: "Atelier", lead: "Tomas Ferrer", href: "#", description: "Atelier works with hospitality-minded clients who want workplaces that feel like places you would choose to be." },
    { name: "Core", lead: "Ilse Carrow", href: "#", description: "Core handles large, fast, repeatable programmes with the same standard as a single flagship floor." },
  ],
};

export default function Demo() {
  return <ThirdwayTeams {...teamsSample} />;
}
