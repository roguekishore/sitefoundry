import { BasepowercompanyTape } from "./basepowercompany-tape";

export default function Demo() {
  return (
    <div className="flex gap-10 bg-background p-10">
      <BasepowercompanyTape>Here's the idea</BasepowercompanyTape>
      <BasepowercompanyTape tilt={1}>Still wondering?</BasepowercompanyTape>
    </div>
  );
}
