import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/contexts";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen w-full max-w-screen`}>
        <Providers>
          <Header />
          <main className="flex-grow bg-gray-50">
            {children}
            <div id="portal"></div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
