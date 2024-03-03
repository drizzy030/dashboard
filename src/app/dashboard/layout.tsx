import { DashboardProvider } from "~/app/_components/dashboardProvider";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashboardProvider>{children}</DashboardProvider>
    </section>
  );
}
