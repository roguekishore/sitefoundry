import { cn } from "@foundry/foundry-utils";
import { renderCommerce, type CommerceMock } from "./commerce";
import { renderDeveloper, type DeveloperMock } from "./developer";

export type { BillingMock, CardMock, ChatShopMock, CheckoutMock, CommerceMock, GlobeMock, PlatformMock } from "./commerce";
export type { AppsMock, DashboardMock, DeveloperMock, EditorMock, QrChatMock } from "./developer";

export type StripeMockContent = CommerceMock | DeveloperMock;

export interface StripeMockProps {
  /** which vignette to draw, and its words */
  mock: StripeMockContent;
  className?: string;
}

/**
 * Small product-UI vignettes drawn from divs in Stripe's manner: crisp white panels with a
 * long soft navy shadow, tiny 8–11px type, hairline rows, and theme-coloured accents.
 */
export function StripeMock({ mock, className }: StripeMockProps) {
  const inner =
    mock.kind === "dashboard" || mock.kind === "editor" || mock.kind === "qr-chat" || mock.kind === "apps"
      ? renderDeveloper(mock)
      : renderCommerce(mock);
  return <div className={cn("relative size-full font-sans font-light", className)}>{inner}</div>;
}
