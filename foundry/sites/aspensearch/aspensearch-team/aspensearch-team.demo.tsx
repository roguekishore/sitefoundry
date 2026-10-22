import { AspensearchTeam, type AspensearchTeamProps } from "./aspensearch-team";

export const teamSample: AspensearchTeamProps = {
  id: "team",
  word: "People",
  subheading: "Few partners.\nNo noise.",
  label: "Who you'll really talk to",
  text: "Corvo is run by partners who do the searching themselves. No junior sourcers mass-messaging, no automated outreach, no shotgun shortlists. Whoever picks up at Corvo is the person who runs your search from first call to signed offer.",
  prevLabel: "Previous partners",
  nextLabel: "Next partners",
  members: [
    { name: "Mara Ellison", role: "Founder & principal" },
    { name: "Dana Whitlock", role: "Search partner" },
    { name: "Theo Brandt", role: "Search partner" },
    { name: "Priya Raman", role: "Search partner" },
    { name: "Jonah Weiss", role: "Search partner" },
    { name: "Celia Moreau", role: "Search partner" },
    { name: "Dev Okafor", role: "Search partner" },
  ],
};

export default function Demo() {
  return <AspensearchTeam {...teamSample} />;
}
