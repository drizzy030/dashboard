import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Main } from "~/app/_components/main";
import { HomePage } from "./home";

export default function Home() {
  return (
    <section>
      <div className="relative flex w-full items-center justify-center">
        <div className="fixed inset-x-0 top-2 z-50 mx-auto max-w-[15rem]">
          <nav className="boder shadow-input relative flex items-center justify-center space-x-2 rounded-full border border-black/[0.2] bg-white px-8 py-3 dark:border-white/[0.2] dark:bg-black ">
            <svg
              fill="#fff"
              height="20pt"
              viewBox=".5 -.2 1023 1024.1"
              width="20pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
            <svg
              width="20pt"
              height="20pt"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="512" height="512" rx="150" fill="#398CCB" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M255.446 75L326.523 116.008V138.556L412.554 188.238V273.224L435.631 286.546V368.608L364.6 409.615L333.065 391.378L256.392 435.646L180.178 391.634L149.085 409.615L78.0538 368.538V286.546L100.231 273.743V188.238L184.415 139.638L184.462 139.636V116.008L255.446 75ZM326.523 159.879V198.023L255.492 239.031L184.462 198.023V160.936L184.415 160.938L118.692 198.9V263.084L149.085 245.538L220.115 286.546V368.538L198.626 380.965L256.392 414.323L314.618 380.712L293.569 368.538V286.546L364.6 245.538L394.092 262.565V198.9L326.523 159.879ZM312.031 357.969V307.915L355.369 332.931V382.985L312.031 357.969ZM417.169 307.846L373.831 332.862V382.985L417.169 357.9V307.846ZM96.5154 357.9V307.846L139.854 332.862V382.915L96.5154 357.9ZM201.654 307.846L158.315 332.862V382.915L201.654 357.9V307.846ZM321.262 291.923L364.6 266.908L407.938 291.923L364.6 316.962L321.262 291.923ZM149.085 266.838L105.746 291.923L149.085 316.892L192.423 291.923L149.085 266.838ZM202.923 187.362V137.308L246.215 162.346V212.377L202.923 187.362ZM308.015 137.308L264.723 162.346V212.354L308.015 187.362V137.308ZM212.154 121.338L255.446 96.3231L298.785 121.338L255.446 146.354L212.154 121.338Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20pt"
              height="20pt"
              fill="none"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="#F4F2ED" rx="60" />
              <path
                fill="url(#paint0_linear_2_118)"
                fill-rule="evenodd"
                d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z"
                clip-rule="evenodd"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_118"
                  x1="86.5"
                  x2="163.5"
                  y1="74"
                  y2="185.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#32B1C1" />
                  <stop offset="1" stop-color="#14C6B7" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20pt"
              height="20pt"
              fill="none"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="#677EEB" rx="60" />
              <path
                fill="#F7FAFC"
                fill-rule="evenodd"
                d="M52.6582 165.183C50.7411 162.159 50.7122 158.307 52.5835 155.254L123.044 40.3196C126.963 33.927 136.426 34.4859 139.565 41.2954L203.934 180.926C206.322 186.107 203.573 192.203 198.108 193.843L97.9779 223.882C93.9492 225.09 89.6084 223.471 87.3564 219.918L52.6582 165.183ZM131.173 73.9256C131.852 70.5445 136.485 70.0569 137.853 73.2226L182.254 175.963C183.09 177.898 182.05 180.129 180.03 180.731L110.848 201.383C108.305 202.142 105.869 199.92 106.392 197.318L131.173 73.9256Z"
                clip-rule="evenodd"
              />
            </svg>
            <Image
              width="20"
              alt=""
              height="20"
              src="https://media.discordapp.net/attachments/1201233417090637976/1213947556275556403/logo-sm.png?ex=65f753c3&is=65e4dec3&hm=de2954af0bc7ed10a340096a98d8c19a9e7b2967c610e293436f3fa4eed0a798&=&format=webp&quality=lossless&width=317&height=350"
            />
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
              <HomePage />
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
            target="_blank"
            href="https://sellix.io"
            radius="sm"
          >
            Sellix
          </Button>
          <Button
            target="_blank"
            as={Link}
            href="https://github.com/drizzy030/dashboard"
            radius="sm"
          >
            Github
          </Button>
        </div>
      </Main>
    </section>
  );
}
