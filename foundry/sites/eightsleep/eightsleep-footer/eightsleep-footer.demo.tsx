import { AtSign, Camera, CirclePlay, Globe, Waves } from "lucide-react";
import { EightsleepFooter, type EightsleepFooterProps } from "./eightsleep-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: EightsleepFooterProps = {
  brand: <Waves className="size-9" strokeWidth={2.25} aria-label="Tidewell" />,
  region: <Globe className="size-4" strokeWidth={1.5} aria-label="Region" />,
  payments: ["HSA/FSA", "Paylater", "Wallet", "G-Pay", "Visa", "Master", "Amex"],
  newsletter: {
    title: "Join the rested majority",
    sub: "News on sleep science and new Tidewell gear, now and then.",
    placeholder: "Email address",
    submitLabel: "Sign up",
    fine: "By signing up you agree to receive Tidewell's newsletter and occasional offers.",
  },
  columns: [
    { title: "Journal", links: links("Sleep", "Training", "Health", "Research") },
    { title: "Company", links: links("Careers", "Newsroom", "Athletes", "Menopause", "Autopilot", "Add-ons", "Help choosing") },
    { title: "Support", links: links("Member login", "Pillow login", "Help centre", "Warranty", "Returns", "Terms of service", "Accessibility") },
    { title: "Legal", links: links("Financing", "Privacy", "Your privacy choices", "Terms of sale", "Health data privacy", "Patents") },
  ],
  contact: { title: "Talk to us", line: "+1 (800) 555-0142", href: "#" },
  socials: [
    { icon: <CirclePlay strokeWidth={1.5} />, href: "#", label: "Video channel" },
    { icon: <Camera strokeWidth={1.5} />, href: "#", label: "Photos" },
    { icon: <AtSign strokeWidth={1.5} />, href: "#", label: "Posts" },
  ],
  copyright: "© 2026 Tidewell. All rights reserved.",
  footnotes: [
    "* Results vary from person to person. Based on Tidewell's own study data. The Mantle is not a medical device and does not diagnose, treat, cure or prevent any condition.",
    "** Results vary and are not guaranteed.",
    "‡ Recommended for sleepers aged 16 and over.",
    "◊ Requires a Tidewell Plus membership.",
    "† Financing is offered by our lending partners, subject to an eligibility check, and may not be available everywhere. Rates vary from 0% to 30% APR.",
    "† Offer valid on selected products only and cannot be combined with other offers. Full terms apply.",
  ],
};

export default function Demo() {
  return <EightsleepFooter {...footerSample} />;
}
