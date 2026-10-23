"use client";

// Light / dark toggle. The initial theme is applied before paint by the
// inline script in app/layout.jsx; this only flips it.
export default function ThemeSwitcher() {
  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const target = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", target);
    try {
      localStorage.setItem("mustang-theme", target);
    } catch {}
  };

  return (
    <div className="rts-switcher rts-theme-mode">
      <div className="rts-darkmode">
        <a id="rts-data-toggle" className="rts-dark-light" onClick={toggle}>
          <i className="rts-go-dark fa-solid fa-moon"></i>{" "}
          <i className="rts-go-light fa-solid fa-sun"></i>
        </a>
      </div>
    </div>
  );
}
