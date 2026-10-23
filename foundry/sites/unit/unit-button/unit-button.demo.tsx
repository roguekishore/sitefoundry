import { UnitButton } from "./unit-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <UnitButton href="#">Book a walkthrough</UnitButton>
      <UnitButton href="#" variant="outline">
        Tour the platform
      </UnitButton>
      <UnitButton href="#" variant="outline" size="sm">
        Book a walkthrough
      </UnitButton>
      <div className="dark rounded-lg bg-background p-6">
        <UnitButton href="#">Book a walkthrough</UnitButton>
      </div>
    </div>
  );
}
