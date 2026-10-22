import { ColumnCode } from "./column-code";

export const shellSample = `curl 'https://api.tidewell.dev/v2/payouts' \\
  -X POST \\
  -u :sk_live_8fQ2mLr0VbN4tkW7xHc1 \\
  -d rail=ACH \\
  -d memo='Supplier run 0912' \\
  -d amount=640000 \\
  -d currency=USD \\
  -d recipient_id=rcp_51kTzQe8WvLm03Yb`;

export const jsonSample = `{
  "id": "pay_7HcR2nVq0Lw8ZkTe4",
  "reversed_at": null,
  "direction": "OUTBOUND",
  "amount": 128450,
  "state": "QUEUED",
  "same_day": true
}`;

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 lg:grid-cols-2">
      <ColumnCode code={jsonSample} label="Response" lineNumbers className="bg-muted" />
      <div className="dark rounded-xl bg-background p-6">
        <ColumnCode code={shellSample} />
      </div>
    </div>
  );
}
