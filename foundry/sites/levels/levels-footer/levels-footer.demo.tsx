import { LevelsFooter, type LevelsFooterProps } from "./levels-footer";

export const footerSample: LevelsFooterProps = {
  brand: "Ballast",
  newsletter: {
    title: "Get the newsletter",
    text: "Monthly notes, new research, member offers and the odd recipe.",
    placeholder: "you@inbox.com",
    button: "Sign up",
    fieldLabel: "Email address",
  },
  columns: [
    { title: "Product", links: [{ label: "What we track", href: "#" }, { label: "For teams", href: "#" }] },
    {
      title: "Company",
      links: [
        { label: "Jobs", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Press kit", href: "#" },
        { label: "Get in touch", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Help centre", href: "#" },
        { label: "Journal", href: "#" },
        { label: "Give Ballast", href: "#" },
        { label: "Returns", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Ballast Health Co.",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  disclaimer:
    "Ballast and its products and services are meant to support a healthy lifestyle only. They are not for diagnosing, treating, curing or preventing any disease or condition, and must never be used to decide on medication or dosing.",
};

export default function Demo() {
  return <LevelsFooter {...footerSample} />;
}
