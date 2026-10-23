import "@/styles/vendor/swiper.css";
import "@/styles/vendor/magnific-popup.css";
import "@/styles/vendor/metismenu.css";
import "@/styles/vendor/bootstrap.css";
import "@/styles/theme.css";
import "@/styles/footer-home.css";
import "@/styles/sticky-sidebar.css";
import "@/styles/payment-terms.css";
// Font Awesome Free 6.7.2 – same set the reference pulled in through its Font Awesome kit.
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/v4-shims.min.css";
import "@fortawesome/fontawesome-free/css/v4-font-face.min.css";
import "@fortawesome/fontawesome-free/css/v5-font-face.min.css";

import { SideMenuProvider } from "@/components/layout/SideMenuContext";
import SideBar from "@/components/layout/SideBar";
import Preloader from "@/components/layout/Preloader";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import SiteEffects from "@/components/layout/SiteEffects";

export const metadata = {
  title: "Media Mustang",
  icons: { icon: "/assets/images/tit-logo.png" },
};

// Applies the saved (or system) theme before first paint.
const themeScript = `(function(){try{var t=localStorage.getItem('mustang-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" />
      </head>
      <body>
        <SideMenuProvider>
          {children}
          <SideBar />
          <Preloader />
          <ThemeSwitcher />
        </SideMenuProvider>
        <SiteEffects />
      </body>
    </html>
  );
}
