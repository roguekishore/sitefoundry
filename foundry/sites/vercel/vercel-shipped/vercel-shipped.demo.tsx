// Sample content (gallery only); the page reuses it. The products are made up.
import { VercelShipped, type VercelShippedProps } from "./vercel-shipped";

export const shippedSample: VercelShippedProps = {
  title: "New this season",
  cards: [
    {
      title: "Workers",
      description: "Run long Python jobs, queues and schedulers on Halyard, next to your web app.",
      href: "#",
      mediaPlacement: "corner",
      mediaLabel: "Workers artwork",
    },
    {
      title: "Assistants",
      description: "Design assistants and host them on Halyard's agent runtime.",
      href: "#",
      mediaPlacement: "side",
      mediaLabel: "Assistant conversation",
    },
    {
      title: "Isolates",
      description: "A locked room for code you didn't write yourself.",
      href: "#",
      mediaPlacement: "side",
      mediaLabel: "Isolates artwork",
    },
  ],
};

export default function Demo() {
  return <VercelShipped {...shippedSample} />;
}
