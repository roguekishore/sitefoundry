import { NewhaloPricingIntegration, type NewhaloPricingIntegrationProps } from "./newhalo-pricing-integration";

export const integrationSample: NewhaloPricingIntegrationProps = {
  title: "Fits right in",
  slides: [
    { title: "Plug in and go", text: "A swivelling tablet arm lets patients follow along whether they sit up or lie back. One short install on your existing chair and you are sharing the view." },
    { title: "Your records, your way", text: "Pictures leave the app as ordinary files, ready for the patient record in your current software." },
    { title: "A dock on the counter", text: "Six batteries charge side by side, so a fresh one is always a second away." },
  ],
  controlLabels: { previous: "Previous point", next: "Next point" },
};

export default function Demo() {
  return <NewhaloPricingIntegration {...integrationSample} />;
}
