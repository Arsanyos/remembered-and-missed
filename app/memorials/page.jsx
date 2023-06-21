"use client";

import { Formik } from "formik";
import Image from "next/image";

const MemorialPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
  };
  const initialErrors = {
    firstName: null,
    lastName: null,
  };
  const formInputFields = [
    {
      label: "First Name",
      id: "firstName",
      type: "text",
    },
    {
      label: "Last Name",
      id: "lastName",
      type: "text",
    },
  ];

  const handleSubmit = () => {
    console.log("Values");
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center gap-6">
    <p className="font-Lora font-normal my-8 text-3xl md:text-4xl text-[#5C5470] leading-[45px] text-center">
      MY MEMORIALS
    </p>
    <div className="w-full md:w-4/5 h-auto shadow-customFigma rounded-[25px] mx-auto py-8 px-8">
      <p className="text-left text-2xl md:text-3xl text-[#5C5470] font-Lora leading-[45px] tracking-[0.2px]">
        CREATE A MEMORIAL
      </p>
      <Formik
        initialTouched={initialValues}
        initialErrors={initialErrors}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values, handleBlur, handleChange }) => (
          <form>
            <div className="flex flex-wrap items-end gap-4 sm:gap-8 px-4 sm:px-20 pt-8">
              {formInputFields.map((item, index) => {
                return (
                  <div className="w-full sm:w-auto min-w-[250px] grow" key={index}>
                    <label
                      htmlFor={item.id}
                      className="block text-[#5C5470] text-lg leading-[18px] font-normal"
                    >
                      {item.label}
                    </label>
                    <div className="relative mt-2 rounded-md w-full">
                      <input
                        type={item.type}
                        name={item.id}
                        id={item.id}
                        className="p-[0px 0px 0px 20.0463px] w-full h-[46px] bg-[#DEE2E6] rounded-[25px]"
                      />
                    </div>
                  </div>
                );
              })}
              <button className="text-white w-[176px] h-[46px] p-[5px] rounded-[25px] bg-[#5C5470]">
                Save
              </button>
            </div>
            <div className="px-4 sm:px-20 pt-8 flex flex-col gap-4">
              <p className="text-left text-xl md:text-2xl text-[#5C5470] font-Lora leading-[45px] tracking-[0.2px]">
                MY MEMORIALS
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="h-auto md:h-[40%] w-full sm:w-[90%] rounded-[25px] shadow-customFigma flex flex-wrap justify-start sm:justify-between py-4 px-4 sm:px-8">
                  <div className="flex gap-4">
                    <Image
                      src="/images/memoDemo.svg"
                      alt="memo-person-image"
                      height={100}
                      width={100}
                      className="rounded-10"
                    />
                    <div className="flex flex-col w-[50%] justify-center">
                      <p className="text-[#5C5470] text-lg md:text-xl leading-[45px] tracking-[0.2px] font-Lora font-normal">
                        MARINA
                      </p>
                      <p className="text-[#95959580] text-base md:text-lg leading-[40px] font-normal break-words">
                        maina.rememberedandmissed.com
                      </p>
                    </div>
                  </div>
                  <div className="w-min flex flex-col gap-4">
                    <button className="text-[#5C5470] w-[176px] h-[46px] p-[5px] rounded-[25px] border-solid border-2 border-[#5C5470] bg-transparent">
                      Upgrade Plan
                    </button>
                    <button className="text-white w-[176px] h-[46px] p-[5px] rounded-[25px] bg-[#5C5470]">
                      Delete Memorial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </div>
  
  );
};
export default MemorialPage;
