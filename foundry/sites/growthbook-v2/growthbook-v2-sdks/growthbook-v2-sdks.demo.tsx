// Sample content (gallery only); the page reuses it. The package and host names are made up.
import { Atom, Code, FileCode, Smartphone } from "lucide-react";
import { GrowthbookV2Sdks, type GrowthbookV2SdksProps } from "./growthbook-v2-sdks";

export const sdksSample: GrowthbookV2SdksProps = {
  title: "SDKs for every\nframework",
  body: "Two dozen SDKs for modern apps and sites: half the size, no network calls on the hot path, and ready for server, browser, mobile and edge. Node, Go, React, Android and more.",
  actions: [
    { label: "Try it free", href: "#", variant: "primary" },
    { label: "Read the docs", href: "#", variant: "outline" },
  ],
  sdks: [
    {
      option: "Script tag",
      name: "Drop-in script",
      icon: <FileCode />,
      code: '<script defer\n  data-project="PASTE_PROJECT_KEY"\n  src="https://cdn.fernlight.example/v7/loader.min.js"\n></script>',
    },
    {
      option: "React",
      name: "React provider",
      icon: <Atom />,
      code: 'import { FernProvider } from "@fernlight/react";\n\n<FernProvider projectKey="PASTE_PROJECT_KEY">\n  <App />\n</FernProvider>',
    },
    {
      option: "Node",
      name: "Node server",
      icon: <Code />,
      code: 'const fern = require("@fernlight/node");\nconst client = fern.connect({ key: "PASTE_PROJECT_KEY" });',
    },
    {
      option: "Android",
      name: "Android (Kotlin)",
      icon: <Smartphone />,
      code: 'val fern = Fernlight.start(context, "PASTE_PROJECT_KEY")\nif (fern.isOn("new-checkout")) showNewCheckout()',
    },
  ],
  docs: { label: "Open the docs", href: "#" },
};

export default function Demo() {
  return <GrowthbookV2Sdks {...sdksSample} />;
}
