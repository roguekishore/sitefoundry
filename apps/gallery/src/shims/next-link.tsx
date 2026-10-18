// Stand-in for next/link so vault items written for Next.js render in the gallery.
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | { pathname?: string };
  children?: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

export default function Link({ href, prefetch: _p, replace: _r, scroll: _s, ...rest }: Props) {
  return <a href={typeof href === "string" ? href : href.pathname ?? "#"} {...rest} />;
}
