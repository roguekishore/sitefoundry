import { PilotAsk, type PilotAskProps } from "./pilot-ask";

export const askSample: PilotAskProps = {
  title: "Quit hunting through\ntabs for numbers you\nneeded this morning.",
  questions: ['"Why is revenue climbing while the bank balance shrinks?"', '"Can we afford a second designer this quarter?"', '"Which costs are outrunning sales?"'],
  answer: "Reading your own business shouldn't take an accounting degree.",
  note: "Sharper calls, with every number in plain sight.",
  callout: "Ask your books anything and hear back in seconds.",
};

export default function Demo() {
  return <PilotAsk {...askSample} />;
}
