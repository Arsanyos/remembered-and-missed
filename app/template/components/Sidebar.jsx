"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkBoxValues = [
    "All",
    "Baby",
    "Birthday",
    "Miss you",
    "Veterans",
    "First Responders",
    "Holiday",
    "Mother's Day",
    "Military",
    "New",
    "Candles",
    "Flowers",
    "Hobbies",
    "Nature",
    "Family",
    "Special",
    "Abstract",
    "Fantasy",
  ];
  return (
    <div
      className={`${
        isMenuOpen ? "w-[25%]" : "w-[5%]"
      } lg:w-[25%] max-h-[100%] bg-transparent lg:bg-[#F5F5F5] flex flex-col gap-8 p-8 pt-1`}
    >
      <button
        className="lg:hidden block flex justify-start ml-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AiOutlineMenu />
      </button>
      <div
        className={`flex flex-col items-center mt-[48px] mx-auto ${
          isMenuOpen || "hidden"
        } lg:block`}
      >
        <p className="text-sm lg:text-[20px] text-[#5C5470] text-center font-[Lora] font-semibold leading-[45px] tracking-[0.2px] mb-[25px]">
          SELECT A TEMPLATE
        </p>
        <p className="text-xs lg:text-[18px] text-[#5C5470] mx-auto w-full lg:w-[60%] text-center font-[Montserrat] leading-[28px] mb-2">
          We have built 45+ templates for your
        </p>
        <p className="text-sm lg:text-[20px] text-[#5C5470] text-center uppercase">
          Loved Ones
        </p>
      </div>
      <div className={`h-[55%] p-2 ${isMenuOpen || "hidden"} lg:block`}>
        <p className="text-sm lg:text-[22px] h-auto text-[#5C5470] font-[Lora] font-semibold leading-[28px]">
          Category
        </p>
        <div className="mt-6 h-[95%] flex flex-col gap-2 flex-wrap">
          {checkBoxValues.map((item, index) => {
            return (
              <div
                key={index}
                className="h-auto flex max-w-fit items-center gap-2"
              >
                <input
                  id={item}
                  aria-describedby={{ item } + "check-box"}
                  name={item}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <p className="text-xs lg:text-[18px] text-[#5C5470] text-center leading-[28px] font-[Montserrat]">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
