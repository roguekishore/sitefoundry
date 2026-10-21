import { MarryandbrideFooter, type MarryandbrideFooterProps } from "./marryandbride-footer";

export const footerSample: MarryandbrideFooterProps = {
  wordmark: "wollweise",
  about: [
    "Since 2017 Wollweise has knitted nothing but bridal pieces: soft pullovers, cropped cardigans, shrugs and capes for the cooler hours of a wedding day.",
    "Drawn in Leipzig, knitted by hand in small studios across Europe.",
  ],
  columns: [
    {
      title: "Studio",
      links: [
        { label: "Our story", href: "#story" },
        { label: "Yarns", href: "#yarns" },
        { label: "Stockists", href: "#stockists" },
        { label: "Wholesale", href: "#wholesale" },
        { label: "Write to us", href: "#contact" },
        { label: "Questions", href: "#questions" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Fittings", href: "#fittings" },
        { label: "Paying", href: "#paying" },
        { label: "Orders & delivery", href: "#delivery" },
        { label: "Returns", href: "#returns" },
        { label: "Caring for wool", href: "#care" },
        { label: "Mending", href: "#mending" },
      ],
    },
  ],
  payments: ["Card", "Bank transfer", "Invoice", "Wallet"],
  legal: [
    { label: "Terms", href: "#terms" },
    { label: "Imprint", href: "#imprint" },
    { label: "Privacy", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
    { label: "Sitemap", href: "#sitemap" },
  ],
  social: [
    { label: "Instagram", href: "#instagram" },
    { label: "Threads", href: "#threads" },
    { label: "Pinterest", href: "#pinterest" },
  ],
  copyright: "© Wollweise – 2026",
  credit: "Site by Fernhaus",
};

export default function Demo() {
  return <MarryandbrideFooter {...footerSample} />;
}
