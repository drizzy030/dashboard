import "~/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { auth } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Drizzy",
  description: "Made by drizzy",
  openGraph: {
    images:
      "https://media.discordapp.net/attachments/1201233417090637976/1213954284966641714/image.png?ex=65f75a07&is=65e4e507&hm=e2d35f5b04dc8ba04e9c441fcdab9f6d7b86db5dcc0d73d637bf1db9555eb7ff&=&format=webp&quality=lossless&width=1320&height=671",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className="dark">
        <body className={`font-sans ${inter.variable} `}>
          <TRPCReactProvider>
            <Toaster />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
