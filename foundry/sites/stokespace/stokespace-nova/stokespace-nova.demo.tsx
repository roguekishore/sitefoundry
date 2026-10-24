// Sample content (gallery only).
import { StokespaceNova, type StokespaceNovaProps } from "./stokespace-nova";

export const novaSample: StokespaceNovaProps = {
  id: "vireo",
  eyebrow: "Vireo",
  eyebrowTone: "highlight",
  title: "A launch cadence measured in days",
  paragraphs: [
    "Orrery is building Vireo so that reaching orbit works like booking freight. Both stages return and refly within days, which cuts the price per kilogram, shortens the wait between missions and lets operators send hardware up, move it between orbits and bring finished goods back down.",
    "Regular access changes what is worth building up there. Teams that can count on a seat every week can plan constellations in stages, test in orbit and iterate, and recover experiments instead of writing them off. Vireo is built for that rhythm.",
  ],
  link: { label: "Book a payload", href: "#book" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StokespaceNova {...novaSample} />
    </div>
  );
}
