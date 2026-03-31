import Image from "next/image";

import { ResumeViewer } from "@/components/resume-viewer";
import { SiteShell } from "@/components/site-shell";

export default function ResumePage() {
  return (
    <SiteShell>
      <section className="resume-page">
        <div className="resume-module">
          <div className="resume-copy">
            <h1 className="resume-title">
              Performance history, credentials,
              <br />
              and professional highlights.
            </h1>
            <a href="/matt-pinto-resume.pdf" download className="resume-download-link">
              Click here to download .pdf
            </a>
          </div>

          <ResumeViewer />
        </div>

        <footer className="site-footer resume-footer">
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
