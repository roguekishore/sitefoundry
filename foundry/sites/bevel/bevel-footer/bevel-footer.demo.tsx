// Sample content (gallery only); the page reuses it. Juniper and Larchmere Labs are made up.
import { AtSign, Camera, MessagesSquare, PlayCircle, Sprout, Users } from "lucide-react";
import { BevelFooter, type BevelFooterProps } from "./bevel-footer";

export const footerSample: BevelFooterProps = {
  brand: (
    <>
      <Sprout strokeWidth={2.25} />
      Juniper
    </>
  ),
  legal: "© Larchmere Labs, Inc. 2026",
  columns: [
    { title: "Company", links: [{ label: "Our story", href: "#" }, { label: "Jobs", href: "#" }, { label: "Journal", href: "#" }] },
    {
      title: "Product",
      links: [
        { label: "Get the app", href: "#" },
        { label: "Help centre", href: "#" },
        { label: "What's new", href: "#" },
        { label: "Coming soon", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Questions", href: "#" },
        { label: "Suggest an idea", href: "#" },
        { label: "Report a problem", href: "#" },
        { label: "Get in touch", href: "#" },
      ],
    },
    { title: "Legal", links: [{ label: "Terms of use", href: "#" }, { label: "Privacy notice", href: "#" }] },
  ],
  socials: [
    { icon: <Camera strokeWidth={2} />, label: "Photos", href: "#" },
    { icon: <AtSign strokeWidth={2} />, label: "Posts", href: "#" },
    { icon: <MessagesSquare strokeWidth={2} />, label: "Forum", href: "#" },
    { icon: <PlayCircle strokeWidth={2} />, label: "Videos", href: "#" },
    { icon: <Users strokeWidth={2} />, label: "Community", href: "#" },
  ],
};

export default function Demo() {
  return <BevelFooter {...footerSample} />;
}
