// Rebuilt from React Bits' src/demo/Micro/GlideSelectDemo.jsx: the component with the props its preview uses.
import GlideSelect from "./GlideSelect"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <GlideSelect options={[{"value":"png","label":"PNG","tag":"Lossless"},{"value":"jpg","label":"JPG","tag":"Smallest"},{"value":"webp","label":"WebP","tag":"Modern"},{"value":"svg","label":"SVG","tag":"Vector"},{"value":"pdf","label":"PDF","tag":"Print"}]} ariaLabel="Export format" showTags={true} accentColor={"#18181b"} surfaceColor={"#f6f6f6"} highlightColor={"#e4e4e7"} textColor={"#18181b"} size={"md"} radius={10} menuWidth={176} placement={"bottom"} align={"left"} popDuration={180} glideDuration={220} rememberPosition={true} disabled={false} />
    </div>
  )
}
