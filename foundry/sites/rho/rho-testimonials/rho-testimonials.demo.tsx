import { RhoTestimonials, type RhoTestimonialsProps } from "./rho-testimonials";

export const testimonialsSample: RhoTestimonialsProps = {
  title: "Heard from founders",
  quotes: [
    { quote: "“Our finance lead compared five providers line by line. Ostra was the only one that didn't need a workaround.”", name: "Rafael Okonjo" },
    { quote: "“The fastest support I've had from any vendor, finance or otherwise.”", name: "Lena Marsh" },
    { quote: "“Three years in, two rounds later, and I've never had a reason to look elsewhere.”", name: "Sam Whitlow", handle: "@samwhitlow" },
    { quote: "“They feel like a teammate who happens to run our bank accounts.”", name: "Ines Carvalho" },
    { quote: "“When a wire got stuck on a Friday night, someone picked up the phone and stayed on until it cleared. That's rare.”", name: "Dev Patel" },
    { quote: "“Cards, bills and payroll in one place meant I could finally stop exporting spreadsheets every Monday.”", name: "Marta Ilves", handle: "@martailves" },
  ],
  prevLabel: "Previous quote",
  nextLabel: "Next quote",
};

export default function Demo() {
  return <RhoTestimonials {...testimonialsSample} />;
}
