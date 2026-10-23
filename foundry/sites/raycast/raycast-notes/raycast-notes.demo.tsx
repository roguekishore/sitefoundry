import { NotebookPen } from "lucide-react";
import { RaycastNotes, type RaycastNotesProps } from "./raycast-notes";

export const notesSample: RaycastNotesProps = {
  question: "What else does Tessel do?",
  answer: "It keeps your notes.",
  body: "Follow your parcels. Convert anything. Hunt down files. Run scripts. Arrange your windows. Plan the day. Nudge you about things. Translate on the fly. Silence the noise. Read text from screenshots. Pick emoji. And plenty more besides.",
  chip: { icon: <NotebookPen />, label: "Tessel Notes" },
  note: { text: "A fast place to park a thought while you are busy with something else.", link: { label: "Find out more", href: "#" } },
};

export default function Demo() {
  return <RaycastNotes {...notesSample} />;
}
