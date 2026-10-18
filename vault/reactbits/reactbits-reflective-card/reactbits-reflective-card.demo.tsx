// Rebuilt from React Bits' src/demo/Components/ReflectiveCardDemo.jsx: the component with the props its preview uses.
import ReflectiveCard from "./ReflectiveCard"

export default function Demo() {
  return (
    <div className="relative flex h-[640px] w-full items-center justify-center overflow-hidden">
      <ReflectiveCard theme={"light"} videoSrc={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} webcam={false} name={"Alexander Doe"} role={"Senior Developer"} tint={"#ffffff"} metalness={1} roughness={0.3} blurStrength={6} grayscale={1} warp={0.6} warpScale={1} shine={1} bevel={3} glare={0.5} tiltStrength={12} radius={24} enableTilt={true} intro={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ReflectiveCard>
    </div>
  )
}
