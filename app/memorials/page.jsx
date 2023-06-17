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
    <div className="w-[100%] h-auto flex flex-col justify-center gap-6">
      <p className="font-[Lora] font-normal my-8 text-[35px] text-[#5C5470] leading-[45px] text-center">
        MY MEMORIALS
      </p>
      <div className="w-[80%] h-[70%] shadow-customFigma rounded-[25px] mx-auto py-8 px-8">
        <p className="text-left text-[25px] text-[#5C5470] font-[Lora] leading-[45px] tracking-[0.2px]">
          CREATE A MEMORIAL
        </p>
        <Formik
          initialTouched={initialValues}
          initialErrors={initialErrors}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, values, handleBlur, handleChange }) => (
            <form>
              <div className="flex flex-wrap items-end gap-8 px-20 pt-8">
                {formInputFields.map((item, index) => {
                  return (
                    <div className="min-w-[300px] grow" key={index}>
                      <label
                        htmlFor={item.id}
                        className="block text-[#5C5470] text-[16px] font-normal leading-[18px]"
                      >
                        {item.label}
                      </label>
                      <div className="relative mt-2 rounded-md w-auto">
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
                <button className="text-white w-[176px] h-[46px] p-[5px] rounded-[25px] bg-[#5C5470] rounded-[25px]">
                  Save
                </button>
              </div>
              <div className="px-20 pt-8 flex flex-col gap-4">
                <p className="text-left text-[22px] text-[#5C5470] font-[Lora] leading-[45px] tracking-[0.2px]">
                  MY MEMORIALS
                </p>
                <div className="flex flex-col items-center gap-8">
                  <div className="h-[40%] w-[90%] rounded-[25px] shadow-customFigma flex justify-between  py-4 px-8">
                    <div className="flex gap-8">
                      <Image
                        src="/images/memoDemo.svg"
                        alt="memo-person-image"
                        height={100}
                        width={100}
                        style={{
                          borderRadius: "10px",
                        }}
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-[#5C5470] text-[20px] leading-[45px] tracking-[0.2px] font-[Lora] font-normal">
                          MARINA
                        </p>
                        <p className="text-[#95959580] text-[18px] leading-[40px] font-normal">
                          maina.rememberedandmissed.com
                        </p>
                      </div>
                    </div>
                    <div className="w-min flex flex-col gap-4">
                      <button className="text-[#5C5470] w-[176px] h-[46px] p-[5px] rounded-[25px] border-solid border-2 border-[#5C5470] bg-transparent rounded-[25px]">
                        Upgrade Plan
                      </button>
                      <button className="text-white w-[176px] h-[46px] p-[5px] rounded-[25px] bg-[#5C5470] rounded-[25px]">
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
