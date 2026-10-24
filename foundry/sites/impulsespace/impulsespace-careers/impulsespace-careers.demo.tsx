// Sample content lives here (gallery only); the page reuses it. Halyard is made up.
import { ImpulsespaceCareers, type ImpulsespaceCareersProps } from "./impulsespace-careers";

export const careersSample: ImpulsespaceCareersProps = {
  title: "Jobs",
  id: "jobs",
  cta: { label: "All openings", href: "#openings" },
  cards: [
    { title: "Build the tugs", label: "Engineering · 23 roles", href: "#engineering", mediaLabel: "Engineers at a vehicle in the clean room" },
    { title: "Fly the runs", label: "Operations · 9 roles", href: "#operations", mediaLabel: "The mission control floor during a burn" },
  ],
};

export default function Demo() {
  return <ImpulsespaceCareers {...careersSample} />;
}
