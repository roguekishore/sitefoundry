// Sample content lives here (gallery only); other stripe demos reuse it.
import { StripeMock, type StripeMockContent } from "./stripe-mock";

export const checkoutSample: StripeMockContent = {
  kind: "checkout",
  terminal: {
    merchant: "Pay Bluebird Café",
    amount: "₹412.00",
    hint: "Tap, insert or swipe",
    lines: [
      { label: "Flat white", value: "₹260.00" },
      { label: "Almond croissant", value: "₹180.00" },
      { label: "Member (−10%)", value: "−₹28.00" },
      { label: "Total", value: "₹412.00" },
    ],
    action: "Continue",
  },
  page: {
    url: "shop.ridgeline.co/checkout",
    shop: "Ridgeline",
    emailLabel: "Email",
    email: "asha.menon@example.com",
    express: ["Quick pay", "Wallet"],
    divider: "or",
    methodsLabel: "Payment method",
    methods: [
      { label: "Card" },
      { label: "Pay in 3", note: "Three interest-free payments of ₹1,433." },
      { label: "UPI" },
      { label: "Net banking" },
    ],
    action: "Continue",
    summary: {
      title: "Order summary",
      product: "Trail lantern, brass",
      price: "₹4,299.00",
      lines: [
        { label: "Subtotal", value: "₹4,299.00" },
        { label: "Tax", value: "₹774.00" },
        { label: "Delivery", value: "Free" },
      ],
      total: { label: "Total", value: "₹5,073.00" },
    },
  },
};

export const billingSample: StripeMockContent = {
  kind: "billing",
  plan: "Studio plan",
  cadence: "Billed monthly",
  item: "Render minutes",
  rate: "₹2.40 per 100 minutes",
  meterLabel: "Usage this cycle",
  meter: 0.72,
  chartLabel: "Minutes rendered in the last 30 days",
  chartValue: "1,284,906",
};

export const chatShopSample: StripeMockContent = {
  kind: "chat-shop",
  question: "I need a light jacket for a rainy trek next week. Size L?",
  answer: "Here are two that pack small and keep the rain out:",
  products: [
    { name: "Drizzle shell", variant: "Indigo · L", price: "₹3,890.00", shop: "Fieldnote" },
    { name: "Ridge anorak", variant: "Ink · L", price: "₹5,250.00", shop: "Fieldnote" },
  ],
  action: "Buy now",
};

export const cardSample: StripeMockContent = { kind: "card", brand: "ARC" };
export const globeSample: StripeMockContent = { kind: "globe" };

export const platformSample: StripeMockContent = {
  kind: "platform",
  url: "app.studiohub.io",
  app: "Studiohub",
  receipt: {
    business: "Lotus Pilates",
    heading: "All set!",
    text: "Your ten-class pass is ready to book.",
    lines: [
      { label: "Order", value: "#58201" },
      { label: "Date", value: "14 Mar" },
      { label: "Pass", value: "₹6,500.00" },
    ],
    total: { label: "Total", value: "₹6,500.00" },
  },
  table: {
    title: "Connected studios",
    columns: ["Studio", "Country", "Balance", "Volume"],
    rows: [
      ["Lotus Pilates", "India", "₹482,130.00", "₹3,904,220.10"],
      ["Moonrise Yoga", "Singapore", "₹131,840.00", "₹902,416.00"],
      ["Tidewater Barre", "Australia", "₹298,700.00", "₹1,644,018.50"],
      ["Kinfolk Climb", "UK", "₹2,104,320.00", "₹18,290,604.75"],
      ["Northside Boxing", "Canada", "₹41,905.00", "₹377,201.20"],
      ["Saltwater Swim", "India", "₹96,410.00", "₹712,880.00"],
    ],
  },
};

export const dashboardSample: StripeMockContent = {
  kind: "dashboard",
  url: "app.studiohub.io",
  app: "Studiohub",
  nav: ["Home", "Payments", "Reports", "Settings"],
  current: 1,
  greeting: "Good morning, Lotus Pilates",
  offer: {
    expires: "Offer ends 30 Apr",
    title: "You could borrow up to ₹2,400,000",
    text: "Approved studios usually see funds within two working days.",
    action: "Check eligibility",
  },
  payments: {
    title: "Payments",
    columns: ["Amount", "Status", "Method", "Description"],
    rows: [
      { amount: "₹1,800.00", status: "Paid", ok: true, method: "Visa ···· 4242", note: "Drop-in class" },
      { amount: "₹1,800.00", status: "Refunded", ok: false, method: "UPI", note: "Drop-in class" },
      { amount: "₹24,000.00", status: "Paid", ok: true, method: "Pay in 3", note: "Annual pass" },
      { amount: "₹6,500.00", status: "Paid", ok: true, method: "Mastercard ···· 5100", note: "Ten-class pass" },
    ],
  },
  callouts: [
    { title: "Payments list", text: "Show each studio its payments, with refunds and disputes built in.", code: "hub.create('payments-list');" },
    { title: "Financing offer", text: "Let a studio see and accept the financing it qualifies for.", code: "hub.create('financing-offer');" },
  ],
};

export const editorSample: StripeMockContent = {
  kind: "editor",
  lines: ["const fern = require('fernpay')(", "  'key_test_7Hq2'", ");", "await fern.", "", ""],
  suggestions: ["accounts", "balance", "checkout", "customers", "invoices"],
  suggestAt: 3,
  status: { mode: "INSERT", file: "app.js", position: "4:12" },
  terminal: ["$ node app.js && fern listen", "> Listening for events…"],
};

export const qrChatSample: StripeMockContent = {
  kind: "qr-chat",
  question: "Do you have a gift box for two candles?",
  answer: "Yes! Here's the Evening gift box.",
  link: "pay.fernpay.link/evening-box",
  product: "Evening gift box",
  price: "₹1,450",
  scan: "Scan to pay",
};

export const appsSample: StripeMockContent = { kind: "apps" };

export default function Demo() {
  const tile = "relative h-80 overflow-hidden rounded-lg border border-border bg-muted p-4";
  return (
    <div className="grid gap-4 bg-background p-4 md:grid-cols-2">
      <div className={tile}>
        <StripeMock mock={checkoutSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={billingSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={chatShopSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={cardSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={globeSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={platformSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={dashboardSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={editorSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={qrChatSample} />
      </div>
      <div className={tile}>
        <StripeMock mock={appsSample} />
      </div>
    </div>
  );
}
