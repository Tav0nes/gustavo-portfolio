import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Bastos | Software Developer",
  description: "Personal portfolio of Gustavo Bastos - a Software Developer from Brazil passionate about web technologies, React, Next.js, and TypeScript.",
  openGraph: {
    title: "Gustavo Bastos | Software Developer",
    description: "Personal portfolio of Gustavo Bastos - a Software Developer from Brazil passionate about web technologies, React, Next.js, and TypeScript.",
    url: "https://gustavo-portfolio.vercel.app/",
    siteName: "Gustavo Bastos Portfolio",
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
