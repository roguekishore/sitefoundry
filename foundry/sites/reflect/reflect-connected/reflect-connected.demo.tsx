import { Layers, ScanText } from "lucide-react";
import type { ReflectConnectedProps } from "./reflect-connected";
import { ReflectConnected } from "./reflect-connected";

const icon = { strokeWidth: 1.25, "aria-hidden": true } as const;

export const connectedSample: ReflectConnectedProps = {
  eyebrow: "Everything linked",
  title: "A second memory\nthat never sleeps",
  lead: "Ideas join up the way they do in your head: one page points to the next.\nOver the months Nocturne grows into a map you can wander back through.",
  mediaLabel: "Cone of light rising out of the dark",
  cards: [
    {
      icon: <Layers {...icon} />,
      title: "Pages that point to each other.",
      text: "Link one note to another and both remember the connection.",
      mediaLabel: "Linked pages drawing together",
    },
    {
      icon: <ScanText {...icon} />,
      title: "Catch it before it's gone.",
      text: "Jot a thought or a task in a second, and find it again just as fast.",
      mediaLabel: "A list of people from your notes",
    },
  ],
};

export default function Demo() {
  return <ReflectConnected {...connectedSample} />;
}
