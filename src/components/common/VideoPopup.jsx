"use client";

import { useEffect, useState } from "react";

// Replaces the template's magnific-popup iframe lightbox, using the same mfp-* markup and classes.
export default function VideoPopup({ href, embed, className, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.documentElement.classList.add("mfp-zoom-out-cur");
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("mfp-zoom-out-cur");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onClick = (e) => {
    // Same as magnific's `disableOn: 700`: small screens just follow the link.
    if (window.innerWidth < 700) return;
    e.preventDefault();
    setOpen(true);
  };

  const close = (e) => {
    if (e.target.closest(".mfp-iframe-scaler") && !e.target.classList.contains("mfp-close")) return;
    setOpen(false);
  };

  return (
    <>
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
      {open && (
        <>
          <div className="mfp-bg mfp-fade mfp-ready"></div>
          <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex={-1} style={{ overflow: "hidden auto" }} onClick={close}>
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button title="Close (Esc)" type="button" className="mfp-close">
                    ×
                  </button>
                  <iframe className="mfp-iframe" src={embed} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
