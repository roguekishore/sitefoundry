import { Truck } from "lucide-react";
import { FunctionhealthLocations, type FunctionhealthLocationsProps } from "./functionhealth-locations";

export const locationsSample: FunctionhealthLocationsProps = {
  title: ["Trusted labs,", "\n", { accent: "on your schedule" }],
  text: "Draw at one of 2,000+ partner sites nationwide, or book a licensed phlebotomist to come to your home or office.",
  form: { label: "Enter your zip code to see testing options", placeholder: "Zip code", submit: "Check", action: "#" },
  results: { caption: { strong: "Over 60 million results", rest: "delivered to members" }, figure: "60M+" },
  sites: { figure: "2,000+", caption: { strong: "2,000+ draw sites", rest: "across the country" } },
  visit: { icon: <Truck />, text: { strong: "Or we come to you:", rest: "a licensed specialist visits your home or office." } },
};

export default function Demo() {
  return <FunctionhealthLocations {...locationsSample} />;
}
