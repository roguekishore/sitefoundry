// Sample content (gallery only); the page reuses it. Juniper is a made-up health app.
import { Smartphone, Sprout } from "lucide-react";
import { BevelHeader, type BevelHeaderProps } from "./bevel-header";

export const headerSample: BevelHeaderProps = {
  brand: (
    <>
      <Sprout strokeWidth={2.25} />
      Juniper
    </>
  ),
  links: [
    { label: "Story", href: "#" },
    { label: "Sign in", href: "#" },
  ],
  cta: { label: "Get the app", href: "#", icon: <Smartphone strokeWidth={2.25} /> },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="relative min-h-60 bg-linear-to-b from-accent to-background">
      <BevelHeader {...headerSample} className="absolute" />
    </div>
  );
}
