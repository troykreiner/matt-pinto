"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type VideoItem = {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
};

type VideosGalleryProps = {
  videos: VideoItem[];
};

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="video-play-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.4 9.6L23.2 16L11.4 22.4V9.6Z" fill="#444444" />
    </svg>
  );
}

function truncateVideoTitle(title: string) {
  return title.length > 76 ? `${title.slice(0, 73).trimEnd()}...` : title;
}

export function VideosGallery({ videos }: VideosGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [useExternalPlayback, setUseExternalPlayback] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updatePlaybackMode = () => setUseExternalPlayback(mediaQuery.matches);

    updatePlaybackMode();
    mediaQuery.addEventListener("change", updatePlaybackMode);

    return () => mediaQuery.removeEventListener("change", updatePlaybackMode);
  }, []);

  return (
    <div className="videos-grid">
      {videos.map((video) => {
        const isActive = activeId === video.id;
        const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;

        return (
          <article key={video.id} className="video-card">
            <div className="video-frame">
              {isActive ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-embed"
                />
              ) : useExternalPlayback ? (
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="video-thumb-button"
                  aria-label={`Play ${video.title} on YouTube`}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    className="video-thumb-image"
                    loading="lazy"
                  />
                  <span className="video-thumb-overlay" />
                  <span className="video-duration">{video.duration}</span>
                  <span className="video-play-badge">
                    <PlayIcon />
                  </span>
                </a>
              ) : (
                <button
                  type="button"
                  className="video-thumb-button"
                  onClick={() => setActiveId(video.id)}
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    className="video-thumb-image"
                    loading="lazy"
                  />
                  <span className="video-thumb-overlay" />
                  <span className="video-duration">{video.duration}</span>
                  <span className="video-play-badge">
                    <PlayIcon />
                  </span>
                </button>
              )}
            </div>

            <div className="video-meta">
              <h2 className="video-title">{truncateVideoTitle(video.title)}</h2>
              <p className="video-date">{video.date}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
