import { SaronicButton } from "@foundry/saronic-button";
import { SaronicSectionHeading } from "./saronic-section-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-0">
      <div className="bg-background px-gutter py-section">
        <SaronicSectionHeading
          className="mx-auto max-w-page"
          eyebrow="The hulls"
          title="Three hulls, one doctrine"
          lead="Each of our crewless boats shares the same autopilot, the same sensors and the same yard, from the harbour skiff to the ocean-going hauler."
          action={<SaronicButton href="#">See every hull</SaronicButton>}
        />
      </div>
      <div className="dark bg-background px-gutter py-section text-foreground">
        <SaronicSectionHeading
          className="mx-auto max-w-page"
          eyebrow="Helmline"
          title="Every boat. One chart table."
          lead="Helmline plans the route, rehearses it in simulation and sails it, for a single hull or a whole squadron."
          action={<SaronicButton href="#">Tour the software</SaronicButton>}
        />
      </div>
    </div>
  );
}
