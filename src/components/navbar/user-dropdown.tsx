import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

export function UserDropdown() {
  const session = useSession();
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar as="button" size="md" src={session.data?.user.image ?? ""} />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex w-full flex-col items-start justify-start"
        >
          <p>Signed in as</p>
          <p>{session.data?.user.email}</p>
        </DropdownItem>
        <DropdownItem href="/dashboard" key="dashboard">
          Dashboard
        </DropdownItem>
        <DropdownItem href="/dashboard/account" key="settings">
          My Settings
        </DropdownItem>
        <DropdownItem
          target={"_blank"}
          href="https://discord.com"
          key="help_and_feedback"
        >
          Help & Feedback
        </DropdownItem>
        <DropdownItem
          onClick={() => signOut()}
          key="logout"
          color="danger"
          className="text-danger "
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
