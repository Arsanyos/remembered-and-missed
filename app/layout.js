import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Remembered & Missed",
  description: "Preserve and share memories of your Loved Ones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>AAAAAAAAA</>
        {children}
      </body>
    </html>
  );
}
