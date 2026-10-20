import { Gauge, MessageSquareText, ShieldCheck } from "lucide-react";
import type { TypesomethingV2HeroProps } from "./typesomething-v2-hero";
import { TypesomethingV2Hero } from "./typesomething-v2-hero";

export const heroSample: TypesomethingV2HeroProps = {
  badge: { label: "Now booking autumn", href: "#" },
  title: ["Say it once.", "It's on the site."],
  typeLead: "Ask",
  phrases: ["a new page", "fresh prices", "a team photo", "a spring menu"],
  description:
    "Quietpage builds your business a fast, hand-made site, then keeps it current. Send a message whenever something changes and the update is ready to approve.",
  actions: [
    { label: "Rebuild my site", href: "#" },
    { label: "See an example", href: "#" },
  ],
  features: [
    { icon: <MessageSquareText strokeWidth={2.25} />, title: "Plain words", text: "Changes are requests in a chat, not forms in a panel." },
    { icon: <ShieldCheck strokeWidth={2.25} />, title: "Nothing to patch", text: "Static pages with no plugins to update or break." },
    { icon: <Gauge strokeWidth={2.25} />, title: "Quick to load", text: "Pages that open before a visitor can blink." },
  ],
};

export default function Demo() {
  return <TypesomethingV2Hero {...heroSample} />;
}
