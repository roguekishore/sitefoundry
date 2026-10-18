// Rebuilt from React Bits' src/demo/Components/ScrollStackDemo.jsx: the component with the props its preview uses.
import ScrollStack from "./ScrollStack"
import { ScrollStackItem } from "./ScrollStack"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <ScrollStack itemDistance={40} itemStackDistance={22} itemScale={0.05} baseScale={0.8} dimAmount={0.25} blurAmount={0} tiltAmount={0} rotationAmount={0} smoothScroll={true} snap={false} stackPosition={"12%"}>
      {[<ScrollStackItem key={"night-landscape"} style={{ height: 300, padding: 0, background: "none" }}>
      <img src={"https://picsum.photos/seed/foundry-night-landscape/1600/900"} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
      </ScrollStackItem>, <ScrollStackItem key={"day-portrait"} style={{ height: 300, padding: 0, background: "none" }}>
      <img src={"https://picsum.photos/seed/foundry-day-portrait/900/1200"} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
      </ScrollStackItem>, <ScrollStackItem key={"night-sky"} style={{ height: 300, padding: 0, background: "none" }}>
      <img src={"https://picsum.photos/seed/foundry-night-sky/1600/900"} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
      </ScrollStackItem>, <ScrollStackItem key={"day-landscape"} style={{ height: 300, padding: 0, background: "none" }}>
      <img src={"https://picsum.photos/seed/foundry-day-landscape/1600/900"} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
      </ScrollStackItem>, <ScrollStackItem key={"night-portrait"} style={{ height: 300, padding: 0, background: "none" }}>
      <img src={"https://picsum.photos/seed/foundry-night-portrait/900/1200"} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
      </ScrollStackItem>]}
      </ScrollStack>
    </div>
  )
}
