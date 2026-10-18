// Rebuilt from React Bits' src/demo/Micro/RefineFrameDemo.jsx: the component with the props its preview uses.
import RefineFrame from "./RefineFrame"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <RefineFrame status={"queued"} aspectRatio={"4 / 3"} width={320} radius={16} background={"#f6f6f6"} color={"#18181b"} stageDuration={400} sweep={true} showStatus={true} hideAfter={1200}>
      <img src={"https://images.unsplash.com/photo-1721407964262-f9864b562453?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" crossOrigin="anonymous" draggable={false} />
      </RefineFrame>
    </div>
  )
}
