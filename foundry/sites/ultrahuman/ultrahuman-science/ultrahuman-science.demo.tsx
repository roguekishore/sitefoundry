// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanScience, type UltrahumanScienceProps } from "./ultrahuman-science";

export const scienceSample: UltrahumanScienceProps = {
  title: "Every number, backed by research.",
  body: "How Kinrise measures, in plain words.",
  action: { label: "See the research", href: "#" },
  photoLabels: [
    "Two bands resting on sand",
    "A runner mid-stride against the sky",
    "A climber's hand on a rock face",
    "Someone asleep, band on the hand",
    "Cells under a microscope",
    "A swimmer diving into a pool",
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[60vh]" />
      <UltrahumanScience {...scienceSample} />
      <div className="h-[40vh]" />
    </div>
  );
}
