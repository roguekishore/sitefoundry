import { NewhaloWaitlistCta, type NewhaloWaitlistCtaProps } from "./newhalo-waitlist-cta";

export const waitlistSample: NewhaloWaitlistCtaProps = {
  title: "Save your spot",
  steps: ["Put your name down", "We call to plan your kit with you.", "Lumen One is due to ship in spring 2027."],
  cta: { label: "Save my spot", href: "#checkout" },
};

export default function Demo() {
  return <NewhaloWaitlistCta {...waitlistSample} />;
}
