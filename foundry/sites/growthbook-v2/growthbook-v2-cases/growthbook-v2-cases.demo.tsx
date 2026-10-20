// Sample content (gallery only); the page reuses it. Every company and result is made up.
import { GrowthbookV2Cases, type GrowthbookV2CasesProps } from "./growthbook-v2-cases";
import { logoMarks } from "../growthbook-v2-logos/growthbook-v2-logos.demo";

const link = { label: "Read the story", href: "#" };

export const casesSample: GrowthbookV2CasesProps = {
  title: "Teams already\nshipping at\nagent speed",
  action: { label: "All customer stories", href: "#" },
  cases: [
    { name: "tidepool", logo: logoMarks.tidepool, story: "How tidepool tested its way from a side project to a forty-person company", stat: "4% to 21%", statLabel: "trial to paid", link },
    { name: "Quarry", logo: logoMarks.quarry, story: "Quarry rolls every model update out behind a flag before anyone sees it", stat: "2.6 billion", statLabel: "flag checks a day", link },
    { name: "oakline", logo: logoMarks.oakline, story: "How oakline's open archive runs tests across 40 languages without tracking anyone", stat: "+22%", statLabel: "new contributors", link },
    { name: "Harbourly", logo: logoMarks.harbourly, story: "Harbourly cut checkout mistakes and found a second revenue stream", stat: "$2M+", statLabel: "added every quarter", link },
    { name: "wren", logo: logoMarks.wren, story: "wren uses guard metrics to keep its tutoring assistant honest", stat: "+7.4%", statLabel: "answer accuracy", link },
  ],
};

export default function Demo() {
  return <GrowthbookV2Cases {...casesSample} />;
}
