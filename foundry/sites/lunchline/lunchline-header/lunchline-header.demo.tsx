import { LunchlineHeader, type LunchlineHeaderProps } from "./lunchline-header";

export const headerSample: LunchlineHeaderProps = {
  brand: ["ferrybank", "holdings"],
  homeHref: "#home",
  menuLabel: "Open menu",
  closeLabel: "Close menu",
  links: [
    { label: "Home", href: "#home" },
    { label: "Story", href: "#story" },
    { label: "Beliefs", href: "#beliefs" },
    { label: "Method", href: "#method" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <LunchlineHeader {...headerSample} />
      <div id="home" className="h-svh bg-foreground/85" />
      <div id="story" className="h-[120svh]" />
    </div>
  );
}
