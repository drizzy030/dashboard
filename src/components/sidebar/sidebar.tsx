import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { AccountsIcon } from "~/components/icons/sidebar/accounts-icon";
import { HomeIcon } from "~/components/icons/sidebar/home-icon";
import { PaymentsIcon } from "~/components/icons/sidebar/payments-icon";
import { ProductsIcon } from "~/components/icons/sidebar/products-icon";
import { useSidebarContext } from "~/components/layout/layout-context";
import { CompaniesDropdown } from "~/components/sidebar/companies-dropdown";
import { SidebarItem } from "~/components/sidebar/sidebar-item";
import { SidebarMenu } from "~/components/sidebar/sidebar-menu";
import { Sidebar } from "~/components/sidebar/sidebar.styles";
import { api } from "~/trpc/react";

export function SidebarWrapper() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const {
    mutate: sendVerificationEmail,
    isLoading: sendVerificationEmailIsLoading,
  } = api.auth.sendVerificationEmail.useMutation({
    onSuccess: ({ success }) => {
      toast.success(success);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const session = useSession();
  return (
    <aside className="sticky top-0 z-[202] h-screen">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown
            name="Void"
            logo="https://cdn.discordapp.com/attachments/1201233417090637976/1211409898223571035/logo.gif?ex=65ee1862&is=65dba362&hm=45c63e78410ec8e38eaa7d3ddc6b7cb41b45d1f7a7c0f6c0f561be3046880903&"
            description="Best Spoofer"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/account"}
                title="Account"
                icon={<AccountsIcon />}
                href="/dashboard/account"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/transactions"}
                title="Transactions"
                icon={<PaymentsIcon />}
                href="/dashboard/transactions"
              />

              <SidebarItem
                isActive={pathname === "/dashboard/products"}
                title="Products"
                icon={<ProductsIcon />}
                href="/dashboard/products"
              />
            </SidebarMenu>

            {/* <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/dashboard/changelog"}
                title="Changelog"
                icon={<ChangeLogIcon />}
                href="/dashboard/changelog"
              />
            </SidebarMenu> */}
            {!session.data?.user.emailVerified && (
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt=""
                  className="object-cover"
                  height={50}
                  src=""
                  width={50}
                />
                <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-tiny text-white/80">⚠️</p>
                  <Button
                    className="bg-black/20 text-tiny text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    isLoading={sendVerificationEmailIsLoading}
                    size="sm"
                    onClick={() =>
                      sendVerificationEmail({
                        email: session.data?.user.email ?? "",
                      })
                    }
                  >
                    Verify your email!
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
          <div className={Sidebar.Footer()}></div>
        </div>
      </div>
    </aside>
  );
}
