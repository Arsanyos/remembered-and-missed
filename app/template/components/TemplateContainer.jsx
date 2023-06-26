"use client";

import { useState } from "react";
import Image from "next/image";
//
import Divider from "@/app/components/Divider";
import Stories from "./NavContens/Stories";
import InnerSidebar from "./InnerSidebar";
const TemplateContainer = () => {
  const [navItem, setNavItem] = useState(0);
  const navItems = ["about", "life", "gallery", "stories", "admin"];
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="relative bg-[url('/images/demoTemplateHead.svg')] bg-cover bg-center h-[35%] mb-28">
        <div className="flex justify-between gap-2 absolute -bottom-10 left-10">
          <Image
            alt="deceased-pro-pic"
            src="/images/demoProfile.svg"
            className="rounded-full shrink-0"
            height={150}
            width={150}
          />
          <div className="flex flex-col items-start gap-1 self-end relative top-10">
            <div className="flex gap-4">
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
      <div className="h-[75%]">
      
      <div className="w-full flex flex-col justify-between">
        <ul className="w-[60%] flex justify-evenly items-center max-w-md text-gray-500 list-none list-inside uppercase dark:text-gray-400 mx-auto">
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
      <div className="flex gap-2">
        <div className="w-[75%]">
          {navItem === 0 ? (
            <>0</>
          ) : navItem === 1 ? (
            <>1</>
          ) : navItem === 2 ? (
            <>2</>
          ) : navItem === 3 ? (
            <Stories />
          ) : navItem === 4 ? (
            <>4</>
          ) : (
            <>Default</>
          )}
        </div>
        <InnerSidebar />
      </div>
      </div>
    </div>
  );
};
export default TemplateContainer;
