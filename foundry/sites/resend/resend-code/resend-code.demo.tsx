import { ResendCode } from "./resend-code";

const sample = `import { Tern } from 'tern-mail';

const tern = new Tern('tk_live_0000');

// one call, one message
await tern.messages.send({
  from: 'hello@harbourline.dev',
  to: 'ops@harbourline.dev',
  subject: 'Nightly build passed',
});`;

export default function Demo() {
  return (
    <div className="bg-background p-10">
      <ResendCode code={sample} />
    </div>
  );
}
