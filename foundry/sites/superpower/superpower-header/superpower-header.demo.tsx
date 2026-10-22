// Sample content lives here (gallery only); the page reuses it. Kestrel is the fictional
// health membership of this recreation.
import { SuperpowerHeader, type SuperpowerHeaderProps } from "./superpower-header";

/** Kestrel's wordmark: heavy lowercase type, nothing more. */
export function KestrelMark({ className }: { className?: string }) {
  return <span className={`text-[2rem] leading-none font-bold tracking-[-0.055em] ${className ?? ""}`}>kestrel</span>;
}

export const headerSample: SuperpowerHeaderProps = {
  brand: "Kestrel",
  logo: <KestrelMark className="text-[1.75rem] lg:text-[2.125rem]" />,
  links: [
    { label: "The panel", href: "#panel" },
    { label: "Stories", href: "#stories" },
    { label: "Questions", href: "#questions" },
    { label: "For teams", href: "#teams" },
  ],
  cta: { label: "Join Kestrel", href: "#join" },
};

export default function Demo() {
  return (
    <div className="min-h-[150vh] bg-background">
      <SuperpowerHeader {...headerSample} />
      <div className="h-[70vh] bg-muted" />
    </div>
  );
}
