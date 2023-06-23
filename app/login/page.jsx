import Image from "next/image";
import LoginComp from "./components/login";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        id="login-container"
        className="w-[100%] h-[30vw] mb-10 flex px-[10px] bg-[#5C5470]"
      ></div>
      <div className="flex justify-evenly relative bottom-[400px] w-[90%] ">
        <div
          id="second-login-half"
          className="rounded-[20px] w-[45%] bg-[#FFFFFF] "
        >
          <LoginComp />
        </div>
        <div className="flex flex-col items-start gap-6 w-[40%]">
          <p className="upperCase text-[35px] text-[#FFFFFF] font-normal font-[Lora] leading-[44.8px]">
            Welcome to the Family
          </p>
          <p className="uppercase text-[#FFFFFF] text-[20px] font-thin">
            we provide a shared, easily-accessible virtual space where family
            members and friends can pay homage to a special life while helping
            each other heal by sharing their feelings, warm memories, and words
            of support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
