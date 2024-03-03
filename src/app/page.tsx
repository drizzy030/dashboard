"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Main } from "~/app/_components/main";

export default function Home() {
  const [textColor, setTextColor] = useState("");
  return (
    <section>
      <div className="relative flex w-full items-center justify-center">
        <div className="fixed inset-x-0 top-2 z-50 mx-auto max-w-2xl">
          <nav className="boder shadow-input relative flex items-center justify-center space-x-4 rounded-full border border-black/[0.2] bg-white px-8 py-3 dark:border-white/[0.2] dark:bg-black ">
            nextjs trpc tailwindcss prisma nextauth
          </nav>
        </div>
      </div>
      <Main className="bg-dotted-spacing-4 bg-dotted-gray-900">
        <p className="text-xs text-neutral-600 sm:text-base dark:text-neutral-200">
          Hello, Im Drizzy. A dev from germany.
        </p>
        <div className="my-6 flex space-x-1">
          <div
            className="overflow-hidden pb-2"
            style={{ width: "fit-content" }}
          >
            <div
              className="text-xl font-bold lg:text-3xl xl:text-5xl"
              style={{ whiteSpace: "nowrap" }}
            >
              <div
                style={{
                  color: textColor,
                }}
              >
                <TypeAnimation
                  className="lg:text:3xl text-3xl  font-bold xl:text-5xl"
                  sequence={[
                    "Dashboard For ",
                    () => [],
                    "Sellix",
                    () => setTextColor("#6A3CE2"),
                  ]}
                />
              </div>
            </div>
          </div>
          <span
            className="block h-6 w-[4px] rounded-sm bg-blue-500 xl:h-12"
            style={{ opacity: 0 }}
          ></span>
        </div>
        <div className="flex gap-2">
          <Button as={Link} href="/dashboard" radius="sm">
            Dashboard
          </Button>
          <Button
            className="bg-[#6A3CE2]"
            as={Link}
            href="https://sellix.io"
            radius="sm"
          >
            Sellix
          </Button>
        </div>
      </Main>
    </section>
  );
}
