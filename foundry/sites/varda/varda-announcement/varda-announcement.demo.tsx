// Sample content lives here (gallery only); the page reuses it. Halden Orbital Works is made up.
import type { VardaAnnouncementProps } from "./varda-announcement";
import { VardaAnnouncement } from "./varda-announcement";

export const announcementSample: VardaAnnouncementProps = {
  label: "Bulletin",
  text: "Capsule four landed this morning. Recovery footage is on our feed.",
  href: "#",
};

export default function Demo() {
  return <VardaAnnouncement {...announcementSample} />;
}
