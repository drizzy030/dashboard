import React from "react";
import { useLockedBody } from "~/components/hooks/useBodyLock";
import { SidebarContext } from "~/components/layout/layout-context";
import { NavbarWrapper } from "~/components/navbar/navbar";
import { SidebarWrapper } from "~/components/sidebar/sidebar";

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  function handleToggleSidebar() {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  }

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
}
