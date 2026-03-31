import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { pageCopy } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-page">
        <div className="contact-shell">
          <div className="content-copy contact-copy">
            <h1 className="content-title contact-title">{pageCopy.contact.title}</h1>
            <p className="content-body">{pageCopy.contact.body}</p>
            <div className="contact-notes">
              <p>Based in New York</p>
              <p>
                Follow on{" "}
                <a
                  href="https://www.instagram.com/mattpintoindis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @mattpintoindis
                </a>
              </p>
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
