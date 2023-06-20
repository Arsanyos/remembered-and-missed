import { Fragment } from "react";
import Image from "next/image";
const Stepper = ({ curr, setCurr }) => {
  const StepperValues = [
    "ABOUT YOUR LOVED ONE",
    "ACCOUNT DETAIL",
    "CHOOOSE YOUR PLAN",
    "PRIVACY OPTIONS",
  ];

  return (
    <div className="w-[80%] flex justify-evenly items-center">
      {StepperValues.map((item, index) => {
        return (
          <div
            className="flex gap-4 hover:cursor-pointer"
            onClick={() => {
              setCurr(index);
            }}
            key={index}
          >
            <p
              style={{
                color: curr === index ? "#5C5470" : "rgba(92, 84, 112, 0.3)",
              }}
              className="text-[19px]  font-[Montserrat] font-[600] leading-[20px] tracking-[0.2px]"
            >
              {item}
            </p>
            {index !== 3 && (
              <Image
                height={10}
                width={10}
                src="/icons/Right.svg"
                alt="right-facing-arrow"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Stepper;
