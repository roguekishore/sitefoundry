import { KononenkogroupHeader, type KononenkogroupHeaderProps } from "./kononenkogroup-header";

export const headerSample: KononenkogroupHeaderProps = {
  wordmark: ["Aldermoor", "Spatial", "Practice"],
  homeHref: "#top",
  links: [
    { label: "Index", href: "#top", active: true, desktopOnly: true },
    { label: "Projects", href: "#projects" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupHeader {...headerSample} />
      <div className="h-svh bg-muted" />
      <div className="h-svh" />
      <div className="dark h-svh bg-background" />
    </div>
  );
}
