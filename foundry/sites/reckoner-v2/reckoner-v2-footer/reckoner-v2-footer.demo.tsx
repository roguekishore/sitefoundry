// Sample content (gallery only); the page reuses it. The company, people and numbers are made up.
import { ChartNoAxesColumn, Users } from "lucide-react";
import { ReckonerV2Wordmark } from "@foundry/reckoner-v2-wordmark";
import { ReckonerV2Footer, type ReckonerV2FooterProps } from "./reckoner-v2-footer";

export const footerSample: ReckonerV2FooterProps = {
  brand: "Caldergrove Credit Partners",
  logo: (
    <ReckonerV2Wordmark name="Caldergrove" tagline="Credit partners" icon={<ChartNoAxesColumn strokeWidth={2.5} />} iconClassName="text-glow" />
  ),
  statement: "Patient credit, clearly reasoned",
  subscribe: {
    label: "Your email address",
    placeholder: "name@firm.com",
    button: "Sign up",
    consent: "By signing up you agree to receive occasional letters from Caldergrove",
  },
  sitemap: [
    { label: "Home", href: "#top" },
    { label: "Who we are", href: "#who-we-are" },
    { label: "Approach", href: "#approach" },
    { label: "Funds", href: "#funds" },
  ],
  contacts: [
    {
      label: "Investor relations",
      links: [
        { label: "investors@caldergrove.example", href: "mailto:investors@caldergrove.example" },
        { label: "+1 555 0142 300", href: "tel:+15550142300" },
      ],
    },
    { label: "Press", links: [{ label: "press@caldergrove.example", href: "mailto:press@caldergrove.example" }] },
  ],
  social: { label: "LinkedIn", href: "#linkedin", icon: <Users strokeWidth={2.5} /> },
  parent: "A Thornfield Holdings company",
  legal: "Registered investment adviser © 2026 Caldergrove. All rights reserved.",
  legalLinks: [
    { label: "Important information", href: "#information" },
    { label: "Privacy", href: "#privacy" },
    { label: "Marketing disclosures", href: "#disclosures" },
  ],
};

export default function Demo() {
  return <ReckonerV2Footer {...footerSample} />;
}
