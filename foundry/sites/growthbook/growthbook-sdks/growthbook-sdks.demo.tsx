// Sample content (gallery only); the page reuses it. Northvane and its package names are made up.
import { Atom, Code2, Server } from "lucide-react";
import { GrowthbookSdks, type GrowthbookSdksProps } from "./growthbook-sdks";

export const sdksSample: GrowthbookSdksProps = {
  title: ["Libraries for", "every stack"],
  body: "Twenty-odd lightweight SDKs that evaluate flags without a network call, on the server, in the browser, on phones and at the edge. Go, Swift, Vue, Node and more.",
  primary: { label: "Try it free", href: "#" },
  secondary: { label: "Read the docs", href: "#" },
  selectLabel: "Choose a framework",
  copyLabel: "Copy code",
  docs: { label: "Open the guide", href: "#" },
  snippets: [
    {
      label: "Plain HTML",
      name: "One script tag",
      icon: <Code2 strokeWidth={1.75} />,
      code: '<script defer\n  data-project="YOUR_PROJECT_KEY"\n  src="https://cdn.example.com/northvane/loader.js"\n></script>',
    },
    {
      label: "React",
      name: "React provider",
      icon: <Atom strokeWidth={1.75} />,
      code: 'import { VaneProvider } from "@northvane/react";\n\n<VaneProvider projectKey="YOUR_PROJECT_KEY">\n  <App />\n</VaneProvider>',
    },
    {
      label: "Node",
      name: "Server client",
      icon: <Server strokeWidth={1.75} />,
      code: 'import { Vane } from "@northvane/node";\n\nconst vane = new Vane({ projectKey: "YOUR_PROJECT_KEY" });\nif (vane.isOn("new-checkout")) { /* … */ }',
    },
  ],
};

export default function Demo() {
  return <GrowthbookSdks {...sdksSample} />;
}
