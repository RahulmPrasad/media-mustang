"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SideMenuContext = createContext({ open: false, setOpen: () => {} });

export function SideMenuProvider({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return <SideMenuContext.Provider value={{ open, setOpen }}>{children}</SideMenuContext.Provider>;
}

export const useSideMenu = () => useContext(SideMenuContext);
