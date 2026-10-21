import { WildAgTeam, type WildAgTeamProps } from "./wild-ag-team";

export const teamSample: WildAgTeamProps = {
  id: "team",
  title: "Team.",
  prevLabel: "Previous person",
  nextLabel: "Next person",
  members: [
    { first: "Matteo", last: "Arnold", role: "Founder & chair" },
    { first: "Leonie", last: "Baumann", role: "Project coordinator" },
    { first: "Jonas", last: "Keller", role: "Head of sales" },
    { first: "Selin", last: "Durmaz", role: "Legal counsel" },
  ],
};

export default function Demo() {
  return <WildAgTeam {...teamSample} />;
}
