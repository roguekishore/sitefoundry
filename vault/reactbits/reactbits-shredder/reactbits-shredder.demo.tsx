// Rebuilt from React Bits' src/demo/Micro/ShredderDemo.jsx: the component with the props its preview uses.
import Shredder from "./Shredder"

export default function Demo() {
  return (
    <div className="relative flex h-[520px] w-full items-center justify-center overflow-hidden">
      <Shredder width={340} height={460} inset={14} gap={10} slitHeight={4} fallHeight={140} feedSpeed={180} bite={18} autoFeed={true} stripWidth={10} curl={1} autoAnimate={false} loop={false} loopAfterDelete={false} dragTilt={6} lift={1.02} slitColor={"#18181b"} color={"#18181b"} disabled={false} />
    </div>
  )
}
