// Sample content lives here (gallery only); the page reuses it. All companies and people are made up.
import { IncreaseUpdates, type IncreaseUpdatesProps } from "./increase-updates";

export const updatesSample: IncreaseUpdatesProps = {
  title: "From the changelog",
  updates: [
    {
      title: "Card transactions now carry merchant details from Lookout",
      excerpt: "Every card authorization on Cairn can include a cleaned-up merchant record with name, category and location.",
      date: "Oct 9, 2026",
      dateTime: "2026-10-09",
      href: "#post-1",
    },
    {
      title: "Talon and Cairn bring embedded accounts to boat dealers",
      excerpt: "Talon, Cairn and a regional partner bank open business accounts inside the marina management suite.",
      date: "Oct 2, 2026",
      dateTime: "2026-10-02",
      href: "#post-2",
    },
    {
      title: "Begin with boring fraud rules",
      excerpt: "A mentor once told me to block less and watch more. It went against everything I believed as an engineer.",
      date: "Sep 18, 2026",
      dateTime: "2026-09-18",
      href: "#post-3",
    },
    {
      title: "Say hello to Beatrix Lowe, our new compliance lead",
      excerpt: "Beatrix spent twelve years building compliance programmes at two card issuers and a neobank.",
      date: "Sep 4, 2026",
      dateTime: "2026-09-04",
      href: "#post-4",
    },
  ],
  more: { label: "All updates", href: "#updates" },
};

export default function Demo() {
  return <IncreaseUpdates {...updatesSample} />;
}
