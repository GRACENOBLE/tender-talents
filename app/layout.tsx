import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({ subsets: ["latin"] , weight:["300","400","500"]});

export const metadata: Metadata = {
  title: "Tender Talents Magnet School | Home",
  description:
    "Since 1999, Tender Talents Magnet School has cultivated a rich tradition of academic excellence and artistic exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " font-[300]"}>
        <Header/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}