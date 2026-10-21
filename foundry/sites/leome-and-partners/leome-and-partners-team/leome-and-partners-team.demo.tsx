import { LeomeAndPartnersTeam, type LeomeAndPartnersTeamProps } from "./leome-and-partners-team";

export const teamSample: LeomeAndPartnersTeamProps = {
  title: ["Partners who answer the phone.", "Close at every step."],
  link: { label: "Meet the team", href: "#people" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[30svh]" />
      <LeomeAndPartnersTeam {...teamSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
