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
      <div className=" h-auto flex flex-wrap">
        <div
          id="first-login-half"
          className="flex flex-col items-center justify-center gap-5 py-8 px-4 sm:px-10 md:px-12 lg:w-1/2"
        >
          <h3 className="text-center text-[#5C5470] text-xl md:text-2xl lg:text-3xl leading-[32px] font-medium">
            Sign in to proceed and create a memorial for your
          </h3>
          <p className="text-[#5C5470] text-center text-2xl md:text-3xl lg:text-4xl font-normal">
            Loved ones
          </p>
          <Image src="/arrow.svg" width={100} height={20} alt="arrow-icon" />
        </div>
        <div id="second-login-half" className="w-[100%] lg:w-1/2 ">
          <div className="shadow-customFigma rounded-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 lg:gap-10">
            <div className="flex flex-wrap justify-between items-center">
              <h1 className="text-1xl md:text-2xl lg:text-3xl text-[#5C5470] leading-[44px] font-medium font-serif">
                LOGIN
              </h1>
              <div className="flex flex-col">
                <span className="font-medium text-[#5C5470] text-xl md:text-1xl lg:text-1xl">
                  Create your account
                </span>
                <button className="flex items-center gap-2 font-medium text-[#5C5470] text-xl md:text-2xl lg:text-3xl">
                  Sign-up{" "}
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    alt="arrow-icon"
                  />
                </button>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-4 px-5 bg-[#DEE2E6] rounded-md w-full border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-base md:text-lg lg:text-xl"
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
                  className="block text-sm md:text-base font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-4 px-5 bg-[#DEE2E6] rounded-md w-full border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-base md:text-lg lg:text-xl"
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
            <div className="flex flex-wrap justify-between items-center">
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
                    className="font-medium text-lg lg:text-xl text-[#5C5470]"
                  >
                    Remember Me?
                  </label>
                </div>
              </div>
              <span className="text-lg lg:text-xl text-[#5C5470]">
                Forgot password?
              </span>
            </div>
            <button className="text-white w-full bg-[#5C5470] p-2 rounded-lg text-xl md:text-2xl lg:text-3xl">
              Login
            </button>
            <button className="text-white w-full bg-transparent border-[#5C5470] p-2 rounded-lg text-xl md:text-2xl lg:text-3xl">
              asdasd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailComp;
