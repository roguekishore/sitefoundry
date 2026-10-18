// Plain-React replacements for the next/* imports mirrored code uses (CONTRACT rule 6).
// Each replaces the import line with a tiny local stand-in, so the file needs no Next.js.

const LINK = `import type { ComponentProps as LinkStandInProps } from "react"
// plain-React stand-in for next/link (added by the foundry mirror)
const Link = ({ prefetch: _p, replace: _r, scroll: _s, ...props }: LinkStandInProps<"a"> & { prefetch?: boolean; replace?: boolean; scroll?: boolean }) => <a {...props} />`;

const IMAGE = `import type { ComponentProps as ImageStandInProps } from "react"
// plain-React stand-in for next/image (added by the foundry mirror)
const Image = ({ fill, priority: _p, quality: _q, placeholder: _ph, blurDataURL: _b, unoptimized: _u, style, ...props }: ImageStandInProps<"img"> & { fill?: boolean; priority?: boolean; quality?: number; placeholder?: string; blurDataURL?: string; unoptimized?: boolean }) => (
  <img style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style} {...props} />
)`;

/** Replace next/link, next/image and next/font imports; returns undefined when other next/* modules remain. */
export function replaceNext(content: string): { content: string; replaced: string[] } | { unsupported: string } {
  const replaced: string[] = [];
  let out = content.replace(/^import\s+(\w+)\s+from\s+["']next\/link["'];?$/m, (_m, local: string) => {
    replaced.push("next/link");
    return LINK.replace("const Link =", `const ${local} =`);
  });
  out = out.replace(/^import\s+(\w+)\s+from\s+["']next\/image["'];?$/m, (_m, local: string) => {
    replaced.push("next/image");
    return IMAGE.replace("const Image =", `const ${local} =`);
  });
  out = out.replace(/^import\s*\{([^}]+)\}\s*from\s+["']next\/font\/(google|local)["'];?$/m, (_m, names: string) => {
    replaced.push("next/font");
    return names
      .split(",")
      .map((n) => n.trim().split(/\s+as\s+/).pop()!)
      .filter(Boolean)
      .map((n) => `// next/font stand-in: the font is left to the theme (added by the foundry mirror)\nconst ${n} = (_options: unknown) => ({ className: "", style: {} })`)
      .join("\n");
  });
  const left = out.match(/(?:\bfrom|\bimport)\s*\(?\s*["'](next(?:\/[^"']*)?)["']/);
  if (left) return { unsupported: left[1] };
  return { content: out, replaced };
}
