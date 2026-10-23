import { Command, Keyboard, Link2, TextCursorInput } from "lucide-react";
import { RaycastSnippets, type RaycastSnippetsProps } from "./raycast-snippets";

export const snippetsSample: RaycastSnippetsProps = {
  title: "Say it once.",
  subtitle: "Automate everything you repeat.",
  wide: { icon: <TextCursorInput />, title: "Text shortcuts", description: "Tired of typing the same lines? Save a shortcut and expand it by typing a short keyword." },
  list: { icon: <Link2 />, title: "Jump links", description: "No more tab hoarding. Save a link once and open it from anywhere with a few letters." },
  hotkeys: {
    icon: <Keyboard />,
    title: "Hotkeys and nicknames",
    description: "Give any command or app its own key combination or short nickname to speed up your day.",
    keys: [
      { label: "alt", glyph: <Command /> },
      { label: "ctrl", glyph: <Command /> },
      { label: "J" },
    ],
  },
};

export default function Demo() {
  return <RaycastSnippets {...snippetsSample} />;
}
