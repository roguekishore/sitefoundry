// Pricing page (recreating plumeform.com/pricing): the plans with the comparison table, the
// questions, the dark closing card and the footer.
import { PlumeformCta } from "@foundry/plumeform-cta";
import { PlumeformFaq } from "@foundry/plumeform-faq";
import { PlumeformFooter } from "@foundry/plumeform-footer";
import { PlumeformHeader } from "@foundry/plumeform-header";
import { PlumeformPricing } from "@foundry/plumeform-pricing";
import { ctaSample } from "../plumeform-cta/plumeform-cta.demo";
import { faqPricingSample } from "../plumeform-faq/plumeform-faq.demo";
import { footerSample } from "../plumeform-footer/plumeform-footer.demo";
import { headerSample } from "../plumeform-header/plumeform-header.demo";
import { compareTableSample, plansSample } from "../plumeform-pricing/plumeform-pricing.demo";

export default function PricingPage() {
  return (
    <div className="relative bg-background">
      <PlumeformHeader {...headerSample} />
      <PlumeformPricing
        as="h1"
        eyebrow="Pricing"
        title="Two plans. Simple sums."
        intro="Start with 150 answers a month on Free. Plus includes 8,000 answers and up to four teachers for $12 a month."
        plans={plansSample}
        compare={{
          ...compareTableSample,
          title: "List prices, side by side.",
          links: {
            lead: "Want the long version?",
            items: [
              { label: "Tidewell vs Quizzard", href: "#vs-quizzard" },
              { label: "vs Classpoll", href: "#vs-classpoll" },
              { label: "vs Markwise", href: "#vs-markwise" },
              { label: "vs Slatebox", href: "#vs-slatebox" },
            ],
          },
        }}
        className="pt-[calc(3.75rem+3.5rem)] lg:pt-[calc(3.75rem+4rem)]"
      />
      <PlumeformFaq {...faqPricingSample} className="pt-8 lg:pt-12" />
      <PlumeformCta {...ctaSample} />
      <PlumeformFooter {...footerSample} />
    </div>
  );
}
