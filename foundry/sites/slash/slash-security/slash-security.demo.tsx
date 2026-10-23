import { SlashSecurity, type SlashSecurityProps } from "./slash-security";

export const securitySample: SlashSecurityProps = {
  heading: ["Safe by default"],
  sub: "Deposit cover well beyond the usual limit, fine-grained team controls, strong sign-in, and regulated partner banks behind every account.",
  items: [
    {
      title: "Expanded deposit cover",
      body: (
        <>
          Your balance is spread across a network of partner banks through a sweep programme, so far more of it is protected than a single
          account allows. <a href="#">See the bank list</a>.
        </>
      ),
    },
    { title: "Strong sign-in", body: "Passkeys, hardware keys and app approvals for every login and every payment over your limit." },
    { title: "Regulated partner banks", body: "Accounts are held at chartered banks that answer to national regulators and annual audits." },
    { title: "Audited every year", body: "Independent auditors check our controls each year against the main security and card-data standards." },
    { title: "Approvals in steps", body: "Route big payments through one, two or three approvers before anything leaves the account." },
  ],
};

export default function Demo() {
  return <SlashSecurity {...securitySample} />;
}
