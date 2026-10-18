// Rebuilt from React Bits' src/demo/Components/FlyingPostersDemo.jsx: the component with the props its preview uses.
import FlyingPosters from "./FlyingPosters"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <FlyingPosters planeWidth={320} planeHeight={320} distortion={3} scrollEase={0.01} cameraFov={45} cameraZ={20} rotation={180} axis={"vertical"} columns={1} columnGap={40} alternate={true} radius={0} speed={0} lean={0} fade={0} shading={0} wheel={true} drag={true} items={["https://picsum.photos/seed/foundry-day-portrait/900/1200", "https://picsum.photos/seed/foundry-night-landscape/1600/900", "https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=800&q=80&auto=format&fit=crop", "https://picsum.photos/seed/foundry-day-landscape/1600/900", "https://picsum.photos/seed/foundry-night-portrait/900/1200"]} />
    </div>
  )
}
