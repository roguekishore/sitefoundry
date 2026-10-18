// Rebuilt from React Bits' src/demo/Micro/RubberSegmentDemo.jsx: the component with the props its preview uses.
import RubberSegment from "./RubberSegment"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <RubberSegment items={["Day","Week","Month","Year"]} defaultValue={"Week"} trackColor={"#f6f6f6"} thumbColor={"#18181b"} textColor={"#18181b"} activeTextColor={"#fafafa"} size={"md"} radius={10} inset={3} equalSlots={true} stretch={100} squash={3} speed={1} glide={75} draggable={true} disabled={false} />
    </div>
  )
}
