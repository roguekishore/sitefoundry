import { UnitArrowCircle } from "./unit-arrow-circle";

export default function Demo() {
  return (
    <div className="flex items-center gap-4 bg-background p-8">
      <UnitArrowCircle href="#" label="Open" />
      <UnitArrowCircle direction="left" size="md" label="Previous" disabled />
      <UnitArrowCircle direction="right" size="md" href="#" label="Next" />
    </div>
  );
}
