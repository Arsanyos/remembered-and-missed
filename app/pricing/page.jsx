import Divider from "../components/Divider";
import Image from "next/image";
const Pricing = () => {
  const perks = [
    "Never Expires",
    "Unlimited Photos",
    "Video and Music Gallery",
    "Social Media Integration",
    "Illustrated Stories",
    "Custom Background Music",
    "Advanced Privacy Controls",
    "Additional Adminstrators",
    "Custom Notifications",
  ];
  return (
    <div className="flex flex-col items-center h-auto">
      <div className="w-[100vw] h-[40vh] bg-[#5C5470]"></div>
      <div className="z-999 relative bottom-[150px] h-auto py-20 w-[80%] rounded-[25px] shadow-lg bg-[#FFFFFF] flex flex-wrap justify-center">
        <div className="w-[100%] sm:w-[50%] py-[95px] px-[50px] flex flex-col items-center justify-center">
          <p className="text-[25px] text-[#5C5470] text-center font-Lora">
            One Price, Endless Memories For Your
          </p>
          <p className="text-[30px] text-center">Loved Ones</p>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[40%] flex justify-center items-center">
          <div className="w-[90%] md:w-[100%] h-auto rounded-[25px] bg-[#5C5470] py-[40px] flex flex-col items-center justify-center gap-2">
            <p className="font-[Lora] font-semibold text-[24px] text-center text-[#FFFFFF]">
              Lifetime
            </p>
            <p className="font-[Montserrat] font-bold text-[50px] text-[#FFFFFF] text-center">
              $49.99
            </p>
            <p className="font-[Montserrat] font-bold text-[14px] text-center text-[#FFFFFF]">
              Most Flexible
            </p>
            <div className="w-[100%] my-1">
              <Divider />
            </div>
            <div className="flex flex-col gap-4 mt-4 w-[55%]">
              {perks.map((item, index) => {
                return (
                  <div key={index} className="flex gap-4 ">
                    <Image
                      src="/icons/Check.svg"
                      alt="green-check-icon"
                      height={15}
                      width={15}
                    />
                    <p className="font-[Montserrat] font-normal text-[13px] text-[#FFFFFF] tracking-wide"  key={index}>{item}</p>
                  </div>
                );
              })}
            
            </div>
            <button className="mt-5 mx-auto border-solid border-4 border-[#FFFFFF] bg-[#5C5470] shadow-customFigma rounded-[25px] drop-shadow-lg  w-[223px] h-[52px] flex justify-center items-center text-[#FFFFFF]">
                GET STARTED
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
