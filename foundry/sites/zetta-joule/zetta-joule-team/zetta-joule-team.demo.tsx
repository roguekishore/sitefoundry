import { ZettaJouleTeam, type ZettaJouleTeamProps } from "./zetta-joule-team";

export const teamSample: ZettaJouleTeamProps = {
  label: "Meet the International Team\nBehind Our Technology",
  statement: "Hearthgrid brings together experts in reactor engineering, large-scale project delivery and finance to supply clean heat and power for demanding industrial sites.",
  prevLabel: "Previous person",
  nextLabel: "Next person",
  members: [
    { name: "Imara Oduya", role: "Co-Founder, President and CEO" },
    { name: "Tobias Wren", role: "Co-Founder, Chief Commercial Officer" },
    { name: "Lucía Marchetti", role: "Co-Founder, Strategic Advisor to the CEO" },
    { name: "Haruto Seki, Ph.D.", role: "Co-Founder, Chief Nuclear Officer" },
    { name: "Edmund Pryce, Ph.D.", role: "Chief Technology Officer" },
    { name: "Naledi Brandt", role: "Senior Vice President of Regulatory Strategy" },
  ],
  card: { title: "Learn more about the people behind Hearthgrid", linkLabel: "Meet the Full Team", href: "#" },
};

export default function Demo() {
  return <ZettaJouleTeam {...teamSample} />;
}
