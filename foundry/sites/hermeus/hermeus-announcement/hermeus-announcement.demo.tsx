// Sample content lives here (gallery only); the page reuses it. Aldervane is made up.
import type { HermeusAnnouncementProps } from "./hermeus-announcement";
import { HermeusAnnouncement } from "./hermeus-announcement";

export const announcementSample: HermeusAnnouncementProps = {
  tag: "News",
  text: "Aldervane opens a second engine test cell at its Mojave flight line",
  href: "#",
  closeLabel: "Hide this news",
};

export default function Demo() {
  return (
    <div className="min-h-40 bg-secondary">
      <HermeusAnnouncement {...announcementSample} />
    </div>
  );
}
