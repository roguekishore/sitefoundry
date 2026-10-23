import { Coffee } from "lucide-react";
import { SuperhumanCard } from "./superhuman-card";

export default function Demo() {
  return (
    <div className="bg-background p-6">
      <SuperhumanCard
        icon={<Coffee />}
        tint="periwinkle"
        title="Start every day"
        titleRest="with a Daily Brief"
        description="Pilot gathers your deadlines and meetings into one view so nothing slips."
        className="max-w-sm"
      />
    </div>
  );
}
