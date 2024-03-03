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
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
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
