import { BasepowercompanyMedia } from "./basepowercompany-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <BasepowercompanyMedia label="A battery against a garden wall" className="aspect-[1.02] rounded-2xl" />
      <div className="dark">
        <BasepowercompanyMedia tone="photo" label="A family on a porch at dusk" className="aspect-[1.02] rounded-[calc(var(--radius)*3)]" />
      </div>
    </div>
  );
}
