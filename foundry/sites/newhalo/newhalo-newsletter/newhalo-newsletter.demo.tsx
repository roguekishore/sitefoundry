import { NewhaloNewsletter, type NewhaloNewsletterProps } from "./newhalo-newsletter";

export const newsletterSample: NewhaloNewsletterProps = {
  title: "Follow along as we build it.",
  emailLabel: "Work email",
  consent: (
    <>
      Yes, send me the occasional update. Brio handles my details as set out in the <a href="#privacy-policy">privacy notice</a> and the{" "}
      <a href="#terms-of-use">site terms</a>.
    </>
  ),
  submitLabel: "Count me in",
};

export default function Demo() {
  return <NewhaloNewsletter {...newsletterSample} />;
}
