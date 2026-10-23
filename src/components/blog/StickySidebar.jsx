"use client";

import { useEffect, useRef } from "react";

const MARGIN_TOP = 130;

// Replaces theia-sticky-sidebar (additionalMarginTop: 130). A sidebar taller
// than the viewport sticks by its bottom edge instead of its top.
export default function StickySidebar({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const update = () => {
      el.style.top = `${Math.min(MARGIN_TOP, window.innerHeight - el.offsetHeight)}px`;
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="theiaStickySidebar" ref={ref}>
      {children}
    </div>
  );
}
