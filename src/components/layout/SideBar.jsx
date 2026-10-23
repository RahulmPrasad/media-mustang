"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useSideMenu } from "./SideMenuContext";
import SocialLinks from "./SocialLinks";
import useCollapse from "@/components/common/useCollapse";

const mmClasses = { base: "mm-collapse", show: "mm-show", collapsing: "mm-collapsing" };

const menu = [
  {
    title: "Home",
    links: [
      ["SEO Marketing", "/"],
      ["Digital Marketing", "#"],
      ["Digital Agency", "#"],
      ["Startup Agency", "#"],
      ["Advertising Agency", "#"],
      ["Web Design Agency", "#"],
      ["Social Media Agency", "#"],
      ["SEO Agency", "#"],
    ],
  },
  {
    title: "Pages",
    links: [
      ["About", "#"],
      ["Our Team", "#"],
      ["FAQ's", "#"],
      ["Book a Demo", "#"],
      ["Free Audit", "#"],
      ["Pricing Plans", "/pricing"],
      ["404 Page", "#"],
    ],
  },
  {
    title: "Services",
    links: [["Services", "#"]],
    third: {
      title: "Service Details",
      items: ["Paid Search Marketing", "Email Marketing", "Social Media Marketing", "Influencer Marketing"],
    },
  },
  {
    title: "Work",
    links: [
      ["Case Studies", "#"],
      ["Case Studies Details", "#"],
    ],
  },
  {
    title: "Blog",
    links: [
      ["Blog", "#"],
      ["Blog Left Sidebar", "#"],
      ["Blog Grid", "#"],
      ["Blog Grid Right Sidebar", "/blog"],
      ["Blog Grid Left Sidebar", "#"],
      ["Blog Details", "#"],
    ],
  },
];

// metisMenu submenu: `mm-active` on the <li>, `mm-show` on the <ul>.
function Dropdown({ title, open, onToggle, className = "has-droupdown", ulClassName, children }) {
  const ref = useCollapse(open, mmClasses);
  const initialClass = useRef(`${ulClassName} mm-collapse`);

  return (
    <li className={`${className}${open ? " mm-active" : ""}`}>
      <a
        href="#"
        className="main"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {title}
      </a>
      <ul className={initialClass.current} ref={ref}>
        {children}
      </ul>
    </li>
  );
}

function MenuLink({ href, children }) {
  return href === "#" ? (
    <a className="mobile-menu-link" href="#">
      {children}
    </a>
  ) : (
    <Link className="mobile-menu-link" href={href}>
      {children}
    </Link>
  );
}

export default function SideBar() {
  const { open, setOpen } = useSideMenu();
  const [active, setActive] = useState(-1);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <>
      <div id="anywhere-home" className={open ? "bgshow" : ""} onClick={() => setOpen(false)}></div>
      <div id="side-bar" className={`side-bar header-two${open ? " show" : ""}`}>
        <button className="close-icon-menu" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              {menu.map((item, i) => (
                <Dropdown key={item.title} title={item.title} ulClassName="submenu" open={active === i} onToggle={() => setActive(active === i ? -1 : i)}>
                  {item.links.map(([label, href]) => (
                    <li key={label}>
                      <MenuLink href={href}>{label}</MenuLink>
                    </li>
                  ))}
                  {item.third && (
                    <Dropdown title={item.third.title} className="has-droupdown third-lvl" ulClassName="submenu-third-lvl" open={thirdOpen} onToggle={() => setThirdOpen(!thirdOpen)}>
                      {item.third.items.map((label) => (
                        <li key={label}>
                          <a href="#"></a>
                          {label}
                        </li>
                      ))}
                    </Dropdown>
                  )}
                </Dropdown>
              ))}
              <li>
                <Link href="/contact" className="main">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinks className="social-area-one pl--20 mt--100" />
        </div>
      </div>
    </>
  );
}
