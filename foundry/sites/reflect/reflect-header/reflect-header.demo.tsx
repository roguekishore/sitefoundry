// Sample content lives here (gallery only); the page reuses it. Nocturne is made up.
import { Orbit } from "lucide-react";
import type { ReflectHeaderProps } from "./reflect-header";
import { ReflectHeader } from "./reflect-header";

export const headerSample: ReflectHeaderProps = {
  name: "Nocturne",
  icon: <Orbit strokeWidth={1.25} />,
  links: [
    { label: "Tour", href: "#" },
    { label: "Plans", href: "#" },
    { label: "People", href: "#" },
    { label: "Journal", href: "#" },
    { label: "What's new", href: "#" },
    { label: "Source", href: "#" },
  ],
  signIn: { label: "Open Nocturne 1", href: "#" },
  action: { label: "Get it", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-background">
      <ReflectHeader {...headerSample} />
    </div>
  );
}
