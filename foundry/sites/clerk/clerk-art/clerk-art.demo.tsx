// Sample illustrations (gallery only); clerk-features' demo reuses them.
import type { ReactNode } from "react";
import { Atom, BookOpen, Box, Cloud, Fingerprint, Gem, KeyRound, Mail, MessageCircle, Phone, Sparkles, SquareTerminal, Tv, Zap } from "lucide-react";
import { IconBrandGithub, IconBrandGitlab, IconBrandFigma, IconBrandNotion } from "@tabler/icons-react";
import {
  AlertTimelineArt,
  AutoJoinArt,
  CodeBoxesArt,
  DeviceSheetArt,
  DialArt,
  InviteArt,
  NodeGraphArt,
  OrbitArt,
  OrgSwitcherArt,
  PhoneGridArt,
  RackArt,
  RadarArt,
  RoleGridArt,
  ScrambleArt,
} from "./clerk-art";

export const artSamples = {
  codes: <CodeBoxesArt digits="274" />,
  alert: <AlertTimelineArt message="Throwaway inboxes blocked" time="09:41" />,
  fingerprint: <DialArt icon={<Fingerprint />} />,
  device: <DeviceSheetArt rows={["Laptop", "Firefox 131", "Lisbon, PT"]} action="End this session" />,
  orbit: (
    <OrbitArt
      center={<Cloud />}
      icons={[<IconBrandGithub key="a" stroke={1.75} />, <IconBrandNotion key="b" stroke={1.75} />, <IconBrandFigma key="c" stroke={1.75} />, <IconBrandGitlab key="d" stroke={1.75} />]}
    />
  ),
  radar: <RadarArt />,
  phone: (
    <PhoneGridArt
      badge="2"
      apps={[
        { icon: <Phone />, label: "Calls" },
        { icon: <MessageCircle />, label: "Texts" },
        { icon: <BookOpen />, label: "Notes" },
        { icon: <Tv />, label: "Media" },
      ]}
    />
  ),
  scramble: <ScrambleArt token="q7Hm2xVwRt" name="Ines Duarte" email="ines@harbor.dev" />,
  keyhole: <DialArt tray icon={<KeyRound />} />,
  rack: <RackArt status="Verifying key…" />,
  nodes: <NodeGraphArt center={<SquareTerminal />} icons={[<Sparkles key="a" />, <Box key="b" />, <Zap key="c" />]} />,
  roles: (
    <RoleGridArt
      people={[
        { initials: "AK", tone: 1 },
        { initials: "JB", tone: 2 },
        { initials: "SR", tone: 3 },
        { initials: "TL", tone: 4 },
      ]}
      roles={["Viewer", "Member", "Admin", "Billing", "Support"]}
      active={2}
    />
  ),
  autojoin: (
    <AutoJoinArt
      label="Auto-join"
      people={[
        { initials: "MO", tone: 5 },
        { initials: "PD", tone: 3 },
        { initials: "LV", tone: 2 },
      ]}
    />
  ),
  invite: <InviteArt label="Send an invite" icon={<Mail strokeWidth={2} />} />,
  org: <OrgSwitcherArt name="Fieldnote" mark={<Gem />} />,
  atom: <DialArt icon={<Atom />} />,
} satisfies Record<string, ReactNode>;

function Tile({ children, wide }: { children: ReactNode; wide?: boolean }) {
  return <div className={`group relative h-64 overflow-hidden rounded-xl bg-card ${wide ? "sm:col-span-2" : ""}`}>{children}</div>;
}

export default function Demo() {
  const dark = ["codes", "alert", "fingerprint", "device", "orbit", "radar", "phone", "scramble", "keyhole", "nodes"] as const;
  const light = ["roles", "autojoin", "invite", "org"] as const;
  return (
    <div className="space-y-px">
      <div className="dark grid gap-2 bg-background p-4 sm:grid-cols-3">
        {dark.map((k) => (
          <Tile key={k}>{artSamples[k]}</Tile>
        ))}
        <Tile wide>{artSamples.rack}</Tile>
      </div>
      <div className="grid gap-2 bg-background p-4 sm:grid-cols-4">
        {light.map((k) => (
          <Tile key={k}>{artSamples[k]}</Tile>
        ))}
      </div>
    </div>
  );
}
