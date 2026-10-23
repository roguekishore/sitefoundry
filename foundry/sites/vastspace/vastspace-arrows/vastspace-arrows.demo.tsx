import { VastspaceArrows } from "./vastspace-arrows";

export default function Demo() {
  return (
    <div className="flex gap-8 bg-card p-6">
      <VastspaceArrows prevLabel="Previous" nextLabel="Next" />
      <VastspaceArrows prevLabel="Previous" nextLabel="Next" prevDisabled />
    </div>
  );
}
