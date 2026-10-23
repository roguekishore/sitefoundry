import { MessagesSquare } from "lucide-react";
import { PuzzleMigrate, type PuzzleMigrateProps } from "./puzzle-migrate";

export const migrateSample: PuzzleMigrateProps = {
  title: (
    <>
      Leave the old ledger and the copy-pasting behind.
      <br /> Bring everything worth keeping.
    </>
  ),
  text: "Your history comes across in minutes. The books pick up where they left off and keep moving at AI pace.",
  actions: [
    { label: "Get a walkthrough →", href: "#" },
    { label: "Talk to an accountant", href: "#", icon: <MessagesSquare strokeWidth={1.75} /> },
  ],
  steps: ["Today", "Ten minutes in", "First month-end"],
  activeStep: 1,
  cards: [
    {
      title: "Set up",
      points: ["A guided first run", "Link your bank and tools in a click", "Bring your own accountant or pick one of ours", "Import your old ledger automatically (optional)"],
    },
    {
      title: "First answers",
      points: ["Agents sort transactions from the first day", "Four in five lines sorted, no rules needed", "Live figures straight away"],
      withMedia: true,
    },
    {
      title: "Faster closes",
      points: ["Month-end in half the time", "Agents line up the matching for you to check", "Books that stay right and stay current"],
    },
  ],
};

export default function Demo() {
  return <PuzzleMigrate {...migrateSample} />;
}
