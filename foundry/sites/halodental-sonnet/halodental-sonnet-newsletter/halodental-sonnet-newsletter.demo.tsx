// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetNewsletter, type HalodentalSonnetNewsletterProps } from "./halodental-sonnet-newsletter";

export const newsletterSample: HalodentalSonnetNewsletterProps = {
  title: ["Stay in touch with", "our progress."],
  emailLabel: "*Email address",
  consent: (
    <>
      By signing up to the newsletter, I agree to Gleam processing my personal data in line with the{" "}
      <a href="#" className="underline">
        privacy policy
      </a>{" "}
      and{" "}
      <a href="#" className="underline">
        terms of use
      </a>
      .
    </>
  ),
  submitLabel: "Keep me posted",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <HalodentalSonnetNewsletter {...newsletterSample} />
    </div>
  );
}
