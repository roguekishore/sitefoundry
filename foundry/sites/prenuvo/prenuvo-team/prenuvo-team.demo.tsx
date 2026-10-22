import { PrenuvoTeam, type PrenuvoTeamProps } from "./prenuvo-team";

export const teamSample: PrenuvoTeamProps = {
  id: "team",
  title: "Clinicians who do the research, read every scan, and stay with you after it",
  body: "Oriel's care network* brings together over 180 specialists: radiologists, imaging technologists, prevention doctors and nurse practitioners, there at each step from booking to follow-up.",
  footnote: "*Independent clinical groups that provide medical services to Oriel members under contract.",
  cta: { label: "Meet the clinicians", href: "#clinicians" },
  portraits: [null, null, null, null, null, null, null],
  partners: [
    { name: "Harbourline Medical" },
    { name: "Westmere Institute" },
    { name: "Calder University" },
    { name: "Ashgrove Health" },
    { name: "Northfold College" },
    { name: "Pinecrest Clinic" },
    { name: "Ridgeway Hospital" },
    { name: "Elmstead School" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-muted pt-16">
      <PrenuvoTeam {...teamSample} />
    </div>
  );
}
