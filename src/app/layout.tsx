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
  themeColor: "#6A3CE2",
  description: "Made by drizzy",
  openGraph: {
    images:
      "https://media.discordapp.net/attachments/1201233417090637976/1213955173983195259/image.png?ex=65f75adb&is=65e4e5db&hm=6c74148197e80e6c33db50b0f393ade5ef6e8fffc549bec8967fa48a26d93bca&=&format=webp&quality=lossless",
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
