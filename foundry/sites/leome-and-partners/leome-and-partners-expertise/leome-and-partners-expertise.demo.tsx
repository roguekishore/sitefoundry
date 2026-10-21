import { LeomeAndPartnersExpertise, type LeomeAndPartnersExpertiseProps } from "./leome-and-partners-expertise";

export const expertiseSample: LeomeAndPartnersExpertiseProps = {
  title: ["What we", "advise on"],
  link: { label: "All practice areas", href: "#practice" },
  areas: [
    { number: "01", title: "Commercial", href: "#commercial" },
    { number: "02", title: "Workplace", href: "#workplace" },
    { number: "03", title: "Property", href: "#property" },
    { number: "04", title: "Data & IP", href: "#data-ip" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <LeomeAndPartnersExpertise {...expertiseSample} />
      <div className="h-[50svh]" />
    </div>
  );
}
