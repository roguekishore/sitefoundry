import { AtSign, Globe, Mail, Rss, Smartphone } from "lucide-react";
import { SlashFooter, type SlashFooterProps } from "./slash-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: SlashFooterProps = {
  wordmark: "Ferro",
  groups: [
    { title: "Company", links: links(["Questions", "Jobs", "About", "Journal", "Engineering", "Stories", "Security", "Help", "Legal", "Privacy"]) },
    { title: "Products", links: links(["Company cards", "Business accounts", "Digital dollars", "Treasury", "Financing", "Euro accounts", "Invoices"]) },
    { title: "Industries", links: links(["Online shops", "Studios", "Builders", "Clinics", "Wholesale", "Travel", "Startups"]) },
    { title: "Platform", links: links(["Many entities", "Bookkeeping", "Expenses", "API", "Global payments", "Reports"]) },
    { title: "Tools", links: links(["Fee calculator", "IBAN checker", "Expense types", "Compare banks", "Bank codes", "Card decline codes", "Invoice maker"]) },
  ],
  copyright: "© Ferro Financial. All rights reserved",
  cookies: { label: "Cookie settings", href: "#" },
  socials: [
    { label: "Ferro on the web", href: "#", icon: <Globe aria-hidden strokeWidth={1.75} /> },
    { label: "Ferro handle", href: "#", icon: <AtSign aria-hidden strokeWidth={1.75} /> },
    { label: "Ferro journal feed", href: "#", icon: <Rss aria-hidden strokeWidth={1.75} /> },
    { label: "Email Ferro", href: "#", icon: <Mail aria-hidden strokeWidth={1.75} /> },
  ],
  app: { href: "#", icon: <Smartphone aria-hidden className="size-6" strokeWidth={1.5} />, small: "Get it on your phone", big: "Ferro app" },
  legal: [
    "1. Ferro Financial, Inc. is a financial technology company, not a bank. Banking services are provided by our partner banks, members of their national deposit schemes. Ferro cards are issued by our partner banks under licence from the card network. Card balances are due in full each month and plan fees may apply. Cash back eligibility is set out in the Ferro terms.",
    "2. Deposit cover only protects against the failure of a covered bank. Balances are placed with banks in our partners' sweep network, subject to the terms of the sweep agreement.",
    "3. Digital-dollar services are provided with third-party partners. Digital dollars are not bank deposits and are not covered by deposit insurance. Eligibility limits apply and transfers may not be reversible.",
    "4. Financing is offered by independent lending partners, subject to their credit approval, revenue requirements and terms.",
    "5. Advertised yield is the best net yield available in Ferro Treasury on the last business day and changes with the market. Investing involves risk, including loss of principal.",
  ],
  address: ["Ferro Financial, Inc.", "88 Harbour Row, Suite 400, Portland OR 97201"],
};

export default function Demo() {
  return <SlashFooter {...footerSample} />;
}
