import { LithicArrowLink } from "./lithic-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-8 p-8 text-base">
      <LithicArrowLink href="#">Open the test bench</LithicArrowLink>
      <LithicArrowLink href="#">Read the guides</LithicArrowLink>
      <LithicArrowLink href="#" tone="highlight" className="text-sm">
        Find out more
      </LithicArrowLink>
    </div>
  );
}
