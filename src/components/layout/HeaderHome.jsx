import MenuButton from "./MenuButton";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <header className="header-two header--sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-two-content-main">
              <Link href="/" className="logo-area">
                <img className="light" src="/assets/images/logo/logo-dark.png" width="250" height="40" alt="" />
                {" "}
                <img className="dark" src="/assets/images/logo/logo-dark.png" width="250" height="40" alt="logo" />
              </Link>
              <nav className="main-nav-area">
                <ul className="list-unstyled mustang-desktop-menu">
                  <li className="menu-item mustang-has-dropdown">
                    <Link href="/" className="mustang-dropdown-main-element">Home</Link>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <a href="#" className="mustang-dropdown-main-element">Pages</a>
                  </li>
                  <li className="menu-item mustang-has-dropdown">
                    <a href="#Service" className="mustang-dropdown-main-element">Services</a>
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
              <div className="header-end-area">
                <Link href="/contact" className="rts-btn btn-primary-2">Start a project with us</Link>
                <MenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
