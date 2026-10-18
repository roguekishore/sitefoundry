// Rebuilt from React Bits' src/demo/Animations/MetaBallsDemo.jsx: the component with the props its preview uses.
import MetaBalls from "./MetaBalls"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <MetaBalls variant={"solid"} motion={"orbit"} speed={0.3} animationSize={30} ballCount={15} clumpFactor={1} cursorBallSize={3} hoverSmoothness={0.1} gooeyness={0.5} stickiness={0.5} stretch={0.5} wobble={0.5} lineWidth={1.5} rings={4} enableMouseInteraction={true} clickBurst={true} color={"#18181b"} cursorBallColor={"#18181b"} intro={true} enableTransparency />
    </div>
  )
}
