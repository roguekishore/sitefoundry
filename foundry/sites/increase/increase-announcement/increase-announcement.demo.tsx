// Sample content lives here (gallery only); the page reuses it. Cairn is a made-up bank.
import { IncreaseAnnouncement, type IncreaseAnnouncementProps } from "./increase-announcement";

export const announcementSample: IncreaseAnnouncementProps = {
  title: "Meet Cairn Trust, our own chartered bank",
  body: "A bank built around its API, predictable and observable from the first ledger entry. Launch fast and grow without re-platforming.",
  link: { label: "Read the news", href: "#news" },
};

export default function Demo() {
  return <IncreaseAnnouncement {...announcementSample} />;
}
