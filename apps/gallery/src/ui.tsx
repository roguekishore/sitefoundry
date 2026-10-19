// Small pieces every view uses: thumbnails, badges, the copy box, popovers, the theme and device
// pickers, and the stage a live preview sits on.
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, Copy, Monitor, Moon, Smartphone, Sun, Tablet, Zap } from "lucide-react";
import { installCommand, type Item } from "./catalog";
import { BASE } from "./base";
import { PreviewFrame, type Target } from "./frame";
import {
  loadThumbs,
  OWN,
  SHOT_VIEWPORT,
  SOURCE_LABEL,
  siteLabel,
  sourceOf,
  THEME_GROUPS,
  themeChoice,
  themeChoices,
  type Swatch,
  type ThemeChoice,
  type Thumbs,
} from "./library";
import { DEVICES, setSettings, useDarkChrome, useSettings, useSize, type Device } from "./state";

// ---------- thumbnails ----------

let thumbsCache: Thumbs | undefined;
export function useThumbs(): Thumbs | undefined {
  const [thumbs, setThumbs] = useState(thumbsCache);
  useEffect(() => {
    if (!thumbsCache) loadThumbs().then((t) => setThumbs((thumbsCache = t)));
  }, []);
  return thumbs;
}

/** Which shot suits an item best: a component reads better at phone width, sections at desktop. */
export const preferredShot = (item: Item): "desktop" | "phone" => (item.meta.type === "component" ? "phone" : "desktop");

/**
 * A still of an item or a site page (from `pnpm build:thumbs`), in the gallery's light or dark.
 * Only the part with content is shown, fitted and centred: a short demo isn't a strip at the top
 * of an empty screen.
 */
export function Thumb({ thumbKey, prefer = "desktop", aspect = 16 / 10, label }: { thumbKey: string; prefer?: "desktop" | "phone"; aspect?: number; label: string }) {
  const thumbs = useThumbs();
  const dark = useDarkChrome();
  const entry = thumbs?.get(thumbKey);
  const mode = dark ? "dark" : "light";
  const other = prefer === "desktop" ? "phone" : "desktop";
  const variant = [`${prefer}-${mode}`, `${other}-${mode}`, `${prefer}-${dark ? "light" : "dark"}`, `${other}-${dark ? "light" : "dark"}`].find((v) => entry?.shots[v]);
  if (!entry || !variant) {
    return (
      <div className="thumb" style={{ aspectRatio: aspect }}>
        {thumbs && (
          <div className="none">
            <b>{label}</b>
            <span>no thumbnail yet</span>
          </div>
        )}
      </div>
    );
  }
  const shot = entry.shots[variant];
  const viewport = SHOT_VIEWPORT[variant.startsWith("phone") ? "phone" : "desktop"];
  const pxPerCss = shot.width / viewport.w;
  const cropped = Math.min(shot.contentHeight || viewport.h, viewport.h) * pxPerCss;
  const shotAspect = shot.width / cropped;
  const src = `${BASE}thumbs/${shot.file}?at=${encodeURIComponent(entry.at)}`;
  return (
    <div className="thumb" style={{ aspectRatio: aspect }}>
      <div className="backdrop" style={{ backgroundImage: `url("${src}")` }} />
      <div className="shot" style={{ width: `${Math.min(1, shotAspect / aspect) * 100}%`, aspectRatio: shotAspect }}>
        <img src={src} alt="" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

// ---------- labels ----------

export function Badges({ item, extra = false }: { item: Item; extra?: boolean }) {
  const { meta } = item;
  const where = sourceOf(item) === "foundry" ? (meta.site ? siteLabel(meta.site) : "Foundry") : SOURCE_LABEL[sourceOf(item)] ?? sourceOf(item);
  const tags = extra ? (meta.tags ?? []).filter((t) => t !== meta.category && t !== meta.site).slice(0, 4) : [];
  return (
    <>
      <span className="badge">{meta.type === "theme" ? "theme" : (meta.category ?? meta.type)}</span>
      <span className="badge">{where}</span>
      {meta.hydrate && <JsBadge />}
      {tags.map((t) => (
        <span key={t} className="badge outline">
          {t}
        </span>
      ))}
    </>
  );
}

export const JsBadge = () => (
  <span className="badge js" title="Needs JavaScript in the browser (Astro: client:*)">
    <Zap className="i" />
    JS
  </span>
);

export function Swatches({ sw }: { sw?: Swatch }) {
  if (!sw) return null;
  return (
    <div className="swatches">
      {[sw.bg, sw.fg, sw.primary, sw.muted].map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </div>
  );
}

function Sw4({ theme }: { theme: ThemeChoice }) {
  const sw = theme.light;
  if (!sw) return <span className="sw4 own" />;
  return (
    <span className="sw4">
      {[sw.bg, sw.fg, sw.primary, sw.muted].map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </span>
  );
}

// ---------- copying ----------

export function useCopy(): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard
      ?.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      })
      .catch(() => {
        // no clipboard (not localhost or https): the text is on screen to copy by hand
      });
  };
  return [copied, copy];
}

/** A command in a box, with a copy button. */
export function CmdBox({ text }: { text: string }) {
  const [copied, copy] = useCopy();
  return (
    <div className="cmd">
      <span title={text}>{text}</span>
      <button onClick={() => copy(text)} aria-label="Copy">
        {copied ? <Check className="i" /> : <Copy className="i" />}
      </button>
    </div>
  );
}

export function CopyAddButton({ item }: { item: Item }) {
  const [copied, copy] = useCopy();
  return (
    <button
      className="btn sm"
      onClick={(e) => {
        e.preventDefault();
        copy(installCommand(item));
      }}
    >
      {copied ? <Check className="i" /> : <Copy className="i" />}
      {copied ? "Copied" : "Copy add"}
    </button>
  );
}

// ---------- popovers ----------

/** A floating panel under (or above) its anchor; closes on a click outside or Escape. */
export function Popover({ anchor, onClose, minWidth = 220, children }: { anchor: HTMLElement; onClose: () => void; minWidth?: number; children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ left: -9999, top: -9999 });
  useLayoutEffect(() => {
    const place = () => {
      const r = anchor.getBoundingClientRect();
      const el = panel.current!;
      const left = Math.max(12, Math.min(r.left, innerWidth - el.offsetWidth - 12));
      const below = r.bottom + 6;
      const top = below + el.offsetHeight > innerHeight - 8 ? Math.max(8, r.top - el.offsetHeight - 6) : below;
      setPos({ left, top });
    };
    place();
    addEventListener("resize", place);
    return () => removeEventListener("resize", place);
  }, [anchor]);
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panel.current?.contains(t) && !anchor.contains(t)) onClose();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("mousedown", onDown);
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("mousedown", onDown);
      removeEventListener("keydown", onKey);
    };
  }, [anchor, onClose]);
  return createPortal(
    <div ref={panel} className="pop" style={{ ...pos, minWidth }}>
      {children}
    </div>,
    document.body,
  );
}

/** A button that opens a popover; `render` gets a function that closes it. */
export function PopoverButton({ className, label, children, render, minWidth }: { className: string; label?: string; children: ReactNode; render: (close: () => void) => ReactNode; minWidth?: number }) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const close = () => setAnchor(null);
  return (
    <>
      <button className={className} aria-label={label} aria-expanded={!!anchor} onClick={(e) => setAnchor(anchor ? null : e.currentTarget)}>
        {children}
      </button>
      {anchor && (
        <Popover anchor={anchor} onClose={close} minWidth={minWidth}>
          {render(close)}
        </Popover>
      )}
    </>
  );
}

// ---------- the preview pickers ----------

/** Theme and light/dark for previews: "own theme", base defaults, every site theme, shadcn, samples. */
export function ThemeButton() {
  const { theme, mode } = useSettings();
  const current = themeChoice(theme) ?? OWN;
  return (
    <PopoverButton
      className="theme-btn"
      label="Preview theme"
      minWidth={270}
      render={(close) => (
        <>
          <div style={{ padding: "4px 4px 8px" }}>
            <div className="seg" style={{ width: "100%", display: "flex" }}>
              {(["light", "dark"] as const).map((m) => (
                <button key={m} style={{ flex: 1 }} className={mode === m ? "on" : ""} onClick={() => setSettings({ mode: m })}>
                  {m === "light" ? <Sun className="i" /> : <Moon className="i" />}
                  {m === "light" ? "Light" : "Dark"}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="scroll">
            {[OWN, ...THEME_GROUPS.flatMap((g) => themeChoices.filter((t) => t.group === g))].map((t, i, all) => (
              <div key={t.id}>
                {t.group && t.group !== all[i - 1]?.group && <h6>{t.group}</h6>}
                <button
                  className={`opt${theme === t.id ? " active" : ""}`}
                  onClick={() => {
                    setSettings({ theme: t.id });
                    close();
                  }}
                >
                  <Sw4 theme={t} />
                  <span>
                    {t.label}
                    {t.description && <span className="desc">{t.description}</span>}
                  </span>
                  {theme === t.id && (
                    <span className="n">
                      <Check className="i" />
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    >
      <Sw4 theme={current} />
      <span>{current.label}</span>
      <span className="lbl">· {mode === "dark" ? "Dark" : "Light"}</span>
      <ChevronDown className="i muted" />
    </PopoverButton>
  );
}

const DEVICE_ICON = { phone: Smartphone, tablet: Tablet, desktop: Monitor };
export function DeviceSeg({ value, onChange }: { value?: Device; onChange?: (d: Device) => void }) {
  const settings = useSettings();
  const current = value ?? settings.device;
  return (
    <div className="seg">
      {(Object.keys(DEVICES) as Device[]).map((d) => {
        const Icon = DEVICE_ICON[d];
        return (
          <button key={d} className={current === d ? "on" : ""} title={`${DEVICES[d].label} · ${DEVICES[d].w}px`} aria-label={DEVICES[d].label} onClick={() => (onChange ? onChange(d) : setSettings({ device: d }))}>
            <Icon className="i" />
            <span className="n">{DEVICES[d].w}</span>
          </button>
        );
      })}
    </div>
  );
}

// ---------- the stage: one live preview, at device width, scaled to fit ----------

/** An item's demo (or a theme's specimen) on the dotted stage, as wide as the chosen device. */
export function ItemStage({ target, theme, minHeight = 420, reloadKey = 0 }: { target: Target; theme: string; minHeight?: number; reloadKey?: number }) {
  const { device, mode } = useSettings();
  const [stage, setStage] = useState<HTMLDivElement | null>(null);
  const { width: stageWidth } = useSize(stage);
  const [height, setHeight] = useState(480);
  const w = DEVICES[device].w;
  const scale = stageWidth ? Math.min(1, (stageWidth - 48) / w) : 0;
  return (
    <div className="stage" ref={setStage} style={{ minHeight }}>
      <div className="device-wrap">
        <div className={`device${device === "phone" ? " phone" : ""}`} style={{ width: w * scale, height: height * scale }}>
          {scale > 0 && (
            <div className="scaled" style={{ width: w, transform: `scale(${scale})` }}>
              <PreviewFrame key={reloadKey} target={target} width={w} theme={theme} mode={mode} onHeight={setHeight} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
