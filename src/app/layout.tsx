"use client";

import "./globals.css";

import { AnimatePresence } from "framer-motion";

import localfont from "next/font/local";
import Link from "next/link";

const grotta = localfont({
  src: [
    {
      path: "../../assets/fonts/Grotta-Trial-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Grotta-Trial-Semibold.woff",
      weight: "600",
      style: "semi-bold",
    },
  ],
});

export const metadata = {
  title: "U. Sharma - folio",
  description: "Personal portfolio of Ujjwal Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={grotta.className}>
        <nav>
          <div className="container">
            <div className="nav-container">
              <Link href="/">U. Sharma</Link>
              <p className="menu-btn">Menu</p>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
