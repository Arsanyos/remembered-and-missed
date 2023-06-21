"use client";

import { Formik } from "formik";

const AccountPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const initialErrors = {
    firstName: null,
    lastName: null,
    email: null,
    currentPassword: null,
    newPassword: null,
    confirmPassword: null,
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
    {
      label: "Email",
      id: "email",
      type: "email",
    },
  ];
  const secondHaldInputFields = [
    {
      label: "Current Password",
      id: "currentPassword",
      type: "password",
    },
    {
      label: "New Password",
      id: "newPassword",
      type: "password",
    },
    {
      label: "Confirm Password",
      id: "confirmPassword",
      type: "password",
    },
  ];
  const handleSubmit = () => {
    console.log("Values");
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center gap-6">
  <p className="font-[Lora] font-normal my-8 text-2xl sm:text-4xl lg:text-[35px] text-[#5C5470] leading-7 sm:leading-9 lg:leading-[45px] text-center">
    MY ACCOUNT
  </p>
  <div className="w-full sm:w-3/4 lg:w-[80%] h-auto shadow-customFigma rounded-[25px] mx-auto py-8 px-4 sm:px-8">
    <p className="text-left text-lg sm:text-xl lg:text-[25px] text-[#5C5470] font-[Lora] leading-7 sm:leading-9 lg:leading-[45px] tracking-[0.2px]">
      PERSONAL INFORMATION
    </p>
    <Formik
      initialTouched={initialValues}
      initialErrors={initialErrors}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, values, handleBlur, handleChange }) => (
        <form>
          <div className="flex flex-wrap gap-8 px-4 sm:px-20 pt-8">
            {formInputFields.map((item, index) => {
              return (
                <div className="sm:min-w-[300px] grow" key={index}>
                  <label
                    htmlFor={item.id}
                    className="block text-[#5C5470] text-base sm:text-[16px] font-normal leading-4 sm:leading-[18px]"
                  >
                    {item.label}
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
          </div>
          <div className="px-4 sm:px-20 pt-8 flex flex-col gap-4">
            <p className="text-left text-lg sm:text-xl lg:text-[22px] text-[#5C5470] font-[Lora] leading-7 sm:leading-9 lg:leading-[45px] tracking-[0.2px]">
              CHANGE PASSWORD
            </p>
            <div className="flex flex-wrap gap-8">
              {secondHaldInputFields.map((item, index) => {
                return (
                  <div className="w-full sm:w-[300px] grow" key={index}>
                    <label
                      htmlFor={item.id}
                      className="block text-[#5C5470] text-base sm:text-[16px] font-normal leading-4 sm:leading-[18px]"
                    >
                      {item.label}
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
            </div>
          </div>
          <div className="flex justify-end mt-8 px-4 sm:px-20">
            <button className="text-white w-full sm:w-[176px] p-3 sm:p-[5px] rounded-[25px] bg-[#5C5470]">
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
</div>

  );
};
export default AccountPage;
