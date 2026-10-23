import { VastspaceArrows } from "@foundry/vastspace-arrows";
import { VastspaceButton } from "@foundry/vastspace-button";
import { VastspaceSectionHeading } from "./vastspace-section-heading";

export default function Demo() {
  return (
    <div className="space-y-10 bg-card p-6 text-foreground">
      <VastspaceSectionHeading title="Latest news" action={<VastspaceButton label="All news" href="#" />} />
      <VastspaceSectionHeading title="From the press" action={<VastspaceArrows prevLabel="Previous" nextLabel="Next" />} />
    </div>
  );
}
