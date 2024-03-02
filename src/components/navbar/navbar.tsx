import { Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { BurguerButton } from "~/components/navbar/burguer-button";
import { NotificationsDropdown } from "~/components/navbar/notifications-dropdown";
import { UserDropdown } from "~/components/navbar/user-dropdown";

interface Props {
  children: React.ReactNode;
}
export function NavbarWrapper({ children }: Props) {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden"></NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <NotificationsDropdown />

          <Link href="https://discord.com" isExternal>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                className="fill-default-400"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4c-6.961,0 -10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4c0,0 -5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5c7.875,0 12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zM17.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zM30.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
}
