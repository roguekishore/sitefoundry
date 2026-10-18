// Sample content lives here (gallery only); the page reuses it.
import { Waves } from "lucide-react";
import { ClerkBilling, type ClerkBillingProps } from "./clerk-billing";

export const billingSample: ClerkBillingProps = {
  heading: {
    eyebrow: "Payments",
    title: ["Subscriptions,", "minus the plumbing"],
    text: "Charge for your B2C or B2B product without writing checkout code, custom screens or webhook handlers. Drop in a few components and start collecting recurring revenue.",
  },
  listTitle: "What you get from the start:",
  list: ["Plans you can edit any time", "One record for people and payments", "Features unlocked by plan"],
  link: { label: "See payment features", href: "#payments" },
  window: {
    title: "Tidewater",
    mark: <Waves strokeWidth={2} />,
    nav: ["Product", "Plans", "Apps", "Journal"],
    avatar: <span className="flex size-6 items-center justify-center rounded-full bg-linear-to-br from-chart-2/40 to-chart-1/30 text-[0.5625rem] font-semibold text-foreground/70">EV</span>,
    heading: "Plans that grow with Tidewater",
    subheading: "Try it free for 30 days. No card needed.",
    plans: [
      {
        name: "Crew",
        price: "$12",
        period: "/ month",
        toggle: "Billed yearly",
        cta: "Choose Crew",
        features: ["Your own branding", "Phone and tablet apps", "Nightly backups", "Shared boards", "Basic file review"],
      },
      {
        name: "Fleet",
        price: "$29",
        period: "/ month",
        toggle: "Billed yearly",
        cta: "Choose Fleet",
        features: ["All of Crew", "Unlimited boards", "Priority help, day and night", "Deeper reports", "Central admin console"],
      },
    ],
  },
};

export default function Demo() {
  return <ClerkBilling {...billingSample} />;
}
