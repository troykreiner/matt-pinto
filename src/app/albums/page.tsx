import { ContentPage } from "@/components/content-page";
import { SiteShell } from "@/components/site-shell";
import { pageCopy } from "@/lib/site-content";

export default function AlbumsPage() {
  return (
    <SiteShell>
      <ContentPage {...pageCopy.albums} />
    </SiteShell>
  );
}
