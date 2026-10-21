import { RiopropertyDeals, type RiopropertyDealsProps } from "./rioproperty-deals";

export const dealsSample: RiopropertyDealsProps = {
  heading: "A handful of the deals we've seen through.",
  link: { label: "Browse closed deals", href: "#deals" },
  deals: [
    { name: "Quarry Row", area: "Old Docks", size: "18 400 m² bulk", type: "Development land", status: "Sold", href: "#d1" },
    { name: "Tanner's Lane", area: "Bell Hill", size: "610 m²", type: "Bistro & bar", status: "Sold", href: "#d2" },
    { name: "Ferry Quay", area: "Harbourside", size: "4 900 m²", type: "Offices", status: "Leased", href: "#d3" },
    { name: "Cobb Street", area: "Uptown", size: "2 250 m²", type: "Mixed use", status: "Sold", href: "#d4" },
    { name: "Saltworks Yard", area: "North Flats", size: "7 600 m²", type: "Warehouse", status: "Leased", href: "#d5" },
    { name: "Gull Arcade", area: "Seafront", size: "1 140 m²", type: "Retail", status: "Leased", href: "#d6" },
    { name: "Rope Walk", area: "Old Docks", size: "3 300 m²", type: "Workshops", status: "Valued", href: "#d7" },
  ],
};

export default function Demo() {
  return <RiopropertyDeals {...dealsSample} />;
}
