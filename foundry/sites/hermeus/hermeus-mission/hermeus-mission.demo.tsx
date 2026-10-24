// Sample content lives here (gallery only); the page reuses it. Aldervane is made up.
import type { HermeusMissionProps } from "./hermeus-mission";
import { HermeusMission } from "./hermeus-mission";

export const missionSample: HermeusMissionProps = {
  index: "01",
  label: "About",
  title: "Purpose",
  body: "Bringing back the habit of building, flying and rebuilding in quick turns, so that fast, capable aircraft reach the crews who need them in a few years rather than a few decades, and keep getting better after they do.",
};

export default function Demo() {
  return (
    <div className="bg-background pt-[60svh]">
      <HermeusMission {...missionSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
