// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionNoticeProps } from "./castelion-notice";
import { CastelionNotice } from "./castelion-notice";

export const noticeSample: CastelionNoticeProps = {
  title: "Watch Out for Fake Job Offers",
  body: (
    <p>
      Pellworth never reaches out to applicants from free webmail addresses. Every real message comes from the{" "}
      <a href="#">@pellworth.example</a> domain, and you should always confirm you are talking to someone who actually works here.
    </p>
  ),
};

export default function Demo() {
  return <CastelionNotice {...noticeSample} />;
}
