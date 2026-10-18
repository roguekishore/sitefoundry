// Rebuilt from React Bits' src/demo/Micro/PromptBarDemo.jsx: the component with the props its preview uses.
import PromptBar from "./PromptBar"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PromptBar placeholder={"Ask anything"} busy={false} background={"#f6f6f6"} color={"#18181b"} menuBackground={"#ffffff"} sparkColor={"#b39dff"} sparkBoost={1} width={400} radius={16} maxRows={5} morphDuration={240} squash={0.12} tilt={8} pressScale={0.96} />
    </div>
  )
}
