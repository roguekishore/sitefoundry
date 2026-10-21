import { StoreyarchitectureJournal, type StoreyarchitectureJournalProps } from "./storeyarchitecture-journal";

export const journalSample: StoreyarchitectureJournalProps = {
  heading: "Notes from the drawing table",
  intro: "Short essays, site visits and finished houses: how plain building, patient planning and local materials add up to homes that feel calmer to live in.",
  cta: { label: "All notes", href: "#notes" },
  posts: [
    { title: "Why we draw for the next fifty years, not the next five", href: "#fifty-years", ratio: "1 / 1" },
    { title: "Lime, oak and slate: choosing materials that age well", href: "#materials", ratio: "4 / 3" },
    { title: "Keeping a house open to the view without giving up privacy", href: "#privacy", ratio: "4 / 3" },
    { title: "Letting the garden walk straight into the kitchen", href: "#garden", ratio: "6 / 7" },
  ],
  readLabel: "Read",
  hoverLabel: "Read the note",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureJournal {...journalSample} />
    </div>
  );
}
