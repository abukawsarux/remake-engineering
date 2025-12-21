import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import CursorFollower from "@/components/shared/CursorFollower";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"], // Merriweather available weights
});

export const metadata: Metadata = {
  title: "McCulloch Law P.A",
  description: "McCulloch Law P.A website",
  metadataBase: new URL("https://mccullochlawpa-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.className}>
      <body className="bg-white text-[#0B0C0E]">
        <Providers>
        <CursorFollower />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
