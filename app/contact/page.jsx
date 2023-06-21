"use client";

import Divider from "../components/Divider";
import Image from "next/image";
import { Formik } from "formik";
const ContactPage = () => {
  const initialValues = {
    typeOfInquiry: "",
    email: "",
    name: "",
    memoName: "",
    message: "",
  };
  const initialErrors = {
    typeOfInquiry: null,
    email: null,
    name: null,
    memoName: null,
    message: null,
  };
  const formInputFields = [
    {
      label: "Type of Inquiry",
      id: "typeOfInquiry",
      type: "select",
    },
    {
      label: "Your Email",
      id: "email",
      type: "email",
    },
    {
      label: "Your Name",
      id: "name",
      type: "text",
    },
    {
      label: "Memorial Name",
      id: "memoName",
      type: "text",
    },
  ];

  const handleSubmit = () => {
    console.log("Values");
  };
  return (
    <div className="flex flex-col items-center h-auto">
  <div className="w-full flex justify-center items-start h-1/2 lg:h-[40vh] bg-[#5C5470]">
    <p className="font-[Lora] uppercase w-full sm:w-1/2 lg:w-[45%] font-normal pt-8 my-8 text-xl sm:text-2xl lg:text-[36px] text-white tracking-[0.2px] leading-7 sm:leading-9 lg:leading-[45px] text-center">
      Love to hear from you get in touch
    </p>
  </div>
  <div className="z-999 relative  lg:bottom-[90px] h-auto w-full sm:w-3/4 lg:w-[80%] rounded-[25px] shadow-lg bg-[#FFFFFF] flex flex-wrap">
    <div className="w-full py-8 lg:py-[55px] px-4 sm:px-8 lg:px-[50px] flex flex-col">
      <div>
        <p className="text-base sm:text-lg lg:text-[16px] text-[#5C5470] leading-5 sm:leading-6 lg:leading-[20px] tracking-[0.14px] font-[Montserrat]">
          Do you have any questions or ideas to improve this website? Please
          email us at <br />
          <a className="text-base sm:text-lg lg:text-[16px] text-[#5C5470] leading-5 sm:leading-6 lg:leading-[20px] tracking-[0.14px] font-bold font-[Montserrat]">
            support@rememberedandmissed.com
          </a>
        </p>
        <Formik
          initialTouched={initialValues}
          initialErrors={initialErrors}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, values, handleBlur, handleChange }) => (
            <form>
              <div className="flex flex-wrap items-end gap-8 pt-8">
                {formInputFields.map((item, index) => {
                  return (
                    <div className=" sm:min-w-[400px] flex-grow" key={index}>
                      <label
                        htmlFor={item.id}
                        className="block text-[#5C5470] text-lg lg:text-[18px] font-normal leading-4 lg:leading-[18px] flex gap-2"
                      >
                        {item.label}
                        {item.label === "Memorial Name" && (
                          <p className="italic">(if applies)</p>
                        )}
                      </label>
                      <div className="relative mt-2 rounded-md w-auto">
                        <input
                          type={item.type}
                          name={item.id}
                          id={item.id}
                          className="p-2 sm:p-[0px 0px 0px 20.0463px] w-full h-12 sm:h-[46px] bg-[#DEE2E6] rounded-[25px]"
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div className="w-full sm:w-[48%]">
                    <label
                      htmlFor="message"
                      className="block text-[#5C5470] text-lg lg:text-[18px] font-normal leading-4 lg:leading-[18px] flex gap-2"
                    >
                      Message
                    </label>
                    <div className="relative mt-2 rounded-md w-auto">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        className="p-2 sm:p-[0px 0px 0px 20.0463px] w-full h-40 sm:h-[300px] bg-[#DEE2E6] rounded-[25px]"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-[40%] flex justify-center items-center mt-4 sm:mt-0">
                    <div className="flex flex-col gap-1 w-4/5 sm:w-[80%]">
                      <p className="text-lg sm:text-xl lg:text-[23px] text-[#5C5470] leading-6 sm:leading-7 lg:leading-[26.4px] font-normal font-[Montserrat]">
                        Mail Address
                      </p>
                      <p className="text-sm sm:text-base lg:text-[16px] text-[#5C5470] leading-6 sm:leading-7 lg:leading-[24px] font-thin font-[Montserrat]">
                        Rememberedandmissed.com 817 Broadway 5th Floor, New
                        York, N.Y. 10003
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                  <button className="text-white w-full sm:w-[276px] h-12 sm:h-[46px] p-3 sm:p-[5px] rounded-[25px] bg-[#5C5470] rounded-[25px]">
                    Just Send
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
</div>

  );
};
export default ContactPage;
