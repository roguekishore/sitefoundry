// Sample content lives here (gallery only); the page reuses it. Every brand is made up.
import { RoveiaBrands, type RoveiaBrandsProps } from "./roveia-brands";

export const brandsSample: RoveiaBrandsProps = {
  heading: "Chosen by 90+ care teams",
  brands: [
    { name: "Alder Clinic", logo: <span className="italic font-light">alder</span>, tags: "Virtual Care · Sleep", description: "Alder is an online sleep clinic pairing people with specialists, at-home studies and ongoing follow-up, all without a waiting room." },
    { name: "Juniper Rx", logo: <span className="font-semibold tracking-wide">JUNIPER</span>, tags: "Virtual Care · Skin", description: "Juniper prescribes personalised skincare after a short photo consult with a licensed dermatologist, shipped monthly." },
    { name: "Saltmarsh", logo: <span className="font-light">saltmarsh</span>, tags: "Wellness Goods · Hydration", description: "Saltmarsh makes low-sugar electrolyte mixes for long training days, sold by subscription and in climbing gyms." },
    { name: "Fennel Labs", logo: <span className="font-medium tracking-tight">fennel</span>, tags: "Wellness Goods · Gut Health", description: "Fennel Labs builds fibre and probiotic blends tested in small clinical runs before they reach the shelf." },
    { name: "Calder Care", logo: <span className="font-extralight tracking-widest">CALDER</span>, tags: "Care Software · Coaching", description: "Calder's app matches people with health coaches for weekly check-ins, habits and gentle accountability." },
    { name: "Brightleaf", logo: <span className="font-semibold">brightleaf</span>, tags: "Wellness Goods · Teas", description: "Brightleaf blends caffeine-free evening teas with herbs chosen for calm, packed in compostable tins." },
    { name: "Moorfield", logo: <span className="italic">Moorfield</span>, tags: "Virtual Care · Weight", description: "Moorfield runs a doctor-led weight programme with nutrition plans, check-ins and medication where it fits." },
    { name: "Tidewell", logo: <span className="text-xl font-bold tracking-[0.2em]">TIDEWELL</span>, tags: "Care Software · Recovery", description: "Tidewell guides physiotherapy at home with short daily sessions and a therapist who reviews progress." },
    { name: "Quarry Health", logo: <span className="font-semibold">quarry</span>, tags: "Virtual Care · Men's Health", description: "Quarry offers discreet consults and treatment plans for men, with clinicians on call every evening." },
    { name: "Linden & Co", logo: <span className="font-light tracking-wide">Linden&amp;Co</span>, tags: "Wellness Goods · Vitamins", description: "Linden & Co sells simple, third-party-tested daily vitamins in refillable glass jars." },
  ],
};

export default function Demo() {
  return <RoveiaBrands {...brandsSample} />;
}
