import { RampHeading } from "./ramp-heading";

export default function Demo() {
  return (
    <div className="space-y-10 bg-background p-8">
      <RampHeading as="h1" size="display" lead="Spend less time spending." />
      <RampHeading lead="Every ledger in one place." rest="Agents that close the books while you sleep." breakBeforeRest />
      <RampHeading size="row" lead="Trusted by 60,000 teams" rest="that grow faster than the rest of their field." />
      <RampHeading size="card" lead="Cards" rest="that file their own receipts" align="center" />
    </div>
  );
}
