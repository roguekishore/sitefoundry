import { PaxosPlaceholder } from "./paxos-placeholder";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-background p-8 sm:grid-cols-4">
      <PaxosPlaceholder className="aspect-square rounded-lg" label="Product render" />
      <PaxosPlaceholder tone="wash" className="aspect-square rounded-lg" />
      <PaxosPlaceholder tone="field" className="aspect-square rounded-lg" />
      <PaxosPlaceholder tone="film" className="aspect-square rounded-lg" />
    </div>
  );
}
