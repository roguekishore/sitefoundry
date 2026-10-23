// Sample content lives here (gallery only); the page reuses it. Tessel is made up; the payment
// chips are plain icons, not anyone's logo.
import { Banknote, CreditCard, Landmark, QrCode, Smartphone, Wallet } from "lucide-react";
import { OuraringFooter, type OuraringFooterProps } from "./ouraring-footer";

export const footerSample: OuraringFooterProps = {
  logo: "Tessel",
  payments: [
    {
      caption: "One-tap checkout",
      methods: [
        { icon: <Wallet strokeWidth={1.75} />, label: "Digital wallet" },
        { icon: <Smartphone strokeWidth={1.75} />, label: "Phone pay" },
        { icon: <QrCode strokeWidth={1.75} />, label: "Scan to pay" },
      ],
    },
    {
      caption: "All major cards",
      methods: [
        { icon: <CreditCard strokeWidth={1.75} />, label: "Credit card" },
        { icon: <Banknote strokeWidth={1.75} />, label: "Debit card" },
        { icon: <Landmark strokeWidth={1.75} />, label: "Bank transfer" },
      ],
    },
  ],
  newsletter: {
    title: "Get notes, guides and offers from Tessel",
    placeholder: "Email address",
    submitLabel: "Subscribe",
    note: (
      <>
        We look after your data. See how in our <a href="#">Privacy Notice</a>.
      </>
    ),
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Tessel", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Science Board", href: "#" },
        { label: "Press Room", href: "#" },
        { label: "Jobs", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Member Help", href: "#", external: true },
        { label: "Ring Sizing", href: "#" },
        { label: "Ring Recycling", href: "#", external: true },
        { label: "HSA & FSA", href: "#" },
        { label: "Heart Rhythm", href: "#" },
        { label: "Your Orders", href: "#" },
        { label: "Get in Touch", href: "#" },
      ],
    },
    {
      title: "Work With Us",
      links: [
        { label: "For Teams", href: "#", external: true },
        { label: "Developers", href: "#" },
      ],
    },
    {
      title: "Follow",
      links: [
        {
          label: (
            <>
              The <em>Journal</em>
            </>
          ),
          href: "#",
        },
        { label: "Instagram", href: "#" },
        { label: "Threads", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "TikTok", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ],
  legal: [
    { label: "Terms of Sale", href: "#" },
    { label: "Privacy Notice", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Trademarks", href: "#" },
    { label: "Trust & Security", href: "#" },
  ],
  copyright: "© 2026 Tessel Labs Ltd. All rights reserved. Tessel and Tessel Loop are trademarks of Tessel Labs Ltd.",
  language: { label: "English", href: "#" },
};

export default function Demo() {
  return <OuraringFooter {...footerSample} />;
}
