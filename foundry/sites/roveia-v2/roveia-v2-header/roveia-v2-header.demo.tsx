// Sample content lives here (gallery only); the page reuses it. Halden Growth is made up.
import { RoveiaV2Header, type RoveiaV2HeaderProps } from "./roveia-v2-header";

export const headerSample: RoveiaV2HeaderProps = {
  brand: "Halden Growth",
  links: [
    {
      label: "Sectors",
      children: [
        { label: "Virtual care", href: "#" },
        { label: "Wellness goods", href: "#" },
        { label: "Health software", href: "#" },
      ],
    },
    { label: "Results", href: "#" },
    {
      label: "Library",
      children: [
        { label: "Field notes", href: "#" },
        { label: "Playbooks", href: "#" },
      ],
    },
    { label: "Studio", href: "#" },
    {
      label: "Alliances",
      children: [{ label: "Compliance partners", href: "#" }],
    },
  ],
  cta: { label: "Book a call", href: "#" },
};

export default function Demo() {
  return (
    <div className="min-h-[40rem] bg-[linear-gradient(to_bottom,var(--background),color-mix(in_oklab,var(--glow)_28%,var(--background)))]">
      <RoveiaV2Header {...headerSample} />
    </div>
  );
}
