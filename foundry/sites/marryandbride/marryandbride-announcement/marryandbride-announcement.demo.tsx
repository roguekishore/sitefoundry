import { MarryandbrideAnnouncement, type MarryandbrideAnnouncementProps } from "./marryandbride-announcement";

export const announcementSample: MarryandbrideAnnouncementProps = {
  messages: ["Knitted to order in six weeks", "Free alterations within the first month", "Rush orders for late-summer weddings"],
  closeLabel: "Close announcement",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <MarryandbrideAnnouncement {...announcementSample} />
      <div className="h-40" />
    </div>
  );
}
