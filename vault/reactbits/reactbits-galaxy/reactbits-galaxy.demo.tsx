// Rebuilt from React Bits' src/demo/Backgrounds/GalaxyDemo.jsx: the component with the props its preview uses.
import Galaxy from "./Galaxy"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Galaxy starColors={[]} hueShift={140} saturation={0} density={1} glowIntensity={0.3} starSize={1} flareIntensity={1} twinkleIntensity={0.3} starSpeed={0.5} speed={1} rotationSpeed={0.1} layers={4} direction={"forward"} mouseRepulsion={true} repulsionStrength={2} mouseInteraction={true} clickWarp={true} intro={true} lightMode={false} />
    </div>
  )
}
