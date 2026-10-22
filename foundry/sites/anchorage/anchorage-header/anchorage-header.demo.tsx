// Sample content lives here (gallery only); the page reuses it.
import { markSample } from "../anchorage-mark/anchorage-mark.demo";
import { AnchorageHeader, type AnchorageHeaderProps } from "./anchorage-header";

export const headerSample: AnchorageHeaderProps = {
  mark: markSample,
  links: [
    { label: "Products", href: "#" },
    { label: "Clients", href: "#" },
    { label: "Case notes", href: "#" },
    { label: "Library", href: "#" },
    { label: "About us", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  cta: { label: "Talk to us", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[150vh] bg-background">
      <AnchorageHeader {...headerSample} overlay={false} />
    </div>
  );
}
