import type { RhoEmailFormProps } from "./rho-email-form";
import { RhoEmailForm } from "./rho-email-form";

export const emailFormSample: RhoEmailFormProps = {
  placeholder: "Company email",
  buttonLabel: "Get started",
  inputLabel: "Your company email",
  action: "#",
};

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <RhoEmailForm {...emailFormSample} className="max-w-[27.5rem]" />
      <div className="dark rounded-lg bg-background p-6">
        <RhoEmailForm {...emailFormSample} name="email-dark" className="max-w-[27.5rem]" />
      </div>
    </div>
  );
}
