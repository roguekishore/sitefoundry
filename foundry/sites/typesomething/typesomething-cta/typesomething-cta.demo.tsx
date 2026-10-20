import { TypesomethingWordmark } from "@foundry/typesomething-wordmark";
import { TypesomethingCta, type TypesomethingCtaProps } from "./typesomething-cta";

export const ctaSample: TypesomethingCtaProps = {
  id: "start",
  title: (
    <>
      Move your website over to <TypesomethingWordmark lead="Paper" tail="kite" cursor="." />
    </>
  ),
  text: "Stop paying for slow pages and endless updates. Send us your current address and we'll show you a faster version that looks after itself.",
  action: { label: "Show me my new site", href: "#brief" },
  note: "No card, no account. You only pay once you like the draft.",
};

export default function Demo() {
  return <TypesomethingCta {...ctaSample} />;
}
