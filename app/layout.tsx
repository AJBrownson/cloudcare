import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarContainer from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudcare",
  description: "Access your patient's data anytime, anywhere, wherever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
