// Sample content (gallery only).
import { FormenergyHeading } from "./formenergy-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-secondary p-8 text-foreground">
      <FormenergyHeading title="The salt cell" />
      <FormenergyHeading title="Building the grid's longest battery in an old rail works" ruleAboveOnPhone className="max-w-[30rem]" />
    </div>
  );
}
