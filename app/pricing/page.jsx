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
    <div className="w-full h-[40vh] bg-[#5C5470]"></div>
    <div className="z-999 relative bottom-[150px] h-auto py-10 px-4 md:px-20 w-full md:w-4/5 rounded-[25px] shadow-lg bg-white flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 py-8 md:py-20 px-4 sm:px-10 md:px-20 flex flex-col items-center justify-center">
        <p className="text-xl md:text-3xl text-[#5C5470] text-center font-Lora">
          One Price, Endless Memories For Your
        </p>
        <p className="text-3xl md:text-4xl text-center">Loved Ones</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:w-full lg:w-11/12 h-auto rounded-[25px] bg-[#5C5470] py-8 md:py-12 px-4 md:px-8 flex flex-col items-center justify-center gap-2">
          <p className="font-Lora font-semibold text-lg md:text-2xl text-white text-center">
            Lifetime
          </p>
          <p className="font-Montserrat font-bold text-4xl md:text-6xl text-white text-center">
            $49.99
          </p>
          <p className="font-Montserrat font-bold text-base md:text-xl text-white text-center">
            Most Flexible
          </p>
          <div className="w-full my-1">
            <Divider />
          </div>
          <div className="flex flex-col gap-4 mt-4 w-11/12 sm:w-10/12 lg:w-9/12">
            {perks.map((item, index) => {
              return (
                <div key={index} className="flex gap-4">
                  <Image
                    src="/icons/Check.svg"
                    alt="green-check-icon"
                    height={15}
                    width={15}
                  />
                  <p className="font-Montserrat font-normal text-xs md:text-base text-white tracking-wide">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <button className="mt-5 mx-auto border-solid border-4 border-white bg-[#5C5470] shadow-customFigma rounded-[25px] drop-shadow-lg w-10/12 md:w-9/12 lg:w-8/12 h-14 md:h-16 flex justify-center items-center text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};
export default Pricing;
