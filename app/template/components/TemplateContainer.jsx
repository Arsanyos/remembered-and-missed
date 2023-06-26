"use client";

import { useState } from "react";
import Image from "next/image";
//
import Divider from "@/app/components/Divider";
import Stories from "./NavContens/Stories";
import Visitors from "./NavContens/Visitors";
import Privacy from "./NavContens/Privacy";
import MusicComp from "./NavContens/Music";
import About from "./NavContens/About";
//
import InnerSidebar from "./InnerSidebar";
const TemplateContainer = () => {
  const [navItem, setNavItem] = useState(0);
  const navItems = ["about", "life", "gallery", "stories", "admin"];
  return (
    <div className="w-[100%] h-[100%] flex flex-col ">
      <div className="bg-[url('/images/demoTemplateHead.svg')] bg-cover bg-center h-[200px] w-[100%] mb-24">
        <div className="flex justify-between gap-2 w-[42%] relative top-24 left-12">
          <Image
            alt="deceased-pro-pic"
            src="/images/demoProfile.svg"
            className="rounded-full shrink-0"
            height={150}
            width={150}
          />
          <div className="flex flex-col justify-end gap-1 relative top-8">
            <div className="flex gap-4 relative">
              <p className="text-[#5C5470] text-[30px] font-[Lora] font-semibold leading-[32px]">
                MARINA BURNS
              </p>
              <Image
                alt="deceased-pro-pic"
                src="/icons/Speaker.svg"
                className="rounded-[10px]"
                height={20}
                width={20}
              />
            </div>
            <p className="text-[#5C5470] text-[24px] font-[Lora] leading-[32px]">
              1958 - 2020
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex flex-col justify-between">
        <ul className="flex justify-center gap-12 items-center text-gray-500 list-none list-inside uppercase dark:text-gray-400">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`text-[#5C5470] text-[16px] text-center font-[Montserrat] ${
                  navItem === index ? `border-indigo-500` : `border-transparent`
                }`}
                onClick={() => {
                  setNavItem(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <Divider />
      </div>
      <div className="flex gap-2 mt-10">
        <div className="w-[75%] flex justify-center">
          {navItem === 0 ? (
            <About />
          ) : navItem === 1 ? (
            <>1</>
          ) : navItem === 2 ? (
            <Privacy />
          ) : navItem === 3 ? (
            <Stories />
          ) : navItem === 4 ? (
            <MusicComp />
          ) : (
            <>Default</>
          )}
        </div>
        <InnerSidebar />
      </div>
    </div>
  );
};
export default TemplateContainer;
