import type { Metadata } from "next";
import { Manrope, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ClientLayout } from "@/components/layout/ClientLayout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kana Labs - Cryptocurrency Swap Interface",
  description: "Experience seamless cryptocurrency swapping with our advanced platform. Support for same-chain and cross-chain swaps with a modern, responsive interface.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/logo.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${urbanist.variable} antialiased font-manrope`}
      >
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
