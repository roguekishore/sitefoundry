// Sample content (gallery only); the page reuses it. The template and "@tern/blocks" are made up.
import { ResendReact, type ResendReactProps } from "./resend-react";

const code = `        <Title className="text-2xl font-normal">
          A warm hello from <b>{workspace}</b>
        </Title>
        <Para className="text-sm">
          Hi {firstName},
        </Para>
        <Para className="text-sm">
          Your seat in <b>{workspace}</b> is ready. Everything
          you set up last week carried over, so pick up
          right where the team left off.
        </Para>
        <Block className="my-8 text-center">
          <Action
            href={\`\${origin}/open\`}
            className="rounded bg-sky-500 px-5 py-3 text-white"
          >
            Open the workspace
          </Action>
        </Block>
        <Para className="text-sm">
          See you inside,
          <br />
          The {workspace} crew
        </Para>
      </Frame>
    </Page>
  );
}

interface WelcomeProps {
  firstName?: string;
  workspace?: string;
}

const origin = process.env.APP_ORIGIN
  ? \`https://\${process.env.APP_ORIGIN}\`
  : '';

export default Welcome;`;

export const reactSample: ResendReactProps = {
  title: "Templates as components",
  text: [
    "Build good-looking mail without nested tables or hand-written HTML.",
    "Powered by Tern Blocks, our open component kit for email.",
  ],
  primary: { label: "Start building", href: "#start" },
  secondary: { label: "Read the guide", href: "#guide" },
  files: [
    { name: "welcome.tsx", open: true },
    { name: "magic-code.tsx" },
    { name: "team-invite.tsx" },
    { name: "monthly-digest.tsx" },
  ],
  code,
  startLine: 24,
};

export default function Demo() {
  return <ResendReact {...reactSample} />;
}
