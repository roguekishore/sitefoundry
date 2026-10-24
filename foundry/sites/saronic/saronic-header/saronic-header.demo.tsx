import { Navigation2 } from "lucide-react";
import type { SaronicHeaderProps } from "./saronic-header";
import { SaronicHeader } from "./saronic-header";

export const headerSample: SaronicHeaderProps = {
  brand: "Ternway",
  mark: <Navigation2 aria-hidden strokeWidth={0} fill="currentColor" className="rotate-45" />,
  links: [{ label: "Join us", href: "#" }],
  menuLabel: "Menu",
  closeLabel: "Close",
  menu: [
    { title: "Hulls", description: "Specs for every boat we build", href: "#" },
    { title: "Helmline", description: "The software that sails them", href: "#" },
    { title: "Dispatches", description: "News from the yard and the water", href: "#" },
    { title: "Purpose", description: "Why we build crewless boats", href: "#" },
    { title: "Crew", description: "The people ashore", href: "#" },
    { title: "Reach us", description: "Programmes, partners and press", href: "#" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[28rem] bg-background">
      <SaronicHeader {...headerSample} />
    </div>
  );
}
