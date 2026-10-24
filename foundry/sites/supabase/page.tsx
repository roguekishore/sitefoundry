// The whole Supabase recreation, built only from this site's blocks, with each block's demo
// content (a made-up SQL backend, Tidepool). Light is the faithful mode.
import { SupabaseCommunity } from "@foundry/supabase-community";
import { SupabaseCta } from "@foundry/supabase-cta";
import { SupabaseDashboard } from "@foundry/supabase-dashboard";
import { SupabaseFooter } from "@foundry/supabase-footer";
import { SupabaseFrameworks } from "@foundry/supabase-frameworks";
import { SupabaseHeader } from "@foundry/supabase-header";
import { SupabaseHero } from "@foundry/supabase-hero";
import { SupabaseLogos } from "@foundry/supabase-logos";
import { SupabaseOpenSource } from "@foundry/supabase-open-source";
import { SupabaseProducts } from "@foundry/supabase-products";
import { SupabaseStories } from "@foundry/supabase-stories";
import { SupabaseTemplates } from "@foundry/supabase-templates";
import { communitySample } from "./supabase-community/supabase-community.demo";
import { ctaSample } from "./supabase-cta/supabase-cta.demo";
import { dashboardSample } from "./supabase-dashboard/supabase-dashboard.demo";
import { footerSample } from "./supabase-footer/supabase-footer.demo";
import { frameworksSample } from "./supabase-frameworks/supabase-frameworks.demo";
import { headerSample } from "./supabase-header/supabase-header.demo";
import { heroSample } from "./supabase-hero/supabase-hero.demo";
import { logosSample } from "./supabase-logos/supabase-logos.demo";
import { openSourceSample } from "./supabase-open-source/supabase-open-source.demo";
import { productsSample } from "./supabase-products/supabase-products.demo";
import { storiesSample } from "./supabase-stories/supabase-stories.demo";
import { templatesSample } from "./supabase-templates/supabase-templates.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <SupabaseHeader {...headerSample} />
      <SupabaseHero {...heroSample} />
      <SupabaseProducts {...productsSample} />
      <SupabaseLogos {...logosSample} className="pt-8 lg:pt-0" />
      <SupabaseDashboard {...dashboardSample} />
      <SupabaseFrameworks {...frameworksSample} />
      <SupabaseTemplates {...templatesSample} />
      <SupabaseStories {...storiesSample} />
      <SupabaseCommunity {...communitySample} />
      <SupabaseOpenSource {...openSourceSample} />
      <SupabaseCta {...ctaSample} />
      <SupabaseFooter {...footerSample} />
    </div>
  );
}
