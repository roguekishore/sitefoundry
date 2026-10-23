import { ArcAnnouncement, type ArcAnnouncementProps } from "./arc-announcement";

export const announcementSample: ArcAnnouncementProps = {
  message: "Basin now holds cash for 2,000 startups.",
  linkLabel: "Read the update",
  linkHref: "#",
};

export default function Demo() {
  return <ArcAnnouncement {...announcementSample} />;
}
