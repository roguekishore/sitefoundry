import { LedupAbout, type LedupAboutProps } from "./ledup-about";

export const aboutSample: LedupAboutProps = {
  label: "About us",
  title: "Made with care, built to last",
  text: "For more than a decade we have lit homes, shops and streets across the country, pairing sturdy engineering with plain-spoken advice and fittings shaped around what our partners really need.",
  cta: { label: "Read more", href: "#about" },
  switchesLabel: "Switches",
  zones: [{ label: "Zone 1" }, { label: "Zone 2" }, { label: "Zone 3" }, { label: "Zone 4" }, { label: "Zone 5" }],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <LedupAbout {...aboutSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
