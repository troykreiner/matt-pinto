"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

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
      <path d="M13 10.9L22 16L13 21.1V10.9Z" fill="#444444" />
    </svg>
  );
}

function truncateVideoTitle(title: string) {
  return title.length > 76 ? `${title.slice(0, 73).trimEnd()}...` : title;
}

export function VideosGallery({ videos }: VideosGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="videos-grid">
      {videos.map((video) => {
        const isActive = activeId === video.id;

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
