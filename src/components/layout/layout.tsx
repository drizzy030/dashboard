import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />

        <NavbarWrapper>
          <div className="px-5 py-4">
            <Breadcrumbs>
              {pathParts.map((part, index) => (
                <BreadcrumbItem key={index}>
                  <Link href={`/${pathParts.slice(0, index + 1).join("/")}`}>
                    {part}
                  </Link>
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          </div>

          {children}
        </NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
}
