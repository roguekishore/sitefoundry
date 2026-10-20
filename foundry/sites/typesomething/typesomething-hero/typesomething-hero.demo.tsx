import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { TypesomethingHero, type TypesomethingHeroProps } from "./typesomething-hero";

export const heroSample: TypesomethingHeroProps = {
  badge: { label: "Now in open beta", href: "#beta" },
  title: ["Drop the dashboard.", "Just ask."],
  verb: "Ask for",
  words: ["a new page", "a menu update", "fresh photos", "a price change"],
  lead: "Paperkite runs your website from a conversation. Say what should change, check the preview, and it goes live: no admin panel, no plugins, no passwords to forget.",
  actions: [
    { label: "Start your site", href: "#start", icon: <ArrowRight /> },
    { label: "See it work", href: "#demo", variant: "outline" },
  ],
  highlights: [
    { icon: <Zap />, title: "Quick", text: "Pages that load before the kettle clicks off." },
    { icon: <ShieldCheck />, title: "Safe", text: "Nothing to log into, so nothing to break into." },
    { icon: <Sparkles />, title: "Yours", text: "Built from your brand, not from a theme shop." },
  ],
};

export default function Demo() {
  return <TypesomethingHero {...heroSample} />;
}
