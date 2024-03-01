import { createContext, useContext } from "react";

interface SidebarContext {
  collapsed: boolean;
  setCollapsed: () => void;
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: () => {},
});

export function useSidebarContext() {
  return useContext(SidebarContext);
}
