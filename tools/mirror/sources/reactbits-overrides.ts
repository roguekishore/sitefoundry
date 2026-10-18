// Hand fixes for React Bits items, kept here so every re-run applies them.
//   DEMO_OVERRIDES: demos for components whose upstream demo can't be rebuilt automatically.
//   DEMO_PATCHES:   small changes to a rebuilt demo (gallery only, never installed).
//   DEMO_ASSETS:    images and media upstream's demos load from reactbits.dev, mapped to public stand-ins.
//   PATCHES:        source changes to upstream files (keep these few, and say why).

type DemoFn = (importLine: string, component: string) => string;

export const DEMO_OVERRIDES: Record<string, DemoFn> = {
  // upstream blurs the edges of a scrolling photo feed; a scrolling list of text shows the same
  GradualBlur: (importLine) => `// Based on React Bits' GradualBlurDemo.jsx: a scrolling column with the top and bottom edges blurred.
${importLine}

const rows = Array.from({ length: 24 }, (_, i) => \`Row \${i + 1}: content scrolls under the blurred edges\`)

export default function Demo() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden">
      <div className="h-full overflow-y-auto px-6 py-16">
        {rows.map((row) => (
          <p key={row} className="border-b border-border py-4 text-lg">{row}</p>
        ))}
      </div>
      <GradualBlur position="top" target="parent" zIndex={2} />
      <GradualBlur position="bottom" target="parent" zIndex={2} />
    </div>
  )
}
`,
  // upstream builds its items from app state (open apps, badges, menus); this is a still version
  Dock: (importLine) => `// Based on React Bits' DockDemo.jsx: the same icons and props, without its app-state wiring.
${importLine}
import { Home01Icon, Search01Icon, Mail01Icon, Message01Icon, MusicNote03Icon, Image01Icon, Settings01Icon, Delete02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const glyph = (icon: typeof Home01Icon) => <HugeiconsIcon icon={icon} size="1em" strokeWidth={1.8} />

const items = [
  { icon: glyph(Home01Icon), label: "Home", active: true, menu: [{ label: "New Window" }] },
  { icon: glyph(Search01Icon), label: "Search" },
  { icon: glyph(Mail01Icon), label: "Mail", active: true, badge: 3 },
  { icon: glyph(Message01Icon), label: "Messages", badge: true },
  { icon: glyph(MusicNote03Icon), label: "Music", active: true },
  { icon: glyph(Image01Icon), label: "Photos" },
  { icon: glyph(Settings01Icon), label: "Settings" },
  { separator: true },
  { icon: glyph(Delete02Icon), label: "Trash" },
]

export default function Demo() {
  return (
    <div className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden">
      <Dock items={items} accentColor={"#0a84ff"} badgeColor={"#ff453a"} position={"bottom"} baseItemSize={50} magnification={70} distance={200} panelHeight={68} gap={10} roundness={0.5} bounce={true} tiles={true} showLabels={true} showIndicators={true} showBadges={true} theme={"light"} />
    </div>
  )
}
`,
};

const PHOTO = (url: string) => `<img src="${url}" alt="" draggable={false} className="block h-full w-full object-cover" />`;

export const DEMO_PATCHES: Record<string, (demo: string) => string> = {
  // the count target is set from the demo's state upstream; the rebuild filled in 1
  CountUp: (demo) => demo.replace("to={1}", "to={2048}").replace(`style={{ fontWeight: 700 }}`, `style={{ fontWeight: 700, fontSize: 56 }}`),
  // upstream's demo page defines --cd-* in its own CSS; use theme tokens instead, and give it a value
  Counter: (demo) =>
    demo
      .replace("<Counter ", "<Counter value={42} ")
      .replace(`fontSize="var(--cd-count-size)"`, "fontSize={64}")
      .replace(`"var(--cd-tile)"`, `"var(--muted)"`)
      .replace(`"var(--cd-tile-edge)"`, `"inset 0 0 0 1px var(--border)"`),
  // likewise --esd-*
  ElasticSlider: (demo) =>
    demo
      .replace(`style={{"width":"100%"}}`, `style={{"width":"100%","maxWidth":360}}`)
      .replace(`"var(--esd-track)"`, `"var(--muted)"`)
      .replace(`"var(--esd-fill)"`, `"var(--primary)"`)
      .replace(`"var(--esd-muted)"`, `"var(--muted-foreground)"`),
  // upstream's logos are react-icons nodes; plain wordmarks here
  LogoLoop: (demo) => demo.replace(/\{ title: "([^"]+)"/g, `{ node: <span className="text-2xl font-semibold">$1</span>, title: "$1"`),
  // upstream peels its own logo image; the rebuild could only fill in a string
  StickerPeel: (demo) => demo.replace(`imageSrc={"React Bits"}`, `imageSrc={"https://picsum.photos/seed/foundry-sticker/400/400"}`),
  // upstream passes its own logo image; paint a word instead
  MetallicPaint: (demo) => demo.replace("<MetallicPaint ", `<MetallicPaint text={"Bits"} `),
  PixelSwap: (demo) =>
    demo
      .replace("<PixelSwap ", `<div className="w-full max-w-[560px] px-6">
      <PixelSwap firstContent={${PHOTO("/assets/demo/day-sky.webp")}} secondContent={${PHOTO("/assets/demo/night-sky.webp")}} `)
      .replace(/(<PixelSwap [^\n]*\/>)/, "$1\n      </div>"),
  PixelTransition: (demo) =>
    demo.replace("<PixelTransition ", `<PixelTransition firstContent={${PHOTO("/assets/demo/day-portrait.webp")}} secondContent={${PHOTO("/assets/demo/night-portrait.webp")}} `),
  // upstream's demo loads a model hosted on reactbits.dev; use Khronos' public sample (CC-BY 4.0)
  ModelViewer: (demo) =>
    demo.replace(
      `url={"/assets/3d/sneaker.glb"}`,
      `url={"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"}`,
    ),
};

// Photos: seeded picsum.photos images (upstream's demos already use picsum; CORS-enabled for WebGL
// textures). Video: MDN's CC0 sample clip. null: the attribute is left out (optional extras).
const pic = (seed: string, w: number, h: number) => `https://picsum.photos/seed/foundry-${seed}/${w}/${h}`;
const VIDEO = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
export const DEMO_ASSETS: Record<string, string | null> = {
  "/assets/demo/day-landscape.webp": pic("day-landscape", 1600, 900),
  "/assets/demo/night-landscape.webp": pic("night-landscape", 1600, 900),
  "/assets/demo/day-sky.webp": pic("day-sky", 1600, 900),
  "/assets/demo/night-sky.webp": pic("night-sky", 1600, 900),
  "/assets/demo/day-portrait.webp": pic("day-portrait", 900, 1200),
  "/assets/demo/night-portrait.webp": pic("night-portrait", 900, 1200),
  "/assets/demo/person.webp": pic("person", 900, 1200),
  "/assets/images/paper-crumple.jpg": pic("paper", 1200, 900),
  "/assets/video/masked-heading.mp4": VIDEO,
  "/assets/demo/reflection-day.mp4": VIDEO,
  "/assets/demo/iconpattern.png": null,
  "/assets/demo/laser-ui.svg": null,
  "/assets/sounds/click-soft.mp3": null,
};

export const PATCHES: Record<string, (content: string) => string> = {
  // motion's useTransform computes its first value during render, where there's no window
  // (static HTML / Astro). With no viewport to clamp to, the clamp is skipped.
  WarmTooltip: (content) =>
    content
      .replace("window.innerWidth - MARGIN - width", "(typeof window === 'undefined' ? Infinity : window.innerWidth) - MARGIN - width")
      .replace("window.innerHeight - MARGIN - height", "(typeof window === 'undefined' ? Infinity : window.innerHeight) - MARGIN - height"),
};
