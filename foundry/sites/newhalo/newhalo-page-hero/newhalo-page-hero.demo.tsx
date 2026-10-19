import { NewhaloPageHero, type NewhaloPageHeroProps } from "./newhalo-page-hero";

const contactLink = { label: "Write to us", href: "#contact" };

export const faqHeroSample: NewhaloPageHeroProps = {
  title: "Ask us anything.",
  aside: { title: "Didn't find what you came for?", link: contactLink },
};
export const contactHeroSample: NewhaloPageHeroProps = { title: "Say hello", detail: "hello@brio.example", withMedia: true };
export const companyHeroSample: NewhaloPageHeroProps = { title: "A lighter dental visit", withMedia: true };
export const mediaRoomHeroSample: NewhaloPageHeroProps = { title: "Press kit", aside: { title: "Need something we haven't posted?", link: contactLink } };
export const termsHeroSample: NewhaloPageHeroProps = { title: "Site terms", aside: { link: contactLink } };
export const privacyHeroSample: NewhaloPageHeroProps = { title: "How we handle data", aside: { title: "Questions about your data?", link: contactLink } };
export const pricingHeroSample: NewhaloPageHeroProps = {
  title: "Get on the list",
  steps: [
    { title: "Pre-order", text: "Hold your place. Nothing to pay today." },
    { title: "Fit it out", text: "We call to settle the details with you." },
    { title: "Unbox", text: "Your Lumen One kit arrives at the practice." },
  ],
};

export default function Demo() {
  return <NewhaloPageHero {...faqHeroSample} />;
}
