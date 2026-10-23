import { ArcDisclosures, type ArcDisclosuresProps } from "./arc-disclosures";

export const disclosuresSample: ArcDisclosuresProps = {
  disclosures: [
    { lead: "Basin is a financial software company, not a bank." },
    {
      lead: "Banking services are provided by Northfield Trust, a fictional partner bank used for this demonstration.",
      text: "Operating and Reserve accounts are deposit accounts held at Northfield Trust. Balances shown on this page are examples only and do not describe any real customer.",
    },
    { text: "Basin cards are issued by a partner bank under licence and are accepted wherever the card network is accepted. Spending rules, limits and approvals are set by the account owner." },
    { lead: "Investment services for Reserve accounts are provided by Basin Advisory, an illustrative registered investment adviser." },
    {
      text: "Basin Advisory manages Treasury ladders on behalf of clients using a fixed advisory fee described in its client agreement. Securities are held by an independent custodian in the client's name. Before choosing a ladder, review the maturities, the yields at the time of purchase and the fees that apply, all of which are shown in the app before you confirm.",
    },
    {
      text: "Investments in securities are not deposits, are not insured by any government agency, are not guaranteed by Basin or its partners, and may lose value. Treasury bills held to maturity return their face value; selling before maturity may return more or less than you paid. Advisory services are meant to help you manage company cash and are not tax, legal or accounting advice.",
    },
    { text: "Custody and clearing for Reserve accounts are provided by an independent broker-dealer. Technology services may be provided by Basin Labs." },
    {
      lead: "Deposit sweep",
      leadOnOwnLine: true,
      text: "Cash above your chosen operating balance may be swept across a network of participating banks so that more of it falls within each bank's insurance limit. Funds in transit between banks may not be insured while they move. You are responsible for watching deposits you hold at the same banks outside Basin, since those count toward the same limits. The list of participating banks is available in the app at any time and you may exclude any bank from the sweep.",
    },
    {
      lead: "Yields and rates",
      leadOnOwnLine: true,
      text: "Yields change with market conditions and without notice. Figures quoted on this page are illustrations of how the products work, calculated on example balances, and are not offers or promises of any return. Interest on Operating accounts is paid monthly on the average daily balance of the prior calendar month.",
    },
    { lead: "Product images are illustrations only.", text: "Screens shown on this page are examples and any figures in them are invented." },
  ],
  footnotes: [
    { mark: "1", text: "Insurance coverage through the deposit sweep depends on the number of participating banks and on deposits you hold at those banks elsewhere. See the sweep terms in the app for the current bank list." },
    { mark: "2", text: "The rate shown is the highest net rate available on the most recent business day for the Reserve ladder, after advisory fees. Some ladders require a minimum balance. The full schedule of options, rates and fees is shown in the app." },
    { text: "Treasury bill yields are annualised and assume the bill is held to maturity. Bills are bought at a discount to face value and their price moves with the market until they mature; cash left after a purchase may earn a different rate." },
    { mark: "3", text: "Venture debt introductions are made to independent lenders, who make their own credit decisions. Basin may receive a fee from a lender when a facility closes; the fee is disclosed in every term sheet comparison." },
    { mark: "4", text: "The analyst agent prepares reports from your connected data. Check figures before sharing them outside your company." },
    { mark: "5", text: "Quoted customers are real companies in this demonstration only and were not paid for their words. Results differ from company to company." },
    { mark: "6", text: "Customer experiences are their own and may not reflect yours. Past results do not promise future ones." },
  ],
};

export default function Demo() {
  return <ArcDisclosures {...disclosuresSample} />;
}
