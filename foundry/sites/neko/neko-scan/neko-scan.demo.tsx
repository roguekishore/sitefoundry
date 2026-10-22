// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoScan, type NekoScanProps } from "./neko-scan";

export const scanSample: NekoScanProps = {
  eyebrow: "One visit, the whole picture",
  title: "Ardent Body Check",
  intro: "Our own sensors record thousands of readings across your skin, heart, blood and posture, all in a single appointment.",
  items: [
    { title: "Skin mapping", caption: "Every mark photographed and tracked" },
    { title: "Lab bloodwork", caption: "Results before you leave" },
    { title: "Heart and vessels", caption: "Rhythm, pressure and stiffness" },
    { title: "Specialist read", caption: "A clinician looks at anything unusual" },
    { title: "Body makeup", caption: "Muscle, fat and bone density" },
  ],
  card: {
    eyebrow: "Care, redesigned",
    title: "The full check in about an hour",
    points: [
      "A long sit-down with an Ardent doctor",
      "Bloods analysed on site while you wait",
      "Every result and next step in the app",
      "Hardware we design and build ourselves",
      "A free return visit if anything needs it",
    ],
  },
  cta: { label: "Ardent Body Check", href: "#check" },
};

export default function Demo() {
  return <NekoScan {...scanSample} />;
}
