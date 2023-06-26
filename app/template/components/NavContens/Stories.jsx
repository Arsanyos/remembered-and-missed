"use client";
import Image from "next/image";
//
import Button from "@/app/components/Button";
import { BsShare } from "react-icons/bs";
const Stories = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto py-8">
      <div className="w-[80%] flex flex-col items-center gap-8">
        <div className="w-full h-[30%] shadow-customFigma rounded-[25px] flex items-center justify-center gap-6 py-6 px-4">
          <p className="uppercase text-[#5C5470] text-center text-[14px] font-[Montserrat] tracking-[1px] leading-[24px]">
            Share a special moment from Marina&apos;s life
          </p>
          <Button text="Write A Story" />
        </div>
        <div className="w-full shadow-customFigma rounded-[25px] flex flex-col items-center justify-center gap-6 py-4 px-6">
          <div className="relative w-full h-[380px]">
            <Image
              src="/images/MemorialPic.svg"
              alt="memorial-person-picture"
              fill
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="uppercase text-[#5C5470] text-[20px] font-[Lora] font-semibold leading-[46px]">
                Home is where the heart is
              </p>
              <p className="text-[#5C5470] text-[16px] font-[Montserrat] leading-[25px] ">
                24 May by Michael Bruns
              </p>
            </div>
            <p className="text-[#5C5470] text-[16px] font-[Montserrat] leading-[25px]">
              Marina visited us in Oregon the summer after her first grandchild
              was born. At that time she owned a condo in New Hampshire. What
              started as a two week visit never ended because while she was here
              she rented an apartment in Eugene. This was in 1995.
            </p>
            <div className="w-full flex justify-end">
              <Button
              width="100px"
                text={
                  <>
                    <BsShare /> Share
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
