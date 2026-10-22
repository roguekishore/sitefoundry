import { AtSign, BadgeCheck, Camera, MapPin, MessageCircle, Smartphone, Tablet } from "lucide-react";
import { BasepowercompanyFooter, type BasepowercompanyFooterProps } from "./basepowercompany-footer";

export const footerSample: BasepowercompanyFooterProps = {
  brand: "Porchlight",
  columns: [
    { heading: "The product", links: [{ label: "The Hub", href: "#hub" }, { label: "Home power", href: "#power" }, { label: "How Porchlight works", href: "#how" }] },
    { heading: "Members", links: [{ label: "Stories", href: "#stories" }, { label: "Reviews", href: "#reviews" }, { label: "Log in", href: "#login" }] },
    { heading: "Work with us", links: [{ label: "Home builders", href: "#builders" }, { label: "Electricians", href: "#electricians" }, { label: "Co-ops", href: "#co-ops" }] },
    {
      heading: "Learn",
      links: [
        { label: "Compare my bill", href: "#compare" },
        { label: "Guides", href: "#guides" },
        { label: "Journal", href: "#journal" },
        { label: "Help", href: "#help" },
      ],
    },
    { heading: "Company", links: [{ label: "About Porchlight", href: "#about" }, { label: "Jobs", href: "#jobs" }, { label: "Field jobs", href: "#field" }] },
  ],
  badges: [
    { icon: <Smartphone />, top: "Get it for", label: "iPhone", href: "#ios" },
    { icon: <Tablet />, top: "Get it for", label: "Android", href: "#android" },
    { icon: <BadgeCheck />, top: "Rated", label: "A+ Trust", href: "#trust" },
  ],
  contact: [
    { lines: ["1180 Magnolia Ave, Floor 3,", "Beaumont, TX 77701"] },
    { heading: "Thinking of joining:", lines: ["409-555-0142", "hello@porchlight.example"] },
    { heading: "Already a member:", lines: ["Message us from the Porchlight", "app or your account page"] },
  ],
  socials: [
    { label: "Photos", href: "#photos", icon: <Camera /> },
    { label: "Updates", href: "#updates", icon: <AtSign /> },
    { label: "Community", href: "#community", icon: <MessageCircle /> },
  ],
  legal: [
    "Porchlight Energy Co. | Porchlight Retail Power, LLC | Porchlight Install Services, LLC",
    "Plans, battery setups and prices differ from state to state.",
    "Porchlight Retail Power is a licensed retail electric provider. Your local delivery company still owns the wires and answers outage calls.",
    "Savings figures are estimates, not promises. What you save depends on your home's use, the weather, your plan and market prices.",
    "Where we only install batteries, Porchlight is not your electricity provider and your utility bill does not change.",
    "Porchlight, the Hub and the lamp mark are trademarks of Porchlight Energy Co. Other names belong to their owners. Products and services are subject to terms, conditions and availability.",
    "Members' stories are their own; savings and outage times vary from home to home.",
    "Hub batteries are certified to the relevant safety standards for home energy storage and are installed by licensed electricians.",
  ],
  legalLinks: [
    { label: "Privacy", href: "#privacy" },
    { label: "Your data choices", href: "#data" },
    { label: "Report an outage", href: "#outage" },
    { label: "Text message terms", href: "#sms" },
    { label: "Offer terms", href: "#offers" },
  ],
  seal: ["SAFE", "DATA"],
  signoff: { text: "Made on the Gulf Coast", icon: <MapPin /> },
};

export default function Demo() {
  return <BasepowercompanyFooter {...footerSample} />;
}
