import { BridgeAnnouncement, type BridgeAnnouncementProps } from "./bridge-announcement";

export const announcementSample: BridgeAnnouncementProps = {
  text: "Euro settlement is now open on Orrery. Read more",
  href: "#",
};

export default function Demo() {
  return <BridgeAnnouncement {...announcementSample} />;
}
