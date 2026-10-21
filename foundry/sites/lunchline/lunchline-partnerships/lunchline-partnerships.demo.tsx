import { LunchlinePartnerships, type LunchlinePartnershipsProps } from "./lunchline-partnerships";

export const partnershipsSample: LunchlinePartnershipsProps = {
  id: "portfolio",
  eyebrow: "Portfolio",
  visitLabel: "Visit site",
  items: [
    { name: "Kestrel Early Years", description: "A family-run group of nurseries and pre-schools, now in four regions.", href: "#kestrel" },
    { name: "Harbour Row Property", description: "Owns and looks after the buildings our childcare and education companies work from.", href: "#harbour-row", badge: "sold" },
    { name: "Lantern Tutoring Co.", description: "After-school tutoring and holiday clubs, franchised to local operators across the country.", href: "#lantern" },
    { name: "Northgate Cover", description: "Plain-spoken business insurance for small and mid-sized firms, sold through local brokers.", href: "#northgate" },
    { name: "Saltmarsh Moorings", description: "Runs well-kept marinas and boatyards on three coasts, with more than 5,000 berths and dry-stack spaces.", href: "#saltmarsh" },
    { name: "Willowmere Home Care", description: "Nurses and carers who visit people at home for long-term and specialist treatment.", href: "#willowmere" },
    { name: "Quarrystone Engineering", description: "Design and survey engineering for wind and solar sites, grid upgrades and the public works that connect them.", badge: "sold" },
  ],
};

export default function Demo() {
  return <LunchlinePartnerships {...partnershipsSample} />;
}
