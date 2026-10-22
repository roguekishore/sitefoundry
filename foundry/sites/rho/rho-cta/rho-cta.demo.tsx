import { RhoCta, type RhoCtaProps } from "./rho-cta";

export const ctaSample: RhoCtaProps = {
  title: "Start whenever suits you.",
  lead: "Open an account in a few minutes and see why lean teams keep their books on Ostra.",
  form: { placeholder: "Company email", buttonLabel: "Get started", inputLabel: "Your company email", action: "#", name: "email-cta" },
  fineprint: "Ostra is a made-up company for this demo. No account, card or deposit product is offered, and no bank is named.",
};

export default function Demo() {
  return <RhoCta {...ctaSample} />;
}
