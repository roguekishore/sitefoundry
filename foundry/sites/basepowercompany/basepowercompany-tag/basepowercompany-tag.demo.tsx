import { BasepowercompanyTag } from "./basepowercompany-tag";

export default function Demo() {
  return (
    <div className="flex gap-4 bg-background p-8">
      <BasepowercompanyTag>Switching takes a week</BasepowercompanyTag>
      <span className="dark bg-background p-4">
        <BasepowercompanyTag tone="inverse">Rates</BasepowercompanyTag>
      </span>
    </div>
  );
}
