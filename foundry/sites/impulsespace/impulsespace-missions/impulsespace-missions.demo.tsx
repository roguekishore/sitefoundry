// Sample content lives here (gallery only); the page reuses it. Every mission is made up.
import { ImpulsespaceMissions, type ImpulsespaceMissionsProps } from "./impulsespace-missions";

export const missionsSample: ImpulsespaceMissionsProps = {
  title: "Flown so far",
  id: "flown",
  lede: "Every run so far, from the first test hop to the latest delivery. Each one has its own log.",
  cta: { label: "Read the logs", href: "#logs" },
  mediaLabel: "A tug's engine burn seen from a following camera",
  missions: [
    { name: "Lumen 4 · Courier", detail: "2026 · LEO", href: "#lumen-4" },
    { name: "Corvus 1 · Long Haul", detail: "2026 · GEO", href: "#corvus-1" },
    { name: "Lumen 3 · Doorstep", detail: "2025 · LEO", href: "#lumen-3" },
    { name: "Shuttle Share 2", detail: "2025 · SSO", href: "#share-2" },
    { name: "Lumen 2 · Second Light", detail: "2024 · LEO", href: "#lumen-2" },
    { name: "Shuttle Share 1", detail: "2024 · SSO", href: "#share-1" },
    { name: "Lumen 1 · First Light", detail: "2023 · LEO", href: "#lumen-1" },
  ],
};

export default function Demo() {
  return <ImpulsespaceMissions {...missionsSample} />;
}
