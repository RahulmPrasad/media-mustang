"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, SplitText);

// React port of the page-level behaviour in the template's main.js
// (sticky header, preloader, GSAP title / image animations).
export default function SiteEffects() {
  const pathname = usePathname();

  // Preloader: hide once the page has loaded.
  useEffect(() => {
    const done = () => document.body.classList.add("loaded");
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    return () => window.removeEventListener("load", done);
  }, []);

  // Sticky header.
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll(".header--sticky").forEach((el) => el.classList.toggle("sticky", window.scrollY > 150));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // GSAP animations.
  useEffect(() => {
    const splits = [];
    const ctx = gsap.context(() => {
      if (window.innerWidth > 768) {
        // title_animation: letters slide in from the right.
        gsap.utils.toArray(".split-collab").forEach((el) => {
          const split = new SplitText(el, { type: "chars" });
          splits.push(split);
          gsap
            .timeline({ scrollTrigger: { trigger: el, start: "top 85%", end: "top 85%" } })
            .set(el, { opacity: 1 })
            .from(split.chars, { duration: 0.5, autoAlpha: 0, x: 50, stagger: { amount: 1 }, ease: "back.out(1)" });
        });

        // skew_up: words rise up with a slight skew.
        gsap.utils.toArray(".skew-up").forEach((el) => {
          const split = new SplitType(el, { types: "lines, words", lineClass: "word-line" });
          splits.push(split);
          gsap
            .timeline({
              scrollTrigger: { trigger: el, start: "top 85%", end: "top 85%", onComplete: () => el.classList.remove("skew-up") },
            })
            .set(el, { opacity: 1 })
            .from(split.words, { y: "100%", skewX: "-5", duration: 2, stagger: 0.09, ease: "expo.out" });
        });

        // skew-up-2: letters rise up.
        gsap.utils.toArray(".skew-up-2").forEach((el) => {
          const split = new SplitText(el, { type: "chars" });
          splits.push(split);
          gsap
            .timeline({ scrollTrigger: { trigger: el, start: "top 85%", end: "top 85%" } })
            .set(el, { opacity: 1 })
            .from(split.chars, { duration: 0.4, autoAlpha: 0, y: 50, stagger: { amount: 1 }, ease: "back.out(0)" });
        });
      }

      // imageSlideGsap
      if (document.querySelector(".images")) {
        gsap.to(".images", { scrollTrigger: { start: "top bottom", end: "bottom top", scrub: 1 }, x: 330 });
      }

      // imageParalax
      gsap.utils.toArray(".anim-image-parallax").forEach((img) => {
        const wrap = img.closest(".anim-image-parallax-wrap");
        const inner = wrap.querySelector(".anim-image-parallax-inner");
        gsap.to(img, {
          yPercent: 80,
          ease: "none",
          scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap
          .timeline({ scrollTrigger: { trigger: wrap, start: "top 90%" } })
          .from(inner, { duration: 1.5, autoAlpha: 0, scale: 1.4, ease: "power2.out", clearProps: "all" });
      });
    });

    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, [pathname]);

  return null;
}
