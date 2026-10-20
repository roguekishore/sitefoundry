import { WiemerHeader, type WiemerHeaderProps } from "./wiemer-header";

export const headerSample: WiemerHeaderProps = {
  brand: "Grundform",
  homeHref: "#",
  cta: { label: "Join the list", href: "#waitlist" },
};

export default function Demo() {
  return (
    <div className="bg-muted">
      <WiemerHeader {...headerSample} />
      <div className="h-[150vh] px-gutter py-16">
        <div className="h-96 rounded-2xl bg-card" />
      </div>
    </div>
  );
}
