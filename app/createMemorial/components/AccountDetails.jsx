import Image from "next/image";
import { BsExclamationCircleFill } from "react-icons/bs";
const AccountDetailComp = ({ curr }) => {
  return (
    <div
      style={{
        display: curr === 1 ? "block" : "none",
      }}
      id="login-container"
    >
      <div className="w-[100%] h-auto flex flex-wrap py-[35px] px-[10px] rounded-[25px] shadow-customFigma ">
        <div
          id="first-login-half"
          className="flex flex-col items-center justify-center gap-5 py-[100px] px-[30px]  w-[40%]"
        >
          <h3 className="text-center text-[#5C5470] text-[25px] leading-[32px] font-500">
            Sign in to proceed and create a memorial for your
          </h3>
          <p className="text-[#5C5470] text-center text-[30px] font-400">
            Loved ones
          </p>
          <Image src="/arrow.svg" width={100} height={20} alt="arrow-icon" />
        </div>
        <div id="second-login-half" className="w-[60%] p-10 ">
          <div className="shadow-customFigma rounded-[20px] p-10 flex flex-col gap-10 ">
            <div className="flex justify-between items-center">
              <h1 className="text-[35px] text-[#5C5470] leading-[44px] font-500 font-[Lora]">
                LOGIN
              </h1>
              <div className="flex flex-col">
                <span className="font-[Montserrat] text-[#5C5470] font-400 text-[18px]">
                  Create your account
                </span>
                <button className="flex items-center gap-2 font-[Montserrat] text-[#5C5470] font-extrabold text-[18px]">
                  Sign-up{" "}
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    alt="arrow-icon"
                  />{" "}
                </button>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-4 px-5 bg-[#DEE2E6] rounded-[30px] w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    defaultValue="adamwathan"
                    aria-invalid="true"
                    aria-describedby="email-error"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <BsExclamationCircleFill
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p
                  className="hidden mt-2 text-sm text-red-600"
                  id="email-error"
                >
                  Not a valid email address.
                </p>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-4 px-5 bg-[#DEE2E6] rounded-[30px] w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    defaultValue="adamwathan"
                    aria-invalid="true"
                    aria-describedby="password-error"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <BsExclamationCircleFill
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p
                  className="hidden mt-2 text-sm text-red-600"
                  id="password-error"
                >
                  Not a valid password.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-[18px] text-[#5C5470]"
                  >
                    Remember Me?
                  </label>{" "}
                </div>
              </div>
              <span className="text-[18px] text-[#5C5470]">
                Forgot password?
              </span>
            </div>
            <button className="text-white w-full bg-[#5C5470] p-[10px] rounded-[20px]">
              Login
            </button>
            <button className="text-white w-full bg-transparent border-[#5C5470] p-[10px] rounded-[20px]">
              asdasd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailComp;
