import { AtSign, Camera, Globe, PlaySquare } from "lucide-react";
import type { ParsleyhealthFooterProps } from "./parsleyhealth-footer";
import { ParsleyhealthFooter } from "./parsleyhealth-footer";

const link = (label: string) => ({ label, href: "#" });

export const footerSample: ParsleyhealthFooterProps = {
  brand: "Halden Health",
  handle: "@haldenhealth",
  follow: link("Follow along"),
  columns: [
    [
      { title: "Full Circle", links: ["Full Circle", "Cost & Coverage", "How It Works", "Our Physicians", "Nutrition Coaching"].map(link) },
      { title: "Lab Readout", links: ["Lab Readout", "How It Works", "What We Measure", "Why Our Physicians"].map(link) },
    ],
    [{ title: "About Halden", links: ["Our Story", "Services", "Symptom Score", "Medical Director", "Stories"].map(link) }],
    [
      { title: "Resources", links: ["Shop", "Journal", "Newsroom", "Jobs", "Partners", "Help Center", "Contact"].map(link) },
      { title: "Clinics", links: ["Brooklyn", "Online"].map(link) },
    ],
  ],
  actions: [link("Join Halden"), link("Talk to a guide")],
  actionsColumn: 1,
  newsletter: { title: "Get our weekly letter", placeholder: "Your email", button: "Join", inputLabel: "Email address" },
  shareTitle: "Share Halden",
  social: [
    { label: "Website", href: "#", icon: <Globe /> },
    { label: "Photos", href: "#", icon: <Camera /> },
    { label: "Mentions", href: "#", icon: <AtSign /> },
    { label: "Videos", href: "#", icon: <PlaySquare /> },
  ],
  badge: "Privacy compliant",
  legal: "© Halden Health, all rights reserved. 40 Orchard St, Floor 3, Brooklyn, NY 11201",
  legalLinks: ["Membership Terms", "Conditions", "Site Terms", "Privacy", "Patient Privacy Notice", "Accessibility"].map(link),
};

export default function Demo() {
  return <ParsleyhealthFooter {...footerSample} />;
}
