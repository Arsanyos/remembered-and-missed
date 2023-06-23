"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/navigation";
//
import "tailwindcss/tailwind.css";
import "./styles/styles.css";
//
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Loading from "./components/Loading";
//
import store from "@/lib/store";
import { checkCookie } from "@/lib/functions";
//

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Remembered & Missed",
//   description: "Preserve and share memories of your Loved Ones",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cookieExist = checkCookie("user");
    if (cookieExist) {
      setLoading(false);
      return;
    } else {
      router.push("/landing");
      setTimeout(() => {
        setLoading(false);
      }, [2000]);
    }
  }, [router]);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          {loading ? (
            <div className="w-[100%] h-[100vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden">
              <Loading height={12} width={12} />
            </div>
          ) : (
            children
          )}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
