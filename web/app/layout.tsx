import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header"
import Footer from "./footer";
import GoogleAnalytics from '../components/google-analytics';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NikYo Technology",
  description: "Help achieving business goals using technology",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

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
          <MantineProvider theme={theme}>
          {children}
          </MantineProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
