import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { NotificationIcon } from "~/components/icons/navbar/notificationicon";

export function NotificationsDropdown() {
  const session = useSession();
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <NavbarItem>
          <NotificationIcon />
        </NavbarItem>
      </DropdownTrigger>
      <DropdownMenu className="w-80" aria-label="Avatar Actions">
        <DropdownSection title="Notificacions">
          {!session.data?.user.emailVerified ? (
            <DropdownItem
              classNames={{
                base: "py-2",
                title: "text-base font-semibold",
              }}
              key="1"
              description="Please check your inbox to verify your email address."
            >
              ⚠ Verify your email adress
            </DropdownItem>
          ) : (
            <DropdownItem
              classNames={{
                base: "py-2",
                title: "text-base font-semibold",
              }}
              key="1"
              description="Thank you for verifying your email address. Your account is now fully activated!"
            >
              📣 Verified email
            </DropdownItem>
          )}
          {/* <DropdownItem
            key="2"
            classNames={{
              base: "py-2",
              title: "text-base font-semibold",
            }}
            description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
          >
            🚀 Say goodbye to paper receipts!
          </DropdownItem>
          <DropdownItem
            key="3"
            classNames={{
              base: "py-2",
              title: "text-base font-semibold",
            }}
            description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
          >
            📣 Edit your information
          </DropdownItem> */}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
