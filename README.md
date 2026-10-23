# Media Mustang

Next.js (App Router) rebuild of the static HTML site in `../reference`, with the same markup, class names and styles.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Routes

| Route      | Reference page     |
| ---------- | ------------------ |
| `/`        | `index.html`       |
| `/pricing` | `pricing.html`     |
| `/blog`    | `blog-grid-2.html` |
| `/contact` | `contact.html`     |

## Structure

```
src/
  app/                  pages, root layout, api/contact (form endpoint)
  components/
    layout/             headers, footers, side menu, preloader, theme switcher, SiteEffects (GSAP, sticky header)
    common/             SwiperSlider, Accordion, Counter, VideoPopup, RecentBlog, shared FAQ data
    home/ pricing/ blog/ contact/   one file per page section
  styles/
    vendor/             bootstrap, swiper, metismenu, magnific-popup, fontawesome (from the template)
    theme.css           the template's style.css
    footer-home.css     the home footer styles (an inline <style> block in index.html)
    sticky-sidebar.css  blog sidebar
public/assets/          images and fonts, same paths as the reference
```

The template's jQuery plugins are replaced by React components and hooks: Swiper 8 (same version as the template), Bootstrap accordion, metisMenu, counterUp, magnific-popup, theia-sticky-sidebar, and the GSAP / SplitText animations.

`/api/contact` only validates the form and logs it. Connect an email service there to actually send messages.
