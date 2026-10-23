import { ZettaJouleService, type ZettaJouleServiceProps } from "./zetta-joule-service";

export const serviceSample: ZettaJouleServiceProps = {
  heading: "Heat as a\nService",
  paragraphs: [
    "We offer customers a menu of financing and operating options, including buying heat and power without owning the plant.",
    "Under this heat-as-a-service model we build, own, operate and staff the reactor, so customers never have to run a nuclear plant themselves.",
  ],
  cta: { label: "Contact Our Team", href: "#" },
};

export default function Demo() {
  return <ZettaJouleService {...serviceSample} />;
}
