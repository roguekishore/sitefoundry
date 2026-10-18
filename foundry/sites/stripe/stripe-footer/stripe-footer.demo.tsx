// Sample content lives here (gallery only); the page reuses it.
import { StripeFooter, type StripeFooterProps } from "./stripe-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: `/${label.toLowerCase().replace(/[^a-z]+/g, "-")}` }));

export const footerSample: StripeFooterProps = {
  brand: "fernpay",
  columns: [
    [
      {
        title: "Products",
        links: links([
          "Pricing", "Payments", "Checkout", "Payment links", "Terminal", "Billing", "Invoices", "Cards",
          "Payouts", "Lending", "Risk", "Identity", "Tax", "Reporting", "Treasury", "Connect", "Data sync",
        ]),
      },
    ],
    [
      {
        title: "Use cases",
        links: links([
          "Enterprise", "Startups", "Marketplaces", "Platforms", "SaaS", "E-commerce", "Retail", "Subscriptions",
          "AI companies", "Creators", "Education", "Healthcare", "Travel", "Non-profits", "Public sector",
        ]),
      },
      { title: "Developers", links: links(["Docs", "API reference", "Status", "Changelog", "SDKs", "Developer blog"]) },
    ],
    [
      { title: "Partners", links: links(["App directory", "Partner network", "Launch services"]) },
      {
        title: "Resources",
        links: links(["Roadmap", "Guides", "Customer stories", "Blog", "Community", "Events", "Privacy", "Terms", "Sitemap", "Cookie settings"]),
      },
    ],
    [
      { title: "Company", links: links(["About", "Careers", "Press", "fernpay Books", "Talk to us"]) },
      { title: "Help", links: links(["Get help", "Support plans"]) },
    ],
  ],
  action: { label: "Log in", href: "/login" },
  locale: { label: "India (English)", href: "/locale" },
  copyright: "© 2026 Fernpay Ltd.",
};

export default function Demo() {
  return <StripeFooter {...footerSample} />;
}
