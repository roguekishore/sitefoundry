// Sample content (gallery only).
import { StokespaceWork, type StokespaceWorkProps } from "./stokespace-work";

export const workSample: StokespaceWorkProps = {
  id: "join",
  eyebrow: "Join Orrery",
  eyebrowTone: "glow",
  title: "Come build it",
  cards: [
    { label: "Open roles", href: "#roles" },
    { label: "Our sites", href: "#sites" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StokespaceWork {...workSample} />
    </div>
  );
}
