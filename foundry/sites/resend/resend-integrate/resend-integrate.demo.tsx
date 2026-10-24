// Sample content (gallery only); the page reuses it. Tern and its "tern-mail" SDK are made up.
import { Braces, Coffee, Diamond, Download, Droplet, FileCode, Gem, Hexagon, Server, Snail, Terminal, Waypoints, Zap } from "lucide-react";
import { ResendIntegrate, type ResendIntegrateProps } from "./resend-integrate";

const node = `import { Tern } from 'tern-mail';

const tern = new Tern('tk_live_000000');

(async () => {
  const { message, problem } = await tern.messages.send({
    sender: 'hello@harbourline.dev',
    recipient: 'maya@harbourline.dev',
    subject: 'Your build is ready',
    html: '<p>All <b>green</b> tonight.</p>',
  });

  if (problem) {
    return console.error(problem);
  }

  console.info(message.id);
})();`;

const nextRoute = `import { Tern } from 'tern-mail';
import { ReceiptMail } from './emails/receipt';

const tern = new Tern(process.env.TERN_KEY);

export async function POST(request) {
  const order = await request.json();

  const { message } = await tern.messages.send({
    sender: 'orders@harbourline.dev',
    recipient: order.email,
    subject: 'Thanks for your order',
    react: ReceiptMail({ order }),
  });

  return Response.json({ id: message.id });
}`;

const express = `import express from 'express';
import { Tern } from 'tern-mail';

const app = express();
const tern = new Tern('tk_live_000000');

app.post('/invite', async (req, res) => {
  await tern.messages.send({
    sender: 'team@harbourline.dev',
    recipient: req.body.email,
    subject: 'You were invited',
    text: 'Join the workspace in one click.',
  });
  res.sendStatus(202);
});

app.listen(3000);`;

const python = `import tern

tern.key = "tk_live_000000"

message = tern.Messages.send({
    "sender": "hello@harbourline.dev",
    "recipient": "maya@harbourline.dev",
    "subject": "Your build is ready",
    "html": "<p>All <b>green</b> tonight.</p>",
})

print(message["id"])`;

const ruby = `require "tern"

Tern.key = "tk_live_000000"

message = Tern::Messages.send(
  sender: "hello@harbourline.dev",
  recipient: "maya@harbourline.dev",
  subject: "Your build is ready",
  html: "<p>All <b>green</b> tonight.</p>"
)

puts message[:id]`;

const go = `package main

import "github.com/harbourline/tern-go"

func main() {
  client := tern.NewClient("tk_live_000000")

  msg, err := client.Messages.Send(&tern.Message{
    Sender:    "hello@harbourline.dev",
    Recipient: "maya@harbourline.dev",
    Subject:   "Your build is ready",
  })
  if err != nil {
    panic(err)
  }
  println(msg.ID)
}`;

const curl = `curl -X POST 'https://api.tern.example/messages' \\
  -H 'Authorization: Bearer tk_live_000000' \\
  -H 'Content-Type: application/json' \\
  -d $'{
    "sender": "hello@harbourline.dev",
    "recipient": "maya@harbourline.dev",
    "subject": "Your build is ready",
    "text": "All green tonight."
  }'`;

const smtp = `host:      smtp.tern.example
port:      465
username:  tern
password:  tk_live_000000

# any SMTP client works: point it here
# and keep your existing templates`;

export const integrateSample: ResendIntegrateProps = {
  title: "Ship it before",
  accent: "lunch",
  text: [
    "One small client and a tidy REST surface. Drop it into the stack you",
    "already run, with libraries for the languages your team writes.",
  ],
  sdks: [
    { label: "Node.js", icon: <Hexagon strokeWidth={1.5} />, tabs: [
      { label: "Node.js", icon: <Hexagon strokeWidth={2} />, code: node },
      { label: "Next.js", icon: <Waypoints strokeWidth={2} />, code: nextRoute },
      { label: "Express", icon: <Server strokeWidth={2} />, code: express },
    ] },
    { label: "Edge", icon: <Zap strokeWidth={1.5} />, tabs: [{ label: "Edge function", icon: <Zap strokeWidth={2} />, code: nextRoute }] },
    { label: "Ruby", icon: <Gem strokeWidth={1.5} />, tabs: [{ label: "Ruby", icon: <Gem strokeWidth={2} />, code: ruby }] },
    { label: "Python", icon: <Snail strokeWidth={1.5} />, tabs: [{ label: "Python", icon: <Snail strokeWidth={2} />, code: python }] },
    { label: "PHP", icon: <FileCode strokeWidth={1.5} />, tabs: [{ label: "cURL from PHP", icon: <FileCode strokeWidth={2} />, code: curl }] },
    { label: "CLI", icon: <Terminal strokeWidth={1.5} />, tabs: [{ label: "Shell", icon: <Terminal strokeWidth={2} />, code: curl }] },
    { label: "Go", icon: <Diamond strokeWidth={1.5} />, tabs: [{ label: "Go", icon: <Diamond strokeWidth={2} />, code: go }] },
    { label: "Java", icon: <Coffee strokeWidth={1.5} />, tabs: [{ label: "HTTP", icon: <Coffee strokeWidth={2} />, code: curl }] },
    { label: "Elixir", icon: <Droplet strokeWidth={1.5} />, tabs: [{ label: "HTTP", icon: <Droplet strokeWidth={2} />, code: curl }] },
    { label: "REST", icon: <Braces strokeWidth={1.5} />, tabs: [{ label: "cURL", icon: <Braces strokeWidth={2} />, code: curl }] },
    { label: "SMTP", icon: <Server strokeWidth={1.5} />, tabs: [{ label: "SMTP relay", icon: <Server strokeWidth={2} />, code: smtp }] },
  ],
  links: [
    { label: "Browse the source", href: "#source", icon: <FileCode strokeWidth={1.75} /> },
    { label: "Get the starter", href: "#starter", icon: <Download strokeWidth={1.75} /> },
  ],
};

export default function Demo() {
  return <ResendIntegrate {...integrateSample} />;
}
