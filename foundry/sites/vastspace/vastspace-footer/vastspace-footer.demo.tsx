import { AtSign, Briefcase, Camera, Video } from "lucide-react";
import { VastspaceWordmark } from "@foundry/vastspace-wordmark";
import { VastspaceFooter, type VastspaceFooterProps } from "./vastspace-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: VastspaceFooterProps = {
  signup: {
    title: "Sign up for updates",
    emailLabel: "Enter your email",
    button: "Sign up",
    note: { before: "By subscribing you agree to our", linkLabel: "Privacy Policy", linkHref: "#", after: "and provide consent to receive updates from Corvane." },
  },
  contactTitle: "Contact",
  address: ["114 Harbour Road", "Port Alder, CA 90201", "USA"],
  phone: "+1 (555) 014-0200",
  email: "hello@corvane.example",
  columns: [
    { title: "Products", links: ["Lumen Demo", "Lumen-1", "Lumen-2", "Docking Adapter", "Satellites", "Lumen-1 Lab"].map(l) },
    { title: "About Corvane", links: ["Team", "Careers", "Roadmap", "Shop", "Updates", "Contact", "Media Assets", "Suppliers"].map(l) },
  ],
  brand: <VastspaceWordmark name="Corvane" className="text-[length:inherit]" />,
  legal: ["Privacy Policy", "Terms of Use", "Media Assets Terms of Use"].map(l),
  socials: [
    { label: "Careers feed", href: "#", icon: <Briefcase /> },
    { label: "Short posts", href: "#", icon: <AtSign /> },
    { label: "Snapshots", href: "#", icon: <Camera /> },
    { label: "Videos", href: "#", icon: <Video /> },
  ],
  copyright: "© 2028 Corvane, Inc. All rights reserved.",
};

export default function Demo() {
  return <VastspaceFooter {...footerSample} />;
}
