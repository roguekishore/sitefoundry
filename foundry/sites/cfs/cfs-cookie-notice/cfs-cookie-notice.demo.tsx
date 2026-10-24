// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { CfsCookieNotice, type CfsCookieNoticeProps } from "./cfs-cookie-notice";

export const cookieNoticeSample: CfsCookieNoticeProps = {
  eyebrow: "Privacy notice",
  title: "Two small files, nothing more.",
  text: "We count visits and log errors so the site keeps working.",
  policyLink: { label: "How we handle data", href: "#" },
  declineLabel: "No thanks",
  acceptLabel: "Allow",
};

export default function Demo() {
  return (
    <div className="min-h-80 bg-background">
      <CfsCookieNotice {...cookieNoticeSample} />
    </div>
  );
}
