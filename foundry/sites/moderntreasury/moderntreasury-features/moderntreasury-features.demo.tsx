import { ModerntreasuryFeatures, type ModerntreasuryFeaturesProps } from "./moderntreasury-features";

export const featuresSample: ModerntreasuryFeaturesProps = {
  title: "What Teams Build on Kestrel",
  items: [
    {
      title: "Marketplace Collections",
      text: "Take payments from buyers and pay out to the hosts, drivers, lenders or suppliers on your platform.",
      link: { label: "See marketplace payouts", href: "#" },
      mediaLabel: "Payout summary card",
    },
    {
      title: "Accounts for Your Users",
      text: "Give every person and business their own account, holding dollars or stablecoins, tracked by a live ledger.",
      link: { label: "See user accounts", href: "#" },
      mediaLabel: "Account details card",
    },
    {
      title: "Stablecoin Routing",
      text: "Move value across borders and networks for less. Convert in and out of dollars inside a single transfer.",
      link: { label: "See stablecoin routing", href: "#" },
      mediaLabel: "Transfer received and sent cards",
    },
    {
      title: "Retire the Spreadsheets",
      text: "Swap bank portals, file uploads and patchwork vendors for payment flows that run on their own.",
      link: { label: "See automated flows", href: "#" },
      mediaLabel: "Payment order timeline",
    },
  ],
};

export default function Demo() {
  return <ModerntreasuryFeatures {...featuresSample} />;
}
