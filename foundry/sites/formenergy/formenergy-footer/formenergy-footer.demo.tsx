// Sample content (gallery only).
import { AtSign, Briefcase, Camera, Rss, Video } from "lucide-react";
import { FormenergyFooter, type FormenergyFooterProps } from "./formenergy-footer";

export const footerSample: FormenergyFooterProps = {
  brand: "Tidewell",
  brandSuffix: "power",
  taglineLines: ["Power that waits", "for the calm, dark days"],
  menuTitle: "Menu",
  menu: [
    { label: "Company", href: "#company" },
    { label: "The cell", href: "#cell" },
    { label: "The works", href: "#works" },
    { label: "Jobs", href: "#jobs" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  contactTitle: "Contact",
  addressLines: ["4 Roundhouse Lane", "Calder Falls, OH 44090"],
  emails: [
    { label: "hello@tidewell.example", href: "mailto:hello@tidewell.example" },
    { label: "press@tidewell.example", href: "mailto:press@tidewell.example" },
  ],
  social: [
    { label: "Microblog", href: "#social", icon: <AtSign strokeWidth={2} /> },
    { label: "Jobs board", href: "#social", icon: <Briefcase strokeWidth={2} /> },
    { label: "Feed", href: "#social", icon: <Rss strokeWidth={2} /> },
    { label: "Photos", href: "#social", icon: <Camera strokeWidth={2} /> },
    { label: "Videos", href: "#social", icon: <Video strokeWidth={2} /> },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Accessibility", href: "#accessibility" },
  ],
  copyright: "© 2026 Tidewell Power. All rights reserved.",
};

export default function Demo() {
  return <FormenergyFooter {...footerSample} />;
}
