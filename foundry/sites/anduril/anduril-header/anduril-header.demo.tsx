// Sample content lives here (gallery only); the page reuses it.
import { wordmarkSample } from "../anduril-wordmark/anduril-wordmark.demo";
import { AndurilHeader, type AndurilHeaderProps } from "./anduril-header";

export const headerSample: AndurilHeaderProps = {
  wordmark: wordmarkSample,
  links: [
    { label: "Coast", href: "#" },
    { label: "Ground", href: "#" },
    { label: "Sky", href: "#" },
    { label: "Orbit", href: "#" },
    { label: "Meshwork", href: "#" },
    { label: "Foundry", href: "#" },
  ],
  utilities: [
    { label: "Find", href: "#" },
    { label: "About us", href: "#", more: true },
  ],
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[150vh] bg-background pt-[4.5rem]">
      <AndurilHeader {...headerSample} />
      <div className="mx-gutter h-[60vh] rounded-lg bg-muted" />
    </div>
  );
}
