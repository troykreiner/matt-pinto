import Image from "next/image";

import { SiteShell } from "@/components/site-shell";
import { VideosGallery } from "@/components/videos-gallery";
import { pageCopy } from "@/lib/site-content";

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="stream-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="7" width="26" height="18" rx="6" fill="#FF0033" opacity="0.2" />
      <path d="M13.2 11.8L21.2 16L13.2 20.2V11.8Z" fill="currentColor" />
    </svg>
  );
}

const curatedVideos = [
  {
    id: "WtZ1wHksjNE",
    title: "Matt Pinto - Friend of the Devil",
    date: "Posted May 5, 2026",
    duration: "2:51",
    thumbnail:
      "https://i.ytimg.com/vi/WtZ1wHksjNE/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gPigZMA8=&rs=AOn4CLDl0O5tHcFcrUitrFCSxXmfb09DQA",
  },
  {
    id: "IdXexkpOO60",
    title: "How Fast Can I Teach Every Guitar Part in Whipping Post by The Allman Brothers (5 Min)?",
    date: "Posted May 4, 2026",
    duration: "4:57",
    thumbnail: "https://i.ytimg.com/vi/IdXexkpOO60/maxresdefault.jpg",
  },
  {
    id: "77eYT4FhjDI",
    title: "Matt Pinto Live #9 - Matt Pinto",
    date: "Posted November 24, 2025",
    duration: "26:18",
    thumbnail: "https://i.ytimg.com/vi/77eYT4FhjDI/maxresdefault.jpg",
  },
  {
    id: "fw3ZTWBfCLw",
    title: "A Day in the Life of a Working Musician",
    date: "Posted October 31, 2025",
    duration: "23:30",
    thumbnail: "https://i.ytimg.com/vi/fw3ZTWBfCLw/maxresdefault.jpg",
  },
  {
    id: "9Ao12nEnVHo",
    title: "Matt Pinto - It Is What It Is (feat. David Godfrey)",
    date: "Posted October 24, 2025",
    duration: "5:20",
    thumbnail: "https://i.ytimg.com/vi/9Ao12nEnVHo/maxresdefault.jpg",
  },
  {
    id: "J-Rc6xj_D-c",
    title: "Matt Pinto - At Peace",
    date: "Posted October 24, 2025",
    duration: "3:44",
    thumbnail: "https://i.ytimg.com/vi/J-Rc6xj_D-c/maxresdefault.jpg",
  },
  {
    id: "M5mtAQEJ5K4",
    title: "Matt Pinto - Blueberries",
    date: "Posted October 24, 2025",
    duration: "2:45",
    thumbnail: "https://i.ytimg.com/vi/M5mtAQEJ5K4/maxresdefault.jpg",
  },
  {
    id: "FZzW0roC7-4",
    title: "Matt Pinto - The Swan Song",
    date: "Posted October 24, 2025",
    duration: "2:54",
    thumbnail: "https://i.ytimg.com/vi/FZzW0roC7-4/maxresdefault.jpg",
  },
  {
    id: "Y00NNDdCY-M",
    title: "Matt Pinto - Cigarettes Again",
    date: "Posted October 24, 2025",
    duration: "3:00",
    thumbnail: "https://i.ytimg.com/vi/Y00NNDdCY-M/maxresdefault.jpg",
  },
];

export default function VideosPage() {
  return (
    <SiteShell>
      <section className="videos-page">
        <div className="videos-shell">
          <div className="videos-intro">
            <p className="videos-eyebrow">{pageCopy.videos.eyebrow}</p>
            <h1 className="videos-title">
              <span>Curated performances</span>
              <span>and live sessions.</span>
            </h1>
            <p className="videos-body">
              A hand-picked video archive of Matt Pinto videos, showcasing a variety of
              featured performances.
            </p>
            <a
              href="https://www.youtube.com/@mattpintoindis"
              target="_blank"
              rel="noreferrer"
              className="stream-button stream-button--youtube videos-subscribe-button"
            >
              <YouTubeIcon />
              <span>
                <strong>YouTube</strong>
                <small>Subscribe Now</small>
              </span>
            </a>
          </div>

          <VideosGallery videos={curatedVideos} />
        </div>

        <footer className="site-footer videos-footer">
          <Image
            src="/quotation-mark.svg"
            alt=""
            width={36}
            height={30}
            className="site-quote-mark"
          />
          <p className="site-footer-copy">Please, listen to each other</p>
        </footer>
      </section>
    </SiteShell>
  );
}
