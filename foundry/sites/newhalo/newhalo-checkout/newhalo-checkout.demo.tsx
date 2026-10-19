import { Orbit } from "lucide-react";
import { NewhaloCheckout, type NewhaloCheckoutProps } from "./newhalo-checkout";

export const checkoutSample: NewhaloCheckoutProps = {
  brand: "Brio",
  brandIcon: <Orbit strokeWidth={2.25} />,
  brandHref: "#",
  steps: ["About you", "How many", "Contact", "Done"],
  title: "Who is the kit for?",
  intro: "Put your name down for Lumen One. It suits solo dentists, group practices and teaching clinics alike.",
  name: "who",
  choices: ["Just me", "My practice", "A school or clinic"],
  continueLabel: "Next",
};

export default function Demo() {
  return <NewhaloCheckout {...checkoutSample} />;
}
