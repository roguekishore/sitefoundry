// Sample content (gallery only); the page reuses it.
import { PaintBucket, Users } from "lucide-react";
import { ResendEditor, type ResendEditorProps } from "./resend-editor";

export const editorSample: ResendEditorProps = {
  title: "Compose in a calm editor",
  text: [
    "A clean surface where anyone on the team can draft, style and send.",
    "Lay out the message visually and tune its look with your own styles.",
  ],
  toolbar: { styles: "Styles", stylesIcon: <PaintBucket strokeWidth={1.75} />, name: "Harbourline monthly digest", saved: "two hours ago", test: "Preview", send: "Send" },
  fields: [
    { label: "From", value: "news@harbourline.dev" },
    { label: "To", value: "Digest readers", chip: true, icon: <Users strokeWidth={1.75} /> },
    { label: "Subject", value: "What shipped in March" },
  ],
  hint: "Type '/' to insert a block",
};

export default function Demo() {
  return <ResendEditor {...editorSample} />;
}
