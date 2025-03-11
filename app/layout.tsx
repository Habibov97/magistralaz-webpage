import AOSProvider from "@/app/_components/AOSProvider/AosProvides";
import type { Metadata } from "next";
import { Goldman, Lato, Montserrat } from 'next/font/google';
import React from "react";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import HeroClient from "./_components/header/hero/HeroClient";
import Navbar from "./_components/header/navbar/Navbar";
import ScrollToTop from "./_ui/ScrollToTop";
import "./globals.css";


export const goldman = Goldman({ weight: '400', subsets: ['latin'], display:"swap" });
export const lato = Lato({ weight: '400', subsets: ['latin'], display:"swap" });
export const montserrat = Montserrat({ weight: '400', subsets: ['latin'], display:"swap" });


export const metadata: Metadata = {
  title: {
    default: "Magistral.az",
    template: "%s | Magistral.az",
  },
  description: "Azərbaycanın 1 nömrəli sürücülük kursu Magistral.az",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSProvider>
        <body className={`${montserrat.className} #antialiased`} cz-shortcut-listen="true">
          <div className={`${goldman.className}`}>
            <Navbar />
          </div>

          <Header>
            <HeroClient />
          </Header>
          
          <main>
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </body>
      </AOSProvider>
    </html>
  );
}
