import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import { createSeoMetadata, SeoJsonLd } from "@/components/seo";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--app-font-sans",
  subsets: ["latin"],
  display: "swap",
});

const googleSansCode = Google_Sans_Code({
  variable: "--app-font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createSeoMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${googleSans.variable} ${googleSansCode.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SeoJsonLd />
        {children}
      </body>
    </html>
  );
}
