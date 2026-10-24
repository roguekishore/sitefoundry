import { Radio } from "lucide-react";
import type { SaronicAnnouncementProps } from "./saronic-announcement";
import { SaronicAnnouncement } from "./saronic-announcement";

export const announcementSample: SaronicAnnouncementProps = {
  label: "Bulletin",
  message: "Ternway picked to build the coastal patrol squadron for the Gulf Guard",
  cta: { label: "Read more", href: "#" },
  icon: <Radio aria-hidden strokeWidth={1.5} />,
  closeLabel: "Dismiss the bulletin",
};

export default function Demo() {
  return <SaronicAnnouncement {...announcementSample} />;
}
