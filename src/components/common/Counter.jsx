"use client";

import { useEffect, useRef, useState } from "react";

// Port of the jQuery counterUp plugin (delay: 10, time: 1000): counts up once the number scrolls into view.
export default function Counter({ value, delay = 10, time = 1000 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const target = parseFloat(value);
    const decimals = (value.split(".")[1] || "").length;
    const steps = time / delay;
    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let i = 0;
        setDisplay((0).toFixed(decimals));
        timer = setInterval(() => {
          i += 1;
          setDisplay(i >= steps ? value : ((target * i) / steps).toFixed(decimals));
          if (i >= steps) clearInterval(timer);
        }, delay);
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [value, delay, time]);

  return (
    <span className="counter animated fadeInDownBig" ref={ref}>
      {display}
    </span>
  );
}
