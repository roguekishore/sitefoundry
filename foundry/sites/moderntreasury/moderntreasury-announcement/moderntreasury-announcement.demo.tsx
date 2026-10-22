import { ModerntreasuryAnnouncement, type ModerntreasuryAnnouncementProps } from "./moderntreasury-announcement";

export const announcementSample: ModerntreasuryAnnouncementProps = {
  text: "Kestrel is now a licensed money transmitter in all fifty states.",
  link: { label: "Read the announcement", href: "#" },
};

export default function Demo() {
  return <ModerntreasuryAnnouncement {...announcementSample} />;
}
