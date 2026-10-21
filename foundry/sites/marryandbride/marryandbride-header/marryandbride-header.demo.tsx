import { MarryandbrideHeader, type MarryandbrideHeaderProps } from "./marryandbride-header";

export const headerSample: MarryandbrideHeaderProps = {
  wordmark: "wollweise",
  homeHref: "#top",
  leftLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Atelier edit", href: "#atelier-edit" },
  ],
  rightLinks: [
    { label: "Our studio", href: "#studio" },
    { label: "Sign in", href: "#account" },
  ],
  wishlist: { href: "#wishlist", label: "Wish list", count: 0 },
  bag: { href: "#bag", label: "Bag", count: 0 },
  menuLabel: "Open menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <MarryandbrideHeader {...headerSample} />
      <div className="h-svh bg-foreground/75" />
      <div className="h-[150svh]" />
    </div>
  );
}
