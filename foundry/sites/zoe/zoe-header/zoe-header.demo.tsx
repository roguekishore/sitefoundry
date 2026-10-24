import { ZoeHeader, type ZoeHeaderProps } from "./zoe-header";

export const headerSample: ZoeHeaderProps = {
  brand: { name: "tillwell", href: "#" },
  announcement: { text: "Snack smarter. Meet the new", link: { label: "Fibre Crunch Bar.", href: "#" } },
  links: [
    {
      label: "Products",
      href: "#",
      children: [
        { label: "Plantful 40", href: "#" },
        { label: "Tillwell App", href: "#" },
        { label: "Fibre Crunch Bar", href: "#", badge: "New" },
      ],
    },
    { label: "Research", href: "#" },
    { label: "Read", href: "#" },
    { label: "Midlife Check", href: "#" },
    { label: "Watch the series", href: "#" },
    { label: "Help", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  menuLabels: { open: "Open the menu", close: "Close the menu" },
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background">
      <ZoeHeader {...headerSample} />
    </div>
  );
}
