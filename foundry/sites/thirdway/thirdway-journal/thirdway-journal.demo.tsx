import { ThirdwayJournal, type ThirdwayJournalProps } from "./thirdway-journal";

export const journalSample: ThirdwayJournalProps = {
  heading: "The Hollin Journal",
  viewAll: { label: "View all", href: "#" },
  prevLabel: "Previous post",
  nextLabel: "Next post",
  posts: [
    { date: ["06", "10", "2026"], title: "Behind the Build: Learning to Teach in a New Space", href: "#" },
    { date: ["16", "09", "2026"], title: "Behind the Build: The Tower Floor", href: "#" },
    { date: ["12", "05", "2026"], title: "Behind the Build: Meet Maren Oakley", href: "#" },
  ],
};

export default function Demo() {
  return <ThirdwayJournal {...journalSample} />;
}
