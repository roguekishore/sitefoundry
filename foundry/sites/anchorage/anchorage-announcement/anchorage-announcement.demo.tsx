// Sample content lives here (gallery only).
import { AnchorageAnnouncement, type AnchorageAnnouncementProps } from "./anchorage-announcement";

export const announcementSample: AnchorageAnnouncementProps = {
  lead: "Welcome",
  brand: { name: "Payloom", byline: "now with strata reserve" },
  text: "Read about the merger",
  link: { label: "here", href: "#" },
  after: ".",
};

export default function Demo() {
  return <AnchorageAnnouncement {...announcementSample} />;
}
