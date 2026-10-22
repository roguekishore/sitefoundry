import { AtSign, Camera, Hexagon, Orbit, Smartphone, Sparkle, Sparkles, Users, Wand2, Waypoints } from "lucide-react";
import { KestrelMark } from "../superpower-header/superpower-header.demo";
import { SuperpowerFooter, type SuperpowerFooterProps } from "./superpower-footer";

const l = (label: string) => ({ label, href: `#${label.toLowerCase().replace(/[^a-z]+/g, "-")}` });

export const footerSample: SuperpowerFooterProps = {
  logo: <KestrelMark className="text-[1.75rem]" />,
  blurbLead: "Not sure where to begin?",
  blurb: "Get the Kestrel Primer by email: a free, plain-language guide to your body's systems and the numbers that describe them.",
  emailPlaceholder: "Your email",
  signUpLabel: "Subscribe",
  app: { qrLabel: "QR code to the Kestrel app", icon: <Smartphone aria-hidden />, label: "Get the app", href: "#app" },
  tilesLabel: "Ask an assistant about Kestrel",
  tiles: [
    { icon: <Sparkle aria-hidden />, label: "Assistant one", href: "#ask" },
    { icon: <Sparkles aria-hidden />, label: "Assistant two", href: "#ask" },
    { icon: <Orbit aria-hidden />, label: "Assistant three", href: "#ask" },
    { icon: <Wand2 aria-hidden />, label: "Assistant four", href: "#ask" },
    { icon: <Waypoints aria-hidden />, label: "Assistant five", href: "#ask" },
  ],
  groups: [
    { title: "Kestrel", links: ["The year, step by step", "The panel", "Member sign-in", "Give Kestrel", "Stories"].map(l) },
    { title: "Company", links: ["Why we exist", "Kestrel Lab", "Contact", "Jobs", "Journal", "Questions"].map(l) },
    { title: "Compare", newColumn: true, links: ["Kestrel vs check-ups", "Kestrel vs test kits", "Kestrel vs clinics"].map(l) },
    { title: "Work with us", links: ["For creators", "For partners", "For teams"].map(l) },
    {
      title: "Follow",
      links: [
        { label: "Threads", href: "#threads", icon: <AtSign aria-hidden /> },
        { label: "Photos", href: "#photos", icon: <Camera aria-hidden /> },
        { label: "Network", href: "#network", icon: <Users aria-hidden /> },
      ],
    },
    {
      title: "Reading list",
      newColumn: true,
      links: ["What your thyroid numbers mean", "Iron, explained", "The liver panel", "Reading your lipids", "Hormones after forty", "Energy and sleep markers", "Inflammation, simply", "A guide to blood testing"].map(l),
    },
  ],
  copyright: "2026 Kestrel Health, Inc. All rights reserved",
  legal: ["Terms", "Privacy", "Membership terms", "Cookie settings"].map(l),
  certification: { label: "Certified pharmacy partner", icon: <Hexagon aria-hidden /> },
};

export default function Demo() {
  return (
    <div className="bg-muted p-0 lg:p-6">
      <SuperpowerFooter {...footerSample} />
    </div>
  );
}
