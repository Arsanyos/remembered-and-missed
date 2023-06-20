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
      <div className="w-[100vw] flex justify-center items-start h-[40vh] bg-[#5C5470]">
        <p className="font-[Lora] uppercase w-[45%] font-normal pt-8 my-8 text-[36px] text-white tracking-[0.2px] leading-[45px] text-center">
          Love to hear from you get in touch
        </p>
      </div>
      <div className="z-999 relative bottom-[90px] h-auto w-[80%] rounded-[25px] shadow-lg bg-[#FFFFFF] flex flex-wrap">
        <div className="w-[100%] py-[55px] px-[50px] flex flex-col">
          <div>
            <p className="text-[16px] text-[#5C5470] leading-[20px] tracking-[0.14px] font-[Montserrat]">
              Do you have any questions or ideas to improve this website? Please
              email us at <br />
              <a className="text-[16px] text-[#5C5470] leading-[20px] tracking-[0.14px] font-bold font-[Montserrat]">
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
                        <div className="min-w-[400px] grow" key={index}>
                          <label
                            htmlFor={item.id}
                            className="block text-[#5C5470] text-[18px] font-normal leading-[18px] flex gap-2"
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
                              className="p-[0px 0px 0px 20.0463px] w-full h-[46px] bg-[#DEE2E6] rounded-[25px]"
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex justify-between w-[100%]">
                      <div className="w-[48%]">
                        <label
                          htmlFor="message"
                          className="block text-[#5C5470] text-[18px] font-normal leading-[18px] flex gap-2"
                        >
                          Message
                        </label>
                        <div className="relative mt-2 rounded-md w-auto">
                          <input
                            type="text"
                            name="message"
                            id="message"
                            className="p-[0px 0px 0px 20.0463px] w-full h-[300px] bg-[#DEE2E6] rounded-[25px]"
                          />
                        </div>
                      </div>
                      <div className="w-[40%] flex justify-center items-center">
                        <div className="flex flex-col gap-1 w-[80%]">
                          <p className="text-[23px] text-[#5C5470] leading-[26.4px] font-normal font-[Montserrat]">
                            Mail Address
                          </p>
                          <p className="text-[16px] text-[#5C5470] leading-[24px] font-thin font-[Montserrat]">
                            Remeberedandmissed.com 817 Broadway 5th Floor, New
                            York, N.Y. 10003
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-[100%]">
                      <button className="text-white w-[276px] h-[46px] p-[5px] rounded-[25px] bg-[#5C5470] rounded-[25px]">
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
