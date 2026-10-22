import { ModerntreasuryHeading } from "./moderntreasury-heading";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-section">
      <ModerntreasuryHeading
        title={["From First Customer", "to Final Settlement"]}
        lead="Run the whole life of a payment on one platform, without wiring together banks, risk vendors and ledgers yourself."
      />
    </div>
  );
}
