// The institutions are made up; each gets its own type so the row reads like a set of marks.
import { Landmark, Shield } from "lucide-react";
import { SuperpowerCredentials, type SuperpowerCredentialsProps, type SuperpowerInstitution } from "./superpower-credentials";

export const institutionsSample: SuperpowerInstitution[] = [
  { name: "Halvorsen", mark: <span className="font-serif text-[1.875rem] leading-none tracking-[-0.01em]">Halvorsen</span> },
  {
    name: "Ashgrove Medical College",
    mark: (
      <span className="flex items-center gap-1.5">
        <Shield className="size-7" strokeWidth={1.25} aria-hidden />
        <span className="flex flex-col font-serif leading-none whitespace-nowrap">
          <span className="text-[1.1rem] tracking-[0.06em] uppercase">Ashgrove</span>
          <span className="text-[0.55rem] tracking-[0.2em] uppercase">Medical College</span>
        </span>
      </span>
    ),
  },
  { name: "NWMC", mark: <span className="text-[1.875rem] leading-none font-black tracking-[-0.08em]">NWMC</span> },
  {
    name: "University of Kellmere",
    mark: (
      <span className="flex items-center gap-1.5">
        <Landmark className="size-6" strokeWidth={1.25} aria-hidden />
        <span className="flex flex-col font-serif leading-none whitespace-nowrap">
          <span className="text-[0.5rem] tracking-[0.18em] uppercase">University of</span>
          <span className="text-[1.15rem] tracking-[0.04em] uppercase">Kellmere</span>
        </span>
      </span>
    ),
  },
];

export const credentialsSample: SuperpowerCredentialsProps = {
  claim: "Shaped by leading physicians and lab scientists",
  portraits: [undefined, undefined, undefined],
  institutions: institutionsSample,
};

export default function Demo() {
  return <SuperpowerCredentials {...credentialsSample} />;
}
