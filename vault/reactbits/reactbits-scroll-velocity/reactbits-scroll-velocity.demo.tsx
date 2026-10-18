// Rebuilt from React Bits' src/demo/TextAnimations/ScrollVelocityDemo.jsx: the component with the props its preview uses.
import ScrollVelocity from "./ScrollVelocity"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ScrollVelocity texts={["React Bits", "Scroll Down"]} velocity={100} numCopies={6} damping={50} stiffness={400} separator={""} fadeEdges={false} skewWithVelocity={0} scaleWithVelocity={0} outlineAlternate={false} gap={0} fontSize={80} fontWeight={700} draggable={true} pauseOnHover={false} />
    </div>
  )
}
