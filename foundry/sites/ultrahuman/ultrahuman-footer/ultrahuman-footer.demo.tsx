// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { Apple, AtSign, Camera, CirclePlay, Globe, MapPin, Play, Rss } from "lucide-react";
import { UltrahumanFooter, type UltrahumanFooterProps } from "./ultrahuman-footer";

const l = (label: string, badge?: string) => ({ label, href: "#", badge });

export const footerSample: UltrahumanFooterProps = {
  brand: "Kinrise",
  columns: [
    [
      { title: "Bands", links: [l("Kinrise Halo Max", "New"), l("Kinrise Halo Lite"), l("Halo Studio Edition"), l("Halo in ceramic"), l("Find your size")] },
      { title: "Health tracking", links: [l("Glucose patch"), l("Kinrise Hub"), l("Lab panels"), l("Coaching clinic"), l("Cycle tracking"), l("Light therapy lamp"), l("Kinrise Lens")] },
    ],
    [
      { title: "Plans & add-ons", links: [l("Boost packs"), l("Kinrise Care"), l("Student & forces pricing"), l("Partner offers"), l("Chargers & cases")] },
      { title: "Learn", links: [l("Research"), l("Explainers"), l("Kinrise Journal"), l("Open sleep dataset"), l("Cadence study"), l("Why Kinrise"), l("How it works")] },
    ],
    [
      { title: "Company", links: [l("About us"), l("Press"), l("Partners"), l("Careers"), l("Annual report")] },
      { title: "Programmes", links: [l("Kinrise for teams"), l("Creators")] },
    ],
    [
      { title: "Developers", links: [l("Pulse API"), l("API terms")] },
      { title: "Legal", links: [l("Band terms of sale"), l("Patch terms of sale"), l("Privacy policy"), l("Terms of use")] },
    ],
  ],
  contact: { title: "Contact", links: [l("hello@kinrise.example"), l("0800-555-0142")] },
  follow: {
    title: "Follow us",
    links: [
      { label: "Kinrise on social", href: "#", icon: <AtSign strokeWidth={2} /> },
      { label: "Kinrise photos", href: "#", icon: <Camera strokeWidth={2} /> },
      { label: "Kinrise videos", href: "#", icon: <CirclePlay strokeWidth={2} /> },
      { label: "Kinrise newsletter", href: "#", icon: <Rss strokeWidth={2} /> },
    ],
  },
  apps: {
    title: "Get the app",
    badges: [
      { small: "Download on the", label: "App Store", href: "#", icon: <Apple className="fill-current" strokeWidth={0} /> },
      { small: "Get it on", label: "Google Play", href: "#", icon: <Play className="fill-current" strokeWidth={0} /> },
    ],
  },
  legal: [
    "© 2021–2026 Kinrise Labs Ltd. All rights reserved. ISO 27001 and GDPR compliant.",
    "Unit 4, Fernhill Works, 12 Quarry Lane, Bristol BS1 5XX, United Kingdom · Company no. 01234567",
  ],
  pills: [
    { label: "United Kingdom", href: "#", icon: <Globe strokeWidth={1.75} /> },
    { label: "Find a stockist", href: "#", icon: <MapPin strokeWidth={1.75} /> },
  ],
};

export default function Demo() {
  return <UltrahumanFooter {...footerSample} />;
}
