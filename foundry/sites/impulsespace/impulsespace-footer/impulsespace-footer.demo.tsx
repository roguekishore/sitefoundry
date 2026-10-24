// Sample content lives here (gallery only); the page reuses it. Halyard is made up.
import { ImpulsespaceFooter, type ImpulsespaceFooterProps } from "./impulsespace-footer";

export const footerSample: ImpulsespaceFooterProps = {
  title: "The monthly manifest",
  lede: "One email a month: what flew, what's next on the pad, and where there's room to ride along.",
  emailLabel: "Your email",
  submitLabel: "Sign up",
  columns: [
    {
      title: "Fleet",
      links: [
        { label: "Corvus", href: "#corvus" },
        { label: "Lumen", href: "#lumen" },
        { label: "Shuttle Share", href: "#shuttle" },
        { label: "Proving Ground", href: "#ground" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Method", href: "#method" },
        { label: "Company", href: "#company" },
        { label: "Dispatches", href: "#dispatches" },
        { label: "Jobs", href: "#jobs" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "Get in touch", href: "#contact" },
        { label: "Press kit", href: "#press" },
        { label: "Video log", href: "#video" },
      ],
    },
  ],
  legal: [
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
    { label: "Vendors", href: "#vendors" },
  ],
  copyright: "© 2026 Halyard Orbital",
  wordmark: "Halyard",
};

export default function Demo() {
  return <ImpulsespaceFooter {...footerSample} />;
}
