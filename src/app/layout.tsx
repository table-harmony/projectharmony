import "./globals.css";
import { Rubik as FontSans } from "next/font/google";

import { Viewport } from "next";

import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ContextProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </ContextProvider>
        </body>
      </html>
    </>
  );
}
