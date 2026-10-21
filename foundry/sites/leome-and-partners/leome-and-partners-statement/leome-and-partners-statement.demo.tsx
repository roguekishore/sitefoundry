import { LeomeAndPartnersStatement, type LeomeAndPartnersStatementProps } from "./leome-and-partners-statement";

export const statementSample: LeomeAndPartnersStatementProps = {
  text: "Good counsel should leave you clearer than it found you. We pair long experience with plain language – advising founders, boards and families who want straight answers and a team that stays close.",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <LeomeAndPartnersStatement {...statementSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
