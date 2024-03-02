"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { Layout } from "~/components/layout/layout";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function DashboardProvider({ children, themeProps }: ProvidersProps) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class" {...themeProps}>
      <Layout>{children}</Layout>
    </NextThemesProvider>
  );
}
