// Sample content lives here (gallery only); the page reuses it.
import { AtSign, Heart, Mail, MessagesSquare, Rss, Send, TvMinimalPlay } from "lucide-react";
import { HulyFooter, type HulyFooterProps } from "./huly-footer";

export const footerSample: HulyFooterProps = {
  copyright: "© 2026 Tessel Labs. All rights reserved.",
  links: [
    { label: "Terms of use", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
  ],
  socials: [
    { label: "Newsletter", href: "#newsletter", icon: <Mail strokeWidth={1.75} /> },
    { label: "Social profile", href: "#social", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Videos", href: "#videos", icon: <TvMinimalPlay strokeWidth={1.75} /> },
    { label: "Forum", href: "#forum", icon: <MessagesSquare strokeWidth={1.75} /> },
    { label: "Blog feed", href: "#rss", icon: <Rss strokeWidth={1.75} /> },
    { label: "Chat channel", href: "#chat", icon: <Send strokeWidth={1.75} /> },
  ],
  note: { text: "Built with care by the Tessel crew", icon: <Heart fill="currentColor" strokeWidth={0} /> },
};

export default function Demo() {
  return <HulyFooter {...footerSample} />;
}
