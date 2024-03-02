"use client";
import dynamic from "next/dynamic";

export function Chart() {
  const Chart = dynamic(
    () => import("~/components/charts/steam").then((mod) => mod.Steam),
    {
      ssr: false,
    },
  );
  return <Chart />;
}
