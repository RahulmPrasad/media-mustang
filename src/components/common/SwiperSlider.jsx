"use client";

import { useEffect, useRef } from "react";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

// Slider settings carried over from the template's main.js.
const presets = {
  "brand-2": {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: true },
    breakpoints: {
      1200: { slidesPerView: 5 },
      900: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      580: { slidesPerView: 2 },
      360: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  },
  "service-2": {
    slidesPerView: 3,
    spaceBetween: 48,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 3 },
      900: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      580: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  },
  "testimonials-7": {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      580: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  },
};

// Renders the same `.swiper > .swiper-wrapper` markup as the reference
// template and initialises Swiper on it once mounted.
export default function SwiperSlider({ className, wrapperClassName = "swiper-wrapper", preset, after, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const pagination = el.querySelector(".swiper-pagination");
    const next = el.querySelector(".swiper-button-next");
    const prev = el.querySelector(".swiper-button-prev");
    const swiper = new Swiper(el, {
      modules: [Autoplay, Navigation, Pagination],
      ...presets[preset],
      pagination: pagination ? { el: pagination, clickable: true } : false,
      navigation: next && prev ? { nextEl: next, prevEl: prev } : false,
    });
    return () => swiper.destroy(true, true);
  }, [preset]);

  return (
    <div className={className} ref={ref}>
      <div className={wrapperClassName}>{children}</div>
      {after}
    </div>
  );
}
