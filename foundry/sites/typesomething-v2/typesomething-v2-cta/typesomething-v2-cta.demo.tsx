import { TypesomethingV2Wordmark } from "@foundry/typesomething-v2-wordmark";
import type { TypesomethingV2CtaProps } from "./typesomething-v2-cta";
import { TypesomethingV2Cta } from "./typesomething-v2-cta";

export const ctaSample: TypesomethingV2CtaProps = {
  id: "start",
  title: (
    <>
      Hand your website over to <TypesomethingV2Wordmark lead="Quiet" tail="page" suffix="." />
    </>
  ),
  description: "Skip slow builders and weekly updates. Send us your current site and we'll send back a faster one that needs nothing from you.",
  action: { label: "Show me my new site", href: "#" },
  fineprint: "No account to open. You pay only once you like the draft.",
};

export default function Demo() {
  return <TypesomethingV2Cta {...ctaSample} />;
}
