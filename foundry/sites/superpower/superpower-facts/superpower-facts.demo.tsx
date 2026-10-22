import { BadgeCheck, CalendarDays, CircleDollarSign } from "lucide-react";
import { SuperpowerFacts } from "./superpower-facts";

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <SuperpowerFacts
        items={[
          { icon: <CalendarDays aria-hidden />, label: "Results in about a week" },
          { icon: <CircleDollarSign aria-hidden />, label: "Under 50¢ a day" },
          { icon: <BadgeCheck aria-hidden />, label: "Health-account eligible" },
        ]}
      />
    </div>
  );
}
