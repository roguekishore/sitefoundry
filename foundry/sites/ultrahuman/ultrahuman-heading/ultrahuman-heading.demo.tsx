import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanHeading } from "./ultrahuman-heading";

export default function Demo() {
  return (
    <div className="bg-background py-24">
      <UltrahumanHeading
        title="Every number, backed by research."
        body="How Kinrise measures, in plain words."
        actions={
          <UltrahumanButton href="#" variant="ink">
            See the research
          </UltrahumanButton>
        }
      />
    </div>
  );
}
