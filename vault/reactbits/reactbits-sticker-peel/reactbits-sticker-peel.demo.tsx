// Rebuilt from React Bits' src/demo/Animations/StickerPeelDemo.jsx: the component with the props its preview uses.
import StickerPeel from "./StickerPeel"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <StickerPeel imageSrc={"https://picsum.photos/seed/foundry-sticker/400/400"} finish={"gloss"} width={200} rotate={0} peelDirection={0} peelBackHoverPct={25} peelBackActivePct={40} curlRadius={12} backColor={"#d4d4d8"} lightingIntensity={0.5} shadowIntensity={0.6} followPointer={true} swing={1} friction={0.5} bounce={0.35} draggable={true} intro={true} />
    </div>
  )
}
