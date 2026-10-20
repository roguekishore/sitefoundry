import { PlumeformV2Heading } from "./plumeform-v2-heading";

export default function Demo() {
  return (
    <div>
      <div className="bg-background px-gutter py-16">
        <PlumeformV2Heading
          className="mx-auto max-w-page"
          eyebrow="Two ways to reply"
          title="A question per screen. Or the whole page."
          body="Let people step through one prompt at a time, or scroll a single page of them."
        />
      </div>
      <div className="dark bg-background px-gutter py-16">
        <PlumeformV2Heading align="center" eyebrow="Clean data" title="Careful answers, checked for you." />
      </div>
    </div>
  );
}
