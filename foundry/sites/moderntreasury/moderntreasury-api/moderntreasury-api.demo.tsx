// Sample content (gallery only); the API and every value are made up.
import { ModerntreasuryApi, type ModerntreasuryApiProps } from "./moderntreasury-api";

export const apiSample: ModerntreasuryApiProps = {
  title: ["From First Customer", "to Final Settlement"],
  lead: "Run the whole life of a payment on one platform, without wiring together banks, risk vendors, ledgers and payout tools yourself.",
  requestLabel: "Request",
  prevLabel: "Previous step",
  nextLabel: "Next step",
  steps: [
    {
      number: "01",
      title: "Verify",
      text: "Identity, business checks, watchlists",
      samples: [
        {
          label: "Company",
          method: "POST",
          path: "/v2/customers",
          responseLabel: "201 Response",
          highlight: ['"company"'],
          request: `{
  "kind": "company",
  "legal_name": "Saltmarsh Analytics, LLC",
  "trade_names": ["Saltmarsh"],
  "entity_type": "llc",
  "incorporated_on": "2021-08-04",
  "industry": "Freight scheduling software",
  "contact_email": "finance@saltmarsh.example",
  "tax_ids": [
    { "value": "882210457", "type": "us_ein", "country": "US" }
  ]
}`,
          response: `{
  "id": "cus_7f3a91c2e0b84d55",
  "object": "customer",
  "kind": "company",
  "review": "in_progress"
}`,
        },
        {
          label: "Person",
          method: "POST",
          path: "/v2/customers",
          responseLabel: "201 Response",
          highlight: ['"person"'],
          request: `{
  "kind": "person",
  "first_name": "Imogen",
  "last_name": "Achebe",
  "born_on": "1990-02-17",
  "email": "imogen@post.example",
  "address": {
    "line_1": "48 Larkspur Row",
    "city": "Portland",
    "region": "OR",
    "postal_code": "97205"
  }
}`,
          response: `{
  "id": "cus_2b18d0e6a4c9f711",
  "object": "customer",
  "kind": "person",
  "review": "in_progress"
}`,
        },
      ],
    },
    {
      number: "02",
      title: "Open balances",
      text: "Accounts, sub-accounts, the ledger",
      samples: [
        {
          label: "Dollars",
          method: "POST",
          path: "/v2/accounts",
          responseLabel: "201 Response",
          highlight: ['"usd"'],
          request: `{
  "customer_id": "cus_7f3a91c2e0b84d55",
  "currency": "usd",
  "nickname": "Operating",
  "ledger": { "track_pending": true }
}`,
          response: `{
  "id": "acc_91e0c4b77d2a",
  "currency": "usd",
  "routing_number": "021000089",
  "status": "open"
}`,
        },
        {
          label: "Stablecoin",
          method: "POST",
          path: "/v2/accounts",
          responseLabel: "201 Response",
          highlight: ['"usdc"'],
          request: `{
  "customer_id": "cus_7f3a91c2e0b84d55",
  "currency": "usdc",
  "network": "base",
  "nickname": "Treasury reserve"
}`,
          response: `{
  "id": "acc_4c2f8e10a9b3",
  "currency": "usdc",
  "address": "0x8a21…f04c",
  "status": "open"
}`,
        },
      ],
    },
    {
      number: "03",
      title: "Send money",
      text: "Bank transfers, instant rails, wires, cards and stablecoins",
      samples: [
        {
          label: "Instant",
          method: "POST",
          path: "/v2/transfers",
          responseLabel: "201 Response",
          highlight: ['"instant"'],
          request: `{
  "from_account": "acc_91e0c4b77d2a",
  "to_counterparty": "cpy_5d0e1a7c",
  "amount": 248000,
  "currency": "usd",
  "rail": "instant",
  "memo": "Carrier payout, week 41"
}`,
          response: `{
  "id": "trf_c08b2e94d1f6",
  "rail": "instant",
  "status": "sent",
  "settles": "now"
}`,
        },
      ],
    },
    {
      number: "04",
      title: "Reconcile",
      text: "Webhooks, returns, matching and reports",
      samples: [
        {
          label: "Events",
          method: "GET",
          path: "/v2/events?type=transfer.settled",
          responseLabel: "200 Response",
          highlight: ['"matched"'],
          request: `{
  "type": "transfer.settled",
  "since": "2026-10-01T00:00:00Z",
  "limit": 25
}`,
          response: `{
  "data": [
    { "id": "evt_19ab", "transfer": "trf_c08b2e94d1f6",
      "ledger": "matched" }
  ],
  "has_more": false
}`,
        },
      ],
    },
  ],
};

export default function Demo() {
  return <ModerntreasuryApi {...apiSample} />;
}
