import { Boxes, CalendarDays, FileText, ListChecks, MessageCircle, Music, Timer, Wand2 } from "lucide-react";
import { RaycastExtensions, type RaycastExtensionsProps } from "./raycast-extensions";

export const extensionsSample: RaycastExtensionsProps = {
  title: "There's a plug-in for that.",
  subtitle: "Drive the tools you already love without ever opening them.",
  browse: { label: "See thousands more", href: "#" },
  arrowLabels: { prev: "Previous", next: "Next" },
  openLabel: "Open extension",
  tabs: [
    {
      label: "Everyday",
      cards: [
        { name: "Taskly", description: "Create, find and tick off tasks without leaving the keyboard.", tone: 5, href: "#", icon: <ListChecks /> },
        { name: "Lingua", description: "Translate any phrase into a dozen languages as you type.", tone: 3, href: "#", icon: <MessageCircle /> },
        { name: "Tunebox", description: "Search songs and podcasts, then control playback from the launcher.", tone: 2, href: "#", icon: <Music /> },
        { name: "Calendar", description: "See your day and join the next call with one key.", tone: 1, href: "#", icon: <CalendarDays /> },
        { name: "Timers", description: "Start a timer or a focus block and watch it count down.", tone: 4, href: "#", icon: <Timer /> },
      ],
    },
    {
      label: "Engineering",
      cards: [
        { name: "Packages", description: "Look up any package and copy its install line.", tone: 3, href: "#", icon: <Boxes /> },
        { name: "Snippets", description: "Search your saved code and paste it in place.", tone: 5, href: "#", icon: <Wand2 /> },
      ],
    },
    { label: "Design", cards: [{ name: "Palettes", description: "Pick and copy colours from anywhere on screen.", tone: 1, href: "#", icon: <Wand2 /> }] },
    { label: "Writing", cards: [{ name: "Drafts", description: "Jot a thought and file it before it escapes.", tone: 4, href: "#", icon: <FileText /> }] },
  ],
};

export default function Demo() {
  return <RaycastExtensions {...extensionsSample} />;
}
