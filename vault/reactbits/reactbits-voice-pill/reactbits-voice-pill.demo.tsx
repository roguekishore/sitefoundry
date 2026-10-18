// Rebuilt from React Bits' src/demo/Micro/VoicePillDemo.jsx: the component with the props its preview uses.
import VoicePill from "./VoicePill"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <VoicePill accentColor={"#18181b"} iconColor={"#71717a"} background={"#f6f6f6"} size={40} shape={"pill"} reach={12} showTime={true} waveform={true} slideToCancel={true} cancelDistance={64} attack={40} release={240} sensitivity={1} floor={0.1} openDuration={200} pressScale={0.95} mode={"auto"} holdAfter={300} reactive={"simulated"} disabled={false} />
    </div>
  )
}
