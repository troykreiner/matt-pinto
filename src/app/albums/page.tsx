import Image from "next/image";

import { SiteShell } from "@/components/site-shell";

const streamingLinks = {
  appleMusic: "https://music.apple.com/us/album/acoustic-ep-ep/1846211627",
  spotify: "https://open.spotify.com/album/0jkgACfD61nr3EDzh8tRPO",
};

const tracks = [
  { number: "1", title: "Cigarettes Again", duration: "3:00" },
  { number: "2", title: "The Swan Song", duration: "2:54", explicit: true },
  { number: "3", title: "Blueberries", duration: "2:45" },
  { number: "4", title: "At Peace", duration: "3:44", explicit: true },
  {
    number: "5",
    title: "It Is What It Is (feat. David Godfrey)",
    duration: "5:20",
  },
];

function AppleMusicIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="stream-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4.5" y="4.5" width="23" height="23" rx="6.5" fill="#FA233B" opacity="0.78" />
      <path
        d="M20.2 8.4C21.16 8.4 21.6 8.86 21.6 9.76V19.32C21.6 21.17 20.2 22.56 18.18 22.56C16.41 22.56 15.14 21.48 15.14 19.99C15.14 18.37 16.58 17.39 18.58 17.39C19.02 17.39 19.43 17.44 19.8 17.55V10.69L14.39 11.71V18.17C14.39 19.9 13.04 21.11 11.01 21.11C9.22 21.11 7.96 20.03 7.96 18.54C7.96 16.92 9.4 15.94 11.4 15.94C11.86 15.94 12.28 16 12.67 16.12V10.43C12.67 9.59 13.02 9.14 13.93 8.97L20.2 7.76V8.4Z"
        fill="#FFD1DA"
      />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="stream-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.18" />
      <path
        d="M9.8 12.7C14.82 11.19 19.95 11.45 24.44 13.48"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10.98 16.68C14.87 15.53 18.86 15.73 22.4 17.39"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12.37 20.45C15.17 19.64 18.02 19.8 20.57 20.97"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AlbumsPage() {
  return (
    <SiteShell>
      <section className="albums-page">
        <div className="albums-module">
          <div className="albums-hero">
            <div className="album-cover-wrap">
              <Image
                src="/acoustic-ep-cover.jpg"
                alt="Acoustic EP album cover"
                width={3000}
                height={3000}
                className="album-cover"
                priority
              />
            </div>

            <div className="album-summary">
              <p className="album-kicker">Latest Release</p>
              <h1 className="album-title">Acoustic &ndash; EP</h1>
              <p className="album-release-year">Released on October 17, 2025</p>

              <div className="album-meta">
                <p>5 tracks, 18 minutes</p>
                <p>&copy; 2025 Wake to Dream</p>
              </div>

              <p className="album-caption">
                A stripped-back release built around room sound, close listening,
                and the feel of a live performance.
              </p>

              <div className="album-stream-grid">
                <a
                  href={streamingLinks.appleMusic}
                  target="_blank"
                  rel="noreferrer"
                  className="stream-button stream-button--apple"
                >
                  <AppleMusicIcon />
                  <span>
                    <strong>Apple Music</strong>
                    <small>Stream Now</small>
                  </span>
                </a>

                <a
                  href={streamingLinks.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="stream-button stream-button--spotify"
                >
                  <SpotifyIcon />
                  <span>
                    <strong>Spotify</strong>
                    <small>Listen Now</small>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="albums-details">
            <div className="album-tracklist">
              <div className="album-section-heading">
                <p className="album-section-label">Track List</p>
              </div>

              <ol className="album-track-items">
                {tracks.map((track) => (
                  <li key={track.number} className="album-track-row">
                    <span className="album-track-number">{track.number}</span>

                    <div className="album-track-copy">
                      <span className="album-track-title">{track.title}</span>
                      {track.explicit ? <span className="album-explicit-badge">E</span> : null}
                    </div>

                    <span className="album-track-duration">{track.duration}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="album-credits">
              <p className="album-section-label">Credits</p>
              <p className="album-credits-copy">
                Acoustic EP would not have been possible without the following people:
              </p>
              <ul className="album-credits-list">
                <li>Richie Cannata</li>
                <li>Alric Carter</li>
                <li>John Arbuckle</li>
                <li>Troy Zaretsky-Kreiner</li>
              </ul>
            </aside>
          </div>
        </div>

        <footer className="site-footer albums-footer">
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
