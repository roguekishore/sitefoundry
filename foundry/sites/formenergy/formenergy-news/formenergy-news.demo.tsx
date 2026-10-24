// Sample content (gallery only).
import { FormenergyNews, type FormenergyNewsProps } from "./formenergy-news";

export const newsSample: FormenergyNewsProps = {
  id: "press",
  title: "Latest from the works",
  items: [
    { tag: "Announcement", source: "Tidewell Power", title: "Tidewell Signs Its First Week-Long Storage Deal With a Plains Co-op", date: "October 2, 2026", href: "#n1" },
    { tag: "Announcement", source: "Tidewell Power", title: "Calder Falls Works Opens a Night Shift and 200 New Roles", date: "September 18, 2026", href: "#n2" },
    { tag: "Announcement", source: "Tidewell Power", title: "Tidewell Raises New Funding to Add a Second Cell Line and Bring Salt Batteries to Three More States This Decade", date: "August 27, 2026", href: "#n3" },
    { tag: "Interview", source: "The Linesman Quarterly", title: "Why Grid Planners Are Rethinking the Calm Week", date: "August 4, 2026", href: "#n4" },
  ],
  more: { label: "All news", href: "#press" },
};

export default function Demo() {
  return <FormenergyNews {...newsSample} />;
}
