// Sample content (gallery only); the page reuses it. Addresses and ids are made up.
import { CircleCheck, FlaskConical, Laptop, Mail, MailOpen, MousePointerClick, Smartphone, TriangleAlert, Webhook } from "lucide-react";
import { ResendExperience, type ResendExperienceProps } from "./resend-experience";

export const experienceSample: ResendExperienceProps = {
  title: ["Tools engineers", "actually enjoy"],
  text: [
    "We build software for people who build software.",
    <>The aim is a mail platform we would pick for ourselves, one that <em>stays out of the way</em>.</>,
  ],
  sandbox: {
    icon: <FlaskConical strokeWidth={1.5} />,
    title: "Sandbox sending",
    text: "Fire test events at the API and watch every response, with no chance of a stray message reaching a real inbox.",
    link: { label: "How it works", href: "#sandbox" },
    status: "Accepted",
    address: "sink@sandbox.tern.dev",
    send: { label: "Send", icon: <FlaskConical strokeWidth={2} /> },
    lines: [
      'OK 202  { "msg": "m_4f1c9a20-7be3-41d0" }',
      'OK 202  { "msg": "m_91d0e6b4-0c2a-4f58" }',
      'OK 202  { "msg": "m_2ab7c3f1-58e9-4c06" }',
      'OK 202  { "msg": "m_c06e14d9-a371-4b2f" }',
      'OK 202  { "msg": "m_7d3a92e8-16fb-4e91" }',
      'OK 202  { "msg": "m_e4b05c71-9d8a-4a33" }',
    ],
  },
  webhooks: {
    icon: <Webhook strokeWidth={1.5} />,
    title: "Event hooks",
    text: "Get a call on your own server the moment a message is accepted, read, bounced or has a link followed.",
    link: { label: "How it works", href: "#hooks" },
    events: [
      { status: "Accepted", tone: "success", icon: <CircleCheck strokeWidth={1.75} />, time: "Mar 04  09:41:12", rows: [[{ label: "to", value: "noor@quayside.io" }, { label: "subject", value: "Welcome aboard" }], [{ label: "via", value: "Fastmail", icon: <Mail strokeWidth={2} /> }, { label: "on", value: "Linux", icon: <Laptop strokeWidth={2} /> }]] },
      { status: "Read", tone: "info", icon: <MailOpen strokeWidth={1.75} />, time: "Mar 04  09:40:57", rows: [[{ label: "by", value: "teo@larchmont.co" }, { label: "subject", value: "Reset your key" }], [{ label: "via", value: "Spark", icon: <Mail strokeWidth={2} /> }, { label: "on", value: "iOS", icon: <Smartphone strokeWidth={2} /> }]] },
      { status: "Bounced", tone: "danger", icon: <TriangleAlert strokeWidth={1.75} />, time: "Mar 04  09:40:31", rows: [[{ label: "to", value: "ines@oldmail.net" }, { label: "reason", value: "Mailbox full" }]] },
      { status: "Clicked", tone: "warning", icon: <MousePointerClick strokeWidth={1.75} />, time: "Mar 04  09:39:48", rows: [[{ label: "by", value: "kofi@brightwater.dev" }, { label: "link", value: "/billing" }]] },
    ],
  },
};

export default function Demo() {
  return <ResendExperience {...experienceSample} />;
}
