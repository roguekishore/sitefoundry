import { AtSign, Camera, Mail, MessageCircle, Phone, Users } from "lucide-react";
import { PrenuvoFooter, type PrenuvoFooterProps } from "./prenuvo-footer";

export const footerSample: PrenuvoFooterProps = {
  brand: "oriel",
  columns: [
    {
      title: "Discover",
      links: [
        { label: "Why Oriel", href: "#why" },
        { label: "Member stories", href: "#stories" },
        { label: "Studies", href: "#studies" },
        { label: "Journal", href: "#journal" },
        { label: "Clinics", href: "#clinics" },
        { label: "What we find", href: "#findings" },
        { label: "Questions", href: "#questions" },
      ],
    },
    {
      title: "For partners",
      links: [
        { label: "Doctors", href: "#doctors" },
        { label: "Teams", href: "#teams" },
        { label: "Alliances", href: "#alliances" },
        { label: "Risk check", href: "#risk" },
        { label: "Yearly visit", href: "#yearly" },
        { label: "Refer a friend", href: "#refer" },
        { label: "Book a call", href: "#call" },
        { label: "Gift a scan", href: "#gift" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#about" },
        { label: "Press room", href: "#press" },
        { label: "Jobs", href: "#jobs" },
        { label: "Get in touch", href: "#contact" },
        { label: "Sign in", href: "#signin" },
      ],
    },
  ],
  contact: {
    title: "Talk to us",
    heading: "Questions and bookings",
    lines: [
      { icon: <Phone strokeWidth={1.5} />, label: "+1 555 014 2290", href: "#call" },
      { icon: <Mail strokeWidth={1.5} />, label: "care@oriel.example", href: "#email" },
    ],
  },
  socials: [
    { icon: <Camera strokeWidth={1.75} />, label: "Photos", href: "#photos" },
    { icon: <Users strokeWidth={1.75} />, label: "Community", href: "#community" },
    { icon: <AtSign strokeWidth={1.75} />, label: "Updates", href: "#updates" },
    { icon: <MessageCircle strokeWidth={1.75} />, label: "Chat", href: "#chat" },
  ],
  newsletter: {
    title: "Fresh findings, once a month",
    fields: ["First name *", "Last name *", "Email address *"],
    submitLabel: "Subscribe",
    action: "#subscribe",
  },
  copyright: "© 2026 Oriel Imaging, Ltd. A fictional company.",
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms of use", href: "#terms" },
    { label: "Cookies", href: "#cookies" },
  ],
  note: "Monthly payments available through partner lenders",
};

export default function Demo() {
  return (
    <div className="bg-background pt-16">
      <PrenuvoFooter {...footerSample} />
    </div>
  );
}
