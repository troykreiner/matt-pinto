"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ResumeViewer() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isDesktop) {
    return (
      <div className="resume-preview-link resume-preview-link--mobile">
        <Image
          src="/matt-pinto-resume.jpg"
          alt="Matt Pinto resume preview"
          width={1224}
          height={1584}
          className="resume-preview-image"
          priority
        />
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className="resume-preview-link resume-preview-link--desktop"
        aria-label="Open enlarged Matt Pinto resume preview"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/matt-pinto-resume.jpg"
          alt="Matt Pinto resume preview"
          width={1224}
          height={1584}
          className="resume-preview-image"
          priority
        />
      </button>

      {isOpen ? (
        <div
          className="resume-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Matt Pinto resume preview"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="resume-modal-close"
            aria-label="Close enlarged resume preview"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>

          <div className="resume-modal-scroll" onClick={(event) => event.stopPropagation()}>
            <Image
              src="/matt-pinto-resume.jpg"
              alt="Enlarged Matt Pinto resume preview"
              width={1224}
              height={1584}
              className="resume-modal-image"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
