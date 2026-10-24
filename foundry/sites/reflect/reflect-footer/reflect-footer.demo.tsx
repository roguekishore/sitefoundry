import { AtSign, MessagesSquare, Orbit } from "lucide-react";
import type { ReflectFooterProps } from "./reflect-footer";
import { ReflectFooter } from "./reflect-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: ReflectFooterProps = {
  name: "Nocturne",
  icon: <Orbit strokeWidth={1.25} />,
  socials: [
    { label: "Community chat", href: "#", icon: <MessagesSquare aria-hidden strokeWidth={1.5} /> },
    { label: "Follow us", href: "#", icon: <AtSign aria-hidden strokeWidth={1.5} /> },
  ],
  columns: [
    { title: "Nocturne", links: links("Tour", "Plans", "What's new", "Source") },
    { title: "Studio", links: links("People", "How we work", "Journal") },
    { title: "Help", links: links("Get the apps", "Handbook", "Privacy", "Say hello") },
  ],
  newsletter: {
    title: "Night letters",
    text: "Now and then, news from the Nocturne studio",
    placeholder: "you@example.com",
    fieldLabel: "Your email",
    button: "Sign me up",
  },
  legal: links("Privacy notice", "Terms of use"),
  copyright: "Nocturne Labs, Ltd. All rights reserved.",
};

export default function Demo() {
  return <ReflectFooter {...footerSample} />;
}
