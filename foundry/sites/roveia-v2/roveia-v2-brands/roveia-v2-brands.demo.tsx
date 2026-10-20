// Sample content lives here (gallery only); the page reuses it. Every brand is made up.
import { RoveiaV2Brands, type RoveiaV2BrandsProps } from "./roveia-v2-brands";

export const brandsSample: RoveiaV2BrandsProps = {
  heading: "Chosen by 90+ care brands",
  brands: [
    { name: "Kindred Rx", wordmark: <span className="font-semibold tracking-[0.06em] lowercase">kindred</span>, tags: "Virtual care · Weight", description: "Kindred is an online clinic that pairs adults with licensed prescribers for weight-care plans, start to finish from home." },
    { name: "Solvera", wordmark: <span className="italic">Solvera</span>, tags: "Virtual care · Women's health", description: "Solvera gives women one place for cycle, fertility and menopause care, with clinicians on call and treatments shipped to the door." },
    { name: "Northbay", wordmark: <span className="font-bold tracking-[-0.04em]">northbay</span>, tags: "Virtual care · Longevity", description: "Northbay runs longevity programmes built on regular labs, a care team and a plan that changes as the numbers do." },
    { name: "Pellum", wordmark: <span className="font-extrabold">pellum.rx</span>, tags: "Virtual care · Health tech", description: "Pellum makes prescription weight care simple: a short online check, a video visit and a plan within the week." },
    { name: "Brisa", wordmark: <span className="text-2xl font-extrabold tracking-[0.18em] uppercase">brisa</span>, tags: "Supplements · Sleep", description: "Brisa makes calm, sugar-free sleep blends for people who want to stop counting sheep." },
    { name: "Ondine Health", wordmark: <span className="font-medium">ondine</span>, tags: "Virtual care · Skin", description: "Ondine pairs dermatologists with custom formulas, adjusted every eight weeks as skin changes." },
    { name: "Quietroot", wordmark: <span className="font-light">Quietroot</span>, tags: "Supplements · Focus", description: "Quietroot makes plant-based focus drinks that steady the afternoon without a crash." },
    { name: "Fernwell", wordmark: <span className="italic font-semibold">Fernwell</span>, tags: "Virtual care · Weight", description: "Fernwell is a clinician-led weight programme with coaching, labs and medication when it fits." },
    { name: "Marrow & Oat", wordmark: <span className="font-normal">Marrow&nbsp;&amp;&nbsp;Oat</span>, tags: "Food · Gut health", description: "Marrow & Oat makes broths and grain bowls for gut health, delivered frozen every fortnight." },
    { name: "Lumara", wordmark: <span className="font-mono text-2xl">lumara</span>, tags: "Health tech · Hormones", description: "Lumara is an app and care team for hormone health, with at-home tests and a clinician who reads them." },
    { name: "Thistle Labs", wordmark: <span className="font-bold">Thistle</span>, tags: "Supplements · Joints", description: "Thistle Labs makes joint and mobility formulas tested by a third party, batch by batch." },
    { name: "Wrenfield", wordmark: <span className="font-semibold tracking-[0.1em] uppercase text-2xl">wrenfield</span>, tags: "Supplements · Fitness", description: "Wrenfield builds complete, clinically dosed training stacks, reviewed as one system for strength and recovery." },
  ],
};

export default function Demo() {
  return <RoveiaV2Brands {...brandsSample} />;
}
