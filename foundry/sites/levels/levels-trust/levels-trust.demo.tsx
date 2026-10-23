import { LevelsTrust, type LevelsTrustProps } from "./levels-trust";

export const trustSample: LevelsTrustProps = {
  items: [
    { title: "120,000+ members", body: "People join Ballast to find out what meals do to them, then build better days from there." },
    { title: "Sensors since day one", body: "We were among the first to put glucose sensors in the hands of everyday eaters." },
    {
      title: "Private by design",
      body: "Encrypted, audited and never sold, with advice that sharpens the more of your data you choose to connect.",
    },
  ],
};

export default function Demo() {
  return <LevelsTrust {...trustSample} />;
}
