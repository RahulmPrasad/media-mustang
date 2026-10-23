"use client";

import { useEffect, useRef } from "react";

const TRANSITION_MS = 350;

// Height transition used by Bootstrap's collapse and metisMenu:
// `<base>` -> `<collapsing>` (animated height) -> `<base> <show>`.
// The element's className is managed imperatively, so render it with the
// initial class only.
export default function useCollapse(open, { base, show, collapsing }) {
  const ref = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    let timer;
    if (open) {
      el.classList.remove(base);
      el.classList.add(collapsing);
      el.style.height = "0px";
      requestAnimationFrame(() => {
        el.style.height = `${el.scrollHeight}px`;
      });
      timer = setTimeout(() => {
        el.classList.remove(collapsing);
        el.classList.add(base, show);
        el.style.height = "";
      }, TRANSITION_MS);
    } else {
      el.style.height = `${el.getBoundingClientRect().height}px`;
      void el.offsetHeight;
      el.classList.add(collapsing);
      el.classList.remove(base, show);
      el.style.height = "0px";
      timer = setTimeout(() => {
        el.classList.remove(collapsing);
        el.classList.add(base);
        el.style.height = "";
      }, TRANSITION_MS);
    }
    return () => clearTimeout(timer);
  }, [open, base, show, collapsing]);

  return ref;
}
