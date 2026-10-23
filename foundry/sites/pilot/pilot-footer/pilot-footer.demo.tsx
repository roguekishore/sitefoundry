import { PilotFooter, type PilotFooterProps } from "./pilot-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: PilotFooterProps = {
  brand: { name: "tallyhouse", href: "#" },
  email: "hello@tallyhouse.example",
  groups: [
    { title: "Services", links: ["Bookkeeping", "Back-office support", "Fractional CFO", "Tax filing", "Research credits", "Founder kickstart", "Owner kickstart"].map(l) },
    { title: "Who we serve", links: ["Startups", "Clinics & labs", "Local businesses", "Consultancies", "Design studios", "Legal practices", "Advisory firms", "Shops & brands", "Franchise owners"].map(l) },
    {
      title: "Learn",
      columns: 2,
      links: ["Library", "Journal", "Events", "Product tour", "Glossary", "Vendor list", "Benchmarks", "Yearly planning kit", "Back-office handbook", "Runway calculator", "Founder pay survey", "Filing calendar", "Metrics for owners"].map(l),
    },
    { title: "Company", links: ["About", "How it works", "Careers", "Ledgerline", "Press kit", "Refer a friend", "Questions"].map(l) },
  ],
  copyright: "© Tallyhouse, Inc.",
  legal: ["Terms of use", "Privacy", "Cookies", "Client agreement"].map(l),
  disclaimer:
    "Tallyhouse provides back-office services, including bookkeeping, controller and fractional CFO work.\nTallyhouse is not a licensed public accounting firm and offers no services that require such a licence.",
};

export default function Demo() {
  return <PilotFooter {...footerSample} />;
}
