// Rebuilt from React Bits' src/demo/Components/MagicBentoDemo.jsx: the component with the props its preview uses.
import MagicBento from "./MagicBento"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <MagicBento theme={"light"} spotlightRadius={300} enableBorderGlow={true} enableSpotlight={true} enableStars={false} particleCount={24} enableTilt={false} enableMagnetism={false} rowHeight={200} gap={12} radius={20} clickEffect={true} textAutoHide={true} intro={true} />
    </div>
  )
}
