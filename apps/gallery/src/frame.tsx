// One live preview: an iframe showing preview.html at a real device width. Whoever places it
// scales it to fit (see Stage in ui.tsx). Theme, mode and the inspector's state go to the frame
// by message, so changing them doesn't reload it; only a different target does.
import { useEffect, useId, useMemo, useRef, useState, type MutableRefObject } from "react";

export interface Target {
  item?: string;
  site?: string;
  /** one of the site's other pages; the landing page when empty */
  page?: string;
  specimen?: string;
}

export interface InspectState {
  enabled: boolean;
  hover: string | null;
  selected: string | null;
}

/** Messages a frame sends besides its height: sections, hover, select, navigate (see inspect.ts). */
export type FrameMessage = { type: string; [key: string]: unknown };
export interface FrameApi {
  post(message: object): void;
}

interface Props {
  target: Target;
  /** device width in CSS px */
  width: number;
  /** a device screen this tall, the page scrolling inside it; without it the frame grows to its content */
  height?: number;
  theme: string;
  mode: "light" | "dark";
  inspect?: InspectState;
  onHeight?: (height: number) => void;
  onMessage?: (message: FrameMessage) => void;
  api?: MutableRefObject<FrameApi | null>;
  title?: string;
}

export function PreviewFrame({ target, width, height, theme, mode, inspect, onHeight, onMessage, api, title = "preview" }: Props) {
  const id = useId();
  const frame = useRef<HTMLIFrameElement>(null);
  const [contentHeight, setContentHeight] = useState(480);
  const [loaded, setLoaded] = useState(false);
  // the latest values, for callbacks that outlive a render
  const latest = useRef({ theme, mode, inspect, onHeight, onMessage });
  latest.current = { theme, mode, inspect, onHeight, onMessage };

  const src = useMemo(() => {
    const q = new URLSearchParams({ id, theme: latest.current.theme, mode: latest.current.mode });
    for (const [k, v] of Object.entries(target)) if (v) q.set(k, v);
    return `/preview.html?${q}`;
  }, [id, target.item, target.site, target.page, target.specimen]);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const post = (message: object) => frame.current?.contentWindow?.postMessage(message, "*");
  if (api) api.current = { post };
  const sendLook = () => void post({ type: "foundry:look", theme: latest.current.theme, mode: latest.current.mode });
  const sendInspect = () => {
    if (latest.current.inspect) post({ type: "foundry:inspect", ...latest.current.inspect });
  };

  useEffect(sendLook, [theme, mode]);
  useEffect(sendInspect, [inspect?.enabled, inspect?.hover, inspect?.selected]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const data = e.data as FrameMessage & { id?: string; height?: number };
      if (data?.id !== id) return;
      if (data.type === "foundry:height") {
        const h = Math.max(80, Number(data.height));
        setContentHeight(h);
        latest.current.onHeight?.(h);
      } else {
        if (data.type === "foundry:sections") sendInspect();
        latest.current.onMessage?.(data);
      }
    };
    addEventListener("message", onMessage);
    return () => removeEventListener("message", onMessage);
  }, [id]);

  return (
    <>
      <iframe
        ref={frame}
        src={src}
        title={title}
        onLoad={() => {
          sendLook();
          sendInspect();
          setLoaded(true);
        }}
        style={{ width, height: height ?? contentHeight }}
      />
      {!loaded && <div className="frame-loading">Loading preview…</div>}
    </>
  );
}
