// Rebuilt from React Bits' src/demo/Backgrounds/ParticlesDemo.jsx: the component with the props its preview uses.
import Particles from "./Particles"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Particles particleColors={["#ffffff","#ffffff","#ffffff"]} particleCount={200} particleSpread={10} particleBaseSize={100} sizeRandomness={1} speed={0.1} shape={"circle"} glow={0.5} twinkle={0.3} depthOfField={0} connections={false} connectionDistance={110} hoverEffect={"parallax"} particleHoverFactor={1} hoverRadius={140} drift={"none"} driftSpeed={1} alphaParticles={false} disableRotation={false} cameraDistance={20} variation={0} opacity={1} moveParticlesOnHover={true} clickBurst={true} intro={true} lightMode={false} />
    </div>
  )
}
