"use client";

import { useSideMenu } from "./SideMenuContext";

export default function MenuButton() {
  const { setOpen } = useSideMenu();

  return (
    <div className="menu-btn" id="menu-btn" onClick={() => setOpen(true)}>
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
        <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
        <rect width="20" height="2" fill="#1F1F25"></rect>
      </svg>
    </div>
  );
}
