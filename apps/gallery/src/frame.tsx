// An iframe that renders a preview at a real device width, scaled down to fit when the screen is
// narrower, and grown to the content's height. Theme and mode change without reloading it.
import { useEffect, useId, useMemo, useRef, useState } from "react";

export interface Target {
  item?: string;
  site?: string;
  specimen?: string;
}

interface FrameProps {
  target: Target;
  /** device width in CSS px */
  width: number;
  theme: string;
  mode: "light" | "dark";
  /** clip the (scaled) frame to this height: thumbnails */
  maxHeight?: number;
  /** thumbnails aren't clickable inside */
  inert?: boolean;
  /** only load once scrolled near */
  lazy?: boolean;
}

export function DeviceFrame({ target, width, theme, mode, maxHeight, inert, lazy }: FrameProps) {
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [available, setAvailable] = useState(width);
  const [height, setHeight] = useState(maxHeight ?? 640);
  const [visible, setVisible] = useState(!lazy);
  const look = useRef({ theme, mode });
  look.current = { theme, mode };

  // Reload only when what's shown changes; theme and mode go by message.
  const src = useMemo(() => {
    const q = new URLSearchParams({ id, theme: look.current.theme, mode: look.current.mode });
    for (const [k, v] of Object.entries(target)) if (v) q.set(k, v);
    return `/preview.html?${q}`;
  }, [id, target.item, target.site, target.specimen]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setAvailable(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible || !box.current) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { rootMargin: "400px" });
    observer.observe(box.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === "foundry:height" && e.data.id === id) setHeight(Math.max(80, e.data.height));
    };
    addEventListener("message", onMessage);
    return () => removeEventListener("message", onMessage);
  }, [id]);

  const sendLook = () => frame.current?.contentWindow?.postMessage({ type: "foundry:look", ...look.current }, "*");
  useEffect(sendLook, [theme, mode]);

  const scale = Math.min(1, available / width);
  const shownHeight = Math.min(height * scale, maxHeight ?? Infinity);

  return (
    <div ref={box} className="w-full overflow-hidden" style={{ height: shownHeight }}>
      {visible && (
        <iframe
          ref={frame}
          src={src}
          title="preview"
          onLoad={sendLook}
          tabIndex={inert ? -1 : undefined}
          className="block origin-top-left border-0 bg-transparent"
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            marginLeft: scale === 1 ? Math.max(0, (available - width) / 2) : 0,
            pointerEvents: inert ? "none" : undefined,
          }}
        />
      )}
    </div>
  );
}
