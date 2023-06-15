"use client";

import "./styles/globals.css";
import { Inter } from "next/font/google";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Remembered & Missed",
//   description: "Preserve and share memories of your Loved Ones",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <TopBar />
        </nav>
        {children}
          <Footer />
      </body>
    </html>
  );
}
