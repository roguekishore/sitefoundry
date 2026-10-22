// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { AtSign, Briefcase, SquarePlay } from "lucide-react";
import { RadiantnuclearFooter, type RadiantnuclearFooterProps } from "./radiantnuclear-footer";

export const footerSample: RadiantnuclearFooterProps = {
  address: ["48 Harbour Works Road", "Portland, OR 97210"],
  email: "hello@corvane.example",
  links: [
    { label: "Updates", href: "#updates" },
    { label: "Jobs", href: "#jobs" },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ],
  socials: [
    { label: "Video channel", href: "#video", icon: <SquarePlay aria-hidden /> },
    { label: "Careers network", href: "#network", icon: <Briefcase aria-hidden strokeWidth={1.75} /> },
    { label: "Short posts", href: "#posts", icon: <AtSign aria-hidden strokeWidth={1.75} /> },
  ],
  copyright: "© Corvane Energy, Inc. All rights reserved.",
};

export default function Demo() {
  return <RadiantnuclearFooter {...footerSample} />;
}
