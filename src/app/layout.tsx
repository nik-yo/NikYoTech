import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header"
import Footer from "./footer";
import GoogleAnalytics from '../components/google-analytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NikYo Technology",
  description: "Help achieving business goals using technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex flex-col grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
