import Image from "next/image";

import { SiteShell } from "@/components/site-shell";

const lessonFormUrl = "https://form.typeform.com/to/uImhn1up";

export default function Home() {
  return (
    <SiteShell fitViewport>
      <section className="hero-layout">
        <div className="hero-copy-group">
          <div className="hero-copy">
            <h1 className="sr-only">Matt Pinto</h1>
            <h2 className="hero-title">
              Playin&apos;&nbsp;Blues,
              <br />
              Rock &amp;
              <br />
              Soul Music
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
            src="/matt-pinto-hero.png"
            alt=""
            width={992}
            height={768}
            priority
            className="hero-figure"
          />
        </div>
        <footer className="site-footer">
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
