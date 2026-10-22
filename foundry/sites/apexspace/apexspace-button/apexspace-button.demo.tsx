// Sample content lives here (gallery only).
import { ApexspaceButton } from "./apexspace-button";

export default function Demo() {
  return (
    <div className="flex max-w-md flex-col items-start gap-6 bg-background p-8">
      <ApexspaceButton label="Build yours" href="#" />
      <ApexspaceButton label="Build yours" href="#" variant="dark" />
      <ApexspaceButton label="See the bus" href="#" variant="tone" tone={1} />
      <ApexspaceButton label="See the bus" href="#" variant="tone" tone={2} />
      <ApexspaceButton label="See the bus" href="#" variant="tone" tone={3} />
      <ApexspaceButton label="Compare all buses" href="#" variant="line" />
    </div>
  );
}
