import { NewhaloFooter, type NewhaloFooterProps } from "./newhalo-footer";

export const footerSample: NewhaloFooterProps = {
  groups: [
    { title: "Lumora", links: [{ label: "About", href: "#company" }, { label: "Jobs", href: "#" }] },
    {
      title: "Help",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "Questions", href: "#faq" },
        { label: "Press kit", href: "#media-room" },
      ],
    },
    { title: "Elsewhere", links: [{ label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
  ],
  ctas: [
    { label: "Explore Lumen One", href: "#product" },
    { label: "Pre-order now", href: "#checkout" },
  ],
  legal: [
    { label: "Site terms", href: "#terms-of-use" },
    { label: "Privacy notice", href: "#privacy-policy" },
  ],
  copyright: "© 2026 Lumora Instruments. All rights reserved.",
};

export default function Demo() {
  return (
    <div className="bg-background pt-[50vh]">
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
