import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header"
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NikYo Technology",
  description: "Helping with technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex flex-col px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
