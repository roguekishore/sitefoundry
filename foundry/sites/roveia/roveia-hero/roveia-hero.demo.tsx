// Sample content lives here (gallery only); the page reuses it. Company and partners are made up.
import { AtSign, Boxes, Feather, Mail, Radio, ShieldCheck, Sparkle, TrendingDown, Waves } from "lucide-react";
import { RoveiaHero, type RoveiaHeroProps } from "./roveia-hero";

export const heroSample: RoveiaHeroProps = {
  headline: [
    { text: "Paid Growth for " },
    { text: "Modern Care Brands", highlight: true },
    { text: " That Plan to Last" },
  ],
  description: "Review-safe creative. Disciplined media. Funnels tuned to book.",
  cta: { label: "Book a call", href: "#" },
  stat: { icon: <TrendingDown strokeWidth={1.5} />, value: "61%", label: "Lower cost per new patient", note: "Across 90+ care brands" },
  partnersLabel: "Worked alongside:",
  partners: [
    { name: "Lumenads", icon: <Sparkle /> },
    { name: "Fieldnote", icon: <Feather /> },
    { name: "Parcelwave", icon: <Waves /> },
    { name: "Quillcast", icon: <Radio /> },
    { name: "Boxline", icon: <Boxes /> },
    { name: "Atpost", icon: <AtSign /> },
    { name: "Tinmail", icon: <Mail /> },
    { name: "Certiseal", icon: <ShieldCheck /> },
  ],
};

export default function Demo() {
  return <RoveiaHero {...heroSample} />;
}
