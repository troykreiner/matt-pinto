import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { pageCopy } from "@/lib/site-content";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="stream-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="7" fill="#C13584" opacity="0.24" />
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
      className="stream-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#25F4EE" opacity="0.18" />
      <path
        d="M18.1 8.1C18.72 10.08 20.1 11.5 22.18 12.06V14.88C20.74 14.86 19.45 14.39 18.3 13.47V19.22C18.3 22.14 16.18 24 13.67 24C10.96 24 8.9 21.96 8.9 19.42C8.9 16.74 11.03 14.78 13.93 14.78C14.3 14.78 14.63 14.81 14.98 14.9V17.7C14.64 17.58 14.31 17.52 13.96 17.52C12.57 17.52 11.64 18.32 11.64 19.36C11.64 20.44 12.51 21.16 13.62 21.16C14.81 21.16 15.58 20.37 15.58 18.93V8.1H18.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-page">
        <div className="contact-shell">
          <div className="content-copy contact-copy">
            <h1 className="content-title contact-title">{pageCopy.contact.title}</h1>
            <p className="content-body">{pageCopy.contact.body}</p>
            <div className="contact-notes">
              <p>Based in New York, USA</p>
              <p>Follow @mattpintoindis</p>
            </div>

            <div className="contact-social-grid">
              <a
                href="https://www.instagram.com/mattpintoindis/"
                target="_blank"
                rel="noreferrer"
                className="stream-button stream-button--instagram"
              >
                <InstagramIcon />
                <span>
                  <strong>Instagram</strong>
                  <small>Follow Now</small>
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@mattpintoindis?lang=en"
                target="_blank"
                rel="noreferrer"
                className="stream-button stream-button--tiktok"
              >
                <TikTokIcon />
                <span>
                  <strong>TikTok</strong>
                  <small>Follow Now</small>
                </span>
              </a>
            </div>
          </div>

          <ContactForm />
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
