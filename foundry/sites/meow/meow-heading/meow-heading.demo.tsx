import { MeowHeading } from "./meow-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-8">
      <MeowHeading title="Everything a company account should do." />
      <MeowHeading
        title="A checking account that pulls its weight"
        fineprint="Tallyhold is a software company, not a bank. Accounts are held with our partner banks; deposit cover applies only if a partner bank fails."
      />
    </div>
  );
}
