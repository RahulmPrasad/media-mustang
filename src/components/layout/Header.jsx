import MenuButton from "./MenuButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header-style-one header--sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-style-one-wrapper">
              <div className="logo-area">
                <Link href="/" className="logo">
                  <img src="/assets/images/logo/logo-dark.png" width="250" height="40" alt="logo" />
                </Link>
              </div>
              <nav className="main-nav-area">
                <ul className="list-unstyled mustang-desktop-menu">
                  <li className="menu-item mustang-has-dropdown">
                    <Link href="/" className="mustang-dropdown-main-element">Home</Link>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <a href="#" className="mustang-dropdown-main-element">Pages</a>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <a href="#" className="mustang-dropdown-main-element">Services</a>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <Link href="/pricing" className="mustang-dropdown-main-element">Pricing</Link>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <Link href="/blog" className="mustang-dropdown-main-element">Blog</Link>
                  </li>
                  <li className="menu-item">
                    <Link className="main-element mustang-dropdown-main-element" href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="button-area-start">
                <a className="call-us" href="tel:+91 85112 66673">
                  <i className="fa-solid fa-phone"></i>
                  {" "}+91 85112 66673
                </a>
                {" "}
                <a href="#" className="rts-btn btn-primary">Free Audit</a>
                <MenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
