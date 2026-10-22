// Sample content (gallery only); the page reuses it.
import { BriefcaseBusiness, Camera, MessageCircle, Play } from "lucide-react";
import { CalderMark } from "../instituteofhealth-header/instituteofhealth-header.demo";
import { InstituteofhealthFooter, type InstituteofhealthFooterProps } from "./instituteofhealth-footer";

export const footerSample: InstituteofhealthFooterProps = {
  brand: <CalderMark className="text-[1.9rem]" />,
  primary: {
    title: "Explore",
    links: [
      { label: "Programmes", href: "#" },
      { label: "Workshops", href: "#" },
      { label: "Graduates", href: "#" },
      { label: "Our story", href: "#" },
      { label: "Get in touch", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Questions", href: "#" },
    ],
  },
  secondary: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Terms of use", href: "#" },
    ],
  },
  contact: {
    title: "Reach us",
    links: [
      { label: "+44 20 0000 0000", href: "#" },
      { label: "hello@calder.example", href: "#" },
    ],
  },
  socials: [
    { label: "Photos", href: "#", icon: <Camera strokeWidth={1.75} /> },
    { label: "Careers", href: "#", icon: <BriefcaseBusiness strokeWidth={1.75} /> },
    { label: "Videos", href: "#", icon: <Play strokeWidth={1.75} /> },
    { label: "Community", href: "#", icon: <MessageCircle strokeWidth={1.75} /> },
  ],
  wordmark: "Calder Academy",
  legal: "2026 © Calder Academy",
  credit: "Designed in-house",
};

export default function Demo() {
  return <InstituteofhealthFooter {...footerSample} />;
}
