// Sample content lives here (gallery only); the page reuses it.
import { MercuryFooter, type MercuryFooterProps } from "./mercury-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: MercuryFooterProps = {
  groups: [
    { title: "Accounts", links: links("Checking and savings", "Reserve", "Company cards", "Credit lines", "Personal") },
    { title: "Product", links: links("Plans", "Moving to Larkspur", "Dashboard", "Reports", "Developer API", "Security", "System status") },
    { title: "Learn", links: links("Help centre", "Field guide", "Journal", "Calculators", "Events", "Starting a company", "Release notes") },
    { title: "Money ops", links: links("Payments", "Bills", "Invoices", "Spend rules", "Bookkeeping", "Integrations") },
    { title: "Built for", links: links("Online shops", "Studios and agencies", "Software", "Funds", "Clinics", "Builders") },
    { title: "Your account", links: links("Open an account", "Sign in", "iPhone app", "Android app") },
    { title: "Company", links: links("How it works", "Our story", "Jobs", "Partners", "Contact", "Legal", "Privacy") },
    { title: "Elsewhere", links: links("Newsletter", "LinkedIn", "YouTube", "Instagram") },
  ],
  legalTitle: "Notes and disclosures",
  legalIntro: "Larkspur is a fictional company invented for this design sample. It is not a bank, offers no accounts and holds no money.",
  notes: [
    "Figures on this page are made up to show how the layout handles real-looking numbers.",
    "The reserve yield is an example only and is not an offer of any kind.",
    "Card and credit details are placeholders; no card is issued and no credit is extended.",
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryFooter {...footerSample} />
    </div>
  );
}
