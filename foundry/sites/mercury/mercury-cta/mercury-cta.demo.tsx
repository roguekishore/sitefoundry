// Sample content lives here (gallery only); the page reuses it.
import { MercuryCta, type MercuryCtaProps } from "./mercury-cta";

export const ctaSample: MercuryCtaProps = {
  title: ["Banking, rebuilt", "from first principles."],
  primary: { label: "Open an account", href: "#" },
  secondary: { label: "Talk to us", href: "#", external: true },
  cards: [
    {
      title: "Larkspur for companies",
      text: "Free business banking that covers the everyday and the unusual, from first hire to fiftieth.",
      action: { label: "Take the tour", href: "#", external: true },
    },
    {
      title: "Larkspur for people",
      text: "A personal account with a strong savings rate, shared accounts and free transfers at home.",
      action: { label: "Find out more", href: "#" },
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryCta {...ctaSample} />
    </div>
  );
}
