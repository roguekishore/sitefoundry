// Sample content (gallery only); the page reuses it. Calder Academy is a made-up school.
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthHeader, type InstituteofhealthHeaderProps } from "./instituteofhealth-header";

/** The stand-in wordmark: plain caps in the display face. */
export function CalderMark({ className }: { className?: string }) {
  return <span className={cn("font-display text-[1.4rem] leading-none font-semibold tracking-[0.02em]", className)}>CALDER</span>;
}

export const headerSample: InstituteofhealthHeaderProps = {
  brand: <CalderMark />,
  links: [
    { label: "Programmes", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "Graduates", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Questions", href: "#" },
  ],
  sideLinks: [
    { label: "Our story", href: "#" },
    { label: "Get in touch", href: "#" },
  ],
  action: { label: "Learner portal", href: "#" },
  menuLabel: "Menu",
  closeLabel: "Close",
};

export default function Demo() {
  return (
    <div className="min-h-[40rem] bg-muted-foreground">
      <InstituteofhealthHeader {...headerSample} />
    </div>
  );
}
