import { ContentPage } from "@/components/content-page";
import { SiteShell } from "@/components/site-shell";
import { pageCopy } from "@/lib/site-content";

export default function ResumePage() {
  return (
    <SiteShell>
      <ContentPage {...pageCopy.resume} />
    </SiteShell>
  );
}
