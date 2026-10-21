import { StoreyarchitectureRise } from "./storeyarchitecture-rise";

const paragraphs = [
  "We draw houses that stay quiet for decades: plain volumes, honest stone, light that moves across a room through the day.",
  "Each one starts on site, with the slope, the trees and the weather, long before a line is drawn.",
];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <div className="grid gap-8 text-[4.3vw] leading-[1.2] tracking-[-0.02em] sm:grid-cols-2 sm:text-[1.6vw]">
        {paragraphs.map((p, i) => (
          <StoreyarchitectureRise key={p} step={i}>
            <p>{p}</p>
          </StoreyarchitectureRise>
        ))}
      </div>
    </div>
  );
}
