import { AtSign, Briefcase, Camera, Compass, MessageCircle, Music2, ThumbsUp } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import { SuperhumanFooter, type SuperhumanFooterProps } from "./superhuman-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: SuperhumanFooterProps = {
  brand: <SuperhumanMark brand="Wayfinder" icon={<Compass />} tile="light" className="text-lg" />,
  tagline: "Makers of the Wayfinder workday apps",
  wordmark: "Wayfinder",
  columns: [
    { title: "Products", links: ["Wayfinder Pilot", "Assistants", "Post", "Planner", "Pages", "Tables", "Wayfinder Shop"].map(l) },
    {
      title: "Company",
      links: ["Contact us", "About", "Our principles", "Careers", "Journal", "Academy", "Help centre", "Status", "Partners", "Community", "Developers", "Press kit", "Newsletter", "Brand assets"].map(l),
    },
    { title: "Legal", links: ["Terms", "Privacy", "Trust", "Customer agreement", "Legal notices", "Cookie preferences"].map(l) },
    {
      title: "Connect",
      links: [
        { ...l("Careers feed"), icon: <Briefcase /> },
        { ...l("Short posts"), icon: <AtSign /> },
        { ...l("Clips"), icon: <Music2 /> },
        { ...l("Snapshots"), icon: <Camera /> },
        { ...l("Threads"), icon: <MessageCircle /> },
        { ...l("Community page"), icon: <ThumbsUp /> },
      ],
    },
  ],
};

export default function Demo() {
  return <SuperhumanFooter {...footerSample} />;
}
