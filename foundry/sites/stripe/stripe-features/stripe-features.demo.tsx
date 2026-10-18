// Sample content lives here (gallery only); the page reuses it.
import { Headphones, LayoutGrid, Rocket, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { StripeFeatures, type StripeFeaturesProps } from "./stripe-features";

export const expertsSample: StripeFeaturesProps = {
  title: "Get there sooner with people who've done it before",
  features: [
    {
      icon: <LayoutGrid />,
      lead: "Launch services.",
      text: "Our engineers plan your rollout, wire up tricky integrations and run big migrations with you.",
      link: { label: "See services", href: "/services" },
    },
    {
      icon: <Users />,
      lead: "Certified partners.",
      text: "Hire an agency that knows fernpay inside out to build and run it for you.",
      link: { label: "Find a partner", href: "/partners" },
    },
    {
      icon: <Headphones />,
      lead: "Support plans.",
      text: "Named engineers, faster answers and round-the-clock cover, in tiers that fit your team.",
      link: { label: "Compare plans", href: "/support" },
    },
  ],
};

export const platformFeaturesSample: StripeFeaturesProps = {
  features: [
    {
      icon: <Rocket />,
      lead: "Ship sooner.",
      text: "Drop in ready-made payment screens and no-code tools instead of building them yourself.",
      link: { label: "Read the guide", href: "/guides/launch" },
    },
    {
      icon: <TrendingUp />,
      lead: "Earn on every payment.",
      text: "Add revenue from processing, cards and lending to the software you already sell.",
      link: { label: "Read the guide", href: "/guides/revenue" },
    },
    {
      icon: <ShieldCheck />,
      lead: "Stay out of trouble.",
      text: "Know-your-customer checks, credit and fraud tools keep your platform and its users safe.",
      link: { label: "Read the guide", href: "/guides/risk" },
    },
  ],
};

export default function Demo() {
  return <StripeFeatures {...expertsSample} />;
}
