import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { TypesomethingHero, type TypesomethingHeroProps } from "./typesomething-hero";

export const heroSample: TypesomethingHeroProps = {
  badge: { label: "Now in open beta", href: "#beta" },
  title: ["Lose the login.", "Just ask."],
  verb: "Ask",
  words: ["new page", "menu update", "fresh photos", "price change"],
  lead: "Paperkite runs your website from a conversation. Say what should change, check the preview, and it goes live: no admin panel, no plugins, no passwords to forget.",
  actions: [
    { label: "Start your site", href: "#start", icon: <ArrowRight /> },
    { label: "See it work", href: "#demo", variant: "outline" },
  ],
  highlights: [
    { icon: <Zap />, title: "Quick", text: "Pages open before the kettle clicks off." },
    { icon: <ShieldCheck />, title: "Safe", text: "No logins, no plugins, nothing to break into." },
    { icon: <Sparkles />, title: "Yours", text: "Made from your brand, never from a theme shop." },
  ],
};

export default function Demo() {
  return <TypesomethingHero {...heroSample} />;
}
