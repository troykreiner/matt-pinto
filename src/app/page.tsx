import Image from "next/image";

import { SiteShell } from "@/components/site-shell";

const lessonFormUrl = "https://form.typeform.com/to/uImhn1up";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="home-social-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="9.1" y="9.1" width="13.8" height="13.8" rx="4.2" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="3.7" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="22.2" cy="9.8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="home-social-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1 8.1C18.72 10.08 20.1 11.5 22.18 12.06V14.88C20.74 14.86 19.45 14.39 18.3 13.47V19.22C18.3 22.14 16.18 24 13.67 24C10.96 24 8.9 21.96 8.9 19.42C8.9 16.74 11.03 14.78 13.93 14.78C14.3 14.78 14.63 14.81 14.98 14.9V17.7C14.64 17.58 14.31 17.52 13.96 17.52C12.57 17.52 11.64 18.32 11.64 19.36C11.64 20.44 12.51 21.16 13.62 21.16C14.81 21.16 15.58 20.37 15.58 18.93V8.1H18.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="home-social-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8.3" y="10.2" width="15.4" height="11.6" rx="4.2" stroke="currentColor" strokeWidth="2" />
      <path d="M14.2 13.3L20 16L14.2 18.7V13.3Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <SiteShell fitViewport>
      <section className="hero-layout">
        <div className="hero-copy-group">
          <div className="hero-copy">
            <h1 className="sr-only">Matt Pinto</h1>
            <h2 className="hero-title">
              <span className="hero-title-line">Playin&apos; Blues,</span>
              <span className="hero-title-line">Rock &amp;</span>
              <span className="hero-title-line">Soul Music</span>
            </h2>
          </div>
          <a
            href={lessonFormUrl}
            target="_blank"
            rel="noreferrer"
            className="hero-lesson-link"
          >
            Book a Lesson
          </a>
        </div>
        <div className="hero-figure-wrap" aria-hidden="true">
          <div className="hero-figure-tint" />
          <Image
            src="/matt-pinto-hero-main-creme-v2.jpg"
            alt=""
            width={992}
            height={768}
            priority
            className="hero-figure"
          />
        </div>
        <footer className="site-footer home-footer">
          <div className="home-footer-quote">
            <Image
              src="/quotation-mark.svg"
              alt=""
              width={36}
              height={30}
              className="site-quote-mark"
            />
            <p className="site-footer-copy">Please, listen to each other</p>
          </div>
          <div className="home-follow">
            <div className="home-follow-icons">
              <a
                href="https://www.instagram.com/mattpintoindis/"
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@mattpintoindis?lang=en"
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.youtube.com/@mattpintoindis"
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </SiteShell>
  );
}
