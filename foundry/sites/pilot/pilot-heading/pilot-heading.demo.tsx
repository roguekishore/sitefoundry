import { PilotHeading } from "./pilot-heading";

export default function Demo() {
  return (
    <div className="grid gap-16 bg-background px-6 py-16 text-foreground">
      <PilotHeading
        title={"Real advice from finance leads\nwho have sat in your chair."}
        lede="Our advisors ran the numbers at fast-growing companies before they ran yours, so the questions you ask on Monday get answers by Tuesday."
      />
      <div className="bg-secondary p-8 text-secondary-foreground">
        <PilotHeading align="left" eyebrow="Stories from the ledger" title={"How we untangle the knots\nthat cost you sleep."} />
      </div>
    </div>
  );
}
