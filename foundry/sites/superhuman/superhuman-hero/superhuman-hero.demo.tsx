import { FileText, Mail, Navigation } from "lucide-react";
import { SuperhumanHero, type SuperhumanHeroProps } from "./superhuman-hero";

export const heroSample: SuperhumanHeroProps = {
  listLabel: "One toolkit for a calmer workday",
  initialIndex: 2,
  items: [
    {
      name: "Post",
      icon: <Mail />,
      tagline: "The email app that clears itself out",
      lead: "Reach inbox zero before your coffee cools with",
      title: "Wayfinder Post",
      primary: { label: "Try Post", href: "#" },
      secondary: { label: "Learn more", href: "#" },
    },
    {
      name: "Pilot",
      icon: <Navigation />,
      tagline: "The assistant that rides along in every tab",
      lead: "Let an assistant handle the busywork with",
      title: "Wayfinder Pilot",
      primary: { label: "Try Pilot", href: "#" },
      secondary: { label: "Learn more", href: "#" },
    },
    {
      name: "Pages",
      icon: <FileText />,
      tagline: "Shared documents that keep their own facts straight",
      lead: "Bring the whole team onto one page with",
      title: "Wayfinder Pages",
      primary: { label: "Try Pages", href: "#" },
      secondary: { label: "Learn more", href: "#" },
    },
  ],
};

export default function Demo() {
  return <SuperhumanHero {...heroSample} />;
}
