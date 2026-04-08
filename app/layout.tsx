import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AutoArbLAB | EC物販・せどり自動化ツール",
  description:
    "EC物販・せどりの利益を最大化する自動化ツールと実践ノウハウを提供する個人開発ラボ。Chrome拡張機能・noteの有料記事を販売中。",
  keywords: ["せどり", "物販", "Chrome拡張", "自動化", "価格比較", "楽天"],
  openGraph: {
    title: "AutoArbLAB | EC物販・せどり自動化ツール",
    description: "EC物販の作業を自動化するChrome拡張機能と実践ノウハウ。",
    siteName: "AutoArbLAB",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07070F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
