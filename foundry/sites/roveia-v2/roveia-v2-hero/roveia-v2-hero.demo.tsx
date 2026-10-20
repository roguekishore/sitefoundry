// Sample content lives here (gallery only); the page reuses it. Halden Growth and every
// partner name are made up.
import { AtSign, Blocks, Clapperboard, Inbox, LayoutTemplate, Repeat, Search, ShieldCheck } from "lucide-react";
import { RoveiaV2Hero, type RoveiaV2HeroProps } from "./roveia-v2-hero";

export const heroSample: RoveiaV2HeroProps = {
  headline: { before: "Growth for", accent: "Modern Care Brands", after: "Built on Proof, Not Guesswork" },
  lead: "Review-safe creative. Media that earns its spend. Funnels tuned to convert.",
  cta: { label: "Book a call", href: "#" },
  stat: { value: "68%", label: "Lower cost per patient", note: "Over 90+ care brands" },
  partnersLabel: "Working alongside:",
  partners: [
    { name: "Adwise", icon: <AtSign /> },
    { name: "Searchly", icon: <Search /> },
    { name: "Clipcast", icon: <Clapperboard /> },
    { name: "Pagewright", icon: <LayoutTemplate /> },
    { name: "Inboxly", icon: <Inbox /> },
    { name: "Loopmail", icon: <Repeat /> },
    { name: "Stackline", icon: <Blocks /> },
    { name: "Certora", icon: <ShieldCheck /> },
  ],
};

export default function Demo() {
  return <RoveiaV2Hero {...heroSample} />;
}
