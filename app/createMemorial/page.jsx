"use client";
import { Formik, Form } from "formik";
import Stepper from "../contact/Stepper";
import { useState } from "react";
//form-indivual-components
import AboutComp from "./components/About";
import AccountDetailComp from "./components/AccountDetails";
import PricingPlanComp from "./components/Plan";
import PrivacyComp from "./components/Privacy";
//
const CreateMemorialPage = () => {
  const [curr, setCurr] = useState(0);
  const [errors, setErrors] = useState(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "Male",
    rship: "",
    designation: "",
    country: "",
    bod: "",
    bop: "",
    boc: "",
    passedDate: "",
    deathPlace: "",
    deathCountry: "",
    webAddress: "",
  };
  const initialErrors = {
    firstName: null,
    lastName: null,
    gender: null,
    rship: null,
    designation: null,
    country: null,
    bod: null,
    bop: null,
    boc: null,
    passedDate: null,
    deathPlace: null,
    deathCountry: null,
    webAddress: null,
  };

  const handleSubmit = () => {
    console.log("Values");
  };

  return (
    <div className="flex flex-col items-center h-auto overflow-x-hidden">
      <div className="w-[100vw] h-[25vh] flex justify-center items-center">
        <p className="font-[Lora] uppercase w-[45%] font-normal pt-8 text-[36px] text-[#5C5470] tracking-[0.2px] leading-[45px] text-center">
          Create a memorial website
        </p>
      </div>
      <Stepper curr={curr} setCurr={setCurr} />
      <div className="z-999 h-auto w-[80%] rounded-[25px] shadow-lg bg-[#FFFFFF] flex flex-wrap">
        <div className="w-[100%] py-[55px] px-[10px] flex flex-col">
          <Formik
            initialValues={initialValues}
            initialErrors={initialErrors}
            onSubmit={handleSubmit}
          >
            <Form>
              <AboutComp curr={curr} setErrors={setErrors} />
              <AccountDetailComp curr={curr} />
              <PricingPlanComp curr={curr} />
              <PrivacyComp curr={curr} />
              {curr === 0 && (
                <div className="flex items-center justify-end mt-8">
                  <button
                    type={curr === 3 ? "submit" : "button"}
                    onClick={() => {
                      setCurr(curr + 1);
                    }}
                    className="w-[260px] p-[10px] text-[#FFFFFF] bg-[#5C5470] rounded-[25px]"
                  >
                    Countniue
                  </button>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default CreateMemorialPage;
